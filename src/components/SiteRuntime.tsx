"use client";

import { useLayoutEffect, useState } from "react";

type ReferenceWindow = Window & { UnifiReference?: { mount(): () => void } };
const scripts = [
  "/vendor/jquery.js",
  "/vendor/gsap.js",
  "/vendor/CustomEase.js",
  "/vendor/lottie.js",
  "/vendor/swiper.js",
  "/vendor/ScrollTrigger.js",
  "/vendor/ScrollSmoother.js",
  "/vendor/SplitText.js",
  "/vendor/ScrollToPlugin.js",
  "/unifi-runtime.js",
];
const loaded = new Map<string, Promise<void>>();
function loadScript(src: string) {
  let promise = loaded.get(src);
  if (!promise) {
    promise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => {
        loaded.delete(src);
        script.remove();
        reject(new Error(`Could not load ${src}`));
      };
      document.head.appendChild(script);
    });
    loaded.set(src, promise);
  }
  return promise;
}

export default function SiteRuntime() {
  const [failed, setFailed] = useState(false);
  useLayoutEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const mount = () => {
      if (cancelled) return;
      dispose?.();
      try {
        dispose = (window as ReferenceWindow).UnifiReference?.mount();
      } catch (error) {
        console.error("Unifi animation initialization failed", error);
        setFailed(true);
      }
    };
    void (async () => {
      try {
        for (const src of scripts) {
          if (cancelled) return;
          await loadScript(src);
        }
        await document.fonts.ready;
        if (cancelled) return;
        mount();
        preference.addEventListener("change", mount);
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          setFailed(true);
        }
      }
    })();
    return () => {
      cancelled = true;
      preference.removeEventListener("change", mount);
      dispose?.();
    };
  }, []);
  return failed ? (
    <aside role="status" className="reference-error">
      Animation assets could not load. The page remains available; refresh to
      retry.
    </aside>
  ) : null;
}
