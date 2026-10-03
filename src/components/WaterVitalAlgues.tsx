import Reveal from "@/components/Reveal";
import { algues } from "@/lib/water-vital-algues-i18n";
import "./WaterVitalAlgues.css";

/**
 * « Cas d'application : algues vertes dans les lacs d'un golf », sur la page
 * Water Vital®. Le rapport d'application Green Solutions, repris avec son
 * évaluation technique : voir lib/water-vital-algues-i18n.ts pour les mots.
 *
 * Les cinq photos sont celles de ce rapport (parcours de Gapyeong Benest,
 * Corée du Sud). Elles sont petites : elles viennent d'une capture d'écran du
 * rapport d'origine, découpées à leur taille réelle puis doublées.
 */

const PHOTOS_ETAPES = [
  { src: "/images/tech/algues-golf-installation.jpg", w: 474, h: 330 },
  { src: "/images/tech/algues-golf-jour2.jpg", w: 488, h: 326 },
  { src: "/images/tech/algues-golf-jour6.jpg", w: 508, h: 280 },
  { src: "/images/tech/algues-golf-jour8.jpg", w: 416, h: 258 },
];
const PHOTO_LAC = { src: "/images/tech/algues-golf-lac.jpg", w: 874, h: 436 };

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
        <section className="tech-section wv-entete">
          <p className="eyebrow">{x.eyebrow}</p>
          <h2>{x.title}</h2>
          <p className="wv-lede">{x.lede}</p>
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
                    loading="lazy"
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
            <img src={PHOTO_LAC.src} width={PHOTO_LAC.w} height={PHOTO_LAC.h} alt={x.lakeAlt} loading="lazy" />
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
