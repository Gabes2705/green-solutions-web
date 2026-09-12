"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const DOC_HREFS = [
  "/documents/certificat-bio-sohiscert.pdf",
  "/documents/analyse-acrylamide-ecosorb-polymex-2024.pdf",
  "/documents/screening-reach-svhc-evergreen-sgs-2023.pdf",
  "/documents/rapport-essai-ecosorb-sgs-2024.pdf",
];

const CARD_IMAGES = [
  "/images/stock/wheat-golden-hour.jpg",
  "/images/stock/paulownia-plantation.jpg",
  "/images/stock/reforestation-planting.png",
];

export default function Resources() {
  const { c } = useLanguage();
  const r = c.resources;

  return (
    <section id="ressources" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 className="section-title">{r.title}</h2>
        </Reveal>

        <Reveal stagger=".resource-card" className="resource-grid">
          {r.cards.map((card, i) => (
            <article
              className="resource-card"
              key={card.num}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(7,22,15,0.1) 0%, rgba(7,22,15,0.92) 82%), url('${CARD_IMAGES[i]}')`,
              }}
            >
              <span className="p-num">{card.num}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal>
          <p className="eyebrow doc-eyebrow">{r.docsEyebrow}</p>
        </Reveal>

        <Reveal stagger=".doc-row" className="doc-list">
          {r.documents.map((d, i) => (
            <a
              className="doc-row"
              key={DOC_HREFS[i]}
              href={DOC_HREFS[i]}
              target="_blank"
              rel="noreferrer"
            >
              <span className="doc-tag">PDF</span>
              <span className="doc-body">
                <span className="doc-title">{d.title}</span>
                <span className="doc-meta">{d.meta}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal>
          <a href="/tests-et-rapports" className="field-tests-cta">
            {c.nav.fieldTests} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
