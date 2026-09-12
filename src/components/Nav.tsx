"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { c } = useLanguage();

  const LINKS = [
    { href: "#approche", label: c.nav.approach },
    { href: "#technologies", label: c.nav.technologies },
    { href: "#essais", label: c.nav.trials },
    { href: "#objections", label: c.nav.proofs },
    { href: "#reseau", label: c.nav.network },
    { href: "#ressources", label: c.nav.resources },
    { href: "/tests-et-rapports", label: c.nav.fieldTests },
    { href: "/partenaires", label: c.nav.partners },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="topnav">
      <div className="brand-mark">
        <Image
          src="/images/logo-icon-small.png"
          alt="Green Solutions"
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <span>
          GREEN <b>SOLUTIONS</b>
        </span>
      </div>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a href={l.href} key={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <LanguageSwitcher />
        <a href="#contact" className="nav-cta btn-3d btn-3d-light">
          {c.nav.contact}
        </a>
      </div>

      <button
        type="button"
        className="nav-burger btn-3d btn-3d-dark"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      >
        {LINKS.map((l) => (
          <a href={l.href} key={l.href}>
            {l.label}
          </a>
        ))}
        <LanguageSwitcher />
        <a href="#contact" className="nav-cta btn-3d btn-3d-light">
          {c.nav.contact}
        </a>
      </div>
    </nav>
  );
}
