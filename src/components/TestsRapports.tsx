"use client";

import Reveal from "./Reveal";
import TestsRapportsColonnes from "./TestsRapportsColonnes";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * « Tests et rapports » au milieu de la page d'accueil, entre les
 * technologies et les essais en cours : les preuves se voient sans quitter la
 * page. Le lien du menu du haut mène ici.
 */
export default function TestsRapports() {
  const { c } = useLanguage();
  const ft = c.fieldTests;

  return (
    <section id="tests-et-rapports" className="section">
      <div className="section-inner section-inner-large">
        <Reveal>
          <p className="eyebrow">{ft.eyebrow}</p>
          <h2 className="section-title">{ft.title}</h2>
          <p className="lede">{ft.lede}</p>
        </Reveal>
        <TestsRapportsColonnes titres={3} accueil />
      </div>
    </section>
  );
}
