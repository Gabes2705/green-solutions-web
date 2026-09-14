// Moteur de calcul EVERGREEN : dose, besoin total, économie d'eau, potentiel
// de production. Aucune dépendance au DOM ni au réseau, pour rester testable.

import {
  CROPS,
  DENSITIES,
  GRAIN_KEYWORDS,
  ROW_SPACINGS,
  YIELD_RANGES,
  type CropRule,
} from "./crops.ts";

export type IrrigationMode = "rainfed" | "drip" | "sprinkler" | "pivot" | "flood" | "other";
export type SoilType = "unknown" | "sandy" | "sandyLoam" | "loam" | "clayLoam" | "clay";
export type ClimateZone = "tropical" | "subtropical" | "temperate" | "cold";
export type StressLevel = "normal" | "moderate" | "high";

export interface Climate {
  latitude: number;
  /** Température moyenne annuelle, °C. */
  temperature: number;
  /** Cumul de précipitations sur douze mois, mm. */
  rainfall: number;
  altitude: number | null;
  zone: ClimateZone;
  stress: StressLevel;
}

export interface PlotInput {
  crop: string;
  area: number;
  /** Plants ou arbres par hectare. Estimé si absent. */
  density?: number | null;
  /** Écartement entre rangs, m. Estimé si absent. */
  rowSpacing?: number | null;
  irrigation: IrrigationMode;
  soil: SoilType;
  /** m³/ha/saison. Facultatif : n'influence jamais la dose. */
  waterUse?: number | null;
  /** €/m³. Facultatif. */
  waterPrice?: number | null;
}

export interface DoseResult {
  kgPerHa: number | null;
  totalKg: number | null;
  totalTonnes: number | null;
  /** Dose unitaire retenue, dans l'unité de la culture. */
  unitDose: number;
  unit: CropRule["unit"];
  /** true quand la densité ou l'écartement vient des valeurs par défaut. */
  estimated: boolean;
  /** true quand la dose de stress a été appliquée. */
  stressApplied: boolean;
}

export interface WaterResult {
  percent: number | null;
  cubicMetres: number | null;
  amount: number | null;
}

export type YieldPotential =
  | { kind: "range"; min: number; max: number }
  | { kind: "default"; min: number; max: number }
  | { kind: "study" };

export function getCrop(name: string): CropRule | null {
  return CROPS[name] ?? null;
}

export function climateZone(latitude: number, temperature: number): ClimateZone {
  const a = Math.abs(latitude);
  if (a < 23.5) return temperature >= 24 ? "tropical" : "subtropical";
  if (a < 35) return "subtropical";
  if (a < 55) return "temperate";
  return "cold";
}

export function stressLevel(temperature: number): StressLevel {
  if (temperature >= 29) return "high";
  if (temperature >= 23) return "moderate";
  return "normal";
}

/**
 * Densité de repli quand l'exploitant ne la connaît pas. Les valeurs sont
 * volontairement prudentes : mieux vaut sous-estimer la dose que promettre un
 * volume que la parcelle ne justifie pas.
 */
export function estimateDensity(rule: CropRule, cropName: string): number {
  if (DENSITIES[cropName]) return DENSITIES[cropName];
  if (rule.unit === "g/tree") return 500;
  if (rule.mode === "R") return 25_000;
  return 100_000;
}

export function estimateRowSpacing(cropName: string): number {
  return ROW_SPACINGS[cropName] ?? 0.5;
}

/**
 * Dose et besoin total. Se calcule toujours dès que la culture est connue :
 * ni le climat ni les données d'eau ne peuvent l'empêcher.
 */
export function computeDose(input: PlotInput, climate: Climate | null): DoseResult {
  const rule = getCrop(input.crop);
  if (!rule) {
    return {
      kgPerHa: null,
      totalKg: null,
      totalTonnes: null,
      unitDose: 0,
      unit: "g/plant",
      estimated: false,
      stressApplied: false,
    };
  }

  const stressApplied = climate?.stress === "high";
  const unitDose = stressApplied ? rule.stressDose : rule.baseDose;

  let kgPerHa: number | null = null;
  let estimated = false;

  if (rule.unit === "g/plant" || rule.unit === "g/tree") {
    const given = input.density;
    const density = given && given > 0 ? given : estimateDensity(rule, input.crop);
    estimated = !(given && given > 0);
    kgPerHa = (unitDose * density) / 1000;
  } else if (rule.unit === "g/m") {
    const given = input.rowSpacing;
    const spacing = given && given > 0 ? given : estimateRowSpacing(input.crop);
    estimated = !(given && given > 0);
    // Mètres linéaires par hectare — intermédiaire de calcul, jamais affiché.
    const linearMetres = 10_000 / spacing;
    kgPerHa = (unitDose * linearMetres) / 1000;
  } else if (rule.unit === "g/m²") {
    kgPerHa = unitDose * 10;
  }

  const area = input.area > 0 ? input.area : 0;
  const totalKg = kgPerHa === null ? null : kgPerHa * area;

  return {
    kgPerHa,
    totalKg,
    totalTonnes: totalKg === null ? null : totalKg / 1000,
    unitDose,
    unit: rule.unit,
    estimated,
    stressApplied,
  };
}

/**
 * Économie d'eau attendue, en pourcentage. Demande le climat : sans lui on ne
 * sait rien de la demande évaporative, et une fourchette inventée serait pire
 * que pas de chiffre.
 */
export function waterSavingPercent(input: PlotInput, climate: Climate | null): number | null {
  if (!climate) return null;

  let pct = 25;

  if (climate.temperature >= 28) pct += 7;
  else if (climate.temperature >= 22) pct += 3;
  else if (climate.temperature < 10) pct -= 4;

  if (climate.rainfall < 400) pct += 10;
  else if (climate.rainfall < 700) pct += 5;
  else if (climate.rainfall > 1600) pct -= 5;

  // Le goutte-à-goutte est déjà économe : la marge de progrès y est plus
  // étroite qu'en gravitaire, où l'essentiel se perd avant la racine.
  if (input.irrigation === "drip") pct -= 4;
  if (input.irrigation === "flood") pct += 5;
  if (input.soil === "sandy") pct += 3;

  return Math.max(12, Math.min(55, Math.round(pct)));
}

export function computeWater(input: PlotInput, climate: Climate | null): WaterResult {
  const percent = waterSavingPercent(input, climate);
  const use = input.waterUse;
  const price = input.waterPrice;

  if (percent === null || !use || use <= 0 || input.area <= 0) {
    return { percent, cubicMetres: null, amount: null };
  }

  const cubicMetres = (use * input.area * percent) / 100;
  const amount = price && price > 0 ? cubicMetres * price : null;
  return { percent, cubicMetres, amount };
}

export function isGrainCrop(cropName: string): boolean {
  const name = cropName.toLowerCase();
  return GRAIN_KEYWORDS.some((k) => name.includes(k));
}

export function yieldPotential(cropName: string): YieldPotential {
  const range = YIELD_RANGES[cropName];
  if (range) return { kind: "range", min: range[0], max: range[1] };
  if (isGrainCrop(cropName)) return { kind: "study" };
  return { kind: "default", min: 20, max: 40 };
}
