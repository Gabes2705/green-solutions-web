"use client";

import { useEffect, useRef } from "react";

export default function FloatingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Slow down video playback
    video.playbackRate = 0.75;

    // Freeze at the end (no loop)
    const handleEnded = () => {
      video.pause();
      video.currentTime = video.duration;
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-40 group">
      {/* Floating effect */}
      <div className="animate-bounce">
        {/* Screen-like border and shadow */}
        <div className="rounded-lg overflow-hidden shadow-2xl bg-black border-4 border-gray-800">
          <video
            ref={videoRef}
            className="w-64 h-auto block"
            autoPlay
            muted
            poster="/videos/croissance-tomates-poster.jpg"
          >
            <source src="/videos/croissance-tomates.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Info label */}
      <div className="mt-2 text-xs text-gray-600 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Croissance Tomates
      </div>
    </div>
  );
}
