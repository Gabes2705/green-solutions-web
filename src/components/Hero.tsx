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
  const { c } = useLanguage();

  return (
    <div className="stage">
      <div className="hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-photo-img"
          src="/images/hero-cover.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
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
          <a href="#technologies" className="btn-3d btn-3d-light hero-cta-main">
            {c.hero.explore}
          </a>
        </div>
      </HeroParallax>

      <FloatingVideo />
      <CoverDoors />
      <VideoDiagnostic />
    </div>
  );
}
