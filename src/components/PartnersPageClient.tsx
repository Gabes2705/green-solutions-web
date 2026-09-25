"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reveal from "@/components/Reveal";

type Partner = { slug: string; name: string; url?: string };

const PARTNERS: Partner[] = [
  { slug: "ecole-maraichage-urbain", name: "École de Maraîchage Urbain", url: "https://moreau-daverne.fr/" },
  { slug: "afrinest-moringa-farm", name: "AfriNest Moringa Farm", url: "https://afrinestfarm.co.za/" },
  { slug: "kortasgreen", name: "KortasGreen", url: "https://kortasgreen.lovable.app/" },
  { slug: "adnp", name: "ADNP" },
  { slug: "axe-capital-forest", name: "AXE Capital Forest", url: "https://oxygen-park.com/fr" },
  { slug: "dual-axis", name: "Dual Axis" },
  { slug: "institut-international-cafeologie", name: "Institut International de Caféologie", url: "https://institut-cafeologie.com" },
  { slug: "up2green", name: "Up2Green", url: "https://up2green.com/" },
  { slug: "ziha-fresh", name: "Zina Fresh", url: "https://zinafresh.com/" },
  { slug: "eterna", name: "Eterna" },
  { slug: "ems-services", name: "EMS Services" },
  { slug: "cehpape", name: "CEHPAPE", url: "https://www.helloasso.com/associations/centre-haitien-de-la-promotion-de-l-agriculture-et-la-protection-de-l-environnement-cehpape" },
  { slug: "university-florida-ifas", name: "University of Florida IFAS", url: "https://ifas.ufl.edu" },
  { slug: "saic-industries", name: "SAIC Industries", url: "https://saicindustries.cm/" },
  { slug: "oregon-state-university", name: "Oregon State University", url: "https://oregonstate.edu" },
  { slug: "been-agro-business", name: "Been Agro Business" },
  { slug: "racine", name: "Racine" },
  { slug: "gfa-greenfield-advisors", name: "GFA Greenfield Advisors" },
  { slug: "green-legacy", name: "Green Legacy", url: "https://www.greenlegacy.at" },
  { slug: "alma-green", name: "Alma Green" },
  { slug: "intograss", name: "Intograss", url: "https://intograss.com/" },
  { slug: "bluecells-synergy", name: "BlueCells Synergy", url: "https://bluecells-synergy.com/fr" },
  { slug: "fondation-adrienne-souindele", name: "Fondation Adrienne Souindélé", url: "https://fondationadriennesoundele.org/" },
  { slug: "aquajet", name: "AquaJet" },
  { slug: "lenoda", name: "Lenoda", url: "https://lenoda-services.com/agriculture" },
  { slug: "natur-ethique", name: "Natur'Éthique", url: "https://www.youtube.com/watch?v=42mQt857yDo" },
  { slug: "wasser-arame", name: "Wasser Arame" },
  { slug: "mcfi", name: "MCFI Ingenia", url: "https://ingenia.mu/" },
  { slug: "ete-europeenne-traitement-eaux", name: "ETE - Européenne de Traitement des Eaux", url: "https://www.etefrance.com/la-societe/" },
  { slug: "green-dream", name: "Green Dream", url: "https://www.greendream.bio/" },
  { slug: "sabeco", name: "SABECO" },
  { slug: "globe-sdg-emblem", name: "Objectifs de développement durable", url: "https://sdgs.un.org" },
];

export default function PartnersPageClient() {
  const { c, language } = useLanguage();
  const p = c.partnersPage;

  return (
    <div className="tech-page tech-blue">
      <div className="tech-bar">
        <a href={`/${language}/`} className="tech-back btn-3d btn-3d-light">
          ← {c.countryStudies.backToSite}
        </a>
        <LanguageSwitcher />
      </div>

      <header className="field-tests-hero">
        <p className="eyebrow">{p.eyebrow}</p>
        <h1>{p.title}</h1>
        <p className="lede">{p.lede}</p>
        <p className="partners-hint">{p.hint}</p>
      </header>

      <div className="tech-body partners-body">
        <Reveal stagger=".partner-card" className="partners-grid">
          {PARTNERS.map((partner) => {
            const logo = (
              <>
                <div className="partner-logo">
                  <Image
                    src={`/images/partners/${partner.slug}.jpg`}
                    alt={partner.name}
                    width={300}
                    height={175}
                  />
                </div>
                <p className="partner-name">{partner.name}</p>
              </>
            );
            return partner.url ? (
              <a
                className="partner-card partner-card-link"
                key={partner.slug}
                href={partner.url}
                target={partner.url.startsWith("/") ? undefined : "_blank"}
                rel={partner.url.startsWith("/") ? undefined : "noreferrer"}
              >
                {logo}
              </a>
            ) : (
              <div className="partner-card" key={partner.slug}>
                {logo}
              </div>
            );
          })}
        </Reveal>
      </div>
    </div>
  );
}
