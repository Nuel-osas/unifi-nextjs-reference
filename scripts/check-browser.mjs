import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";
const base = process.env.REVIEW_URL || "http://127.0.0.1:3000";
const output = ".local/review";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const checks = [],
  errors = [],
  missing = [],
  external = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on("pageerror", (e) => errors.push(e.message));
page.on("response", (r) => {
  if (r.status() >= 400) missing.push({ url: r.url(), status: r.status() });
});
await page.route("**/*", (route) => {
  const u = new URL(route.request().url());
  if (
    ["http:", "https:"].includes(u.protocol) &&
    u.origin !== new URL(base).origin
  ) {
    external.push(u.href);
    return route.abort();
  }
  return route.continue();
});
try {
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => document.documentElement.dataset.unifiReady === "true",
  );
  assert.equal(await page.locator("h1").count(), 1);
  assert.match(await page.locator("h1").innerText(), /Blockchain Solutions/);
  await page.screenshot({ path: `${output}/desktop-hero.png` });
  checks.push(
    "Homepage hydrates with local fonts, imagery, videos, Lottie and animation vendors.",
  );
  const cards = page.locator(".slider-cards");
  await cards.locator(".swiper-btn-next").click();
  await page.waitForFunction(
    () =>
      document.querySelector(".swiper-container-cards").swiper.realIndex === 1,
  );
  await page.waitForTimeout(1300);
  assert.match(
    await cards.locator(".swiper-slide-active h2").innerText(),
    /Wrapperless\s+Bridge/,
  );
  await cards.locator(".swiper-btn-prev").focus();
  await page.keyboard.press("Enter");
  await page.waitForFunction(
    () =>
      document.querySelector(".swiper-container-cards").swiper.realIndex === 0,
  );
  await cards.locator(".swiper-pagination-bullet").nth(2).click();
  await page.waitForFunction(
    () =>
      document.querySelector(".swiper-container-cards").swiper.realIndex === 2,
  );
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${output}/desktop-products.png` });
  checks.push(
    "Product slider next/previous, keyboard activation and category pagination work.",
  );
  await page
    .locator(".slider-timeline .swiper-pagination-bullet")
    .filter({ hasText: "2021" })
    .click();
  await page.waitForFunction(
    () =>
      document.querySelector(".swiper-container-timeline").swiper.realIndex ===
      3,
  );
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${output}/desktop-history.png` });
  checks.push("History year pagination selects the matching timeline slide.");
  await page.locator(".slider-future .swiper-btn-next").click();
  await page.waitForFunction(
    () =>
      document.querySelector(".swiper-container-future").swiper.realIndex === 1,
  );
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${output}/desktop-about.png` });
  checks.push("About carousel advances and updates its current slide.");
  await page.evaluate(() => window.ScrollSmoother.get().scrollTo(0, false));
  await page.waitForTimeout(250);
  await page.getByRole("link", { name: "Get in touch", exact: true }).click();
  await page.waitForTimeout(2100);
  assert.equal(
    await page.locator("#target-connect").evaluate((el) => {
      const r = el.getBoundingClientRect();
      return r.top < innerHeight && r.bottom > 0;
    }),
    true,
  );
  await page.screenshot({ path: `${output}/desktop-contact.png` });
  checks.push(
    "Get in touch scrolls to the community section without sending a request.",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(() =>
    document.documentElement.classList.contains("unifi-reduced"),
  );
  assert.equal(await page.locator(".pin-spacer").count(), 0);
  assert.equal(await page.locator(".loading-container").isVisible(), false);
  assert.equal(
    await page
      .locator(".swiper-container-cards .swiper-slide-duplicate")
      .count(),
    2,
  );
  await page.locator(".slider-future .swiper-btn-next").click();
  const reducedIndex = await page.evaluate(
    () => document.querySelector(".swiper-container-future").swiper.realIndex,
  );
  await page.mouse.move(0, 0);
  await page.waitForTimeout(6000);
  assert.equal(
    await page.evaluate(
      () => document.querySelector(".swiper-container-future").swiper.realIndex,
    ),
    reducedIndex,
    "Reduced-motion carousels must not auto-advance after interaction",
  );
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: `${output}/reduced-motion.png` });
  checks.push(
    "Changing motion preferences tears down scroll pins and reconstructs interactive sliders without duplicate initialization.",
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.waitForFunction(
    () => document.documentElement.dataset.unifiReady === "true",
  );
  assert.equal(
    await page
      .locator(".swiper-container-cards .swiper-slide-duplicate")
      .count(),
    2,
  );
  checks.push("Normal motion can be restored after cleanup.");
  for (const width of [390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForFunction(
      () => document.documentElement.dataset.unifiReady === "true",
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      ),
      false,
      `overflow at ${width}`,
    );
    await page.screenshot({ path: `${output}/mobile-${width}.png` });
  }
  assert.deepEqual(errors, [], "Runtime errors");
  assert.deepEqual(missing, [], "Missing dependencies");
  assert.deepEqual(external, [], "Uncaptured network dependencies");
  checks.push(
    "390px and 768px layouts load without horizontal overflow; no page errors, missing assets or external asset requests.",
  );
  await writeFile(
    `${output}/checks.json`,
    JSON.stringify({ base, checks, errors, missing, external }, null, 2),
  );
  console.log(JSON.stringify({ checks, errors, missing, external }, null, 2));
} finally {
  await browser.close();
}
