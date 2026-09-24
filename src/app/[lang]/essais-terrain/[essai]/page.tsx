import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EssaiPage from "@/components/EssaiPage";
import { ESSAIS } from "@/lib/essais";
import { LANGUES_ESSAIS, essaiTraduit, habillage } from "@/lib/essais-i18n";
import { SITE_URL } from "@/lib/site";

/** Servis dans les langues traduites, et nulle part ailleurs. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUES_ESSAIS.flatMap((lang) => ESSAIS.map((e) => ({ lang, essai: e.slug })));
}

type Params = { params: Promise<{ lang: string; essai: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, essai: base } = await params;
  const trouve = ESSAIS.find((e) => e.slug === base);
  if (!trouve || !LANGUES_ESSAIS.includes(lang)) return {};
  const essai = essaiTraduit(lang, trouve);

  const url = `${SITE_URL}/${lang}/essais-terrain/${base}`;
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
    },
    twitter: { card: "summary", title: essai.titre, description: essai.description },
  };
}

export default async function Page({ params }: Params) {
  const { lang, essai: slug } = await params;
  const trouve = ESSAIS.find((e) => e.slug === slug);
  if (!trouve || !LANGUES_ESSAIS.includes(lang)) notFound();
  const essai = essaiTraduit(lang, trouve);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Green Solutions", item: `${SITE_URL}/${lang}/` },
      { "@type": "ListItem", position: 2, name: habillage(lang).hubEyebrow, item: `${SITE_URL}/${lang}/essais-terrain` },
      { "@type": "ListItem", position: 3, name: essai.titre, item: `${SITE_URL}/${lang}/essais-terrain/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <EssaiPage essai={essai} langue={lang} />
    </>
  );
}
