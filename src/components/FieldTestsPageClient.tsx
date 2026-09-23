"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TestsRapportsColonnes from "@/components/TestsRapportsColonnes";

export default function FieldTestsPageClient() {
  const { c, language } = useLanguage();
  const ft = c.fieldTests;

  return (
    <div className="tech-page tech-blue">
      <div className="tech-bar">
        <a href={`/${language}/`} className="tech-back btn-3d btn-3d-light">
          ← {ft.backToSite}
        </a>
        <LanguageSwitcher />
      </div>

      <header className={`field-tests-hero${language === "fr" ? " ft-large" : ""}`}>
        <p className="eyebrow">{ft.eyebrow}</p>
        <h1>{ft.title}</h1>
        <p className="lede">{ft.lede}</p>
      </header>

      <TestsRapportsColonnes />
    </div>
  );
}
