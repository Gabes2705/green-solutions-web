// Données agronomiques EVERGREEN — généré depuis la matrice de dosage.
// Ne pas éditer à la main : régénérer via scripts/evergreen/gen_crops.mjs.

/** Unité dans laquelle la dose d'une culture est exprimée. */
export type DoseUnit = "g/plant" | "g/tree" | "g/m" | "g/m²";

export interface CropRule {
  family: string;
  mode: string;
  /** Dose en conditions normales, dans l'unité `unit`. */
  baseDose: number;
  /** Dose sous stress climatique élevé. */
  stressDose: number;
  unit: DoseUnit;
  note: string;
}

export const CROPS: Record<string, CropRule> = {
  "Abricot de pays (mangoustan)": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Abricots": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Actinidia (kiwi)": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 30, stressDose: 30, unit: "g/tree", note: "Dose unique" },
  "Ail": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Amandes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Ananas": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 8, stressDose: 8, unit: "g/tree", note: "Dose unique" },
  "Artichauts": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Aubergines": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Autres poires d'été": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Autres pommes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Autres prunes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Avocats": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 30, stressDose: 30, unit: "g/tree", note: "Dose unique" },
  "Bananes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Betteraves": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Betteraves potagères": { family: "Maraîchage", mode: "SD", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Bettes et cardes": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Bigarreaux": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Brèdes": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Café": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 30, stressDose: 30, unit: "g/tree", note: "Dose unique" },
  "Canne à sucre": { family: "Maraîchage", mode: "R", baseDose: 40, stressDose: 40, unit: "g/m", note: "30–50 g/m" },
  "Carottes": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Cassis et myrtilles": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 20, stressDose: 20, unit: "g/tree", note: "Dose unique" },
  "Céleris branches": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Céleris raves": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Châtaignes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Chicorées frisées, scaroles": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Chicorées rouges": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Chou chinois": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Chou hiver": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Chou rave": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Choux à choucroute": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Choux brocolis": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Choux de Bruxelles": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Choux fleurs": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Choux précoces": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Citrons, limes, combavas": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Citrouilles": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Clémentines, mandarines": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Concombres": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Cornichons": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Corossol, pomme cannelle": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Courgettes": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Cristophine": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Dattiers": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 300, stressDose: 300, unit: "g/tree", note: "Dose unique" },
  "Echalotes bulbilles": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Echalotes semis": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Endives racines": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Epinards": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Fenouil": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Fèves": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Figues": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Fraises": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Framboises": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 20, stressDose: 20, unit: "g/tree", note: "Dose unique" },
  "Gombo": { family: "Maraîchage", mode: "SD", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Goyave": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Granny Smith": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Griottes et autres cerises": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Groseilles": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 20, stressDose: 20, unit: "g/tree", note: "Dose unique" },
  "Haricots  (grain)": { family: "Maraîchage", mode: "SD / Poquet", baseDose: 5, stressDose: 5, unit: "g/m", note: "Classes D/E" },
  "Haricots secs": { family: "Maraîchage", mode: "SD / Poquet", baseDose: 5, stressDose: 5, unit: "g/m", note: "Classes D/E" },
  "Haricots verts (et beurre)": { family: "Maraîchage", mode: "SD / Poquet", baseDose: 5, stressDose: 5, unit: "g/m", note: "Classes D/E" },
  "Igname": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Jaxatu": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Kiwano": { family: "Maraîchage", mode: "SD", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Laitues": { family: "Maraîchage", mode: "R", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Letchi, longani, ramboutan": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Mâche": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Maïs": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Maïs doux": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Mangue": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Manioc": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Maracuja, fruits de la passion, grenadille": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Melons": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Mil": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Mirabelles": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Navets potagers": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Nectarines et brugnons": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Noisettes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Noix": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Noix de coco": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Oignons blancs bulbilles": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Oignons blancs semis": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Oignons de couleur bulbilles": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Oignons de couleur semis": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Olives": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Orange, tangor": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Oseille": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Oseille de Guinée (bissap)": { family: "Maraîchage", mode: "SD", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Pamplemousse": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Panais": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Papayes": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Pastèques": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Patates douces": { family: "Maraîchage", mode: "SD", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Pêches": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Pêches Pavies": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Persil": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Petits pois (grain)": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Piments": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Poireaux": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Poires d'automne": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Poires d'hiver": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Poires guyot": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Poires Williams": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Poivrons et piments": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Pomme de terre": { family: "Maraîchage", mode: "R", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Pommes à cidre": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Pommes golden": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Potirons, courges": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
  "Prunes à pruneaux": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Quetsches": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Radis": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Radis noir": { family: "Maraîchage", mode: "SD", baseDose: 1, stressDose: 1, unit: "g/plant", note: "Classe A" },
  "Raisins de cuve": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 30, stressDose: 30, unit: "g/tree", note: "Dose unique" },
  "Raisins de table": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 30, stressDose: 30, unit: "g/tree", note: "Dose unique" },
  "Reines Claude": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Roquette": { family: "Maraîchage", mode: "SD", baseDose: 5, stressDose: 7, unit: "g/m", note: "Classes D/E" },
  "Royal gala": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 100, stressDose: 100, unit: "g/tree", note: "Dose unique" },
  "Thé": { family: "Fruitier", mode: "Plantation/carottage", baseDose: 20, stressDose: 20, unit: "g/tree", note: "Dose unique" },
  "Tomates": { family: "Maraîchage", mode: "R", baseDose: 2, stressDose: 3, unit: "g/plant", note: "Classes B/C" },
};

