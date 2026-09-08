"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";

function EtudeViewer() {
  const params = useSearchParams();
  const { c } = useLanguage();
  const file = params.get("file") || "";
  const name = params.get("name") || "";

  return (
    <div className="etude-viewer">
      <div className="etude-bar">
        <a href="/" className="etude-back btn-3d btn-3d-light">
          ← {c.countryStudies.backToSite}
        </a>
        {name && <span className="etude-name">{name}</span>}
      </div>
      <object data={file} type="application/pdf" className="etude-frame">
        <p className="etude-fallback">
          <a href={file} target="_blank" rel="noreferrer">
            {name || file}
          </a>
        </p>
      </object>
    </div>
  );
}

export default function EtudePage() {
  return (
    <Suspense fallback={null}>
      <EtudeViewer />
    </Suspense>
  );
}
