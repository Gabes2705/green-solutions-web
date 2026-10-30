import Image from "next/image";
import "./FermesIdeales.css";

/* Prise de rendez-vous : l'adresse de l'entreprise, avec un objet déjà rempli.
   Ce lien est distinct du formulaire de contact du site, par exprès. */
const RENDEZ_VOUS = `mailto:contact@green-solutions-group.com?subject=${encodeURIComponent(
  "Rendez-vous : projet de ferme idéale",
)}`;

const SOMMAIRE = [
  { id: "partenaire", label: "Notre partenaire" },
  { id: "ferme-ecole", label: "La ferme-école" },
  { id: "french-method", label: "La French Method" },
  { id: "produits", label: "Nos produits au terrain" },
  { id: "concevoir", label: "Concevoir une ferme" },
  { id: "questions", label: "Questions" },
  { id: "rendez-vous", label: "Rendez-vous" },
];

/* Ouvrages de Christian Carnavalet, du plus récent au plus ancien. */
const LIVRES = [
  {
    src: "/images/fermes-ideales/livre-agriculture-2024.webp",
    alt: "Couverture d’Agriculture biologique, une approche scientifique, 3e édition",
    titre: "Agriculture biologique, une approche scientifique",
    detail: "3e édition · France Agricole · 2024 · 620 p.",
    width: 425,
    height: 600,
  },
  {
    src: "/images/fermes-ideales/livre-french-method-2020.webp",
    alt: "Couverture de Le maraîchage sur petite surface : La French Method",
    titre: "Le maraîchage sur petite surface : La French Method",
    detail: "Éditions du Terran · 2020 · 320 p.",
    width: 401,
    height: 600,
  },
  {
    src: "/images/fermes-ideales/livre-agriculture-2018.webp",
    alt: "Couverture d’Agriculture biologique, une approche scientifique, 2e édition",
    titre: "Agriculture biologique, une approche scientifique",
    detail: "2e édition revue et augmentée · France Agricole · 2018 · 574 p.",
    width: 436,
    height: 600,
  },
  {
    src: "/images/fermes-ideales/livre-agriculture-2011.webp",
    alt: "Couverture d’Agriculture biologique : une approche scientifique, édition de 2011",
    titre: "Agriculture biologique : une approche scientifique",
    detail: "France Agricole · 2011 · 472 p. · préface de Claude et Lydia Bourguignon",
    width: 439,
    height: 600,
  },
];

/* Cartes de la ferme-école, d'après la plaquette de l’Institut (édition de février 2022). */
const FORMATION = [
  {
    titre: "Une formation longue d’un an",
    texte:
      "La pratique représente 85 % du temps d’apprentissage de la formation longue, qui dure une année. Des formations courtes permettent de découvrir la French Method et les démarches pour créer une petite ferme maraîchère.",
  },
  {
    titre: "Des marais confiés aux stagiaires",
    texte:
      "La pratique se déroule chez « Les Fermiers Bio Associés » : 2 ha de surface, dont 1,5 ha divisé en marais de 1 000 m². Ces marais sont attribués aux stagiaires, qui en ont la responsabilité. Le matériel, les semences et le transport des livraisons sont mis à disposition.",
  },
  {
    titre: "Vers l’installation",
    texte:
      "Au terme de la formation, les stagiaires qui le souhaitent peuvent devenir chefs d’entreprise en maraîchage sur petite surface. L’Institut favorise leur inscription à la MSA, pour l’obtention de leur SIRET, et leur permet d’intégrer une coopérative agricole de production.",
  },
];

/* Partenaires cités dans la plaquette de l’Institut (édition de février 2022). */
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

const METHODE = [
  {
    titre: "Associer les cultures",
    texte:
      "La disposition des plantes tient compte de leur hauteur, de leur vitesse de croissance et de la place qu’elles occupent. Les contreplantations permettent de faire cohabiter des cultures dont les cycles se complètent, au lieu de réserver systématiquement une planche à une seule espèce.",
  },
  {
    titre: "Préparer la culture suivante",
    texte:
      "La pépinière et le calendrier de plantation permettent d’anticiper les successions. Une récolte libère une place que de nouveaux plants peuvent occuper, selon la saison et les conditions de culture.",
  },
  {
    titre: "Construire la fertilité",
    texte:
      "Les matières organiques occupent une place centrale dans le document de référence. Leur apport, la couverture du sol et l’organisation des cultures doivent être adaptés aux caractéristiques du terrain et aux besoins des plantes.",
  },
  {
    titre: "Passer de la petite à la grande surface",
    texte:
      "Sur une petite ferme, le travail peut rester largement manuel. Le document présente aussi une adaptation à de plus grandes surfaces, avec des espacements et une organisation compatibles avec la mécanisation. Le changement d’échelle demande de revoir les circulations, la récolte et la logistique, sans perdre la logique des associations culturales.",
  },
];

