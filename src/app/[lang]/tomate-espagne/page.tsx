import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TomatePage from "@/components/TomatePage";
import { LANGUES_TOMATE, tomate } from "@/lib/tomate-i18n";
import { SITE_URL } from "@/lib/site";

/**
 * « Tomate d'industrie en Espagne », dans les quatorze langues.
 *
 * Servie sous le même chemin partout, comme essais-terrain : un seul nom
 * d'adresse par page, quelle que soit la langue, sinon les traductions ne se
 * désignent plus entre elles.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUES_TOMATE.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGUES_TOMATE.includes(lang)) return {};
  const x = tomate(lang);
  const url = `${SITE_URL}/${lang}/tomate-espagne`;

  return {
    title: `${x.titre} | Green Solutions`,
    description: x.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries([
        ...LANGUES_TOMATE.map((l) => [l, `${SITE_URL}/${l}/tomate-espagne`]),
        ["x-default", `${SITE_URL}/fr/tomate-espagne`],
      ]),
    },
    openGraph: {
      type: "article",
      title: x.titre,
      description: x.description,
      url,
      siteName: "Green Solutions",
    },
    twitter: { card: "summary", title: x.titre, description: x.description },
  };
}

export default async function Page({ params }: Params) {
  const { lang } = await params;
  if (!LANGUES_TOMATE.includes(lang)) notFound();
  const x = tomate(lang);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Green Solutions", item: `${SITE_URL}/${lang}/` },
      { "@type": "ListItem", position: 2, name: x.titre, item: `${SITE_URL}/${lang}/tomate-espagne` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <TomatePage langue={lang} />
    </>
  );
}
