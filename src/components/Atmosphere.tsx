"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#A8D14A", "#1D8A96", "#ECF5EC"];

export default function Atmosphere() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    // Each spore animates on its own layer, competing with the cover video
    // for compositing time; they are faint enough that halving the count on
    // desktop is not noticeable.
    const n = window.innerWidth < 640 ? 6 : 8;
    const nodes: HTMLDivElement[] = [];

    for (let i = 0; i < n; i++) {
      const s = document.createElement("div");
      s.className = "spore";
      const size = 2 + Math.random() * 4;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.background = COLORS[i % COLORS.length];
      s.style.setProperty("--drift", `${Math.random() * 60 - 30}px`);
      s.style.setProperty("--peak", (0.25 + Math.random() * 0.35).toFixed(2));
      const dur = 16 + Math.random() * 14;
      s.style.animationDuration = `${dur}s`;
      s.style.animationDelay = `${-Math.random() * dur}s`;
      el.appendChild(s);
      nodes.push(s);
    }

    return () => {
      nodes.forEach((n) => n.remove());
    };
  }, []);

  return <div className="atmosphere" ref={ref} />;
}
