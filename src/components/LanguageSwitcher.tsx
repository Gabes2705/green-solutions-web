"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/content";

const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "zh", label: "中文", name: "简体中文" },
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "de", label: "DE", name: "Deutsch" },
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
