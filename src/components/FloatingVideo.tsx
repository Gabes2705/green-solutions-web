"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let clockOrigin = performance.now();
    const keepPlaying = () => {
      const video = videoRef.current;
      if (!video || document.visibilityState !== "visible" || !video.duration) return;
      if (video.paused) void video.play().catch(() => undefined);
      const expected = ((performance.now() - clockOrigin) / 1000) % video.duration;
      const drift = Math.min(Math.abs(video.currentTime - expected), video.duration - Math.abs(video.currentTime - expected));
      if (drift > 0.9) video.currentTime = expected;
    };
    const initialiseClock = () => {
      const video = videoRef.current;
      if (video) clockOrigin = performance.now() - video.currentTime * 1000;
      keepPlaying();
    };
    const video = videoRef.current;
    video?.addEventListener("loadedmetadata", initialiseClock);
    const timer = window.setInterval(keepPlaying, 500);
    return () => {
      video?.removeEventListener("loadedmetadata", initialiseClock);
      window.clearInterval(timer);
    };
  }, []);

  if (dismissed) return null;

  // Anchored to the cover rather than the viewport: it holds its place while
  // the cover is on screen and is carried away as the page scrolls past it.
  // Sits on the left, vertically centred, matching the cover artwork.
  return (
    <div className="film-anchor">
      {/* Square corners on purpose: rounding a video makes the browser mask
          every frame, which takes it off the hardware overlay path.
          58vh caps the square on a short window, so it cannot reach down into
          the row of links along the foot of the cover. */}
      <div
        className="film-screen"
      >
        <video
          ref={videoRef}
          src="/videos/film-hero-compatible.mp4"
          poster="/images/film-hero-poster.jpg"
          aria-label="Film agronomique Green Solutions — 33 secondes"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
        />

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fermer la vidéo"
          className="film-close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
