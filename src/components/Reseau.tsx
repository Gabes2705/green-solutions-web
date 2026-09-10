"use client";

import CountryTicker from "./CountryTicker";
import Reveal from "./Reveal";
import WorldNetwork from "./WorldNetwork";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Sets the figure in the title in a serif face, as a typographic accent.
 *
 * Splitting on the digits rather than on the words keeps this working in all
 * eight languages: every translation writes the count in Western digits,
 * the Arabic and Chinese ones included.
 */
function withSerifFigure(title: string) {
  const parts = title.split(/(\d+)/);
  if (parts.length === 1) return title;
  return parts.map((part, i) =>
    /^\d+$/.test(part) ? (
      <span key={i} className="figure-serif">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Reseau() {
  const { c } = useLanguage();
  const r = c.reseau;

  return (
    <section id="reseau" className="section reseau">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 className="section-title">{withSerifFigure(r.title)}</h2>
          <p className="lede">{r.lede}</p>
        </Reveal>

        <WorldNetwork ariaLabel={r.mapAriaLabel} />
      </div>

      <CountryTicker />
    </section>
  );
}
