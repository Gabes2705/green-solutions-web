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
    "Revitalisation de l'eau",
    "Nutrition des plantes",
    "Médecine pour les plantes",
    "Arbre Paulownia",
  ],
  en: [
    "Water savings",
    "Water revitalisation",
    "Plant nutrition",
    "Plant medicine",
    "Paulownia tree",
  ],
  es: [
    "Ahorro de agua",
    "Revitalización del agua",
    "Nutrición vegetal",
    "Medicina para las plantas",
    "Árbol Paulownia",
  ],
  pt: [
    "Economia de água",
    "Revitalização da água",
    "Nutrição vegetal",
    "Medicina para as plantas",
    "Árvore Paulownia",
  ],
  ar: [
    "توفير المياه",
    "تنشيط المياه",
    "تغذية النبات",
    "طب النبات",
    "شجرة بولونيا",
  ],
  zh: ["节水", "水质活化", "植物营养", "植物医学", "泡桐树"],
  id: [
    "Hemat air",
    "Revitalisasi air",
    "Nutrisi tanaman",
    "Obat tanaman",
    "Pohon Paulownia",
  ],
  de: [
    "Wasserersparnis",
    "Wasserbelebung",
    "Pflanzenernährung",
    "Pflanzenmedizin",
    "Paulownia-Baum",
  ],
};

export function doorsFor(lang: Lang): Door[] {
  const labels = LABELS[lang] ?? LABELS.fr;
  return IDS.map((id, i) => ({ id, label: labels[i] }));
}
