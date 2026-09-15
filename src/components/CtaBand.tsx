"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function CtaBand() {
  const { c } = useLanguage();
  const cb = c.ctaBand;

  return (
    <section
      className="cta-band"
      style={{
        backgroundImage:
          "radial-gradient(58% 78% at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.78) 42%, rgba(255,255,255,0.4) 74%, rgba(255,255,255,0.16) 100%), url('/images/stock/wheat-golden-hour.jpg')",
      }}
    >
      <Reveal className="cta-band-inner">
        <p className="eyebrow">{cb.eyebrow}</p>
        <h2 className="cta-band-title">{cb.title}</h2>
        <p className="cta-band-text">{cb.text}</p>
        <div className="cta-band-actions">
          <a href="#contact" className="btn-3d btn-3d-light">
            {cb.cta1}
          </a>
          <a href="#ressources" className="btn-3d btn-3d-dark cta-band-alt">
            {cb.cta2}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
