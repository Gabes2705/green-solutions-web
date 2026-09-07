"use client";

import { useEffect } from "react";

/**
 * In-page anchor navigation that actually lands on its target.
 *
 * Native smooth scrolling doesn't survive this page: it picks its destination
 * once at click time, and the WebGL render loop plus late-decoding images
 * either starve the animation or shift the target under it. So the scroll is
 * driven here instead, re-measuring the destination on every frame.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    const OFFSET = 84; // fixed header height
    const DURATION = 750;
    let raf = 0;

    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function targetFor(el: HTMLElement) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      return Math.max(0, Math.min(top, max));
    }

    function glideTo(el: HTMLElement) {
      cancelAnimationFrame(raf);

      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";

      const start = window.scrollY;
      const startedAt = performance.now();

      // if frames never come (hidden tab, suspended renderer) don't leave the
      // visitor stranded at the top: jump straight to the anchor instead
      let started = false;
      const fallback = window.setTimeout(() => {
        if (started) return;
        cancelAnimationFrame(raf);
        window.scrollTo(0, targetFor(el));
        root.style.scrollBehavior = previous;
      }, 250);

      const step = (now: number) => {
        started = true;
        window.clearTimeout(fallback);
        const progress = Math.min((now - startedAt) / DURATION, 1);
        // re-measure every frame: images below the fold are still settling
        const end = targetFor(el);
        window.scrollTo(0, start + (end - start) * easeInOut(progress));

        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetFor(el));
          root.style.scrollBehavior = previous;
        }
      };

      raf = requestAnimationFrame(step);
    }

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      history.pushState(null, "", `#${id}`);

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        window.scrollTo(0, targetFor(el));
        return;
      }

      glideTo(el);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
