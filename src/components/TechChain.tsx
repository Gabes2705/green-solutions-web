"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function TechChain() {
  const { c } = useLanguage();
  const tc = c.techChain;

  return (
    <section className="section section-alt">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{tc.eyebrow}</p>
          <h2 className="section-title">{tc.title}</h2>
          <p className="lede">{tc.lede}</p>
        </Reveal>

        <Reveal stagger=".chain-step" className="chain">
          {tc.steps.map((step, i) => (
            <div className="chain-step" key={step}>
              <span className="chain-num">{String(i + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
