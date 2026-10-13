"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import CoverDoors from "./CoverDoors";
import CoverFilm from "./CoverFilm";
import HeroPlate from "./HeroPlate";
import Nav from "./Nav";
import { useLanguage } from "@/lib/LanguageContext";
import { COVER_TEXT } from "@/lib/cover-i18n";
import { TEXTES } from "@/lib/gains-i18n";
import styles from "./Hero.module.css";

const PARTNER_LABEL = {
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
};

const PARTNERS_LIST_LABEL = {
  fr: "Nos partenaires",
  en: "Our partners",
  es: "Nuestros socios",
  pt: "Nossos parceiros",
  ar: "شركاؤنا",
  zh: "我们的合作伙伴",
  id: "Mitra kami",
  de: "Unsere Partner",
  it: "I nostri partner",
  el: "Οι συνεργάτες μας",
  tr: "İş ortaklarımız",
  pl: "Nasi partnerzy",
  hr: "Naši partneri",
  ca: "Els nostres socis",
};

/* Width of a line in "average Latin letters": a Chinese character is about
   twice as wide, Greek letters a bit wider. The title is sized to its longest
   line, since the three slogans run from 4 characters to 24. */
function weigh(text: string) {
  let w = 0;
  for (const ch of text) {
    if (/[　-鿿＀-￯]/.test(ch)) w += 1.9;
    else if (/[Ͱ-Ͽἀ-῿]/.test(ch)) w += 1.16;
    else if (/[؀-ۿ]/.test(ch)) w += 0.95;
    else w += 1;
  }
  return w;
}

/* A figure like "-40 إلى -70 %" mixes words and numbers. On a right-to-left
   line the sign and the percent mark of each number drift to the wrong side,
   so every number is set apart as its own left-to-right run. */
function Figure({ text }: { text: string }) {
  return (
    <span>
      {text.split(/([+\-−]?\d[\d.,]*(?:\s?%)?)/).map((part, i) => (i % 2 ? <bdi key={i}>{part}</bdi> : part))}
    </span>
  );
}

export default function Hero() {
  const { c, language } = useLanguage();
  const [part, setPart] = useState<string | null>(null);

  const text = COVER_TEXT[language];
  const { slogan1, slogan2, slogan3 } = c.hero;
  const longest = Math.max(weigh(slogan1), weigh(slogan2), weigh(slogan3));
  /* the figure printed under the second line: the water saving on the proof bar */
  const saving = c.proofBar[1]?.figure;

  return (
    <section className={styles.hero} data-part={part ?? undefined} aria-labelledby="cover-title">
      <Nav />

      <div className={styles.copy}>
        <h1
          id="cover-title"
          className={styles.claim}
          style={{ "--len": longest.toFixed(1) } as CSSProperties}
        >
          <span className={styles.line}>{slogan1}</span>
          <span className={`${styles.line} ${styles.dimLine}`}>
            {slogan2}
            {saving && (
              <span className={styles.dim} aria-hidden="true">
                <Figure text={saving} />
              </span>
            )}
          </span>
          <span className={styles.line}>{slogan3}</span>
        </h1>

        <div className={styles.actions}>
          <a href="#contact" className={styles.primary}>
            {c.hero.quoteCta}
          </a>
          <a href="#gain-au-champ" className={styles.secondary}>
            {(TEXTES[language] ?? TEXTES.fr).bouton}
          </a>
        </div>
      </div>

      <div className={styles.stage}>
        <div className={styles.field} />
        <div className={styles.art} role="img" aria-label={text.scene}>
          <HeroPlate />
          <div className={styles.detail}>
            <Image
              src="/images/hero-plant.jpg"
              alt=""
              fill
              sizes="(max-width: 700px) 1px, 16vw"
              className={styles.detailImg}
            />
          </div>
        </div>
      </div>

      <div className={styles.below}>
        <aside className={styles.block}>
          <dl className={styles.proof}>
            {c.proofBar.map((p) => (
              <div className={styles.row} key={p.label}>
                <dt>
                  <Figure text={p.figure} />
                </dt>
                <dd>{p.label}</dd>
              </div>
            ))}
          </dl>
          <CoverFilm label={text.film} closeLabel={text.close} />
          <div className={styles.partners}>
            <a href={`/${language}/partenaires`}>{PARTNERS_LIST_LABEL[language]}</a>
            <a href={`/${language}/devenir-partenaire`}>{PARTNER_LABEL[language]}</a>
          </div>
        </aside>

        <CoverDoors onPart={setPart} />
      </div>
    </section>
  );
}
