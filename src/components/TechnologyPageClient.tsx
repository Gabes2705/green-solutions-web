"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reveal from "@/components/Reveal";

const TECH_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  "retention-eau": {
    hero: "/images/card-evergreen.jpg",
    gallery: [
      "/images/tech/ecosorb-effet.jpg",
      "/images/tech/ecosorb-terre.jpg",
      "/images/tech/evergreen-sacs.jpg",
    ],
  },
  paulownia: {
    hero: "/images/card-paulownia.jpg",
    gallery: [
      "/images/tech/paulownia-tracteur.jpg",
      "/images/tech/paulownia-croissance.jpg",
      "/images/stock/paulownia-bloom.jpg",
    ],
  },
  fertilisation: {
    hero: "/images/stock/wheat-golden-hour.jpg",
    gallery: [
      "/images/tech/ecofert-champ.jpg",
      "/images/tech/ecofert-soja.jpg",
      "/images/tech/ecofert-verger.jpg",
    ],
  },
  protection: {
    hero: "/images/card-napema.jpg",
    gallery: [
      "/images/tech/napema-racine-saine.jpg",
      "/images/tech/napema-tracteur.jpg",
      "/images/tech/napema-pollinisateurs.jpg",
    ],
  },
  "eau-restructuree": {
    hero: "/images/card-water-vital.jpg",
    gallery: [
      "/images/tech/hilal-bassin.jpg",
      "/images/tech/hilal-station.jpg",
      "/images/tech/hilal-verger.jpg",
    ],
  },
  agroforesterie: {
    hero: "/images/card-agroforesterie.jpg",
    gallery: [
      "/images/tech/agroforesterie-plantation.jpg",
      "/images/stock/orchard-rows-sunset.jpg",
      "/images/stock/aerial-field-pattern.jpg",
    ],
  },
};

const COLOR_CLASS: Record<string, string> = {
  "retention-eau": "tech-blue",
  paulownia: "tech-amber",
  fertilisation: "tech-terracotta",
  protection: "tech-red",
  "eau-restructuree": "tech-teal",
  agroforesterie: "tech-violet",
};

/** Splits a long paragraph into shorter, airier ones (~2 sentences each), locale-aware. */
function splitParagraphs(text: string, lang: string): string[] {
  try {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const segmenter = new Intl.Segmenter(lang, { granularity: "sentence" });
      const sentences = Array.from(segmenter.segment(text), (s) => s.segment.trim()).filter(
        Boolean
      );
      if (sentences.length > 1) {
        const perParagraph = sentences.length > 4 ? 2 : Math.ceil(sentences.length / 2);
        const paragraphs: string[] = [];
        for (let i = 0; i < sentences.length; i += perParagraph) {
          paragraphs.push(sentences.slice(i, i + perParagraph).join(" "));
        }
        return paragraphs;
      }
    }
  } catch {
    // fall through to returning the original text as a single paragraph
  }
  return [text];
}

export default function TechnologyPageClient() {
  const params = useParams<{ id: string }>();
  const { c, language } = useLanguage();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const item = c.products.items.find((p) => p.id === id);
  const images = id ? TECH_IMAGES[id] : undefined;
  const colorClass = (id && COLOR_CLASS[id]) || "tech-blue";

  if (!item || !images) {
    return (
      <div className="tech-page">
        <div className="tech-bar">
          <a href="/" className="tech-back btn-3d btn-3d-light">
            ← {c.countryStudies.backToSite}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`tech-page ${colorClass}`}>
      <div className="tech-bar">
        <a href="/" className="tech-back btn-3d btn-3d-light">
          ← {c.countryStudies.backToSite}
        </a>
        <LanguageSwitcher />
      </div>

      <header
        className="tech-hero"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="tech-hero-veil" role="presentation" />
        <div className="tech-hero-content">
          <span className="tech-hero-num">{item.num}</span>
          <p className="tech-hero-kicker">{item.kicker}</p>
          <h1>{item.title}</h1>
        </div>
      </header>

      <div className="tech-body">
        <Reveal>
          <ul className="tech-facts">
            {item.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>

        {item.detail.sections.map((s, i) => {
          const src = images.gallery[i];
          const caption = item.detail.gallery[i];
          const paragraphs = splitParagraphs(s.p, language);
          const splitAt = Math.ceil(paragraphs.length / 2);
          const firstHalf = paragraphs.slice(0, splitAt);
          const secondHalf = paragraphs.slice(splitAt);
          return (
            <Reveal key={s.h}>
              <section className="tech-section">
                <h2>{s.h}</h2>
                {firstHalf.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
                {src && (
                  <figure className="tech-figure">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={caption || ""} loading="lazy" />
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
                )}
                {secondHalf.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </section>
            </Reveal>
          );
        })}

        <Reveal>
          <div className="tech-cta">
            <p>{c.products.lede}</p>
            <a href="/#contact" className={`btn-3d tech-btn-3d ${colorClass}`}>
              {c.products.moreInfo}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
