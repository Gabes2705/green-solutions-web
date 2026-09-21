"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const play = () => {
      const video = videoRef.current;
      if (!video || document.visibilityState === "hidden") return;
      video.muted = true;
      void video.play().catch(() => undefined);
    };
    play();
    document.addEventListener("visibilitychange", play);
    window.addEventListener("pageshow", play);
    window.addEventListener("pointerdown", play, { passive: true });
    window.addEventListener("touchstart", play, { passive: true });
    return () => {
      document.removeEventListener("visibilitychange", play);
      window.removeEventListener("pageshow", play);
      window.removeEventListener("pointerdown", play);
      window.removeEventListener("touchstart", play);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div className="film-anchor">
      <div className="film-screen">
        <video
          ref={videoRef}
          src="/videos/film-hero-runway-33s.mp4"
          poster="/images/film-hero-poster.jpg"
          aria-label="Film agronomique Green Solutions — 33 secondes"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          onLoadedData={(event) => {
            event.currentTarget.muted = true;
            void event.currentTarget.play().catch(() => undefined);
          }}
          onCanPlay={(event) => {
            event.currentTarget.muted = true;
            void event.currentTarget.play().catch(() => undefined);
          }}
          onClick={(event) => {
            event.currentTarget.muted = true;
            void event.currentTarget.play().catch(() => undefined);
          }}
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
