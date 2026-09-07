"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { c } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="#approche">{c.nav.approach}</a>
        <a href="#technologies">{c.nav.technologies}</a>
        <a href="#essais">{c.nav.trials}</a>
        <a href="#objections">{c.nav.proofs}</a>
        <a href="#reseau">{c.nav.network}</a>
        <a href="#ressources">{c.nav.resources}</a>
      </div>
      <p>{c.footer.address}</p>
      <p className="photo-credit">
        {c.footer.photoCreditPrefix}{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Paulownia_-_Princess_tree_01.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Zeynel Cebeci
        </a>{" "}
        {c.footer.photoCreditAnd}{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Plantation_de_paulownias.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Codex
        </a>
        , CC BY-SA 4.0
      </p>
    </footer>
  );
}
