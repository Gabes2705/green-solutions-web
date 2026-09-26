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
 *
 * Les photos d'origine de treize dossiers venaient d'internet et ont été
 * retirées ; les pays ont reçu à la place des photos libres de Wikimedia ou,
 * lorsqu'une série ouverte cohérente n'existait pas, des illustrations
 * conceptuelles clairement signalées. La page doit donc tenir
 * debout avec une photo, deux, ou aucune : chaque bloc les traite comme un
 * ornement, jamais comme une structure.
 */

type Photographe = (index: number | null, secours: number) => string | null;

/**
 * Distribue les photos d'un dossier dans la page, chacune une seule fois.
 *
 * Les dossiers désignent leurs photos par numéro — « photo: 4 » — en pensant
 * aux jeux d'origine, qui en comptaient jusqu'à onze. Les photos libres qui ont
 * remplacé celles prises sur internet sont moins nombreuses : quatre pour le
 * Gabon, deux pour le Maroc, une seule pour l'Argentine. Reprendre le numéro
 * modulo le nombre de photos faisait revenir la même image trois ou quatre fois
 * dans la page.
 *
 * Désormais, un numéro déjà pris ou inexistant cède la place à la première
 * photo encore libre, et quand il n'en reste plus, le bloc s'affiche sans image.
 * Les dossiers d'origine, qui ont assez de photos, gardent exactement celles que
 * leur spécification désigne.
 */
