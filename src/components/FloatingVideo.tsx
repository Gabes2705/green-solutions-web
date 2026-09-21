"use client";

import { useState } from "react";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="film-anchor">
      <div className="film-screen">
        <video
          src="/videos/film-hero-compatible.mp4"
          poster="/images/film-hero-poster.jpg"
          aria-label="Film agronomique Green Solutions — 33 secondes"
          autoPlay
          muted
          loop
          playsInline
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
