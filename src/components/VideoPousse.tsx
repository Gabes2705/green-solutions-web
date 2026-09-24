"use client";

import { useEffect, useRef } from "react";
import type { Film } from "@/lib/films";

/**
 * Une vraie plante qui pousse, en vidéo accélérée.
 *
 * Les films et leurs crédits sont dans lib/films.ts.
 *
 * Muette et en boucle, elle démarre seule. Pour qui a demandé à son système de
 * limiter les animations, elle reste arrêtée sur sa dernière image, où la
 * plante est déjà grande.
 *
 * La légende et le mot « Vidéo » suivent la langue de la page : sans eux, une
 * page allemande gardait une phrase française sous la vidéo. Le nom de
 * l'auteur et la licence, eux, ne se traduisent pas.
 */
export type MotsVideo = {
  legende: string;
  alt: string;
  video: string;
  accelere: string;
};

export default function VideoPousse({ film, mots }: { film: Film; mots?: MotsVideo }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <figure className="gv-video">
      <video
        ref={ref}
        src={film.src}
        poster={film.affiche}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={mots?.alt ?? film.alt}
      />
      <figcaption>
        {mots?.legende ?? film.legende}{" "}
        <span className="gv-credit">
          {mots?.video ?? "Vidéo"} : {film.auteur}
          {film.accelere ? `, ${mots?.accelere ?? "accélérée"}` : ""}
          {film.page && (
            <>
              {" — "}
              <a href={film.page} target="_blank" rel="noreferrer">
                {film.licence}, Wikimedia Commons
              </a>
            </>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
