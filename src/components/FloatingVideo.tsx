"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const keepPlaying = () => {
      if (!document.hidden && video.paused) {
        void video.play().catch(() => undefined);
      }
    };

    keepPlaying();
    video.addEventListener("canplay", keepPlaying);
    video.addEventListener("pause", keepPlaying);
    document.addEventListener("visibilitychange", keepPlaying);
    const timer = window.setInterval(keepPlaying, 1000);

    return () => {
      video.removeEventListener("canplay", keepPlaying);
      video.removeEventListener("pause", keepPlaying);
      document.removeEventListener("visibilitychange", keepPlaying);
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
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Film agronomique Green Solutions"
        >
          <source src="/videos/film-hero-runway-33s.mp4" type="video/mp4" />
        </video>

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
