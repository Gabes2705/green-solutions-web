import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/components/DossierPage.css";
import { GUIDES } from "@/lib/guides";
import { ESSAIS, GRAPHIQUES } from "@/lib/essais";
import { Graphiques, PhotoLibre, photosDe } from "@/components/EssaisVisuels";
import VideoPousse from "@/components/VideoPousse";
import { FILMS } from "@/lib/films";
import { SITE_URL } from "@/lib/site";

/** Rédigés en français seulement : servis sous /fr, nulle part ailleurs. */
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ lang: "fr", guide: g.slug }));
}

type Params = { params: Promise<{ lang: string; guide: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, guide: slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide || lang !== "fr") return {};

  const url = `${SITE_URL}/fr/guides/${slug}`;
  return {
    title: guide.titre,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: guide.titre,
      description: guide.description,
      url,
      siteName: "Green Solutions",
      locale: "fr_FR",
    },
    twitter: { card: "summary", title: guide.titre, description: guide.description },
  };
}

export default async function Page({ params }: Params) {
  const { lang, guide: slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide || lang !== "fr") notFound();

  const essais = guide.essais
    .map((s) => ESSAIS.find((e) => e.slug === s))
    .filter((e) => e !== undefined);

  const photos = photosDe(guide.slug);
  const graphiques = GRAPHIQUES[guide.slug] ?? [];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Green Solutions", item: `${SITE_URL}/fr/` },
      { "@type": "ListItem", position: 2, name: guide.titre, item: `${SITE_URL}/fr/guides/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <article className="dossier-page" lang="fr-FR">
        <div className="tech-bar">
          <a href="/fr/" className="tech-back btn-3d btn-3d-light">
            ← Green Solutions
          </a>
        </div>

        <header className={`dossier-hero gv-hero${photos[0] ? "" : " dossier-hero-uni"}`}>
          {photos[0] && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="dossier-hero-photo" src={photos[0].src} alt="" fetchPriority="high" />
              <div className="dossier-hero-voile" aria-hidden="true" />
            </>
          )}
          <div className="dossier-hero-texte">
            <p className="eyebrow">{guide.eyebrow}</p>
            <h1>{guide.h1}</h1>
            <p className="dossier-hero-chapeau">{guide.chapeau}</p>
            <a
              className="dossier-pdf btn-3d btn-3d-light"
              href={`/fr/technologies/${guide.technologie}`}
            >
              Voir la fiche produit
            </a>
          </div>
        </header>

        <div className="dossier-corps">
          <section className="dossier-section">
            <div className="dossier-chiffres">
              {guide.chiffres.map((c, i) => (
                <div key={i} className="dossier-chiffre">
                  <span className="dossier-chiffre-valeur">{c.valeur}</span>
                  <span className="dossier-chiffre-label">{c.label}</span>
                </div>
              ))}
            </div>
          </section>

          {guide.sections.map((s, i) => (
            <section key={i} className="dossier-section">
              <h2 className="section-title">{s.titre}</h2>
              {i === 0 ? (
                <div className="gv-duo">
                  <div>
                    {s.paragraphes?.map((p, j) => (
                      <p key={j} className="dossier-texte">
                        {p}
                      </p>
                    ))}
                  </div>
                  <VideoPousse film={FILMS.mais} />
                </div>
              ) : (
                s.paragraphes?.map((p, j) => (
                  <p key={j} className="dossier-texte">
                    {p}
                  </p>
                ))
              )}
              {s.puces && (
                <ul className="dossier-puces">
                  {s.puces.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {graphiques.length > 0 && (
            <section className="dossier-section">
              <p className="eyebrow">Résultats de terrain</p>
              <h2 className="section-title">Ce que les essais ont mesuré</h2>
              <Graphiques graphiques={graphiques} />
            </section>
          )}

          {photos.length > 0 && (
            <section className="dossier-section">
              <div className="gv-photos">
                {photos.map((ph, i) => (
                  <PhotoLibre key={i} photo={ph} alt="Jeunes plants de tomates en serre" />
                ))}
              </div>
            </section>
          )}

          {essais.length > 0 && (
            <section className="dossier-section">
              <p className="eyebrow">Preuves de terrain</p>
              <h2 className="section-title">Les essais qui l&apos;ont mesuré</h2>
              <ul className="dossier-puces">
                {essais.map((e) => (
                  <li key={e.slug}>
                    <a href={`/fr/essais-terrain/${e.slug}`}>{e.titre}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="dossier-section">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="section-title">Ce qu&apos;on nous demande souvent</h2>
            {guide.faq.map((f, i) => (
              <div key={i} className="dossier-lecture">
                <h3>{f.q}</h3>
                <p>{f.r}</p>
              </div>
            ))}
          </section>
        </div>
      </article>
    </>
  );
}
