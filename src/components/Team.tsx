"use client";

import Image from "next/image";
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

// Matched by surname rather than the full name, since a few locales
// reorder or append a title (e.g. zh's "Mohamed Hajlaoui 教授") that would
// otherwise break an exact-string lookup.
const PHOTOS_BY_SURNAME: [RegExp, string][] = [
  [/correa/i, "michel-paul-correa"],
  [/foucher/i, "jean-michel-foucher"],
  [/bonnat/i, "gabriel-bonnat"],
  [/petain|pétain/i, "franck-petain"],
  [/martin-peulet/i, "gilles-martin-peulet"],
  [/carnavalet/i, "christian-carnavalet"],
  [/marmier/i, "nicolas-marmier"],
  [/munya/i, "rene-munya"],
  [/bayoud/i, "chokry-bayoud"],
  [/hajlaoui/i, "mohamed-hajlaoui"],
  [/ongono/i, "jean-guy-ongono"],
  [/lhommet/i, "lionel-lhommet"],
  [/\barian\b/i, "ken-arian"],
  [/elashrry/i, "ahmed-elashrry"],
  [/curina/i, "alfredo-curina"],
  [/bissereth/i, "jean-camille-bissereth"],
  [/baloche/i, "daniel-baloche"],
  [/haddad/i, "yves-haddad"],
];

function photoSlug(name: string) {
  return PHOTOS_BY_SURNAME.find(([re]) => re.test(name))?.[1] ?? null;
}

function PersonCard({ name, role }: { name: string; role: string }) {
  const slug = photoSlug(name);
  return (
    <div className="person-card">
      {slug ? (
        <Image
          src={`/team/${slug}.jpg`}
          alt={name}
          width={56}
          height={56}
          className="person-photo"
        />
      ) : (
        <span className="person-initials">{initials(name)}</span>
      )}
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
