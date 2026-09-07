"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function Statement() {
  const { c } = useLanguage();
  const s = c.statement;

  return (
    <section
      className="statement"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(7,22,15,0.75) 0%, rgba(7,22,15,0.92) 100%), url('/images/stock/aerial-field-pattern.jpg')",
      }}
    >
      <div className="section-inner">
        <Reveal>
          <p className="statement-eyebrow">{s.eyebrow}</p>
          <h2 className="statement-title">{s.title}</h2>
          <p className="statement-text">{s.text}</p>
          <p className="statement-tag">{s.tag}</p>
        </Reveal>
      </div>
    </section>
  );
}
