"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

function initials(name: string) {
  return name
    .replace(/^(Pr|Me)\s+/, "")
    .split(" ")
    .filter((w) => /^[A-ZÀ-Ý]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="person-card">
      <span className="person-initials">{initials(name)}</span>
      <div>
        <p className="person-name">{name}</p>
        <p className="person-role">{role}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const { c } = useLanguage();
  const t = c.team;

  return (
    <section id="entreprise" className="section section-alt">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
        </Reveal>

        <Reveal stagger=".person-card" className="person-grid">
          {t.direction.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </Reveal>

        <Reveal className="team-sub">
          <p className="eyebrow">{t.expertsEyebrow}</p>
        </Reveal>

        <Reveal stagger=".person-card" className="person-grid person-grid-experts">
          {t.experts.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
