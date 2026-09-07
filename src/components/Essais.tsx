"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function Essais() {
  const { c } = useLanguage();
  const e = c.essais;

  return (
    <section id="essais" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 className="section-title">{e.title}</h2>
          <p className="lede">{e.lede}</p>
        </Reveal>

        <Reveal stagger=".pilot" className="pilot-grid">
          {e.pilots.map((p) => (
            <article className="pilot" key={p.org}>
              <h3>{p.org}</h3>
              <p className="pilot-place">{p.place}</p>
              <p className="pilot-crop">{p.crop}</p>
              <ul className="pilot-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