const PRODUITS = [
  {
    titre: "ECOSORB® et la gestion de l’eau",
    texte:
      "L’usage étudié porte sur la rétention d’une partie de l’eau dans la zone traitée et sur sa disponibilité pour les cultures. Le dosage, la localisation et la profondeur d’incorporation doivent être définis avec le service technique, en tenant compte du sol, de l’enracinement et de l’irrigation.",
  },
  {
    titre: "ECOFERT® et la nutrition des cultures",
    texte:
      "ECOFERT peut être intégré à un programme de nutrition construit à partir des besoins de la culture. Son emploi doit être raisonné avec les pratiques de fertilisation déjà en place, et non ajouté automatiquement à chaque itinéraire.",
  },
  {
    titre: "Une place pour EVERGREEN selon le projet",
    texte:
      "EVERGREEN appartient à notre gamme de solutions de rétention d’eau. Il pourra être étudié dans les projets auxquels sa formulation et son mode d’application conviennent.",
  },
];

const ETAPES = [
  {
    titre: "Partir du terrain",
    texte:
      "La première étape consiste à examiner le sol, les ressources en eau, le climat et l’accès au foncier. On précise ensuite les productions recherchées et les compétences disponibles. Une petite ferme périurbaine et une exploitation mécanisée ne demandent pas la même organisation.",
  },
  {
    titre: "Dessiner une exploitation praticable",
    texte:
      "L’implantation des planches, la pépinière, les circulations et les espaces de préparation des récoltes doivent faciliter le travail quotidien. La gestion de l’eau et les apports organiques se préparent à cette échelle, en lien avec le calendrier cultural.",
  },
  {
    titre: "Former et tester",
    texte:
      "Une première surface permet de vérifier les choix de cultures et les modalités d’application des produits. Elle sert aussi à transmettre les gestes, relever les difficultés et ajuster l’organisation avant d’étendre le dispositif.",
  },
  {
    titre: "Préparer les ventes",
    texte:
      "Le calendrier de récolte doit rencontrer une demande réelle. La vente directe, un grossiste local ou la restauration collective ne supposent pas les mêmes volumes ni les mêmes exigences logistiques. Le projet économique doit intégrer ces contraintes dès le départ.",
  },
];

const QUESTIONS = [
  {
    q: "Faut-il disposer d’une grande surface ?",
    r: "La French Method est particulièrement associée au maraîchage sur petite surface. Le document de référence décrit aussi une adaptation à de grandes surfaces. Dans les deux cas, la faisabilité dépend du terrain, du travail disponible et des débouchés.",
  },
  {
    q: "Les produits remplacent-ils la méthode ?",
    r: "Ils interviennent sur des besoins précis, notamment la gestion de l’eau et la nutrition. Leur place se décide dans l’ensemble de l’itinéraire cultural, avec le service technique et les responsables du projet.",
  },
  {
    q: "Les revenus sont-ils garantis ?",
    r: "Les revenus dépendent des cultures, du climat, des charges, du temps de travail et des ventes. Les chiffres cités autour de la French Method doivent être lus avec leurs hypothèses et leur contexte : ils ne constituent pas une garantie de revenu pour une nouvelle exploitation.",
  },
];

