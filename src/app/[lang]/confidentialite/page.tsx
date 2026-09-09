import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Green Solutions",
  description:
    "Quelles données le formulaire de contact collecte, qui y accède, combien de temps elles sont conservées, et comment exercer vos droits.",
  alternates: { canonical: `${SITE_URL}/fr/confidentialite` },
};

export default function Confidentialite() {
  return (
    <main className="legal">
      <a href="/fr/" className="legal-back btn-3d btn-3d-light">
        ← Retour au site
      </a>

      <h1>Politique de confidentialité</h1>
      <p className="legal-updated">Dernière mise à jour : 9 septembre 2026</p>

      <p className="legal-lede">
        Ce site ne dépose aucun cookie, n&apos;utilise aucun outil de mesure
        d&apos;audience et ne conserve rien dans votre navigateur. Les seules
        données personnelles que nous recevons sont celles que vous nous
        écrivez vous-même dans le formulaire de contact.
      </p>

      <h2>Qui est responsable de ces données</h2>
      <p>
        Green Solutions, 821 Chemin des Clapiers, 83220 Le Pradet, France.
        <br />
        SIRET : 420 728 545 00021.
        <br />
        Contact :{" "}
        <a href="mailto:contact@evergreen-ecosorb.com">
          contact@evergreen-ecosorb.com
        </a>
      </p>

      <h2>Ce que le formulaire collecte</h2>
      <p>Quatre champs, et rien d&apos;autre :</p>
      <ul>
        <li>votre nom</li>
        <li>votre organisation, si vous la renseignez</li>
        <li>votre adresse électronique</li>
        <li>le message que vous écrivez</li>
      </ul>
      <p>
        Aucune de ces informations n&apos;est enregistrée dans une base de
        données : le formulaire les transmet directement par courriel.
      </p>

      <h2>Pourquoi nous les traitons</h2>
      <p>
        Uniquement pour vous répondre et poursuivre l&apos;échange que vous avez
        engagé. Ces données ne sont ni vendues, ni cédées, ni utilisées pour de
        la prospection non sollicitée.
      </p>
      <p>
        La base légale de ce traitement est notre intérêt légitime à répondre
        aux personnes qui nous écrivent, au sens de l&apos;article 6.1.f du
        règlement général sur la protection des données.
      </p>

      <h2>Qui y a accès</h2>
      <p>
        Les messages sont reçus et lus par deux personnes : Michel-Paul Correa
        et Gabriel Bonnat, dirigeants de Green Solutions. Personne d&apos;autre
        n&apos;y a accès.
      </p>
      <p>Deux prestataires techniques interviennent dans l&apos;acheminement :</p>
      <ul>
        <li>
          <strong>Resend</strong>, qui assure l&apos;envoi du courriel depuis le
          formulaire ;
        </li>
        <li>
          <strong>Vercel</strong>, qui héberge le site.
        </li>
      </ul>
      <p>
        Ces deux prestataires sont établis aux États-Unis. Les transferts
        s&apos;effectuent dans le cadre des garanties prévues par le règlement
        européen.
      </p>

      <h2>Combien de temps nous les gardons</h2>
      <p>
        <strong>Trois ans</strong> à compter de notre dernier échange. Passé ce
        délai, les messages sont supprimés.
      </p>

      <h2>Cookies et mesure d&apos;audience</h2>
      <p>
        Ce site n&apos;utilise <strong>aucun cookie</strong>, aucun traceur,
        aucun outil statistique et aucun bouton de réseau social. C&apos;est
        pourquoi vous ne voyez aucune fenêtre de consentement en arrivant :
        il n&apos;y a rien à accepter.
      </p>
      <p>
        Les polices de caractères sont servies depuis Google Fonts, ce qui
        transmet votre adresse IP à Google le temps du chargement.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander à accéder aux données vous concernant, les faire
        rectifier ou effacer, en limiter le traitement, vous y opposer, ou en
        demander la portabilité.
      </p>
      <p>
        Écrivez à{" "}
        <a href="mailto:contact@evergreen-ecosorb.com">
          contact@evergreen-ecosorb.com
        </a>
        . Nous répondons dans un délai d&apos;un mois.
      </p>
      <p>
        Si notre réponse ne vous satisfait pas, vous pouvez saisir la
        Commission nationale de l&apos;informatique et des libertés (CNIL),{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
          cnil.fr
        </a>
        .
      </p>
    </main>
  );
}
