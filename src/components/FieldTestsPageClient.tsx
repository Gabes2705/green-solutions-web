"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reveal from "@/components/Reveal";
import CountryFlag from "@/components/CountryFlag";
import { ESSAIS } from "@/lib/essais";
import PHOTOS from "@/lib/essais-photos.json";
import "./FieldTestsPage.css";

const vignette = (slug: string) =>
  (PHOTOS as Record<string, { src: string }[]>)[slug]?.[0]?.src;

export default function FieldTestsPageClient() {
  const { c, language } = useLanguage();
  const ft = c.fieldTests;

  // Les résultats réécrits en pages web n'existent qu'en français : ailleurs,
  // la page garde sa seule colonne de rapports PDF.
  const resultats = language === "fr";

  const rapports = (
    <Reveal stagger=".doc-row" className="doc-list field-tests-list">
      {ft.items.map((item) => (
        <a
          className="doc-row"
          key={item.href}
          href={`/etudes?file=${encodeURIComponent(item.href)}&name=${encodeURIComponent(item.title)}`}
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

  return (
    <div className="tech-page tech-blue">
      <div className="tech-bar">
        <a href="/" className="tech-back btn-3d btn-3d-light">
          ← {ft.backToSite}
        </a>
        <LanguageSwitcher />
      </div>

      <header className={`field-tests-hero${resultats ? " ft-large" : ""}`}>
        <p className="eyebrow">{ft.eyebrow}</p>
        <h1>{ft.title}</h1>
        <p className="lede">{ft.lede}</p>
      </header>

      {resultats ? (
        <div className="ft-colonnes">
          <section className="ft-resultats" aria-labelledby="ft-resultats-titre">
            <h2 id="ft-resultats-titre">Les résultats, essai par essai</h2>
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

          <section className="ft-rapports" aria-labelledby="ft-rapports-titre">
            <h2 id="ft-rapports-titre">Les rapports originaux (PDF)</h2>
            {rapports}
          </section>
        </div>
      ) : (
        <div className="tech-body">{rapports}</div>
      )}
    </div>
  );
}
