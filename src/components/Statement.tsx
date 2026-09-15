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
          "radial-gradient(56% 72% at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.76) 40%, rgba(255,255,255,0.34) 74%, rgba(255,255,255,0.08) 100%), url('/images/stock/orchard-rows-sunset.jpg')",
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
