import CountryFlag from "./CountryFlag";
import "./DossierPage.css";
import type { Cartes, Chiffres, Colonnes, Dossier, Etapes, Graphique, Puces } from "@/lib/dossiers";

/**
 * Un dossier pays rendu en HTML.
 *
 * Composant serveur, volontairement : tout le texte part dans la page envoyée
 * au navigateur, donc tout est lisible par un moteur de recherche. C'est le
 * seul intérêt de l'exercice — le même contenu existe déjà en PDF, que Google
 * n'indexe qu'à peine.
 *
 * Les graphiques sont dessinés en CSS plutôt qu'avec une bibliothèque : quatre
 * barres et un pourcentage ne justifient pas trois cents kilo-octets de
 * JavaScript, et des barres en HTML restent lisibles pour un lecteur d'écran.
 */

function photo(slug: string, index: number | null, secours = 0) {
  return `/images/dossiers/${slug}/${index ?? secours}.webp`;
}

/** Une ligne de texte par paragraphe : les sauts de ligne viennent du dossier. */
function Paragraphes({ texte, className }: { texte: string; className?: string }) {
  return (
    <>
      {texte.split("\n").filter(Boolean).map((p, i) => (
        <p key={i} className={className}>
          {p}
        </p>
      ))}
    </>
  );
}

function BlocChiffres({ bloc }: { bloc: Chiffres }) {
  return (
    <section className="dossier-section">
      <p className="eyebrow">{bloc.kicker}</p>
      <h2 className="section-title">{bloc.title}</h2>
      <div className="dossier-chiffres">
        {bloc.items.map((item, i) => (
          <div key={i} className="dossier-chiffre">
            <span className="dossier-chiffre-valeur">{item.value}</span>
            <span className="dossier-chiffre-label">{item.label}</span>
          </div>
        ))}
      </div>
      {bloc.note && <p className="dossier-note">{bloc.note}</p>}
    </section>
  );
}

function BlocPuces({ bloc, slug, secours }: { bloc: Puces; slug: string; secours: number }) {
  return (
    <section className="dossier-section dossier-split">
      <div className="dossier-split-texte">
        <p className="eyebrow">{bloc.kicker}</p>
        <h2 className="section-title">{bloc.title}</h2>
        <ul className="dossier-puces">
          {bloc.bullets.map((ligne, i) => (
            <li key={i}>{ligne}</li>
          ))}
        </ul>
      </div>
      <figure className="dossier-split-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo(slug, bloc.photo, secours)} alt="" loading="lazy" decoding="async" />
        {bloc.caption && <figcaption>{bloc.caption}</figcaption>}
      </figure>
    </section>
  );
}

/**
 * Un graphique de dossier, en barres.
 *
 * Le PDF distingue camemberts et histogrammes ; sur une page, la barre gagne
 * dans les deux cas — elle se lit au même endroit sur mobile comme sur écran
 * large, et l'étiquette reste à côté de sa valeur.
 */
