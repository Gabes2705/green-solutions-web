"use client";

import { useEffect, useRef, useState } from "react";

const PLAYBACK_RATE = 0.75;

export default function FloatingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);

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

  if (!visible) return null;

  return (
    <div className="group fixed bottom-10 left-10 z-40 hidden sm:block">
      {/* Screen-like frame */}
      <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black border-4 border-gray-800">
        <video
          ref={videoRef}
          className="w-56 h-auto block"
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
          onClick={() => setVisible(false)}
          aria-label="Fermer la vidéo"
          className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 text-white text-sm leading-none
                     opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  );
}
