import type { Metadata } from "next";
import { Fraunces, Manrope, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "../globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-claim",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport = {
  themeColor: "#07160F",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Green Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-icon.png`,
  description:
    "Technologies agricoles disruptives pour l'eau, les sols, les cultures et la forêt : EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, Paulownia ALTIFOLIA®.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "821 Chemin des Clapiers",
    postalCode: "83220",
    addressLocality: "Le Pradet",
    addressCountry: "FR",
  },
};

const translations = {
  fr: {
    title: "Green Solutions · Agriculture écologiquement intensive",
    description: "Technologies agricoles disruptives pour l'eau, les sols, les cultures et la forêt : EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, Paulownia ALTIFOLIA®.",
    locale: "fr_FR",
  },
  en: {
    title: "Green Solutions · Ecological Intensive Agriculture",
    description: "Disruptive agricultural technologies for water, soils, crops and forests: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, Paulownia ALTIFOLIA®.",
    locale: "en_US",
  },
  es: {
    title: "Green Solutions · Agricultura Intensiva Ecológica",
    description: "Tecnologías agrícolas disruptivas para agua, suelos, cultivos y bosques: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, Paulownia ALTIFOLIA®.",
    locale: "es_ES",
  },
  pt: {
    title: "Green Solutions · Agricultura Intensiva Ecológica",
    description: "Tecnologias agrícolas disruptivas para água, solos, cultivos e florestas: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, Paulownia ALTIFOLIA®.",
    locale: "pt_BR",
  },
  ar: {
    title: "جرين سولوشنز · الزراعة المكثفة البيئية",
    description: "تقنيات زراعية ثورية للمياه والتربة والمحاصيل والغابات: EVERGREEN® و ECOFERT® و NAPEMA® و Water Vital® و Paulownia ALTIFOLIA®.",
    locale: "ar_SA",
  },
  zh: {
    title: "绿色解决方案 · 生态集约农业",
    description: "用于水、土壤、作物和森林的颠覆性农业技术：EVERGREEN®、ECOFERT®、NAPEMA®、Water Vital® 和 Paulownia ALTIFOLIA®。",
    locale: "zh_CN",
  },
  id: {
    title: "Green Solutions · Pertanian Intensif Ekologis",
    description: "Teknologi pertanian yang mengganggu untuk air, tanah, tanaman dan hutan: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, dan Paulownia ALTIFOLIA®.",
    locale: "id_ID",
  },
  de: {
    title: "Green Solutions · Ökologisch intensive Landwirtschaft",
    description: "Disruptive Agrartechnologien für Wasser, Böden, Kulturen und Wälder: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® und Paulownia ALTIFOLIA®.",
    locale: "de_DE",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const langKey = (lang as keyof typeof translations) || "fr";
  const t = translations[langKey] || translations.fr;
  const canonical = `${SITE_URL}/${lang}/`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}/fr/`,
        en: `${SITE_URL}/en/`,
        es: `${SITE_URL}/es/`,
        pt: `${SITE_URL}/pt/`,
        ar: `${SITE_URL}/ar/`,
        zh: `${SITE_URL}/zh/`,
        id: `${SITE_URL}/id/`,
        de: `${SITE_URL}/de/`,
        "x-default": `${SITE_URL}/fr/`,
      },
    },
    keywords: [
      "agriculture écologiquement intensive",
      "rétenteur d'eau agricole",
      "EVERGREEN",
      "ECOSORB",
      "ECOFERT",
      "NAPEMA",
      "Water Vital",
      "Paulownia ALTIFOLIA",
      "agroforesterie",
      "irrigation",
    ],
    authors: [{ name: "Green Solutions" }],
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/images/og-image.jpg"],
    },
    openGraph: {
      type: "website",
      locale: t.locale,
      url: canonical,
      siteName: "Green Solutions",
      title: t.title,
      description: t.description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isRtl = lang === "ar";

  return (
    <html
      lang={lang}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fraunces.variable} ${manrope.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="google-site-verification"
          content="47xK9mZp2nQ6vL8wR3jT5bF1cD4eH6sK9pM2qN7rS0tU"
        />
        <meta name="msvalidate.01" content="3B5E7G9J1L4N6Q8S0V2X5Z7C9E2G4J6M" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
