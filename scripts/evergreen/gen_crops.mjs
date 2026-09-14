// Génère src/lib/evergreen/crops.ts à partir de la référence index.html.
// Recopier 180 entrées à la main serait une source d'erreurs silencieuses.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync(process.argv[2], "utf8");

function bloc(nom) {
  const i = html.indexOf(`const ${nom}=`);
  if (i < 0) throw new Error(`${nom} introuvable`);
  const debut = html.indexOf(nom === "GRAINS" ? "[" : "{", i);
  let profondeur = 0;
  for (let k = debut; k < html.length; k++) {
    const c = html[k];
    if (c === "{" || c === "[") profondeur++;
    else if (c === "}" || c === "]") {
      profondeur--;
      if (profondeur === 0) return JSON.parse(html.slice(debut, k + 1));
    }
  }
  throw new Error(`${nom} non terminé`);
}

const RULES = bloc("RULES");
const DENS = bloc("DENS");
const ROWS = bloc("ROWS");
const YIELD = bloc("YIELD");
const GRAINS = bloc("GRAINS");

const unites = new Set(Object.values(RULES).map((r) => r.unit));
console.log(`${Object.keys(RULES).length} cultures, unités : ${[...unites].join(", ")}`);
console.log(`densités ${Object.keys(DENS).length} · écartements ${Object.keys(ROWS).length} · rendements ${Object.keys(YIELD).length} · céréales ${GRAINS.length}`);

const q = (s) => JSON.stringify(s);
const entrees = Object.entries(RULES)
  .sort(([a], [b]) => a.localeCompare(b, "fr"))
  .map(
    ([nom, r]) =>
      `  ${q(nom)}: { family: ${q(r.family)}, mode: ${q(r.mode)}, baseDose: ${r.baseDose}, stressDose: ${r.stressDose}, unit: ${q(r.unit)}, note: ${q(r.note)} },`,
  )
  .join("\n");

const simple = (o, fmt = (v) => v) =>
  Object.entries(o)
    .sort(([a], [b]) => a.localeCompare(b, "fr"))
    .map(([k, v]) => `  ${q(k)}: ${fmt(v)},`)
    .join("\n");

const ts = `// Données agronomiques EVERGREEN — généré depuis la matrice de dosage.
// Ne pas éditer à la main : régénérer via scripts/evergreen/gen_crops.mjs.

/** Unité dans laquelle la dose d'une culture est exprimée. */
export type DoseUnit = "g/plant" | "g/tree" | "g/m" | "g/m²";

export interface CropRule {
  family: string;
  mode: string;
  /** Dose en conditions normales, dans l'unité \`unit\`. */
  baseDose: number;
  /** Dose sous stress climatique élevé. */
  stressDose: number;
  unit: DoseUnit;
  note: string;
}

export const CROPS: Record<string, CropRule> = {
${entrees}
};

/** Densités de plantation observées (plants ou arbres par hectare). */
export const DENSITIES: Record<string, number> = {
${simple(DENS)}
};

/** Écartements entre rangs observés, en mètres. */
export const ROW_SPACINGS: Record<string, number> = {
${simple(ROWS)}
};

/** Fourchettes de gain de production consolidées, en pourcentage. */
export const YIELD_RANGES: Record<string, [number, number]> = {
${simple(YIELD, (v) => `[${v[0]}, ${v[1]}]`)}
};

/**
 * Grandes céréales et graminées : le gain de production n'y est pas estimable
 * sans étude de terrain, la réponse dépendant trop de l'itinéraire technique.
 */
export const GRAIN_KEYWORDS: readonly string[] = ${JSON.stringify(GRAINS, null, 2).replace(/\n/g, "\n")};

export const CROP_NAMES: readonly string[] = Object.keys(CROPS).sort((a, b) =>
  a.localeCompare(b, "fr"),
);
`;

mkdirSync("src/lib/evergreen", { recursive: true });
writeFileSync("src/lib/evergreen/crops.ts", ts, "utf8");
console.log(`-> src/lib/evergreen/crops.ts (${Math.round(ts.length / 1024)} Ko)`);
