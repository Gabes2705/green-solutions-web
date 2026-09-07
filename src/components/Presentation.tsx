"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function Presentation() {
  const { c } = useLanguage();
  const p = c.presentation;

  return (
    <section id="approche" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="section-title presentation-title">
            {p.title1}
            <br />
            {p.title2}
            <br />
            <span className="presentation-title-accent">{p.title3}</span>
          </h2>
          <p className="lede">{p.lede}</p>
        </Reveal>

        <Reveal stagger=".stat" className="stat-row">
          {p.stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal stagger=".distinguish" className="distinguish-grid">
          {p.distinguish.map((d) => (
            <div className="distinguish" key={d.num}>
              <span className="d-num">{d.num}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
