"use client";

import CountryTicker from "./CountryTicker";
import Reveal from "./Reveal";
import WorldNetwork from "./WorldNetwork";
import { useLanguage } from "@/lib/LanguageContext";

export default function Reseau() {
  const { c } = useLanguage();
  const r = c.reseau;

  return (
    <section id="reseau" className="section reseau">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 className="section-title">{r.title}</h2>
          <p className="lede">{r.lede}</p>
        </Reveal>

        <WorldNetwork ariaLabel={r.mapAriaLabel} />
      </div>

      <CountryTicker />
    </section>
  );
}
