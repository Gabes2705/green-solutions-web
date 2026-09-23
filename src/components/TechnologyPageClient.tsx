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

const TECH_VIDEOS: Record<string, string[]> = {
  "retention-eau": ["/videos/evergreen-ecosorb.mp4"],
  fertilisation: ["/videos/ecofert.mp4"],
  "eau-restructuree": ["/videos/water-vital-1.mp4", "/videos/water-vital-2.mp4"],
};

/* Une vidéo qui n'est pas la nôtre : elle est publiée par un tiers sur
   YouTube, donc on intègre son lecteur au lieu d'en recopier le fichier. Le
   domaine « nocookie » ne dépose rien dans le navigateur tant que le visiteur
   n'a pas lancé la lecture — la politique de confidentialité le dit. */
const TECH_YOUTUBE: Record<string, { id: string; titre: string }[]> = {
  paulownia: [
    { id: "9eDnuEEhu1M", titre: "Le paulownia, l'arbre du futur ? — Réel média" },
  ],
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

/**
 * Les pages écrites pour les moteurs de recherche (essais, guides) n'existent
 * qu'en français. Chaque page produit française y renvoie, pour qu'on les
 * trouve aussi en visitant le site.
 */
const GUIDE_FR: Record<string, { href: string; label: string }> = {
  "retention-eau": { href: "/fr/essais-terrain", label: "Voir les résultats des essais de terrain →" },
  fertilisation: { href: "/fr/guides/engrais-bio-liquide-biostimulant", label: "Lire le guide de l'engrais bio liquide →" },
  protection: { href: "/fr/guides/protection-naturelle-des-cultures", label: "Lire le guide de la protection naturelle des cultures →" },
};

export default function TechnologyPageClient() {
  const params = useParams<{ id: string }>();
  const { c, language } = useLanguage();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const item = c.products.items.find((p) => p.id === id);
  const images = id ? TECH_IMAGES[id] : undefined;
  const videos = id ? TECH_VIDEOS[id] : undefined;
  const embeds = id ? TECH_YOUTUBE[id] : undefined;
  const colorClass = (id && COLOR_CLASS[id]) || "tech-blue";

  if (!item || !images) {
    return (
      <div className="tech-page">
        <div className="tech-bar">
          <a href={`/${language}/`} className="tech-back btn-3d btn-3d-light">
            ← {c.countryStudies.backToSite}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`tech-page ${colorClass}`}>
      <div className="tech-bar">
        <a href={`/${language}/`} className="tech-back btn-3d btn-3d-light">
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

        {language === "fr" && id && GUIDE_FR[id] && (
          <a href={GUIDE_FR[id].href} className="field-tests-cta">
            {GUIDE_FR[id].label}
          </a>
        )}

        {((videos?.length ?? 0) > 0 || (embeds?.length ?? 0) > 0) && (
          <Reveal>
            <section id="video" className="tech-section">
              <h2>{c.products.videosHeading}</h2>
              <div className="tech-video-grid">
                {(videos ?? []).map((src) => (
                  <video key={src} className="tech-video" controls playsInline preload="metadata">
                    <source src={src} type="video/mp4" />
                  </video>
                ))}
                {(embeds ?? []).map((v) => (
                  <div key={v.id} className="tech-video-embed">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                      title={v.titre}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {item.detail.sections.map((s, i) => {
          const src = images.gallery[i];
          const caption = item.detail.gallery[i];
          const paragraphs = splitParagraphs(s.p, language);
          // Sur grand écran, le texte et la photo se partagent la largeur, et
          // la photo change de côté d'une section à l'autre ; sur téléphone,
          // la photo passe sous le texte.
          const classes = src
            ? `tech-section tech-section-duo${i % 2 ? " tech-section-inverse" : ""}`
            : "tech-section";
          return (
            <Reveal key={s.h}>
              <section className={classes}>
                <div className="tech-section-texte">
                  <h2>{s.h}</h2>
                  {paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
                {src && (
                  <figure className="tech-figure">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={caption || ""} loading="lazy" />
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
                )}
              </section>
            </Reveal>
          );
        })}

        <Reveal>
          <div className="tech-cta">
            <p>{c.products.lede}</p>
            <a href={`/${language}/#contact`} className={`btn-3d tech-btn-3d ${colorClass}`}>
              {c.products.moreInfo}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
