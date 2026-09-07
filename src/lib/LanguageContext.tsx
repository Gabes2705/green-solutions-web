"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, Lang, RTL_LANGS } from "./content";

type LanguageContextType = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  c: typeof content.fr;
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED_LANGS: Lang[] = ["fr", "en", "es", "pt", "ar", "zh", "id", "de"];

function detectLanguageFromBrowser(): Lang {
  if (typeof window === "undefined") return "fr";

  const saved = localStorage.getItem("preferredLanguage") as Lang | null;
  if (saved && SUPPORTED_LANGS.includes(saved)) {
    return saved;
  }

  const browserLang = navigator.language || navigator.languages?.[0] || "fr";
  const lang = browserLang.split("-")[0].toLowerCase();

  const langMap: Record<string, Lang> = {
    fr: "fr",
    en: "en",
    es: "es",
    pt: "pt",
    ar: "ar",
    zh: "zh",
    id: "id",
    de: "de",
  };

  return langMap[lang] || "fr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("fr");
  const [mounted, setMounted] = useState(false);
  const isRtl = RTL_LANGS.includes(language);

  useEffect(() => {
    const detected = detectLanguageFromBrowser();
    setLanguage(detected);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("preferredLanguage", language);
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, c: content[language], isRtl }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
