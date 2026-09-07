"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CountryTicker() {
  const { c } = useLanguage();

  return (
    <div className="ticker" aria-label="Pays du réseau Green Solutions">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <ul className="ticker-group" key={copy} aria-hidden={copy === 1}>
            {c.countries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
