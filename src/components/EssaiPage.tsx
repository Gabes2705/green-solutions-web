import "./DossierPage.css";
import { type Essai } from "@/lib/essais";
import { essaisTraduits, graphiquesTraduits, habillage } from "@/lib/essais-i18n";
import { Graphiques, PhotoLibre, photosDe } from "./EssaisVisuels";
import VideoPousse from "./VideoPousse";
import { FILMS } from "@/lib/films";

/**
 * Un essai de terrain rendu en HTML.
 *
 * Composant serveur, comme les dossiers pays, et habillé des mêmes classes :
 * tout le texte part dans la page, donc tout est lisible par un moteur de
 * recherche. Le rapport d'origine reste accessible en PDF pour qui veut la
 * preuve complète.
 *
 * Les mots viennent de la langue demandée ; les chiffres, eux, sont les mêmes
 * partout. Le PDF reste celui d'origine, dans sa langue.
 */
export default function EssaiPage({ essai, langue }: { essai: Essai; langue: string }) {
  const h = habillage(langue);
  const autres = essaisTraduits(langue).filter((e) => e.slug !== essai.slug);
  const photos = photosDe(essai.slug);
  const culture = essai.culture.split(" (")[0].toLowerCase();
  const rtl = langue === "ar";

  return (
    <article className="dossier-page" lang={langue} dir={rtl ? "rtl" : undefined}>
      <div className="tech-bar">
        <a href={`/${langue}/essais-terrain`} className="tech-back btn-3d btn-3d-light">
          {h.retour}
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
            {h.hubEyebrow} · {essai.pays}
          </p>
          <h1>{essai.titre}</h1>
          <p className="dossier-hero-chapeau">{essai.chapeau}</p>
          <a className="dossier-pdf btn-3d btn-3d-light" href={essai.pdf}>
            {h.lireRapport}
          </a>
        </div>
      </header>

      <div className="dossier-corps">
        <section className="dossier-section">
          <p className="eyebrow">{h.resultatsEyebrow}</p>
          <h2 className="section-title">{h.resultatsTitre}</h2>
          <div className="dossier-chiffres">
            {essai.resultats.map((r, i) => (
              <div key={i} className="dossier-chiffre">
                <span className="dossier-chiffre-valeur">{r.valeur}</span>
                <span className="dossier-chiffre-label">{r.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{h.imagesEyebrow}</p>
          <h2 className="section-title">{h.imagesTitre}</h2>
          <Graphiques graphiques={graphiquesTraduits(langue, essai.slug)} />
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{h.mecaniqueEyebrow}</p>
          <h2 className="section-title">{h.mecaniqueTitre}</h2>
          <div className="gv-duo">
            <VideoPousse film={FILMS.racines} />
            <p className="dossier-texte">{h.mecaniqueTexte}</p>
          </div>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{h.ficheEyebrow}</p>
          <h2 className="section-title">{h.ficheTitre}</h2>
          <ul className="dossier-puces">
            <li>
              {h.culture} : {essai.culture}
            </li>
            <li>
              {h.lieu} : {essai.lieu}, {essai.pays}
            </li>
            <li>
              {h.periode} : {essai.periode}
            </li>
            <li>
              {h.conduitPar} : {essai.conduit}
            </li>
            <li>
              {h.produits} : {essai.produits}
            </li>
          </ul>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{h.methodeEyebrow}</p>
          <h2 className="section-title">{h.methodeTitre}</h2>
          <ul className="dossier-puces">
            {essai.protocole.map((ligne, i) => (
              <li key={i}>{ligne}</li>
            ))}
          </ul>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">{h.observationsEyebrow}</p>
          <h2 className="section-title">{h.observationsTitre}</h2>
          <ul className="dossier-puces">
            {essai.constats.map((ligne, i) => (
              <li key={i}>{ligne}</li>
            ))}
          </ul>
        </section>

        {photos.length > 0 && (
          <section className="dossier-section">
            <div className="gv-photos">
              {photos.map((ph, i) => (
                <PhotoLibre key={i} photo={ph} alt={`${essai.culture} — ${culture}`} />
              ))}
            </div>
          </section>
        )}

        <section className="dossier-section">
          <p className="eyebrow">{h.autresEyebrow}</p>
          <h2 className="section-title">{h.autresTitre}</h2>
          <ul className="dossier-puces">
            {autres.map((e) => (
              <li key={e.slug}>
                <a href={`/${langue}/essais-terrain/${e.slug}`}>{e.titre}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
