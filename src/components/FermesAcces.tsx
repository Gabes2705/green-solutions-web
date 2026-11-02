"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { FERMES } from "@/lib/fermes-i18n";
import "./FermesAcces.css";

/* Accès direct à la rubrique « Notre partenaire et les fermes idéales », placé
   juste après « Les technologies ». Le bloc suit la langue du visiteur, comme la
   rubrique elle-même. */
export default function FermesAcces() {
  const { language } = useLanguage();
  const c = FERMES[language];

  return (
    <section id="fermes-ideales-acces" className="fa-section">
      <div className="fa-inner">
        <Reveal>
          <figure className="fa-image">
            <Image
              src="/images/fermes-ideales/portrait-carnavalet.webp"
              alt={c.accueil.alt}
              width={800}
              height={1000}
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </figure>
        </Reveal>
        <Reveal>
          <p className="eyebrow">{c.accueil.eyebrow}</p>
          <h2 className="fa-title">{c.accueil.titre}</h2>
          <p className="fa-lede">{c.accueil.texte}</p>
          <Link href={`/${language}/fermes-ideales`} className="btn-3d btn-3d-light fa-btn">
            {c.accueil.bouton}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
