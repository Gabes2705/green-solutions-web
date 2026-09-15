"use client";

import Image from "next/image";
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
      {/* L'adresse du groupe, en Suisse. Le sceau plus bas la porte déjà dans
          son anneau, mais à 110px elle ne se lit pas : elle est écrite ici. */}
      <p>{c.footer.address}</p>
      <p className="footer-legal">
        <a href="/fr/mentions-legales">Mentions légales</a>
        <span aria-hidden="true"> · </span>
        <a href="/fr/confidentialite">Politique de confidentialité</a>
      </p>
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

      {/* The group's seal, closing the page. The mark carries the company name
          and its Swiss address in its own ring, so the alt text says both
          rather than naming it a logo. The footer is rendered on the home page
          only, so this is the one place on the site it appears. */}
      <div className="footer-seal">
        <Image
          src="/images/logo-aim-sa.png"
          alt="Green Solutions Groupe AIM SA — 46, route de la Condémine, Forel 1475, Suisse"
          width={512}
          height={512}
          sizes="140px"
        />
      </div>
    </footer>
  );
}
