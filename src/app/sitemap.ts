import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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

  // Legal pages. Written in French only, so listed once rather than per
  // language: the same text under eight URLs would be eight duplicates.
  ["mentions-legales", "confidentialite"].forEach((slug) => {
    urls.push({
      url: `${SITE_URL}/fr/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    });
  });

  return urls;
}
