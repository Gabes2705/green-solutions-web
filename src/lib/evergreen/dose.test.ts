import assert from "node:assert/strict";
import { test } from "node:test";

import { CROPS, DENSITIES, ROW_SPACINGS } from "./crops.ts";
import {
  climateZone,
  computeDose,
  computeWater,
  estimateDensity,
  estimateRowSpacing,
  isGrainCrop,
  stressLevel,
  waterSavingPercent,
  yieldPotential,
  type Climate,
  type PlotInput,
} from "./dose.ts";

const climatSec: Climate = {
  latitude: 31.6,
  temperature: 30,
  rainfall: 250,
  altitude: 460,
  zone: "subtropical",
  stress: "high",
};

const climatDoux: Climate = {
  latitude: 47,
  temperature: 12,
  rainfall: 800,
  altitude: 120,
  zone: "temperate",
  stress: "normal",
};

function parcelle(over: Partial<PlotInput> = {}): PlotInput {
  return {
    crop: "Tomates",
    area: 10,
    irrigation: "sprinkler",
    soil: "loam",
    ...over,
  };
}

test("conversion g/plant : dose = g par plant x densite / 1000", () => {
  // Tomates : 2 g/plant en base, densite connue 25 000/ha -> 50 kg/ha.
  const r = computeDose(parcelle({ density: 25_000 }), climatDoux);
  assert.equal(CROPS["Tomates"].unit, "g/plant");
  assert.equal(r.unitDose, 2);
  assert.equal(r.kgPerHa, 50);
  assert.equal(r.totalKg, 500);
  assert.equal(r.totalTonnes, 0.5);
  assert.equal(r.estimated, false);
});

test("conversion g/m : dose passe par les metres lineaires", () => {
  // Carottes : 5 g/m, ecartement 0,30 m -> 33 333 m/ha -> 166,7 kg/ha.
  const r = computeDose(parcelle({ crop: "Carottes", rowSpacing: 0.3 }), climatDoux);
  assert.equal(CROPS["Carottes"].unit, "g/m");
  assert.ok(Math.abs(r.kgPerHa! - (5 * (10_000 / 0.3)) / 1000) < 1e-9);
  assert.equal(r.estimated, false);
});

test("densite absente : repli silencieux sur la valeur par defaut", () => {
  const avec = computeDose(parcelle({ density: 25_000 }), climatDoux);
  const sans = computeDose(parcelle({ density: null }), climatDoux);
  assert.equal(sans.estimated, true);
  assert.equal(sans.kgPerHa, avec.kgPerHa, "Tomates a une densite de reference");
  assert.ok(sans.kgPerHa! > 0);
});

test("ecartement absent : repli sur la valeur par defaut de la culture", () => {
  const sans = computeDose(parcelle({ crop: "Carottes", rowSpacing: null }), climatDoux);
  assert.equal(sans.estimated, true);
  assert.equal(estimateRowSpacing("Carottes"), ROW_SPACINGS["Carottes"]);
  assert.ok(sans.kgPerHa! > 0);
});

test("culture sans densite de reference : repli sur la classe agronomique", () => {
  assert.equal(estimateDensity(CROPS["Dattiers"], "Dattiers"), 500, "arbre sans reference");
  assert.equal(estimateDensity(CROPS["Tomates"], "Tomates"), DENSITIES["Tomates"]);
  assert.equal(estimateRowSpacing("Culture inconnue"), 0.5);
});

test("l'eau ne bloque jamais le calcul de dose", () => {
  const sansEau = computeDose(parcelle({ waterUse: null, waterPrice: null }), climatDoux);
  assert.ok(sansEau.kgPerHa! > 0);
  assert.ok(sansEau.totalKg! > 0);

  // Exploitation pluviale, sans climat charge : la dose sort quand meme.
  const sansClimat = computeDose(parcelle({ irrigation: "rainfed" }), null);
  assert.ok(sansClimat.kgPerHa! > 0);
});

