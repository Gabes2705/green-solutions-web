"use client";

import { useEffect, useState } from "react";

/**
 * Temporary read-out, shown only when the URL carries ?diag=1.
 *
 * The stutter could not be reproduced from here, and guessing at it has
 * failed repeatedly, so this reports the two numbers that tell the two
 * candidate causes apart:
 *
 *   - dropped frames high  -> the browser cannot composite in time
 *   - dropped frames ~zero -> the clip itself lurches, and no amount of
 *                             rendering work will smooth it
 */
export default function VideoDiagnostic() {
  const [on, setOn] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("diag")) return;
    setOn(true);

    let frames = 0;
    let last = performance.now();
    let fps = 0;
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      frames++;
      const now = performance.now();
      if (now - last >= 1000) {
        fps = Math.round((frames * 1000) / (now - last));
        frames = 0;
        last = now;
      }
    };
    raf = requestAnimationFrame(tick);

    const timer = window.setInterval(() => {
      const v = document.querySelector<HTMLVideoElement>("video[aria-label]");
      if (!v) {
        setLines(["video introuvable"]);
        return;
      }

      const q = v.getVideoPlaybackQuality?.();
      const total = q?.totalVideoFrames ?? 0;
      const dropped = q?.droppedVideoFrames ?? 0;
      const pct = total ? ((dropped / total) * 100).toFixed(1) : "0.0";

      setLines([
        `page : ${fps} images/s`,
        `video : ${v.paused ? "EN PAUSE" : "en lecture"}  t=${v.currentTime.toFixed(1)}s`,
        `images affichees : ${total}`,
        `images PERDUES : ${dropped}  (${pct} %)`,
        `taille affichee : ${Math.round(v.getBoundingClientRect().width)}px`,
      ]);
    }, 500);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 90,
        right: 16,
        zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        color: "#c8f5c0",
        font: "13px/1.6 ui-monospace, monospace",
        padding: "12px 16px",
        borderRadius: 8,
        pointerEvents: "none",
        whiteSpace: "pre",
      }}
    >
      {lines.join("\n") || "mesure en cours..."}
    </div>
  );
}
