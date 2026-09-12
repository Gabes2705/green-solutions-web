"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reveal from "@/components/Reveal";

const PARTNERS = [
  { slug: "ecole-maraichage-urbain", name: "École de Maraîchage Urbain" },
  { slug: "afrinest-moringa-farm", name: "AfriNest Moringa Farm" },
  { slug: "kortasgreen", name: "KortasGreen" },
  { slug: "adnp", name: "ADNP" },
  { slug: "campari-group", name: "Campari Group" },
  { slug: "axe-capital-forest", name: "AXE Capital Forest" },
  { slug: "dual-axis", name: "Dual Axis" },
  { slug: "institut-international-cafeologie", name: "Institut International de Caféologie" },
  { slug: "up2green", name: "Up2Green" },
  { slug: "ziha-fresh", name: "Ziha Fresh" },
  { slug: "eterna", name: "Eterna" },
  { slug: "ems-services", name: "EMS Services" },
  { slug: "cehpape", name: "CEHPAPE" },
  { slug: "university-florida-ifas", name: "University of Florida IFAS" },
  { slug: "saic-industries", name: "SAIC Industries" },
  { slug: "oregon-state-university", name: "Oregon State University" },
  { slug: "been-agro-business", name: "Been Agro Business" },
  { slug: "racine", name: "Racine" },
  { slug: "gfa-greenfield-advisors", name: "GFA Greenfield Advisors" },
  { slug: "green-legacy", name: "Green Legacy" },
  { slug: "alma-green", name: "Alma Green" },
  { slug: "intograss", name: "Intograss" },
  { slug: "bluecells-synergy", name: "BlueCells Synergy" },
  { slug: "fondation-adrienne-souindele", name: "Fondation Adrienne Souindélé" },
  { slug: "aquajet", name: "AquaJet" },
  { slug: "lenoda", name: "Lenoda" },
  { slug: "natur-ethique", name: "Natur'Éthique" },
  { slug: "wasser-arame", name: "Wasser Arame" },
  { slug: "mcfi", name: "MCFI" },
  { slug: "ete-europeenne-traitement-eaux", name: "ETE - Européenne de Traitement des Eaux" },
  { slug: "green-dream", name: "Green Dream" },
  { slug: "green-solutions", name: "Green Solutions" },
  { slug: "globe-sdg-emblem", name: "Objectifs de développement durable" },
];

export default function PartnersPageClient() {
  const { c } = useLanguage();
  const p = c.partnersPage;

  return (
    <div className="tech-page tech-blue">
      <div className="tech-bar">
        <a href="/" className="tech-back btn-3d btn-3d-light">
          ← {c.countryStudies.backToSite}
        </a>
        <LanguageSwitcher />
      </div>

      <header className="field-tests-hero">
        <p className="eyebrow">{p.eyebrow}</p>
        <h1>{p.title}</h1>
        <p className="lede">{p.lede}</p>
      </header>

      <div className="tech-body partners-body">
        <Reveal stagger=".partner-card" className="partners-grid">
          {PARTNERS.map((partner) => (
            <div className="partner-card" key={partner.slug}>
              <div className="partner-logo">
                <Image
                  src={`/images/partners/${partner.slug}.jpg`}
                  alt={partner.name}
                  width={300}
                  height={175}
                />
              </div>
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
