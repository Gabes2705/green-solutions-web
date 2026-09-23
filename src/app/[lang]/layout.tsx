import type { Metadata } from "next";
import { Fraunces, Manrope, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "../globals.css";
import { SITE_URL, languageAlternates } from "@/lib/site";

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
    streetAddress: "46, route de la Condémine",
    postalCode: "1475",
    addressLocality: "Forel",
    addressCountry: "CH",
  },
};

/* La fiche du site lui-même, distincte de celle de l'entreprise. Elle dit aux
 * moteurs que les treize adresses de langue sont un seul site, et non treize
 * sites qui se ressemblent. */
const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Green Solutions",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Green Solutions" },
  inLanguage: ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"],
};

const translations = {
  fr: {
    title: "Green Solutions · Agriculture écologiquement intensive",
    description: "Technologies agricoles innovantes pour mieux gérer l’eau, préserver les sols, soutenir les cultures et développer l’agroforesterie : EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® et Paulownia ALTIFOLIA®.",
    locale: "fr_FR",
  },
  en: {
    title: "Green Solutions · Ecologically Intensive Agriculture",
    description: "Innovative agricultural technologies for water management, soil health, crop performance and agroforestry: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® and Paulownia ALTIFOLIA®.",
    locale: "en_US",
  },
  es: {
    title: "Green Solutions · Agricultura Intensiva Ecológica",
    description: "Tecnologías agrícolas innovadoras para la gestión del agua, la salud del suelo, el rendimiento de los cultivos y la agroforestería: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® y Paulownia ALTIFOLIA®.",
    locale: "es_ES",
  },
  pt: {
    title: "Green Solutions · Agricultura Intensiva Ecológica",
    description: "Tecnologias agrícolas inovadoras para a gestão da água, a saúde do solo, o desempenho das culturas e a agrofloresta: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® e Paulownia ALTIFOLIA®.",
    locale: "pt_BR",
  },
  ar: {
    title: "جرين سولوشنز · الزراعة المكثفة البيئية",
    description: "تقنيات زراعية مبتكرة لإدارة المياه وتحسين التربة ودعم المحاصيل والزراعة الحراجية: EVERGREEN® وECOFERT® وNAPEMA® وWater Vital® وPaulownia ALTIFOLIA®.",
    locale: "ar_SA",
  },
  zh: {
    title: "绿色解决方案 · 生态集约农业",
    description: "面向水资源管理、土壤健康、作物表现和农林复合经营的创新农业技术：EVERGREEN®、ECOFERT®、NAPEMA®、Water Vital® 和 Paulownia ALTIFOLIA®。",
    locale: "zh_CN",
  },
  id: {
    title: "Green Solutions · Pertanian Intensif Berkelanjutan",
    description: "Teknologi pertanian inovatif untuk pengelolaan air, kesehatan tanah, kinerja tanaman, dan agroforestri: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, dan Paulownia ALTIFOLIA®.",
    locale: "id_ID",
  },
  de: {
    title: "Green Solutions · Ökologisch intensive Landwirtschaft",
    description: "Innovative Agrartechnologien für Wassermanagement, Bodengesundheit, Pflanzenleistung und Agroforstwirtschaft: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® und Paulownia ALTIFOLIA®.",
    locale: "de_DE",
  },
  it: {
    title: "Green Solutions · Agricoltura Ecologicamente Intensiva",
    description: "Tecnologie agricole innovative per la gestione dell’acqua, la salute del suolo, le colture e l’agroforestazione: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® e Paulownia ALTIFOLIA®.",
    locale: "it_IT",
  },
  el: {
    title: "Green Solutions · Οικολογικά Εντατική Γεωργία",
    description: "Καινοτόμες γεωργικές τεχνολογίες για τη διαχείριση του νερού, την υγεία του εδάφους, τις καλλιέργειες και την αγροδασοπονία: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® και Paulownia ALTIFOLIA®.",
    locale: "el_GR",
  },
  tr: {
    title: "Green Solutions · Ekolojik Yoğun Tarım",
    description: "Su yönetimi, toprak sağlığı, ürün performansı ve tarımsal ormancılık için yenilikçi tarım teknolojileri: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® ve Paulownia ALTIFOLIA®.",
    locale: "tr_TR",
  },
  pl: {
    title: "Green Solutions · Ekologicznie Intensywne Rolnictwo",
    description: "Innowacyjne technologie rolnicze wspierające gospodarkę wodną, zdrowie gleby, uprawy i agroleśnictwo: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® i Paulownia ALTIFOLIA®.",
    locale: "pl_PL",
  },
  hr: {
    title: "Green Solutions · Ekološki intenzivna poljoprivreda",
    description: "Inovativne poljoprivredne tehnologije za upravljanje vodom, zdravlje tla, uspješnost usjeva i agrošumarstvo: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® i Paulownia ALTIFOLIA®.",
    locale: "hr_HR",
  },
  ca: {
    title: "Green Solutions · Agricultura ecològicament intensiva",
    description: "Tecnologies agrícoles innovadores per a la gestió de l’aigua, la salut del sòl, el rendiment dels cultius i l’agroforesteria: EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital® i Paulownia ALTIFOLIA®.",
    locale: "ca_ES",
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
      languages: languageAlternates("/"),
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
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
