"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const IMAGES: Record<string, string> = {
  "retention-eau": "/images/card-evergreen.jpg",
  paulownia: "/images/card-paulownia.jpg",
  fertilisation: "/images/stock/wheat-golden-hour.jpg",
  protection: "/images/card-napema.jpg",
  "eau-restructuree": "/images/card-water-vital.jpg",
  agroforesterie: "/images/card-agroforesterie.jpg",
};

const BUTTON_COLORS: Record<string, string> = {
  "retention-eau": "tech-blue",
  paulownia: "tech-amber",
  fertilisation: "tech-terracotta",
  protection: "tech-red",
  "eau-restructuree": "tech-teal",
  agroforesterie: "tech-violet",
};

export default function Produits() {
  const { c } = useLanguage();
  const p = c.products;

  return (
    <section id="technologies" className="section section-alt">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="section-title">{p.title}</h2>
          <p className="lede">{p.lede}</p>
        </Reveal>

        <div className="product-list">
          {p.items.map((item) => (
            <Reveal key={item.num}>
              <article
                id={item.id}
                className="product-row"
                style={{ backgroundImage: `url('${IMAGES[item.id]}')` }}
              >
                <div className="product-row-veil" role="presentation" />

                <div className="product-row-body">
                  <span className="p-num">{item.num}</span>
                  <p className="p-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <ul className="p-facts">
                    {item.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/technologies/${item.id}`}
                    className={`p-learn btn-3d ${BUTTON_COLORS[item.id]}`}
                  >
                    {p.readMore}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
