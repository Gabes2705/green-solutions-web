"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function TenirAvancer() {
  const [tab, setTab] = useState<"tenir" | "avancer">("avancer");
  const { c } = useLanguage();
  const ta = c.tenirAvancer;

  return (
    <section id="methode" className="section tenir-avancer">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{ta.eyebrow}</p>
          <h2 className="section-title">
            {ta.title1}
            <br />
            {ta.title2}
          </h2>
        </Reveal>

        <div className="ta-tabs" role="tablist" aria-label={ta.tabLabel}>
          <button
            role="tab"
            aria-selected={tab === "tenir"}
            className={`ta-tab${tab === "tenir" ? " active" : ""}`}
            onClick={() => setTab("tenir")}
          >
            {ta.tabTenir}
          </button>
          <button
            role="tab"
            aria-selected={tab === "avancer"}
            className={`ta-tab${tab === "avancer" ? " active" : ""}`}
            onClick={() => setTab("avancer")}
          >
            {ta.tabAvancer}
          </button>
        </div>

        {tab === "tenir" ? (
          <ul className="ta-list" key="tenir">
            {ta.tenirList.map((item, i) => (
              <li key={item} style={{ animationDelay: `${i * 70}ms` }}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="ta-answers" key="avancer">
            {ta.avancerList.map((item, i) => (
              <div
                className="ta-answer"
                key={item.linkHref}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <p>{item.text}</p>
                <a href={item.linkHref} className="ta-answer-link btn-3d btn-3d-dark">
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>
        )}

        <p className="ta-cta">{ta.cta}</p>
      </div>
    </section>
  );
}
