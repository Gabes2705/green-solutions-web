import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FermesIdeales from "@/components/FermesIdeales";
import type { Lang } from "@/lib/content";
import { FERMES } from "@/lib/fermes-i18n";
import { LANGUAGES, SITE_URL, languageAlternates } from "@/lib/site";

/**
 * « Notre partenaire et les fermes idéales » : une rubrique autonome, dans la
 * navigation principale, et non une fiche pays ni une fiche produit.
 *
 * Servie dans les quatorze langues du site. Les textes sont dans
 * src/lib/fermes-i18n. Seul le texte français a été relu : les autres langues
 * sont à relire avant publication.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

function estLangue(lang: string): lang is Lang {
  return (LANGUAGES as readonly string[]).includes(lang);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const c = FERMES[lang];
  const url = `${SITE_URL}/${lang}/fermes-ideales`;

  return {
    title: c.meta.titre,
    description: c.meta.description,
    alternates: {
      canonical: url,
      languages: languageAlternates("/fermes-ideales"),
    },
    openGraph: {
      type: "article",
      title: c.meta.titre,
      description: c.meta.description,
      url,
      siteName: "Green Solutions",
      locale: c.locale,
    },
    twitter: { card: "summary_large_image", title: c.meta.titre, description: c.meta.description },
  };
}

export default async function Page({ params }: Params) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const c = FERMES[lang];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Green Solutions", item: `${SITE_URL}/${lang}/` },
      { "@type": "ListItem", position: 2, name: c.meta.fil, item: `${SITE_URL}/${lang}/fermes-ideales` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <FermesIdeales lang={lang} />
    </>
  );
}
