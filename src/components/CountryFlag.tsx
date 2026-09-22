import type { ReactNode } from "react";

const STAR = "M12 2.5 l2.35 6.9 h7.25 l-5.87 4.27 2.24 6.93 -5.97 -4.34 -5.97 4.34 2.24 -6.93 -5.87 -4.27 h7.25 z";

function Star({ fill }: { fill: string }) {
  return <path d={STAR} fill={fill} transform="scale(0.62) translate(-12 -12.7)" />;
}

const FLAGS: Record<string, (id: string) => ReactNode> = {
  "cote-divoire": () => (
    <>
      <rect width="10" height="20" fill="#F77F00" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#009E60" />
    </>
  ),
  cameroun: () => (
    <>
      <rect width="10" height="20" fill="#007A5E" />
      <rect x="10" width="10" height="20" fill="#CE1126" />
      <rect x="20" width="10" height="20" fill="#FCD116" />
      <g transform="translate(15 10) scale(0.45)">
        <Star fill="#FCD116" />
      </g>
    </>
  ),
  ghana: () => (
    <>
      <rect width="30" height="6.67" fill="#CE1126" />
      <rect y="6.67" width="30" height="6.67" fill="#FCD116" />
      <rect y="13.33" width="30" height="6.67" fill="#006B3F" />
      <g transform="translate(15 10) scale(0.55)">
        <Star fill="#000" />
      </g>
    </>
  ),
  "guinee-conakry": () => (
    <>
      <rect width="10" height="20" fill="#CE1126" />
      <rect x="10" width="10" height="20" fill="#FCD116" />
      <rect x="20" width="10" height="20" fill="#009460" />
    </>
  ),
  senegal: () => (
    <>
      <rect width="10" height="20" fill="#00853F" />
      <rect x="10" width="10" height="20" fill="#FDEF42" />
      <rect x="20" width="10" height="20" fill="#E31B23" />
      <g transform="translate(15 10) scale(0.8)">
        <Star fill="#00853F" />
      </g>
    </>
  ),
  tunisie: (id) => (
    <>
      <mask id={`${id}-crescent`}>
        <rect width="30" height="20" fill="#000" />
        <circle cx="14.4" cy="10" r="4.6" fill="#fff" />
        <circle cx="16.3" cy="10" r="3.7" fill="#000" />
      </mask>
      <rect width="30" height="20" fill="#E70013" />
      <circle cx="15" cy="10" r="6.2" fill="#fff" />
      <rect width="30" height="20" fill="#E70013" mask={`url(#${id}-crescent)`} />
      <g transform="translate(17.4 10) scale(0.45)">
        <Star fill="#E70013" />
      </g>
    </>
  ),
  "soudan-sud": () => (
    <>
      <rect width="30" height="6" fill="#000" />
      <rect y="6" width="30" height="1" fill="#fff" />
      <rect y="7" width="30" height="6" fill="#E5002B" />
      <rect y="13" width="30" height="1" fill="#fff" />
      <rect y="14" width="30" height="6" fill="#078930" />
      <polygon points="0,0 0,20 13.5,10" fill="#1849A9" />
      <path
        d="M4.8 6.55 5.55 8.75 7.9 8.75 6 10.13 6.73 12.35 4.8 10.98 2.87 12.35 3.6 10.13 1.7 8.75 4.05 8.75Z"
        fill="#FCDD09"
      />
    </>
  ),
  emirats: () => (
    <>
      <rect width="30" height="6.67" fill="#00732F" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="7.5" height="20" fill="#CE1126" />
    </>
  ),
  mexique: () => (
    <>
      <rect width="10" height="20" fill="#006847" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
      {/* L'aigle des armoiries, réduit à un médaillon : sans lui, le drapeau
          mexicain ne se distingue pas du drapeau italien. */}
      <circle cx="15" cy="10" r="3.2" fill="#8C5A2B" />
      <circle cx="15" cy="10" r="3.2" fill="none" stroke="#006847" strokeWidth="0.8" />
    </>
  ),
  "etats-unis": () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 3.077} width="30" height="1.538" fill="#B22234" />
      ))}
      <rect width="12" height="10.77" fill="#3C3B6E" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.2 + col * 2.4 + (row % 2) * 1.2}
            cy={1.35 + row * 2.7}
            r="0.55"
            fill="#fff"
          />
        )),
      )}
    </>
  ),
  turquie: () => (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="5" fill="#fff" />
      <circle cx="12.5" cy="10" r="4" fill="#E30A17" />
      <g transform="translate(17.6 10) scale(0.42)">
        <Star fill="#fff" />
      </g>
    </>
  ),
  indonesie: () => (
    <>
      <rect width="30" height="10" fill="#CE1126" />
      <rect y="10" width="30" height="10" fill="#fff" />
    </>
  ),
  catalunya: () => (
    <>
      <rect width="30" height="20" fill="#FCDD09" />
      {[1, 3, 5, 7].map((i) => (
        <rect key={i} y={(i * 20) / 9} width="30" height={20 / 9} fill="#DA121A" />
      ))}
    </>
  ),
  espagne: () => (
    <>
      <rect width="30" height="5" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
      <rect y="15" width="30" height="5" fill="#AA151B" />
    </>
  ),
  grece: () => (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect key={i} y={(i * 20) / 9} width="30" height={20 / 9} fill={i % 2 === 0 ? "#0D5EAF" : "#fff"} />
      ))}
      <rect width="11.11" height="11.11" fill="#0D5EAF" />
      <rect x="4.44" width="2.22" height="11.11" fill="#fff" />
      <rect y="4.44" width="11.11" height="2.22" fill="#fff" />
    </>
  ),
  chine: () => (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      <g transform="translate(5 5) scale(0.42)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(10 2.2) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(12 4.4) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(12 7.2) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(10 9.4) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
    </>
  ),
  maroc: () => (
    <>
      <rect width="30" height="20" fill="#C1272D" />
      <path
        d="M15 5.2 L17.85 14 L10.35 8.55 L19.65 8.55 L12.15 14 Z"
        fill="none"
        stroke="#006233"
        strokeWidth="0.75"
        strokeLinejoin="miter"
      />
    </>
  ),
  algerie: (id) => (
    <>
      <mask id={`${id}-crescent`}>
        <rect width="30" height="20" fill="#000" />
        <circle cx="14.6" cy="10" r="4.7" fill="#fff" />
        <circle cx="16.5" cy="10" r="3.9" fill="#000" />
      </mask>
      <rect width="15" height="20" fill="#006233" />
      <rect x="15" width="15" height="20" fill="#FFF" />
      <rect width="30" height="20" fill="#D21034" mask={`url(#${id}-crescent)`} />
      <g transform="translate(18.4 10) rotate(-18) scale(0.5)">
        <Star fill="#D21034" />
      </g>
    </>
  ),
  gabon: () => (
    <>
      <rect width="30" height="6.67" fill="#009E60" />
      <rect y="6.67" width="30" height="6.67" fill="#FCD116" />
      <rect y="13.33" width="30" height="6.67" fill="#3A75C4" />
    </>
  ),
  haiti: () => (
    <>
      <rect width="30" height="10" fill="#003DA5" />
      <rect y="10" width="30" height="10" fill="#CE1126" />
    </>
  ),
  chili: () => (
    <>
      <rect x="10" width="20" height="10" fill="#FFF" />
      <rect y="10" width="30" height="10" fill="#D52B1E" />
      <rect width="10" height="10" fill="#0039A6" />
      <g transform="translate(5 5) scale(0.4)">
        <Star fill="#FFF" />
      </g>
    </>
  ),
  argentine: () => (
    <>
      <rect width="30" height="6.67" fill="#74ACDF" />
      <rect y="6.67" width="30" height="6.67" fill="#FFF" />
      <rect y="13.33" width="30" height="6.67" fill="#74ACDF" />
      <g transform="translate(15 10)">
        {Array.from({ length: 16 }, (_, i) => (
          <rect
            key={i}
            x="-0.28"
            y="-3.1"
            width="0.56"
            height="1.5"
            fill="#F6B40E"
            transform={`rotate(${i * 22.5})`}
          />
        ))}
        <circle r="1.75" fill="#F6B40E" />
        <circle r="1.3" fill="#FCDD09" />
      </g>
    </>
  ),
  france: () => (
    <>
      <rect width="10" height="20" fill="#002654" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </>
  ),
  italie: () => (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </>
  ),
  allemagne: () => (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </>
  ),
  pologne: () => (
    <>
      <rect width="30" height="10" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#DC143C" />
    </>
  ),
  croatie: () => (
    <>
      <rect width="30" height="6.67" fill="#FF0000" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#171796" />
      {/* Le damier, réduit à ce qui se lit à cette taille : cinq carreaux
          rouges en quinconce sur un écu blanc. */}
      <g transform="translate(12.4 5.6)">
        <rect width="5.2" height="6" fill="#fff" stroke="#171796" strokeWidth="0.3" />
        {[
          [0, 0],
          [2.6, 0],
          [1.3, 2],
          [0, 4],
          [2.6, 4],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="1.3" height="2" fill="#FF0000" />
        ))}
      </g>
    </>
  ),
  madagascar: () => (
    <>
      <rect width="10" height="20" fill="#FFF" />
      <rect x="10" width="20" height="10" fill="#FC3D32" />
      <rect x="10" y="10" width="20" height="10" fill="#007E3A" />
    </>
  ),
  portugal: () => (
    <>
      <rect width="30" height="20" fill="#DA291C" />
      <rect width="12" height="20" fill="#046A38" />
      <circle cx="12" cy="10" r="3.6" fill="#FFE900" />
      <circle cx="12" cy="10" r="2.5" fill="#DA291C" />
    </>
  ),
};

