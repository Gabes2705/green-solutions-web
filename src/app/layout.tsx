import type { Metadata } from "next";
import { Fraunces, Manrope, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

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
const TITLE = "Green Solutions · Agriculture écologiquement intensive";
const DESCRIPTION =
  "Technologies agricoles disruptives pour l'eau, les sols, les cultures et la forêt : EVERGREEN®, ECOFERT®, NAPEMA®, Water Vital®, Paulownia ALTIFOLIA®.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Green Solutions",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Solutions · Agriculture écologiquement intensive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07160F",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Green Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-icon.png`,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "821 Chemin des Clapiers",
    postalCode: "83220",
    addressLocality: "Le Pradet",
    addressCountry: "FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${manrope.variable} ${bricolage.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/logo-icon.png"
          fetchPriority="high"
        />
        <meta name="google-site-verification" content="47xK9mZp2nQ6vL8wR3jT5bF1cD4eH6sK9pM2qN7rS0tU" />
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
