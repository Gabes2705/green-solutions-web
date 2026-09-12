"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reveal from "@/components/Reveal";
import CountryFlag from "@/components/CountryFlag";

export default function FieldTestsPageClient() {
  const { c } = useLanguage();
  const ft = c.fieldTests;

  return (
    <div className="tech-page tech-blue">
      <div className="tech-bar">
        <a href="/" className="tech-back btn-3d btn-3d-light">
          ← {ft.backToSite}
        </a>
        <LanguageSwitcher />
      </div>

      <header className="field-tests-hero">
        <p className="eyebrow">{ft.eyebrow}</p>
        <h1>{ft.title}</h1>
        <p className="lede">{ft.lede}</p>
      </header>

      <div className="tech-body">
        <Reveal stagger=".doc-row" className="doc-list field-tests-list">
          {ft.items.map((item) => (
            <a
              className="doc-row"
              key={item.href}
              href={`/etudes?file=${encodeURIComponent(item.href)}&name=${encodeURIComponent(item.title)}`}
            >
              <span className="doc-tag">PDF</span>
              <span className="doc-body">
                <span className="doc-title">{item.title}</span>
                <span className="doc-meta">{item.meta}</span>
              </span>
              <span className="doc-flag">
                <CountryFlag id={item.country} />
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
