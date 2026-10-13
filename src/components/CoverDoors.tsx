"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { COVER_TEXT } from "@/lib/cover-i18n";
import { doorsFor } from "@/lib/doors";
import styles from "./Hero.module.css";

/* One mark per door, drawn as a stroke so the five read as a set. Keyed by
   door id rather than by position: the labels are translated, the ids are not. */
const MARKS: Record<string, ReactNode> = {
  "retention-eau": <path d="M12 3.2c3.4 4 5.4 6.7 5.4 9.1a5.4 5.4 0 1 1-10.8 0c0-2.4 2-5.1 5.4-9.1Z" />,
  "eau-restructuree": (
    <>
      <path d="M19 5c0 7.2-3.6 11-8 11a5.6 5.6 0 0 1-5.6-5.6C5.4 6.4 11.5 5 19 5Z" />
      <path d="M8.5 20c1.4-4.2 3.7-7.4 7-9.6" />
    </>
  ),
  fertilisation: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-5M12 20v-9M17 20v-13" />
    </>
  ),
  protection: (
    <>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3 1.9-5.4 5-6 0 3.2-1.8 5.6-5 6Z" />
      <path d="M12 16c0-2.7-1.7-4.8-4.5-5.3 0 2.9 1.6 5 4.5 5.3Z" />
    </>
  ),
  paulownia: (
    <>
      <path d="M12 21v-5" />
      <path d="M12 16a6 6 0 0 0 1.2-11.9A5 5 0 0 0 5.4 8 4.4 4.4 0 0 0 12 16Z" />
    </>
  ),
};

/**
 * The row of five entry points along the foot of the cover.
 *
 * They are not a sequence, so they carry no numbers. Pointing at one lights
 * the part of the drawing that stands for that technology.
 */
export default function CoverDoors({ onPart }: { onPart: (id: string | null) => void }) {
  const { language } = useLanguage();
  const doors = doorsFor(language);

  return (
    <nav className={styles.doors} aria-label={COVER_TEXT[language].doors}>
      {doors.map((d) => (
        <a
          key={d.id}
          href={`/${language}/technologies/${d.id}`}
          className={styles.door}
          onMouseEnter={() => onPart(d.id)}
          onMouseLeave={() => onPart(null)}
          onFocus={() => onPart(d.id)}
          onBlur={() => onPart(null)}
        >
          <svg className={styles.doorMark} viewBox="0 0 24 24" aria-hidden="true">
            {MARKS[d.id]}
          </svg>
          <span className={styles.doorLabel}>{d.label}</span>
        </a>
      ))}
    </nav>
  );
}
