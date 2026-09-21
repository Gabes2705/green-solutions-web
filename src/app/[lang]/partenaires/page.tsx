import type { Metadata } from "next";
import { content } from "@/lib/content";
import PartnersPageClient from "@/components/PartnersPageClient";
import { SITE_URL, languageAlternates } from "@/lib/site";

export function generateStaticParams() {
  return ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].includes(lang) ? lang : "fr") as keyof typeof content;
  const p = content[langKey].partnersPage;

  const url = `${SITE_URL}/${lang}/partenaires`;
  const title = `${p.title} | Green Solutions`;

  return {
    title,
    description: p.lede,
    alternates: {
      canonical: url,
      languages: languageAlternates("/partenaires"),
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