function distributeur(dossier: Dossier): Photographe {
  const prises = new Set<number>();
  return (index, secours) => {
    if (dossier.photos === 0) return null;
    let i = index ?? secours;
    if (i >= dossier.photos || prises.has(i)) {
      i = -1;
      for (let k = 0; k < dossier.photos; k++) {
        if (!prises.has(k)) {
          i = k;
          break;
        }
      }
      if (i === -1) return null;
    }
    prises.add(i);
    return `/images/dossiers/${dossier.slug}/${i}.webp`;
  };
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

function BlocPuces({
  bloc,
  photographe,
  secours,
}: {
  bloc: Puces;
  photographe: Photographe;
  secours: number;
}) {
  const photo = photographe(bloc.photo, secours);

  return (
    <section className={`dossier-section${photo ? " dossier-split" : ""}`}>
      <div className="dossier-split-texte">
        <p className="eyebrow">{bloc.kicker}</p>
        <h2 className="section-title">{bloc.title}</h2>
        <ul className="dossier-puces">
          {bloc.bullets.map((ligne, i) => (
            <li key={i}>{ligne}</li>
          ))}
        </ul>
      </div>
      {photo && (
        <figure className="dossier-split-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" loading="lazy" decoding="async" />
          {bloc.caption && <figcaption>{bloc.caption}</figcaption>}
        </figure>
      )}
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

function BlocCartes({ bloc, photographe }: { bloc: Cartes; photographe: Photographe }) {
  return (
    <section className="dossier-section">
      <p className="eyebrow">{bloc.kicker}</p>
      <h2 className="section-title">{bloc.title}</h2>
      <div className="dossier-cartes">
        {bloc.items.map((item, i) => {
          const photo = photographe(item.photo, i);
          return (
            <article key={i} className="dossier-carte">
              {photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" loading="lazy" decoding="async" />
              )}
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
          );
        })}
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

/**
 * Le crédit des photos.
 *
 * Les images viennent de Wikimedia Commons sous licence CC BY-SA, qui impose de
 * nommer l'auteur. Sans ce bloc, la page ne serait pas en règle.
 */
function Credits({ dossier }: { dossier: Dossier }) {
  const credits = dossier.credits;
  if (!credits || credits.length === 0) return null;

  const uniques = Array.from(
    new Map(
      credits
        .filter((c) => c.auteur)
        .map((c) => [`${c.auteur}|${c.licence}|${c.source}`, c]),
    ).values(),
  );
  if (uniques.length === 0) return null;

  const textes = {
    fr: {
      titre: "Crédits photo",
      commons: "Photographies issues de Wikimedia Commons, réutilisées selon leur licence.",
      conceptual:
        "Les illustrations conceptuelles sont signalées comme telles et ne documentent ni un site ni un essai réel.",
    },
    en: {
      titre: "Photo credits",
      commons: "Photographs from Wikimedia Commons, reused under their stated licences.",
      conceptual:
        "Conceptual illustrations are identified as such and do not document a real site or trial.",
    },
    es: {
      titre: "Créditos fotográficos",
      commons: "Fotografías de Wikimedia Commons, reutilizadas conforme a sus licencias.",
      conceptual:
        "Las ilustraciones conceptuales están identificadas y no documentan un lugar ni un ensayo real.",
    },
    ar: {
      titre: "اعتمادات الصور",
      commons: "صور من ويكيميديا كومنز، معاد استخدامها وفق تراخيصها.",
      conceptual: "الصور المفاهيمية مذكورة بوضوح ولا توثّق موقعاً أو تجربة حقيقية.",
    },
    el: {
      titre: "Φωτογραφικές πιστώσεις",
      commons: "Φωτογραφίες από το Wikimedia Commons, σύμφωνα με τις άδειές τους.",
      conceptual: "Οι εννοιολογικές εικόνες επισημαίνονται και δεν τεκμηριώνουν πραγματική δοκιμή.",
    },
    hr: {
      titre: "Fotografske zasluge",
      commons: "Fotografije s Wikimedia Commonsa, ponovno korištene prema licencama.",
      conceptual: "Konceptualne ilustracije su označene i ne dokumentiraju stvarni pokus.",
    },
  } as const;
  const t = textes[dossier.langue as keyof typeof textes] ?? textes.fr;
  const aCommons = uniques.some((c) => c.source !== "conceptual");
  const aConcept = uniques.some((c) => c.source === "conceptual");

  return (
    <section className="dossier-section dossier-credits">
      <h2 className="dossier-credits-titre">{t.titre}</h2>
      <ul>
        {uniques.map((c, i) => (
          <li key={i}>
            {c.auteur}
            {c.licence ? ` — ${c.licence}` : ""}
            {c.titre ? `, « ${c.titre.replace(/\.(jpe?g|png|svg)$/i, "")} »` : ""}
          </li>
        ))}
      </ul>
      {aCommons && <p>{t.commons}</p>}
      {aConcept && <p>{t.conceptual}</p>}
    </section>
  );
}

/**
 * Le bouton de retour, dans la langue de la fiche.
 *
 * Une fiche pays est ecrite dans la langue de son marche : douze des vingt ne
 * sont pas en francais. Un « Retour » francais en haut de la fiche
 * sud-africaine ou saoudienne se remarquait tout de suite. Le libelle nomme
 * aussi la page d'arrivee, comme sur les essais : on sait ou l'on va avant de
 * cliquer.
 */
const RETOUR: Record<string, string> = {
  fr: "← Tous les pays",
  en: "← All countries",
  es: "← Todos los países",
  ar: "← كل الدول",
  el: "← Όλες οι χώρες",
  hr: "← Sve zemlje",
};

export default function DossierPage({ dossier }: { dossier: Dossier }) {
  const { cover } = dossier;
  const rtl = dossier.langue === "ar";
  const photographe = distributeur(dossier);
  const photoCouverture = photographe(0, 0);

  return (
    <article className="dossier-page" dir={rtl ? "rtl" : undefined} lang={dossier.locale}>
      <div className="tech-bar">
        <a href={`/${dossier.langue}/etudes`} className="tech-back btn-3d btn-3d-light">
          {RETOUR[dossier.langue] ?? RETOUR.fr}
        </a>
      </div>

      <header className={`dossier-hero${photoCouverture ? "" : " dossier-hero-uni"}`}>
        {photoCouverture && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="dossier-hero-photo"
              src={photoCouverture}
              alt=""
              fetchPriority="high"
              decoding="async"
            />
            <div className="dossier-hero-voile" aria-hidden="true" />
          </>
        )}
        <div className="dossier-hero-texte">
          <span className="dossier-hero-drapeau">
            <CountryFlag id={dossier.slug} />
          </span>
          <p className="eyebrow">{cover.eyebrow}</p>
          <h1>{cover.title}</h1>
          {cover.officiel && <p className="dossier-hero-officiel">{cover.officiel}</p>}
          {cover.subtitle && (
            <Paragraphes texte={cover.subtitle} className="dossier-hero-chapeau" />
          )}
          {dossier.pdf && (
            <a className="dossier-pdf btn-3d btn-3d-light" href={dossier.pdf}>
              Télécharger le dossier (PDF)
            </a>
          )}
        </div>
      </header>

      <div className="dossier-corps">
        {dossier.chiffres && <BlocChiffres bloc={dossier.chiffres} />}
        {dossier.contrainte && (
          <BlocPuces bloc={dossier.contrainte} photographe={photographe} secours={1} />
        )}
        {dossier.stress && <BlocGraphique bloc={dossier.stress} />}
        {dossier.usages && <BlocGraphique bloc={dossier.usages} />}
        {dossier.economie && <BlocChiffres bloc={dossier.economie} />}
        {dossier.productions && <BlocGraphique bloc={dossier.productions} />}
        {dossier.filieres.map((filiere, i) => (
          <BlocPuces key={i} bloc={filiere} photographe={photographe} secours={i + 2} />
        ))}
        {dossier.solutions && <BlocColonnes bloc={dossier.solutions} />}
        {dossier.economies && <BlocGraphique bloc={dossier.economies} />}
        {dossier.regions && <BlocCartes bloc={dossier.regions} photographe={photographe} />}
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

        <Credits dossier={dossier} />
      </div>
    </article>
  );
}
