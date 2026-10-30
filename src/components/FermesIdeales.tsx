import Image from "next/image";
import type { Lang } from "@/lib/content";
import { FERMES } from "@/lib/fermes-i18n";
import "./FermesIdeales.css";

/* Les identifiants du sommaire, dans l’ordre des libellés de chaque langue. */
const SOMMAIRE_IDS = [
  "partenaire",
  "ferme-ecole",
  "french-method",
  "produits",
  "concevoir",
  "questions",
  "rendez-vous",
];

/* Les ouvrages, du plus récent au plus ancien. Les titres sont ceux des livres,
   en français, dans toutes les langues ; seules les mentions d’édition changent. */
const LIVRES = [
  {
    src: "/images/fermes-ideales/livre-agriculture-2024.webp",
    titre: "Agriculture biologique, une approche scientifique",
    width: 425,
  },
  {
    src: "/images/fermes-ideales/livre-french-method-2020.webp",
    titre: "Le maraîchage sur petite surface : La French Method",
    width: 401,
  },
  {
    src: "/images/fermes-ideales/livre-agriculture-2018.webp",
    titre: "Agriculture biologique, une approche scientifique",
    width: 436,
  },
  {
    src: "/images/fermes-ideales/livre-agriculture-2011.webp",
    titre: "Agriculture biologique : une approche scientifique",
    width: 439,
  },
];

/* Partenaires cités dans la plaquette : des noms propres, donnés tels quels. */
const PARTENAIRES = [
  "Pôle Emploi",
  "Pôle Vert Azur d’Antibes",
  "Balicco",
  "Ville de Cannes",
  "Communauté d’agglomération Cannes-Pays de Lérins",
  "Mycophyto",
  "Agence 3C Agro Conseil",
  "Conseil départemental 06",
  "Initiative Terre d’Azur",
  "France Active",
  "Banque Populaire Méditerranée",
];

/* La rubrique « Fermes idéales », dans la langue demandée. Les textes viennent de
   src/lib/fermes-i18n ; la mise en page est la même dans toutes les langues. */
