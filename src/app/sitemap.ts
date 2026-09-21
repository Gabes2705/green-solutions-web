import type { MetadataRoute } from "next";
import { DOSSIER_LANGS } from "@/lib/dossiers-index";
import { SITE_URL, LANGUAGES } from "@/lib/site";

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

  // Partners and field reports. They exist in all thirteen languages and
  // answer 200 in every one of them, but had never been listed here: a search
  // engine does not visit what it is not shown, so twenty-six real pages were
  // invisible.
  ["partenaires", "devenir-partenaire", "tests-et-rapports"].forEach((slug) => {
    LANGUAGES.forEach((lang) => {
      urls.push({
        url: `${SITE_URL}/${lang}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  // Country dossiers. Each one is written in the language of its market, so it
  // is listed once, under that language, rather than thirteen times: the South
  // African dossier is English wherever you reach it, and claiming a German
  // version would be claiming a translation that does not exist.
  Object.entries(DOSSIER_LANGS).forEach(([pays, lang]) => {
    urls.push({
      url: `${SITE_URL}/${lang}/dossiers/${pays}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
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
