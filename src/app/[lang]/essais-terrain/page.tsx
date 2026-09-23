import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/components/DossierPage.css";
import { GUIDES } from "@/lib/guides";
import "@/components/EssaisVisuels.css";
import { photosDe } from "@/components/EssaisVisuels";
import VideoPousse from "@/components/VideoPousse";
import { FILMS } from "@/lib/films";
import { SITE_URL } from "@/lib/site";
import { LANGUES_ESSAIS, enCoursTraduits, essaisTraduits, habillage } from "@/lib/essais-i18n";

/**
 * La liste des essais de terrain : la page qui les relie tous, et que Google
 * trouve en premier pour « essai hydrorétenteur » ou « résultats hydrogel ».
 *
 * Servie dans chaque langue traduite. Les guides, eux, n'existent qu'en
 * français : la section qui les liste ne s'affiche que là.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUES_ESSAIS.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGUES_ESSAIS.includes(lang)) return {};
  const h = habillage(lang);
  const essais = essaisTraduits(lang);
  const description = `${h.hubChapeau.split(".")[0]}. ${essais
    .slice(0, 4)
    .map((e) => e.culture.split(" (")[0])
    .join(", ")}…`;
  const url = `${SITE_URL}/${lang}/essais-terrain`;

  return {
    title: `${h.hubTitre} | Green Solutions`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: h.hubTitre,
      description,
      url,
      siteName: "Green Solutions",
    },
  };
}

/** La palmeraie en CC0 : lumineuse, et sans crédit obligatoire. Il est donné quand même, en bas. */
const BANDEAU = photosDe("palmiers-dattiers-emirats-icba")[1];

export default async function Page({ params }: Params) {
  const { lang } = await params;
  if (!LANGUES_ESSAIS.includes(lang)) notFound();

  const h = habillage(lang);
  const essais = essaisTraduits(lang);
  const enCours = enCoursTraduits(lang);
  const rtl = lang === "ar";

  return (
    <article className="dossier-page" lang={lang} dir={rtl ? "rtl" : undefined}>
      <div className="tech-bar">
        <a href={`/${lang}/`} className="tech-back btn-3d btn-3d-light">
          ← Green Solutions
        </a>
      </div>

      <header className="dossier-hero gv-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="dossier-hero-photo" src={BANDEAU.src} alt="" fetchPriority="high" />
        <div className="dossier-hero-voile" aria-hidden="true" />
        <div className="dossier-hero-texte">
          <p className="eyebrow">{h.hubEyebrow}</p>
          <h1>{h.hubTitre}</h1>
          <p className="dossier-hero-chapeau">{h.hubChapeau}</p>
        </div>
      </header>

      <div className="dossier-corps">
        <section className="dossier-section">
          <div className="gv-duo">
            <VideoPousse film={FILMS.racines} />
            <p className="dossier-texte">{h.hubPrincipe}</p>
          </div>
        </section>

        <section className="dossier-section">
          <h2 className="section-title">{h.hubTermines}</h2>
          <div className="dossier-cartes">
            {essais.map((e) => (
              <a key={e.slug} className="dossier-carte" href={`/${lang}/essais-terrain/${e.slug}`}>
                {photosDe(e.slug)[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photosDe(e.slug)[0].src} alt="" loading="lazy" decoding="async" />
                )}
                <div className="dossier-carte-corps">
                  <p className="eyebrow">
                    {e.culture.split(" (")[0]} · {e.pays}
                  </p>
                  <h3>{e.titre}</h3>
                  <p>{e.periode}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="dossier-section">
          <h2 className="section-title">{h.hubEnCours}</h2>
          <ul className="dossier-puces">
            {enCours.map((e) => (
              <li key={e.pdf}>
                <strong>{e.titre}.</strong> {e.texte} <a href={e.pdf}>PDF</a>
              </li>
            ))}
          </ul>
        </section>

        {lang === "fr" && (
          <section className="dossier-section">
            <h2 className="section-title">{h.hubGuides}</h2>
            <ul className="dossier-puces">
              {GUIDES.map((g) => (
                <li key={g.slug}>
                  <a href={`/fr/guides/${g.slug}`}>{g.titre}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="dossier-section">
          <p className="gv-credit">
            {h.hubCreditPhoto} {BANDEAU.auteur} —{" "}
            <a href={BANDEAU.page} target="_blank" rel="noreferrer">
              {BANDEAU.licence}, Wikimedia Commons
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
