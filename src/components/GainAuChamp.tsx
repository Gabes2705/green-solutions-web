"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { CAS, PRIX_PRODUIT, calculer } from "@/lib/gains";
import "./GainAuChamp.css";

const euros = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(n));
const nombre = (n: number, d = 1) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: d }).format(n);

/**
 * « Ce que ça rapporte » : quatre exemples, un par continent.
 *
 * Chaque encadré déroule le même calcul, de la dose au gain net, pour qu'un
 * agriculteur retrouve le sien en changeant deux chiffres. Les valeurs de
 * marché non encore validées portent la mention « à confirmer ».
 *
 * En français seulement pour l'instant : les prix et les rendements varient
 * d'un pays à l'autre, et il vaut mieux une page juste qu'une page traduite.
 */
export default function GainAuChamp() {
  const { language } = useLanguage();
  if (language !== "fr") return null;

  return (
    <section id="gain-au-champ" className="section section-alt">
      <div className="section-inner section-inner-large">
        <Reveal>
          <p className="eyebrow">Ce que ça rapporte</p>
          <h2 className="section-title">Le calcul, à l&apos;hectare, sur quatre continents</h2>
          <p className="lede">
            Le produit coûte {PRIX_PRODUIT} € le kilo, rendu cultivateur. Voici ce qu&apos;il coûte
            et ce qu&apos;il rapporte sur un hectare, avec les gains de récolte mesurés lors de nos
            essais.
          </p>
        </Reveal>

        <Reveal stagger=".gc-carte" className="gc-grille">
          {CAS.map((cas) => {
            const c = calculer(cas);
            return (
              <article className="gc-carte" key={cas.slug}>
                <header className="gc-tete">
                  <p className="gc-continent">{cas.continent}</p>
                  <h3>
                    {cas.pays} · {cas.culture}
                  </h3>
                </header>

                <dl className="gc-lignes">
                  <div>
                    <dt>Dose</dt>
                    <dd>
                      {cas.dose}
                      {cas.doseDetail && <span className="gc-detail">{cas.doseDetail}</span>}
                    </dd>
                  </div>
                  <div>
                    <dt>Quantité par hectare</dt>
                    <dd>{nombre(cas.kgParHa, 0)} kg</dd>
                  </div>
                  <div>
                    <dt>Coût du produit</dt>
                    <dd className="gc-cout">− {euros(c.coutHa)} €/ha</dd>
                  </div>
                  <div>
                    <dt>Récolte sans produit</dt>
                    <dd>{nombre(cas.rendementAvant, 2)} t/ha</dd>
                  </div>
                  <div>
                    <dt>Récolte avec produit</dt>
                    <dd>
                      {nombre(c.rendementApres, 2)} t/ha
                      <span className="gc-detail">
                        + {nombre(cas.hausse, 1)} %, soit + {nombre(c.gainTonnes, 2)} t
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>Prix payé au producteur</dt>
                    <dd>
                      {nombre(cas.prixVente, 2)} €/kg
                      <span className="gc-detail">{cas.originePrix}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Recette en plus</dt>
                    <dd className="gc-recette">+ {euros(c.recetteEnPlus)} €/ha</dd>
                  </div>
                </dl>

                <p className="gc-resultat">
                  <span className="gc-resultat-valeur">+ {euros(c.gainNet)} €</span>
                  <span className="gc-resultat-label">
                    de gain net par hectare · {nombre(c.retour, 1)} € gagnés pour 1 € dépensé
                  </span>
                </p>

                <footer className="gc-pied">
                  <p>{cas.origineHausse}.</p>
                  {cas.bonus && <p>{cas.bonus}.</p>}
                  {cas.essai && (
                    <a href={`/fr/essais-terrain/${cas.essai}`}>Voir l&apos;essai →</a>
                  )}
                </footer>
              </article>
            );
          })}
        </Reveal>

        <Reveal>
          <p className="gc-avertissement">
            Les gains de récolte viennent de nos essais de terrain. Les rendements de référence et
            les prix payés au producteur sont des moyennes de marché, qui changent d&apos;une région
            et d&apos;une année à l&apos;autre : ces chiffres sont donnés pour l&apos;ordre de
            grandeur, et non comme un engagement. Nous refaisons le calcul avec vos propres chiffres
            sur demande.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
