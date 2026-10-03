import CountryFlag from "@/components/CountryFlag";
import Reveal from "@/components/Reveal";
import { algues } from "@/lib/water-vital-algues-i18n";
import "./WaterVitalAlgues.css";

/**
 * « Cas d'application : algues vertes dans les lacs d'un golf », sur la page
 * Water Vital®. Le rapport d'application Green Solutions, repris avec son
 * évaluation technique : voir lib/water-vital-algues-i18n.ts pour les mots.
 *
 * Les quatre photos de terrain (installation, jours 2, 6 et 8) sont celles de
 * ce rapport (parcours de Gapyeong Benest, Corée du Sud). Elles sont petites :
 * elles viennent d'une capture d'écran du rapport d'origine, découpées à leur
 * taille réelle ; celle du jour 8 a seulement été lissée et éclaircie un peu.
 *
 * La vue d'ensemble du lac n'est PAS la photo : c'est une image retravaillée
 * par ordinateur à partir d'elle (agrandie, couleurs renforcées : l'eau y est
 * bleue, elle est verte sur la photo). Sa légende le dit, dans les 14 langues :
 * ne jamais la retirer, ni présenter cette image comme le cliché réel.
 *
 * La photo du green, en tête de section, n'est pas celle du Gapyeong Benest :
 * c'est une illustration libre de droits (Wikimedia Commons, crédit affiché).
 */

const PHOTOS_ETAPES = [
  { src: "/images/tech/algues-golf-installation.jpg", w: 474, h: 330 },
  { src: "/images/tech/algues-golf-jour2.jpg", w: 488, h: 326 },
  { src: "/images/tech/algues-golf-jour6.jpg", w: 508, h: 280 },
  { src: "/images/tech/algues-golf-jour8.jpg", w: 624, h: 387 },
];
const PHOTO_LAC = { src: "/images/tech/algues-golf-lac.jpg", w: 1200, h: 597 };

const PHOTO_GREEN = { src: "/images/tech/algues-golf-green.jpg", w: 1200, h: 798 };
/** Crédit de la photo du green : CC BY-SA 4.0 exige l'auteur, la licence et un lien vers la source. */
const GREEN_CREDIT = {
  auteur: "PattayaPatrol",
  source:
    "https://commons.wikimedia.org/wiki/File:DZ6_2525_Sunny_day_on_the_green_a_yellow_flag_flutters_as_golfers_line_up_their_next_putt.jpg",
  licence: "CC BY-SA 4.0",
  licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
};

/** Les six sources de l'évaluation, numérotées [1] à [6] dans le texte. Les titres restent ceux des pages d'origine, en anglais. */
const SOURCES = [
  { label: "EPA — What Causes HABs", href: "https://www.epa.gov/habs/what-causes-habs" },
  {
    label: "EPA — Control Measures for Cyanobacterial HABs in Surface Water",
    href: "https://www.epa.gov/habs/control-measures-cyanobacterial-habs-surface-water",
  },
  {
    label: "EPA — Dissolved Oxygen and Biochemical Oxygen Demand",
    href: "https://archive.epa.gov/water/archive/web/html/vms52.html",
  },
  { label: "EPA — The Effects: Environment", href: "https://www.epa.gov/nutrientpollution/effects-environment" },
  {
    label: "Penn State Extension — Turfgrass Fertilization",
    href: "https://extension.psu.edu/turfgrass-fertilization-a-basic-guide-for-professional-turfgrass-managers",
  },
  {
    label: "University of Maryland Extension — Understanding Your Soil Test Report",
    href: "https://www.extension.umd.edu/resource/understanding-your-soil-test-report",
  },
];

