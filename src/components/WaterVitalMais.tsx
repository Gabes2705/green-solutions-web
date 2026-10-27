import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { mais } from "@/lib/water-vital-mais-i18n";
import "./WaterVitalMais.css";

/**
 * « Water Vital® pour le maïs ensilage », sur la page Water Vital® : la fiche
 * que Gabriel a envoyée (EN, AR, FR), refaite en vrai texte pour que les 14
 * langues existent. Les mots sont dans lib/water-vital-mais-i18n.ts.
 *
 * Les trois images viennent de sa fiche : la photo des racines (l'original la
 * marque « image illustrative », la mention reste dessous), la photo d'ensilage
 * et le logo, détouré du fond blanc. Le bandeau du bas de la fiche (un courriel
 * et un site) n'est pas repris, à la demande de Gabriel : le bouton mène au
 * formulaire de contact.
 *
 * Les pictogrammes sont tracés ici, sur une grille de 24 et d'un seul trait,
 * pour prendre la couleur du site au lieu du bleu marine de la fiche.
 */
const PHOTO_RACINES = { src: "/images/tech/water-vital-mais-racines.jpg", w: 1024, h: 366 };
const PHOTO_ENSILAGE = { src: "/images/tech/water-vital-mais-ensilage.jpg", w: 412, h: 220 };
const LOGO = { src: "/images/tech/water-vital-logo.png", w: 170, h: 211 };

const PICTOS: Record<string, ReactNode> = {
  racines: (
    <>
      <path d="M12 10.5V5" />
      <path d="M12 6.8c0-2.2 1.8-3.6 4-3.6 0 2.2-1.8 3.6-4 3.6z" />
      <path d="M12 8.6c0-1.7-1.4-2.8-3.2-2.8 0 1.7 1.4 2.8 3.2 2.8z" />
      <path d="M12 10.5c0 3-3 4.5-6 8.5" />
      <path d="M12 10.5c0 3 3 4.5 6 8.5" />
      <path d="M12 10.5v10.5" />
      <path d="M9.4 15 6.4 14.6M14.6 15l3-.4M12 17l-2.6 2M12 17l2.6 2" />
    </>
  ),
  goutte: (
    <>
      <path d="M12 3.2c3.4 4.3 6 7.3 6 10.6a6 6 0 0 1-12 0c0-3.3 2.6-6.3 6-10.6z" />
      <path d="M9.3 14.4a3 3 0 0 0 2.2 2.7" />
    </>
  ),
  sac: (
    <>
      <path d="M6.5 3.5h11L19 7v12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5V7l1.5-3.5z" />
      <path d="M5 7.5h14" />
      <path d="M12 18.5v-4.2" />
      <path d="M12 14.8c0-1.6 1.2-2.6 2.8-2.6 0 1.6-1.2 2.6-2.8 2.6z" />
      <path d="M12 16.4c0-1.3-1-2.1-2.4-2.1 0 1.3 1 2.1 2.4 2.1z" />
    </>
  ),
  pivot: (
    <>
      <path d="M2.5 6.5h19" />
      <path d="M12 6.5 8.6 2.5M12 6.5l3.4-4" />
      <path d="M5 6.5v3M9 6.5v3M15 6.5v3M19 6.5v3" />
      <path d="M5 13v2M9 13v2M15 13v2M19 13v2" />
      <path d="M5 18v1M9 18v1M15 18v1M19 18v1" />
    </>
  ),
  mais: (
    <>
      <path d="M12 2.8c2 1.4 3.2 4.2 3.2 7.7S14 16.6 12 18c-2-1.4-3.2-4.2-3.2-7.5S10 4.2 12 2.8z" />
      <path d="M9 7.5h6M8.8 10.5h6.4M9 13.5h6" />
      <path d="M12 21.2c-3.2 0-6-2.2-7-5.7 2.6 0 5 .9 7 3.4" />
      <path d="M12 21.2c3.2 0 6-2.2 7-5.7-2.6 0-5 .9-7 3.4" />
    </>
  ),
  silo: (
    <>
      <path d="M7 21V9.5a5 5 0 0 1 10 0V21" />
      <path d="M4.5 21h15" />
      <path d="M7 13h10M7 17h10" />
      <path d="M12 4.5v-2" />
    </>
  ),
  liste: (
    <>
      <rect x="5.5" y="4.5" width="13" height="16.5" rx="2" />
      <rect x="9" y="2.8" width="6" height="3.4" rx="1" />
      <path d="M9 11l1.4 1.4L13 9.8M9 16.5l1.4 1.4 2.6-2.6M15 11.8h1.8M15 17h1.8" />
    </>
  ),
  alerte: (
    <>
      <path d="M12 3.5 21.5 20h-19L12 3.5z" />
      <path d="M12 10v4.6M12 17.4v.01" />
    </>
  ),
};

/** Un pictogramme par piste, dans l'ordre de la fiche. */
const PICTOS_PISTES = ["racines", "goutte", "sac", "pivot", "mais", "silo"];

function Picto({ nom, className }: { nom: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PICTOS[nom]}
    </svg>
  );
}

export default function WaterVitalMais({ langue }: { langue: string }) {
  const x = mais(langue);

  return (
    <div className="wvm" id="mais-ensilage">
      <Reveal>
        <section className="tech-section wvm-entete">
          <div className="wvm-marque">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="wvm-logo" src={LOGO.src} width={LOGO.w} height={LOGO.h} alt="" decoding="async" />
            <div>
              <h2>{x.title}</h2>
              <p className="wvm-sous-titre">{x.subtitle}</p>
            </div>
          </div>
          <p className="wvm-lede">{x.lede}</p>
          <figure className="tech-figure wvm-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO_RACINES.src}
              width={PHOTO_RACINES.w}
              height={PHOTO_RACINES.h}
              alt={x.photoAlt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{x.photoCaption}</figcaption>
          </figure>
        </section>
      </Reveal>

      <Reveal stagger=".wvm-piste">
        <section className="tech-section">
          <h3>{x.benefitsTitle}</h3>
          <ul className="wvm-pistes">
            {x.benefits.map((b, i) => (
              <li className="wvm-piste" key={b.h}>
                <span className="wvm-rond">
                  <Picto nom={PICTOS_PISTES[i]} className="wvm-picto" />
                </span>
                <div>
                  <h4>{b.h}</h4>
                  <p>{b.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="tech-section wvm-verif">
          <div>
            <h3>
              <Picto nom="liste" className="wvm-picto-titre" />
              {x.verifyTitle}
            </h3>
            <p>{x.verifyText}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTO_ENSILAGE.src}
            width={PHOTO_ENSILAGE.w}
            height={PHOTO_ENSILAGE.h}
            alt={x.silageAlt}
            loading="lazy"
            decoding="async"
          />
        </section>

        <div className="wvm-important">
          <Picto nom="alerte" className="wvm-picto-alerte" />
          <p>
            <strong>{x.importantLabel}</strong> {x.important}
          </p>
        </div>

        <div className="wvm-appel">
          <a href={`/${langue}/#contact`} className="btn-3d tech-btn-3d tech-teal">
            <Picto nom="goutte" className="wvm-goutte" />
            {x.cta}
            <Picto nom="goutte" className="wvm-goutte" />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
