"use client";

import { useState } from "react";
import SpritePlayer from "./SpritePlayer";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="film-anchor">
      <div className="film-screen">
        <SpritePlayer
          src="/images/hero-film-sprite.jpg"
          columns={12}
          frameCount={132}
          frameWidth={300}
          frameHeight={169}
          duration={33}
          label="Film agronomique Green Solutions — 33 secondes"
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
