"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import "./FermesAcces.css";

/* Accès direct à la rubrique « Notre partenaire et les fermes idéales », placé
   juste après « Les technologies ». La rubrique n'existe qu'en français pour
   l'instant : le bloc ne s'affiche donc que sur l'accueil français. */
export default function FermesAcces() {
  const { language } = useLanguage();
  if (language !== "fr") return null;

  return (
    <section id="fermes-ideales-acces" className="fa-section">
      <div className="fa-inner">
        <Reveal>
          <figure className="fa-image">
            <Image
              src="/images/fermes-ideales/portrait.webp"
              alt="Christian Carnavalet, debout dans une parcelle de la ferme-école, une serre blanche derrière lui"
              width={800}
              height={1000}
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </figure>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Notre partenaire</p>
          <h2 className="fa-title">Notre partenaire et les fermes idéales</h2>
          <p className="fa-lede">
            Une école de maraîchage à Cannes, où Christian Carnavalet transmet la French Method et où nos produits
            sont appliqués au terrain.
          </p>
          <Link href="/fr/fermes-ideales" className="btn-3d btn-3d-light fa-btn">
            Découvrir les fermes idéales →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
