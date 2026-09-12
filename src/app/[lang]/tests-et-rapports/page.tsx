import type { Metadata } from "next";
import { content } from "@/lib/content";
import FieldTestsPageClient from "@/components/FieldTestsPageClient";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return ["fr", "en", "es", "pt", "ar", "zh", "id", "de"].map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de"].includes(lang) ? lang : "fr") as keyof typeof content;
  const ft = content[langKey].fieldTests;

  const url = `${SITE_URL}/${lang}/tests-et-rapports`;
  const title = `${ft.title} | Green Solutions`;

  return {
    title,
    description: ft.lede,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/tests-et-rapports`,
        en: `${SITE_URL}/en/tests-et-rapports`,
        es: `${SITE_URL}/es/tests-et-rapports`,
        pt: `${SITE_URL}/pt/tests-et-rapports`,
        ar: `${SITE_URL}/ar/tests-et-rapports`,
        zh: `${SITE_URL}/zh/tests-et-rapports`,
        id: `${SITE_URL}/id/tests-et-rapports`,
        de: `${SITE_URL}/de/tests-et-rapports`,
      },
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