test("economie d'eau : nulle sans climat, chiffree avec consommation", () => {
  assert.equal(waterSavingPercent(parcelle(), null), null);

  const sansConso = computeWater(parcelle({ waterUse: null }), climatSec);
  assert.ok(sansConso.percent! > 0, "le pourcentage sort sans consommation");
  assert.equal(sansConso.cubicMetres, null);
  assert.equal(sansConso.amount, null);

  const avecConso = computeWater(parcelle({ waterUse: 3000 }), climatSec);
  assert.equal(avecConso.cubicMetres, (3000 * 10 * avecConso.percent!) / 100);
  assert.equal(avecConso.amount, null, "sans prix, pas de montant");

  const avecPrix = computeWater(parcelle({ waterUse: 3000, waterPrice: 0.4 }), climatSec);
  assert.equal(avecPrix.amount, avecPrix.cubicMetres! * 0.4);
});

test("economie d'eau : bornee, et modulee par irrigation et sol", () => {
  const goutte = waterSavingPercent(parcelle({ irrigation: "drip" }), climatSec)!;
  const gravitaire = waterSavingPercent(parcelle({ irrigation: "flood" }), climatSec)!;
  assert.ok(gravitaire > goutte, "le gravitaire a plus de marge que le goutte-a-goutte");

  const sableux = waterSavingPercent(parcelle({ soil: "sandy" }), climatSec)!;
  const limoneux = waterSavingPercent(parcelle({ soil: "loam" }), climatSec)!;
  assert.ok(sableux > limoneux);

  for (const c of [climatSec, climatDoux]) {
    for (const irr of ["rainfed", "drip", "flood"] as const) {
      const p = waterSavingPercent(parcelle({ irrigation: irr }), c)!;
      assert.ok(p >= 12 && p <= 55, `${p} hors bornes`);
    }
  }
});

test("stress climatique eleve : la dose de stress remplace la dose de base", () => {
  const normal = computeDose(parcelle({ density: 1000 }), climatDoux);
  const stresse = computeDose(parcelle({ density: 1000 }), climatSec);
  assert.equal(normal.unitDose, CROPS["Tomates"].baseDose);
  assert.equal(stresse.unitDose, CROPS["Tomates"].stressDose);
  assert.equal(stresse.stressApplied, true);
  assert.ok(stresse.kgPerHa! > normal.kgPerHa!);
});

test("grandes cereales : etude approfondie requise, pas de fourchette", () => {
  for (const c of ["Blé tendre", "Riz paddy", "Sorgho", "Orge", "Avoine"]) {
    assert.equal(isGrainCrop(c), true, c);
    assert.deepEqual(yieldPotential(c), { kind: "study" }, c);
  }
});

test("potentiel de production : fourchette specifique, sinon +20 a 40 %", () => {
  assert.deepEqual(yieldPotential("Tomates"), { kind: "range", min: 30, max: 50 });
  assert.deepEqual(yieldPotential("Fraises"), { kind: "default", min: 20, max: 40 });
  assert.deepEqual(yieldPotential("Olives"), { kind: "default", min: 20, max: 40 });
});

test("culture inconnue : aucun chiffre invente", () => {
  const r = computeDose(parcelle({ crop: "Quinoa martien" }), climatDoux);
  assert.equal(r.kgPerHa, null);
  assert.equal(r.totalKg, null);
  assert.equal(r.totalTonnes, null);
});

test("surface nulle : dose par hectare conservee, besoin total a zero", () => {
  const r = computeDose(parcelle({ area: 0, density: 25_000 }), climatDoux);
  assert.equal(r.kgPerHa, 50);
  assert.equal(r.totalKg, 0);
});

test("zone et stress climatiques", () => {
  assert.equal(climateZone(10, 27), "tropical");
  assert.equal(climateZone(10, 20), "subtropical");
  assert.equal(climateZone(30, 20), "subtropical");
  assert.equal(climateZone(47, 12), "temperate");
  assert.equal(climateZone(60, 4), "cold");
  assert.equal(climateZone(-47, 12), "temperate", "hemisphere sud");

  assert.equal(stressLevel(30), "high");
  assert.equal(stressLevel(25), "moderate");
  assert.equal(stressLevel(15), "normal");
});

test("toutes les cultures livrent une dose exploitable", () => {
  for (const nom of Object.keys(CROPS)) {
    const r = computeDose(parcelle({ crop: nom }), climatDoux);
    assert.ok(r.kgPerHa !== null && r.kgPerHa > 0, `${nom} : pas de dose`);
    assert.ok(Number.isFinite(r.totalKg!), `${nom} : total non fini`);
  }
});
