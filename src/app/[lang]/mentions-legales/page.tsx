import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales | Green Solutions",
  description:
    "Éditeur, directeur de la publication, hébergeur et propriété intellectuelle du site Green Solutions.",
  alternates: { canonical: `${SITE_URL}/fr/mentions-legales` },
};

export default function MentionsLegales() {
  return (
    <main className="legal">
      <a href="/fr/" className="legal-back btn-3d btn-3d-light">
        ← Retour au site
      </a>

      <h1>Mentions légales</h1>
      <p className="legal-updated">Dernière mise à jour : 9 septembre 2026</p>

      <h2>Éditeur du site</h2>
      <p>
        <strong>GREEN SOLUTIONS SAS</strong>
        <br />
        821 Chemin des Clapiers, 83220 Le Pradet, France
        <br />
        Société par actions simplifiée au capital de{" "}
        <mark>à compléter</mark>
        <br />
        RCS Toulon 420 728 545 — SIRET 420 728 545 00021
        <br />
        Code NAF : 4778C
        <br />
        TVA intracommunautaire : FR16420728545
        <br />
        Téléphone : +33 6 44 83 55 09
        <br />
        Courriel :{" "}
        <a href="mailto:contact@evergreen-ecosorb.com">
          contact@evergreen-ecosorb.com
        </a>
      </p>

      <h2>Directeur de la publication</h2>
      <p>Michel-Paul Correa, en sa qualité de dirigeant.</p>

      <h2>Hébergeur</h2>
      <p>
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Avenue #4133
        <br />
        Covina, CA 91723, États-Unis
        <br />
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          vercel.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site — textes, images, schémas,
        marques et logos — est protégé au titre du droit de la propriété
        intellectuelle. Les marques EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®,
        Water Vital® et Paulownia ALTIFOLIA® sont des marques déposées.
      </p>
      <p>
        Toute reproduction ou représentation, totale ou partielle, sans
        autorisation écrite préalable est interdite.
      </p>

      <h2>Crédits photographiques</h2>
      <p>
        Photographies de Paulownia : Zeynel Cebeci et Codex, publiées sur
        Wikimedia Commons sous licence CC BY-SA 4.0.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données transmises via le formulaire de contact est
        décrit dans la{" "}
        <a href="/fr/confidentialite">politique de confidentialité</a>.
      </p>
    </main>
  );
}
