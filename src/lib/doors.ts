import type { Lang } from "./content";

/**
 * The five entry points shown along the bottom of the cover.
 *
 * Deliberately named for what a grower is looking for rather than for the
 * brand behind it: someone searching for a way to irrigate less does not know
 * that EVERGREEN® is the answer, and will never type it.
 *
 * Agroforestry is left out on purpose. It is not a sixth technology but the
 * application that combines the other five, and it has its place further down
 * the page.
 */
export type Door = { id: string; label: string };

const IDS = [
  "retention-eau",
  "eau-restructuree",
  "fertilisation",
  "protection",
  "paulownia",
] as const;

const LABELS: Record<Lang, readonly [string, string, string, string, string]> = {
  fr: [
    "Économie d'eau",
    "Amélioration de l'eau",
    "Croissance optimisée",
    "Protection des plantes",
    "Paulownia",
  ],
  en: [
    "Water savings",
    "Water conditioning",
    "Optimised growth",
    "Plant protection",
    "Paulownia",
  ],
  es: [
    "Ahorro de agua",
    "Mejora del agua",
    "Crecimiento optimizado",
    "Protección vegetal",
    "Paulownia",
  ],
  pt: [
    "Poupança de água",
    "Condicionamento da água",
    "Crescimento otimizado",
    "Proteção vegetal",
    "Paulownia",
  ],
  ar: [
    "توفير المياه",
    "تحسين جودة المياه",
    "نمو مُحسَّن",
    "حماية النباتات",
    "شجرة البولونيا",
  ],
  zh: ["节水", "水质优化", "优化生长", "植物保护", "泡桐"],
  id: [
    "Penghematan air",
    "Pengkondisian air",
    "Pertumbuhan optimal",
    "Perlindungan tanaman",
    "Pohon Paulownia",
  ],
  de: [
    "Wassereinsparung",
    "Wasseraufbereitung",
    "Optimiertes Wachstum",
    "Pflanzenschutz",
    "Paulownia",
  ],
  it: [
    "Risparmio idrico",
    "Trattamento dell'acqua",
    "Crescita ottimizzata",
    "Protezione delle piante",
    "Paulownia",
  ],
  el: [
    "Εξοικονόμηση νερού",
    "Βελτίωση του νερού",
    "Βελτιστοποιημένη ανάπτυξη",
    "Προστασία φυτών",
    "Παουλόβνια",
  ],
  tr: [
    "Su tasarrufu",
    "Su iyileştirme",
    "Optimize büyüme",
    "Bitki koruma",
    "Paulownia",
  ],
  pl: [
    "Oszczędność wody",
    "Uzdatnianie wody",
    "Zoptymalizowany wzrost",
    "Ochrona roślin",
    "Paulownia",
  ],
  hr: [
    "Ušteda vode",
    "Poboljšanje vode",
    "Optimiziran rast",
    "Zaštita biljaka",
    "Paulovnija",
  ],
  ca: [
    "Estalvi d'aigua",
    "Millora de l'aigua",
    "Creixement optimitzat",
    "Protecció vegetal",
    "Paulòwnia",
  ],
};

export function doorsFor(lang: Lang): Door[] {
  const labels = LABELS[lang] ?? LABELS.fr;
  return IDS.map((id, i) => ({ id, label: labels[i] }));
}
