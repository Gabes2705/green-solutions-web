import type { Graphique } from "@/lib/essais";
import PHOTOS from "@/lib/essais-photos.json";
import "./EssaisVisuels.css";

/**
 * Les éléments visuels des pages d'essais et des guides : graphiques et
 * photos libres avec leurs crédits. Les vidéos sont dans VideoPousse.
 */

type Photo = { src: string; auteur: string; licence: string; page: string };

export function photosDe(slug: string): Photo[] {
  return (PHOTOS as Record<string, Photo[]>)[slug] ?? [];
}

/** Barres horizontales en CSS : lisibles par un lecteur d'écran, sans bibliothèque. */
export function Graphiques({ graphiques }: { graphiques: Graphique[] }) {
  if (graphiques.length === 0) return null;
  return (
    <div className="gv-graphiques">
      {graphiques.map((g, i) => {
        const max = Math.max(...g.barres.map((b) => b.valeur));
        return (
          <figure key={i} className="gv-graphique">
            <figcaption>{g.titre}</figcaption>
            {g.barres.map((b, j) => (
              <div key={j} className="gv-ligne">
                <span className="gv-label">{b.label}</span>
                <span className="gv-piste">
                  <span
                    className={`gv-barre${b.traite ? " gv-traite" : ""}`}
                    style={{ width: `${(b.valeur / max) * 100}%`, animationDelay: `${j * 0.15}s` }}
                  />
                </span>
                <span className="gv-valeur">{b.affiche}</span>
              </div>
            ))}
          </figure>
        );
      })}
    </div>
  );
}

/** Une photo libre avec son crédit, comme l'exige la licence. */
export function PhotoLibre({ photo, alt }: { photo: Photo; alt: string }) {
  return (
    <figure className="gv-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={alt} loading="lazy" decoding="async" />
      <figcaption>
        Photo : {photo.auteur} —{" "}
        <a href={photo.page} target="_blank" rel="noreferrer">
          {photo.licence}, Wikimedia Commons
        </a>
      </figcaption>
    </figure>
  );
}
