import type { Metadata } from "next";
import { content } from "@/lib/content";
import FieldTestsPageClient from "@/components/FieldTestsPageClient";
import { SITE_URL, languageAlternates } from "@/lib/site";

export function generateStaticParams() {
  return ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].includes(lang) ? lang : "fr") as keyof typeof content;
  const ft = content[langKey].fieldTests;

  const url = `${SITE_URL}/${lang}/tests-et-rapports`;
  const title = `${ft.title} | Green Solutions`;

  return {
    title,
    description: ft.lede,
    alternates: {
      canonical: url,
      languages: languageAlternates("/tests-et-rapports"),
    },
    openGraph: {
      type: "website",
      title,
      description: ft.lede,
      url,
      siteName: "Green Solutions",
    },
  };
}

export default function Page() {
  return <FieldTestsPageClient />;
}
