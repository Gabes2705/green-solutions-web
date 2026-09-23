import type { Traduction } from "./types";

/** Les essais de terrain en catalan. */
export const ca: Traduction = {
  habillage: {
    retour: "← Tots els assajos",
    tousLesEssais: "Veure tots els assajos →",
    lireRapport: "Llegir l'informe complet (PDF)",
    resultatsEyebrow: "Resultats",
    resultatsTitre: "El que l'assaig ha mesurat",
    imagesEyebrow: "En imatges",
    imagesTitre: "Abans i després: la diferència mesurada",
    mecaniqueEyebrow: "Com funciona",
    mecaniqueTitre: "L'aigua es queda on la planta la necessita",
    mecaniqueTexte:
      "Barrejat amb el sòl a prop de les arrels, l'hidroretenidor s'omple d'aigua a cada reg o a cada pluja, en lloc de deixar-la evaporar o filtrar-se en profunditat. Després la retorna a la planta, dia rere dia. Es rega menys sovint i la planta no passa set entre dos regs.",
    ficheEyebrow: "Fitxa de l'assaig",
    ficheTitre: "On, quan i qui",
    culture: "Conreu",
    lieu: "Lloc",
    periode: "Període",
    conduitPar: "Fet per",
    produits: "Productes",
    methodeEyebrow: "Mètode",
    methodeTitre: "Com es va fer l'assaig",
    observationsEyebrow: "Observacions",
    observationsTitre: "El que cal retenir",
    autresEyebrow: "Altres assajos",
    autresTitre: "Els mateixos productes, en altres conreus",
    hubEyebrow: "Assajos de camp",
    hubTitre: "Menys aigua, més collita: els resultats mesurats",
    hubChapeau:
      "Universitats, centres de recerca i explotacions han provat l'hidroretenidor EVERGREEN, sol o amb el fertilitzant ECOFERT, en set conreus i en sis països. Cada pàgina recull les xifres de l'informe i enllaça amb el document complet.",
    hubPrincipe:
      "El principi és el mateix a tot arreu: l'hidroretenidor guarda l'aigua a prop de les arrels i la retorna a la planta a poc a poc. Segons el conreu i el clima, els assajos mesuren fins a un 82 % menys d'aigua i fins a un 93 % més de collita.",
    hubTermines: "Els assajos acabats",
    hubEnCours: "Els assajos en curs amb universitats",
    hubGuides: "Les nostres guies",
    hubCreditPhoto: "Foto de la capçalera:",
    guideProduit: "Veure la fitxa del producte",
    guidePreuvesEyebrow: "Proves de camp",
    guidePreuvesTitre: "Els assajos que ho han mesurat",
    guideResultatsEyebrow: "Resultats de camp",
    guideResultatsTitre: "El que han mesurat els assajos",
    guideComparaisonEyebrow: "Comparació",
    guideFaqEyebrow: "Preguntes freqüents",
    guideFaqTitre: "El que ens pregunten més sovint",
    guideOui: "Sí",
    guideNon: "No",
    guideCritere: "Criteri",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Palmeres datileres als Emirats: un 82 % menys d'aigua de reg",
      description:
        "Assaig EVERGREEN fet per l'ICBA a Dubai amb 27 palmeres datileres en sòl sorrenc: un 82 % d'aigua de reg estalviada i un 20 % més de dàtils.",
      culture: "Palmera datilera",
      lieu: "Estació de recerca de l'ICBA, Dubai",
      pays: "Emirats Àrabs Units",
      periode: "Campanya 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (hidroretenidor)",
      chapeau:
        "Als Emirats hi cauen uns 50 mm de pluja l'any i gairebé tota l'agricultura depèn del reg. L'ICBA va provar EVERGREEN a l'aire lliure, en sòl sorrenc i salí, en palmeres datileres d'uns 8 anys.",
      resultats: [
        "d'aigua de reg en tota la campanya",
        "d'aigua en els darrers 7 mesos, sense estrès per als arbres",
        "més dàtils amb 300 g per arbre",
        "freqüència de reg dels arbres tractats",
      ],
      protocole: [
        "27 palmeres datileres plantades a 8 × 8 m, a l'estació de recerca de l'ICBA.",
        "EVERGREEN incorporat als primers 50 cm de sòl a l'inici de la campanya, amb diverses dosis per arbre (entre elles 300 g, 500 g i 1000 g).",
        "Reg controlat per sondes que mesuren la humitat del sòl en temps real.",
        "Comparació amb arbres testimoni sense EVERGREEN.",
      ],
      constats: [
        "Els arbres tractats no van mostrar cap senyal de sequera ni de dany durant la campanya.",
        "Els nutrients disponibles al sòl són clarament més alts amb EVERGREEN: l'aigua i els minerals es queden a la zona de les arrels en lloc de filtrar-se en profunditat.",
        "L'activitat biològica del sòl (respiració i biomassa microbiana) augmenta.",
        "L'ICBA confirma tots els resultats obtinguts en condicions de camp.",
      ],
      graphiques: [
        {
          titre: "Aigua de reg en la campanya (índex, testimoni = 100)",
          barres: ["Sense EVERGREEN", "Amb EVERGREEN"],
        },
        { titre: "Producció de dàtils (índex, testimoni = 100)", barres: ["Sense EVERGREEN", "300 g per arbre"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Síndries a Mèxic: un 60,5 % menys d'aigua i un 30 % més de collita",
      description:
        "Assaig EVERGREEN en 2600 plantes de síndria a Hermosillo (Sonora, Mèxic), a 45 °C: un 60,5 % d'aigua estalviada i una collita un 30 % superior.",
      culture: "Síndria (varietat Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "Mèxic",
      periode: "15 de febrer – 2 d'agost del 2023",
      conduit: "Assaig de camp de Green Solutions",
      produits: "EVERGREEN (hidroretenidor)",
      chapeau:
        "Sonora encapçala la producció de síndria a Mèxic, però la sequera hi va colpejar fort el 2023. L'assaig havia de mesurar l'aigua estalviada amb EVERGREEN en una regió molt àrida, amb dies a 45 °C de mitjana.",
      resultats: [
        "d'aigua de reg",
        "més collita que la parcel·la regada al 100 %",
        "de contingut mitjà de sucre als fruits",
        "d'EVERGREEN per planta",
      ],
      protocole: [
        "2600 plantes de síndria.",
        "Parcel·la testimoni sense EVERGREEN, regada al 100 %.",
        "Parcel·la tractada amb 5 g d'EVERGREEN per planta (2 g més que els 3 g aconsellats habitualment).",
      ],
      constats: [
        "Clima extremament calorós i sec, sobre sòl àrid.",
        "La dosi depèn del tipus de sòl (argilós, sorrenc, pedregós, calcari) i del sistema de reg (pou, degoteig, pluja).",
        "Un altre mètode possible: 15 a 20 g d'EVERGREEN per metre lineal, segons la varietat.",
      ],
      graphiques: [
        { titre: "Aigua de reg (índex, testimoni = 100)", barres: ["Sense EVERGREEN", "5 g per planta"] },
        { titre: "Collita (índex, testimoni = 100)", barres: ["Sense EVERGREEN", "5 g per planta"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Cotó a Turquia: rendiment gairebé duplicat amb estrès hídric",
      description:
        "Demostració EVERGREEN en cotó a la regió de Hatay (Turquia) el 2025: rendiment de 2,53 a 4,88 t/ha (+93 %) malgrat una greu manca d'aigua.",
      culture: "Cotó",
      lieu: "Finca Mistikoğlu Tarım, plana d'Amik, Hatay",
      pays: "Turquia",
      periode: "Campanya del 2025",
      conduit: "Green Solutions amb la cooperativa Teknik Tarım",
      produits: "EVERGREEN (hidroretenidor), injectat sota la zona de les arrels",
      chapeau:
        "La regió de Hatay pateix manca d'aigua crònica, molta calor i una xarxa de reg malmesa pel terratrèmol del 2023. El juliol del 2025 la plana d'Amik va viure una crisi d'aigua sense precedents. És allà on es va fer l'assaig.",
      resultats: [
        "de rendiment: 4,88 t/ha contra 2,53 t/ha",
        "de productivitat de l'aigua, com a mínim",
        "d'ingrés brut (3300 $ contra 1710 $)",
        "de benefici net, descomptats producte i aplicació",
      ],
      protocole: [
        "EVERGREEN injectat sota la zona de les arrels amb les eines d'injecció de Green Solutions, als cavallons preparats per a la sembra.",
        "Diverses dosis comparades: 48, 55, 58 i 62 kg/ha.",
        "Comparació amb una zona testimoni sense tractament.",
        "Reg habitual de la regió: per inundació des de canals oberts.",
      ],
      constats: [
        "El cotó tractat va mantenir més creixement i més biomassa malgrat la manca d'aigua.",
        "La diferència es veu des de les primeres setmanes, un període decisiu per al rendiment final del cotó.",
      ],
      graphiques: [
        { titre: "Rendiment en cotó (t/ha)", barres: ["Zona testimoni", "Amb EVERGREEN"] },
        { titre: "Ingrés brut (USD/ha)", barres: ["Zona testimoni", "Amb EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Blat de moro a Turquia: un 39 % menys d'aigua i un 17 % més de rendiment",
      description:
        "Demostració EVERGREEN en blat de moro a Konya (TIGEM, Turquia) el 2025: 528 mm de reg en lloc de 864 mm, i 12 060 kg/ha contra 10 300 kg/ha.",
      culture: "Blat de moro",
      lieu: "Explotació estatal TIGEM, Konya",
      pays: "Turquia",
      periode: "Maig – setembre del 2025",
      conduit: "Green Solutions i D.I.S., mesures del departament de reg de TIGEM",
      produits: "Hidroretenidor EVERGREEN, aplicat sota la línia de sembra",
      chapeau:
        "L'objectiu era senzill: produir igual, o més, amb menys aigua. L'hidroretenidor es va injectar just sota la línia de sembra, a una fondària precisa, amb màquines dissenyades per D.I.S., i després es va reduir a posta el reg de les zones tractades.",
      resultats: [
        "d'aigua: 528 mm en lloc de 864 mm",
        "de rendiment: 12 060 kg/ha contra 10 300 kg/ha",
        "productivitat de l'aigua: 22,8 kg de blat de moro per m³ contra 11,9",
        "dosi que dóna el millor resultat",
      ],
      protocole: [
        "Una zona testimoni i tres zones tractades a 39, 51 i 74 kg/ha.",
        "Aplicació els dies 14 i 15 de maig del 2025, directament sota la línia de sembra.",
        "Reg de les zones tractades reduït un 50 %, i després un 30 %, segons les fases de creixement.",
        "Collita el 16 de setembre del 2025, en sectors comparables.",
      ],
      constats: [
        "Rendiments mesurats: testimoni 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "La precisió compta: una aplicació massa superficial, massa fonda o desplaçada de la línia de sembra en redueix l'efecte.",
        "Per a l'explotació, un 39 % menys d'aigua vol dir estalviar 13 629 lires turques per hectàrea i any.",
      ],
      graphiques: [
        { titre: "Aigua de reg en 4 mesos (mm)", barres: ["Zona testimoni", "Zones tractades"] },
        {
          titre: "Rendiment en blat de moro segons la dosi (kg/ha)",
          barres: ["Testimoni", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Canya de sucre a Java: un 55 % més de collita amb EVERGREEN i ECOFERT",
      description:
        "Assaig seguit per la Universitat de Jember en canya de sucre a Java (Indonèsia): un 34 % més de tonatge amb 2,5 g per planta i un 55 % amb 5 g, amb més sucre.",
      culture: "Canya de sucre (varietat B82.0333)",
      lieu: "Jember, Java",
      pays: "Indonèsia",
      periode: "Febrer – juliol del 2024",
      conduit: "Universitat de Jember i centre indonesi de recerca de la canya de sucre",
      produits: "EVERGREEN (hidroretenidor) i fertilitzant bioestimulant ECO (ECOFERT)",
      chapeau:
        "L'assaig comparava tres parcel·les en sòl argilós: una parcel·la testimoni, una amb 2,5 g d'EVERGREEN per planta i una amb 5 g, i aquestes dues últimes rebien també el fertilitzant bioestimulant ECO.",
      resultats: [
        "de tonatge amb 5 g per planta",
        "de tonatge amb 2,5 g per planta",
        "contingut de sacarosa a la collita (5 g contra testimoni)",
        "alçada de la tija als 8 mesos, contra 111 cm del testimoni",
      ],
      protocole: [
        "Tres parcel·les de un quart d'hectàrea.",
        "EVERGREEN enterrat a prop de les arrels quan la canya té 3 mesos.",
        "Fertilitzant ECO polvoritzat a la plantació, 3 mesos després i 8 mesos després de la plantació.",
        "Dosis per hectàrea: 50 kg d'EVERGREEN i 500 ml de fertilitzant.",
      ],
      constats: [
        "Tonatge total: 6950 t per al testimoni, 9330 t amb 2,5 g per planta i 10 800 t amb 5 g per planta.",
        "Diàmetre de la tija als 8 mesos: 2,47 cm per al testimoni, 2,78 cm amb 2,5 g i 2,88 cm amb 5 g.",
        "Contingut de sacarosa: 14 per al testimoni, 16 amb 2,5 g i 18 amb 5 g.",
      ],
      graphiques: [
        { titre: "Tonatge collit (t)", barres: ["Testimoni", "2,5 g per planta", "5 g per planta"] },
        {
          titre: "Contingut de sacarosa a la collita",
          barres: ["Testimoni", "2,5 g per planta", "5 g per planta"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Patates a Sud-àfrica: un 31 % més de rendiment i un 52 % menys d'aigua",
      description:
        "Assaig EVERGREEN i ECOFERT en patata a Bloemfontein (Sud-àfrica), 2025-2026: rendiment de 12 a 15,7 t/ha i un 52 % d'aigua estalviada.",
      culture: "Patata (varietat Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Sud-àfrica",
      periode: "Setembre del 2025 – gener del 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (hidroretenidor) i ECOFERT (fertilitzant ecològic)",
      chapeau:
        "Aquest assaig pilot mesurava l'efecte conjunt d'EVERGREEN al sòl i d'ECOFERT polvoritzat sobre el rendiment i la qualitat de les patates.",
      resultats: [
        "de rendiment total",
        "en lloc de 12 t/ha",
        "d'aigua",
        "d'EVERGREEN al solc de plantació",
      ],
      protocole: [
        "Fileres de 10 m, repetides 5 vegades.",
        "Sòl llimós (Avalon) amb un 15 a 18 % d'argila; 26 667 plantes per hectàrea.",
        "Plantació manual el 22 de setembre del 2025; collita del 25 al 31 de gener del 2026.",
        "EVERGREEN posat a mà al solc de plantació; ECOFERT polvoritzat a 700 ml/ha.",
        "Reg convencional.",
      ],
      constats: [
        "Tubercles més grossos i més uniformes.",
        "Menys riscos en la producció i un ingrés més alt per al pagès.",
      ],
      graphiques: [
        { titre: "Rendiment (t/ha)", barres: ["Sense tractament", "EVERGREEN + ECOFERT"] },
        {
          titre: "Aigua de reg (índex, testimoni = 100)",
          barres: ["Sense tractament", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soja a la Xina: un 11 % més de rendiment amb un superabsorbent",
      description:
        "Assaig en blocs a l'atzar amb l'Institut de Sòls i Fertilitzants de Shandong (Xina): naixença més ràpida i rendiment de soja superior en un 11,2 a 11,4 %.",
      culture: "Soja (varietat Ludou II)",
      lieu: "Taian, província de Shandong",
      pays: "Xina",
      periode: "Juny – octubre del 2017",
      conduit: "Institut de Sòls i Fertilitzants de Shandong, amb Summit Enterprise",
      produits: "Polímer superabsorbent EVERGREEN",
      chapeau:
        "A l'estiu, quan es sembra la soja, Shandong és calorós i amb molta evaporació. L'assaig mesurava l'efecte del superabsorbent posat a la línia de sembra sobre la naixença, el vigor, el rendiment i l'ingrés.",
      resultats: [
        "de rendiment",
        "de naixença més ràpida",
        "de taxa de germinació",
        "de soja per acre",
      ],
      protocole: [
        "Blocs a l'atzar: parcel·les de 30 m², cada tractament repetit 4 vegades.",
        "La mateixa adobada a totes les parcel·les: adob compost i compost a la línia de sembra.",
        "Tres tractaments: testimoni sense superabsorbent, 1,6 kg i 2 kg de superabsorbent per parcel·la de 30 m².",
      ],
      constats: [
        "L'augment de rendiment arriba a un nivell estadísticament significatiu.",
        "Guany d'ingrés de 62,9 a 66,1 iuans per acre respecte al testimoni.",
      ],
      graphiques: [
        {
          titre: "Rendiment en soja (índex, testimoni = 100)",
          barres: ["Sense superabsorbent", "Amb superabsorbent"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Aurons vermells a ciutat — Universitat de Florida",
      texte:
        "El laboratori d'arboricultura Klein (Gainesville) prova EVERGREEN en 90 aurons vermells plantats l'abril del 2025: 30 amb el gel al clot de plantació, 30 amb el gel barrejat amb el sòl al voltant de l'arbre i 30 sense gel. Estudi de 2 anys.",
    },
    {
      titre: "Reforestació amb avets de Douglas — Universitat Estatal d'Oregon",
      texte:
        "La cooperativa de recerca VMRC prova EVERGREEN en dos indrets de reforestació amb dèficits d'aigua diferents, prop de Coquille i de Roseburg: 48 plançons amb gel i 48 sense, a cada indret. Plantació el febrer del 2025, estudi de 2 anys.",
    },
  ],
};
