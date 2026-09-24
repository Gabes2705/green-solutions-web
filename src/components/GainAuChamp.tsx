"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { CAS, PRIX_PRODUIT, calculer } from "@/lib/gains";
import { LOCALES, TEXTES } from "@/lib/gains-i18n";
import "./GainAuChamp.css";

/**
 * « Impact économique par hectare » : quatre exemples, un par continent.
 *
 * Chaque encadré déroule le même calcul, de la dose au gain net, pour qu'un
 * agriculteur retrouve le sien en changeant deux chiffres. Les valeurs de
 * marché non encore validées portent la mention « à confirmer ».
 *
 * Les nombres sont écrits dans la langue de la page : virgule décimale en
 * français, point en anglais, séparateurs de milliers de chaque pays. Le prix
 * reste en euros partout, puisque c'est la devise du tarif.
 */
export default function GainAuChamp() {
  const { language } = useLanguage();
  const t = TEXTES[language] ?? TEXTES.fr;
  const locale = LOCALES[language] ?? "fr-FR";

  const euros = (n: number) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(n));
  const nombre = (n: number, d = 1) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: d }).format(n);

  return (
    <section id="gain-au-champ" className="section section-alt">
      <div className="section-inner section-inner-large">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.titre}</h2>
          <p className="lede">{t.lede.replace("{prix}", nombre(PRIX_PRODUIT, 0))}</p>
        </Reveal>

        <Reveal stagger=".gc-carte" className="gc-grille">
          {CAS.map((cas) => {
            const c = calculer(cas);
            const mots = t.cas[cas.slug] ?? TEXTES.fr.cas[cas.slug];
            return (
              <article className="gc-carte" key={cas.slug}>
                <header className="gc-tete">
                  <p className="gc-continent">{mots.continent}</p>
                  <h3>
                    {mots.pays} · {mots.culture}
                  </h3>
                </header>

                <dl className="gc-lignes">
                  <div>
                    <dt>{t.dose}</dt>
                    <dd>
                      {mots.dose}
                      {mots.doseDetail && <span className="gc-detail">{mots.doseDetail}</span>}
                    </dd>
                  </div>
                  <div>
                    <dt>{t.quantite}</dt>
                    <dd>{nombre(cas.kgParHa, 0)} kg</dd>
                  </div>
                  <div>
                    <dt>{t.cout}</dt>
                    <dd className="gc-cout">− {euros(c.coutHa)} €/ha</dd>
                  </div>
                  <div>
                    <dt>{t.avant}</dt>
                    <dd>{nombre(cas.rendementAvant, 2)} t/ha</dd>
                  </div>
                  <div>
                    <dt>{t.apres}</dt>
                    <dd>
                      {nombre(c.rendementApres, 2)} t/ha
                      <span className="gc-detail">
                        {t.hausseDetail
                          .replace("{p}", nombre(cas.hausse, 1))
                          .replace("{t}", nombre(c.gainTonnes, 2))}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.prix}</dt>
                    <dd>
                      {nombre(cas.prixVente, 2)} €/kg
                      <span className="gc-detail">
                        {mots.originePrix} — {t.aConfirmer}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.recette}</dt>
                    <dd className="gc-recette">+ {euros(c.recetteEnPlus)} €/ha</dd>
                  </div>
                </dl>

                <p className="gc-resultat">
                  <span className="gc-resultat-valeur">+ {euros(c.gainNet)} €</span>
                  <span className="gc-resultat-label">
                    {t.gainNet} · {t.retour.replace("{n}", nombre(c.retour, 1))}
                  </span>
                </p>

                <footer className="gc-pied">
                  <p>{mots.origineHausse}.</p>
                  <p>{mots.bonus}.</p>
                  {/* La tomate n'a pas d'essai à elle : son bouton mène à la page
                      qui refait le calcul, pas à l'essai d'une autre culture.
                      Les essais, eux, existent maintenant dans les quatorze langues. */}
                  {cas.page ? (
                    <a href={`/${language}/${cas.page}`}>{t.voirDetail}</a>
                  ) : (
                    cas.essai && <a href={`/${language}/essais-terrain/${cas.essai}`}>{t.voirEssai}</a>
                  )}
                </footer>
              </article>
            );
          })}
        </Reveal>

        <Reveal>
          <p className="gc-avertissement">{t.avertissement}</p>
        </Reveal>
      </div>
    </section>
  );
}