export default function FermesIdeales({ lang }: { lang: Lang }) {
  const c = FERMES[lang];
  const accueil = `/${lang}/`;
  /* Prise de rendez-vous : l’adresse de l’entreprise, avec un objet déjà rempli.
     Ce lien est distinct du formulaire de contact du site, par exprès. */
  const rendezVous = `mailto:contact@green-solutions-group.com?subject=${encodeURIComponent(c.rdvSujet)}`;

  return (
    <>
    <header className="fi-topbar">
      <a className="fi-brand" href={accueil}>
        <Image src="/images/logo-icon-small.png" alt="" width={28} height={28} />
        <span>
          GREEN <b>SOLUTIONS</b>
        </span>
      </a>
      <nav className="fi-topbar-liens" aria-label={c.haut.aria}>
        <a href={accueil}>{c.haut.accueil}</a>
        <a href={`${accueil}#contact`}>{c.haut.contact}</a>
      </nav>
    </header>

    <main className="fi">
      <section className="fi-hero">
        <div className="fi-wrap fi-hero-grid">
          <div>
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1 className="fi-title">{c.hero.titre}</h1>
            <p className="fi-lede">{c.hero.lede}</p>
            <p className="fi-meta">Christian Carnavalet · Institut Moreau-Daverne · French Method</p>
            <ul className="fi-chips">
              {SOMMAIRE_IDS.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`}>{c.hero.sommaire[i]}</a>
                </li>
              ))}
            </ul>
          </div>
          <figure className="fi-portrait">
            <Image
              src="/images/fermes-ideales/portrait-carnavalet.webp"
              alt={c.hero.alt}
              width={800}
              height={1000}
              sizes="(max-width: 860px) 100vw, 45vw"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="fi-video-band" aria-label={c.video.aria}>
        <div className="fi-wrap">
          <p className="eyebrow">{c.video.eyebrow}</p>
          <video
            className="fi-video"
            src="/videos/fermes-ideales/christian-carnavalet.mp4"
            poster="/images/fermes-ideales/video-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          >
            {c.video.repli}
          </video>
        </div>
      </section>

      <section id="partenaire" className="fi-section">
        <div className="fi-wrap">
          <figure className="fi-banniere">
            <Image
              src="/images/fermes-ideales/equipe-ecole.webp"
              alt={c.partenaire.alt}
              width={1024}
              height={572}
              sizes="(max-width: 860px) 100vw, 1180px"
            />
            <figcaption className="fi-legende">{c.partenaire.legende}</figcaption>
          </figure>
        </div>
        <div className="fi-wrap fi-split">
          <div>
            <p className="eyebrow">{c.partenaire.eyebrow}</p>
            <h2 className="fi-h2">{c.partenaire.titre}</h2>
            <p className="fi-texte">{c.partenaire.texte}</p>
          </div>
          <div>
            <h3 className="fi-h3">{c.partenaire.bioTitre}</h3>
            <p className="fi-texte">{c.partenaire.bio1}</p>
            <p className="fi-texte">{c.partenaire.bio2}</p>
          </div>
        </div>
        <div className="fi-wrap">
          <div className="fi-livres-bloc">
            <h3 className="fi-h3">{c.partenaire.livresTitre}</h3>
            <p className="fi-texte">{c.partenaire.livresTexte}</p>
            <ul className="fi-livres">
              {LIVRES.map((l, i) => (
                <li className="fi-livre" key={l.src}>
                  <figure>
                    <Image
                      src={l.src}
                      alt={`${c.partenaire.couverture} « ${l.titre} »`}
                      width={l.width}
                      height={600}
                      sizes="(max-width: 640px) 45vw, 260px"
                    />
                    <figcaption>
                      {l.titre}
                      <span className="fi-livre-detail">{c.partenaire.livresDetails[i]}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="ferme-ecole" className="fi-section fi-section--alt">
        <div className="fi-wrap">
          <div className="fi-split">
            <div>
              <p className="eyebrow">{c.ferme.eyebrow}</p>
              <h2 className="fi-h2">{c.ferme.titre}</h2>
              <p className="fi-texte">{c.ferme.p1}</p>
              <p className="fi-texte">{c.ferme.p2}</p>
            </div>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/plaquette-intro.webp"
                alt={c.ferme.altIntro}
                width={1156}
                height={1059}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">{c.ferme.legendeIntro}</figcaption>
            </figure>
          </div>

          <figure className="fi-banniere">
            <Image
              src="/images/fermes-ideales/plaquette-parcelles.webp"
              alt={c.ferme.altBanniere}
              width={937}
              height={454}
              sizes="(max-width: 860px) 100vw, 1180px"
            />
            <figcaption className="fi-legende">{c.ferme.legendeBanniere}</figcaption>
          </figure>

          <div className="fi-cartes">
            {c.ferme.cartes.map((f) => (
              <article className="fi-carte" key={f.titre}>
                <h3 className="fi-h3">{f.titre}</h3>
                <p className="fi-texte">{f.texte}</p>
              </article>
            ))}
          </div>

          <div className="fi-split fi-split--suite">
            <figure className="fi-image-43">
              <Image
                src="/images/fermes-ideales/plaquette-formation.webp"
                alt={c.ferme.altFormation}
                width={1013}
                height={432}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">{c.ferme.legendeBanniere}</figcaption>
            </figure>
            <div>
              <h3 className="fi-h3">{c.ferme.coopTitre}</h3>
              <p className="fi-texte">{c.ferme.coopTexte}</p>
            </div>
          </div>

          <div className="fi-split fi-split--suite">
            <div>
              <h3 className="fi-h3">{c.ferme.projetsTitre}</h3>
              <p className="fi-texte">{c.ferme.projetsTexte}</p>
              <p className="fi-legende">{c.ferme.partenairesLabel}</p>
              <ul className="fi-partenaires">
                {PARTENAIRES.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/plaquette-vue-aerienne.webp"
                alt={c.ferme.altAerien}
                width={903}
                height={616}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">{c.ferme.legendeAerien}</figcaption>
            </figure>
          </div>

          <p className="fi-note">{c.ferme.note}</p>
        </div>
      </section>

      <section id="french-method" className="fi-section">
        <div className="fi-wrap">
          <p className="eyebrow">{c.methode.eyebrow}</p>
          <h2 className="fi-h2">{c.methode.titre}</h2>
          <p className="fi-texte fi-texte--large">{c.methode.texte}</p>
          <figure className="fi-banniere">
            <Image
              src="/images/fermes-ideales/ia-serres-banniere.webp"
              alt={c.methode.altBanniere}
              width={1600}
              height={900}
              sizes="(max-width: 860px) 100vw, 1180px"
            />
            <figcaption className="fi-legende">{c.iaLegende}</figcaption>
          </figure>
          <div className="fi-cartes">
            {c.methode.cartes.map((m) => (
              <article className="fi-carte" key={m.titre}>
                <h3 className="fi-h3">{m.titre}</h3>
                <p className="fi-texte">{m.texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="produits" className="fi-section fi-section--alt">
        <div className="fi-wrap">
          <p className="eyebrow">{c.produits.eyebrow}</p>
          <h2 className="fi-h2">{c.produits.titre}</h2>
          <p className="fi-texte fi-texte--large">{c.produits.texte}</p>
          <div className="fi-cartes">
            {c.produits.cartes.map((p) => (
              <article className="fi-carte" key={p.titre}>
                <h3 className="fi-h3">{p.titre}</h3>
                <p className="fi-texte">{p.texte}</p>
              </article>
            ))}
          </div>
          <div className="fi-split fi-split--suite">
            <div>
              <h3 className="fi-h3">{c.produits.obsTitre}</h3>
              <p className="fi-texte">{c.produits.obsTexte1}</p>
              <p className="fi-texte">{c.produits.obsTexte2}</p>
            </div>
            <div>
              <figure className="fi-portrait-ia">
                <Image
                  src="/images/fermes-ideales/ia-champ-tomates.webp"
                  alt={c.produits.altChamp}
                  width={800}
                  height={1000}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
                <figcaption className="fi-legende">{c.iaLegende}</figcaption>
              </figure>
              <div className="fi-actions">
                <a href={`${accueil}#contact`} className="btn-3d btn-3d-light fi-btn">
                  {c.produits.bouton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="concevoir" className="fi-section">
        <div className="fi-wrap">
          <p className="eyebrow">{c.concevoir.eyebrow}</p>
          <h2 className="fi-h2">{c.concevoir.titre}</h2>
          <p className="fi-texte fi-texte--large">{c.concevoir.texte}</p>
          <div className="fi-split">
            <ol className="fi-etapes">
              {c.concevoir.etapes.map((e) => (
                <li className="fi-etape" key={e.titre}>
                  <div>
                    <h3 className="fi-h3">{e.titre}</h3>
                    <p className="fi-texte">{e.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/serres.webp"
                alt={c.concevoir.altSerres}
                width={900}
                height={900}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">{c.concevoir.legendeSerres}</figcaption>
            </figure>
          </div>
          <p className="fi-note">{c.concevoir.note}</p>
        </div>
      </section>

      <section id="galerie" className="fi-section">
        <div className="fi-wrap">
          <p className="eyebrow">{c.galerie.eyebrow}</p>
          <h2 className="fi-h2">{c.galerie.titre}</h2>
          <div className="fi-galerie">
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/legumes-caisse.webp"
                alt={c.galerie.altCaisse}
                width={900}
                height={900}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">{c.galerie.legende}</figcaption>
            </figure>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/carottes-potager.webp"
                alt={c.galerie.altCarottes}
                width={900}
                height={900}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">{c.galerie.legende}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="questions" className="fi-section fi-section--alt">
        <div className="fi-wrap">
          <p className="eyebrow">{c.questions.eyebrow}</p>
          <h2 className="fi-h2">{c.questions.titre}</h2>
          <figure className="fi-carre fi-carre--petit">
            <Image
              src="/images/fermes-ideales/ia-salade-semis.webp"
              alt={c.questions.altSalade}
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 440px"
            />
            <figcaption className="fi-legende">{c.iaLegende}</figcaption>
          </figure>
          <div className="fi-cartes">
            {c.questions.cartes.map((x) => (
              <article className="fi-carte" key={x.q}>
                <h3 className="fi-h3">{x.q}</h3>
                <p className="fi-texte">{x.r}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rendez-vous" className="fi-section fi-contact">
        <div className="fi-wrap">
          <p className="eyebrow">{c.rendezVous.eyebrow}</p>
          <h2 className="fi-h2">{c.rendezVous.titre}</h2>
          <p className="fi-texte fi-texte--large">{c.rendezVous.texte}</p>
          <div className="fi-actions">
            <a href={rendezVous} className="fi-rdv">
              {c.rendezVous.rdv}
              <span aria-hidden="true">→</span>
            </a>
            <a href={`${accueil}#contact`} className="btn-3d btn-3d-light fi-btn">
              {c.rendezVous.presenter}
            </a>
          </div>
          <p className="fi-note">{c.rendezVous.note}</p>
        </div>
      </section>
    </main>

    <footer className="fi-footer">
      <p>{c.pied.phrase}</p>
      <nav className="fi-footer-liens" aria-label={c.pied.aria}>
        <a href="/fr/mentions-legales">{c.pied.mentions}</a>
        <a href="/fr/confidentialite">{c.pied.confidentialite}</a>
        <a href={accueil}>{c.pied.accueil}</a>
      </nav>
    </footer>
    </>
  );
}
