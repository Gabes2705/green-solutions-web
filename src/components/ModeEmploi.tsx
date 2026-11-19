"use client";

import "./DossierPage.css";
import "./ModeEmploi.css";
import { useLanguage } from "@/lib/LanguageContext";
import { MODE_EMPLOI, type Bloc } from "@/lib/mode-emploi-i18n";

/* Le mode d'emploi EVERGREEN® / ECOSORB® de Gabriel, en dernière rubrique de
   l'accueil, dans la présentation des dossiers pays : couverture photo, sommaire,
   titres, photos ombrées. Les deux PDF (français et espagnol) restent
   téléchargeables, chaque bouton dans la langue de son fichier. */

const PDF = [
  { langue: "fr", href: "/documents/mode-emploi/mode-emploi-evergreen-ecosorb-fr.pdf", texte: "Télécharger le mode d'emploi · Français (PDF)" },
  { langue: "es", href: "/documents/mode-emploi/mode-emploi-evergreen-ecosorb-es.pdf", texte: "Descargar el modo de empleo · Español (PDF)" },
];

const img = (n: number) => `/images/mode-emploi/${n}.webp`;
const TAILLES: Record<number, [number, number]> = {
  1: [1024, 572], 2: [1400, 1252], 3: [1400, 788], 4: [452, 434],
  5: [448, 433], 6: [442, 434], 7: [403, 417], 8: [358, 283],
};

function Photo({ n }: { n: number }) {
  const [w, h] = TAILLES[n];
  return <img src={img(n)} alt="" width={w} height={h} loading="lazy" decoding="async" />;
}

function Liens({ texte }: { texte: string }) {
  const morceaux = texte.split(/(https?:\/\/\S+)/);
  return (
    <>
      {morceaux.map((m, i) =>
        /^https?:\/\//.test(m) ? (
          <a key={i} href={m} target="_blank" rel="noopener noreferrer">
            {m}
          </a>
        ) : (
          m
        ),
      )}
    </>
  );
}

export default function ModeEmploi() {
  const { language } = useLanguage();
  const c = MODE_EMPLOI[language] ?? MODE_EMPLOI.fr;
  let partie = 0;
  const ancre = () => `mode-emploi-${++partie}`;
  const titres = c.blocs.filter((b) => b.t === "T") as Extract<Bloc, { x: string }>[];

  return (
    <section id="mode-emploi" className="dossier-page me-section" lang={c.lang}>
      <header className="dossier-hero me-hero">
        <img className="dossier-hero-photo" src={img(3)} alt="" loading="lazy" decoding="async" />
        <div className="dossier-hero-voile" aria-hidden="true" />
        <div className="dossier-hero-texte">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="me-titre">{c.titre}</h2>
          <div className="dossier-resumes">
            {PDF.map((p) => (
              <a key={p.langue} className="dossier-pdf btn-3d btn-3d-light" href={p.href} hrefLang={p.langue} lang={p.langue}>
                {p.texte}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="dossier-corps">
        <div className="dossier-complet me-corps">
          <nav className="dc-sommaire" aria-label={c.sommaire}>
            <p className="dc-sommaire-titre">{c.sommaire}</p>
            <ol>
              {titres.map((b, i) => (
                <li key={i}>
                  <a href={`#mode-emploi-${i + 1}`}>{b.x}</a>
                </li>
              ))}
            </ol>
          </nav>

          {c.blocs.map((b, i) => {
            switch (b.t) {
              case "T":
                return (
                  <h3 key={i} id={ancre()} className="me-partie">
                    {b.x}
                  </h3>
                );
              case "S":
                return <h4 key={i}>{b.x}</h4>;
              case "X":
                return (
                  <p key={i}>
                    <Liens texte={b.x} />
                  </p>
                );
              case "PHOTO":
                return (
                  <figure key={i} className="dc-photo">
                    <Photo n={b.n} />
                  </figure>
                );
              case "COTE":
                return (
                  <div key={i} className="me-cote">
                    <div>
                      {b.x.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                    <figure className="dc-photo">
                      <Photo n={b.n} />
                    </figure>
                  </div>
                );
              case "RANGEE":
                return (
                  <div key={i} className={`me-rangee me-rangee-${b.n.length}`}>
                    {b.n.map((n) => (
                      <figure key={n} className="dc-photo">
                        <Photo n={n} />
                      </figure>
                    ))}
                  </div>
                );
            }
          })}
        </div>
      </div>
    </section>
  );
}