const ALIASES: Record<string, string> = {
  usa: "etats-unis",
  "etats-unis-amerique": "etats-unis",
};

/**
 * Drapeaux servis en fichier plutôt que redessinés ici.
 *
 * Les tracés ci-dessus sont des approximations. Pour trois bandes et une
 * étoile, cela suffit et personne n'y perd. Ces sept-là ne se laissent pas
 * approcher, parce qu'ils portent une écriture ou un emblème :
 *
 *   - L'Arabie saoudite porte la chahada, une profession de foi. La version
 *     dessinée à la main la rendait par deux rangées de barres à dents — des
 *     peignes, pas une écriture. Imiter grossièrement un texte sacré n'est pas
 *     une imprécision graphique, et un lecteur saoudien le lirait ainsi. Une
 *     calligraphie ne se redessine pas de mémoire : il faut le vrai tracé.
 *   - La Jordanie porte une étoile à sept branches, une par verset de la
 *     Fatiha. Elle était dessinée à cinq.
 *   - L'Égypte porte l'aigle de Saladin, rendu par une ellipse et trois
 *     triangles ; Oman le khanjar et les sabres, purement absents.
 *   - L'Afrique du Sud tient sur un Y couché à six couleurs et deux liserés.
 *     La version dessinée n'avait ni la forme ni les liserés.
 *   - Le Koweït a un trapèze au guindant, qui était un triangle ; le Congo,
 *     une bande jaune trop large sur une diagonale mal posée.
 *
 * Les fichiers sont rendus depuis les tracés vectoriels officiels de Wikimedia
 * Commons — la source dont les couvertures de dossier tirent déjà leurs
 * drapeaux, pour cette même raison. Rendus à 156px, soit trois fois la plus
 * grande taille d'affichage : les sept pèsent 8 Ko en tout, là où les mêmes
 * vecteurs en pesaient 61 une fois compressés, le seul khanjar omanais en
 * portant 42 de détails qu'une vignette de 52px ne montrera jamais.
 */
const OFFICIELS = new Set([
  "afrique-du-sud",
  "arabie-saoudite",
  "congo",
  "egypte",
  "jordanie",
  "koweit",
  "oman",
]);

export default function CountryFlag({ id }: { id: string }) {
  const cle = ALIASES[id] ?? id;

  if (OFFICIELS.has(cle)) {
    return (
      <div className="flag-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="flag-square-svg"
          src={`/images/flags/${cle}.png`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  const draw = FLAGS[cle];
  if (!draw) return null;

  return (
    <div className="flag-square">
      <svg
        viewBox="0 0 30 20"
        className="flag-square-svg"
        role="img"
        aria-hidden="true"
      >
        {draw(id)}
      </svg>
    </div>
  );
}
