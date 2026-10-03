/**
 * Les mots de la section « Cas d'application : algues vertes dans les lacs
 * d'un parcours de golf », sur la page Water Vital®.
 *
 * Elle reprend, sans rien y ajouter, le rapport d'application Green Solutions
 * (édition anglaise, avec son évaluation technique complémentaire) : le cas
 * sud-coréen, les observations des jours 2, 6 et 8, puis ce que le rapport ne
 * démontre pas encore et le plan pour mesurer proprement un nouvel étang.
 * Les affirmations restent attribuées « au rapport d'origine » : l'appareil et
 * le nettoyage à la pompe n'y sont pas mesurés séparément, et la page le dit.
 *
 * L'anglais est la source ; le français, l'espagnol, etc. en sont la
 * traduction. Les noms propres, de marque ou d'appareil (Gapyeong Benest,
 * Jack Nicklaus, Turbu-Flow, SAT « Softer Water Conditioner », Water
 * Restorer) ne se traduisent pas.
 */

export type EtapeAlgues = { label: string; text: string; alt: string };
export type PointAlgues = { h: string; p: string };

export type TextesAlgues = {
  eyebrow: string;
  title: string;
  lede: string;
  greenAlt: string;
  greenCaption: string;
  clubTitle: string;
  clubText: string;
  problemTitle: string;
  problemIntro: string;
  problems: string[];
  problemOutro: string;
  controlsTitle: string;
  controls: string[];
  solutionTitle: string;
  solutionText1: string;
  solutionText2: string;
  stagesTitle: string;
  stages: EtapeAlgues[];
  resultsTitle: string;
  resultsText: string;
  lakeAlt: string;
  lakeCaption: string;
  turfTitle: string;
  turfText: string;
  note1: string;
  note2: string;
  photoCredit: string;
  assessTitle: string;
  assessSubtitle: string;
  assessIntro: string;
  assess: PointAlgues[];
  sourcesTitle: string;
  planTitle: string;
  planIntro: string;
  plan: PointAlgues[];
  planHead: [string, string, string];
  planRows: [string, string, string][];
  planOutro1: string;
  planOutro2: string;
};

