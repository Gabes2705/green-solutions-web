"use client";

import { useState } from "react";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);
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
          poster="/images/film-hero-poster.jpg"
          aria-label="Film agronomique Green Solutions — 33 secondes"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/film-hero.webm" type="video/webm; codecs=vp9" />
          <source src="/videos/film-hero-compatible.mp4" type="video/mp4" />
          Votre navigateur ne peut pas lire ce film.
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
