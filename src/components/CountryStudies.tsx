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
          <div className="country-title-row">
            <h2 className="section-title">{cs.title}</h2>
            <div className="country-callout">
              <svg
                viewBox="0 0 120 90"
                className="country-callout-arrow"
                aria-hidden="true"
              >
                <path
                  d="M8 10 C 8 55, 45 70, 100 72"
                  fill="none"
                  stroke="url(#arrow-grad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M84 62 L104 73 L86 84"
                  fill="none"
                  stroke="url(#arrow-grad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffb648" />
                    <stop offset="100%" stopColor="#a8d14a" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="country-callout-text">{cs.callout}</span>
            </div>
          </div>
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
