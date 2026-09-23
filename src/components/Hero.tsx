"use client";

import Atmosphere from "./Atmosphere";
import CoverDoors from "./CoverDoors";
import FloatingVideo from "./FloatingVideo";
import HeroBadge3D from "./HeroBadge3D";
import HeroParallax from "./HeroParallax";
import Nav from "./Nav";
import VideoDiagnostic from "./VideoDiagnostic";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { c, language } = useLanguage();

  const partnerLabel = {
    fr: "Devenir partenaire",
    en: "Become a partner",
    es: "Hacerse socio",
    pt: "Tornar-se parceiro",
    ar: "كن شريكًا",
    zh: "成为合作伙伴",
    id: "Menjadi mitra",
    de: "Partner werden",
    it: "Diventa partner",
    el: "Γίνετε συνεργάτης",
    tr: "İş ortağımız olun",
    pl: "Zostań partnerem",
    hr: "Postanite partner",
    ca: "Feu-vos soci",
  }[language];

  return (
    <div className="stage">
      <div className="hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-photo-img"
          src="/images/hero-cover-clean.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="water-glint" aria-hidden="true" />
      </div>
      <Atmosphere />

      <Nav />

      <HeroParallax>
        <HeroBadge3D />

        <h1 className="hero-claim">
          <span className="hero-claim-line">{c.hero.slogan1}</span>
          <span className="hero-claim-line">{c.hero.slogan2}</span>
          <span className="hero-claim-line">{c.hero.slogan3}</span>
        </h1>

        <div className="hero-cta">
          <a href="#contact" className="btn-3d btn-3d-light hero-cta-main">
            {c.hero.quoteCta}
          </a>
          <a href="#experience" className="btn-3d btn-3d-dark hero-cta-alt">
            {c.hero.explore}
          </a>
          <a
            href={`/${language}/devenir-partenaire`}
            className="btn-3d btn-3d-light hero-cta-main"
          >
            {partnerLabel}
          </a>
          {/* Les quatre exemples chiffrés n'existent qu'en français : le bouton
              qui y mène ne s'affiche donc que là. */}
        </div>

        {language === "fr" && (
          <div className="hero-cta-impact-ligne">
            <a href="#gain-au-champ" className="btn-3d btn-3d-light hero-cta-impact">
              Impact économique par hectare
            </a>
          </div>
        )}
      </HeroParallax>

      <FloatingVideo />
      <CoverDoors />
      <VideoDiagnostic />
    </div>
  );
}
