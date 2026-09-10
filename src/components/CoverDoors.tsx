"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { doorsFor } from "@/lib/doors";

/**
 * The row of five links along the foot of the cover.
 *
 * There is no rule across the top of the row: the water drop in the cover
 * artwork reaches down to 81% of the image height, and a full-width line drew
 * straight through it. The columns are separated by short vertical hairlines
 * instead, and the whole row sits in the band of soil below the drop.
 */
export default function CoverDoors() {
  const { language } = useLanguage();
  const doors = doorsFor(language);

  return (
    <nav className="cover-doors" aria-label="Nos domaines">
      {doors.map((d, i) => (
        <a key={d.id} href={`/${language}/technologies/${d.id}`}>
          <span className="cover-doors-num">{String(i + 1).padStart(2, "0")}</span>
          <span className="cover-doors-label">{d.label}</span>
        </a>
      ))}
    </nav>
  );
}
