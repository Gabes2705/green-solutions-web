"use client";

import { useState } from "react";

export default function FloatingVideo() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  // The clip runs at its own speed: it was re-timed and encoded at 12s/60fps
  // so the growth advances evenly. Slowing it with playbackRate would only
  // cut the frame rate back down and bring the stutter back.

  // Anchored to the cover rather than the viewport: it holds its place while
  // the cover is on screen and is carried away as the page scrolls past it.
  // Sits on the left, vertically centred, matching the cover artwork.
  return (
    <div className="film-anchor group hidden lg:flex">
      {/* Square corners on purpose: rounding a video makes the browser mask
          every frame, which takes it off the hardware overlay path. */}
      <div
        className="film-screen relative bg-black border-4 border-gray-800"
        style={{ width: "min(33vw, 560px)" }}
      >
        <video
          className="w-full h-auto block"
          autoPlay
          muted
          loop
          playsInline
          // auto, not metadata: the clip loops every four seconds, and with
          // only metadata loaded the browser was still fetching during
          // playback, which stalled it at each restart.
          preload="auto"
          aria-label="Croissance de plants de tomates"
        >
          <source src="/videos/croissance-tomates.mp4" type="video/mp4" />
        </video>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fermer la vidéo"
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 text-white text-base leading-none
                     opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  );
}
