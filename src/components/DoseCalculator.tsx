"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { CROP_NAMES, CROPS } from "@/lib/evergreen/crops.ts";
import {
  computeDose,
  computeWater,
  yieldPotential,
  type Climate,
  type IrrigationMode,
  type PlotInput,
  type SoilType,
} from "@/lib/evergreen/dose.ts";
import { resolveClimate } from "@/lib/evergreen/climate.ts";

const SOILS: SoilType[] = ["unknown", "sandy", "sandyLoam", "loam", "clayLoam", "clay"];
const IRRIGATIONS: IrrigationMode[] = [
  "rainfed",
  "drip",
  "sprinkler",
  "pivot",
  "flood",
  "other",
];

type Status = "idle" | "loading" | "ready" | "failed";

/** Champ numérique facultatif : une saisie vide vaut « inconnu », pas zéro. */
function optional(value: string): number | null {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export default function DoseCalculator() {
  const { c, language } = useLanguage();
  const t = c.doseCalculator;

  const [country, setCountry] = useState("France");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  const [crop, setCrop] = useState("Tomates");
  const [soil, setSoil] = useState<SoilType>("unknown");
  const [irrigation, setIrrigation] = useState<IrrigationMode>("drip");
  const [area, setArea] = useState("20");
  const [density, setDensity] = useState("");
  const [spacing, setSpacing] = useState("");

  const [waterUse, setWaterUse] = useState("");
  const [waterPrice, setWaterPrice] = useState("");

  const [climate, setClimate] = useState<Climate | null>(null);
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const abort = useRef<AbortController | null>(null);

  const nf = useMemo(() => new Intl.NumberFormat(language), [language]);
  const fmt = useCallback(
    (n: number | null, digits = 0) =>
      n === null || !Number.isFinite(n)
        ? "—"
        : nf.format(Number(n.toFixed(digits))),
    [nf],
  );

  const rule = CROPS[crop];
  const needsDensity = rule?.unit === "g/plant" || rule?.unit === "g/tree";
  const needsSpacing = rule?.unit === "g/m";

  const input: PlotInput = useMemo(
    () => ({
      crop,
      area: optional(area) ?? 0,
      density: needsDensity ? optional(density) : null,
      rowSpacing: needsSpacing ? optional(spacing) : null,
      irrigation,
      soil,
      waterUse: optional(waterUse),
      waterPrice: optional(waterPrice),
    }),
    [crop, area, density, spacing, irrigation, soil, waterUse, waterPrice, needsDensity, needsSpacing],
  );

  const dose = useMemo(() => computeDose(input, climate), [input, climate]);
  const water = useMemo(() => computeWater(input, climate), [input, climate]);
  const potential = useMemo(() => yieldPotential(crop), [crop]);

  const detect = useCallback(async () => {
    abort.current?.abort();
    const controller = new AbortController();
    abort.current = controller;
    setStatus("loading");
    try {
      const { place, climate: found } = await resolveClimate(
        { country, region, city },
        controller.signal,
        language,
      );
      if (controller.signal.aborted) return;
      setClimate(found);
      setPlaceName(`${place.name}${place.country ? `, ${place.country}` : ""}`);
      setStatus("ready");
    } catch {
      if (controller.signal.aborted) return;
      // Le climat n'est qu'un affinage : la dose reste calculée sans lui.
      setClimate(null);
      setPlaceName(null);
      setStatus("failed");
    }
  }, [country, region, city, language]);

  // Pas de détection au montage : cela déclencherait un appel à une API tierce
  // au chargement de chaque page d'accueil. La dose se calcule sans climat.
  useEffect(() => () => abort.current?.abort(), []);

  // En revanche, dès que le visiteur a touché un des trois champs, la
  // résolution part seule : il n'a pas à réclamer un climat qu'il vient de
  // décrire. Le délai laisse finir la frappe — sans lui, saisir « Bordeaux »
  // lancerait huit requêtes — et chaque frappe annule la précédente.
  const saisi = useRef(false);
  useEffect(() => {
    if (!saisi.current) return;
    const t = setTimeout(() => void detect(), 800);
    return () => clearTimeout(t);
  }, [detect]);

  const yieldLabel =
    potential.kind === "study"
      ? t.yieldStudy
      : `+ ${potential.min} ${t.to} ${potential.max} %`;
  const yieldNote =
    potential.kind === "study"
      ? t.yieldStudyNote
      : potential.kind === "range"
        ? t.yieldRangeNote
        : t.yieldDefaultNote;

  return (
    <section id="calculateur-dose" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="lede">{t.lede}</p>
        </Reveal>

        <Reveal>
          <div className="dose-layout">
            <div className="dose-panels">
              <section className="dose-panel">
                <h3 className="dose-panel-title">
                  <span className="dose-num">1</span>
                  {t.locationTitle}
                </h3>
                <div className="dose-grid">
                  <div className="dose-field">
                    <label htmlFor="dose-country">{t.countryLabel}</label>
                    <input
                      id="dose-country"
                      value={country}
                      onChange={(e) => {
                        saisi.current = true;
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="dose-field">
                    <label htmlFor="dose-region">{t.regionLabel}</label>
                    <input
                      id="dose-region"
                      value={region}
                      onChange={(e) => {
                        saisi.current = true;
                        setRegion(e.target.value);
                      }}
                    />
                  </div>
                  <div className="dose-field">
                    <label htmlFor="dose-city">{t.cityLabel}</label>
                    <input
                      id="dose-city"
                      value={city}
                      onChange={(e) => {
                        saisi.current = true;
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="dose-field dose-field-action">
                    {status === "loading" && <p className="dose-hint">{t.detecting}</p>}
                    {status === "failed" && (
                      <button type="button" className="dose-button" onClick={() => void detect()}>
                        {t.detectButton}
                      </button>
                    )}
                  </div>
                </div>

                {status === "ready" && climate && (
                  <div className="dose-climate">
                    <p className="dose-climate-head">
                      {t.climateHead}
                      {placeName ? ` · ${placeName}` : ""}
                    </p>
                    <div className="dose-climate-grid">
                      <span>
                        {t.latitude}
                        <b>
                          {Math.abs(climate.latitude).toFixed(1)}° {climate.latitude >= 0 ? "N" : "S"}
                        </b>
                      </span>
                      <span>
                        {t.altitude}
                        <b>{climate.altitude === null ? "—" : `${fmt(climate.altitude)} m`}</b>
                      </span>
                      <span>
                        {t.zone}
                        <b>{t.zones[climate.zone]}</b>
                      </span>
                      <span>
                        {t.rainfall}
                        <b>{fmt(climate.rainfall)} mm</b>
                      </span>
                      <span>
                        {t.temperature}
                        <b>{fmt(climate.temperature, 1)} °C</b>
                      </span>
                      <span>
                        {t.stress}
                        <b>{t.stressLevels[climate.stress]}</b>
                      </span>
                    </div>
                  </div>
                )}
                {status === "failed" && <p className="dose-status">{t.climateUnavailable}</p>}
              </section>

              <section className="dose-panel">
                <h3 className="dose-panel-title">
                  <span className="dose-num">2</span>
                  {t.plotTitle}
                </h3>
                <div className="dose-grid">
                  <div className="dose-field">
                    <label htmlFor="dose-crop">{t.cropLabel}</label>
                    <select id="dose-crop" value={crop} onChange={(e) => setCrop(e.target.value)}>
                      {CROP_NAMES.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="dose-field">
                    <label htmlFor="dose-soil">{t.soilLabel}</label>
                    <select
                      id="dose-soil"
                      value={soil}
                      onChange={(e) => setSoil(e.target.value as SoilType)}
                    >
                      {SOILS.map((s) => (
                        <option key={s} value={s}>
                          {t.soils[s]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="dose-field">
                    <label htmlFor="dose-irrigation">{t.irrigationLabel}</label>
                    <select
                      id="dose-irrigation"
                      value={irrigation}
                      onChange={(e) => setIrrigation(e.target.value as IrrigationMode)}
                    >
                      {IRRIGATIONS.map((m) => (
                        <option key={m} value={m}>
                          {t.irrigations[m]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="dose-field">
                    <label htmlFor="dose-area">{t.areaLabel}</label>
                    <input
                      id="dose-area"
                      type="number"
                      min={0}
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                  {needsDensity && (
                    <div className="dose-field">
                      <label htmlFor="dose-density">{t.densityLabel}</label>
                      <input
                        id="dose-density"
                        type="number"
                        min={0}
                        value={density}
                        placeholder={t.optionalPlaceholder}
                        onChange={(e) => setDensity(e.target.value)}
                      />
                    </div>
                  )}
                  {needsSpacing && (
                    <div className="dose-field">
                      <label htmlFor="dose-spacing">{t.spacingLabel}</label>
                      <input
                        id="dose-spacing"
                        type="number"
                        min={0.05}
                        step={0.05}
                        value={spacing}
                        placeholder={t.optionalPlaceholder}
                        onChange={(e) => setSpacing(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </section>

              <section className="dose-panel">
                <h3 className="dose-panel-title">
                  <span className="dose-num">3</span>
                  {t.waterTitle}
                </h3>
                <div className="dose-grid dose-grid-water">
                  <div className="dose-field">
                    <label htmlFor="dose-wateruse">{t.waterUseLabel}</label>
                    <input
                      id="dose-wateruse"
                      type="number"
                      min={0}
                      value={waterUse}
                      placeholder={t.waterUsePlaceholder}
                      onChange={(e) => setWaterUse(e.target.value)}
                    />
                  </div>
                  <div className="dose-field">
                    <label htmlFor="dose-waterprice">{t.waterPriceLabel}</label>
                    <input
                      id="dose-waterprice"
                      type="number"
                      min={0}
                      step={0.01}
                      value={waterPrice}
                      placeholder={t.optionalPlaceholder}
                      onChange={(e) => setWaterPrice(e.target.value)}
                    />
                  </div>
                </div>
                <p className="dose-hint">{t.waterHint}</p>
              </section>
            </div>

            <aside className="dose-results">
              <h3 className="dose-results-title">{t.resultsTitle}</h3>

              <div className="dose-card">
                <p className="dose-card-label">{t.doseLabel}</p>
                <p className="dose-card-value">
                  {fmt(dose.kgPerHa, 1)} <span className="dose-card-unit">kg/ha</span>
                </p>
                <p className="dose-card-note">
                  {dose.estimated ? t.doseEstimated : t.doseFromInput}
                  {dose.stressApplied ? ` · ${t.doseStress}` : ""}
                </p>
              </div>

              <div className="dose-card">
                <p className="dose-card-label">{t.totalLabel}</p>
                <p className="dose-card-value">
                  {fmt(dose.totalKg)} <span className="dose-card-unit">kg</span>
                </p>
                <p className="dose-card-note">
                  {dose.totalTonnes === null
                    ? ""
                    : `${t.totalTonnesPrefix} ${fmt(dose.totalTonnes, 2)} t`}
                </p>
              </div>

              <div className="dose-card dose-card-water">
                <p className="dose-card-label">{t.waterSavingLabel}</p>
                <p className="dose-card-value">
                  {water.percent === null ? t.waterPending : `− ${water.percent} %`}
                </p>
                <p className="dose-card-note">
                  {water.cubicMetres === null
                    ? t.waterNoConsumption
                    : `≈ ${fmt(water.cubicMetres)} m³`}
                </p>
                {water.amount !== null && (
                  <p className="dose-card-money">{fmt(water.amount)} €</p>
                )}
              </div>

              <div className="dose-card">
                <p className="dose-card-label">{t.yieldLabel}</p>
                <p className="dose-card-value">{yieldLabel}</p>
                <p className="dose-card-note">{yieldNote}</p>
              </div>
            </aside>
          </div>

          <p className="calc-disclaimer">{t.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
