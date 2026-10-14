import Reveal from "@/components/Reveal";
import { tomate } from "@/lib/evergreen-tomate-i18n";
import "./EvergreenTomate.css";

/**
 * « Sur tomate », sur la page EVERGREEN® & ECOSORB® : les quatre photos que
 * Gabriel a envoyées, dans l'ordre où il les raconte (tige normale, tige avec
 * l'hydrorétenteur, puis deux photos de production), et sa phrase de
 * résultat. Les mots sont dans lib/evergreen-tomate-i18n.ts, dans les 14
 * langues.
 *
 * Les photos viennent de lui, sans métadonnées. Les tailles sont celles des
 * fichiers : elles réservent la place avant le chargement.
 */
const PHOTOS = [
  { src: "/images/tech/evergreen-tomate-tige-normale.jpg", w: 1204, h: 1600 },
  { src: "/images/tech/evergreen-tomate-tige-evergreen.jpg", w: 1204, h: 1600 },
  { src: "/images/tech/evergreen-tomate-production-serre.jpg", w: 1444, h: 920 },
  { src: "/images/tech/evergreen-tomate-production-grappe.jpg", w: 1204, h: 1600 },
];

export default function EvergreenTomate({ langue }: { langue: string }) {
  const x = tomate(langue);

  const photo = (i: number) => (
    <figure className="et-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PHOTOS[i].src} width={PHOTOS[i].w} height={PHOTOS[i].h} alt={x.photos[i]} loading="lazy" decoding="async" />
      <figcaption>{x.photos[i]}</figcaption>
    </figure>
  );

  return (
    <div className="et-tomate" id="tomate">
      <Reveal>
        <section className="tech-section">
          <h2>{x.title}</h2>
          <div className="et-rang et-rang-a">
            {photo(0)}
            {photo(1)}
          </div>
          <div className="et-rang et-rang-b">
            {photo(2)}
            {photo(3)}
          </div>
          <p className="et-resultat">{x.result}</p>
        </section>
      </Reveal>
    </div>
  );
}
