"use client";

import { useEffect, useRef, useState } from "react";

const PLAYBACK_RATE = 0.75;

export default function FloatingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dismissed, setDismissed] = useState(false);
  const [onCover, setOnCover] = useState(true);

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

  // The clip belongs to the cover: once the hero has scrolled away it must
  // not follow the reader down the rest of the page. A scroll listener is
  // used rather than IntersectionObserver because it keeps firing even when
  // the page is not being composited.
  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>(".stage");
      const coverHeight = hero?.offsetHeight || window.innerHeight;
      // Hide a little before the cover fully leaves, so it does not linger
      // over the section that follows.
      setOnCover(window.scrollY < coverHeight * 0.75);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`group fixed bottom-10 left-10 z-40 hidden sm:block transition-opacity duration-500
                  ${onCover ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-hidden={!onCover}
    >
      {/* Screen-like frame. Caps at the viewport width so a narrow window
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
