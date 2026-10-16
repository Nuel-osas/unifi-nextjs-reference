# Unifi — local Next.js reference

An editable Next.js migration of the public homepage at https://unifi.baunfire.com/,
using the frontend captured with D-j-View on October 16, 2026. This is the Unifi
reference itself, with its original content and appearance, in a separate project
from Setsuna. This is an unofficial frontend reference and is not affiliated with
Unifi or Baunfire.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, stop the development server,
then run `npm run build` and `npm start`. Both use port 3000 and bind to the local
computer. Node 22 or newer is required.

## Edit

- `src/app/page.tsx` composes the homepage.
- `src/components/sections/` contains ten ordinary TSX components: Hero, Vision,
  GridRoom, History, HexagonTiles, Future, FutureSlider, Partnerships, Community,
  and Footer. No iframe or HTML-string wrapper is used.
- `src/styles/` contains the captured styles and `migration.css` for the Next.js
  lifecycle and reduced-motion adaptations.
- `public/assets/` contains the captured images, fonts, video and Lottie JSON.
- `public/unifi-runtime.js` contains the adapted source animations, with explicit
  initialization and disposal.
- `src/components/SiteRuntime.tsx` loads local vendor scripts after hydration and
  font loading, and handles cleanup and motion-preference changes.

## Animation dependencies and adaptations

The local reference retains the source's jQuery 3.6, GSAP 3.10.4, CustomEase,
ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin, Lottie 5.9.6 and Swiper 8
runtimes. Their files and existing license headers are in `public/vendor/`.
Original artwork and fonts retain their original ownership and licenses.

Barba page replacement has been removed in favor of Next.js rendering. The page
is one route. Images already have local source URLs, so the original lazy-loader
is unnecessary. Animation teardown removes timers, events, scroll pins, text
splits, Lottie instances and slider instances before remounting. Reduced motion
uses a static layout while preserving slider navigation.

The original Get in touch control is now a real anchor with an accessible name.
Slider arrows support keyboard activation; touch dragging is enabled. The capture
initially omitted seven Lottie JSON files; those were retrieved from their source
paths before conversion. All rendered asset dependencies are local.

External ecosystem, social, careers and newsletter links still point to Unifi's
original services. Those applications, accounts, contact systems and backend
services have not been recreated. This repository provides the frontend reference
for local use; it does not deploy or recreate those services.

## Validation

```sh
npm run typecheck
npm run build
npm run check:browser
```

The browser check expects the preview at http://127.0.0.1:3000. Override with
`REVIEW_URL`. Chrome is discovered at its standard macOS path; use `CHROME_PATH`
on another machine.

Checks cover the product slider, year pagination, About carousel, keyboard
controls, contact anchor, motion-preference teardown/remount, and mobile layouts.
External asset requests are blocked during the local browser check.

Source/local screenshots were compared at 1440×1000 and 390×1000 for the hero,
vision, future and partnerships sections. Hero geometry and computed typography
matched at both widths. Videos were paused at the same timestamp for comparison;
other scroll and entrance animations were allowed to settle. These comparisons
cover the inspected states, not a claim that every animation frame is identical.

Local-only screenshots and machine reports are stored under `.local/`.
