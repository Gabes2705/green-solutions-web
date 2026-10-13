"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./Hero.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { c } = useLanguage();

  const LINKS = [
    { href: "#approche", label: c.nav.approach },
    { href: "#technologies", label: c.nav.technologies },
    { href: "#essais", label: c.nav.trials },
    { href: "#objections", label: c.nav.proofs },
    { href: "#reseau", label: c.nav.network },
    { href: "#ressources", label: c.nav.resources },
    { href: "#tests-et-rapports", label: c.nav.fieldTests },
    { href: "/partenaires", label: c.nav.partners },
  ];

  /* The bar is bare over the white of the cover and takes a ground of its own
     as soon as the page moves, so it stays readable over the dark sections. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /* Hold the page still behind the open panel. Without this the menu scrolls
     the cover underneath it on a phone, and closing it leaves you somewhere
     you never asked to be. The class is what does the locking, so the styling
     stays in the stylesheet with everything else. */
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  /* A phone keeps the same page across a hash link, so nothing would close
     the panel after a tap on one. The container's onClick covers taps on the
     links themselves; this covers the back button and any other route change. */
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <nav className={`${styles.nav}${scrolled || open ? ` ${styles.navSolid}` : ""}`}>
      <div className={styles.brand}>
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

      <div className={styles.links}>
        {LINKS.map((l) => (
          <a href={l.href} key={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <div className={styles.right}>
        <LanguageSwitcher />
        <a href="#contact" className={styles.cta}>
          {c.nav.contact}
        </a>
        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.menu}${open ? ` ${styles.menuOpen}` : ""}`}
        /* Only a link closes the panel. Closing on any click inside it meant
           the language switcher shut the whole menu the moment it was
           tapped, so the language could not be changed from a phone at all:
           its trigger and its options are buttons, not links. */
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {LINKS.map((l) => (
          <a href={l.href} key={l.href}>
            {l.label}
          </a>
        ))}
        <LanguageSwitcher />
        <a href="#contact" className={styles.cta}>
          {c.nav.contact}
        </a>
      </div>
    </nav>
  );
}
