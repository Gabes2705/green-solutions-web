import "./DossierPage.css";
import { ESSAIS, type Essai } from "@/lib/essais";

/**
 * Un essai de terrain rendu en HTML.
 *
 * Composant serveur, comme les dossiers pays, et habillé des mêmes classes :
 * tout le texte part dans la page, donc tout est lisible par un moteur de
 * recherche. Le rapport d'origine reste accessible en PDF pour qui veut la
 * preuve complète.
 */
export default function EssaiPage({ essai }: { essai: Essai }) {
  const autres = ESSAIS.filter((e) => e.slug !== essai.slug);

  return (
    <article className="dossier-page" lang="fr-FR">
      <div className="tech-bar">
        <a href="/fr/essais-terrain" className="tech-back btn-3d btn-3d-light">
          ← Tous les essais
        </a>
      </div>

      <header className="dossier-hero dossier-hero-uni">
        <div className="dossier-hero-texte">
          <p className="eyebrow">
            Essai de terrain · {essai.pays}
          </p>
          <h1>{essai.titre}</h1>
          <p className="dossier-hero-chapeau">{essai.chapeau}</p>
          <a className="dossier-pdf btn-3d btn-3d-light" href={essai.pdf}>
            Lire le rapport complet (PDF)
          </a>
        </div>
      </header>

      <div className="dossier-corps">
        <section className="dossier-section">
          <p className="eyebrow">Résultats</p>
          <h2 className="section-title">Ce que l&apos;essai a mesuré</h2>
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
          <p className="eyebrow">Fiche de l&apos;essai</p>
          <h2 className="section-title">Où, quand, par qui</h2>
          <ul className="dossier-puces">
            <li>Culture : {essai.culture}</li>
            <li>
              Lieu : {essai.lieu}, {essai.pays}
            </li>
            <li>Période : {essai.periode}</li>
            <li>Conduit par : {essai.conduit}</li>
            <li>Produits : {essai.produits}</li>
          </ul>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">Méthode</p>
          <h2 className="section-title">Comment l&apos;essai a été mené</h2>
          <ul className="dossier-puces">
            {essai.protocole.map((ligne, i) => (
              <li key={i}>{ligne}</li>
            ))}
          </ul>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">Observations</p>
          <h2 className="section-title">Ce qu&apos;il faut retenir</h2>
          <ul className="dossier-puces">
            {essai.constats.map((ligne, i) => (
              <li key={i}>{ligne}</li>
            ))}
          </ul>
        </section>

        <section className="dossier-section">
          <p className="eyebrow">Autres essais</p>
          <h2 className="section-title">Les mêmes produits, sur d&apos;autres cultures</h2>
          <ul className="dossier-puces">
            {autres.map((e) => (
              <li key={e.slug}>
                <a href={`/fr/essais-terrain/${e.slug}`}>{e.titre}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
