import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const LANGUAGES = ["fr", "en", "es", "pt", "ar", "zh", "id", "de"] as const;
const TECH_IDS = [
  "retention-eau",
  "paulownia",
  "fertilisation",
  "protection",
  "eau-restructuree",
  "agroforesterie",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  // Homepage for each language
  LANGUAGES.forEach((lang) => {
    urls.push({
      url: `${SITE_URL}/${lang}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  // Technology pages for each language
  TECH_IDS.forEach((id) => {
    LANGUAGES.forEach((lang) => {
      urls.push({
        url: `${SITE_URL}/${lang}/technologies/${id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return urls;
}
