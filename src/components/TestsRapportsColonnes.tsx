"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import CountryFlag from "@/components/CountryFlag";
import { ESSAIS } from "@/lib/essais";
import PHOTOS from "@/lib/essais-photos.json";
import "./FieldTestsPage.css";

const vignette = (slug: string) =>
  (PHOTOS as Record<string, { src: string }[]>)[slug]?.[0]?.src;

/**
 * Les rapports d'essais : la liste des PDF et, en français, les résultats
 * expliqués essai par essai.
 *
 * Le même bloc sert deux fois : sur la page « Tests et rapports » et au milieu
 * de la page d'accueil, où Gabriel veut qu'on le voie sans avoir à le chercher.
 * `titres` règle le niveau des intertitres : h2 sur la page dédiée, h3 dans la
 * section de l'accueil, qui porte déjà son propre h2.
 */
export default function TestsRapportsColonnes({
  titres = 2,
  accueil = false,
}: {
  titres?: 2 | 3;
  accueil?: boolean;
}) {
  const { c, language } = useLanguage();
  const ft = c.fieldTests;
  const Titre = titres === 2 ? "h2" : "h3";

  const rapports = (
    <Reveal stagger=".doc-row" className="doc-list field-tests-list">
      {ft.items.map((item) => (
        <a
          className="doc-row"
          key={item.href}
          href={`/${language}/etudes?file=${encodeURIComponent(item.href)}&name=${encodeURIComponent(item.title)}`}
        >
          <span className="doc-tag">PDF</span>
          <span className="doc-body">
            <span className="doc-title">{item.title}</span>
            <span className="doc-meta">{item.meta}</span>
          </span>
          <span className="doc-flag">
            <CountryFlag id={item.country} />
          </span>
        </a>
      ))}
    </Reveal>
  );

  // Les résultats réécrits en pages web n'existent qu'en français : ailleurs,
  // seule la liste des rapports PDF s'affiche.
  if (language !== "fr") {
    return accueil ? rapports : <div className="tech-body">{rapports}</div>;
  }

  return (
    <div className={`ft-colonnes${accueil ? " ft-colonnes-accueil" : ""}`}>
      <section className="ft-resultats" aria-labelledby={`ft-resultats-${titres}`}>
        <Titre id={`ft-resultats-${titres}`}>Les résultats, essai par essai</Titre>
        <p className="ft-intro">
          Les chiffres de chaque essai expliqués simplement, avec graphiques et photos.
        </p>
        <ul className="ft-cartes">
          {ESSAIS.map((e) => (
            <li key={e.slug}>
              <a className="ft-carte" href={`/fr/essais-terrain/${e.slug}`}>
                {vignette(e.slug) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={vignette(e.slug)} alt="" loading="lazy" decoding="async" />
                )}
                <span className="ft-carte-texte">
                  <span className="ft-carte-pays">
                    {e.culture.split(" (")[0]} · {e.pays}
                  </span>
                  <span className="ft-carte-titre">{e.titre}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a className="ft-tous" href="/fr/essais-terrain">
          Voir tous les essais →
        </a>
      </section>

      <section className="ft-rapports" aria-labelledby={`ft-rapports-${titres}`}>
        <Titre id={`ft-rapports-${titres}`}>Les rapports originaux (PDF)</Titre>
        <p className="ft-intro">
          Les documents complets, tels que les universités et les exploitations les ont remis.
        </p>
        {rapports}
      </section>
    </div>
  );
}
