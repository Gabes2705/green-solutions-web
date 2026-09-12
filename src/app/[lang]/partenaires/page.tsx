import type { Metadata } from "next";
import { content } from "@/lib/content";
import PartnersPageClient from "@/components/PartnersPageClient";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return ["fr", "en", "es", "pt", "ar", "zh", "id", "de"].map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de"].includes(lang) ? lang : "fr") as keyof typeof content;
  const p = content[langKey].partnersPage;

  const url = `${SITE_URL}/${lang}/partenaires`;
  const title = `${p.title} | Green Solutions`;

  return {
    title,
    description: p.lede,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/partenaires`,
        en: `${SITE_URL}/en/partenaires`,
        es: `${SITE_URL}/es/partenaires`,
        pt: `${SITE_URL}/pt/partenaires`,
        ar: `${SITE_URL}/ar/partenaires`,
        zh: `${SITE_URL}/zh/partenaires`,
        id: `${SITE_URL}/id/partenaires`,
        de: `${SITE_URL}/de/partenaires`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description: p.lede,
      url,
      siteName: "Green Solutions",
    },
  };
}

export default function Page() {
  return <PartnersPageClient />;
}