export const ALGUES: Record<string, TextesAlgues> = {
  fr: {
    eyebrow: "Cas d'application · Corée du Sud",
    title: "Algues vertes dans les lacs d'un parcours de golf",
    lede: "Rapport d'application Green Solutions : un parcours de golf sud-coréen, des lacs envahis par les algues et une observation jour après jour.",
    greenAlt: "Un green de golf avec son drapeau jaune, au bord d'un étang",
    greenCaption: "Illustration : un green de golf.",
    clubTitle: "Le golf",
    clubText:
      "Ouvert en 2000, le Gapyeong Benest Golf Club, classé numéro un, se trouve en Corée du Sud. C'est un prestigieux parcours Jack Nicklaus Signature. La beauté de ses greens vallonnés est entretenue grâce à l'irrigation par plusieurs lacs et étangs.",
    problemTitle: "Le problème des algues",
    problemIntro:
      "Les lacs étaient à la fois un bel élément du paysage du golf et une réserve d'eau indispensable à l'irrigation. Une prolifération excessive d'algues causait plusieurs problèmes :",
    problems: [
      "Une hausse des matières en suspension totales (MES) et une baisse de la demande biochimique en oxygène (DBO), qui rendaient l'eau malsaine.¹",
      "Un taux d'oxygène plus bas, l'eau s'appauvrissant peu à peu en oxygène.",
      "Un ombrage qui freinait la croissance des plantes aquatiques utiles.",
      "Le colmatage des pompes à eau.",
      "Des odeurs dues aux algues mortes ou mourantes.",
      "Un aspect peu attrayant.",
    ],
    problemOutro:
      "Ces problèmes étaient aggravés par des températures plus élevées et des pluies inférieures à la normale.",
    controlsTitle: "Les moyens de lutte habituels",
    controls: [
      "Des moyens chimiques — herbicides et algicides, sulfate de cuivre, eau de Javel — avaient déjà été employés. Ces méthodes avaient toutefois leurs propres effets indésirables.",
      "Des fontaines destinées à aérer et à brasser l'eau ont accru l'activité biologique naturelle et réduit un peu la croissance des algues.",
      "Le retrait mécanique des algues demandait beaucoup de main-d'œuvre.",
    ],
    solutionTitle: "La solution Water Vital® contre les algues",
    solutionText1:
      "L'emploi de produits organiques non toxiques dans les lacs et les étangs est devenu très courant ces dernières années. C'est une solution naturelle qui n'exige ni herbicides ni algicides ; elle entraîne en revanche des coûts permanents et un entretien régulier. C'est pourquoi nous avons retenu une alternative non toxique et entièrement naturelle, sans entretien régulier, sans énergie et sans consommable.",
    solutionText2:
      "La solution était très simple. Dans l'approche Water Vital®, deux unités SAT « Softer Water Conditioner » ont été installées dans le lac, comme traitement catalytique de l'eau sans électricité ni produit chimique. Selon le rapport d'origine, ce procédé dissocie les liaisons chimiques d'une eau très minéralisée. Les nutriments dont se nourrissent les algues disparaissent alors, et les algues meurent vite. Elles sont ensuite retirées du lac, et la beauté naturelle d'une eau claire revient rapidement.²",
    stagesTitle: "Application et observation",
    stages: [
      {
        label: "Installation",
        text: "Chargement de deux unités Turbu-Flow « Softer Water Conditioner » dans le lac n° 5, d'un volume de 4000 m³. Une pompe immergée et trois tuyaux d'aspiration ont aussi servi à retirer les algues mortes.",
        alt: "Deux techniciens installent l'appareil sur un cadre flottant, au bord du lac",
      },
      {
        label: "Jour 2",
        text: "Après seulement deux jours, les algues se décomposent et meurent.",
        alt: "Eau verte avec des paquets d'algues en décomposition",
      },
      {
        label: "Jour 6",
        text: "Le lac après six jours : 70 % des algues sont mortes et ont été retirées.",
        alt: "Surface verte du lac six jours après l'installation",
      },
      {
        label: "Jour 8",
        text: "Au huitième jour, le lac est débarrassé des algues et l'eau est limpide. On remarque que le tuyau se voit sans obstruction. Un couple de canards colverts est revenu sur le lac, bon signe pour l'avenir.",
        alt: "Eau claire du lac, avec un tuyau bien visible",
      },
    ],
    resultsTitle: "Les résultats",
    resultsText:
      "Comme on le voit, les résultats parlent d'eux-mêmes. Un lac autrefois fortement pollué par des proliférations d'algues a retrouvé son état d'origine en très peu de temps. L'un des « Water Restorers » Water Vital® reste dans le lac pour assurer un traitement continu de l'eau.",
    lakeAlt: "Vue d'ensemble du lac après l'application",
    lakeCaption: "Le lac au terme de l'application (image retravaillée par ordinateur à partir de la photo d'origine).",
    turfTitle: "Observation complémentaire sur le gazon irrigué",
    turfText:
      "Une observation de terrain complémentaire indique que le gazon irrigué avec de l'eau traitée par Water Vital paraissait plus sain et prenait une couleur vert plus profond. Cette amélioration pourrait être liée à une plus grande disponibilité des minéraux du sol pour les plantes et à une meilleure absorption par les racines. Des analyses du sol et des plantes sont recommandées pour vérifier le lien proposé avec la disponibilité et l'absorption des minéraux.",
    note1:
      "¹ Le rapport d'origine indique une baisse de la DBO. La DBO et l'oxygène dissous sont deux mesures différentes ; l'explication technique figure dans l'évaluation plus bas.",
    note2:
      "² Le mécanisme et les résultats sont ceux affirmés par le rapport d'origine. L'effet de l'appareil et celui du nettoyage à la pompe n'ont pas été mesurés séparément. Voir l'évaluation technique plus bas.",
    photoCredit: "Photographies : rapport d'application Green Solutions.",
    assessTitle: "Évaluation technique et informations manquantes",
    assessSubtitle: "Évaluation complémentaire du rapport d'origine",
    assessIntro:
      "Le rapport décrit une amélioration visible, accompagnée d'un retrait mécanique des algues. Compléter les points suivants lors de la préparation d'une nouvelle application Water Vital sur un étang permettra d'évaluer le résultat sur des bases solides.",
    assess: [
      {
        h: "Distinguer la DBO de l'oxygène dissous",
        p: "Le rapport d'origine cite une baisse de la DBO parmi les causes d'une eau malsaine. La DBO décrit l'oxygène consommé pendant la décomposition biologique de la matière organique ; l'oxygène dissous décrit l'oxygène présent dans l'eau. Une baisse de la DBO ne signifie pas, en soi, un manque d'oxygène. L'auteur a peut-être voulu parler d'une baisse de l'oxygène dissous. Les données d'analyse d'origine sont nécessaires pour une correction définitive. [3]",
      },
      {
        h: "Démontrer l'élimination des nutriments",
        p: "L'explication selon laquelle la dissociation des liaisons chimiques supprime les nutriments des algues n'est pas étayée, dans le rapport, par des analyses d'azote et de phosphore. Un changement dans les liaisons chimiques ou les formes minérales ne démontre pas, à lui seul, que l'azote et le phosphore totaux ont été retirés de l'eau. Une nouvelle application devrait consigner les apports de nutriments, les mesures de l'eau et la quantité d'algues retirée. L'excès de nutriments, la température et le mouvement de l'eau devraient être évalués. [1, 2]",
      },
      {
        h: "Séparer l'effet de l'appareil de celui du nettoyage",
        p: "L'emploi d'une pompe immergée et de trois tuyaux d'aspiration montre que le nettoyage mécanique a contribué au résultat annoncé. Les observations des jours 2, 6 et 8 portent sur cette application combinée. Le rapport ne précise ni comment la valeur de 70 % a été mesurée, ni par rapport à quelle référence. Une meilleure clarté de l'eau n'est pas non plus un résultat d'analyse pour l'azote, le phosphore ou l'aptitude microbiologique.",
      },
      {
        h: "Compléter le modèle et les conditions d'exploitation",
        p: "Le rapport emploie les noms SAT, Turbu-Flow et Water Vital. Il faut consigner le modèle de l'appareil, sa capacité technique et les coordonnées du fabricant pour établir son lien avec les produits Water Vital actuels. Le fait d'utiliser deux appareils dans 4000 m³ n'établit pas que le même nombre suffise pour un autre étang ou un autre modèle. Le débit de la pompe, l'emplacement d'installation, la profondeur, la durée de fonctionnement et la durée du suivi devraient aussi être ajoutés. L'évaluation de l'énergie et de l'entretien doit couvrir les pompes, l'aération et le matériel de nettoyage, et pas seulement le module de l'appareil.",
      },
      {
        h: "Étayer l'observation sur le gazon par des analyses",
        p: "Une couleur vert plus profond ne prouve pas à elle seule une dissolution accrue des minéraux. L'azote et le fer peuvent influencer la couleur du gazon, et le pH du sol influe sur la disponibilité des nutriments. L'eau et le sol demandent des mesures séparées ; davantage de nutriments solubles dans un étang peut aussi nourrir les algues. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Sources techniques",
    planTitle: "Plan d'application Water Vital pour un étang",
    planIntro:
      "L'approche proposée consiste à évaluer Water Vital dans un essai mesuré, combiné à un retrait des algues et à une réduction des apports de nutriments. Les objectifs : moins d'algues et de colmatage des pompes, une meilleure clarté de l'eau et une amélioration durable. Des mesures comparatives permettent d'apprécier la contribution de l'appareil.",
    plan: [
      {
        h: "Évaluation du site et installation",
        p: "Consigner le volume de l'étang, sa surface, sa profondeur, ses apports d'eau, l'abondance des algues et le débit de circulation. Évaluer le modèle en ligne sur un tronçon adapté d'une conduite de circulation existante, en respectant le débit, la pression et les exigences d'installation du fabricant. Confirmer que le modèle en réservoir convient à une immersion et qu'il en a la capacité. Le fixer sans l'enfouir dans les sédiments du fond. Choisir le nombre d'appareils d'après ces données du site.",
      },
      {
        h: "Retrait des algues et prévention de la récidive",
        p: "Retirer les algues de surface et la matière en décomposition avec un matériel de collecte ou d'aspiration adapté, et noter les quantités. La décomposition consommant de l'oxygène, suivre l'oxygène dissous et prévoir une aération appropriée si nécessaire. Rechercher et réduire les apports d'azote et de phosphore venant des engrais du gazon, du drainage, des eaux usées et des débris organiques, pour agir sur la charge qui favorise le retour des algues. [1, 2, 4]",
      },
      {
        h: "Suivi et comparaison",
        p: "Il est proposé de faire des photographies et des mesures de l'eau aux mêmes endroits au départ, puis aux jours 2, 6, 8, 14, 30 et 45. Suivre l'oxygène dissous et la température plus souvent au début, surtout tôt le matin. Si deux étangs semblables et indépendants sont disponibles, appliquer les mêmes pratiques de nettoyage et d'aération aux deux et n'installer Water Vital que dans un seul, afin de comparer sa contribution supplémentaire. Le suivi avant/après d'un seul étang enregistre l'effet global des interventions combinées.",
      },
    ],
    planHead: ["Indicateur", "Unité ou relevé", "Évaluation"],
    planRows: [
      ["Abondance d'algues", "Chlorophylle a ou comptage d'espèces adapté", "Évolution de la charge en algues"],
      ["Clarté de l'eau", "Turbidité et profondeur de Secchi", "Évolution de la visibilité"],
      ["Oxygène", "Oxygène dissous, mg/L", "Maintien des conditions d'oxygène"],
      ["Nutriments", "Azote total et phosphore total, mg/L", "Évolution de la charge en nutriments"],
      ["Charge organique", "DBO et, le cas échéant, DCO, mg/L", "Suivi de la matière dégradable"],
      ["Exploitation", "Quantité d'algues retirée et relevé du colmatage", "Besoins de nettoyage et de pompage"],
    ],
    planOutro1:
      "Les délais des jours 2, 6 et 8 sont des observations du rapport d'origine. Un délai d'achèvement ou un pourcentage de retrait pour une nouvelle application ne doit être annoncé qu'après les mesures sur le site.",
    planOutro2:
      "Suivre la couleur, la densité et le développement racinaire du gazon par rapport à une zone témoin indépendante, soumise à la même irrigation et à la même fertilisation. Comparer les analyses de départ et de suivi : pH du sol, nutriments disponibles et concentrations en nutriments dans les tissus des plantes.",
  },

  en: {
    eyebrow: "Application case · South Korea",
    title: "Green algae in the lakes of a golf course",
    lede: "A Green Solutions application report: a South Korean golf course, lakes overrun by algae, and a day-by-day observation.",
    greenAlt: "A golf green with its yellow flag, beside a pond",
    greenCaption: "Illustration: a golf green.",
    clubTitle: "The golf club",
    clubText:
      "Opened for play in 2000, the number one ranking Gapyeong Benest Golf Club, in South Korea, is a prestigious Jack Nicklaus Signature Golf Course. The beauty of its rolling greens is maintained by irrigation from several lakes and ponds.",
    problemTitle: "The algae problem",
    problemIntro:
      "The lakes were both a beautiful element of the golf course landscape and a necessary water store for irrigation. Excessive algae growth was causing several problems:",
    problems: [
      "An increase in total suspended solids (TSS) and a decrease in biochemical oxygen demand (BOD), making the water unhealthy.¹",
      "Lower oxygen levels as the water environment slowly became deprived of oxygen.",
      "Shading that inhibited the growth of desirable aquatic plants.",
      "Clogging of water pumps.",
      "Odours caused by dead or dying algae.",
      "An unattractive appearance.",
    ],
    problemOutro: "The problems were aggravated by higher temperatures and lower than usual rainfall.",
    controlsTitle: "Common algae controls",
    controls: [
      "Chemical controls, including herbicides and algaecides, copper sulphate and chlorine bleach, had been used in the past. However, these methods had undesirable consequences of their own.",
      "Fountains used to aerate and mix the water increased natural biological activity and reduced algae growth a little.",
      "Mechanical removal of algae required substantial labour.",
    ],
    solutionTitle: "The Water Vital® solution against algae",
    solutionText1:
      "The use of non-toxic organic products in lakes and ponds has become very popular recently. It is a natural solution that does not require herbicides or algaecides; however, it involves ongoing costs and regular maintenance. That is why we opted for a non-toxic and entirely natural alternative requiring no regular maintenance, no energy and no consumables.",
    solutionText2:
      "The solution was very simple. In the Water Vital® approach, two SAT “Softer Water Conditioners” were installed in the lake as a non-electrical, non-chemical catalytic water treatment. According to the source report, this process dissociates the chemical bonds in heavily mineralised water. This in turn removes the nutrients on which algae feed, and the algae die quickly. The algae are then removed from the lake, and the natural beauty of clear water soon returns.²",
    stagesTitle: "Application and observation",
    stages: [
      {
        label: "Installation",
        text: "Loading two Turbu-Flow “Softer Water Conditioner” units into lake number 5, which has a volume of 4000 m³. A submersible pump and three suction hoses were also used to remove dead algae.",
        alt: "Two technicians installing the equipment on a floating frame at the edge of the lake",
      },
      {
        label: "Day 2",
        text: "After only two days, the algae are breaking down and dying.",
        alt: "Green water with clumps of breaking-down algae",
      },
      {
        label: "Day 6",
        text: "The lake after six days: 70% of the algae are dead and have been removed.",
        alt: "Green surface of the lake six days after installation",
      },
      {
        label: "Day 8",
        text: "By day eight, the lake is cleared of algae and the water is crystal clear. Notice that the pipe can be seen without obstruction. A pair of Mallard ducks has returned to the lake, a good sign for the future.",
        alt: "Clear lake water with a pipe clearly visible",
      },
    ],
    resultsTitle: "The results",
    resultsText:
      "As can be seen, the results speak for themselves. A lake once heavily polluted by algal blooms has been restored to its original condition in a very short time. One of the Water Vital® “Water Restorers” remains in the lake to provide continuous water treatment.",
    lakeAlt: "Wide view of the lake after the application",
    lakeCaption: "The lake at the end of the application (computer-enhanced image based on the original photo).",
    turfTitle: "Additional field observation on irrigated turf",
    turfText:
      "An additional field observation reported that turf irrigated with Water Vital-treated water appeared healthier and developed a deeper green colour. This improvement may be associated with increased plant availability of soil minerals and greater uptake by roots. Soil and plant analyses are recommended to verify the proposed connection with mineral availability and uptake.",
    note1:
      "¹ The source report states a decrease in BOD. BOD and dissolved oxygen are different measurements; the technical explanation is in the assessment below.",
    note2:
      "² The mechanism and results are claims made in the source report. The device effect and the effect of pump-assisted cleaning were not measured separately. See the technical assessment below.",
    photoCredit: "Photographs: Green Solutions application report.",
    assessTitle: "Technical assessment and missing information",
    assessSubtitle: "Supplementary assessment of the source report",
    assessIntro:
      "The report describes visible improvement alongside mechanical algae removal. Completing the following details when preparing a new Water Vital pond application will support a sound assessment of the outcome.",
    assess: [
      {
        h: "Distinguishing BOD from dissolved oxygen",
        p: "The source report lists a decrease in BOD among the causes of unhealthy water. BOD describes the oxygen consumed during biological decomposition of organic matter; dissolved oxygen describes the oxygen present in the water. A fall in BOD does not in itself mean an oxygen shortage. The author may have meant a decrease in dissolved oxygen. Original analytical data are needed for a definitive correction. [3]",
      },
      {
        h: "Demonstrating nutrient removal",
        p: "The explanation that dissociation of chemical bonds removes algae nutrients is not supported by nitrogen and phosphorus analyses in the report. A change in chemical bonds or mineral forms does not by itself demonstrate removal of total nitrogen and phosphorus from the water. A new application should record nutrient inputs, water measurements and the amount of algae removed. Excess nutrients, temperature and water movement should be assessed. [1, 2]",
      },
      {
        h: "Separating the device and cleaning effects",
        p: "The use of a submersible pump and three suction hoses shows that mechanical cleaning contributed to the reported outcome. The day 2, 6 and 8 observations relate to this combined application. The report does not specify how the 70% value was measured or its comparison baseline. Improved clarity is also different from an analytical result for nitrogen, phosphorus or microbiological suitability.",
      },
      {
        h: "Completing model and operating details",
        p: "The report uses the names SAT, Turbu-Flow and Water Vital. Record the device model, technical capacity and manufacturer details to establish its relationship to current Water Vital products. Using two devices in 4000 m³ does not establish that the same number is sufficient for another pond or model. Pump flow, installation location, depth, operating time and the follow-up period should also be added. Energy and maintenance assessment should cover pumps, aeration and cleaning equipment as well as the device module.",
      },
      {
        h: "Supporting the turf observation with analyses",
        p: "A deeper green turf colour alone does not prove increased mineral dissolution. Nitrogen and iron can affect turf colour, while soil pH affects nutrient availability. Water and soil require separate measurements; increased soluble nutrients in a pond may also nourish algae. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Technical sources",
    planTitle: "Water Vital pond application plan",
    planIntro:
      "The proposed approach is to evaluate Water Vital in a measured trial combined with algae removal and reduced nutrient inputs. The objectives are less algae and pump clogging, improved water clarity and sustained improvement. Comparative measurements assess the contribution of the device.",
    plan: [
      {
        h: "Site assessment and installation",
        p: "Record pond volume, surface area, depth, water inputs, algae abundance and circulation flow. Assess the inline model at a suitable section of an available circulation line, following flow, pressure and manufacturer installation requirements. Confirm the tank model’s suitability and capacity for immersion. Secure it without burying it in bottom sediment. Select device numbers from these site details.",
      },
      {
        h: "Algae removal and prevention of recurrence",
        p: "Remove surface algae and decomposing material using suitable collection or suction equipment, and record quantities. As decomposition consumes oxygen, monitor dissolved oxygen and provide appropriate aeration if required. Investigate and reduce nitrogen and phosphorus inputs from turf fertiliser, drainage, wastewater and organic debris to address the load that promotes renewed algae growth. [1, 2, 4]",
      },
      {
        h: "Monitoring and comparison",
        p: "Photographs and water measurements at the same locations are proposed at baseline and on days 2, 6, 8, 14, 30 and 45. Monitor dissolved oxygen and temperature more frequently at first, particularly early in the morning. If two similar, independent ponds are available, apply the same cleaning and aeration practices to both and install Water Vital in only one to compare its additional contribution. Before-and-after monitoring of one pond records the overall effect of the combined interventions.",
      },
    ],
    planHead: ["Indicator", "Unit or record", "Assessment"],
    planRows: [
      ["Algae abundance", "Chlorophyll a or a suitable species count", "Change in algae load"],
      ["Clarity", "Turbidity and Secchi depth", "Change in visibility"],
      ["Oxygen", "Dissolved oxygen, mg/L", "Maintenance of oxygen conditions"],
      ["Nutrients", "Total nitrogen and total phosphorus, mg/L", "Change in nutrient load"],
      ["Organic load", "BOD and, where relevant, COD, mg/L", "Tracking of degradable material"],
      ["Operations", "Amount of algae removed and clogging record", "Cleaning and pump requirements"],
    ],
    planOutro1:
      "The day 2, 6 and 8 times are observations from the source report. A completion time or removal percentage for a new application should only be committed to after site measurements have been completed.",
    planOutro2:
      "Monitor turf colour, density and root development against an independent comparison area with the same irrigation and fertilisation conditions. Compare baseline and follow-up analyses of soil pH, available nutrients and nutrient concentrations in plant tissue.",
  },

  es: {
    eyebrow: "Caso de aplicación · Corea del Sur",
    title: "Algas verdes en los lagos de un campo de golf",
    lede: "Informe de aplicación de Green Solutions: un campo de golf surcoreano, lagos invadidos por las algas y una observación día a día.",
    greenAlt: "Un green de golf con su bandera amarilla, junto a un estanque",
    greenCaption: "Ilustración: un green de golf.",
    clubTitle: "El club de golf",
    clubText:
      "Inaugurado en 2000, el Gapyeong Benest Golf Club, clasificado número uno, se encuentra en Corea del Sur. Es un prestigioso campo Jack Nicklaus Signature. La belleza de sus greens ondulados se mantiene gracias al riego con agua de varios lagos y estanques.",
    problemTitle: "El problema de las algas",
    problemIntro:
      "Los lagos eran a la vez un hermoso elemento del paisaje del campo y una reserva de agua necesaria para el riego. El crecimiento excesivo de algas causaba varios problemas:",
    problems: [
      "Un aumento de los sólidos en suspensión totales (SST) y una disminución de la demanda bioquímica de oxígeno (DBO), que volvían el agua poco saludable.¹",
      "Niveles de oxígeno más bajos, al empobrecerse el agua poco a poco en oxígeno.",
      "Una sombra que frenaba el crecimiento de las plantas acuáticas deseables.",
      "La obstrucción de las bombas de agua.",
      "Malos olores causados por las algas muertas o moribundas.",
      "Un aspecto poco atractivo.",
    ],
    problemOutro: "Los problemas se agravaban con temperaturas más altas y lluvias inferiores a lo habitual.",
    controlsTitle: "Los métodos habituales de control",
    controls: [
      "Se habían utilizado en el pasado métodos químicos: herbicidas y alguicidas, sulfato de cobre y lejía. Sin embargo, estos métodos tenían sus propias consecuencias indeseables.",
      "Las fuentes para airear y mezclar el agua aumentaron la actividad biológica natural y redujeron un poco el crecimiento de las algas.",
      "La retirada mecánica de las algas exigía mucha mano de obra.",
    ],
    solutionTitle: "La solución Water Vital® contra las algas",
    solutionText1:
      "El uso de productos orgánicos no tóxicos en lagos y estanques se ha vuelto muy popular últimamente. Es una solución natural que no requiere herbicidas ni alguicidas; sin embargo, implica costes continuos y un mantenimiento regular. Por eso optamos por una alternativa no tóxica y totalmente natural, sin mantenimiento regular, sin energía y sin consumibles.",
    solutionText2:
      "La solución era muy sencilla. En el enfoque Water Vital®, se instalaron en el lago dos unidades SAT «Softer Water Conditioner» como tratamiento catalítico del agua, sin electricidad ni productos químicos. Según el informe de origen, este proceso disocia los enlaces químicos de un agua muy mineralizada. Así se eliminan los nutrientes de los que se alimentan las algas, y las algas mueren rápidamente. Después se retiran del lago, y la belleza natural del agua clara vuelve pronto.²",
    stagesTitle: "Aplicación y observación",
    stages: [
      {
        label: "Instalación",
        text: "Carga de dos unidades Turbu-Flow «Softer Water Conditioner» en el lago n.º 5, de 4000 m³ de volumen. También se utilizaron una bomba sumergible y tres mangueras de aspiración para retirar las algas muertas.",
        alt: "Dos técnicos instalan el equipo en un bastidor flotante, a la orilla del lago",
      },
      {
        label: "Día 2",
        text: "Después de solo dos días, las algas se descomponen y mueren.",
        alt: "Agua verde con grumos de algas en descomposición",
      },
      {
        label: "Día 6",
        text: "El lago después de seis días: el 70 % de las algas han muerto y se han retirado.",
        alt: "Superficie verde del lago seis días después de la instalación",
      },
      {
        label: "Día 8",
        text: "Al octavo día, el lago está libre de algas y el agua es cristalina. Obsérvese que la tubería se ve sin obstrucción. Una pareja de ánades reales ha vuelto al lago, una buena señal para el futuro.",
        alt: "Agua clara del lago, con una tubería bien visible",
      },
    ],
    resultsTitle: "Los resultados",
    resultsText:
      "Como se puede ver, los resultados hablan por sí solos. Un lago antes muy contaminado por floraciones de algas ha recuperado su estado original en muy poco tiempo. Uno de los «Water Restorers» de Water Vital® permanece en el lago para garantizar un tratamiento continuo del agua.",
    lakeAlt: "Vista general del lago tras la aplicación",
    lakeCaption: "El lago al final de la aplicación (imagen retocada por ordenador a partir de la foto original).",
    turfTitle: "Observación de campo adicional sobre el césped regado",
    turfText:
      "Una observación de campo adicional indicó que el césped regado con agua tratada con Water Vital parecía más sano y adquiría un verde más intenso. Esta mejora podría estar asociada a una mayor disponibilidad de los minerales del suelo para las plantas y a una mayor absorción por las raíces. Se recomiendan análisis de suelo y de plantas para verificar la relación propuesta con la disponibilidad y la absorción de minerales.",
    note1:
      "¹ El informe de origen indica una disminución de la DBO. La DBO y el oxígeno disuelto son mediciones distintas; la explicación técnica figura en la evaluación más abajo.",
    note2:
      "² El mecanismo y los resultados son afirmaciones del informe de origen. El efecto del aparato y el de la limpieza con bomba no se midieron por separado. Véase la evaluación técnica más abajo.",
    photoCredit: "Fotografías: informe de aplicación de Green Solutions.",
    assessTitle: "Evaluación técnica e información que falta",
    assessSubtitle: "Evaluación complementaria del informe de origen",
    assessIntro:
      "El informe describe una mejora visible acompañada de una retirada mecánica de las algas. Completar los datos siguientes al preparar una nueva aplicación de Water Vital en un estanque permitirá evaluar el resultado con solidez.",
    assess: [
      {
        h: "Distinguir la DBO del oxígeno disuelto",
        p: "El informe de origen cita una disminución de la DBO entre las causas de un agua poco saludable. La DBO describe el oxígeno consumido durante la descomposición biológica de la materia orgánica; el oxígeno disuelto describe el oxígeno presente en el agua. Una caída de la DBO no significa, por sí sola, una falta de oxígeno. Es posible que el autor quisiera hablar de una disminución del oxígeno disuelto. Se necesitan los datos analíticos originales para una corrección definitiva. [3]",
      },
      {
        h: "Demostrar la eliminación de nutrientes",
        p: "La explicación de que la disociación de los enlaces químicos elimina los nutrientes de las algas no está respaldada en el informe por análisis de nitrógeno y fósforo. Un cambio en los enlaces químicos o en las formas minerales no demuestra por sí solo que se hayan eliminado del agua el nitrógeno y el fósforo totales. Una nueva aplicación debería registrar los aportes de nutrientes, las mediciones del agua y la cantidad de algas retirada. Habría que evaluar el exceso de nutrientes, la temperatura y el movimiento del agua. [1, 2]",
      },
      {
        h: "Separar el efecto del aparato del de la limpieza",
        p: "El uso de una bomba sumergible y tres mangueras de aspiración demuestra que la limpieza mecánica contribuyó al resultado indicado. Las observaciones de los días 2, 6 y 8 corresponden a esta aplicación combinada. El informe no especifica cómo se midió el valor del 70 % ni con qué referencia se comparó. Además, una mayor claridad del agua no equivale a un resultado analítico de nitrógeno, fósforo o aptitud microbiológica.",
      },
      {
        h: "Completar el modelo y los datos de funcionamiento",
        p: "El informe utiliza los nombres SAT, Turbu-Flow y Water Vital. Conviene registrar el modelo del aparato, su capacidad técnica y los datos del fabricante para establecer su relación con los productos Water Vital actuales. Usar dos aparatos en 4000 m³ no establece que el mismo número sea suficiente para otro estanque u otro modelo. También deberían añadirse el caudal de la bomba, el lugar de instalación, la profundidad, el tiempo de funcionamiento y el período de seguimiento. La evaluación de la energía y del mantenimiento debe abarcar las bombas, la aireación y el equipo de limpieza, además del módulo del aparato.",
      },
      {
        h: "Respaldar con análisis la observación sobre el césped",
        p: "Un césped de color verde más intenso no prueba por sí solo una mayor disolución de minerales. El nitrógeno y el hierro pueden influir en el color del césped, y el pH del suelo afecta a la disponibilidad de nutrientes. El agua y el suelo requieren mediciones separadas; un aumento de los nutrientes solubles en un estanque también puede alimentar a las algas. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Fuentes técnicas",
    planTitle: "Plan de aplicación de Water Vital en un estanque",
    planIntro:
      "El enfoque propuesto consiste en evaluar Water Vital en un ensayo medido, combinado con la retirada de algas y la reducción de los aportes de nutrientes. Los objetivos son menos algas y menos obstrucción de las bombas, una mayor claridad del agua y una mejora sostenida. Las mediciones comparativas permiten valorar la contribución del aparato.",
    plan: [
      {
        h: "Evaluación del sitio e instalación",
        p: "Registrar el volumen del estanque, su superficie, su profundidad, los aportes de agua, la abundancia de algas y el caudal de circulación. Evaluar el modelo en línea en un tramo adecuado de una tubería de circulación existente, respetando el caudal, la presión y los requisitos de instalación del fabricante. Confirmar que el modelo de depósito es apto para la inmersión y tiene capacidad para ello. Fijarlo sin enterrarlo en los sedimentos del fondo. Elegir el número de aparatos a partir de estos datos del sitio.",
      },
      {
        h: "Retirada de algas y prevención de su reaparición",
        p: "Retirar las algas de superficie y el material en descomposición con un equipo de recogida o aspiración adecuado, y anotar las cantidades. Como la descomposición consume oxígeno, vigilar el oxígeno disuelto y prever una aireación adecuada si es necesario. Investigar y reducir los aportes de nitrógeno y fósforo procedentes del abono del césped, el drenaje, las aguas residuales y los restos orgánicos, para actuar sobre la carga que favorece la reaparición de las algas. [1, 2, 4]",
      },
      {
        h: "Seguimiento y comparación",
        p: "Se propone tomar fotografías y mediciones del agua en los mismos lugares al inicio y los días 2, 6, 8, 14, 30 y 45. Controlar el oxígeno disuelto y la temperatura con más frecuencia al principio, sobre todo a primera hora de la mañana. Si se dispone de dos estanques similares e independientes, aplicar las mismas prácticas de limpieza y aireación a ambos e instalar Water Vital solo en uno, para comparar su contribución adicional. El seguimiento antes y después en un solo estanque registra el efecto global de las intervenciones combinadas.",
      },
    ],
    planHead: ["Indicador", "Unidad o registro", "Valoración"],
    planRows: [
      ["Abundancia de algas", "Clorofila a o un recuento de especies adecuado", "Variación de la carga de algas"],
      ["Claridad", "Turbidez y profundidad del disco de Secchi", "Variación de la visibilidad"],
      ["Oxígeno", "Oxígeno disuelto, mg/L", "Mantenimiento de las condiciones de oxígeno"],
      ["Nutrientes", "Nitrógeno total y fósforo total, mg/L", "Variación de la carga de nutrientes"],
      ["Carga orgánica", "DBO y, en su caso, DQO, mg/L", "Seguimiento de la materia degradable"],
      ["Operación", "Cantidad de algas retirada y registro de obstrucciones", "Necesidades de limpieza y de bombeo"],
    ],
    planOutro1:
      "Los tiempos de los días 2, 6 y 8 son observaciones del informe de origen. Un plazo de finalización o un porcentaje de retirada para una nueva aplicación solo debe comprometerse una vez realizadas las mediciones en el sitio.",
    planOutro2:
      "Controlar el color, la densidad y el desarrollo radicular del césped frente a una zona de comparación independiente con las mismas condiciones de riego y fertilización. Comparar los análisis iniciales y de seguimiento del pH del suelo, los nutrientes disponibles y las concentraciones de nutrientes en el tejido vegetal.",
  },

  pt: {
    eyebrow: "Caso de aplicação · Coreia do Sul",
    title: "Algas verdes nos lagos de um campo de golfe",
    lede: "Relatório de aplicação da Green Solutions: um campo de golfe sul-coreano, lagos invadidos por algas e uma observação dia a dia.",
    greenAlt: "Um green de golfe com a sua bandeira amarela, junto a uma lagoa",
    greenCaption: "Ilustração: um green de golfe.",
    clubTitle: "O clube de golfe",
    clubText:
      "Inaugurado em 2000, o Gapyeong Benest Golf Club, classificado em primeiro lugar, situa-se na Coreia do Sul. É um prestigiado campo Jack Nicklaus Signature. A beleza dos seus greens ondulados é mantida graças à rega com água de vários lagos e lagoas.",
    problemTitle: "O problema das algas",
    problemIntro:
      "Os lagos eram simultaneamente um belo elemento da paisagem do campo e uma reserva de água necessária para a rega. O crescimento excessivo de algas causava vários problemas:",
    problems: [
      "Um aumento dos sólidos suspensos totais (SST) e uma diminuição da carência bioquímica de oxigénio (CBO), que tornavam a água insalubre.¹",
      "Níveis de oxigénio mais baixos, à medida que a água se ia empobrecendo em oxigénio.",
      "Um sombreamento que travava o crescimento das plantas aquáticas desejáveis.",
      "O entupimento das bombas de água.",
      "Maus cheiros causados por algas mortas ou moribundas.",
      "Um aspeto pouco atraente.",
    ],
    problemOutro: "Os problemas eram agravados por temperaturas mais elevadas e por uma precipitação inferior ao habitual.",
    controlsTitle: "Os meios de controlo habituais",
    controls: [
      "No passado, tinham sido usados meios químicos: herbicidas e algicidas, sulfato de cobre e lixívia. Contudo, estes métodos tinham os seus próprios efeitos indesejáveis.",
      "As fontes usadas para arejar e misturar a água aumentaram a atividade biológica natural e reduziram um pouco o crescimento das algas.",
      "A remoção mecânica das algas exigia muita mão de obra.",
    ],
    solutionTitle: "A solução Water Vital® contra as algas",
    solutionText1:
      "O uso de produtos orgânicos não tóxicos em lagos e lagoas tornou-se muito popular recentemente. É uma solução natural que não requer herbicidas nem algicidas; implica, no entanto, custos contínuos e manutenção regular. Por isso optámos por uma alternativa não tóxica e inteiramente natural, sem manutenção regular, sem energia e sem consumíveis.",
    solutionText2:
      "A solução era muito simples. Na abordagem Water Vital®, foram instaladas no lago duas unidades SAT «Softer Water Conditioner», como tratamento catalítico da água sem eletricidade nem produtos químicos. Segundo o relatório de origem, este processo dissocia as ligações químicas de uma água muito mineralizada. Isso elimina os nutrientes de que as algas se alimentam, e as algas morrem rapidamente. As algas são depois retiradas do lago, e a beleza natural da água limpa regressa depressa.²",
    stagesTitle: "Aplicação e observação",
    stages: [
      {
        label: "Instalação",
        text: "Colocação de duas unidades Turbu-Flow «Softer Water Conditioner» no lago n.º 5, com um volume de 4000 m³. Foram também usadas uma bomba submersível e três mangueiras de aspiração para retirar as algas mortas.",
        alt: "Dois técnicos instalam o equipamento numa estrutura flutuante, à beira do lago",
      },
      {
        label: "Dia 2",
        text: "Após apenas dois dias, as algas estão a decompor-se e a morrer.",
        alt: "Água verde com aglomerados de algas em decomposição",
      },
      {
        label: "Dia 6",
        text: "O lago após seis dias: 70% das algas morreram e foram retiradas.",
        alt: "Superfície verde do lago seis dias após a instalação",
      },
      {
        label: "Dia 8",
        text: "No oitavo dia, o lago está livre de algas e a água está cristalina. Repare-se que a tubagem se vê sem obstrução. Um casal de patos-reais regressou ao lago, um bom sinal para o futuro.",
        alt: "Água clara do lago, com uma tubagem bem visível",
      },
    ],
    resultsTitle: "Os resultados",
    resultsText:
      "Como se pode ver, os resultados falam por si. Um lago outrora muito poluído por proliferações de algas voltou ao seu estado original em muito pouco tempo. Um dos «Water Restorers» Water Vital® permanece no lago para assegurar um tratamento contínuo da água.",
    lakeAlt: "Vista geral do lago após a aplicação",
    lakeCaption: "O lago no final da aplicação (imagem retocada por computador a partir da foto original).",
    turfTitle: "Observação de campo adicional sobre o relvado regado",
    turfText:
      "Uma observação de campo adicional indicou que o relvado regado com água tratada pelo Water Vital parecia mais saudável e adquiria um verde mais intenso. Esta melhoria pode estar associada a uma maior disponibilidade dos minerais do solo para as plantas e a uma maior absorção pelas raízes. Recomendam-se análises de solo e de plantas para verificar a relação proposta com a disponibilidade e a absorção de minerais.",
    note1:
      "¹ O relatório de origem indica uma diminuição da CBO. A CBO e o oxigénio dissolvido são medições diferentes; a explicação técnica consta da avaliação mais abaixo.",
    note2:
      "² O mecanismo e os resultados são afirmações do relatório de origem. O efeito do aparelho e o da limpeza com bomba não foram medidos separadamente. Ver a avaliação técnica mais abaixo.",
    photoCredit: "Fotografias: relatório de aplicação da Green Solutions.",
    assessTitle: "Avaliação técnica e informação em falta",
    assessSubtitle: "Avaliação complementar do relatório de origem",
    assessIntro:
      "O relatório descreve uma melhoria visível acompanhada de uma remoção mecânica das algas. Completar os pontos seguintes ao preparar uma nova aplicação do Water Vital numa lagoa permitirá avaliar o resultado em bases sólidas.",
    assess: [
      {
        h: "Distinguir a CBO do oxigénio dissolvido",
        p: "O relatório de origem cita uma diminuição da CBO entre as causas de uma água insalubre. A CBO descreve o oxigénio consumido durante a decomposição biológica da matéria orgânica; o oxigénio dissolvido descreve o oxigénio presente na água. Uma descida da CBO não significa, por si só, falta de oxigénio. É possível que o autor quisesse falar de uma diminuição do oxigénio dissolvido. São necessários os dados analíticos originais para uma correção definitiva. [3]",
      },
      {
        h: "Demonstrar a remoção de nutrientes",
        p: "A explicação de que a dissociação das ligações químicas remove os nutrientes das algas não é sustentada, no relatório, por análises de azoto e de fósforo. Uma alteração nas ligações químicas ou nas formas minerais não demonstra, por si só, que o azoto e o fósforo totais foram removidos da água. Uma nova aplicação deveria registar os aportes de nutrientes, as medições da água e a quantidade de algas retirada. O excesso de nutrientes, a temperatura e o movimento da água deveriam ser avaliados. [1, 2]",
      },
      {
        h: "Separar o efeito do aparelho do da limpeza",
        p: "O uso de uma bomba submersível e de três mangueiras de aspiração mostra que a limpeza mecânica contribuiu para o resultado indicado. As observações dos dias 2, 6 e 8 dizem respeito a esta aplicação combinada. O relatório não especifica como foi medido o valor de 70% nem qual a referência de comparação. Além disso, uma maior limpidez da água não equivale a um resultado analítico de azoto, fósforo ou aptidão microbiológica.",
      },
      {
        h: "Completar o modelo e os dados de funcionamento",
        p: "O relatório usa os nomes SAT, Turbu-Flow e Water Vital. Convém registar o modelo do aparelho, a sua capacidade técnica e os dados do fabricante para estabelecer a sua relação com os produtos Water Vital atuais. Usar dois aparelhos em 4000 m³ não estabelece que o mesmo número seja suficiente para outra lagoa ou outro modelo. Deveriam também ser acrescentados o caudal da bomba, o local de instalação, a profundidade, o tempo de funcionamento e o período de acompanhamento. A avaliação da energia e da manutenção deve abranger as bombas, o arejamento e o equipamento de limpeza, e não apenas o módulo do aparelho.",
      },
      {
        h: "Sustentar com análises a observação sobre o relvado",
        p: "Uma cor verde mais intensa do relvado não prova, por si só, uma maior dissolução de minerais. O azoto e o ferro podem influenciar a cor do relvado, e o pH do solo afeta a disponibilidade de nutrientes. A água e o solo exigem medições separadas; um aumento de nutrientes solúveis numa lagoa pode também alimentar as algas. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Fontes técnicas",
    planTitle: "Plano de aplicação do Water Vital numa lagoa",
    planIntro:
      "A abordagem proposta consiste em avaliar o Water Vital num ensaio medido, combinado com a remoção das algas e a redução dos aportes de nutrientes. Os objetivos são menos algas e menos entupimento das bombas, maior limpidez da água e uma melhoria duradoura. As medições comparativas permitem apreciar o contributo do aparelho.",
    plan: [
      {
        h: "Avaliação do local e instalação",
        p: "Registar o volume da lagoa, a sua superfície, a profundidade, os aportes de água, a abundância de algas e o caudal de circulação. Avaliar o modelo em linha num troço adequado de uma conduta de circulação existente, respeitando o caudal, a pressão e as exigências de instalação do fabricante. Confirmar que o modelo em depósito é adequado à imersão e tem capacidade para isso. Fixá-lo sem o enterrar nos sedimentos do fundo. Escolher o número de aparelhos a partir destes dados do local.",
      },
      {
        h: "Remoção das algas e prevenção da reincidência",
        p: "Retirar as algas de superfície e o material em decomposição com equipamento de recolha ou aspiração adequado, e anotar as quantidades. Como a decomposição consome oxigénio, acompanhar o oxigénio dissolvido e prever um arejamento adequado, se necessário. Investigar e reduzir os aportes de azoto e de fósforo provenientes do adubo do relvado, da drenagem, das águas residuais e dos detritos orgânicos, para atuar sobre a carga que favorece o regresso das algas. [1, 2, 4]",
      },
      {
        h: "Acompanhamento e comparação",
        p: "Propõe-se tirar fotografias e fazer medições da água nos mesmos locais no início e nos dias 2, 6, 8, 14, 30 e 45. Acompanhar o oxigénio dissolvido e a temperatura com mais frequência no início, sobretudo de manhã cedo. Se houver duas lagoas semelhantes e independentes, aplicar as mesmas práticas de limpeza e de arejamento a ambas e instalar o Water Vital apenas numa, para comparar o seu contributo adicional. O acompanhamento antes e depois de uma só lagoa regista o efeito global das intervenções combinadas.",
      },
    ],
    planHead: ["Indicador", "Unidade ou registo", "Avaliação"],
    planRows: [
      ["Abundância de algas", "Clorofila a ou uma contagem de espécies adequada", "Variação da carga de algas"],
      ["Limpidez", "Turvação e profundidade do disco de Secchi", "Variação da visibilidade"],
      ["Oxigénio", "Oxigénio dissolvido, mg/L", "Manutenção das condições de oxigénio"],
      ["Nutrientes", "Azoto total e fósforo total, mg/L", "Variação da carga de nutrientes"],
      ["Carga orgânica", "CBO e, quando relevante, CQO, mg/L", "Acompanhamento da matéria degradável"],
      ["Exploração", "Quantidade de algas retirada e registo de entupimentos", "Necessidades de limpeza e de bombagem"],
    ],
    planOutro1:
      "Os tempos dos dias 2, 6 e 8 são observações do relatório de origem. Um prazo de conclusão ou uma percentagem de remoção para uma nova aplicação só deve ser assumido depois de concluídas as medições no local.",
    planOutro2:
      "Acompanhar a cor, a densidade e o desenvolvimento radicular do relvado em comparação com uma zona de controlo independente, com as mesmas condições de rega e de fertilização. Comparar as análises iniciais e de acompanhamento do pH do solo, dos nutrientes disponíveis e das concentrações de nutrientes nos tecidos das plantas.",
  },

  de: {
    eyebrow: "Anwendungsfall · Südkorea",
    title: "Grüne Algen in den Seen eines Golfplatzes",
    lede: "Anwendungsbericht von Green Solutions: ein südkoreanischer Golfplatz, von Algen überwucherte Seen und eine Beobachtung Tag für Tag.",
    greenAlt: "Ein Golf-Green mit gelber Fahne an einem Teich",
    greenCaption: "Illustration: ein Golf-Green.",
    clubTitle: "Der Golfclub",
    clubText:
      "Der 2000 eröffnete, als Nummer eins eingestufte Gapyeong Benest Golf Club liegt in Südkorea. Er ist ein renommierter Jack Nicklaus Signature Golfplatz. Die Schönheit seiner hügeligen Grüns wird durch die Bewässerung aus mehreren Seen und Teichen erhalten.",
    problemTitle: "Das Algenproblem",
    problemIntro:
      "Die Seen waren zugleich ein schönes Element der Golflandschaft und ein notwendiger Wasserspeicher für die Bewässerung. Übermäßiges Algenwachstum verursachte mehrere Probleme:",
    problems: [
      "Ein Anstieg der gesamten suspendierten Feststoffe (TSS) und ein Rückgang des biochemischen Sauerstoffbedarfs (BSB), wodurch das Wasser ungesund wurde.¹",
      "Niedrigere Sauerstoffwerte, da dem Wasser allmählich der Sauerstoff entzogen wurde.",
      "Eine Beschattung, die das Wachstum erwünschter Wasserpflanzen hemmte.",
      "Verstopfte Wasserpumpen.",
      "Gerüche durch abgestorbene oder absterbende Algen.",
      "Ein unattraktives Erscheinungsbild.",
    ],
    problemOutro: "Die Probleme wurden durch höhere Temperaturen und geringere Niederschläge als üblich verschärft.",
    controlsTitle: "Übliche Maßnahmen gegen Algen",
    controls: [
      "Chemische Mittel — Herbizide und Algizide, Kupfersulfat und Chlorbleiche — waren in der Vergangenheit eingesetzt worden. Diese Methoden hatten jedoch ihre eigenen unerwünschten Folgen.",
      "Fontänen zum Belüften und Durchmischen des Wassers erhöhten die natürliche biologische Aktivität und verringerten das Algenwachstum ein wenig.",
      "Das mechanische Entfernen der Algen erforderte erheblichen Arbeitsaufwand.",
    ],
    solutionTitle: "Die Water Vital®-Lösung gegen Algen",
    solutionText1:
      "Der Einsatz ungiftiger organischer Produkte in Seen und Teichen ist in letzter Zeit sehr beliebt geworden. Es ist eine natürliche Lösung, die weder Herbizide noch Algizide benötigt; sie verursacht jedoch laufende Kosten und erfordert regelmäßige Wartung. Deshalb haben wir uns für eine ungiftige und vollkommen natürliche Alternative entschieden, die keine regelmäßige Wartung, keine Energie und keine Verbrauchsmaterialien benötigt.",
    solutionText2:
      "Die Lösung war sehr einfach. Beim Water Vital®-Ansatz wurden zwei SAT-Einheiten „Softer Water Conditioner“ als nicht elektrische, nicht chemische katalytische Wasserbehandlung in den See eingebracht. Laut dem ursprünglichen Bericht spaltet dieses Verfahren die chemischen Bindungen in stark mineralisiertem Wasser auf. Dadurch verschwinden die Nährstoffe, von denen sich die Algen ernähren, und die Algen sterben rasch ab. Anschließend werden die Algen aus dem See entfernt, und die natürliche Schönheit klaren Wassers kehrt bald zurück.²",
    stagesTitle: "Anwendung und Beobachtung",
    stages: [
      {
        label: "Einbau",
        text: "Einbringen von zwei Turbu-Flow-Einheiten „Softer Water Conditioner“ in See Nr. 5 mit einem Volumen von 4000 m³. Zusätzlich wurden eine Tauchpumpe und drei Saugschläuche eingesetzt, um die toten Algen zu entfernen.",
        alt: "Zwei Techniker bauen das Gerät auf einem schwimmenden Rahmen am Seeufer ein",
      },
      {
        label: "Tag 2",
        text: "Schon nach zwei Tagen zerfallen die Algen und sterben ab.",
        alt: "Grünes Wasser mit Klumpen zerfallender Algen",
      },
      {
        label: "Tag 6",
        text: "Der See nach sechs Tagen: 70 % der Algen sind abgestorben und entfernt worden.",
        alt: "Grüne Seeoberfläche sechs Tage nach dem Einbau",
      },
      {
        label: "Tag 8",
        text: "Am achten Tag ist der See frei von Algen, und das Wasser ist glasklar. Man beachte, dass das Rohr ungehindert zu sehen ist. Ein Stockentenpaar ist an den See zurückgekehrt – ein gutes Zeichen für die Zukunft.",
        alt: "Klares Seewasser mit gut sichtbarem Rohr",
      },
    ],
    resultsTitle: "Die Ergebnisse",
    resultsText:
      "Wie man sieht, sprechen die Ergebnisse für sich. Ein See, der einst durch Algenblüten stark verschmutzt war, wurde in sehr kurzer Zeit in seinen ursprünglichen Zustand zurückversetzt. Einer der Water Vital®-„Water Restorer“ bleibt im See und sorgt für eine kontinuierliche Wasserbehandlung.",
    lakeAlt: "Gesamtansicht des Sees nach der Anwendung",
    lakeCaption: "Der See am Ende der Anwendung (am Computer bearbeitetes Bild nach dem Originalfoto).",
    turfTitle: "Zusätzliche Feldbeobachtung am bewässerten Rasen",
    turfText:
      "Eine zusätzliche Feldbeobachtung berichtete, dass mit Water Vital-behandeltem Wasser bewässerter Rasen gesünder aussah und ein tieferes Grün entwickelte. Diese Verbesserung könnte mit einer höheren Pflanzenverfügbarkeit von Bodenmineralien und einer stärkeren Aufnahme durch die Wurzeln zusammenhängen. Boden- und Pflanzenanalysen werden empfohlen, um den vermuteten Zusammenhang mit der Verfügbarkeit und Aufnahme von Mineralstoffen zu überprüfen.",
    note1:
      "¹ Der ursprüngliche Bericht nennt einen Rückgang des BSB. BSB und gelöster Sauerstoff sind verschiedene Messgrößen; die technische Erklärung steht in der Bewertung weiter unten.",
    note2:
      "² Wirkungsweise und Ergebnisse sind Aussagen des ursprünglichen Berichts. Die Wirkung des Geräts und die der pumpengestützten Reinigung wurden nicht getrennt gemessen. Siehe die technische Bewertung weiter unten.",
    photoCredit: "Fotos: Anwendungsbericht von Green Solutions.",
    assessTitle: "Technische Bewertung und fehlende Informationen",
    assessSubtitle: "Ergänzende Bewertung des ursprünglichen Berichts",
    assessIntro:
      "Der Bericht beschreibt eine sichtbare Verbesserung neben dem mechanischen Entfernen der Algen. Werden die folgenden Angaben bei der Vorbereitung einer neuen Water Vital-Anwendung an einem Teich ergänzt, lässt sich das Ergebnis solide beurteilen.",
    assess: [
      {
        h: "BSB von gelöstem Sauerstoff unterscheiden",
        p: "Der ursprüngliche Bericht nennt einen Rückgang des BSB unter den Ursachen für ungesundes Wasser. Der BSB beschreibt den Sauerstoff, der beim biologischen Abbau organischer Substanz verbraucht wird; gelöster Sauerstoff beschreibt den im Wasser vorhandenen Sauerstoff. Ein sinkender BSB bedeutet für sich genommen keinen Sauerstoffmangel. Möglicherweise meinte der Autor einen Rückgang des gelösten Sauerstoffs. Für eine endgültige Korrektur sind die ursprünglichen Analysedaten nötig. [3]",
      },
      {
        h: "Die Nährstoffentfernung belegen",
        p: "Die Erklärung, dass die Aufspaltung chemischer Bindungen die Nährstoffe der Algen entfernt, wird im Bericht nicht durch Stickstoff- und Phosphoranalysen gestützt. Eine Veränderung chemischer Bindungen oder Mineralformen belegt für sich genommen nicht, dass Gesamtstickstoff und Gesamtphosphor aus dem Wasser entfernt wurden. Eine neue Anwendung sollte Nährstoffeinträge, Wassermessungen und die Menge der entfernten Algen erfassen. Nährstoffüberschuss, Temperatur und Wasserbewegung sollten bewertet werden. [1, 2]",
      },
      {
        h: "Geräte- und Reinigungswirkung trennen",
        p: "Der Einsatz einer Tauchpumpe und dreier Saugschläuche zeigt, dass die mechanische Reinigung zum berichteten Ergebnis beigetragen hat. Die Beobachtungen an Tag 2, 6 und 8 beziehen sich auf diese kombinierte Anwendung. Der Bericht gibt weder an, wie der Wert von 70 % gemessen wurde, noch welche Vergleichsbasis galt. Zudem ist eine bessere Wasserklarheit etwas anderes als ein Analyseergebnis zu Stickstoff, Phosphor oder mikrobiologischer Eignung.",
      },
      {
        h: "Modell- und Betriebsangaben vervollständigen",
        p: "Der Bericht verwendet die Namen SAT, Turbu-Flow und Water Vital. Gerätemodell, technische Kapazität und Herstellerangaben sollten erfasst werden, um die Beziehung zu den heutigen Water Vital-Produkten zu klären. Dass zwei Geräte in 4000 m³ eingesetzt wurden, belegt nicht, dass dieselbe Anzahl für einen anderen Teich oder ein anderes Modell ausreicht. Pumpenleistung, Einbauort, Tiefe, Betriebszeit und Nachbeobachtungszeitraum sollten ebenfalls ergänzt werden. Die Bewertung von Energie und Wartung muss Pumpen, Belüftung und Reinigungsgeräte ebenso umfassen wie das Gerätemodul.",
      },
      {
        h: "Die Rasenbeobachtung durch Analysen stützen",
        p: "Eine tiefere Grünfärbung des Rasens allein beweist keine verstärkte Auflösung von Mineralstoffen. Stickstoff und Eisen können die Rasenfarbe beeinflussen, und der pH-Wert des Bodens wirkt sich auf die Nährstoffverfügbarkeit aus. Wasser und Boden erfordern getrennte Messungen; mehr lösliche Nährstoffe in einem Teich können auch Algen ernähren. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Technische Quellen",
    planTitle: "Water Vital-Anwendungsplan für einen Teich",
    planIntro:
      "Der vorgeschlagene Ansatz besteht darin, Water Vital in einem gemessenen Versuch zu bewerten, kombiniert mit dem Entfernen der Algen und geringeren Nährstoffeinträgen. Ziele sind weniger Algen und verstopfte Pumpen, klareres Wasser und eine anhaltende Verbesserung. Vergleichsmessungen bewerten den Beitrag des Geräts.",
    plan: [
      {
        h: "Standortbewertung und Einbau",
        p: "Teichvolumen, Oberfläche, Tiefe, Wassereinträge, Algenmenge und Umwälzmenge erfassen. Das Inline-Modell an einem geeigneten Abschnitt einer vorhandenen Umwälzleitung beurteilen und dabei Durchfluss, Druck und Einbauvorgaben des Herstellers beachten. Prüfen, ob das Tankmodell für das Eintauchen geeignet ist und die nötige Kapazität hat. Es befestigen, ohne es im Bodensediment zu vergraben. Die Gerätezahl anhand dieser Standortdaten wählen.",
      },
      {
        h: "Algenentfernung und Vorbeugung gegen erneuten Befall",
        p: "Oberflächenalgen und zersetzendes Material mit geeigneten Sammel- oder Absauggeräten entfernen und die Mengen erfassen. Da die Zersetzung Sauerstoff verbraucht, den gelösten Sauerstoff überwachen und bei Bedarf für eine geeignete Belüftung sorgen. Stickstoff- und Phosphoreinträge aus Rasendünger, Entwässerung, Abwasser und organischen Resten untersuchen und verringern, um die Belastung zu senken, die neues Algenwachstum fördert. [1, 2, 4]",
      },
      {
        h: "Überwachung und Vergleich",
        p: "Fotos und Wassermessungen an denselben Stellen werden zu Beginn sowie an den Tagen 2, 6, 8, 14, 30 und 45 vorgeschlagen. Gelösten Sauerstoff und Temperatur anfangs häufiger überwachen, besonders früh am Morgen. Stehen zwei ähnliche, unabhängige Teiche zur Verfügung, dieselben Reinigungs- und Belüftungsmaßnahmen bei beiden anwenden und Water Vital nur in einem installieren, um seinen zusätzlichen Beitrag zu vergleichen. Die Überwachung eines einzelnen Teichs vor und nach der Maßnahme erfasst die Gesamtwirkung der kombinierten Eingriffe.",
      },
    ],
    planHead: ["Indikator", "Einheit oder Aufzeichnung", "Bewertung"],
    planRows: [
      ["Algenmenge", "Chlorophyll a oder eine geeignete Artenzählung", "Veränderung der Algenlast"],
      ["Klarheit", "Trübung und Secchi-Tiefe", "Veränderung der Sichtweite"],
      ["Sauerstoff", "Gelöster Sauerstoff, mg/L", "Aufrechterhaltung der Sauerstoffverhältnisse"],
      ["Nährstoffe", "Gesamtstickstoff und Gesamtphosphor, mg/L", "Veränderung der Nährstofflast"],
      ["Organische Belastung", "BSB und gegebenenfalls CSB, mg/L", "Verfolgung abbaubarer Stoffe"],
      ["Betrieb", "Menge entfernter Algen und Aufzeichnung von Verstopfungen", "Reinigungs- und Pumpenbedarf"],
    ],
    planOutro1:
      "Die Zeiten an Tag 2, 6 und 8 sind Beobachtungen aus dem ursprünglichen Bericht. Eine Dauer bis zum Abschluss oder ein Entfernungsprozentsatz für eine neue Anwendung sollte erst zugesagt werden, wenn die Messungen vor Ort abgeschlossen sind.",
    planOutro2:
      "Rasenfarbe, Dichte und Wurzelentwicklung gegenüber einer unabhängigen Vergleichsfläche mit denselben Bewässerungs- und Düngebedingungen beobachten. Ausgangs- und Folgeanalysen von Boden-pH, verfügbaren Nährstoffen und Nährstoffgehalten im Pflanzengewebe vergleichen.",
  },

  it: {
    eyebrow: "Caso applicativo · Corea del Sud",
    title: "Alghe verdi nei laghi di un campo da golf",
    lede: "Rapporto applicativo di Green Solutions: un campo da golf sudcoreano, laghi invasi dalle alghe e un'osservazione giorno per giorno.",
    greenAlt: "Un green da golf con la sua bandiera gialla, accanto a uno stagno",
    greenCaption: "Illustrazione: un green da golf.",
    clubTitle: "Il golf club",
    clubText:
      "Aperto nel 2000, il Gapyeong Benest Golf Club, classificato al primo posto, si trova in Corea del Sud. È un prestigioso campo Jack Nicklaus Signature. La bellezza dei suoi green ondulati è mantenuta grazie all'irrigazione con l'acqua di diversi laghi e stagni.",
    problemTitle: "Il problema delle alghe",
    problemIntro:
      "I laghi erano al tempo stesso un bell'elemento del paesaggio del campo e una riserva d'acqua necessaria per l'irrigazione. La crescita eccessiva di alghe causava diversi problemi:",
    problems: [
      "Un aumento dei solidi sospesi totali (SST) e una diminuzione della domanda biochimica di ossigeno (BOD), che rendevano l'acqua malsana.¹",
      "Livelli di ossigeno più bassi, perché l'acqua si impoveriva lentamente di ossigeno.",
      "Un ombreggiamento che ostacolava la crescita delle piante acquatiche desiderabili.",
      "L'intasamento delle pompe dell'acqua.",
      "Cattivi odori causati da alghe morte o in via di morte.",
      "Un aspetto poco attraente.",
    ],
    problemOutro: "I problemi erano aggravati da temperature più alte e da piogge inferiori al normale.",
    controlsTitle: "I metodi di controllo abituali",
    controls: [
      "In passato erano stati usati mezzi chimici: erbicidi e alghicidi, solfato di rame e candeggina. Questi metodi, però, avevano i loro effetti indesiderati.",
      "Le fontane usate per ossigenare e rimescolare l'acqua hanno aumentato l'attività biologica naturale e ridotto un poco la crescita delle alghe.",
      "La rimozione meccanica delle alghe richiedeva molta manodopera.",
    ],
    solutionTitle: "La soluzione Water Vital® contro le alghe",
    solutionText1:
      "L'uso di prodotti organici non tossici in laghi e stagni è diventato molto diffuso negli ultimi tempi. È una soluzione naturale che non richiede erbicidi né alghicidi; comporta però costi continui e una manutenzione regolare. Per questo abbiamo scelto un'alternativa non tossica e interamente naturale, senza manutenzione regolare, senza energia e senza materiali di consumo.",
    solutionText2:
      "La soluzione era molto semplice. Nell'approccio Water Vital® sono state installate nel lago due unità SAT «Softer Water Conditioner», come trattamento catalitico dell'acqua senza elettricità né prodotti chimici. Secondo il rapporto originale, questo processo dissocia i legami chimici in un'acqua molto mineralizzata. In questo modo si eliminano i nutrienti di cui si nutrono le alghe, e le alghe muoiono rapidamente. Le alghe vengono poi rimosse dal lago e la bellezza naturale dell'acqua limpida torna presto.²",
    stagesTitle: "Applicazione e osservazione",
    stages: [
      {
        label: "Installazione",
        text: "Posa di due unità Turbu-Flow «Softer Water Conditioner» nel lago n. 5, con un volume di 4000 m³. Sono state usate anche una pompa sommersa e tre tubi di aspirazione per rimuovere le alghe morte.",
        alt: "Due tecnici installano l'apparecchio su un telaio galleggiante, a bordo lago",
      },
      {
        label: "Giorno 2",
        text: "Dopo soli due giorni, le alghe si stanno decomponendo e muoiono.",
        alt: "Acqua verde con grumi di alghe in decomposizione",
      },
      {
        label: "Giorno 6",
        text: "Il lago dopo sei giorni: il 70% delle alghe è morto ed è stato rimosso.",
        alt: "Superficie verde del lago sei giorni dopo l'installazione",
      },
      {
        label: "Giorno 8",
        text: "All'ottavo giorno il lago è libero dalle alghe e l'acqua è cristallina. Si noti che il tubo si vede senza ostacoli. Una coppia di germani reali è tornata al lago, un buon segno per il futuro.",
        alt: "Acqua limpida del lago, con un tubo ben visibile",
      },
    ],
    resultsTitle: "I risultati",
    resultsText:
      "Come si può vedere, i risultati parlano da soli. Un lago un tempo fortemente inquinato da fioriture algali è stato riportato alle condizioni originali in pochissimo tempo. Uno dei «Water Restorer» Water Vital® resta nel lago per garantire un trattamento continuo dell'acqua.",
    lakeAlt: "Veduta d'insieme del lago dopo l'applicazione",
    lakeCaption: "Il lago al termine dell'applicazione (immagine elaborata al computer a partire dalla foto originale).",
    turfTitle: "Osservazione di campo aggiuntiva sul tappeto erboso irrigato",
    turfText:
      "Un'osservazione di campo aggiuntiva ha riferito che il tappeto erboso irrigato con acqua trattata con Water Vital appariva più sano e assumeva un verde più intenso. Questo miglioramento potrebbe essere associato a una maggiore disponibilità dei minerali del suolo per le piante e a un maggiore assorbimento da parte delle radici. Si raccomandano analisi del suolo e delle piante per verificare il legame proposto con la disponibilità e l'assorbimento dei minerali.",
    note1:
      "¹ Il rapporto originale indica una diminuzione del BOD. BOD e ossigeno disciolto sono misure diverse; la spiegazione tecnica è nella valutazione più avanti.",
    note2:
      "² Il meccanismo e i risultati sono affermazioni del rapporto originale. L'effetto dell'apparecchio e quello della pulizia con pompa non sono stati misurati separatamente. Vedere la valutazione tecnica più avanti.",
    photoCredit: "Fotografie: rapporto applicativo di Green Solutions.",
    assessTitle: "Valutazione tecnica e informazioni mancanti",
    assessSubtitle: "Valutazione integrativa del rapporto originale",
    assessIntro:
      "Il rapporto descrive un miglioramento visibile accompagnato dalla rimozione meccanica delle alghe. Completare i punti seguenti nel preparare una nuova applicazione di Water Vital in uno stagno consentirà di valutare il risultato su basi solide.",
    assess: [
      {
        h: "Distinguere il BOD dall'ossigeno disciolto",
        p: "Il rapporto originale cita una diminuzione del BOD tra le cause di un'acqua malsana. Il BOD descrive l'ossigeno consumato durante la decomposizione biologica della materia organica; l'ossigeno disciolto descrive l'ossigeno presente nell'acqua. Un calo del BOD non significa, di per sé, carenza di ossigeno. L'autore potrebbe aver voluto parlare di una diminuzione dell'ossigeno disciolto. Per una correzione definitiva servono i dati analitici originali. [3]",
      },
      {
        h: "Dimostrare la rimozione dei nutrienti",
        p: "La spiegazione secondo cui la dissociazione dei legami chimici elimina i nutrienti delle alghe non è sostenuta, nel rapporto, da analisi di azoto e fosforo. Un cambiamento nei legami chimici o nelle forme minerali non dimostra, da solo, che azoto e fosforo totali siano stati rimossi dall'acqua. Una nuova applicazione dovrebbe registrare gli apporti di nutrienti, le misure dell'acqua e la quantità di alghe rimossa. Eccesso di nutrienti, temperatura e movimento dell'acqua dovrebbero essere valutati. [1, 2]",
      },
      {
        h: "Separare l'effetto dell'apparecchio da quello della pulizia",
        p: "L'uso di una pompa sommersa e di tre tubi di aspirazione mostra che la pulizia meccanica ha contribuito al risultato riportato. Le osservazioni dei giorni 2, 6 e 8 riguardano questa applicazione combinata. Il rapporto non precisa come sia stato misurato il valore del 70% né quale fosse la base di confronto. Inoltre, una maggiore limpidezza non equivale a un risultato analitico per azoto, fosforo o idoneità microbiologica.",
      },
      {
        h: "Completare i dati su modello e funzionamento",
        p: "Il rapporto usa i nomi SAT, Turbu-Flow e Water Vital. Occorre registrare il modello dell'apparecchio, la capacità tecnica e i dati del produttore per stabilire il rapporto con gli attuali prodotti Water Vital. L'uso di due apparecchi in 4000 m³ non stabilisce che lo stesso numero sia sufficiente per un altro stagno o un altro modello. Andrebbero aggiunti anche portata della pompa, posizione di installazione, profondità, tempo di funzionamento e periodo di monitoraggio. La valutazione di energia e manutenzione deve comprendere pompe, aerazione e attrezzature di pulizia, oltre al modulo dell'apparecchio.",
      },
      {
        h: "Sostenere con analisi l'osservazione sul tappeto erboso",
        p: "Un colore verde più intenso del tappeto erboso non prova da solo una maggiore dissoluzione dei minerali. Azoto e ferro possono influire sul colore del manto, mentre il pH del suolo incide sulla disponibilità dei nutrienti. Acqua e suolo richiedono misure separate; un aumento dei nutrienti solubili in uno stagno può anche nutrire le alghe. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Fonti tecniche",
    planTitle: "Piano di applicazione di Water Vital in uno stagno",
    planIntro:
      "L'approccio proposto consiste nel valutare Water Vital in una prova misurata, combinata con la rimozione delle alghe e la riduzione degli apporti di nutrienti. Gli obiettivi sono meno alghe e meno intasamento delle pompe, una migliore limpidezza dell'acqua e un miglioramento duraturo. Misure comparative permettono di valutare il contributo dell'apparecchio.",
    plan: [
      {
        h: "Valutazione del sito e installazione",
        p: "Registrare volume dello stagno, superficie, profondità, apporti d'acqua, abbondanza di alghe e portata di ricircolo. Valutare il modello in linea su un tratto adatto di una condotta di ricircolo esistente, rispettando portata, pressione e requisiti di installazione del produttore. Confermare che il modello a serbatoio sia idoneo all'immersione e ne abbia la capacità. Fissarlo senza interrarlo nei sedimenti del fondo. Scegliere il numero di apparecchi in base a questi dati del sito.",
      },
      {
        h: "Rimozione delle alghe e prevenzione delle recidive",
        p: "Rimuovere le alghe di superficie e il materiale in decomposizione con attrezzature di raccolta o aspirazione adatte, annotando le quantità. Poiché la decomposizione consuma ossigeno, monitorare l'ossigeno disciolto e prevedere un'aerazione adeguata, se necessario. Individuare e ridurre gli apporti di azoto e fosforo provenienti da concime del tappeto erboso, drenaggio, acque reflue e detriti organici, per intervenire sul carico che favorisce la ricomparsa delle alghe. [1, 2, 4]",
      },
      {
        h: "Monitoraggio e confronto",
        p: "Si propongono fotografie e misure dell'acqua negli stessi punti all'inizio e nei giorni 2, 6, 8, 14, 30 e 45. Monitorare ossigeno disciolto e temperatura più spesso all'inizio, soprattutto la mattina presto. Se sono disponibili due stagni simili e indipendenti, applicare a entrambi le stesse pratiche di pulizia e aerazione e installare Water Vital in uno solo, per confrontarne il contributo aggiuntivo. Il monitoraggio prima e dopo di un solo stagno registra l'effetto complessivo degli interventi combinati.",
      },
    ],
    planHead: ["Indicatore", "Unità o registrazione", "Valutazione"],
    planRows: [
      ["Abbondanza di alghe", "Clorofilla a o un conteggio delle specie adeguato", "Variazione del carico di alghe"],
      ["Limpidezza", "Torbidità e profondità del disco di Secchi", "Variazione della visibilità"],
      ["Ossigeno", "Ossigeno disciolto, mg/L", "Mantenimento delle condizioni di ossigeno"],
      ["Nutrienti", "Azoto totale e fosforo totale, mg/L", "Variazione del carico di nutrienti"],
      ["Carico organico", "BOD e, se rilevante, COD, mg/L", "Monitoraggio del materiale degradabile"],
      ["Esercizio", "Quantità di alghe rimosse e registro degli intasamenti", "Esigenze di pulizia e di pompaggio"],
    ],
    planOutro1:
      "I tempi dei giorni 2, 6 e 8 sono osservazioni del rapporto originale. Un tempo di completamento o una percentuale di rimozione per una nuova applicazione devono essere dichiarati solo dopo aver completato le misure in sito.",
    planOutro2:
      "Monitorare colore, densità e sviluppo radicale del tappeto erboso rispetto a un'area di confronto indipendente con le stesse condizioni di irrigazione e concimazione. Confrontare le analisi iniziali e di controllo di pH del suolo, nutrienti disponibili e concentrazioni di nutrienti nei tessuti vegetali.",
  },

  ca: {
    eyebrow: "Cas d'aplicació · Corea del Sud",
    title: "Algues verdes als llacs d'un camp de golf",
    lede: "Informe d'aplicació de Green Solutions: un camp de golf sud-coreà, llacs envaïts per les algues i una observació dia a dia.",
    greenAlt: "Un green de golf amb la seva bandera groga, vora un estany",
    greenCaption: "Il·lustració: un green de golf.",
    clubTitle: "El club de golf",
    clubText:
      "Inaugurat l'any 2000, el Gapyeong Benest Golf Club, classificat en primer lloc, es troba a Corea del Sud. És un prestigiós camp Jack Nicklaus Signature. La bellesa dels seus greens ondulats es manté gràcies al reg amb aigua de diversos llacs i estanys.",
    problemTitle: "El problema de les algues",
    problemIntro:
      "Els llacs eren alhora un bell element del paisatge del camp i una reserva d'aigua necessària per al reg. El creixement excessiu d'algues causava diversos problemes:",
    problems: [
      "Un augment dels sòlids en suspensió totals (SST) i una disminució de la demanda bioquímica d'oxigen (DBO), que feien l'aigua poc saludable.¹",
      "Nivells d'oxigen més baixos, a mesura que l'aigua s'anava empobrint d'oxigen.",
      "Una ombra que frenava el creixement de les plantes aquàtiques desitjables.",
      "L'obstrucció de les bombes d'aigua.",
      "Males olors causades per algues mortes o moribundes.",
      "Un aspecte poc atractiu.",
    ],
    problemOutro: "Els problemes s'agreujaven amb temperatures més altes i pluges inferiors a l'habitual.",
    controlsTitle: "Els mètodes habituals de control",
    controls: [
      "En el passat s'havien utilitzat mitjans químics: herbicides i alguicides, sulfat de coure i lleixiu. Tanmateix, aquests mètodes tenien els seus propis efectes indesitjables.",
      "Les fonts per airejar i barrejar l'aigua van augmentar l'activitat biològica natural i van reduir una mica el creixement de les algues.",
      "L'eliminació mecànica de les algues exigia molta mà d'obra.",
    ],
    solutionTitle: "La solució Water Vital® contra les algues",
    solutionText1:
      "L'ús de productes orgànics no tòxics en llacs i estanys s'ha tornat molt popular darrerament. És una solució natural que no requereix herbicides ni alguicides; tanmateix, comporta costos continus i un manteniment regular. Per això vam optar per una alternativa no tòxica i totalment natural, sense manteniment regular, sense energia i sense consumibles.",
    solutionText2:
      "La solució era molt senzilla. En l'enfocament Water Vital®, es van instal·lar al llac dues unitats SAT «Softer Water Conditioner» com a tractament catalític de l'aigua, sense electricitat ni productes químics. Segons l'informe d'origen, aquest procés dissocia els enllaços químics d'una aigua molt mineralitzada. Així s'eliminen els nutrients de què s'alimenten les algues, i les algues moren ràpidament. Després es retiren del llac, i la bellesa natural de l'aigua clara torna aviat.²",
    stagesTitle: "Aplicació i observació",
    stages: [
      {
        label: "Instal·lació",
        text: "Càrrega de dues unitats Turbu-Flow «Softer Water Conditioner» al llac núm. 5, d'un volum de 4000 m³. També es van utilitzar una bomba submergible i tres mànegues d'aspiració per retirar les algues mortes.",
        alt: "Dos tècnics instal·len l'equip en un bastidor flotant, a la vora del llac",
      },
      {
        label: "Dia 2",
        text: "Després de només dos dies, les algues es descomponen i moren.",
        alt: "Aigua verda amb grumolls d'algues en descomposició",
      },
      {
        label: "Dia 6",
        text: "El llac després de sis dies: el 70 % de les algues han mort i s'han retirat.",
        alt: "Superfície verda del llac sis dies després de la instal·lació",
      },
      {
        label: "Dia 8",
        text: "Al vuitè dia, el llac és lliure d'algues i l'aigua és cristal·lina. Observeu que la canonada es veu sense obstrucció. Una parella d'ànecs collverds ha tornat al llac, un bon senyal per al futur.",
        alt: "Aigua clara del llac, amb una canonada ben visible",
      },
    ],
    resultsTitle: "Els resultats",
    resultsText:
      "Com es pot veure, els resultats parlen per si sols. Un llac abans molt contaminat per proliferacions d'algues ha recuperat el seu estat original en molt poc temps. Un dels «Water Restorers» de Water Vital® roman al llac per garantir un tractament continu de l'aigua.",
    lakeAlt: "Vista general del llac després de l'aplicació",
    lakeCaption: "El llac al final de l'aplicació (imatge retocada per ordinador a partir de la foto original).",
    turfTitle: "Observació de camp addicional sobre la gespa regada",
    turfText:
      "Una observació de camp addicional va indicar que la gespa regada amb aigua tractada amb Water Vital semblava més sana i adquiria un verd més intens. Aquesta millora podria estar associada a una major disponibilitat dels minerals del sòl per a les plantes i a una major absorció per part de les arrels. Es recomanen anàlisis de sòl i de plantes per verificar la relació proposada amb la disponibilitat i l'absorció de minerals.",
    note1:
      "¹ L'informe d'origen indica una disminució de la DBO. La DBO i l'oxigen dissolt són mesures diferents; l'explicació tècnica figura a l'avaluació més avall.",
    note2:
      "² El mecanisme i els resultats són afirmacions de l'informe d'origen. L'efecte de l'aparell i el de la neteja amb bomba no es van mesurar per separat. Vegeu l'avaluació tècnica més avall.",
    photoCredit: "Fotografies: informe d'aplicació de Green Solutions.",
    assessTitle: "Avaluació tècnica i informació que falta",
    assessSubtitle: "Avaluació complementària de l'informe d'origen",
    assessIntro:
      "L'informe descriu una millora visible acompanyada d'una retirada mecànica de les algues. Completar els punts següents en preparar una nova aplicació de Water Vital en un estany permetrà avaluar el resultat sobre bases sòlides.",
    assess: [
      {
        h: "Distingir la DBO de l'oxigen dissolt",
        p: "L'informe d'origen cita una disminució de la DBO entre les causes d'una aigua poc saludable. La DBO descriu l'oxigen consumit durant la descomposició biològica de la matèria orgànica; l'oxigen dissolt descriu l'oxigen present a l'aigua. Una caiguda de la DBO no significa, per si sola, una manca d'oxigen. És possible que l'autor volgués parlar d'una disminució de l'oxigen dissolt. Calen les dades analítiques originals per a una correcció definitiva. [3]",
      },
      {
        h: "Demostrar l'eliminació de nutrients",
        p: "L'explicació que la dissociació dels enllaços químics elimina els nutrients de les algues no està recolzada, a l'informe, per anàlisis de nitrogen i fòsfor. Un canvi en els enllaços químics o en les formes minerals no demostra per si sol que el nitrogen i el fòsfor totals s'hagin eliminat de l'aigua. Una nova aplicació hauria de registrar els aportaments de nutrients, les mesures de l'aigua i la quantitat d'algues retirada. Caldria avaluar l'excés de nutrients, la temperatura i el moviment de l'aigua. [1, 2]",
      },
      {
        h: "Separar l'efecte de l'aparell del de la neteja",
        p: "L'ús d'una bomba submergible i de tres mànegues d'aspiració mostra que la neteja mecànica va contribuir al resultat indicat. Les observacions dels dies 2, 6 i 8 corresponen a aquesta aplicació combinada. L'informe no especifica com es va mesurar el valor del 70 % ni amb quina referència es va comparar. A més, una major claredat de l'aigua no equival a un resultat analític de nitrogen, fòsfor o aptitud microbiològica.",
      },
      {
        h: "Completar el model i les dades de funcionament",
        p: "L'informe utilitza els noms SAT, Turbu-Flow i Water Vital. Convé registrar el model de l'aparell, la seva capacitat tècnica i les dades del fabricant per establir-ne la relació amb els productes Water Vital actuals. Utilitzar dos aparells en 4000 m³ no estableix que el mateix nombre n'hi hagi prou per a un altre estany o un altre model. També caldria afegir-hi el cabal de la bomba, el lloc d'instal·lació, la profunditat, el temps de funcionament i el període de seguiment. L'avaluació de l'energia i del manteniment ha de comprendre les bombes, l'aireació i l'equip de neteja, a més del mòdul de l'aparell.",
      },
      {
        h: "Donar suport amb anàlisis a l'observació sobre la gespa",
        p: "Una gespa d'un verd més intens no prova per si sola una major dissolució de minerals. El nitrogen i el ferro poden influir en el color de la gespa, i el pH del sòl afecta la disponibilitat de nutrients. L'aigua i el sòl requereixen mesures separades; un augment de nutrients solubles en un estany també pot alimentar les algues. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Fonts tècniques",
    planTitle: "Pla d'aplicació de Water Vital en un estany",
    planIntro:
      "L'enfocament proposat consisteix a avaluar Water Vital en un assaig mesurat, combinat amb la retirada d'algues i la reducció dels aportaments de nutrients. Els objectius són menys algues i menys obstrucció de les bombes, una major claredat de l'aigua i una millora sostinguda. Les mesures comparatives permeten valorar la contribució de l'aparell.",
    plan: [
      {
        h: "Avaluació del lloc i instal·lació",
        p: "Registrar el volum de l'estany, la superfície, la profunditat, els aportaments d'aigua, l'abundància d'algues i el cabal de circulació. Avaluar el model en línia en un tram adequat d'una canonada de circulació existent, respectant el cabal, la pressió i els requisits d'instal·lació del fabricant. Confirmar que el model de dipòsit és apte per a la immersió i en té la capacitat. Fixar-lo sense enterrar-lo en els sediments del fons. Triar el nombre d'aparells a partir d'aquestes dades del lloc.",
      },
      {
        h: "Retirada d'algues i prevenció de la reaparició",
        p: "Retirar les algues de superfície i el material en descomposició amb un equip de recollida o d'aspiració adequat, i anotar-ne les quantitats. Com que la descomposició consumeix oxigen, vigilar l'oxigen dissolt i preveure una aireació adequada si cal. Investigar i reduir els aportaments de nitrogen i fòsfor procedents de l'adob de la gespa, el drenatge, les aigües residuals i les restes orgàniques, per actuar sobre la càrrega que afavoreix la reaparició de les algues. [1, 2, 4]",
      },
      {
        h: "Seguiment i comparació",
        p: "Es proposa fer fotografies i mesures de l'aigua als mateixos llocs a l'inici i els dies 2, 6, 8, 14, 30 i 45. Controlar l'oxigen dissolt i la temperatura amb més freqüència al començament, sobretot a primera hora del matí. Si es disposa de dos estanys semblants i independents, aplicar les mateixes pràctiques de neteja i d'aireació a tots dos i instal·lar Water Vital només en un, per comparar-ne la contribució addicional. El seguiment abans i després d'un sol estany registra l'efecte global de les intervencions combinades.",
      },
    ],
    planHead: ["Indicador", "Unitat o registre", "Valoració"],
    planRows: [
      ["Abundància d'algues", "Clorofil·la a o un recompte d'espècies adequat", "Variació de la càrrega d'algues"],
      ["Claredat", "Terbolesa i profunditat de Secchi", "Variació de la visibilitat"],
      ["Oxigen", "Oxigen dissolt, mg/L", "Manteniment de les condicions d'oxigen"],
      ["Nutrients", "Nitrogen total i fòsfor total, mg/L", "Variació de la càrrega de nutrients"],
      ["Càrrega orgànica", "DBO i, si escau, DQO, mg/L", "Seguiment de la matèria degradable"],
      ["Explotació", "Quantitat d'algues retirada i registre d'obstruccions", "Necessitats de neteja i de bombament"],
    ],
    planOutro1:
      "Els temps dels dies 2, 6 i 8 són observacions de l'informe d'origen. Un termini d'acabament o un percentatge de retirada per a una nova aplicació només s'ha de comprometre un cop fetes les mesures al lloc.",
    planOutro2:
      "Controlar el color, la densitat i el desenvolupament radicular de la gespa respecte d'una zona de comparació independent amb les mateixes condicions de reg i fertilització. Comparar les anàlisis inicials i de seguiment del pH del sòl, dels nutrients disponibles i de les concentracions de nutrients als teixits vegetals.",
  },

  pl: {
    eyebrow: "Przypadek zastosowania · Korea Południowa",
    title: "Zielone glony w jeziorach pola golfowego",
    lede: "Raport z zastosowania Green Solutions: południowokoreańskie pole golfowe, jeziora opanowane przez glony i obserwacja dzień po dniu.",
    greenAlt: "Green pola golfowego z żółtą flagą, nad stawem",
    greenCaption: "Ilustracja: green pola golfowego.",
    clubTitle: "Klub golfowy",
    clubText:
      "Otwarty w 2000 roku Gapyeong Benest Golf Club, sklasyfikowany jako numer jeden, znajduje się w Korei Południowej. To prestiżowe pole Jack Nicklaus Signature. Piękno jego pofałdowanych greenów utrzymuje się dzięki nawadnianiu wodą z kilku jezior i stawów.",
    problemTitle: "Problem glonów",
    problemIntro:
      "Jeziora były zarazem pięknym elementem krajobrazu pola i niezbędnym zbiornikiem wody do nawadniania. Nadmierny rozwój glonów powodował kilka problemów:",
    problems: [
      "Wzrost ogólnej zawiesiny (TSS) i spadek biochemicznego zapotrzebowania tlenu (BZT), przez co woda stawała się niezdrowa.¹",
      "Niższy poziom tlenu, w miarę jak woda stopniowo ubożała w tlen.",
      "Zacienienie, które hamowało wzrost pożądanych roślin wodnych.",
      "Zatykanie pomp wodnych.",
      "Nieprzyjemny zapach martwych lub obumierających glonów.",
      "Nieestetyczny wygląd.",
    ],
    problemOutro: "Problemy nasilały się przy wyższych temperaturach i mniejszych niż zwykle opadach.",
    controlsTitle: "Dotychczasowe sposoby zwalczania glonów",
    controls: [
      "W przeszłości stosowano środki chemiczne: herbicydy i algicydy, siarczan miedzi oraz wybielacz chlorowy. Metody te miały jednak własne niepożądane skutki.",
      "Fontanny napowietrzające i mieszające wodę zwiększyły naturalną aktywność biologiczną i nieco ograniczyły rozwój glonów.",
      "Mechaniczne usuwanie glonów wymagało dużego nakładu pracy.",
    ],
    solutionTitle: "Rozwiązanie Water Vital® przeciw glonom",
    solutionText1:
      "Stosowanie nietoksycznych produktów organicznych w jeziorach i stawach stało się ostatnio bardzo popularne. To naturalne rozwiązanie, które nie wymaga herbicydów ani algicydów; wiąże się jednak z bieżącymi kosztami i regularną konserwacją. Dlatego wybraliśmy nietoksyczną i całkowicie naturalną alternatywę, niewymagającą regularnej konserwacji, energii ani materiałów eksploatacyjnych.",
    solutionText2:
      "Rozwiązanie było bardzo proste. W podejściu Water Vital® w jeziorze zainstalowano dwie jednostki SAT „Softer Water Conditioner” jako nieelektryczne i niechemiczne katalityczne uzdatnianie wody. Według pierwotnego raportu proces ten rozrywa wiązania chemiczne w silnie zmineralizowanej wodzie. Usuwa to składniki odżywcze, którymi żywią się glony, a glony szybko obumierają. Następnie glony są usuwane z jeziora i wkrótce wraca naturalne piękno czystej wody.²",
    stagesTitle: "Zastosowanie i obserwacja",
    stages: [
      {
        label: "Montaż",
        text: "Wprowadzanie dwóch jednostek Turbu-Flow „Softer Water Conditioner” do jeziora nr 5 o objętości 4000 m³. Do usuwania martwych glonów użyto też pompy zatapialnej i trzech węży ssawnych.",
        alt: "Dwóch techników montuje urządzenie na pływającej ramie przy brzegu jeziora",
      },
      {
        label: "Dzień 2",
        text: "Już po dwóch dniach glony rozkładają się i obumierają.",
        alt: "Zielona woda ze skupiskami rozkładających się glonów",
      },
      {
        label: "Dzień 6",
        text: "Jezioro po sześciu dniach: 70% glonów obumarło i zostało usuniętych.",
        alt: "Zielona powierzchnia jeziora sześć dni po montażu",
      },
      {
        label: "Dzień 8",
        text: "W ósmym dniu jezioro jest wolne od glonów, a woda jest krystalicznie czysta. Warto zauważyć, że rurę widać bez przeszkód. Do jeziora wróciła para kaczek krzyżówek – dobry znak na przyszłość.",
        alt: "Przejrzysta woda jeziora z dobrze widoczną rurą",
      },
    ],
    resultsTitle: "Wyniki",
    resultsText:
      "Jak widać, wyniki mówią same za siebie. Jezioro, które było silnie zanieczyszczone zakwitami glonów, w bardzo krótkim czasie wróciło do pierwotnego stanu. Jeden z „Water Restorers” Water Vital® pozostaje w jeziorze, zapewniając ciągłe uzdatnianie wody.",
    lakeAlt: "Widok ogólny jeziora po zastosowaniu",
    lakeCaption: "Jezioro po zakończeniu zastosowania (obraz przetworzony komputerowo na podstawie oryginalnego zdjęcia).",
    turfTitle: "Dodatkowa obserwacja polowa na nawadnianej murawie",
    turfText:
      "Dodatkowa obserwacja polowa wykazała, że murawa nawadniana wodą uzdatnianą Water Vital wyglądała zdrowiej i nabierała głębszej zieleni. Poprawa ta może wiązać się z większą dostępnością minerałów glebowych dla roślin i większym ich pobieraniem przez korzenie. Zaleca się analizy gleby i roślin, aby zweryfikować proponowany związek z dostępnością i pobieraniem minerałów.",
    note1:
      "¹ Pierwotny raport podaje spadek BZT. BZT i tlen rozpuszczony to różne pomiary; wyjaśnienie techniczne znajduje się w ocenie poniżej.",
    note2:
      "² Mechanizm i wyniki to twierdzenia pierwotnego raportu. Działania urządzenia i czyszczenia wspomaganego pompą nie mierzono osobno. Zob. ocenę techniczną poniżej.",
    photoCredit: "Zdjęcia: raport z zastosowania Green Solutions.",
    assessTitle: "Ocena techniczna i brakujące informacje",
    assessSubtitle: "Uzupełniająca ocena pierwotnego raportu",
    assessIntro:
      "Raport opisuje widoczną poprawę, której towarzyszyło mechaniczne usuwanie glonów. Uzupełnienie poniższych danych przy przygotowaniu nowego zastosowania Water Vital w stawie pozwoli rzetelnie ocenić wynik.",
    assess: [
      {
        h: "Odróżnienie BZT od tlenu rozpuszczonego",
        p: "Pierwotny raport wymienia spadek BZT wśród przyczyn niezdrowej wody. BZT opisuje tlen zużywany podczas biologicznego rozkładu materii organicznej; tlen rozpuszczony opisuje tlen obecny w wodzie. Spadek BZT sam w sobie nie oznacza niedoboru tlenu. Autor mógł mieć na myśli spadek tlenu rozpuszczonego. Do ostatecznej korekty potrzebne są pierwotne dane analityczne. [3]",
      },
      {
        h: "Wykazanie usuwania składników odżywczych",
        p: "Wyjaśnienie, że rozerwanie wiązań chemicznych usuwa składniki odżywcze glonów, nie jest w raporcie poparte analizami azotu i fosforu. Zmiana wiązań chemicznych lub form mineralnych sama w sobie nie dowodzi usunięcia z wody azotu i fosforu ogólnego. Nowe zastosowanie powinno rejestrować dopływ składników odżywczych, pomiary wody i ilość usuniętych glonów. Należy ocenić nadmiar składników odżywczych, temperaturę i ruch wody. [1, 2]",
      },
      {
        h: "Rozdzielenie działania urządzenia i czyszczenia",
        p: "Użycie pompy zatapialnej i trzech węży ssawnych pokazuje, że czyszczenie mechaniczne przyczyniło się do podanego wyniku. Obserwacje z dni 2, 6 i 8 dotyczą tego połączonego zastosowania. Raport nie precyzuje, jak zmierzono wartość 70% ani jaka była baza porównawcza. Poprawa przejrzystości wody to także coś innego niż wynik analityczny dla azotu, fosforu czy przydatności mikrobiologicznej.",
      },
      {
        h: "Uzupełnienie danych o modelu i eksploatacji",
        p: "Raport używa nazw SAT, Turbu-Flow i Water Vital. Należy zapisać model urządzenia, jego wydajność techniczną i dane producenta, aby ustalić jego związek z obecnymi produktami Water Vital. Użycie dwóch urządzeń w 4000 m³ nie dowodzi, że ta sama liczba wystarczy dla innego stawu lub modelu. Należy też dodać wydajność pompy, miejsce montażu, głębokość, czas pracy i okres obserwacji. Ocena zużycia energii i konserwacji powinna obejmować pompy, napowietrzanie i sprzęt czyszczący, a nie tylko moduł urządzenia.",
      },
      {
        h: "Poparcie obserwacji murawy analizami",
        p: "Głębsza zieleń murawy sama nie dowodzi zwiększonego rozpuszczania minerałów. Azot i żelazo mogą wpływać na kolor murawy, a odczyn gleby wpływa na dostępność składników odżywczych. Woda i gleba wymagają osobnych pomiarów; większa ilość rozpuszczalnych składników odżywczych w stawie może też żywić glony. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Źródła techniczne",
    planTitle: "Plan zastosowania Water Vital w stawie",
    planIntro:
      "Proponowane podejście polega na ocenie Water Vital w mierzonej próbie, połączonej z usuwaniem glonów i ograniczeniem dopływu składników odżywczych. Celem jest mniej glonów i zatykania pomp, lepsza przejrzystość wody i trwała poprawa. Pomiary porównawcze pozwalają ocenić wkład urządzenia.",
    plan: [
      {
        h: "Ocena miejsca i montaż",
        p: "Zapisać objętość stawu, powierzchnię, głębokość, dopływy wody, ilość glonów i przepływ cyrkulacyjny. Ocenić model liniowy na odpowiednim odcinku istniejącego przewodu cyrkulacyjnego, z uwzględnieniem przepływu, ciśnienia i wymagań montażowych producenta. Potwierdzić, że model zbiornikowy nadaje się do zanurzenia i ma odpowiednią wydajność. Zamocować go bez zagrzebywania w osadzie dennym. Dobrać liczbę urządzeń na podstawie tych danych o miejscu.",
      },
      {
        h: "Usuwanie glonów i zapobieganie nawrotom",
        p: "Usunąć glony powierzchniowe i rozkładającą się materię odpowiednim sprzętem do zbierania lub odsysania i zapisać ilości. Ponieważ rozkład zużywa tlen, monitorować tlen rozpuszczony i w razie potrzeby zapewnić odpowiednie napowietrzanie. Zbadać i ograniczyć dopływ azotu i fosforu z nawozów murawy, drenażu, ścieków i odpadów organicznych, aby zmniejszyć ładunek sprzyjający ponownemu rozwojowi glonów. [1, 2, 4]",
      },
      {
        h: "Monitorowanie i porównanie",
        p: "Proponuje się zdjęcia i pomiary wody w tych samych miejscach na początku oraz w dniach 2, 6, 8, 14, 30 i 45. Tlen rozpuszczony i temperaturę monitorować początkowo częściej, zwłaszcza wcześnie rano. Jeśli dostępne są dwa podobne, niezależne stawy, zastosować w obu te same praktyki czyszczenia i napowietrzania, a Water Vital zainstalować tylko w jednym, aby porównać jego dodatkowy wkład. Monitorowanie jednego stawu przed i po rejestruje łączny skutek połączonych działań.",
      },
    ],
    planHead: ["Wskaźnik", "Jednostka lub zapis", "Ocena"],
    planRows: [
      ["Ilość glonów", "Chlorofil a lub odpowiednie zliczanie gatunków", "Zmiana ładunku glonów"],
      ["Przejrzystość", "Mętność i głębokość Secchiego", "Zmiana widoczności"],
      ["Tlen", "Tlen rozpuszczony, mg/L", "Utrzymanie warunków tlenowych"],
      ["Składniki odżywcze", "Azot ogólny i fosfor ogólny, mg/L", "Zmiana ładunku składników odżywczych"],
      ["Ładunek organiczny", "BZT i, w razie potrzeby, ChZT, mg/L", "Śledzenie materii ulegającej rozkładowi"],
      ["Eksploatacja", "Ilość usuniętych glonów i zapis zatykania", "Potrzeby czyszczenia i pompowania"],
    ],
    planOutro1:
      "Czasy z dni 2, 6 i 8 to obserwacje z pierwotnego raportu. Czas zakończenia lub odsetek usunięcia dla nowego zastosowania należy deklarować dopiero po zakończeniu pomiarów na miejscu.",
    planOutro2:
      "Monitorować kolor, gęstość i rozwój korzeni murawy w porównaniu z niezależnym obszarem porównawczym o tych samych warunkach nawadniania i nawożenia. Porównać analizy wyjściowe i kontrolne odczynu gleby, dostępnych składników odżywczych i stężeń składników odżywczych w tkankach roślin.",
  },

  hr: {
    eyebrow: "Primjer primjene · Južna Koreja",
    title: "Zelene alge u jezerima golf terena",
    lede: "Izvješće o primjeni tvrtke Green Solutions: južnokorejski golf teren, jezera obrasla algama i promatranje iz dana u dan.",
    greenAlt: "Green golf terena sa žutom zastavicom, uz ribnjak",
    greenCaption: "Ilustracija: green golf terena.",
    clubTitle: "Golf klub",
    clubText:
      "Gapyeong Benest Golf Club, otvoren 2000. godine i rangiran kao broj jedan, nalazi se u Južnoj Koreji. To je ugledan teren Jack Nicklaus Signature. Ljepota njegovih valovitih greenova održava se navodnjavanjem iz nekoliko jezera i ribnjaka.",
    problemTitle: "Problem algi",
    problemIntro:
      "Jezera su bila istodobno lijep element krajolika terena i potrebna zaliha vode za navodnjavanje. Prekomjeran rast algi uzrokovao je nekoliko problema:",
    problems: [
      "Porast ukupnih suspendiranih tvari (TSS) i pad biokemijske potrošnje kisika (BPK), zbog čega je voda postajala nezdrava.¹",
      "Niža razina kisika jer je voda postupno gubila kisik.",
      "Zasjenjivanje koje je sprječavalo rast poželjnog vodenog bilja.",
      "Začepljenje vodnih pumpi.",
      "Neugodni mirisi od mrtvih ili umirućih algi.",
      "Neprivlačan izgled.",
    ],
    problemOutro: "Probleme su pogoršavale više temperature i manje oborina od uobičajenih.",
    controlsTitle: "Uobičajeni načini suzbijanja algi",
    controls: [
      "U prošlosti su se koristila kemijska sredstva: herbicidi i algicidi, bakrov sulfat i klorni izbjeljivač. Te su metode, međutim, imale vlastite neželjene posljedice.",
      "Fontane za prozračivanje i miješanje vode povećale su prirodnu biološku aktivnost i malo smanjile rast algi.",
      "Mehaničko uklanjanje algi zahtijevalo je mnogo rada.",
    ],
    solutionTitle: "Rješenje Water Vital® protiv algi",
    solutionText1:
      "Upotreba neotrovnih organskih proizvoda u jezerima i ribnjacima u posljednje je vrijeme postala vrlo popularna. To je prirodno rješenje koje ne zahtijeva herbicide ni algicide; međutim, donosi stalne troškove i redovito održavanje. Zato smo odabrali neotrovnu i potpuno prirodnu alternativu koja ne zahtijeva redovito održavanje, energiju ni potrošni materijal.",
    solutionText2:
      "Rješenje je bilo vrlo jednostavno. U pristupu Water Vital® u jezero su postavljene dvije jedinice SAT „Softer Water Conditioner” kao neelektrična, nekemijska katalitička obrada vode. Prema izvornom izvješću, taj proces razgrađuje kemijske veze u jako mineraliziranoj vodi. Time se uklanjaju hranjive tvari kojima se alge hrane, pa alge brzo odumiru. Alge se zatim uklanjaju iz jezera, a prirodna ljepota bistre vode ubrzo se vraća.²",
    stagesTitle: "Primjena i promatranje",
    stages: [
      {
        label: "Ugradnja",
        text: "Spuštanje dviju jedinica Turbu-Flow „Softer Water Conditioner” u jezero br. 5 volumena 4000 m³. Za uklanjanje mrtvih algi korištene su i uronjena pumpa te tri usisna crijeva.",
        alt: "Dva tehničara postavljaju uređaj na plutajući okvir uz rub jezera",
      },
      {
        label: "Dan 2",
        text: "Već nakon samo dva dana alge se raspadaju i odumiru.",
        alt: "Zelena voda s grudicama algi u raspadanju",
      },
      {
        label: "Dan 6",
        text: "Jezero nakon šest dana: 70 % algi je odumrlo i uklonjeno.",
        alt: "Zelena površina jezera šest dana nakon ugradnje",
      },
      {
        label: "Dan 8",
        text: "Osmog dana jezero je očišćeno od algi, a voda je kristalno bistra. Primijetite da se cijev vidi bez zapreka. Par patki gluhara vratio se na jezero, što je dobar znak za budućnost.",
        alt: "Bistra voda jezera s dobro vidljivom cijevi",
      },
    ],
    resultsTitle: "Rezultati",
    resultsText:
      "Kao što se vidi, rezultati govore sami za sebe. Jezero koje je nekoć bilo jako onečišćeno cvjetanjem algi u vrlo je kratkom roku vraćeno u izvorno stanje. Jedan od uređaja „Water Restorers” Water Vital® ostaje u jezeru kako bi osigurao neprekidnu obradu vode.",
    lakeAlt: "Opći pogled na jezero nakon primjene",
    lakeCaption: "Jezero na kraju primjene (računalno obrađena slika prema izvornoj fotografiji).",
    turfTitle: "Dodatno terensko promatranje na navodnjavanom travnjaku",
    turfText:
      "Dodatno terensko promatranje pokazalo je da je travnjak navodnjavan vodom obrađenom Water Vitalom izgledao zdravije i razvio dublju zelenu boju. To bi poboljšanje moglo biti povezano s većom dostupnošću minerala iz tla biljkama i većim unosom korijenjem. Preporučuju se analize tla i biljaka kako bi se provjerila predložena veza s dostupnošću i unosom minerala.",
    note1:
      "¹ Izvorno izvješće navodi pad BPK-a. BPK i otopljeni kisik različite su veličine; tehničko objašnjenje nalazi se u procjeni u nastavku.",
    note2:
      "² Mehanizam i rezultati tvrdnje su izvornog izvješća. Učinak uređaja i učinak čišćenja pomoću pumpe nisu mjereni odvojeno. Vidi tehničku procjenu u nastavku.",
    photoCredit: "Fotografije: izvješće o primjeni tvrtke Green Solutions.",
    assessTitle: "Tehnička procjena i podaci koji nedostaju",
    assessSubtitle: "Dopunska procjena izvornog izvješća",
    assessIntro:
      "Izvješće opisuje vidljivo poboljšanje uz mehaničko uklanjanje algi. Dopunjavanje sljedećih podataka pri pripremi nove primjene Water Vitala u ribnjaku omogućit će pouzdanu procjenu ishoda.",
    assess: [
      {
        h: "Razlikovanje BPK-a od otopljenog kisika",
        p: "Izvorno izvješće među uzrocima nezdrave vode navodi pad BPK-a. BPK opisuje kisik potrošen tijekom biološke razgradnje organske tvari; otopljeni kisik opisuje kisik prisutan u vodi. Pad BPK-a sam po sebi ne znači nedostatak kisika. Autor je možda mislio na pad otopljenog kisika. Za konačan ispravak potrebni su izvorni analitički podaci. [3]",
      },
      {
        h: "Dokazivanje uklanjanja hranjivih tvari",
        p: "Objašnjenje da razgradnja kemijskih veza uklanja hranjive tvari algi u izvješću nije potkrijepljeno analizama dušika i fosfora. Promjena kemijskih veza ili mineralnih oblika sama po sebi ne dokazuje da su ukupni dušik i fosfor uklonjeni iz vode. Nova primjena trebala bi bilježiti unos hranjivih tvari, mjerenja vode i količinu uklonjenih algi. Treba procijeniti višak hranjivih tvari, temperaturu i kretanje vode. [1, 2]",
      },
      {
        h: "Razdvajanje učinka uređaja i čišćenja",
        p: "Upotreba uronjene pumpe i triju usisnih crijeva pokazuje da je mehaničko čišćenje pridonijelo navedenom ishodu. Promatranja 2., 6. i 8. dana odnose se na tu kombiniranu primjenu. Izvješće ne navodi kako je izmjerena vrijednost od 70 % niti s čime je uspoređena. Bolja bistrina vode također nije isto što i analitički rezultat za dušik, fosfor ili mikrobiološku pogodnost.",
      },
      {
        h: "Dopunjavanje podataka o modelu i radu",
        p: "Izvješće rabi nazive SAT, Turbu-Flow i Water Vital. Treba zabilježiti model uređaja, tehnički kapacitet i podatke o proizvođaču kako bi se utvrdio njegov odnos prema današnjim proizvodima Water Vital. Upotreba dvaju uređaja u 4000 m³ ne dokazuje da je isti broj dovoljan za drugi ribnjak ili model. Treba dodati i protok pumpe, mjesto ugradnje, dubinu, vrijeme rada i razdoblje praćenja. Procjena energije i održavanja mora obuhvatiti pumpe, prozračivanje i opremu za čišćenje, a ne samo modul uređaja.",
      },
      {
        h: "Potkrepljivanje promatranja travnjaka analizama",
        p: "Dublja zelena boja travnjaka sama ne dokazuje pojačano otapanje minerala. Dušik i željezo mogu utjecati na boju travnjaka, a pH tla utječe na dostupnost hranjivih tvari. Voda i tlo zahtijevaju zasebna mjerenja; više topljivih hranjivih tvari u ribnjaku može hraniti i alge. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Tehnički izvori",
    planTitle: "Plan primjene Water Vitala u ribnjaku",
    planIntro:
      "Predloženi pristup je procjena Water Vitala u mjerenom pokusu, uz uklanjanje algi i smanjen unos hranjivih tvari. Ciljevi su manje algi i začepljenja pumpi, bolja bistrina vode i trajno poboljšanje. Usporedna mjerenja procjenjuju doprinos uređaja.",
    plan: [
      {
        h: "Procjena lokacije i ugradnja",
        p: "Zabilježiti volumen ribnjaka, površinu, dubinu, dotok vode, količinu algi i protok cirkulacije. Procijeniti linijski model na prikladnom dijelu postojećeg cirkulacijskog voda, poštujući protok, tlak i zahtjeve proizvođača za ugradnju. Potvrditi da je model u spremniku pogodan za uranjanje i ima dovoljan kapacitet. Učvrstiti ga bez zakopavanja u sediment na dnu. Broj uređaja odabrati prema tim podacima o lokaciji.",
      },
      {
        h: "Uklanjanje algi i sprječavanje ponovne pojave",
        p: "Ukloniti površinske alge i razgradni materijal prikladnom opremom za prikupljanje ili usisavanje te zabilježiti količine. Budući da razgradnja troši kisik, pratiti otopljeni kisik i prema potrebi osigurati odgovarajuće prozračivanje. Istražiti i smanjiti unos dušika i fosfora iz gnojiva za travnjak, odvodnje, otpadnih voda i organskog otpada kako bi se smanjilo opterećenje koje potiče ponovni rast algi. [1, 2, 4]",
      },
      {
        h: "Praćenje i usporedba",
        p: "Predlažu se fotografije i mjerenja vode na istim mjestima na početku te 2., 6., 8., 14., 30. i 45. dana. Otopljeni kisik i temperaturu na početku pratiti češće, osobito rano ujutro. Ako su dostupna dva slična, neovisna ribnjaka, na oba primijeniti iste postupke čišćenja i prozračivanja, a Water Vital ugraditi samo u jedan kako bi se usporedio njegov dodatni doprinos. Praćenje jednog ribnjaka prije i poslije bilježi ukupan učinak kombiniranih zahvata.",
      },
    ],
    planHead: ["Pokazatelj", "Jedinica ili zapis", "Procjena"],
    planRows: [
      ["Količina algi", "Klorofil a ili prikladno brojanje vrsta", "Promjena opterećenja algama"],
      ["Bistrina", "Zamućenost i Secchijeva dubina", "Promjena vidljivosti"],
      ["Kisik", "Otopljeni kisik, mg/L", "Održavanje uvjeta kisika"],
      ["Hranjive tvari", "Ukupni dušik i ukupni fosfor, mg/L", "Promjena opterećenja hranjivim tvarima"],
      ["Organsko opterećenje", "BPK i, prema potrebi, KPK, mg/L", "Praćenje razgradive tvari"],
      ["Rad sustava", "Količina uklonjenih algi i zapis o začepljenju", "Potrebe čišćenja i pumpanja"],
    ],
    planOutro1:
      "Vremena promatranja 2., 6. i 8. dana potječu iz izvornog izvješća. Rok završetka ili postotak uklanjanja za novu primjenu treba obećati tek nakon završetka mjerenja na lokaciji.",
    planOutro2:
      "Pratiti boju, gustoću i razvoj korijenja travnjaka u odnosu na neovisno usporedno područje s istim uvjetima navodnjavanja i gnojidbe. Usporediti početne i naknadne analize pH tla, dostupnih hranjivih tvari i koncentracija hranjivih tvari u biljnom tkivu.",
  },

  tr: {
    eyebrow: "Uygulama örneği · Güney Kore",
    title: "Bir golf sahasının göllerinde yeşil algler",
    lede: "Green Solutions uygulama raporu: Güney Kore'de bir golf sahası, alglerle kaplanan göller ve gün gün yapılan gözlem.",
    greenAlt: "Sarı bayraklı bir golf green'i, bir göletin yanında",
    greenCaption: "Temsili görsel: bir golf green'i.",
    clubTitle: "Golf kulübü",
    clubText:
      "2000 yılında açılan ve bir numara olarak derecelendirilen Gapyeong Benest Golf Club, Güney Kore'de yer alır. Prestijli bir Jack Nicklaus Signature sahasıdır. Dalgalı greenlerinin güzelliği, birkaç göl ve göletten yapılan sulamayla korunur.",
    problemTitle: "Alg sorunu",
    problemIntro:
      "Göller hem golf sahasının manzarasının güzel bir unsuru hem de sulama için gerekli bir su deposuydu. Aşırı alg büyümesi birkaç soruna yol açıyordu:",
    problems: [
      "Toplam askıda katı madde (TSS) artışı ve biyokimyasal oksijen ihtiyacında (BOİ) azalma; suyu sağlıksız hale getiriyordu.¹",
      "Su ortamı yavaş yavaş oksijenden yoksun kaldığı için daha düşük oksijen düzeyleri.",
      "İstenen su bitkilerinin büyümesini engelleyen gölgeleme.",
      "Su pompalarının tıkanması.",
      "Ölü veya ölmekte olan alglerin neden olduğu kokular.",
      "Çekici olmayan bir görünüm.",
    ],
    problemOutro: "Sorunları, yüksek sıcaklıklar ve olağandan düşük yağış daha da ağırlaştırıyordu.",
    controlsTitle: "Alg kontrolünde yaygın yöntemler",
    controls: [
      "Geçmişte herbisitler ve algisitler, bakır sülfat ve çamaşır suyu gibi kimyasal yöntemler kullanılmıştı. Ancak bu yöntemlerin kendi istenmeyen sonuçları vardı.",
      "Suyu havalandırmak ve karıştırmak için kullanılan fıskiyeler doğal biyolojik faaliyeti artırdı ve alg büyümesini biraz azalttı.",
      "Alglerin mekanik olarak temizlenmesi büyük bir işgücü gerektiriyordu.",
    ],
    solutionTitle: "Alglere karşı Water Vital® çözümü",
    solutionText1:
      "Göl ve göletlerde zehirsiz organik ürünlerin kullanımı son zamanlarda çok yaygınlaştı. Herbisit veya algisit gerektirmeyen doğal bir çözümdür; ancak sürekli maliyet ve düzenli bakım getirir. Bu yüzden düzenli bakım, enerji ve sarf malzemesi gerektirmeyen, zehirsiz ve tamamen doğal bir alternatifi seçtik.",
    solutionText2:
      "Çözüm çok basitti. Water Vital® yaklaşımında, elektriksiz ve kimyasalsız bir katalitik su arıtımı olarak göle iki SAT “Softer Water Conditioner” ünitesi yerleştirildi. Orijinal rapora göre bu süreç, yüksek oranda mineralli sudaki kimyasal bağları çözer. Bu da alglerin beslendiği besin maddelerini ortadan kaldırır ve algler hızla ölür. Ardından algler gölden çıkarılır ve berrak suyun doğal güzelliği kısa sürede geri gelir.²",
    stagesTitle: "Uygulama ve gözlem",
    stages: [
      {
        label: "Kurulum",
        text: "5 numaralı göle iki Turbu-Flow “Softer Water Conditioner” ünitesinin yerleştirilmesi; gölün hacmi 4000 m³. Ölü algleri çıkarmak için ayrıca bir dalgıç pompa ve üç emme hortumu kullanıldı.",
        alt: "İki teknisyen, göl kenarında yüzen bir çerçeve üzerinde cihazı kuruyor",
      },
      {
        label: "2. gün",
        text: "Yalnızca iki gün sonra algler parçalanıyor ve ölüyor.",
        alt: "Çürüyen alg kümeleri olan yeşil su",
      },
      {
        label: "6. gün",
        text: "Altı gün sonra göl: Alglerin %70'i öldü ve çıkarıldı.",
        alt: "Kurulumdan altı gün sonra gölün yeşil yüzeyi",
      },
      {
        label: "8. gün",
        text: "Sekizinci günde göl alglerden arındı ve su kristal gibi berrak. Borunun hiçbir engel olmadan görülebildiğine dikkat edin. Bir çift yeşilbaş ördek göle geri döndü; gelecek için iyi bir işaret.",
        alt: "Boru net biçimde görünen berrak göl suyu",
      },
    ],
    resultsTitle: "Sonuçlar",
    resultsText:
      "Görüldüğü gibi sonuçlar kendi adına konuşuyor. Bir zamanlar alg patlamalarıyla ağır biçimde kirlenmiş bir göl, çok kısa sürede özgün haline döndürüldü. Water Vital® “Water Restorer” cihazlarından biri, sürekli su arıtımı sağlamak için gölde kalıyor.",
    lakeAlt: "Uygulamadan sonra gölün genel görünümü",
    lakeCaption: "Uygulamanın sonunda göl (özgün fotoğraftan yola çıkılarak bilgisayarla işlenmiş görüntü).",
    turfTitle: "Sulanan çim üzerinde ek saha gözlemi",
    turfText:
      "Ek bir saha gözlemi, Water Vital ile arıtılmış suyla sulanan çimin daha sağlıklı göründüğünü ve daha koyu bir yeşil renk aldığını bildirdi. Bu iyileşme, toprak minerallerinin bitkiler için daha elverişli hale gelmesi ve köklerce daha fazla alınmasıyla ilişkili olabilir. Mineral elverişliliği ve alımıyla önerilen bağlantıyı doğrulamak için toprak ve bitki analizleri önerilir.",
    note1:
      "¹ Orijinal rapor BOİ'de bir azalma bildirmektedir. BOİ ile çözünmüş oksijen farklı ölçümlerdir; teknik açıklama aşağıdaki değerlendirmededir.",
    note2:
      "² Mekanizma ve sonuçlar orijinal raporun iddialarıdır. Cihazın etkisi ile pompa destekli temizliğin etkisi ayrı ayrı ölçülmemiştir. Aşağıdaki teknik değerlendirmeye bakın.",
    photoCredit: "Fotoğraflar: Green Solutions uygulama raporu.",
    assessTitle: "Teknik değerlendirme ve eksik bilgiler",
    assessSubtitle: "Orijinal raporun tamamlayıcı değerlendirmesi",
    assessIntro:
      "Rapor, alglerin mekanik olarak çıkarılmasıyla birlikte görünür bir iyileşmeyi anlatıyor. Bir gölette yeni bir Water Vital uygulaması hazırlanırken aşağıdaki ayrıntıların tamamlanması, sonucun sağlam biçimde değerlendirilmesine yardımcı olur.",
    assess: [
      {
        h: "BOİ'yi çözünmüş oksijenden ayırmak",
        p: "Orijinal rapor, sağlıksız suyun nedenleri arasında BOİ'de bir azalmayı sayıyor. BOİ, organik maddenin biyolojik ayrışması sırasında tüketilen oksijeni; çözünmüş oksijen ise suda bulunan oksijeni ifade eder. BOİ'deki düşüş tek başına oksijen eksikliği anlamına gelmez. Yazar, çözünmüş oksijendeki bir azalmayı kastetmiş olabilir. Kesin bir düzeltme için özgün analiz verileri gerekir. [3]",
      },
      {
        h: "Besin maddesi giderimini göstermek",
        p: "Kimyasal bağların çözülmesinin alglerin besin maddelerini gidereceği açıklaması, raporda azot ve fosfor analizleriyle desteklenmemektedir. Kimyasal bağlardaki veya mineral biçimlerindeki bir değişiklik, toplam azot ve fosforun sudan giderildiğini tek başına göstermez. Yeni bir uygulamada besin girdileri, su ölçümleri ve çıkarılan alg miktarı kaydedilmelidir. Aşırı besin maddesi, sıcaklık ve su hareketi değerlendirilmelidir. [1, 2]",
      },
      {
        h: "Cihaz ve temizlik etkilerini ayırmak",
        p: "Bir dalgıç pompa ve üç emme hortumu kullanılması, mekanik temizliğin bildirilen sonuca katkıda bulunduğunu gösterir. 2., 6. ve 8. gün gözlemleri bu birleşik uygulamaya aittir. Rapor, %70 değerinin nasıl ölçüldüğünü veya karşılaştırma tabanının ne olduğunu belirtmemektedir. Suyun daha berrak olması da azot, fosfor veya mikrobiyolojik uygunluk için bir analiz sonucu değildir.",
      },
      {
        h: "Model ve işletme ayrıntılarını tamamlamak",
        p: "Rapor SAT, Turbu-Flow ve Water Vital adlarını kullanıyor. Cihazın günümüz Water Vital ürünleriyle ilişkisini belirlemek için cihaz modeli, teknik kapasitesi ve üretici bilgileri kaydedilmelidir. 4000 m³'te iki cihaz kullanılması, aynı sayının başka bir gölet veya model için yeterli olduğunu göstermez. Pompa debisi, kurulum yeri, derinlik, çalışma süresi ve izleme dönemi de eklenmelidir. Enerji ve bakım değerlendirmesi, cihaz modülünün yanı sıra pompaları, havalandırmayı ve temizlik ekipmanını da kapsamalıdır.",
      },
      {
        h: "Çim gözlemini analizlerle desteklemek",
        p: "Çimin daha koyu yeşil olması tek başına mineral çözünmesinin arttığını kanıtlamaz. Azot ve demir çimin rengini etkileyebilir, toprak pH'ı ise besin maddelerinin elverişliliğini etkiler. Su ve toprak ayrı ölçümler gerektirir; bir gölette çözünür besin maddelerinin artması algleri de besleyebilir. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Teknik kaynaklar",
    planTitle: "Gölet için Water Vital uygulama planı",
    planIntro:
      "Önerilen yaklaşım, Water Vital'ı ölçülü bir denemede, alglerin çıkarılması ve besin girdilerinin azaltılmasıyla birlikte değerlendirmektir. Hedefler; daha az alg ve pompa tıkanması, daha berrak su ve kalıcı bir iyileşmedir. Karşılaştırmalı ölçümler cihazın katkısını değerlendirir.",
    plan: [
      {
        h: "Saha değerlendirmesi ve kurulum",
        p: "Gölet hacmini, yüzey alanını, derinliğini, su girdilerini, alg yoğunluğunu ve sirkülasyon debisini kaydedin. Hat içi modeli, mevcut bir sirkülasyon hattının uygun bir bölümünde; debi, basınç ve üreticinin kurulum gereksinimlerine uyarak değerlendirin. Tank modelinin daldırmaya uygun ve yeterli kapasitede olduğunu doğrulayın. Dip tortusuna gömmeden sabitleyin. Cihaz sayısını bu saha verilerine göre seçin.",
      },
      {
        h: "Alglerin giderilmesi ve tekrarın önlenmesi",
        p: "Yüzey alglerini ve çürüyen maddeyi uygun toplama veya emme ekipmanıyla çıkarın ve miktarları kaydedin. Çürüme oksijen tükettiğinden, çözünmüş oksijeni izleyin ve gerekirse uygun havalandırma sağlayın. Alg büyümesinin yeniden başlamasını teşvik eden yükü azaltmak için çim gübresinden, drenajdan, atık sudan ve organik artıklardan gelen azot ve fosfor girdilerini araştırıp azaltın. [1, 2, 4]",
      },
      {
        h: "İzleme ve karşılaştırma",
        p: "Fotoğraflar ve su ölçümlerinin aynı noktalarda başlangıçta ve 2., 6., 8., 14., 30. ve 45. günlerde yapılması önerilir. Çözünmüş oksijeni ve sıcaklığı başlangıçta, özellikle sabahın erken saatlerinde daha sık izleyin. Benzer ve bağımsız iki gölet varsa, ikisine de aynı temizlik ve havalandırma uygulamalarını yapın ve Water Vital'ı yalnızca birine kurarak ek katkısını karşılaştırın. Tek bir göletin öncesi-sonrası izlenmesi, birleşik müdahalelerin toplam etkisini kaydeder.",
      },
    ],
    planHead: ["Gösterge", "Birim veya kayıt", "Değerlendirme"],
    planRows: [
      ["Alg yoğunluğu", "Klorofil a veya uygun bir tür sayımı", "Alg yükündeki değişim"],
      ["Berraklık", "Bulanıklık ve Secchi derinliği", "Görünürlükteki değişim"],
      ["Oksijen", "Çözünmüş oksijen, mg/L", "Oksijen koşullarının korunması"],
      ["Besin maddeleri", "Toplam azot ve toplam fosfor, mg/L", "Besin yükündeki değişim"],
      ["Organik yük", "BOİ ve gerekirse KOİ, mg/L", "Ayrışabilir maddenin izlenmesi"],
      ["İşletme", "Çıkarılan alg miktarı ve tıkanma kaydı", "Temizlik ve pompa gereksinimleri"],
    ],
    planOutro1:
      "2., 6. ve 8. gün süreleri orijinal rapordaki gözlemlerdir. Yeni bir uygulama için tamamlanma süresi veya giderim yüzdesi ancak saha ölçümleri tamamlandıktan sonra taahhüt edilmelidir.",
    planOutro2:
      "Çimin rengini, yoğunluğunu ve kök gelişimini, aynı sulama ve gübreleme koşullarına sahip bağımsız bir karşılaştırma alanıyla kıyaslayarak izleyin. Toprak pH'ı, elverişli besin maddeleri ve bitki dokusundaki besin konsantrasyonlarına ilişkin başlangıç ve takip analizlerini karşılaştırın.",
  },

  id: {
    eyebrow: "Kasus penerapan · Korea Selatan",
    title: "Alga hijau di danau-danau lapangan golf",
    lede: "Laporan penerapan Green Solutions: sebuah lapangan golf di Korea Selatan, danau yang dipenuhi alga, dan pengamatan hari demi hari.",
    greenAlt: "Sebuah green golf dengan bendera kuning, di tepi kolam",
    greenCaption: "Ilustrasi: sebuah green golf.",
    clubTitle: "Klub golf",
    clubText:
      "Gapyeong Benest Golf Club, yang dibuka pada tahun 2000 dan berperingkat nomor satu, terletak di Korea Selatan. Ini adalah lapangan Jack Nicklaus Signature yang bergengsi. Keindahan green-nya yang berbukit dijaga melalui irigasi dari beberapa danau dan kolam.",
    problemTitle: "Masalah alga",
    problemIntro:
      "Danau-danau itu sekaligus menjadi elemen indah lanskap lapangan golf dan tempat penampungan air yang diperlukan untuk irigasi. Pertumbuhan alga yang berlebihan menimbulkan beberapa masalah:",
    problems: [
      "Peningkatan total padatan tersuspensi (TSS) dan penurunan kebutuhan oksigen biokimia (BOD), sehingga air menjadi tidak sehat.¹",
      "Kadar oksigen yang lebih rendah karena lingkungan air perlahan kekurangan oksigen.",
      "Penaungan yang menghambat pertumbuhan tanaman air yang diinginkan.",
      "Tersumbatnya pompa air.",
      "Bau yang disebabkan oleh alga yang mati atau sekarat.",
      "Penampilan yang tidak menarik.",
    ],
    problemOutro: "Masalah tersebut diperparah oleh suhu yang lebih tinggi dan curah hujan yang lebih rendah dari biasanya.",
    controlsTitle: "Cara pengendalian alga yang lazim",
    controls: [
      "Pengendalian kimia, termasuk herbisida dan algisida, tembaga sulfat, dan pemutih klorin, pernah digunakan di masa lalu. Namun, cara-cara ini memiliki dampak tidak diinginkan tersendiri.",
      "Air mancur untuk mengaerasi dan mengaduk air meningkatkan aktivitas biologis alami dan sedikit mengurangi pertumbuhan alga.",
      "Pengangkatan alga secara mekanis membutuhkan tenaga kerja yang banyak.",
    ],
    solutionTitle: "Solusi Water Vital® melawan alga",
    solutionText1:
      "Penggunaan produk organik tidak beracun di danau dan kolam belakangan ini menjadi sangat populer. Ini adalah solusi alami yang tidak memerlukan herbisida atau algisida; namun, solusi ini menimbulkan biaya berkelanjutan dan perawatan rutin. Itulah sebabnya kami memilih alternatif tidak beracun dan sepenuhnya alami yang tidak memerlukan perawatan rutin, energi, maupun bahan habis pakai.",
    solutionText2:
      "Solusinya sangat sederhana. Dalam pendekatan Water Vital®, dua unit SAT “Softer Water Conditioner” dipasang di danau sebagai pengolahan air katalitik tanpa listrik dan tanpa bahan kimia. Menurut laporan asal, proses ini memutus ikatan kimia dalam air yang sangat bermineral. Hal ini menghilangkan nutrisi yang menjadi makanan alga, sehingga alga cepat mati. Alga kemudian diangkat dari danau, dan keindahan alami air yang jernih segera kembali.²",
    stagesTitle: "Penerapan dan pengamatan",
    stages: [
      {
        label: "Pemasangan",
        text: "Penempatan dua unit Turbu-Flow “Softer Water Conditioner” ke danau nomor 5 yang bervolume 4000 m³. Pompa submersible dan tiga selang hisap juga digunakan untuk mengangkat alga yang mati.",
        alt: "Dua teknisi memasang peralatan pada rangka terapung di tepi danau",
      },
      {
        label: "Hari ke-2",
        text: "Hanya setelah dua hari, alga mulai terurai dan mati.",
        alt: "Air hijau dengan gumpalan alga yang terurai",
      },
      {
        label: "Hari ke-6",
        text: "Danau setelah enam hari: 70% alga telah mati dan diangkat.",
        alt: "Permukaan danau yang hijau enam hari setelah pemasangan",
      },
      {
        label: "Hari ke-8",
        text: "Pada hari kedelapan, danau bersih dari alga dan airnya sangat jernih. Perhatikan bahwa pipa terlihat tanpa halangan. Sepasang bebek mallard telah kembali ke danau, pertanda baik untuk masa depan.",
        alt: "Air danau yang jernih dengan pipa yang terlihat jelas",
      },
    ],
    resultsTitle: "Hasil",
    resultsText:
      "Seperti terlihat, hasilnya berbicara sendiri. Danau yang dulu tercemar berat oleh ledakan alga telah dipulihkan ke kondisi semula dalam waktu yang sangat singkat. Salah satu “Water Restorer” Water Vital® tetap berada di danau untuk memberikan pengolahan air yang berkelanjutan.",
    lakeAlt: "Pemandangan umum danau setelah penerapan",
    lakeCaption: "Danau di akhir penerapan (gambar yang diolah dengan komputer dari foto aslinya).",
    turfTitle: "Pengamatan lapangan tambahan pada rumput yang diirigasi",
    turfText:
      "Pengamatan lapangan tambahan melaporkan bahwa rumput yang diirigasi dengan air hasil olahan Water Vital tampak lebih sehat dan berwarna hijau lebih pekat. Perbaikan ini mungkin terkait dengan meningkatnya ketersediaan mineral tanah bagi tanaman dan penyerapan yang lebih besar oleh akar. Analisis tanah dan tanaman disarankan untuk memverifikasi hubungan yang diusulkan dengan ketersediaan dan penyerapan mineral.",
    note1:
      "¹ Laporan asal menyebutkan penurunan BOD. BOD dan oksigen terlarut adalah pengukuran yang berbeda; penjelasan teknisnya ada pada penilaian di bawah.",
    note2:
      "² Mekanisme dan hasilnya merupakan klaim dalam laporan asal. Efek perangkat dan efek pembersihan dengan bantuan pompa tidak diukur secara terpisah. Lihat penilaian teknis di bawah.",
    photoCredit: "Foto: laporan penerapan Green Solutions.",
    assessTitle: "Penilaian teknis dan informasi yang belum ada",
    assessSubtitle: "Penilaian tambahan atas laporan asal",
    assessIntro:
      "Laporan menggambarkan perbaikan yang terlihat disertai pengangkatan alga secara mekanis. Melengkapi rincian berikut saat menyiapkan penerapan Water Vital yang baru di kolam akan mendukung penilaian hasil yang andal.",
    assess: [
      {
        h: "Membedakan BOD dari oksigen terlarut",
        p: "Laporan asal mencantumkan penurunan BOD di antara penyebab air tidak sehat. BOD menggambarkan oksigen yang dikonsumsi selama penguraian biologis bahan organik; oksigen terlarut menggambarkan oksigen yang ada di dalam air. Turunnya BOD tidak dengan sendirinya berarti kekurangan oksigen. Penulis mungkin bermaksud menyebut penurunan oksigen terlarut. Data analisis asli diperlukan untuk koreksi yang pasti. [3]",
      },
      {
        h: "Menunjukkan penghilangan nutrisi",
        p: "Penjelasan bahwa pemutusan ikatan kimia menghilangkan nutrisi alga tidak didukung oleh analisis nitrogen dan fosfor dalam laporan. Perubahan ikatan kimia atau bentuk mineral saja tidak menunjukkan bahwa nitrogen dan fosfor total telah dihilangkan dari air. Penerapan baru sebaiknya mencatat masukan nutrisi, pengukuran air, dan jumlah alga yang diangkat. Kelebihan nutrisi, suhu, dan pergerakan air perlu dinilai. [1, 2]",
      },
      {
        h: "Memisahkan efek perangkat dari efek pembersihan",
        p: "Penggunaan pompa submersible dan tiga selang hisap menunjukkan bahwa pembersihan mekanis ikut berkontribusi pada hasil yang dilaporkan. Pengamatan pada hari ke-2, ke-6, dan ke-8 berkaitan dengan penerapan gabungan ini. Laporan tidak menyebutkan bagaimana nilai 70% diukur atau apa pembandingnya. Air yang lebih jernih juga berbeda dari hasil analisis untuk nitrogen, fosfor, atau kelayakan mikrobiologis.",
      },
      {
        h: "Melengkapi model dan rincian pengoperasian",
        p: "Laporan menggunakan nama SAT, Turbu-Flow, dan Water Vital. Model perangkat, kapasitas teknis, dan data produsen perlu dicatat untuk menetapkan hubungannya dengan produk Water Vital saat ini. Penggunaan dua perangkat pada 4000 m³ tidak menunjukkan bahwa jumlah yang sama cukup untuk kolam atau model lain. Debit pompa, lokasi pemasangan, kedalaman, waktu pengoperasian, dan masa tindak lanjut juga perlu ditambahkan. Penilaian energi dan perawatan harus mencakup pompa, aerasi, dan peralatan pembersih, selain modul perangkat.",
      },
      {
        h: "Mendukung pengamatan rumput dengan analisis",
        p: "Warna rumput yang lebih hijau pekat saja tidak membuktikan peningkatan pelarutan mineral. Nitrogen dan zat besi dapat memengaruhi warna rumput, sementara pH tanah memengaruhi ketersediaan nutrisi. Air dan tanah memerlukan pengukuran terpisah; meningkatnya nutrisi terlarut di kolam juga dapat memberi makan alga. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Sumber teknis",
    planTitle: "Rencana penerapan Water Vital di kolam",
    planIntro:
      "Pendekatan yang diusulkan adalah mengevaluasi Water Vital dalam uji terukur yang dikombinasikan dengan pengangkatan alga dan pengurangan masukan nutrisi. Tujuannya adalah berkurangnya alga dan penyumbatan pompa, air yang lebih jernih, dan perbaikan yang berkelanjutan. Pengukuran pembanding menilai kontribusi perangkat.",
    plan: [
      {
        h: "Penilaian lokasi dan pemasangan",
        p: "Catat volume kolam, luas permukaan, kedalaman, masukan air, kelimpahan alga, dan debit sirkulasi. Nilai model inline pada bagian yang sesuai dari saluran sirkulasi yang ada, dengan mengikuti debit, tekanan, dan persyaratan pemasangan dari produsen. Pastikan model tangki cocok dan berkapasitas memadai untuk direndam. Pasang tanpa mengubur di sedimen dasar. Tentukan jumlah perangkat berdasarkan data lokasi ini.",
      },
      {
        h: "Pengangkatan alga dan pencegahan kemunculan kembali",
        p: "Angkat alga permukaan dan bahan yang membusuk dengan peralatan pengumpul atau penyedot yang sesuai, lalu catat jumlahnya. Karena pembusukan menyerap oksigen, pantau oksigen terlarut dan sediakan aerasi yang sesuai bila perlu. Telusuri dan kurangi masukan nitrogen dan fosfor dari pupuk rumput, drainase, air limbah, dan sisa organik untuk mengatasi beban yang memicu pertumbuhan alga kembali. [1, 2, 4]",
      },
      {
        h: "Pemantauan dan perbandingan",
        p: "Foto dan pengukuran air di lokasi yang sama diusulkan pada awal dan pada hari ke-2, 6, 8, 14, 30, dan 45. Pantau oksigen terlarut dan suhu lebih sering pada awalnya, terutama pada pagi hari. Jika tersedia dua kolam yang serupa dan independen, terapkan praktik pembersihan dan aerasi yang sama pada keduanya dan pasang Water Vital hanya di satu kolam untuk membandingkan kontribusi tambahannya. Pemantauan sebelum dan sesudah pada satu kolam mencatat efek keseluruhan dari intervensi gabungan.",
      },
    ],
    planHead: ["Indikator", "Satuan atau catatan", "Penilaian"],
    planRows: [
      ["Kelimpahan alga", "Klorofil a atau penghitungan spesies yang sesuai", "Perubahan beban alga"],
      ["Kejernihan", "Kekeruhan dan kedalaman Secchi", "Perubahan jarak pandang"],
      ["Oksigen", "Oksigen terlarut, mg/L", "Terjaganya kondisi oksigen"],
      ["Nutrisi", "Nitrogen total dan fosfor total, mg/L", "Perubahan beban nutrisi"],
      ["Beban organik", "BOD dan, bila relevan, COD, mg/L", "Pelacakan bahan yang dapat terurai"],
      ["Operasional", "Jumlah alga yang diangkat dan catatan penyumbatan", "Kebutuhan pembersihan dan pemompaan"],
    ],
    planOutro1:
      "Waktu pada hari ke-2, 6, dan 8 adalah pengamatan dari laporan asal. Waktu penyelesaian atau persentase pengangkatan untuk penerapan baru hanya boleh dijanjikan setelah pengukuran di lokasi selesai.",
    planOutro2:
      "Pantau warna, kepadatan, dan perkembangan akar rumput dibandingkan dengan area pembanding independen yang memiliki kondisi irigasi dan pemupukan yang sama. Bandingkan analisis awal dan lanjutan untuk pH tanah, nutrisi yang tersedia, dan konsentrasi nutrisi pada jaringan tanaman.",
  },

  el: {
    eyebrow: "Περίπτωση εφαρμογής · Νότια Κορέα",
    title: "Πράσινα φύκια στις λίμνες ενός γηπέδου γκολφ",
    lede: "Έκθεση εφαρμογής της Green Solutions: ένα γήπεδο γκολφ στη Νότια Κορέα, λίμνες γεμάτες φύκια και παρατήρηση μέρα με τη μέρα.",
    greenAlt: "Ένα γκριν γκολφ με την κίτρινη σημαία του, δίπλα σε λιμνούλα",
    greenCaption: "Εικονογράφηση: ένα γκριν γκολφ.",
    clubTitle: "Το γκολφ κλαμπ",
    clubText:
      "Το Gapyeong Benest Golf Club, που άνοιξε το 2000 και κατατάσσεται στην πρώτη θέση, βρίσκεται στη Νότια Κορέα. Είναι ένα διάσημο γήπεδο Jack Nicklaus Signature. Η ομορφιά των κυματιστών γκριν του διατηρείται με άρδευση από αρκετές λίμνες και λιμνούλες.",
    problemTitle: "Το πρόβλημα των φυκιών",
    problemIntro:
      "Οι λίμνες ήταν ταυτόχρονα ένα όμορφο στοιχείο του τοπίου του γηπέδου και μια αναγκαία δεξαμενή νερού για την άρδευση. Η υπερβολική ανάπτυξη φυκιών προκαλούσε αρκετά προβλήματα:",
    problems: [
      "Αύξηση των ολικών αιωρούμενων στερεών (TSS) και μείωση της βιοχημικής απαίτησης σε οξυγόνο (BOD), που έκαναν το νερό ανθυγιεινό.¹",
      "Χαμηλότερα επίπεδα οξυγόνου, καθώς το υδάτινο περιβάλλον έχανε σταδιακά το οξυγόνο του.",
      "Σκίαση που εμπόδιζε την ανάπτυξη των επιθυμητών υδρόβιων φυτών.",
      "Φράξιμο των αντλιών νερού.",
      "Οσμές που προκαλούνταν από νεκρά ή φθίνοντα φύκια.",
      "Μη ελκυστική εμφάνιση.",
    ],
    problemOutro:
      "Τα προβλήματα επιδεινώνονταν από τις υψηλότερες θερμοκρασίες και τις χαμηλότερες από το συνηθισμένο βροχοπτώσεις.",
    controlsTitle: "Οι συνήθεις τρόποι ελέγχου των φυκιών",
    controls: [
      "Στο παρελθόν είχαν χρησιμοποιηθεί χημικά μέσα: ζιζανιοκτόνα και φυκοκτόνα, θειικός χαλκός και χλωρίνη. Οι μέθοδοι αυτές είχαν όμως τις δικές τους ανεπιθύμητες συνέπειες.",
      "Τα σιντριβάνια που χρησιμοποιούνταν για αερισμό και ανάμιξη του νερού αύξησαν τη φυσική βιολογική δραστηριότητα και μείωσαν λίγο την ανάπτυξη των φυκιών.",
      "Η μηχανική απομάκρυνση των φυκιών απαιτούσε πολλή εργασία.",
    ],
    solutionTitle: "Η λύση Water Vital® κατά των φυκιών",
    solutionText1:
      "Η χρήση μη τοξικών οργανικών προϊόντων σε λίμνες και λιμνούλες έχει γίνει πολύ δημοφιλής τελευταία. Είναι μια φυσική λύση που δεν απαιτεί ζιζανιοκτόνα ή φυκοκτόνα· συνεπάγεται όμως συνεχή κόστη και τακτική συντήρηση. Γι' αυτό επιλέξαμε μια μη τοξική και εντελώς φυσική εναλλακτική λύση, χωρίς τακτική συντήρηση, χωρίς ενέργεια και χωρίς αναλώσιμα.",
    solutionText2:
      "Η λύση ήταν πολύ απλή. Στην προσέγγιση Water Vital®, δύο μονάδες SAT «Softer Water Conditioner» τοποθετήθηκαν στη λίμνη ως καταλυτική επεξεργασία του νερού χωρίς ηλεκτρισμό και χωρίς χημικά. Σύμφωνα με την αρχική έκθεση, η διαδικασία αυτή διασπά τους χημικούς δεσμούς σε νερό με πολύ υψηλή περιεκτικότητα σε ορυκτά. Έτσι απομακρύνονται τα θρεπτικά συστατικά με τα οποία τρέφονται τα φύκια, και τα φύκια πεθαίνουν γρήγορα. Τα φύκια αφαιρούνται στη συνέχεια από τη λίμνη και η φυσική ομορφιά του καθαρού νερού επιστρέφει σύντομα.²",
    stagesTitle: "Εφαρμογή και παρατήρηση",
    stages: [
      {
        label: "Εγκατάσταση",
        text: "Τοποθέτηση δύο μονάδων Turbu-Flow «Softer Water Conditioner» στη λίμνη αρ. 5, όγκου 4000 m³. Χρησιμοποιήθηκαν επίσης μια βυθιζόμενη αντλία και τρεις σωλήνες αναρρόφησης για την απομάκρυνση των νεκρών φυκιών.",
        alt: "Δύο τεχνικοί εγκαθιστούν τον εξοπλισμό σε πλωτό πλαίσιο στην άκρη της λίμνης",
      },
      {
        label: "Ημέρα 2",
        text: "Μετά από μόλις δύο ημέρες, τα φύκια αποσυντίθενται και πεθαίνουν.",
        alt: "Πράσινο νερό με συσσωματώματα φυκιών που αποσυντίθενται",
      },
      {
        label: "Ημέρα 6",
        text: "Η λίμνη μετά από έξι ημέρες: το 70% των φυκιών έχει πεθάνει και έχει απομακρυνθεί.",
        alt: "Πράσινη επιφάνεια της λίμνης έξι ημέρες μετά την εγκατάσταση",
      },
      {
        label: "Ημέρα 8",
        text: "Την όγδοη ημέρα, η λίμνη έχει καθαρίσει από τα φύκια και το νερό είναι κρυστάλλινο. Παρατηρήστε ότι ο σωλήνας φαίνεται χωρίς εμπόδια. Ένα ζευγάρι πρασινοκέφαλες πάπιες επέστρεψε στη λίμνη, καλό σημάδι για το μέλλον.",
        alt: "Καθαρό νερό λίμνης με ευδιάκριτο σωλήνα",
      },
    ],
    resultsTitle: "Τα αποτελέσματα",
    resultsText:
      "Όπως φαίνεται, τα αποτελέσματα μιλούν από μόνα τους. Μια λίμνη που κάποτε ήταν βαριά μολυσμένη από ανθίσεις φυκιών επανήλθε στην αρχική της κατάσταση σε πολύ σύντομο χρόνο. Ένα από τα «Water Restorers» Water Vital® παραμένει στη λίμνη για να εξασφαλίζει συνεχή επεξεργασία του νερού.",
    lakeAlt: "Γενική άποψη της λίμνης μετά την εφαρμογή",
    lakeCaption: "Η λίμνη στο τέλος της εφαρμογής (εικόνα επεξεργασμένη με υπολογιστή από την αρχική φωτογραφία).",
    turfTitle: "Πρόσθετη παρατήρηση πεδίου στον αρδευόμενο χλοοτάπητα",
    turfText:
      "Μια πρόσθετη παρατήρηση πεδίου ανέφερε ότι ο χλοοτάπητας που αρδευόταν με νερό επεξεργασμένο με Water Vital φαινόταν πιο υγιής και απέκτησε βαθύτερο πράσινο χρώμα. Η βελτίωση αυτή μπορεί να συνδέεται με μεγαλύτερη διαθεσιμότητα των ορυκτών του εδάφους για τα φυτά και μεγαλύτερη πρόσληψη από τις ρίζες. Συνιστώνται αναλύσεις εδάφους και φυτών για να επαληθευτεί η προτεινόμενη σύνδεση με τη διαθεσιμότητα και την πρόσληψη ορυκτών.",
    note1:
      "¹ Η αρχική έκθεση αναφέρει μείωση του BOD. Το BOD και το διαλυμένο οξυγόνο είναι διαφορετικές μετρήσεις· η τεχνική εξήγηση βρίσκεται στην αξιολόγηση παρακάτω.",
    note2:
      "² Ο μηχανισμός και τα αποτελέσματα είναι ισχυρισμοί της αρχικής έκθεσης. Η επίδραση της συσκευής και αυτή του καθαρισμού με αντλία δεν μετρήθηκαν χωριστά. Βλ. την τεχνική αξιολόγηση παρακάτω.",
    photoCredit: "Φωτογραφίες: έκθεση εφαρμογής της Green Solutions.",
    assessTitle: "Τεχνική αξιολόγηση και πληροφορίες που λείπουν",
    assessSubtitle: "Συμπληρωματική αξιολόγηση της αρχικής έκθεσης",
    assessIntro:
      "Η έκθεση περιγράφει ορατή βελτίωση παράλληλα με τη μηχανική απομάκρυνση των φυκιών. Η συμπλήρωση των παρακάτω στοιχείων κατά την προετοιμασία μιας νέας εφαρμογής Water Vital σε λιμνούλα θα στηρίξει μια τεκμηριωμένη αξιολόγηση του αποτελέσματος.",
    assess: [
      {
        h: "Διάκριση του BOD από το διαλυμένο οξυγόνο",
        p: "Η αρχική έκθεση αναφέρει μείωση του BOD ανάμεσα στις αιτίες του ανθυγιεινού νερού. Το BOD περιγράφει το οξυγόνο που καταναλώνεται κατά τη βιολογική αποσύνθεση της οργανικής ύλης· το διαλυμένο οξυγόνο περιγράφει το οξυγόνο που υπάρχει στο νερό. Η πτώση του BOD δεν σημαίνει από μόνη της έλλειψη οξυγόνου. Ο συντάκτης ίσως εννοούσε μείωση του διαλυμένου οξυγόνου. Για οριστική διόρθωση χρειάζονται τα αρχικά αναλυτικά δεδομένα. [3]",
      },
      {
        h: "Τεκμηρίωση της απομάκρυνσης θρεπτικών συστατικών",
        p: "Η εξήγηση ότι η διάσπαση των χημικών δεσμών απομακρύνει τα θρεπτικά συστατικά των φυκιών δεν στηρίζεται στην έκθεση από αναλύσεις αζώτου και φωσφόρου. Μια αλλαγή στους χημικούς δεσμούς ή στις ορυκτές μορφές δεν αποδεικνύει από μόνη της ότι το ολικό άζωτο και ο ολικός φώσφορος απομακρύνθηκαν από το νερό. Μια νέα εφαρμογή θα πρέπει να καταγράφει τις εισροές θρεπτικών συστατικών, τις μετρήσεις του νερού και την ποσότητα των φυκιών που αφαιρέθηκαν. Η περίσσεια θρεπτικών συστατικών, η θερμοκρασία και η κίνηση του νερού πρέπει να αξιολογούνται. [1, 2]",
      },
      {
        h: "Διαχωρισμός της επίδρασης της συσκευής από αυτή του καθαρισμού",
        p: "Η χρήση βυθιζόμενης αντλίας και τριών σωλήνων αναρρόφησης δείχνει ότι ο μηχανικός καθαρισμός συνέβαλε στο αναφερόμενο αποτέλεσμα. Οι παρατηρήσεις των ημερών 2, 6 και 8 αφορούν αυτή τη συνδυασμένη εφαρμογή. Η έκθεση δεν διευκρινίζει πώς μετρήθηκε η τιμή του 70% ούτε ποια ήταν η βάση σύγκρισης. Η καλύτερη διαύγεια του νερού διαφέρει επίσης από ένα αναλυτικό αποτέλεσμα για άζωτο, φώσφορο ή μικροβιολογική καταλληλότητα.",
      },
      {
        h: "Συμπλήρωση των στοιχείων μοντέλου και λειτουργίας",
        p: "Η έκθεση χρησιμοποιεί τα ονόματα SAT, Turbu-Flow και Water Vital. Πρέπει να καταγραφούν το μοντέλο της συσκευής, η τεχνική της δυναμικότητα και τα στοιχεία του κατασκευαστή, ώστε να τεκμηριωθεί η σχέση της με τα σημερινά προϊόντα Water Vital. Η χρήση δύο συσκευών σε 4000 m³ δεν αποδεικνύει ότι ο ίδιος αριθμός αρκεί για άλλη λιμνούλα ή άλλο μοντέλο. Θα πρέπει επίσης να προστεθούν η παροχή της αντλίας, η θέση εγκατάστασης, το βάθος, ο χρόνος λειτουργίας και η περίοδος παρακολούθησης. Η αξιολόγηση της ενέργειας και της συντήρησης πρέπει να καλύπτει τις αντλίες, τον αερισμό και τον εξοπλισμό καθαρισμού, εκτός από τη μονάδα της συσκευής.",
      },
      {
        h: "Στήριξη της παρατήρησης στον χλοοτάπητα με αναλύσεις",
        p: "Ένα βαθύτερο πράσινο χρώμα του χλοοτάπητα από μόνο του δεν αποδεικνύει αυξημένη διάλυση ορυκτών. Το άζωτο και ο σίδηρος μπορούν να επηρεάσουν το χρώμα του χλοοτάπητα, ενώ το pH του εδάφους επηρεάζει τη διαθεσιμότητα των θρεπτικών συστατικών. Το νερό και το έδαφος απαιτούν χωριστές μετρήσεις· περισσότερα διαλυτά θρεπτικά συστατικά σε μια λιμνούλα μπορούν επίσης να θρέψουν τα φύκια. [1, 5, 6]",
      },
    ],
    sourcesTitle: "Τεχνικές πηγές",
    planTitle: "Σχέδιο εφαρμογής Water Vital σε λιμνούλα",
    planIntro:
      "Η προτεινόμενη προσέγγιση είναι να αξιολογηθεί το Water Vital σε μια μετρούμενη δοκιμή, σε συνδυασμό με την απομάκρυνση φυκιών και τη μείωση των εισροών θρεπτικών συστατικών. Στόχοι είναι λιγότερα φύκια και λιγότερο φράξιμο των αντλιών, καλύτερη διαύγεια του νερού και διαρκής βελτίωση. Οι συγκριτικές μετρήσεις αξιολογούν τη συμβολή της συσκευής.",
    plan: [
      {
        h: "Αξιολόγηση του χώρου και εγκατάσταση",
        p: "Καταγράψτε τον όγκο της λιμνούλας, την επιφάνεια, το βάθος, τις εισροές νερού, την αφθονία φυκιών και την παροχή κυκλοφορίας. Αξιολογήστε το μοντέλο εν σειρά σε κατάλληλο τμήμα υπάρχοντος αγωγού κυκλοφορίας, τηρώντας την παροχή, την πίεση και τις απαιτήσεις εγκατάστασης του κατασκευαστή. Επιβεβαιώστε ότι το μοντέλο δεξαμενής είναι κατάλληλο για εμβάπτιση και έχει επαρκή δυναμικότητα. Στερεώστε το χωρίς να το θάψετε στα ιζήματα του πυθμένα. Επιλέξτε τον αριθμό συσκευών με βάση αυτά τα στοιχεία του χώρου.",
      },
      {
        h: "Απομάκρυνση φυκιών και πρόληψη επανεμφάνισης",
        p: "Αφαιρέστε τα επιφανειακά φύκια και το υλικό που αποσυντίθεται με κατάλληλο εξοπλισμό συλλογής ή αναρρόφησης και καταγράψτε τις ποσότητες. Επειδή η αποσύνθεση καταναλώνει οξυγόνο, παρακολουθήστε το διαλυμένο οξυγόνο και εξασφαλίστε κατάλληλο αερισμό, αν χρειάζεται. Διερευνήστε και μειώστε τις εισροές αζώτου και φωσφόρου από το λίπασμα του χλοοτάπητα, την αποστράγγιση, τα λύματα και τα οργανικά υπολείμματα, ώστε να αντιμετωπιστεί το φορτίο που ευνοεί την εκ νέου ανάπτυξη φυκιών. [1, 2, 4]",
      },
      {
        h: "Παρακολούθηση και σύγκριση",
        p: "Προτείνονται φωτογραφίες και μετρήσεις του νερού στα ίδια σημεία στην αρχή και τις ημέρες 2, 6, 8, 14, 30 και 45. Παρακολουθείτε το διαλυμένο οξυγόνο και τη θερμοκρασία πιο συχνά στην αρχή, ιδίως νωρίς το πρωί. Αν υπάρχουν δύο παρόμοιες, ανεξάρτητες λιμνούλες, εφαρμόστε τις ίδιες πρακτικές καθαρισμού και αερισμού και στις δύο και εγκαταστήστε το Water Vital μόνο στη μία, ώστε να συγκριθεί η πρόσθετη συμβολή του. Η παρακολούθηση πριν και μετά σε μία μόνο λιμνούλα καταγράφει το συνολικό αποτέλεσμα των συνδυασμένων παρεμβάσεων.",
      },
    ],
    planHead: ["Δείκτης", "Μονάδα ή καταγραφή", "Αξιολόγηση"],
    planRows: [
      ["Αφθονία φυκιών", "Χλωροφύλλη a ή κατάλληλη καταμέτρηση ειδών", "Μεταβολή του φορτίου φυκιών"],
      ["Διαύγεια", "Θολότητα και βάθος Secchi", "Μεταβολή της ορατότητας"],
      ["Οξυγόνο", "Διαλυμένο οξυγόνο, mg/L", "Διατήρηση των συνθηκών οξυγόνου"],
      ["Θρεπτικά συστατικά", "Ολικό άζωτο και ολικός φώσφορος, mg/L", "Μεταβολή του θρεπτικού φορτίου"],
      ["Οργανικό φορτίο", "BOD και, όπου σχετίζεται, COD, mg/L", "Παρακολούθηση του αποδομήσιμου υλικού"],
      ["Λειτουργία", "Ποσότητα φυκιών που αφαιρέθηκαν και καταγραφή φραξίματος", "Ανάγκες καθαρισμού και άντλησης"],
    ],
    planOutro1:
      "Οι χρόνοι των ημερών 2, 6 και 8 είναι παρατηρήσεις από την αρχική έκθεση. Χρόνος ολοκλήρωσης ή ποσοστό απομάκρυνσης για μια νέα εφαρμογή πρέπει να δεσμεύεται μόνο αφού ολοκληρωθούν οι μετρήσεις στον χώρο.",
    planOutro2:
      "Παρακολουθήστε το χρώμα, την πυκνότητα και την ανάπτυξη των ριζών του χλοοτάπητα σε σύγκριση με μια ανεξάρτητη περιοχή αναφοράς με τις ίδιες συνθήκες άρδευσης και λίπανσης. Συγκρίνετε τις αναλύσεις αφετηρίας και παρακολούθησης για το pH του εδάφους, τα διαθέσιμα θρεπτικά συστατικά και τις συγκεντρώσεις θρεπτικών συστατικών στους φυτικούς ιστούς.",
  },

  ar: {
    eyebrow: "حالة تطبيق · كوريا الجنوبية",
    title: "الطحالب الخضراء في بحيرات ملعب غولف",
    lede: "تقرير تطبيق من Green Solutions: ملعب غولف في كوريا الجنوبية، وبحيرات اجتاحتها الطحالب، وملاحظة يومًا بيوم.",
    greenAlt: "منطقة خضراء (غرين) في ملعب غولف بعلمها الأصفر، بجوار بركة",
    greenCaption: "صورة توضيحية: غرين في ملعب غولف.",
    clubTitle: "نادي الغولف",
    clubText:
      "افتُتح نادي Gapyeong Benest Golf Club عام 2000، وهو مصنّف في المرتبة الأولى، ويقع في كوريا الجنوبية. وهو ملعب مرموق يحمل توقيع Jack Nicklaus. ويُحافظ على جمال مساحاته الخضراء المتموجة بالري من عدة بحيرات وبرك.",
    problemTitle: "مشكلة الطحالب",
    problemIntro:
      "كانت البحيرات في آنٍ واحد عنصرًا جميلًا في مشهد الملعب وخزانًا للمياه لا غنى عنه للري. وكان النمو المفرط للطحالب يسبب عدة مشكلات:",
    problems: [
      "ارتفاع إجمالي المواد الصلبة العالقة (TSS) وانخفاض الطلب الحيوي الكيميائي على الأكسجين (BOD)، مما جعل المياه غير صحية.¹",
      "انخفاض مستويات الأكسجين مع افتقار البيئة المائية إليه تدريجيًا.",
      "تظليل يعيق نمو النباتات المائية المرغوبة.",
      "انسداد مضخات المياه.",
      "روائح ناتجة عن الطحالب الميتة أو المحتضرة.",
      "مظهر غير جذاب.",
    ],
    problemOutro: "وقد زاد من حدة المشكلات ارتفاع درجات الحرارة وهطول أمطار أقل من المعتاد.",
    controlsTitle: "الوسائل المعتادة لمكافحة الطحالب",
    controls: [
      "استُخدمت في الماضي وسائل كيميائية، منها مبيدات الأعشاب ومبيدات الطحالب وكبريتات النحاس ومبيّض الكلور. لكن لهذه الطرق عواقبها غير المرغوبة.",
      "أدّت النوافير المستخدمة لتهوية المياه وخلطها إلى زيادة النشاط البيولوجي الطبيعي وخفّضت نمو الطحالب قليلًا.",
      "كانت الإزالة الميكانيكية للطحالب تتطلب جهدًا كبيرًا من اليد العاملة.",
    ],
    solutionTitle: "حل Water Vital® ضد الطحالب",
    solutionText1:
      "أصبح استخدام المنتجات العضوية غير السامة في البحيرات والبرك شائعًا جدًا في الآونة الأخيرة. وهو حل طبيعي لا يتطلب مبيدات أعشاب ولا مبيدات طحالب؛ غير أنه يستلزم تكاليف مستمرة وصيانة منتظمة. ولهذا اخترنا بديلًا غير سام وطبيعيًا بالكامل، لا يحتاج إلى صيانة منتظمة ولا إلى طاقة ولا إلى مواد استهلاكية.",
    solutionText2:
      "كان الحل بسيطًا جدًا. ففي نهج Water Vital®، رُكّبت في البحيرة وحدتان من SAT «Softer Water Conditioner» كمعالجة حفزية للمياه دون كهرباء ودون مواد كيميائية. وبحسب التقرير الأصلي، تفكّك هذه العملية الروابط الكيميائية في مياه شديدة التمعدن. وهذا يزيل المغذيات التي تتغذى عليها الطحالب، فتموت الطحالب سريعًا. ثم تُزال الطحالب من البحيرة، ويعود الجمال الطبيعي للمياه الصافية قريبًا.²",
    stagesTitle: "التطبيق والملاحظة",
    stages: [
      {
        label: "التركيب",
        text: "وضع وحدتين من Turbu-Flow «Softer Water Conditioner» في البحيرة رقم 5 التي يبلغ حجمها 4000 م³. كما استُخدمت مضخة غاطسة وثلاثة خراطيم شفط لإزالة الطحالب الميتة.",
        alt: "فنيان يركّبان المعدات على هيكل عائم عند حافة البحيرة",
      },
      {
        label: "اليوم 2",
        text: "بعد يومين فقط، تتحلل الطحالب وتموت.",
        alt: "مياه خضراء فيها كتل من الطحالب المتحللة",
      },
      {
        label: "اليوم 6",
        text: "البحيرة بعد ستة أيام: ماتت 70% من الطحالب وأُزيلت.",
        alt: "سطح البحيرة الأخضر بعد ستة أيام من التركيب",
      },
      {
        label: "اليوم 8",
        text: "في اليوم الثامن، خلت البحيرة من الطحالب وصارت المياه صافية كالبلّور. لاحظ أن الأنبوب يُرى دون عوائق. وقد عاد إلى البحيرة زوج من بط المالارد، وهي علامة جيدة للمستقبل.",
        alt: "مياه بحيرة صافية يظهر فيها أنبوب بوضوح",
      },
    ],
    resultsTitle: "النتائج",
    resultsText:
      "كما يتضح، النتائج تتحدث عن نفسها. فقد أعيدت بحيرة كانت ملوثة بشدة بتكاثر الطحالب إلى حالتها الأصلية في وقت قصير جدًا. ولا يزال أحد أجهزة «Water Restorers» من Water Vital® في البحيرة لضمان معالجة مستمرة للمياه.",
    lakeAlt: "منظر عام للبحيرة بعد التطبيق",
    lakeCaption: "البحيرة في نهاية التطبيق (صورة معالجة بالحاسوب انطلاقًا من الصورة الأصلية).",
    turfTitle: "ملاحظة ميدانية إضافية على العشب المروي",
    turfText:
      "أفادت ملاحظة ميدانية إضافية بأن العشب المروي بمياه معالجة بـ Water Vital بدا أكثر صحة واكتسب لونًا أخضر أعمق. وقد يرتبط هذا التحسن بزيادة توافر معادن التربة للنباتات وزيادة امتصاص الجذور لها. يُوصى بإجراء تحاليل للتربة والنباتات للتحقق من الصلة المقترحة بتوافر المعادن وامتصاصها.",
    note1:
      "¹ يذكر التقرير الأصلي انخفاضًا في BOD. وBOD والأكسجين المذاب قياسان مختلفان؛ والتفسير التقني في التقييم أدناه.",
    note2:
      "² الآلية والنتائج هي ادعاءات واردة في التقرير الأصلي. ولم يُقَس أثر الجهاز وأثر التنظيف بالمضخة كلٌّ على حدة. انظر التقييم التقني أدناه.",
    photoCredit: "الصور: تقرير تطبيق Green Solutions.",
    assessTitle: "التقييم التقني والمعلومات الناقصة",
    assessSubtitle: "تقييم تكميلي للتقرير الأصلي",
    assessIntro:
      "يصف التقرير تحسنًا مرئيًا مصحوبًا بإزالة ميكانيكية للطحالب. ويدعم استكمال التفاصيل التالية عند إعداد تطبيق جديد لـ Water Vital في بركة تقييمًا سليمًا للنتيجة.",
    assess: [
      {
        h: "التمييز بين BOD والأكسجين المذاب",
        p: "يذكر التقرير الأصلي انخفاض BOD ضمن أسباب المياه غير الصحية. يصف BOD الأكسجين المستهلك أثناء التحلل البيولوجي للمادة العضوية؛ أما الأكسجين المذاب فيصف الأكسجين الموجود في الماء. وانخفاض BOD لا يعني بحد ذاته نقصًا في الأكسجين. وربما قصد الكاتب انخفاض الأكسجين المذاب. ولا بد من بيانات التحليل الأصلية لإجراء تصحيح نهائي. [3]",
      },
      {
        h: "إثبات إزالة المغذيات",
        p: "إن التفسير القائل إن تفكك الروابط الكيميائية يزيل مغذيات الطحالب لا تدعمه في التقرير تحاليل النيتروجين والفوسفور. وتغيّر الروابط الكيميائية أو الأشكال المعدنية لا يثبت بذاته إزالة النيتروجين والفوسفور الكليين من الماء. ينبغي أن يسجّل أي تطبيق جديد المدخلات من المغذيات وقياسات المياه وكمية الطحالب المُزالة. كما ينبغي تقييم فائض المغذيات ودرجة الحرارة وحركة المياه. [1, 2]",
      },
      {
        h: "الفصل بين أثر الجهاز وأثر التنظيف",
        p: "يدل استخدام مضخة غاطسة وثلاثة خراطيم شفط على أن التنظيف الميكانيكي أسهم في النتيجة المعلنة. وتتعلق ملاحظات الأيام 2 و6 و8 بهذا التطبيق المشترك. ولا يحدد التقرير كيف قيست نسبة 70% ولا مرجع المقارنة. كما أن صفاء الماء الأفضل يختلف عن نتيجة تحليلية للنيتروجين أو الفوسفور أو الملاءمة الميكروبيولوجية.",
      },
      {
        h: "استكمال بيانات الطراز والتشغيل",
        p: "يستخدم التقرير الأسماء SAT و Turbu-Flow و Water Vital. ينبغي تسجيل طراز الجهاز وسعته التقنية وبيانات الشركة المصنعة لتحديد صلته بمنتجات Water Vital الحالية. واستخدام جهازين في 4000 م³ لا يثبت أن العدد نفسه يكفي لبركة أخرى أو طراز آخر. كما ينبغي إضافة تدفق المضخة وموقع التركيب والعمق ومدة التشغيل وفترة المتابعة. ويجب أن يشمل تقييم الطاقة والصيانة المضخات والتهوية ومعدات التنظيف، إضافة إلى وحدة الجهاز.",
      },
      {
        h: "دعم ملاحظة العشب بالتحاليل",
        p: "لا يثبت لون العشب الأخضر الأعمق وحده زيادة في ذوبان المعادن. فالنيتروجين والحديد قد يؤثران في لون العشب، كما يؤثر pH التربة في توافر المغذيات. ويتطلب الماء والتربة قياسين منفصلين؛ وزيادة المغذيات الذائبة في بركة قد تغذّي الطحالب أيضًا. [1, 5, 6]",
      },
    ],
    sourcesTitle: "المصادر التقنية",
    planTitle: "خطة تطبيق Water Vital في بركة",
    planIntro:
      "النهج المقترح هو تقييم Water Vital في تجربة مقيسة تقترن بإزالة الطحالب وتقليل مدخلات المغذيات. وتتمثل الأهداف في تقليل الطحالب وانسداد المضخات، وتحسين صفاء المياه، وتحسن مستدام. وتقيّم القياسات المقارنة مساهمة الجهاز.",
    plan: [
      {
        h: "تقييم الموقع والتركيب",
        p: "سجّل حجم البركة ومساحة سطحها وعمقها ومدخلات المياه ووفرة الطحالب وتدفق الدوران. قيّم الطراز المدمج في الخط على مقطع مناسب من خط دوران قائم، مع مراعاة التدفق والضغط ومتطلبات التركيب لدى الشركة المصنعة. تأكد من ملاءمة طراز الخزان للغمر وسعته لذلك. ثبّته دون دفنه في رواسب القاع. اختر عدد الأجهزة بناءً على بيانات الموقع هذه.",
      },
      {
        h: "إزالة الطحالب ومنع عودتها",
        p: "أزل الطحالب السطحية والمواد المتحللة بمعدات جمع أو شفط مناسبة، وسجّل الكميات. ولأن التحلل يستهلك الأكسجين، راقب الأكسجين المذاب ووفّر تهوية مناسبة عند الحاجة. استقصِ مدخلات النيتروجين والفوسفور من سماد العشب والصرف ومياه الصرف والمخلفات العضوية وقلّلها، لمعالجة الحِمل الذي يشجع عودة نمو الطحالب. [1, 2, 4]",
      },
      {
        h: "المراقبة والمقارنة",
        p: "يُقترح التقاط صور وإجراء قياسات للمياه في المواقع نفسها عند البداية وفي الأيام 2 و6 و8 و14 و30 و45. راقب الأكسجين المذاب ودرجة الحرارة بوتيرة أعلى في البداية، ولا سيما في الصباح الباكر. وإذا توافرت بركتان متشابهتان ومستقلتان، فطبّق ممارسات التنظيف والتهوية نفسها على كلتيهما وركّب Water Vital في إحداهما فقط لمقارنة مساهمته الإضافية. أما المراقبة قبل التطبيق وبعده في بركة واحدة فتسجّل الأثر الكلي للتدخلات المجتمعة.",
      },
    ],
    planHead: ["المؤشر", "الوحدة أو السجل", "التقييم"],
    planRows: [
      ["وفرة الطحالب", "الكلوروفيل a أو عدّ مناسب للأنواع", "تغيّر حِمل الطحالب"],
      ["الصفاء", "العكارة وعمق Secchi", "تغيّر الرؤية"],
      ["الأكسجين", "الأكسجين المذاب، ملغ/لتر", "الحفاظ على ظروف الأكسجين"],
      ["المغذيات", "النيتروجين الكلي والفوسفور الكلي، ملغ/لتر", "تغيّر حِمل المغذيات"],
      ["الحِمل العضوي", "BOD و COD عند الاقتضاء، ملغ/لتر", "تتبّع المواد القابلة للتحلل"],
      ["التشغيل", "كمية الطحالب المُزالة وسجل الانسداد", "احتياجات التنظيف والضخ"],
    ],
    planOutro1:
      "إن أزمنة الأيام 2 و6 و8 هي ملاحظات من التقرير الأصلي. ولا ينبغي الالتزام بمدة إنجاز أو نسبة إزالة لتطبيق جديد إلا بعد إتمام القياسات في الموقع.",
    planOutro2:
      "راقب لون العشب وكثافته ونمو جذوره قياسًا بمنطقة مقارنة مستقلة تخضع لظروف الري والتسميد نفسها. قارن تحاليل البداية والمتابعة لـ pH التربة والمغذيات المتاحة وتراكيز المغذيات في الأنسجة النباتية.",
  },

  zh: {
    eyebrow: "应用案例 · 韩国",
    title: "高尔夫球场湖泊中的绿藻",
    lede: "Green Solutions 应用报告：韩国的一座高尔夫球场、被藻类侵占的湖泊，以及逐日观察。",
    greenAlt: "高尔夫球场的果岭，插着黄色旗帜，旁边是一个池塘",
    greenCaption: "示意图：高尔夫球场的果岭。",
    clubTitle: "高尔夫俱乐部",
    clubText:
      "Gapyeong Benest Golf Club 于 2000 年开业，排名第一，位于韩国。这是一座享有盛誉的 Jack Nicklaus Signature 球场。其起伏果岭的美景，靠多个湖泊和池塘的灌溉来维持。",
    problemTitle: "藻类问题",
    problemIntro: "这些湖泊既是球场景观中美丽的一部分，也是灌溉所必需的蓄水池。藻类过度生长造成了若干问题：",
    problems: [
      "总悬浮固体（TSS）增加，生化需氧量（BOD）下降，使水质变得不健康。¹",
      "水体逐渐缺氧，氧含量降低。",
      "遮光，抑制了有益水生植物的生长。",
      "水泵堵塞。",
      "死亡或濒死藻类散发的异味。",
      "外观不雅。",
    ],
    problemOutro: "气温偏高和降雨少于往常，使这些问题更加严重。",
    controlsTitle: "常见的藻类控制方法",
    controls: [
      "过去曾使用化学方法，包括除草剂和杀藻剂、硫酸铜和氯漂白剂。但这些方法本身也有不良后果。",
      "用于曝气和搅动水体的喷泉增加了自然的生物活动，并略微减少了藻类生长。",
      "人工清除藻类需要大量劳力。",
    ],
    solutionTitle: "Water Vital® 除藻方案",
    solutionText1:
      "近来，在湖泊和池塘中使用无毒有机产品变得非常流行。这是一种无需除草剂或杀藻剂的天然方案；但它需要持续的费用和定期维护。因此，我们选择了一种无毒、完全天然、无需定期维护、无需能源、无需耗材的替代方案。",
    solutionText2:
      "方案非常简单。在 Water Vital® 的做法中，湖中安装了两台 SAT “Softer Water Conditioner”，作为不用电、不用化学品的催化式水处理。据原始报告，这一过程会打断高矿化水中的化学键。这样就清除了藻类赖以为生的养分，藻类很快死亡。随后藻类被从湖中清走，清澈湖水的天然美景很快恢复。²",
    stagesTitle: "应用与观察",
    stages: [
      {
        label: "安装",
        text: "将两台 Turbu-Flow “Softer Water Conditioner” 放入 5 号湖，该湖容积为 4000 m³。还使用了一台潜水泵和三根吸水软管来清除死藻。",
        alt: "两名技术人员在湖边的浮动框架上安装设备",
      },
      {
        label: "第 2 天",
        text: "仅过两天，藻类就开始分解、死亡。",
        alt: "带有分解中藻团的绿色湖水",
      },
      {
        label: "第 6 天",
        text: "六天后的湖面：70% 的藻类已死亡并被清除。",
        alt: "安装六天后绿色的湖面",
      },
      {
        label: "第 8 天",
        text: "到第八天，湖中的藻类已清除，湖水清澈见底。请注意，水管清晰可见，没有任何遮挡。一对绿头鸭已回到湖中，这是未来的好兆头。",
        alt: "清澈的湖水，水管清晰可见",
      },
    ],
    resultsTitle: "结果",
    resultsText:
      "可以看到，结果不言自明。一个曾被藻华严重污染的湖泊，在很短的时间内恢复了原貌。其中一台 Water Vital® “Water Restorers” 仍留在湖中，持续处理湖水。",
    lakeAlt: "应用后湖泊的全景",
    lakeCaption: "应用结束时的湖泊（根据原始照片经计算机处理的图像）。",
    turfTitle: "对灌溉草坪的补充田间观察",
    turfText:
      "一项补充田间观察报告称，用经 Water Vital 处理的水灌溉的草坪看起来更健康，绿色更深。这种改善可能与土壤矿物质对植物的有效性提高以及根系吸收增加有关。建议进行土壤和植物分析，以验证其与矿物质有效性和吸收之间的假定联系。",
    note1: "¹ 原始报告提到 BOD 下降。BOD 与溶解氧是两种不同的测量指标；技术说明见下文的评估。",
    note2: "² 作用机理和结果是原始报告中的说法。设备的作用与泵辅助清理的作用并未分别测量。请见下文的技术评估。",
    photoCredit: "照片：Green Solutions 应用报告。",
    assessTitle: "技术评估与缺失信息",
    assessSubtitle: "对原始报告的补充评估",
    assessIntro:
      "报告描述了在人工清除藻类的同时出现的明显改善。在为池塘准备新的 Water Vital 应用时补全以下细节，有助于对结果作出可靠的评估。",
    assess: [
      {
        h: "区分 BOD 与溶解氧",
        p: "原始报告把 BOD 下降列为水质不健康的原因之一。BOD 描述有机物生物分解过程中消耗的氧；溶解氧描述水中存在的氧。BOD 下降本身并不意味着缺氧。作者可能想说的是溶解氧下降。要作出最终更正，需要原始分析数据。[3]",
      },
      {
        h: "证明养分被去除",
        p: "报告中并无氮、磷分析来支持“化学键断裂会清除藻类养分”这一解释。化学键或矿物形态的改变，本身并不能证明水中总氮和总磷已被去除。新的应用应记录养分输入、水质测量以及清除的藻类数量，并评估养分过剩、温度和水体流动。[1, 2]",
      },
      {
        h: "区分设备作用与清理作用",
        p: "使用潜水泵和三根吸水软管，说明机械清理对所报告的结果有贡献。第 2、6、8 天的观察针对的是这种综合应用。报告没有说明 70% 这一数值是如何测得的，也没有说明其比较基线。此外，水更清澈也不同于氮、磷或微生物适用性的分析结果。",
      },
      {
        h: "补全型号与运行细节",
        p: "报告使用了 SAT、Turbu-Flow 和 Water Vital 这几个名称。应记录设备型号、技术容量和制造商信息，以确定其与当前 Water Vital 产品的关系。在 4000 m³ 中使用两台设备，并不能说明同样数量对另一个池塘或型号就足够。还应补充水泵流量、安装位置、深度、运行时间和跟踪期。能耗与维护评估除设备模块外，还应涵盖水泵、曝气和清理设备。",
      },
      {
        h: "用分析支持草坪观察",
        p: "草坪颜色更深的绿色本身并不能证明矿物溶解增加。氮和铁都会影响草坪颜色，而土壤 pH 会影响养分有效性。水与土壤需要分别测量；池塘中可溶性养分增加，也可能滋养藻类。[1, 5, 6]",
      },
    ],
    sourcesTitle: "技术来源",
    planTitle: "池塘 Water Vital 应用计划",
    planIntro:
      "建议的做法是：在有计量的试验中评估 Water Vital，并结合藻类清除和减少养分输入。目标是减少藻类和水泵堵塞、提高水体清澈度并实现持续改善。对比测量用于评估设备的贡献。",
    plan: [
      {
        h: "场地评估与安装",
        p: "记录池塘容积、表面积、深度、进水、藻类丰度和循环流量。在现有循环管线的合适管段上评估管道式型号，并遵守制造商的流量、压力和安装要求。确认罐体式型号适合浸没且容量足够。固定时不要埋入底部沉积物中。根据这些场地数据选定设备数量。",
      },
      {
        h: "藻类清除与防止复发",
        p: "用合适的收集或抽吸设备清除表层藻类和正在分解的物质，并记录数量。由于分解会消耗氧气，应监测溶解氧，必要时提供适当的曝气。调查并减少来自草坪肥料、排水、废水和有机碎屑的氮、磷输入，以应对促使藻类再次生长的负荷。[1, 2, 4]",
      },
      {
        h: "监测与对比",
        p: "建议在起始时以及第 2、6、8、14、30 和 45 天，在相同位置拍照并测量水质。起初更频繁地监测溶解氧和温度，尤其是清晨。如果有两个相似且相互独立的池塘，对两者采用相同的清理和曝气做法，只在其中一个安装 Water Vital，以比较其额外贡献。对单个池塘进行前后监测，记录的是各项措施合并后的总体效果。",
      },
    ],
    planHead: ["指标", "单位或记录", "评估"],
    planRows: [
      ["藻类丰度", "叶绿素 a 或合适的物种计数", "藻类负荷的变化"],
      ["清澈度", "浊度和塞氏盘深度", "能见度的变化"],
      ["氧气", "溶解氧，mg/L", "维持氧气条件"],
      ["养分", "总氮和总磷，mg/L", "养分负荷的变化"],
      ["有机负荷", "BOD，必要时加 COD，mg/L", "跟踪可降解物质"],
      ["运行", "清除的藻类数量和堵塞记录", "清理和水泵需求"],
    ],
    planOutro1:
      "第 2、6、8 天的时间是原始报告中的观察结果。新应用的完成时间或清除百分比，只有在现场测量完成后才应作出承诺。",
    planOutro2:
      "将草坪的颜色、密度和根系发育，与灌溉和施肥条件相同的独立对照区进行比较。比较起始和后续的土壤 pH、有效养分以及植物组织养分浓度的分析结果。",
  },
};

/** Les langues où la section est servie. Le français d'abord : c'est la langue de repli. */
export function algues(langue: string): TextesAlgues {
  return ALGUES[langue] ?? ALGUES.fr;
}
