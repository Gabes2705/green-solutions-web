"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function Objections() {
  const { c } = useLanguage();
  const o = c.objections;

  return (
    <section id="objections" className="section section-alt">
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
