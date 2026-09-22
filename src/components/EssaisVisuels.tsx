import type { Graphique } from "@/lib/essais";
import PHOTOS from "@/lib/essais-photos.json";
import "./EssaisVisuels.css";

/**
 * Les éléments visuels des pages d'essais et des guides : graphiques,
 * photos libres avec leurs crédits, et deux petites animations dessinées à la
 * main en SVG (aucune image extérieure, donc aucun droit à régler).
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

/** Un grain d'hydrorétenteur qui boit l'eau, gonfle, puis la rend aux racines. */
export function AnimationGranule() {
  return (
    <figure className="gv-anim">
      <svg viewBox="0 0 320 200" role="img" aria-label="Un grain d'EVERGREEN gonfle en absorbant l'eau, puis la rend aux racines">
        <rect x="0" y="0" width="320" height="200" rx="18" fill="var(--gv-ciel)" />
        <rect x="0" y="110" width="320" height="90" fill="var(--gv-sol)" />
        <g className="gv-gouttes">
          <path d="M120 20 q6 10 0 16 q-6 -6 0 -16z" fill="var(--teal)" />
          <path d="M160 8 q6 10 0 16 q-6 -6 0 -16z" fill="var(--teal)" />
          <path d="M200 24 q6 10 0 16 q-6 -6 0 -16z" fill="var(--teal)" />
        </g>
        <g className="gv-racines" stroke="var(--gv-racine)" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M160 110 v30 M160 125 q-20 10 -34 30 M160 130 q22 8 36 28 M160 140 q-6 20 -4 40" />
        </g>
        <circle className="gv-granule" cx="160" cy="150" r="14" fill="var(--gv-gel)" stroke="var(--teal)" strokeWidth="2" />
        <path d="M150 110 q10 -40 10 -60 M160 70 q-24 -8 -30 -26 q22 0 30 26 M160 80 q22 -10 32 -28 q-24 -2 -32 28" fill="var(--leaf-strong)" stroke="var(--leaf-deep)" strokeWidth="2" />
      </svg>
      <figcaption>
        Un grain d&apos;EVERGREEN retient jusqu&apos;à 300 fois son poids en eau, puis la rend peu à
        peu aux racines.
      </figcaption>
    </figure>
  );
}

/** Une pousse qui grandit sous quelques gouttes de fertilisant. */
export function AnimationPousse() {
  return (
    <figure className="gv-anim">
      <svg viewBox="0 0 320 200" role="img" aria-label="Une jeune plante grandit après une pulvérisation d'ECOFERT">
        <rect x="0" y="0" width="320" height="200" rx="18" fill="var(--gv-ciel)" />
        <circle cx="270" cy="44" r="20" fill="var(--gv-soleil)" className="gv-soleil" />
        <rect x="0" y="150" width="320" height="50" fill="var(--gv-sol)" />
        <g className="gv-pousse">
          <path d="M160 150 v-80" stroke="var(--leaf-deep)" strokeWidth="5" strokeLinecap="round" />
          <path d="M160 110 q-34 -6 -44 -30 q30 0 44 30z M160 95 q34 -8 42 -34 q-30 2 -42 34z M160 72 q-14 -18 0 -36 q14 18 0 36z" fill="var(--leaf-strong)" />
        </g>
        <g className="gv-bruine" fill="var(--amber)">
          <circle cx="112" cy="40" r="3" />
          <circle cx="128" cy="30" r="2.5" />
          <circle cx="198" cy="34" r="3" />
          <circle cx="214" cy="48" r="2.5" />
        </g>
      </svg>
      <figcaption>
        Quelques gouttes suffisent : 1 à 4 flacons de 140 ml pour un hectare.
      </figcaption>
    </figure>
  );
}
