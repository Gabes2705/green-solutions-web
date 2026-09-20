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
        {/* Le GIF animé garantit la lecture complète, y compris sur les
            navigateurs qui interrompaient les versions MP4 et AVIF. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/film-hero-runway-33s.gif"
          alt="Film agronomique Green Solutions"
          decoding="async"
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
