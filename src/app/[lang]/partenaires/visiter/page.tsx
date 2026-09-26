"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function PartnerVisit() {
  const params = useSearchParams();
  const { c, language } = useLanguage();
  const url = params.get("url") || "";
  const name = params.get("name") || "";
  const slug = params.get("slug") || "";

  return (
    <div className="etude-viewer partner-visit-viewer">
      <div className="etude-bar">
        <a href={`/${language}/partenaires`} className="etude-back btn-3d btn-3d-light">
          {c.partnersPage.backToPartners}
        </a>
        {name && <span className="etude-name">{name}</span>}
      </div>
      <div className="partner-visit-body">
        {slug && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="partner-visit-logo" src={`/images/partners/${slug}.jpg`} alt={name} />
        )}
        {url && (
          <a
            className="btn-3d btn-3d-dark partner-visit-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hostnameOf(url)} ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function PartnerVisitPage() {
  return (
    <Suspense fallback={null}>
      <PartnerVisit />
    </Suspense>
  );
}