/** Densités de plantation observées (plants ou arbres par hectare). */
export const DENSITIES: Record<string, number> = {
  "Abricots": 400,
  "Actinidia (kiwi)": 800,
  "Ail": 300000,
  "Amandes": 300,
  "Ananas": 55000,
  "Artichauts": 10000,
  "Aubergines": 20000,
  "Avocats": 400,
  "Bananes": 1800,
  "Betteraves": 100000,
  "Betteraves potagères": 100000,
  "Café": 3000,
  "Tomates": 25000,
};

/** Écartements entre rangs observés, en mètres. */
export const ROW_SPACINGS: Record<string, number> = {
  "Brèdes": 0.25,
  "Canne à sucre": 1.5,
  "Carottes": 0.3,
  "Echalotes semis": 0.25,
  "Epinards": 0.25,
  "Haricots  (grain)": 0.5,
  "Haricots secs": 0.5,
  "Haricots verts (et beurre)": 0.5,
  "Mâche": 0.2,
  "Maïs": 0.75,
  "Maïs doux": 0.75,
  "Mil": 0.75,
  "Oignons blancs semis": 0.25,
  "Oignons de couleur semis": 0.25,
  "Oseille": 0.3,
  "Panais": 0.3,
  "Persil": 0.3,
  "Petits pois (grain)": 0.5,
  "Radis": 0.2,
  "Roquette": 0.2,
};

/** Fourchettes de gain de production consolidées, en pourcentage. */
export const YIELD_RANGES: Record<string, [number, number]> = {
  "Aubergines": [20, 35],
  "Avocats": [15, 25],
  "Bananes": [15, 30],
  "Canne à sucre": [10, 20],
  "Tomates": [30, 50],
};

/**
 * Grandes céréales et graminées : le gain de production n'y est pas estimable
 * sans étude de terrain, la réponse dépendant trop de l'itinéraire technique.
 */
export const GRAIN_KEYWORDS: readonly string[] = [
  "blé",
  "ble",
  "riz",
  "sorgho",
  "seigle",
  "orge",
  "avoine",
  "millet",
  "mil",
  "triticale",
  "épeautre",
  "epeautre",
  "maïs grain",
  "mais grain"
];

export const CROP_NAMES: readonly string[] = Object.keys(CROPS).sort((a, b) =>
  a.localeCompare(b, "fr"),
);
