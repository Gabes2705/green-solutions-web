"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const POOL_M3 = 2500;

// [low, high] fraction of current consumption saved, indexed to match
// content.ts's `irrigationModes` order (drip, sprinkler, pivot, flood, other).
// Drip is already water-efficient so it has the least room to improve; flood/
// gravity irrigation is the least efficient method so it has the most.
const RATIO_BY_MODE: [number, number][] = [
  [0.4, 0.55],
  [0.5, 0.65],
  [0.5, 0.65],
  [0.55, 0.7],
  [0.45, 0.6],
];

export default function WaterCalculator() {
  const { c, language } = useLanguage();
  const wc = c.waterCalculator;

  const [surface, setSurface] = useState(120);
  const [modeIndex, setModeIndex] = useState(1);
  const [consumption, setConsumption] = useState(3200);

  const fmt = useMemo(() => new Intl.NumberFormat(language), [language]);

  const { low, high, pools } = useMemo(() => {
    const total = surface * consumption;
    const [lowRatio, highRatio] = RATIO_BY_MODE[modeIndex];
    const low = Math.round(total * lowRatio);
    const high = Math.round(total * highRatio);
    const pools = Math.round(high / POOL_M3);
    return { low, high, pools };
  }, [surface, consumption, modeIndex]);

  return (
    <section id="calculateur" className="section section-alt">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{wc.eyebrow}</p>
          <h2 className="section-title">{wc.title}</h2>
          <p className="lede">{wc.lede}</p>
        </Reveal>

        <Reveal>
          <div className="calc-card">
            <div className="calc-field">
              <div className="calc-field-head">
                <label htmlFor="calc-surface">{wc.surfaceLabel}</label>
                <span className="calc-value">
                  {fmt.format(surface)} {wc.surfaceUnit}
                </span>
              </div>
              <input
                id="calc-surface"
                type="range"
                className="calc-slider"
                min={1}
                max={500}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                onWheel={(e) => e.currentTarget.blur()}
              />
              <div className="calc-scale">
                <span>1</span>
                <span>
                  500 {wc.surfaceUnit}
                </span>
              </div>
            </div>

            <div className="calc-field">
              <div className="calc-field-head">
                <label htmlFor="calc-irrigation">{wc.irrigationLabel}</label>
                <span className="calc-value">{wc.irrigationModes[modeIndex]}</span>
              </div>
              <input
                id="calc-irrigation"
                type="range"
                className="calc-slider"
                min={0}
                max={4}
                step={1}
                value={modeIndex}
                onChange={(e) => setModeIndex(Number(e.target.value))}
                onWheel={(e) => e.currentTarget.blur()}
              />
              <div className="calc-scale-modes">
                {wc.irrigationModes.map((mode, i) => {
                  const last = wc.irrigationModes.length - 1;
                  const pct = (i / last) * 100;
                  const align = i === 0 ? "translateX(0)" : i === last ? "translateX(-100%)" : "translateX(-50%)";
                  return (
                    <span
                      key={mode}
                      className={i === modeIndex ? "active" : ""}
                      style={{ left: `${pct}%`, transform: align }}
                    >
                      {mode}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="calc-field">
              <div className="calc-field-head">
                <label htmlFor="calc-consumption">{wc.consumptionLabel}</label>
                <span className="calc-value">
                  {fmt.format(consumption)} {wc.consumptionUnit}
                </span>
              </div>
              <input
                id="calc-consumption"
                type="range"
                className="calc-slider"
                min={500}
                max={12000}
                step={100}
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                onWheel={(e) => e.currentTarget.blur()}
              />
              <div className="calc-scale">
                <span>500</span>
                <span>12 000</span>
              </div>
            </div>

            <div className="calc-result">
              <p className="calc-result-eyebrow">{wc.resultEyebrow}</p>
              <p className="calc-result-range">
                {fmt.format(low)} – {fmt.format(high)} <span className="calc-result-unit">m³</span>
              </p>
              <p className="calc-result-note">{wc.resultNote}</p>
              <hr className="calc-result-divider" />
              <p className="calc-result-pools">
                {wc.poolsPrefix} <strong>{fmt.format(pools)}</strong> {wc.poolsSuffix}
              </p>
            </div>
          </div>
          <p className="calc-disclaimer">{wc.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
