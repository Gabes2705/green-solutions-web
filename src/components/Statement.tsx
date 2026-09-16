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
        // Un voile sombre, et non plus blanc : le blanc délavait la photo au
        // point de la faire disparaître, et le texte posé dessus se lisait à
        // peine. Le dégradé reste plus dense au centre, là où court le texte.
        backgroundImage:
          "radial-gradient(60% 75% at 50% 50%, rgba(8,26,16,0.82) 0%, rgba(8,26,16,0.74) 42%, rgba(8,26,16,0.58) 76%, rgba(8,26,16,0.44) 100%), url('/images/stock/orchard-rows-sunset.jpg')",
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
