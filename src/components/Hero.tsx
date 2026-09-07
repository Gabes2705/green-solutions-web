"use client";

import Atmosphere from "./Atmosphere";
import HeroBadge3D from "./HeroBadge3D";
import HeroParallax from "./HeroParallax";
import Nav from "./Nav";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { c } = useLanguage();

  return (
    <div className="stage">
      <div className="hero-photo">
        <video
          className="hero-photo-img"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-plant.jpg"
        >
          <source src="/videos/green-solutions-hero.mp4" type="video/mp4" />
        </video>
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

      <a href="#approche" className="where-to-go">
        <span>
          {c.hero.whereTo1}
          <br />
          {c.hero.whereTo2}
        </span>
      </a>
    </div>
  );
}
