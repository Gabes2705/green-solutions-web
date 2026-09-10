"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { doorsFor } from "@/lib/doors";

/**
 * The row of five buttons along the foot of the cover.
 *
 * The row sits in the band of soil below the water drop, which reaches 81% of
 * the artwork's height - anything spanning higher than that cut through it.
 *
 * The numbers that used to precede each label are gone: these five are not a
 * sequence, so numbering them stated something untrue and took room from the
 * words that carry the meaning.
 */
export default function CoverDoors() {
  const { language } = useLanguage();
  const doors = doorsFor(language);

  return (
    <nav className="cover-doors" aria-label="Nos domaines">
      {doors.map((d) => (
        <a key={d.id} href={`/${language}/technologies/${d.id}`}>
          <span className="cover-doors-label">{d.label}</span>
        </a>
      ))}
    </nav>
  );
}
