"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    function onMove(e: PointerEvent) {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    }

    function tick() {
      raf = requestAnimationFrame(tick);
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;
      if (el) {
        el.style.transform = `translate3d(${curX * -8}px, ${curY * -6}px, 0)`;
      }
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="content" ref={ref}>
      {children}
    </div>
  );
}
