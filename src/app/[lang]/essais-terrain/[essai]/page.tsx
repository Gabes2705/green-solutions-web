import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EssaiPage from "@/components/EssaiPage";
import { ESSAIS } from "@/lib/essais";
import { SITE_URL } from "@/lib/site";

/** Rédigés en français seulement : servis sous /fr, nulle part ailleurs. */
export const dynamicParams = false;

export function generateStaticParams() {
  return ESSAIS.map((e) => ({ lang: "fr", essai: e.slug }));
}

type Params = { params: Promise<{ lang: string; essai: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, essai: slug } = await params;
  const essai = ESSAIS.find((e) => e.slug === slug);
  if (!essai || lang !== "fr") return {};

  const url = `${SITE_URL}/fr/essais-terrain/${slug}`;
  return {
    title: essai.titre,
    description: essai.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: essai.titre,
      description: essai.description,
      url,
      siteName: "Green Solutions",
      locale: "fr_FR",
    },
    twitter: { card: "summary", title: essai.titre, description: essai.description },
  };
}

export default async function Page({ params }: Params) {
  const { lang, essai: slug } = await params;
  const essai = ESSAIS.find((e) => e.slug === slug);
  if (!essai || lang !== "fr") notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Green Solutions", item: `${SITE_URL}/fr/` },
      { "@type": "ListItem", position: 2, name: "Essais de terrain", item: `${SITE_URL}/fr/essais-terrain` },
      { "@type": "ListItem", position: 3, name: essai.titre, item: `${SITE_URL}/fr/essais-terrain/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <EssaiPage essai={essai} />
    </>
  );
}
