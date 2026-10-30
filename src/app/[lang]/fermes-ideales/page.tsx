import type { Metadata } from "next";
import FermesIdeales from "@/components/FermesIdeales";
import { SITE_URL } from "@/lib/site";

/**
 * « Notre partenaire et les fermes idéales » : une rubrique autonome, dans la
 * navigation principale, et non une fiche pays ni une fiche produit.
 *
 * Française pour l'instant. Les autres langues viendront après la relecture du
 * texte français, comme le prévoit le dossier de préparation ; d'ici là, la
 * page n'existe que sous /fr et les autres chemins répondent 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "fr" }];
}

const URL_PAGE = `${SITE_URL}/fr/fermes-ideales`;
const TITRE = "Christian Carnavalet et la French Method | Green Solutions";
const DESCRIPTION =
  "Découvrez notre partenariat avec Christian Carnavalet, l’Institut Moreau-Daverne et la French Method pour concevoir des fermes adaptées à leur territoire.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL_PAGE,
    languages: { fr: URL_PAGE, "x-default": URL_PAGE },
  },
  openGraph: {
    type: "article",
    title: TITRE,
    description: DESCRIPTION,
    url: URL_PAGE,
    siteName: "Green Solutions",
    locale: "fr_FR",
  },
  twitter: { card: "summary_large_image", title: TITRE, description: DESCRIPTION },
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Green Solutions", item: `${SITE_URL}/fr/` },
      { "@type": "ListItem", position: 2, name: "Fermes idéales", item: URL_PAGE },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <FermesIdeales />
    </>
  );
}