function BlocGraphique({ bloc }: { bloc: Graphique }) {
  const labels = bloc.series[0]?.labels ?? [];
  const maximum = Math.max(...bloc.series.flatMap((s) => s.values), 1);
  const unite = bloc.type === "doughnut" ? "%" : "";

  return (
    <section className="dossier-section">
      <p className="eyebrow">{bloc.kicker}</p>
      <h2 className="section-title">{bloc.title}</h2>

      <div className="dossier-graphique">
        {labels.map((label, i) => (
          <div key={i} className="dossier-barre-ligne">
            <span className="dossier-barre-label">{label}</span>
            <span className="dossier-barre-piste">
              {bloc.series.map((serie, j) => (
                <span
                  key={j}
                  className={`dossier-barre dossier-barre-${j}`}
                  style={{ width: `${(serie.values[i] / maximum) * 100}%` }}
                >
                  <span className="dossier-barre-valeur">
                    {serie.values[i]}
                    {unite}
                  </span>
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      {bloc.series.length > 1 && (
        <p className="dossier-legende">
          {bloc.series.map((serie, j) => (
            <span key={j} className="dossier-legende-item">
              <span className={`dossier-pastille dossier-barre-${j}`} aria-hidden="true" />
              {serie.name}
            </span>
          ))}
        </p>
      )}

      {bloc.reading && (
        <aside className="dossier-lecture">
          <h3>{bloc.reading.head}</h3>
          <Paragraphes texte={bloc.reading.body} />
        </aside>
      )}
    </section>
  );
}

function BlocColonnes({ bloc }: { bloc: Colonnes }) {
  return (
    <section className="dossier-section">
      <p className="eyebrow">{bloc.kicker}</p>
      <h2 className="section-title">{bloc.title}</h2>
      <div className="dossier-colonnes">
        {[bloc.left, bloc.right].filter(Boolean).map((colonne, i) => (
          <div key={i} className="dossier-colonne">
            <h3>{colonne!.head}</h3>
            <ul className="dossier-puces">
              {colonne!.lines.map((ligne, j) => (
                <li key={j}>{ligne}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {bloc.note && <p className="dossier-note">{bloc.note}</p>}
    </section>
  );
}

function BlocCartes({ bloc, slug }: { bloc: Cartes; slug: string }) {
  return (
    <section className="dossier-section">
      <p className="eyebrow">{bloc.kicker}</p>
      <h2 className="section-title">{bloc.title}</h2>
      <div className="dossier-cartes">
        {bloc.items.map((item, i) => (
          <article key={i} className="dossier-carte">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo(slug, item.photo, i)} alt="" loading="lazy" decoding="async" />
            <div className="dossier-carte-corps">
              <h3>{item.head}</h3>
              {item.metric && <p className="dossier-carte-metrique">{item.metric}</p>}
              <ul className="dossier-puces">
                {item.lines.map((ligne, j) => (
                  <li key={j}>{ligne}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlocEtapes({ bloc }: { bloc: Etapes }) {
  return (
    <section className="dossier-section">
      <p className="eyebrow">{bloc.kicker}</p>
      <h2 className="section-title">{bloc.title}</h2>
      <ol className="dossier-etapes">
        {bloc.items.map((item, i) => (
          <li key={i}>
            <span className="dossier-etape-rang" aria-hidden="true">
              {i + 1}
            </span>
            <span className="dossier-etape-corps">
              <strong>{item.head}</strong>
              <span>{item.body}</span>
            </span>
          </li>
        ))}
      </ol>
      {bloc.note && <p className="dossier-note">{bloc.note}</p>}
    </section>
  );
}

export default function DossierPage({ dossier }: { dossier: Dossier }) {
  const { slug, cover } = dossier;
  const rtl = dossier.langue === "ar";

  return (
    <article className="dossier-page" dir={rtl ? "rtl" : undefined} lang={dossier.locale}>
      <div className="tech-bar">
        <a href={`/${dossier.langue}/`} className="tech-back btn-3d btn-3d-light">
          ← Green Solutions
        </a>
      </div>

      <header className="dossier-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="dossier-hero-photo"
          src={photo(slug, 0)}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="dossier-hero-voile" aria-hidden="true" />
        <div className="dossier-hero-texte">
          <span className="dossier-hero-drapeau">
            <CountryFlag id={slug} />
          </span>
          <p className="eyebrow">{cover.eyebrow}</p>
          <h1>{cover.title}</h1>
          {cover.officiel && <p className="dossier-hero-officiel">{cover.officiel}</p>}
          {cover.subtitle && (
            <Paragraphes texte={cover.subtitle} className="dossier-hero-chapeau" />
          )}
          <a className="dossier-pdf btn-3d btn-3d-light" href={dossier.pdf}>
            Télécharger le dossier (PDF)
          </a>
        </div>
      </header>

      <div className="dossier-corps">
        {dossier.chiffres && <BlocChiffres bloc={dossier.chiffres} />}
        {dossier.contrainte && <BlocPuces bloc={dossier.contrainte} slug={slug} secours={1} />}
        {dossier.usages && <BlocGraphique bloc={dossier.usages} />}
        {dossier.economie && <BlocChiffres bloc={dossier.economie} />}
        {dossier.productions && <BlocGraphique bloc={dossier.productions} />}
        {dossier.filieres.map((filiere, i) => (
          <BlocPuces key={i} bloc={filiere} slug={slug} secours={i + 2} />
        ))}
        {dossier.solutions && <BlocColonnes bloc={dossier.solutions} />}
        {dossier.economies && <BlocGraphique bloc={dossier.economies} />}
        {dossier.regions && <BlocCartes bloc={dossier.regions} slug={slug} />}
        {dossier.deploiement && <BlocEtapes bloc={dossier.deploiement} />}
        {dossier.risques && <BlocColonnes bloc={dossier.risques} />}

        {dossier.sources && (
          <section className="dossier-section">
            <h2 className="section-title">Sources</h2>
            <ul className="dossier-sources">
              {dossier.sources.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="dossier-section dossier-cloture">
          <h2 className="section-title">{dossier.closing.title}</h2>
          <Paragraphes texte={dossier.closing.body} />
          <a className="dossier-pdf btn-3d btn-3d-light" href={`/${dossier.langue}/#contact`}>
            {dossier.closing.title}
          </a>
          {dossier.closing.contact && (
            <p className="dossier-note">{dossier.closing.contact}</p>
          )}
        </section>
      </div>
    </article>
  );
}
