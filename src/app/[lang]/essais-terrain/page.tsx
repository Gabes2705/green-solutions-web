import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/components/DossierPage.css";
import { ESSAIS, ESSAIS_EN_COURS } from "@/lib/essais";
import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

/**
 * La liste des essais de terrain : la page qui les relie tous, et que Google
 * trouve en premier pour « essai hydrorétenteur » ou « résultats hydrogel ».
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "fr" }];
}

const TITRE = "Essais de terrain : l'hydrorétenteur EVERGREEN en conditions réelles";
const DESCRIPTION =
  "Résultats mesurés de l'hydrorétenteur EVERGREEN sur palmiers, pastèques, coton, maïs, canne à sucre, pommes de terre et soja : jusqu'à 82 % d'eau en moins.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/fr/essais-terrain` },
  openGraph: {
    type: "website",
    title: TITRE,
    description: DESCRIPTION,
    url: `${SITE_URL}/fr/essais-terrain`,
    siteName: "Green Solutions",
    locale: "fr_FR",
  },
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "fr") notFound();

  return (
    <article className="dossier-page" lang="fr-FR">
      <div className="tech-bar">
        <a href="/fr/" className="tech-back btn-3d btn-3d-light">
          ← Green Solutions
        </a>
      </div>

      <header className="dossier-hero dossier-hero-uni">
        <div className="dossier-hero-texte">
          <p className="eyebrow">Essais de terrain</p>
          <h1>Moins d&apos;eau, plus de récolte : les résultats mesurés</h1>
          <p className="dossier-hero-chapeau">
            Universités, centres de recherche et exploitations ont testé l&apos;hydrorétenteur
            EVERGREEN, seul ou avec le fertilisant ECOFERT, sur sept cultures et dans six pays.
            Chaque page reprend les chiffres du rapport et renvoie au document complet.
          </p>
        </div>
      </header>

      <div className="dossier-corps">
        <section className="dossier-section">
          <h2 className="section-title">Les essais terminés</h2>
          <div className="dossier-cartes">
            {ESSAIS.map((e) => (
              <a key={e.slug} className="dossier-carte" href={`/fr/essais-terrain/${e.slug}`}>
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
          <h2 className="section-title">Les essais en cours avec des universités</h2>
          <ul className="dossier-puces">
            {ESSAIS_EN_COURS.map((e) => (
              <li key={e.pdf}>
                <strong>{e.titre}.</strong> {e.texte}{" "}
                <a href={e.pdf}>Lettre de l&apos;université (PDF)</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="dossier-section">
          <h2 className="section-title">Nos guides</h2>
          <ul className="dossier-puces">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <a href={`/fr/guides/${g.slug}`}>{g.titre}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
