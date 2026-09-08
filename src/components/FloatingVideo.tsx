"use client";

import { useEffect, useRef, useState } from "react";

const PLAYBACK_RATE = 0.75;

export default function FloatingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // playbackRate resets whenever a new source is loaded, so re-apply it.
    const applyRate = () => {
      video.playbackRate = PLAYBACK_RATE;
    };
    applyRate();

    // Freeze on the last frame instead of looping or going black.
    const freeze = () => video.pause();

    video.addEventListener("loadedmetadata", applyRate);
    video.addEventListener("ended", freeze);
    return () => {
      video.removeEventListener("loadedmetadata", applyRate);
      video.removeEventListener("ended", freeze);
    };
  }, []);

  if (dismissed) return null;

  // Anchored to the cover rather than the viewport: it holds its place while
  // the cover is on screen and is carried away as the page scrolls past it.
  return (
    <div className="group absolute bottom-10 left-10 z-20 hidden sm:block">
      {/* Screen-like frame. Capped at the viewport width so a narrow window
          shrinks it instead of pushing it off-screen. */}
      <div
        className="relative rounded-lg overflow-hidden shadow-2xl bg-black border-4 border-gray-800"
        style={{ width: "min(28rem, calc(100vw - 5rem))" }}
      >
        <video
          ref={videoRef}
          className="w-full h-auto block"
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-label="Croissance de plants de tomates"
        >
          <source src="/videos/croissance-tomates.mp4" type="video/mp4" />
        </video>

        {/* Glass reflection, purely decorative */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

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
