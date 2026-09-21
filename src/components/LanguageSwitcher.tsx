"use client";

import { useEffect, useRef, useState } from "react";
import CountryFlag from "./CountryFlag";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/content";

/* `flag` names the country whose flag stands for the language, which is not
   always where the language is from: English is shown under the flag of the
   market this site sells into rather than the language's birthplace. */
const LANGS: { code: Lang; label: string; name: string; flag: string }[] = [
  { code: "fr", label: "FR", name: "Français", flag: "france" },
  { code: "en", label: "EN", name: "English", flag: "etats-unis" },
  { code: "es", label: "ES", name: "Español", flag: "espagne" },
  { code: "pt", label: "PT", name: "Português", flag: "portugal" },
  { code: "ar", label: "AR", name: "العربية", flag: "arabie-saoudite" },
  { code: "zh", label: "中文", name: "简体中文", flag: "chine" },
  { code: "id", label: "ID", name: "Bahasa Indonesia", flag: "indonesie" },
  { code: "de", label: "DE", name: "Deutsch", flag: "allemagne" },
  { code: "it", label: "IT", name: "Italiano", flag: "italie" },
  { code: "el", label: "EL", name: "Ελληνικά", flag: "grece" },
  { code: "tr", label: "TR", name: "Türkçe", flag: "turquie" },
  { code: "pl", label: "PL", name: "Polski", flag: "pologne" },
  { code: "hr", label: "HR", name: "Hrvatski", flag: "croatie" },
  { code: "ca", label: "CA", name: "Català", flag: "catalunya" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const current = LANGS.find((l) => l.code === language) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="language-switcher" ref={wrapRef}>
      <button
        type="button"
        className="lang-current"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <CountryFlag id={current.flag} />
        {current.label}
        <span className={`lang-caret${open ? " open" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={language === l.code}
                className={`lang-option${language === l.code ? " active" : ""}`}
                onClick={() => {
                  setLanguage(l.code);
                  setOpen(false);
                }}
              >
                <CountryFlag id={l.flag} />
                <span className="lang-option-code">{l.label}</span>
                <span className="lang-option-name">{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
