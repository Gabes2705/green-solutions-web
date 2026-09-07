"use client";

import Reveal from "./Reveal";
import CountryFlag from "./CountryFlag";
import { useLanguage } from "@/lib/LanguageContext";

function flagId(href: string) {
  return href.split("/").pop()?.replace(/\.(pdf|pptx)$/, "") ?? "";
}

export default function CountryStudies() {
  const { c } = useLanguage();
  const cs = c.countryStudies;

  return (
    <section id="etudes-pays" className="section section-alt">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{cs.eyebrow}</p>
          <h2 className="section-title">{cs.title}</h2>
          <p className="lede">{cs.lede}</p>
        </Reveal>

        <Reveal stagger=".country-item" className="country-grid">
          {cs.items.map((item) => (
            <a
              key={item.country}
              href={`/etudes?file=${encodeURIComponent(item.href)}&name=${encodeURIComponent(item.country)}`}
              className="country-item"
            >
              <CountryFlag id={flagId(item.href)} />
              <span className="country-btn btn-3d btn-3d-dark">
                {item.country}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
