import type { Metadata } from "next";
import { content } from "@/lib/content";
import TechnologyPageClient from "@/components/TechnologyPageClient";
import { SITE_URL } from "@/lib/site";

const TECH_IDS = [
  "retention-eau",
  "paulownia",
  "fertilisation",
  "protection",
  "eau-restructuree",
  "agroforesterie",
] as const;

const TECH_HERO: Record<string, string> = {
  "retention-eau": "/images/card-evergreen.jpg",
  paulownia: "/images/card-paulownia.jpg",
  fertilisation: "/images/stock/wheat-golden-hour.jpg",
  protection: "/images/card-napema.jpg",
  "eau-restructuree": "/images/card-water-vital.jpg",
  agroforesterie: "/images/card-agroforesterie.jpg",
};

export function generateStaticParams() {
  return TECH_IDS.flatMap((id) =>
    ["fr", "en", "es", "pt", "ar", "zh", "id", "de"].map((lang) => ({ lang, id }))
  );
}

type Params = { params: Promise<{ lang: string; id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id, lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de"].includes(lang) ? lang : "fr") as keyof typeof content;
  const item = content[langKey].products.items.find((p) => p.id === id);
  if (!item) return {};

  const url = `${SITE_URL}/${lang}/technologies/${id}`;
  const title = `${item.title} — ${item.kicker} | Green Solutions`;
  const description = item.text;
  const image = TECH_HERO[id];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/technologies/${id}`,
        en: `${SITE_URL}/en/technologies/${id}`,
        es: `${SITE_URL}/es/technologies/${id}`,
        pt: `${SITE_URL}/pt/technologies/${id}`,
        ar: `${SITE_URL}/ar/technologies/${id}`,
        zh: `${SITE_URL}/zh/technologies/${id}`,
        id: `${SITE_URL}/id/technologies/${id}`,
        de: `${SITE_URL}/de/technologies/${id}`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "Green Solutions",
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: item.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: Params) {
  const { id, lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de"].includes(lang) ? lang : "fr") as keyof typeof content;
  const item = content[langKey].products.items.find((p) => p.id === id);

  const jsonLd = item
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: item.title,
        description: item.text,
        image: `${SITE_URL}${TECH_HERO[id] || ""}`,
        url: `${SITE_URL}/${lang}/technologies/${id}`,
        brand: {
          "@type": "Organization",
          name: "Green Solutions",
        },
        additionalProperty: item.facts.map((f) => ({
          "@type": "PropertyValue",
          value: f,
        })),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <TechnologyPageClient />
    </>
  );
}