export default function FermesIdeales() {
  return (
    <>
    <header className="fi-topbar">
      <a className="fi-brand" href="/fr/">
        <Image src="/images/logo-icon-small.png" alt="" width={28} height={28} />
        <span>
          GREEN <b>SOLUTIONS</b>
        </span>
      </a>
      <nav className="fi-topbar-liens" aria-label="Pages du site">
        <a href="/fr/">Accueil</a>
        <a href="/fr/#contact">Contact</a>
      </nav>
    </header>

    <main className="fi">
      <section className="fi-hero">
        <div className="fi-wrap fi-hero-grid">
          <div>
            <p className="eyebrow">Notre partenaire</p>
            <h1 className="fi-title">Notre partenaire et les fermes idéales</h1>
            <p className="fi-lede">
              Transmettre le savoir-faire maraîcher, appliquer nos produits au terrain et concevoir des
              fermes adaptées à leur territoire.
            </p>
            <p className="fi-meta">Christian Carnavalet · Institut Moreau-Daverne · French Method</p>
            <ul className="fi-chips">
              {SOMMAIRE.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <figure className="fi-portrait">
            <Image
              src="/images/fermes-ideales/portrait-carnavalet.webp"
              alt="Christian Carnavalet, souriant, en plan rapproché devant un fond de verdure"
              width={800}
              height={1000}
              sizes="(max-width: 860px) 100vw, 45vw"
              priority
            />
            <figcaption className="fi-legende">
              Christian Carnavalet.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fi-video-band" aria-label="Vidéo de présentation">
        <div className="fi-wrap">
          <p className="eyebrow">En vidéo</p>
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
            Votre navigateur ne lit pas cette vidéo.
          </video>        </div>
      </section>

      <section id="partenaire" className="fi-section">
        <div className="fi-wrap">
          <figure className="fi-banniere">
            <Image
              src="/images/fermes-ideales/equipe-ecole.webp"
              alt="Michel-Paul Correa et Christian Carnavalet devant l’entrée de l’École de maraîchage urbain"
              width={1024}
              height={572}
              sizes="(max-width: 860px) 100vw, 1180px"
            />
            <figcaption className="fi-legende">
              Michel-Paul Correa et Christian Carnavalet, devant l’École de maraîchage urbain. Photo : Gabriel Bonnat.
            </figcaption>
          </figure>
        </div>
        <div className="fi-wrap fi-split">
          <div>
            <p className="eyebrow">Notre partenaire</p>
            <h2 className="fi-h2">Un partenaire de terrain</h2>
            <p className="fi-texte">
              Green Solutions s’associe à Christian Carnavalet pour rapprocher les technologies agricoles de leur
              usage quotidien. Son école de maraîchage urbain, à Cannes-La Bocca, offre un cadre concret : des
              parcelles cultivées, des stagiaires en formation et un accompagnement à l’installation de petites
              fermes.
            </p>
          </div>
          <div>
            <h3 className="fi-h3">Christian Carnavalet</h3>
            <p className="fi-texte">
              Agronome, paysagiste conseil et agriculteur, Christian Carnavalet a obtenu en 1991 le titre de
              « Meilleur Ouvrier de France » en Art des Jardins.
            </p>
            <p className="fi-texte">
              Il préside l’agence 3C Agro Conseil, spécialisée dans l’agriculture biologique, la biologie des sols et
              la fertilisation organique. Il préside aussi l’Institut Moreau-Daverne et la coopérative « Les Petites
              Fermes d’Azur ». Il est également maraîcher, sous la forme de la SAS « Les Fermiers Bio Associés ».
            </p>
          </div>
        </div>
        <div className="fi-wrap">
          <div className="fi-livres-bloc">
            <h3 className="fi-h3">Ses ouvrages</h3>
            <p className="fi-texte">
              Christian Carnavalet a publié plusieurs livres sur l’agriculture biologique et le maraîchage sur petite
              surface. Il a aussi publié « Biologie du sol et agriculture durable » en 2015, puis en 2e édition
              revue et augmentée en 2021.
            </p>
            <ul className="fi-livres">
              {LIVRES.map((l) => (
                <li className="fi-livre" key={l.src}>
                  <figure>
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={l.width}
                      height={l.height}
                      sizes="(max-width: 640px) 45vw, 260px"
                    />
                    <figcaption>
                      {l.titre}
                      <span className="fi-livre-detail">{l.detail}</span>
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
              <p className="eyebrow">La ferme-école</p>
              <h2 className="fi-h2">Une école de maraîchage urbain</h2>
              <p className="fi-texte">
                L’Institut Moreau-Daverne forme aux métiers du maraîchage sur petite surface, selon la French Method.
                Il est installé à Cannes-La Bocca. Ses formations sont accessibles à tout public : aucune connaissance
                agricole n’est indispensable.
              </p>
              <p className="fi-texte">
                Les parcours sont individualisés. Les stagiaires travaillent sur de petites surfaces, avec des cultures
                associées, et apprennent à diriger une petite entreprise maraîchère.
              </p>
            </div>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/plaquette-intro.webp"
                alt="Assemblage de photos : fruits rouges, légumes, fleurs comestibles et rangs de tuteurs en bambou"
                width={1156}
                height={1059}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">
                Extrait de la plaquette de l’Institut Moreau-Daverne, édition de février 2022.
              </figcaption>
            </figure>
          </div>

          <figure className="fi-banniere">
            <Image
              src="/images/fermes-ideales/plaquette-parcelles.webp"
              alt="Rangs de cultures au pied de collines, avec des personnes au travail"
              width={937}
              height={454}
              sizes="(max-width: 860px) 100vw, 1180px"
            />
            <figcaption className="fi-legende">
              Photo tirée de la plaquette de l’Institut, édition de février 2022.
            </figcaption>
          </figure>

          <div className="fi-cartes">
            {FORMATION.map((f) => (
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
                alt="Personnes réunies autour d’une table, en extérieur, dans le jardin"
                width={1013}
                height={432}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">
                Photo tirée de la plaquette de l’Institut, édition de février 2022.
              </figcaption>
            </figure>
            <div>
              <h3 className="fi-h3">Une coopérative qui accueille les stagiaires</h3>
              <p className="fi-texte">
                La formation pratique a lieu au sein de la coopérative « Les Petites Fermes d’Azur ». Elle fonctionne
                comme une entreprise classique, avec ses charges, ses recettes et sa gestion économique et sociale.
              </p>
            </div>
          </div>

          <div className="fi-split fi-split--suite">
            <div>
              <h3 className="fi-h3">Des projets pour le territoire</h3>
              <p className="fi-texte">
                L’Institut recense des espaces agricoles et travaille avec les élus locaux pour accueillir des
                installations. Il vise aussi à organiser des productions pour les repas des écoles et des
                administrations.
              </p>
              <p className="fi-legende">Partenaires cités dans la plaquette :</p>
              <ul className="fi-partenaires">
                {PARTENAIRES.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/plaquette-vue-aerienne.webp"
                alt="Vue aérienne du site de l’Institut, avec le repère « Institut »"
                width={903}
                height={616}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">
                Vue aérienne du site, extraite de la plaquette de février 2022.
              </figcaption>
            </figure>
          </div>

          <p className="fi-note">
            Les informations de cette section viennent de la plaquette de l’Institut, édition de février 2022. Selon
            cette plaquette, 29 producteurs avaient été formés, et 97 % des stagiaires ayant donné un avis se
            disaient satisfaits (depuis mai 2021).
          </p>
        </div>
      </section>

      <section id="french-method" className="fi-section">
        <div className="fi-wrap">
          <p className="eyebrow">La méthode</p>
          <h2 className="fi-h2">La French Method</h2>
          <p className="fi-texte fi-texte--large">
            Issue du maraîchage parisien du XIXe siècle, la French Method organise une production diversifiée en
            utilisant avec précision l’espace disponible et le temps entre deux récoltes. Christian Carnavalet en
            transmet les principes à l’Institut Moreau-Daverne.
          </p>
          <figure className="fi-banniere">
            <Image
              src="/images/fermes-ideales/ia-serres-banniere.webp"
              alt="Serre lumineuse avec des plants en caisses de bois"
              width={1600}
              height={900}
              sizes="(max-width: 860px) 100vw, 1180px"
            />
            <figcaption className="fi-legende">Image générée par IA, à titre d’illustration.</figcaption>
          </figure>
          <div className="fi-cartes">
            {METHODE.map((m) => (
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
          <p className="eyebrow">Nos produits</p>
          <h2 className="fi-h2">Nos produits au terrain</h2>
          <p className="fi-texte fi-texte--large">
            Notre partenariat avec Christian Carnavalet relie la connaissance des cultures à l’application des
            produits Green Solutions. L’Institut Moreau-Daverne figure sur notre site parmi les essais pilotes en
            maraîchage avec ECOSORB® et ECOFERT®.
          </p>
          <div className="fi-cartes">
            {PRODUITS.map((p) => (
              <article className="fi-carte" key={p.titre}>
                <h3 className="fi-h3">{p.titre}</h3>
                <p className="fi-texte">{p.texte}</p>
              </article>
            ))}
          </div>
          <div className="fi-split fi-split--suite">
            <div>
              <h3 className="fi-h3">Observer avant de généraliser</h3>
              <p className="fi-texte">
                L’eau apportée, le rendement commercialisable, la qualité et le temps de travail permettent
                d’apprécier l’intérêt d’un traitement. Les comparaisons doivent porter sur des cultures et des
                conditions comparables, avec une zone témoin. Les résultats seront présentés avec leur contexte, leur
                date et leur protocole lorsqu’ils seront disponibles.
              </p>
              <p className="fi-texte">
                L’utilisation des produits s’inscrit dans une méthode de culture plus large. Elle ne dispense ni de
                préparer le sol ni d’organiser les rotations, les semis et les récoltes.
              </p>
            </div>
            <div>
              <figure className="fi-portrait-ia">
                <Image
                  src="/images/fermes-ideales/ia-champ-tomates.webp"
                  alt="Rangs de tomates et de haricots tenus par des tuteurs en bambou, sous un ciel bleu"
                  width={800}
                  height={1000}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
                <figcaption className="fi-legende">Image générée par IA, à titre d’illustration.</figcaption>
              </figure>
              <div className="fi-actions">
              <a href="/fr#contact" className="btn-3d btn-3d-light fi-btn">
                Échanger avec notre service technique
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="concevoir" className="fi-section">
        <div className="fi-wrap">
          <p className="eyebrow">Concevoir</p>
          <h2 className="fi-h2">Concevoir des fermes idéales</h2>
          <p className="fi-texte fi-texte--large">
            Une ferme idéale répond à son territoire. Elle tient compte de l’eau disponible, de la terre, des
            personnes qui y travaillent et des clients auxquels elle vendra. Notre ambition avec Christian
            Carnavalet est de rapprocher ces éléments dès la conception du projet.
          </p>
          <div className="fi-split">
            <ol className="fi-etapes">
              {ETAPES.map((e) => (
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
                alt="Serre blanche et parcelles cultivées de la ferme-école à Cannes"
                width={900}
                height={900}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">
                Les cultures et les serres de la ferme-école à Cannes. Photo : Olivia Chaber.
              </figcaption>
            </figure>
          </div>
          <p className="fi-note">
            Ces vues documentent le lieu, ses productions et son organisation. Elles ne sont pas des photographies
            avant/après et ne constituent pas des preuves de performance des produits Green Solutions. Photos : Olivia
            Chaber, utilisées avec son autorisation.
          </p>
        </div>
      </section>

      <section id="galerie" className="fi-section">
        <div className="fi-wrap">
          <p className="eyebrow">Galerie</p>
          <h2 className="fi-h2">Le potager, en images</h2>
          <div className="fi-galerie">
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/legumes-caisse.webp"
                alt="Caisse en bois pleine de légumes : carottes, aubergines, oignons et betteraves"
                width={900}
                height={900}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">Photos d’illustration</figcaption>
            </figure>
            <figure className="fi-carre">
              <Image
                src="/images/fermes-ideales/carottes-potager.webp"
                alt="Mains gantées qui récoltent des carottes dans un bac de potager"
                width={900}
                height={900}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <figcaption className="fi-legende">Photos d’illustration</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="questions" className="fi-section fi-section--alt">
        <div className="fi-wrap">
          <p className="eyebrow">Questions</p>
          <h2 className="fi-h2">Comprendre et préparer son projet</h2>
          <figure className="fi-carre fi-carre--petit">
            <Image
              src="/images/fermes-ideales/ia-salade-semis.webp"
              alt="Jeune plant de laitue couvert de gouttes de rosée, dans une terre sombre"
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 440px"
            />
            <figcaption className="fi-legende">Image générée par IA, à titre d’illustration.</figcaption>
          </figure>
          <div className="fi-cartes">
            {QUESTIONS.map((x) => (
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
          <p className="eyebrow">Parlons de votre ferme</p>
          <h2 className="fi-h2">Vous préparez une installation, un agrandissement ou une formation ?</h2>
          <p className="fi-texte fi-texte--large">
            Indiquez-nous le pays, la surface envisagée, les cultures et les ressources en eau. Nous pourrons
            organiser un premier échange autour des conditions concrètes de votre projet.
          </p>
          <div className="fi-actions">
            <a href={RENDEZ_VOUS} className="fi-rdv">
              Prendre rendez-vous
              <span aria-hidden="true">→</span>
            </a>
            <a href="/fr#contact" className="btn-3d btn-3d-light fi-btn">
              Présenter mon projet de ferme
            </a>
          </div>
          <p className="fi-note">Ou écrivez-nous directement à contact@green-solutions-group.com.</p>
        </div>
      </section>
    </main>

    <footer className="fi-footer">
      <p>Green Solutions · Agriculture écologiquement intensive</p>
      <nav className="fi-footer-liens" aria-label="Informations légales">
        <a href="/fr/mentions-legales">Mentions légales</a>
        <a href="/fr/confidentialite">Confidentialité</a>
        <a href="/fr/">Retour à l’accueil</a>
      </nav>
    </footer>
    </>
  );
}