export default function WaterVitalAlgues({ langue }: { langue: string }) {
  const x = algues(langue);

  return (
    <div className="wv-algues" id="algues-golf">
      <Reveal>
        <section className="tech-section tech-section-duo wv-entete">
          <div className="tech-section-texte">
            <div className="wv-eyebrow">
              <span className="wv-drapeau">
                <CountryFlag id="coree-du-sud" />
              </span>
              <p className="eyebrow">{x.eyebrow}</p>
            </div>
            <h2>{x.title}</h2>
            <p className="wv-lede">{x.lede}</p>
          </div>
          <figure className="tech-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTO_GREEN.src} width={PHOTO_GREEN.w} height={PHOTO_GREEN.h} alt={x.greenAlt} decoding="async" />
            <figcaption>
              {x.greenCaption}{" "}
              <span className="wv-credit" dir="ltr">
                ©{" "}
                <a href={GREEN_CREDIT.source} target="_blank" rel="noopener noreferrer">
                  {GREEN_CREDIT.auteur}
                </a>{" "}
                ·{" "}
                <a href={GREEN_CREDIT.licenceUrl} target="_blank" rel="noopener noreferrer">
                  {GREEN_CREDIT.licence}
                </a>{" "}
                · Wikimedia Commons
              </span>
            </figcaption>
          </figure>
        </section>
      </Reveal>

      <Reveal>
        <div className="wv-colonnes">
          <section className="tech-section">
            <h3>{x.clubTitle}</h3>
            <p>{x.clubText}</p>
            <h3>{x.problemTitle}</h3>
            <p>{x.problemIntro}</p>
            <ul className="wv-liste">
              {x.problems.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>{x.problemOutro}</p>
          </section>
          <section className="tech-section">
            <h3>{x.controlsTitle}</h3>
            <ul className="wv-liste">
              {x.controls.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3>{x.solutionTitle}</h3>
            <p>{x.solutionText1}</p>
            <p>{x.solutionText2}</p>
          </section>
        </div>
      </Reveal>

      <Reveal stagger=".wv-etape">
        <section className="tech-section">
          <h3>{x.stagesTitle}</h3>
          <div className="wv-etapes">
            {x.stages.map((e, i) => (
              <figure className="wv-etape" key={e.label}>
                <div className="wv-etape-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PHOTOS_ETAPES[i].src}
                    width={PHOTOS_ETAPES[i].w}
                    height={PHOTOS_ETAPES[i].h}
                    alt={e.alt}
                    decoding="async"
                  />
                  <span className="wv-badge">{e.label}</span>
                </div>
                <figcaption>{e.text}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="tech-section tech-section-duo">
          <div className="tech-section-texte">
            <h3>{x.resultsTitle}</h3>
            <p>{x.resultsText}</p>
            <h3>{x.turfTitle}</h3>
            <p>{x.turfText}</p>
          </div>
          <figure className="tech-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTO_LAC.src} width={PHOTO_LAC.w} height={PHOTO_LAC.h} alt={x.lakeAlt} decoding="async" />
            <figcaption>{x.lakeCaption}</figcaption>
          </figure>
        </section>
      </Reveal>

      <div className="wv-notes">
        <p>{x.note1}</p>
        <p>{x.note2}</p>
        <p>{x.photoCredit}</p>
      </div>

      <Reveal>
        <section className="tech-section wv-evaluation">
          <h2>{x.assessTitle}</h2>
          <p className="wv-sous-titre">{x.assessSubtitle}</p>
          <p>{x.assessIntro}</p>
          <div className="wv-points">
            {x.assess.map((a) => (
              <div key={a.h}>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
              </div>
            ))}
          </div>
          <h3>{x.sourcesTitle}</h3>
          <ol className="wv-sources">
            {SOURCES.map((s, i) => (
              <li key={s.href}>
                <span dir="ltr">[{i + 1}]</span>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="tech-section wv-plan">
          <h2>{x.planTitle}</h2>
          <p>{x.planIntro}</p>
          {x.plan.map((s) => (
            <div key={s.h}>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
          <div className="wv-table-wrap">
            <table className="wv-table">
              <thead>
                <tr>
                  {x.planHead.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {x.planRows.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    <td data-label={x.planHead[1]}>{r[1]}</td>
                    <td data-label={x.planHead[2]}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>{x.planOutro1}</p>
          <p>{x.planOutro2}</p>
        </section>
      </Reveal>
    </div>
  );
}
