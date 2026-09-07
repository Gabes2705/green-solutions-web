import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...TECH_IDS.map((id) => ({
      url: `${SITE_URL}/technologies/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
