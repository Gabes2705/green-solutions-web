"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { content, Lang, RTL_LANGS } from "./content";

type LanguageContextType = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  c: typeof content.fr;
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED_LANGS: Lang[] = ["fr", "en", "es", "pt", "ar", "zh", "id", "de"];

function getLanguageFromPathname(pathname: string): Lang {
  // Extract language from /[lang]/* pattern
  const match = pathname.match(/^\/([a-z]{2})/);
  const lang = match?.[1] as Lang | undefined;
  return lang && SUPPORTED_LANGS.includes(lang) ? lang : "fr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Lang>("fr");
  const [mounted, setMounted] = useState(false);
  const isRtl = RTL_LANGS.includes(language);

  useEffect(() => {
    // Get language from URL pathname
    const urlLang = getLanguageFromPathname(pathname);
    setLanguage(urlLang);
    setMounted(true);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = language;
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
