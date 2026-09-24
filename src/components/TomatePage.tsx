import Link from "next/link";
import "./DossierPage.css";
import "./GainAuChamp.css";
import "./TomatePage.css";
import type { Graphique } from "@/lib/essais";
import { CAS, PRIX_PRODUIT, calculer } from "@/lib/gains";
import { LOCALES, TEXTES } from "@/lib/gains-i18n";
import { tomate } from "@/lib/tomate-i18n";
import { essaisTraduits, habillage } from "@/lib/essais-i18n";
import { Graphiques, PhotoLibre, photosDe } from "./EssaisVisuels";
import VideoPousse from "./VideoPousse";
import { FILMS } from "@/lib/films";

/**
 * « Tomate d'industrie en Espagne » : le détail du seul exemple de l'encadré
 * économique qui ne repose pas sur son propre essai.
 *
 * Le bouton de la carte menait à l'essai pastèque du Mexique : on cliquait sur
 * tomate, on tombait sur pastèque. Inventer un essai tomate n'était pas une
 * option — il n'existe pas. Cette page dit donc d'où vient chaque chiffre,
 * refait le calcul en grand, et renvoie aux deux essais maraîchers qui le
 * portent.
 *
 * Les nombres viennent de lib/gains.ts, comme ceux de la carte : la page et
 * l'encadré ne peuvent pas se contredire, puisqu'ils lisent la même ligne.
 */

const CAS_TOMATE = CAS.find((c) => c.slug === "espagne-tomate")!;
const CAS_PATATE = CAS.find((c) => c.slug === "afrique-du-sud-pomme-de-terre")!;
const ESSAI_PASTEQUE = "pasteques-mexique";
const ESSAI_PATATE = "pommes-de-terre-afrique-du-sud";

/** Remplace les {accolades} d'une phrase traduite par les nombres du calcul. */
function remplir(phrase: string, valeurs: Record<string, string>) {
  return Object.entries(valeurs).reduce((texte, [cle, valeur]) => texte.split(`{${cle}}`).join(valeur), phrase);
}

