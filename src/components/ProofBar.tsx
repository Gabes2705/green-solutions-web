"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ProofBar() {
  const { c } = useLanguage();

  return (
    <section className="proof-bar" aria-label="Chiffres clés">
      <div className="proof-inner">
        {c.proofBar.map((p) => (
          <div className="proof-item" key={p.label}>
            <span className="proof-figure">{p.figure}</span>
            <span className="proof-label">{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
