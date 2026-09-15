"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function Objections() {
  const { c } = useLanguage();
  const o = c.objections;

  return (
    <section
      id="objections"
      className="section section-alt"
      style={{
        // Le voile s'ouvre en haut et en bas, où la bananeraie se voit, et se
        // ferme au milieu, derrière le texte : les six réponses sont écrites
        // en sombre et doivent se lire sans effort.
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.92) 72%, rgba(255,255,255,0.74) 100%), url('/images/stock/banana-plantation.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{o.eyebrow}</p>
          <h2 className="section-title">{o.title}</h2>
          <p className="lede">{o.lede}</p>
        </Reveal>

        <Reveal stagger=".objection" className="objection-list">
          {o.items.map((item) => (
            <article className="objection" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
              {item.proofLabel && (
                <a
                  className="objection-proof"
                  href={item.proofHref ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.proofLabel}
                </a>
              )}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