export default function TomatePage({ langue }: { langue: string }) {
  const x = tomate(langue);
  const t = TEXTES[langue] ?? TEXTES.fr;
  const h = habillage(langue);
  const mots = t.cas["espagne-tomate"] ?? TEXTES.fr.cas["espagne-tomate"];
  const locale = LOCALES[langue] ?? "fr-FR";
  const rtl = langue === "ar";

  const euros = (n: number) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(n));
  const nombre = (n: number, d = 1) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: d }).format(n);

  const c = calculer(CAS_TOMATE);
  const photos = photosDe("tomate-espagne");

  const valeurs = {
    prix: nombre(PRIX_PRODUIT, 0),
    kg: nombre(CAS_TOMATE.kgParHa, 0),
    cout: euros(c.coutHa),
    dose: mots.dose,
    doseDetail: mots.doseDetail ?? "",
    h: nombre(CAS_TOMATE.hausse, 1),
    p: nombre(CAS_PATATE.hausse, 1),
    avant: nombre(CAS_TOMATE.rendementAvant, 2),
    prixVente: nombre(CAS_TOMATE.prixVente, 2),
  };

  const graphiques: Graphique[] = [
    {
      titre: x.graphRecolte,
      barres: [
        {
          label: x.graphSans,
          valeur: CAS_TOMATE.rendementAvant,
          affiche: `${nombre(CAS_TOMATE.rendementAvant, 2)} t`,
          traite: false,
        },
        { label: x.graphAvec, valeur: c.rendementApres, affiche: `${nombre(c.rendementApres, 2)} t`, traite: true },
      ],
    },
    {
      titre: x.graphArgent,
      barres: [
        { label: x.graphCout, valeur: c.coutHa, affiche: `${euros(c.coutHa)} €`, traite: false },
        { label: x.graphRecette, valeur: c.recetteEnPlus, affiche: `${euros(c.recetteEnPlus)} €`, traite: true },
      ],
    },
  ];

  const essais = essaisTraduits(langue);
  const titreDe = (slug: string) => essais.find((e) => e.slug === slug)?.titre ?? slug;

  return (
    <article className="dossier-page" lang={langue} dir={rtl ? "rtl" : undefined}>
      <div className="tech-bar">
        <a href={`/${langue}/#gain-au-champ`} className="tech-back btn-3d btn-3d-light">
          {x.retour}
        </a>
      </div>

      <header className={`dossier-hero gv-hero${photos[0] ? "" : " dossier-hero-uni"}`}>
        {photos[0] && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="dossier-hero-photo" src={photos[0].src} alt="" fetchPriority="high" />
            <div className="dossier-hero-voile" aria-hidden="true" />
          </>
        )}
        <div className="dossier-hero-texte">
          <p className="eyebrow">
            {mots.continent} · {mots.pays}
          </p>
          <h1>{x.titre}</h1>
          <p className="dossier-hero-chapeau">{x.chapeau}</p>
          <a className="dossier-pdf btn-3d btn-3d-light" href="#essais">
            {x.boutonEssais}
          </a>
        </div>
      </header>

      <div className="dossier-corps">
        <section className="dossier-section">
          <p className="eyebrow">{x.calculEyebrow}</p>
          <h2 className="section-title">{x.calculTitre}</h2>
          <p className="dossier-texte">{remplir(x.calculTexte, valeurs)}</p>

          <div className="tomate-calcul">
            <article className="gc-carte">
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
                  <dd>{nombre(CAS_TOMATE.kgParHa, 0)} kg</dd>
                </div>
                <div>
                  <dt>{t.cout}</dt>
                  <dd className="gc-cout">− {euros(c.coutHa)} €/ha</dd>
                </div>
                <div>
                  <dt>{t.avant}</dt>
                  <dd>{nombre(CAS_TOMATE.rendementAvant, 2)} t/ha</dd>
                </div>
                <div>
                  <dt>{t.apres}</dt>
                  <dd>
                    {nombre(c.rendementApres, 2)} t/ha
                    <span className="gc-detail">
                      {t.hausseDetail
                        .replace("{p}", nombre(CAS_TOMATE.hausse, 1))
                        .replace("{t}", nombre(c.gainTonnes, 2))}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt>{t.prix}</dt>
                  <dd>
                    {nombre(CAS_TOMATE.prixVente, 2)} €/kg
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
                <p>{mots.bonus}.</p>
              </footer>
            </article>

            <div className="tomate-images">
              <p className="eyebrow">{x.imagesEyebrow}</p>
              <h3>{x.imagesTitre}</h3>
              <Graphiques graphiques={graphiques} />
            </div>
          </div>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{x.solEyebrow}</p>
          <h2 className="section-title">{x.solTitre}</h2>
          <div className="gv-duo">
            <VideoPousse
              film={FILMS.tomates}
              mots={{ legende: x.filmLegende, alt: x.filmAlt, video: h.videoMot, accelere: h.videoAccelere }}
            />
            <p className="dossier-texte">{x.solTexte}</p>
          </div>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{x.sourcesEyebrow}</p>
          <h2 className="section-title">{x.sourcesTitre}</h2>
          <ul className="dossier-puces">
            <li>{remplir(x.source1, valeurs)}</li>
            <li>{remplir(x.source2, valeurs)}</li>
            <li>{remplir(x.source3, valeurs)}</li>
            <li>{remplir(x.source4, valeurs)}</li>
            <li>{remplir(x.source5, valeurs)}</li>
          </ul>
        </section>

        {photos.length > 0 && (
          <section className="dossier-section">
            <div className="gv-photos">
              {photos.map((ph, i) => (
                <PhotoLibre key={i} photo={ph} alt={mots.culture} />
              ))}
            </div>
          </section>
        )}

        <section className="dossier-section">
          <p className="eyebrow">{x.espagneEyebrow}</p>
          <h2 className="section-title">{x.espagneTitre}</h2>
          <ul className="dossier-puces">
            <li>{x.espagne1}</li>
            <li>{x.espagne2}</li>
            <li>{x.espagne3}</li>
            <li>
              <Link href="/es/dossiers/espagne">{x.dossierLien}</Link>
            </li>
          </ul>
        </section>

        <section className="dossier-section" id="essais">
          <p className="eyebrow">{x.suiteEyebrow}</p>
          <h2 className="section-title">{x.suiteTitre}</h2>
          <ul className="dossier-puces">
            <li>
              <a href={`/${langue}/essais-terrain/${ESSAI_PASTEQUE}`}>{titreDe(ESSAI_PASTEQUE)}</a>
            </li>
            <li>
              <a href={`/${langue}/essais-terrain/${ESSAI_PATATE}`}>{titreDe(ESSAI_PATATE)}</a>
            </li>
            <li>
              <a href={`/${langue}/essais-terrain`}>{x.tousEssais}</a>
            </li>
          </ul>
          <p className="gc-avertissement">{t.avertissement}</p>
        </section>
      </div>
    </article>
  );
}
