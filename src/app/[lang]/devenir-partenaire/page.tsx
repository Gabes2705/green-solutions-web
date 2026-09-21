import type { Metadata } from "next";
import PartnerApplicationPageClient from "@/components/PartnerApplicationPageClient";
import { SITE_URL, languageAlternates } from "@/lib/site";

const LANGS = ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const url = `${SITE_URL}/${lang}/devenir-partenaire`;
  return {
    title: "Devenir partenaire | Green Solutions",
    description: "Présentez votre entreprise et votre projet de collaboration à Green Solutions. Réponse sous 24 heures.",
    alternates: { canonical: url, languages: languageAlternates("/devenir-partenaire") },
    openGraph: { type: "website", title: "Devenir partenaire | Green Solutions", description: "Présentez votre projet de partenariat. Réponse sous 24 heures.", url, siteName: "Green Solutions" },
  };
}

export default function Page() {
  return <PartnerApplicationPageClient />;
}
