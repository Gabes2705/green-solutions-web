/**
 * Les mots de la page « Tomate d'industrie en Espagne ».
 *
 * Cette page existe parce que l'encadré « Impact économique par hectare »
 * annonce un exemple sur tomate, et que le bouton menait jusqu'ici à l'essai
 * pastèque du Mexique : on cliquait sur tomate, on tombait sur pastèque.
 * Plutôt que d'inventer un essai tomate que nous n'avons pas, la page dit
 * d'où vient chaque chiffre, montre le calcul en grand, et renvoie aux deux
 * essais maraîchers qui le portent.
 *
 * Les chiffres ne sont pas ici : ils viennent de lib/gains.ts, comme ceux de
 * l'encadré, pour qu'aucune langue ne puisse annoncer un prix différent.
 * Les {accolades} sont remplacées par le composant.
 */

export type TextesTomate = {
  retour: string;
  titre: string;
  description: string;
  chapeau: string;
  boutonEssais: string;
  calculEyebrow: string;
  calculTitre: string;
  /** {prix} {kg} {cout} */
  calculTexte: string;
  imagesEyebrow: string;
  imagesTitre: string;
  graphRecolte: string;
  graphSans: string;
  graphAvec: string;
  graphArgent: string;
  graphCout: string;
  graphRecette: string;
  solEyebrow: string;
  solTitre: string;
  solTexte: string;
  filmLegende: string;
  filmAlt: string;
  sourcesEyebrow: string;
  sourcesTitre: string;
  /** {dose} {doseDetail} */
  source1: string;
  /** {prix} */
  source2: string;
  /** {h} : la hausse de récolte retenue */
  source3: string;
  /** {p} : la hausse mesurée sur pomme de terre, {h} celle de la pastèque */
  source4: string;
  /** {avant} {prixVente} */
  source5: string;
  espagneEyebrow: string;
  espagneTitre: string;
  espagne1: string;
  espagne2: string;
  espagne3: string;
  dossierLien: string;
  suiteEyebrow: string;
  suiteTitre: string;
  tousEssais: string;
};

export const TOMATE: Record<string, TextesTomate> = {
  fr: {
    retour: "← Retour au calcul par hectare",
    titre: "Tomate d'industrie en Espagne : ce que l'hydrorétenteur change à l'hectare",
    description:
      "Le calcul complet pour un hectare de tomate d'industrie en plein champ : dose d'hydrorétenteur, coût, gain de récolte, prix payé au producteur et gain net. Chaque chiffre avec sa source.",
    chapeau:
      "Trois grammes au pied, soixante-quinze kilos à l'hectare : voici le calcul complet, ligne par ligne, et l'origine de chaque chiffre. Nous n'avons pas encore d'essai sur tomate ; le gain de récolte retenu ici est celui mesuré sur pastèque au Mexique, une culture maraîchère conduite de la même façon. C'est écrit en clair, et l'essai est en bas de page.",
    boutonEssais: "Voir les essais qui portent ces chiffres",
    calculEyebrow: "Le calcul",
    calculTitre: "De la dose au gain net, sur un hectare",
    calculTexte:
      "Le produit coûte {prix} € le kilo, rendu cultivateur. À cette dose, il en faut {kg} kg pour un hectare, soit {cout} € à la plantation. Voici ce que cet hectare rend ensuite.",
    imagesEyebrow: "En images",
    imagesTitre: "Le même calcul, en deux dessins",
    graphRecolte: "Récolte de tomate d'industrie (t/ha)",
    graphSans: "Sans hydrorétenteur",
    graphAvec: "Avec hydrorétenteur",
    graphArgent: "Sur un hectare, en euros",
    graphCout: "Coût du produit",
    graphRecette: "Recette en plus",
    solEyebrow: "Ce qui se passe sous la terre",
    solTitre: "L'eau reste à portée des racines",
    solTexte:
      "L'hydrorétenteur est une poudre qui gonfle en buvant l'eau de pluie et l'eau d'irrigation. Il la garde dans la zone des racines au lieu de la laisser filer plus bas. La plante boit quand elle en a besoin, et l'agriculteur espace ses arrosages sans que la tomate ait soif.",
    filmLegende:
      "Vue en coupe : à gauche un plant de tomate sans hydrorétenteur, à droite le même plant avec les billes de gel qui retiennent l'eau autour des racines.",
    filmAlt:
      "Animation en coupe : deux plants de tomate côte à côte, racines visibles dans la terre, avec des billes de gel autour de celles de droite",
    sourcesEyebrow: "D'où viennent les chiffres",
    sourcesTitre: "Chaque ligne, et sa source",
    source1:
      "Dose et densité — {dose}, {doseDetail}. Ce sont les ordres de grandeur du plein champ espagnol : le calcul est à refaire avec votre densité réelle.",
    source2: "Prix du produit — {prix} € le kilo, rendu cultivateur. C'est notre tarif, pas une estimation.",
    source3:
      "Gain de récolte — + {h} %. Mesuré sur pastèque au Mexique, pas sur tomate : nous n'avons pas encore d'essai tomate. Pastèque et tomate d'industrie se conduisent de la même façon, en plein champ, au goutte-à-goutte, sur sol travaillé.",
    source4:
      "Deuxième repère — sur pomme de terre en Afrique du Sud, la hausse mesurée est de + {p} %, tout près des + {h} % de la pastèque. Deux cultures maraîchères, deux continents, le même ordre de grandeur.",
    source5:
      "Récolte de référence et prix payé au producteur — {avant} t/ha et {prixVente} € le kilo sont des moyennes de marché. Elles changent d'une région et d'une année à l'autre, et restent à confirmer.",
    espagneEyebrow: "Pourquoi l'Espagne",
    espagneTitre: "Là où chaque mètre cube compte",
    espagne1:
      "Le Campo de Dalías et le Campo de Cartagena fournissent l'Europe en tomate, poivron, concombre et laitue presque toute l'année.",
    espagne2:
      "Les nappes sont surexploitées et le transfert Tage-Segura se réduit : l'eau dessalée et l'eau recyclée prennent le relais.",
    espagne3:
      "L'eau dessalée coûte plus cher que l'eau de forage : chaque mètre cube économisé se lit directement sur la marge de l'exploitation.",
    dossierLien: "Lire notre étude de marché Espagne (en espagnol)",
    suiteEyebrow: "Aller plus loin",
    suiteTitre: "Les essais qui portent ces chiffres",
    tousEssais: "Tous nos essais de terrain →",
  },

  en: {
    retour: "← Back to the per-hectare sums",
    titre: "Processing tomato in Spain: what the water retainer changes per hectare",
    description:
      "The full sums for one hectare of open-field processing tomato: water-retainer dose, cost, yield gain, price paid to the grower and net gain. Every figure with its source.",
    chapeau:
      "Three grams per plant, seventy-five kilos per hectare: here are the full sums, line by line, and where each figure comes from. We have no tomato trial yet; the yield gain used here is the one measured on watermelon in Mexico, a market-garden crop grown the same way. We say so plainly, and the trial is linked at the foot of the page.",
    boutonEssais: "See the trials behind these figures",
    calculEyebrow: "The sums",
    calculTitre: "From the dose to the net gain, on one hectare",
    calculTexte:
      "The product costs {prix} € a kilo, delivered to the grower. At this dose one hectare takes {kg} kg, that is {cout} € at planting. Here is what the hectare brings back.",
    imagesEyebrow: "In pictures",
    imagesTitre: "The same sums, in two drawings",
    graphRecolte: "Processing tomato yield (t/ha)",
    graphSans: "Without the water retainer",
    graphAvec: "With the water retainer",
    graphArgent: "On one hectare, in euros",
    graphCout: "Cost of the product",
    graphRecette: "Extra revenue",
    solEyebrow: "What happens under the soil",
    solTitre: "The water stays within reach of the roots",
    solTexte:
      "The water retainer is a powder that swells as it drinks rainwater and irrigation water. It holds that water in the root zone instead of letting it drain away below. The plant drinks when it needs to, and the grower can space out watering without the tomato going thirsty.",
    filmLegende:
      "Cross-section: on the left a tomato plant without the water retainer, on the right the same plant with the gel beads holding water around the roots.",
    filmAlt:
      "Cross-section animation: two tomato plants side by side, roots visible in the soil, gel beads around the roots on the right",
    sourcesEyebrow: "Where the figures come from",
    sourcesTitre: "Every line, and its source",
    source1:
      "Dose and planting density — {dose}, {doseDetail}. These are the usual orders of magnitude for the Spanish open field: redo the sums with your own density.",
    source2: "Price of the product — {prix} € a kilo, delivered to the grower. That is our price, not an estimate.",
    source3:
      "Yield gain — + {h}%. Measured on watermelon in Mexico, not on tomato: we have no tomato trial yet. Watermelon and processing tomato are grown the same way, in the open field, under drip irrigation, on worked soil.",
    source4:
      "A second marker — on potato in South Africa the measured gain is + {p}%, very close to the + {h}% on watermelon. Two market-garden crops, two continents, the same order of magnitude.",
    source5:
      "Reference yield and price paid to the grower — {avant} t/ha and {prixVente} € a kilo are market averages. They change from one region and one year to the next, and remain to be confirmed.",
    espagneEyebrow: "Why Spain",
    espagneTitre: "Where every cubic metre counts",
    espagne1:
      "The Campo de Dalías and the Campo de Cartagena supply Europe with tomato, pepper, cucumber and lettuce almost all year round.",
    espagne2:
      "The aquifers are over-drawn and the Tagus-Segura transfer is shrinking: desalinated and recycled water are taking over.",
    espagne3:
      "Desalinated water costs more than borehole water: every cubic metre saved shows up directly in the farm's margin.",
    dossierLien: "Read our Spanish market study (in Spanish)",
    suiteEyebrow: "Going further",
    suiteTitre: "The trials behind these figures",
    tousEssais: "All our field trials →",
  },

  es: {
    retour: "← Volver al cálculo por hectárea",
    titre: "Tomate de industria en España: lo que el hidrorretenedor cambia por hectárea",
    description:
      "El cálculo completo para una hectárea de tomate de industria al aire libre: dosis de hidrorretenedor, coste, aumento de cosecha, precio pagado al agricultor y ganancia neta. Cada cifra con su fuente.",
    chapeau:
      "Tres gramos por planta, setenta y cinco kilos por hectárea: aquí está el cálculo completo, línea por línea, y el origen de cada cifra. Todavía no tenemos un ensayo en tomate; el aumento de cosecha que usamos aquí es el medido en sandía en México, un cultivo hortícola que se lleva igual. Lo decimos con claridad, y el ensayo está enlazado al pie de la página.",
    boutonEssais: "Ver los ensayos que sostienen estas cifras",
    calculEyebrow: "El cálculo",
    calculTitre: "De la dosis a la ganancia neta, en una hectárea",
    calculTexte:
      "El producto cuesta {prix} € el kilo, puesto en la explotación. A esta dosis, una hectárea necesita {kg} kg, es decir {cout} € en la plantación. Esto es lo que devuelve la hectárea.",
    imagesEyebrow: "En imágenes",
    imagesTitre: "El mismo cálculo, en dos dibujos",
    graphRecolte: "Cosecha de tomate de industria (t/ha)",
    graphSans: "Sin hidrorretenedor",
    graphAvec: "Con hidrorretenedor",
    graphArgent: "En una hectárea, en euros",
    graphCout: "Coste del producto",
    graphRecette: "Ingresos adicionales",
    solEyebrow: "Lo que ocurre bajo la tierra",
    solTitre: "El agua se queda al alcance de las raíces",
    solTexte:
      "El hidrorretenedor es un polvo que se hincha al beber el agua de lluvia y de riego. La retiene en la zona de las raíces en lugar de dejarla escapar hacia abajo. La planta bebe cuando lo necesita, y el agricultor espacia los riegos sin que el tomate pase sed.",
    filmLegende:
      "Vista en corte: a la izquierda una planta de tomate sin hidrorretenedor, a la derecha la misma planta con las perlas de gel que retienen el agua alrededor de las raíces.",
    filmAlt:
      "Animación en corte: dos plantas de tomate una al lado de la otra, con las raíces visibles en la tierra y perlas de gel alrededor de las de la derecha",
    sourcesEyebrow: "De dónde salen las cifras",
    sourcesTitre: "Cada línea, y su fuente",
    source1:
      "Dosis y densidad — {dose}, {doseDetail}. Son los órdenes de magnitud habituales del aire libre español: rehaga el cálculo con su densidad real.",
    source2: "Precio del producto — {prix} € el kilo, puesto en la explotación. Es nuestra tarifa, no una estimación.",
    source3:
      "Aumento de cosecha — + {h} %. Medido en sandía en México, no en tomate: todavía no tenemos un ensayo en tomate. La sandía y el tomate de industria se llevan igual, al aire libre, con riego por goteo y suelo trabajado.",
    source4:
      "Segunda referencia — en patata en Sudáfrica el aumento medido es del + {p} %, muy cerca del + {h} % de la sandía. Dos cultivos hortícolas, dos continentes, el mismo orden de magnitud.",
    source5:
      "Cosecha de referencia y precio pagado al agricultor — {avant} t/ha y {prixVente} € el kilo son medias de mercado. Cambian según la región y el año, y quedan por confirmar.",
    espagneEyebrow: "Por qué España",
    espagneTitre: "Donde cada metro cúbico cuenta",
    espagne1:
      "El Campo de Dalías y el Campo de Cartagena abastecen a Europa de tomate, pimiento, pepino y lechuga casi todo el año.",
    espagne2:
      "Los acuíferos están sobreexplotados y el trasvase Tajo-Segura se reduce: el agua desalada y la regenerada toman el relevo.",
    espagne3:
      "El agua desalada cuesta más que la de pozo: cada metro cúbico ahorrado se ve directamente en la cuenta de la explotación.",
    dossierLien: "Leer nuestro estudio de mercado de España",
    suiteEyebrow: "Seguir leyendo",
    suiteTitre: "Los ensayos que sostienen estas cifras",
    tousEssais: "Todos nuestros ensayos de campo →",
  },

  pt: {
    retour: "← Voltar ao cálculo por hectare",
    titre: "Tomate de indústria em Espanha: o que o hidrorretentor muda por hectare",
    description:
      "O cálculo completo para um hectare de tomate de indústria ao ar livre: dose de hidrorretentor, custo, aumento de colheita, preço pago ao produtor e ganho líquido. Cada número com a sua fonte.",
    chapeau:
      "Três gramas por pé, setenta e cinco quilos por hectare: aqui está o cálculo completo, linha a linha, e a origem de cada número. Ainda não temos um ensaio em tomate; o aumento de colheita usado aqui é o medido em melancia no México, uma cultura hortícola conduzida da mesma maneira. Dizemo-lo com clareza, e o ensaio está ligado no fim da página.",
    boutonEssais: "Ver os ensaios que sustentam estes números",
    calculEyebrow: "O cálculo",
    calculTitre: "Da dose ao ganho líquido, num hectare",
    calculTexte:
      "O produto custa {prix} € o quilo, entregue ao produtor. Nesta dose, um hectare leva {kg} kg, ou seja {cout} € na plantação. Eis o que esse hectare devolve.",
    imagesEyebrow: "Em imagens",
    imagesTitre: "O mesmo cálculo, em dois desenhos",
    graphRecolte: "Colheita de tomate de indústria (t/ha)",
    graphSans: "Sem hidrorretentor",
    graphAvec: "Com hidrorretentor",
    graphArgent: "Num hectare, em euros",
    graphCout: "Custo do produto",
    graphRecette: "Receita adicional",
    solEyebrow: "O que acontece debaixo da terra",
    solTitre: "A água fica ao alcance das raízes",
    solTexte:
      "O hidrorretentor é um pó que incha ao beber a água da chuva e da rega. Guarda-a na zona das raízes em vez de a deixar escorrer mais abaixo. A planta bebe quando precisa, e o agricultor espaça as regas sem que o tomate tenha sede.",
    filmLegende:
      "Vista em corte: à esquerda um pé de tomate sem hidrorretentor, à direita o mesmo pé com as pérolas de gel que retêm a água à volta das raízes.",
    filmAlt:
      "Animação em corte: dois pés de tomate lado a lado, raízes visíveis na terra, com pérolas de gel à volta das da direita",
    sourcesEyebrow: "De onde vêm os números",
    sourcesTitre: "Cada linha, e a sua fonte",
    source1:
      "Dose e densidade — {dose}, {doseDetail}. São as ordens de grandeza habituais do ar livre espanhol: refaça o cálculo com a sua densidade real.",
    source2: "Preço do produto — {prix} € o quilo, entregue ao produtor. É a nossa tabela, não uma estimativa.",
    source3:
      "Aumento de colheita — + {h} %. Medido em melancia no México, não em tomate: ainda não temos um ensaio em tomate. Melancia e tomate de indústria conduzem-se da mesma maneira, ao ar livre, com rega gota a gota, em solo trabalhado.",
    source4:
      "Segunda referência — em batata na África do Sul o aumento medido é de + {p} %, muito perto dos + {h} % da melancia. Duas culturas hortícolas, dois continentes, a mesma ordem de grandeza.",
    source5:
      "Colheita de referência e preço pago ao produtor — {avant} t/ha e {prixVente} € o quilo são médias de mercado. Mudam de região para região e de ano para ano, e ficam por confirmar.",
    espagneEyebrow: "Porquê Espanha",
    espagneTitre: "Onde cada metro cúbico conta",
    espagne1:
      "O Campo de Dalías e o Campo de Cartagena abastecem a Europa de tomate, pimento, pepino e alface quase todo o ano.",
    espagne2:
      "Os aquíferos estão sobreexplorados e o trasvase Tejo-Segura reduz-se: a água dessalinizada e a água reciclada tomam o lugar.",
    espagne3:
      "A água dessalinizada custa mais do que a água de furo: cada metro cúbico poupado lê-se diretamente na margem da exploração.",
    dossierLien: "Ler o nosso estudo de mercado de Espanha (em espanhol)",
    suiteEyebrow: "Ir mais longe",
    suiteTitre: "Os ensaios que sustentam estes números",
    tousEssais: "Todos os nossos ensaios de campo →",
  },

  ar: {
    retour: "← العودة إلى الحساب لكل هكتار",
    titre: "طماطم التصنيع في إسبانيا: ما الذي يغيّره حابس الماء في الهكتار",
    description:
      "الحساب الكامل لهكتار واحد من طماطم التصنيع في الحقل المكشوف: جرعة حابس الماء، والتكلفة، والزيادة في المحصول، والسعر المدفوع للمزارع، والربح الصافي. كل رقم مع مصدره.",
    chapeau:
      "ثلاثة غرامات للشتلة، وخمسة وسبعون كيلوغرامًا للهكتار: هذا هو الحساب الكامل، سطرًا سطرًا، ومصدر كل رقم. ليست لدينا حتى الآن تجربة على الطماطم؛ والزيادة المعتمدة هنا هي تلك التي قيست على البطيخ في المكسيك، وهو محصول خضري يُزرع بالطريقة نفسها. نقول ذلك بوضوح، ورابط التجربة في أسفل الصفحة.",
    boutonEssais: "اطّلع على التجارب التي تستند إليها هذه الأرقام",
    calculEyebrow: "الحساب",
    calculTitre: "من الجرعة إلى الربح الصافي، في هكتار واحد",
    calculTexte:
      "يكلّف المنتج {prix} يورو للكيلوغرام، مسلَّمًا إلى المزارع. وبهذه الجرعة يحتاج الهكتار إلى {kg} كغ، أي {cout} يورو عند الزراعة. وهذا ما يعيده الهكتار بعد ذلك.",
    imagesEyebrow: "بالصور",
    imagesTitre: "الحساب نفسه، في رسمين",
    graphRecolte: "محصول طماطم التصنيع (طن/هكتار)",
    graphSans: "بدون حابس الماء",
    graphAvec: "مع حابس الماء",
    graphArgent: "في هكتار واحد، باليورو",
    graphCout: "تكلفة المنتج",
    graphRecette: "الإيراد الإضافي",
    solEyebrow: "ما يحدث تحت التربة",
    solTitre: "الماء يبقى في متناول الجذور",
    solTexte:
      "حابس الماء مسحوق ينتفخ وهو يشرب ماء المطر وماء الري. يحتفظ به في منطقة الجذور بدل أن يتركه يتسرّب إلى الأعماق. فتشرب النبتة حين تحتاج، ويباعد المزارع بين الريّات دون أن تعطش الطماطم.",
    filmLegende:
      "مقطع عرضي: على اليسار شتلة طماطم بدون حابس الماء، وعلى اليمين الشتلة نفسها مع حبيبات الجل التي تحبس الماء حول الجذور.",
    filmAlt:
      "رسم متحرك بمقطع عرضي: شتلتا طماطم جنبًا إلى جنب، والجذور ظاهرة في التربة، مع حبيبات جل حول جذور اليمنى",
    sourcesEyebrow: "من أين تأتي الأرقام",
    sourcesTitre: "كل سطر، ومصدره",
    source1:
      "الجرعة والكثافة — {dose}، {doseDetail}. هذه هي الأحجام المعتادة في الحقل المكشوف الإسباني: أعد الحساب بكثافتك الحقيقية.",
    source2: "سعر المنتج — {prix} يورو للكيلوغرام، مسلَّمًا إلى المزارع. هذا تعريفتنا، لا تقدير.",
    source3:
      "الزيادة في المحصول — + {h} %. قيست على البطيخ في المكسيك، لا على الطماطم: ليست لدينا بعد تجربة على الطماطم. ويُزرع البطيخ وطماطم التصنيع بالطريقة نفسها، في الحقل المكشوف، بالري بالتنقيط، وفي تربة محروثة.",
    source4:
      "مرجع ثانٍ — على البطاطس في جنوب أفريقيا بلغت الزيادة المقيسة + {p} %، قريبة جدًا من + {h} % على البطيخ. محصولان خضريان، وقارتان، والحجم نفسه.",
    source5:
      "المحصول المرجعي والسعر المدفوع للمزارع — {avant} طن/هكتار و{prixVente} يورو للكيلوغرام متوسطات سوقية. تتغيّر من منطقة إلى أخرى ومن سنة إلى أخرى، وتبقى بانتظار التأكيد.",
    espagneEyebrow: "لماذا إسبانيا",
    espagneTitre: "حيث يُحسَب كل متر مكعّب",
    espagne1:
      "يزوّد سهلا دالياس وقرطاجنة أوروبا بالطماطم والفلفل والخيار والخس طوال السنة تقريبًا.",
    espagne2:
      "المياه الجوفية مستنزفة، وتحويل تاجة-سيغورا يتقلّص: فحلّت محلّه المياه المحلاة والمياه المعاد استعمالها.",
    espagne3:
      "المياه المحلاة أغلى من مياه الآبار: كل متر مكعّب يُوفَّر يظهر مباشرة في هامش المزرعة.",
    dossierLien: "اقرأ دراستنا لسوق إسبانيا (بالإسبانية)",
    suiteEyebrow: "للمزيد",
    suiteTitre: "التجارب التي تستند إليها هذه الأرقام",
    tousEssais: "كل تجاربنا الميدانية ←",
  },

  zh: {
    retour: "← 返回每公顷的计算",
    titre: "西班牙加工番茄：保水剂对每公顷的改变",
    description:
      "一公顷露地加工番茄的完整计算：保水剂用量、成本、增产幅度、农民收购价和净收益。每个数字都注明出处。",
    chapeau:
      "每株三克，每公顷七十五公斤：这里是完整的计算，一行一行，并说明每个数字的来源。我们还没有番茄试验；此处采用的增产幅度来自墨西哥的西瓜试验，那是一种栽培方式相同的蔬菜作物。我们把话说明白，试验链接就在页面底部。",
    boutonEssais: "查看支撑这些数字的试验",
    calculEyebrow: "计算",
    calculTitre: "从用量到净收益，按一公顷算",
    calculTexte:
      "产品送到农户手上是每公斤 {prix} 欧元。按此用量，一公顷需要 {kg} 公斤，即种植时投入 {cout} 欧元。以下是这一公顷随后的回报。",
    imagesEyebrow: "图示",
    imagesTitre: "同一笔账，两张图",
    graphRecolte: "加工番茄产量（吨/公顷）",
    graphSans: "不用保水剂",
    graphAvec: "使用保水剂",
    graphArgent: "每公顷，以欧元计",
    graphCout: "产品成本",
    graphRecette: "增加的收入",
    solEyebrow: "土里发生了什么",
    solTitre: "水留在根系够得着的地方",
    solTexte:
      "保水剂是一种粉末，吸收雨水和灌溉水后会膨胀。它把水留在根系区域，而不是任其向下流失。植株需要时就能喝到水，农民可以拉长浇水间隔，番茄也不会口渴。",
    filmLegende:
      "剖面图：左边是没有保水剂的番茄苗，右边是同样的苗，根系周围有锁住水分的凝胶颗粒。",
    filmAlt: "剖面动画：两株番茄并排，土中可见根系，右边那株根系周围有凝胶颗粒",
    sourcesEyebrow: "数字从哪里来",
    sourcesTitre: "每一行，都有出处",
    source1:
      "用量与密度 — {dose}，{doseDetail}。这是西班牙露地种植的常见量级：请用您自己的实际密度重算一遍。",
    source2: "产品价格 — 每公斤 {prix} 欧元，送到农户手上。这是我们的价目，不是估算。",
    source3:
      "增产幅度 — + {h} %。测于墨西哥的西瓜，不是番茄：我们还没有番茄试验。西瓜与加工番茄的栽培方式相同，都是露地、滴灌、耕作过的土壤。",
    source4:
      "第二个参照 — 南非马铃薯实测增产 + {p} %，与西瓜的 + {h} % 十分接近。两种蔬菜作物，两个大洲，同一个量级。",
    source5:
      "参照产量与农民收购价 — {avant} 吨/公顷和每公斤 {prixVente} 欧元都是市场均值。它们因地区和年份而异，仍待确认。",
    espagneEyebrow: "为什么是西班牙",
    espagneTitre: "每一立方米都要算的地方",
    espagne1: "达利亚斯平原和卡塔赫纳平原几乎全年向欧洲供应番茄、辣椒、黄瓜和生菜。",
    espagne2: "地下水超采，塔霍-塞古拉调水量在减少：海水淡化水和再生水正在顶上来。",
    espagne3: "淡化水比井水贵：每省下一立方米，都会直接体现在农场的利润上。",
    dossierLien: "阅读我们的西班牙市场研究（西班牙语）",
    suiteEyebrow: "延伸阅读",
    suiteTitre: "支撑这些数字的试验",
    tousEssais: "我们全部的田间试验 →",
  },

  id: {
    retour: "← Kembali ke perhitungan per hektar",
    titre: "Tomat industri di Spanyol: apa yang diubah penahan air per hektar",
    description:
      "Perhitungan lengkap untuk satu hektar tomat industri di lahan terbuka: dosis penahan air, biaya, kenaikan panen, harga yang dibayar kepada petani, dan keuntungan bersih. Setiap angka dengan sumbernya.",
    chapeau:
      "Tiga gram per batang, tujuh puluh lima kilo per hektar: inilah perhitungan lengkapnya, baris demi baris, beserta asal setiap angka. Kami belum punya uji coba pada tomat; kenaikan panen yang dipakai di sini adalah yang diukur pada semangka di Meksiko, tanaman sayuran yang dibudidayakan dengan cara yang sama. Kami menyebutkannya terus terang, dan tautan uji cobanya ada di bagian bawah halaman.",
    boutonEssais: "Lihat uji coba yang menopang angka-angka ini",
    calculEyebrow: "Perhitungan",
    calculTitre: "Dari dosis ke keuntungan bersih, pada satu hektar",
    calculTexte:
      "Produk ini berharga {prix} € per kilo, sampai di tangan petani. Pada dosis ini, satu hektar memerlukan {kg} kg, yaitu {cout} € saat tanam. Inilah yang kemudian dihasilkan hektar tersebut.",
    imagesEyebrow: "Dalam gambar",
    imagesTitre: "Perhitungan yang sama, dalam dua gambar",
    graphRecolte: "Panen tomat industri (t/ha)",
    graphSans: "Tanpa penahan air",
    graphAvec: "Dengan penahan air",
    graphArgent: "Pada satu hektar, dalam euro",
    graphCout: "Biaya produk",
    graphRecette: "Pendapatan tambahan",
    solEyebrow: "Yang terjadi di bawah tanah",
    solTitre: "Air tetap berada dalam jangkauan akar",
    solTexte:
      "Penahan air adalah bubuk yang mengembang saat menyerap air hujan dan air irigasi. Ia menahan air itu di zona perakaran, bukan membiarkannya lolos ke bawah. Tanaman minum saat membutuhkannya, dan petani bisa merenggangkan jadwal penyiraman tanpa membuat tomat kehausan.",
    filmLegende:
      "Tampak potongan: di kiri tanaman tomat tanpa penahan air, di kanan tanaman yang sama dengan butiran gel yang menahan air di sekitar akar.",
    filmAlt:
      "Animasi potongan: dua tanaman tomat bersebelahan, akar terlihat di dalam tanah, dengan butiran gel di sekitar akar yang di kanan",
    sourcesEyebrow: "Dari mana angka-angka ini berasal",
    sourcesTitre: "Setiap baris, dan sumbernya",
    source1:
      "Dosis dan kerapatan tanam — {dose}, {doseDetail}. Itu besaran yang lazim di lahan terbuka Spanyol: hitung ulang dengan kerapatan Anda sendiri.",
    source2: "Harga produk — {prix} € per kilo, sampai di tangan petani. Itu tarif kami, bukan perkiraan.",
    source3:
      "Kenaikan panen — + {h} %. Diukur pada semangka di Meksiko, bukan pada tomat: kami belum punya uji coba tomat. Semangka dan tomat industri dibudidayakan dengan cara yang sama, di lahan terbuka, dengan irigasi tetes, di tanah yang diolah.",
    source4:
      "Patokan kedua — pada kentang di Afrika Selatan kenaikan terukur adalah + {p} %, sangat dekat dengan + {h} % pada semangka. Dua tanaman sayuran, dua benua, besaran yang sama.",
    source5:
      "Panen acuan dan harga yang dibayar kepada petani — {avant} t/ha dan {prixVente} € per kilo adalah rata-rata pasar. Keduanya berubah menurut wilayah dan tahun, dan masih harus dipastikan.",
    espagneEyebrow: "Mengapa Spanyol",
    espagneTitre: "Tempat setiap meter kubik diperhitungkan",
    espagne1:
      "Campo de Dalías dan Campo de Cartagena memasok Eropa dengan tomat, paprika, mentimun, dan selada hampir sepanjang tahun.",
    espagne2:
      "Akuifernya terkuras berlebihan dan alih air Tajo-Segura menyusut: air hasil desalinasi dan air daur ulang mengambil alih.",
    espagne3:
      "Air desalinasi lebih mahal daripada air sumur bor: setiap meter kubik yang dihemat langsung terlihat pada margin kebun.",
    dossierLien: "Baca kajian pasar Spanyol kami (dalam bahasa Spanyol)",
    suiteEyebrow: "Selanjutnya",
    suiteTitre: "Uji coba yang menopang angka-angka ini",
    tousEssais: "Semua uji coba lapangan kami →",
  },

  de: {
    retour: "← Zurück zur Rechnung je Hektar",
    titre: "Industrietomaten in Spanien: was der Wasserspeicher je Hektar verändert",
    description:
      "Die vollständige Rechnung für einen Hektar Industrietomaten im Freiland: Dosis des Wasserspeichers, Kosten, Mehrertrag, Erzeugerpreis und Nettogewinn. Jede Zahl mit ihrer Quelle.",
    chapeau:
      "Drei Gramm je Pflanze, fünfundsiebzig Kilo je Hektar: Hier steht die ganze Rechnung, Zeile für Zeile, und woher jede Zahl stammt. Einen Tomatenversuch haben wir noch nicht; der hier verwendete Mehrertrag ist der auf Wassermelone in Mexiko gemessene, einer Gemüsekultur, die genauso geführt wird. Wir sagen es offen, und der Versuch ist unten auf der Seite verlinkt.",
    boutonEssais: "Die Versuche hinter diesen Zahlen ansehen",
    calculEyebrow: "Die Rechnung",
    calculTitre: "Von der Dosis zum Nettogewinn, auf einem Hektar",
    calculTexte:
      "Das Produkt kostet {prix} € je Kilo, frei Hof. Bei dieser Dosis braucht ein Hektar {kg} kg, also {cout} € bei der Pflanzung. Und das bringt dieser Hektar zurück.",
    imagesEyebrow: "In Bildern",
    imagesTitre: "Dieselbe Rechnung, in zwei Zeichnungen",
    graphRecolte: "Ertrag an Industrietomaten (t/ha)",
    graphSans: "Ohne Wasserspeicher",
    graphAvec: "Mit Wasserspeicher",
    graphArgent: "Auf einem Hektar, in Euro",
    graphCout: "Kosten des Produkts",
    graphRecette: "Mehreinnahmen",
    solEyebrow: "Was unter der Erde geschieht",
    solTitre: "Das Wasser bleibt in Reichweite der Wurzeln",
    solTexte:
      "Der Wasserspeicher ist ein Pulver, das aufquillt, während es Regen- und Bewässerungswasser aufnimmt. Es hält das Wasser im Wurzelbereich, statt es nach unten versickern zu lassen. Die Pflanze trinkt, wenn sie es braucht, und der Landwirt kann die Wassergaben strecken, ohne dass die Tomate Durst leidet.",
    filmLegende:
      "Im Schnitt: links eine Tomatenpflanze ohne Wasserspeicher, rechts dieselbe Pflanze mit den Gelkügelchen, die das Wasser um die Wurzeln halten.",
    filmAlt:
      "Schnittanimation: zwei Tomatenpflanzen nebeneinander, Wurzeln in der Erde sichtbar, mit Gelkügelchen um die Wurzeln der rechten",
    sourcesEyebrow: "Woher die Zahlen kommen",
    sourcesTitre: "Jede Zeile und ihre Quelle",
    source1:
      "Dosis und Pflanzdichte — {dose}, {doseDetail}. Das sind die üblichen Größenordnungen im spanischen Freiland: Rechnen Sie mit Ihrer tatsächlichen Dichte nach.",
    source2: "Preis des Produkts — {prix} € je Kilo, frei Hof. Das ist unser Preis, keine Schätzung.",
    source3:
      "Mehrertrag — + {h} %. Gemessen an Wassermelone in Mexiko, nicht an Tomate: Einen Tomatenversuch haben wir noch nicht. Wassermelone und Industrietomate werden gleich geführt: im Freiland, mit Tropfbewässerung, auf bearbeitetem Boden.",
    source4:
      "Ein zweiter Anhaltspunkt — bei Kartoffeln in Südafrika beträgt der gemessene Zuwachs + {p} %, ganz nah an den + {h} % der Wassermelone. Zwei Gemüsekulturen, zwei Kontinente, dieselbe Größenordnung.",
    source5:
      "Referenzertrag und Erzeugerpreis — {avant} t/ha und {prixVente} € je Kilo sind Marktmittelwerte. Sie ändern sich von Region zu Region und von Jahr zu Jahr und stehen noch unter Vorbehalt.",
    espagneEyebrow: "Warum Spanien",
    espagneTitre: "Wo jeder Kubikmeter zählt",
    espagne1:
      "Das Campo de Dalías und das Campo de Cartagena versorgen Europa fast das ganze Jahr mit Tomaten, Paprika, Gurken und Salat.",
    espagne2:
      "Die Grundwasserleiter sind übernutzt und die Überleitung Tajo-Segura schrumpft: Entsalztes und aufbereitetes Wasser treten an ihre Stelle.",
    espagne3:
      "Entsalztes Wasser kostet mehr als Brunnenwasser: Jeder eingesparte Kubikmeter schlägt sich unmittelbar in der Marge des Betriebs nieder.",
    dossierLien: "Unsere Marktstudie Spanien lesen (auf Spanisch)",
    suiteEyebrow: "Weiterlesen",
    suiteTitre: "Die Versuche hinter diesen Zahlen",
    tousEssais: "Alle unsere Feldversuche →",
  },

  it: {
    retour: "← Torna al calcolo per ettaro",
    titre: "Pomodoro da industria in Spagna: che cosa cambia l'idroritentore per ettaro",
    description:
      "Il calcolo completo per un ettaro di pomodoro da industria in pieno campo: dose di idroritentore, costo, aumento di raccolto, prezzo pagato al produttore e guadagno netto. Ogni cifra con la sua fonte.",
    chapeau:
      "Tre grammi a pianta, settantacinque chili per ettaro: ecco il calcolo completo, riga per riga, e l'origine di ogni cifra. Non abbiamo ancora una prova su pomodoro; l'aumento di raccolto usato qui è quello misurato su anguria in Messico, una coltura orticola condotta allo stesso modo. Lo diciamo chiaramente, e la prova è collegata in fondo alla pagina.",
    boutonEssais: "Vedere le prove che reggono queste cifre",
    calculEyebrow: "Il calcolo",
    calculTitre: "Dalla dose al guadagno netto, su un ettaro",
    calculTexte:
      "Il prodotto costa {prix} € al chilo, reso azienda. A questa dose un ettaro ne richiede {kg} kg, cioè {cout} € alla piantagione. Ecco quanto rende poi quell'ettaro.",
    imagesEyebrow: "In immagini",
    imagesTitre: "Lo stesso calcolo, in due disegni",
    graphRecolte: "Raccolto di pomodoro da industria (t/ha)",
    graphSans: "Senza idroritentore",
    graphAvec: "Con idroritentore",
    graphArgent: "Su un ettaro, in euro",
    graphCout: "Costo del prodotto",
    graphRecette: "Ricavo in più",
    solEyebrow: "Quello che succede sotto terra",
    solTitre: "L'acqua resta a portata delle radici",
    solTexte:
      "L'idroritentore è una polvere che si gonfia bevendo l'acqua di pioggia e quella d'irrigazione. La trattiene nella zona delle radici invece di lasciarla scendere più in basso. La pianta beve quando ne ha bisogno e l'agricoltore dirada le irrigazioni senza che il pomodoro soffra la sete.",
    filmLegende:
      "Vista in sezione: a sinistra una pianta di pomodoro senza idroritentore, a destra la stessa pianta con le perle di gel che trattengono l'acqua intorno alle radici.",
    filmAlt:
      "Animazione in sezione: due piante di pomodoro affiancate, radici visibili nella terra, con perle di gel intorno a quelle di destra",
    sourcesEyebrow: "Da dove vengono le cifre",
    sourcesTitre: "Ogni riga, e la sua fonte",
    source1:
      "Dose e densità — {dose}, {doseDetail}. Sono gli ordini di grandezza del pieno campo spagnolo: rifate il calcolo con la vostra densità reale.",
    source2: "Prezzo del prodotto — {prix} € al chilo, reso azienda. È il nostro listino, non una stima.",
    source3:
      "Aumento di raccolto — + {h} %. Misurato su anguria in Messico, non su pomodoro: non abbiamo ancora una prova su pomodoro. Anguria e pomodoro da industria si conducono allo stesso modo, in pieno campo, a goccia, su terreno lavorato.",
    source4:
      "Un secondo riferimento — su patata in Sudafrica l'aumento misurato è di + {p} %, vicinissimo al + {h} % dell'anguria. Due colture orticole, due continenti, lo stesso ordine di grandezza.",
    source5:
      "Raccolto di riferimento e prezzo pagato al produttore — {avant} t/ha e {prixVente} € al chilo sono medie di mercato. Cambiano da una regione e da un'annata all'altra, e restano da confermare.",
    espagneEyebrow: "Perché la Spagna",
    espagneTitre: "Dove ogni metro cubo conta",
    espagne1:
      "Il Campo de Dalías e il Campo de Cartagena riforniscono l'Europa di pomodoro, peperone, cetriolo e lattuga quasi tutto l'anno.",
    espagne2:
      "Le falde sono sovrasfruttate e il trasferimento Tago-Segura si riduce: l'acqua dissalata e quella riciclata prendono il posto.",
    espagne3:
      "L'acqua dissalata costa più di quella di pozzo: ogni metro cubo risparmiato si legge direttamente sul margine dell'azienda.",
    dossierLien: "Leggere il nostro studio di mercato sulla Spagna (in spagnolo)",
    suiteEyebrow: "Per saperne di più",
    suiteTitre: "Le prove che reggono queste cifre",
    tousEssais: "Tutte le nostre prove di campo →",
  },

  el: {
    retour: "← Επιστροφή στον υπολογισμό ανά εκτάριο",
    titre: "Βιομηχανική ντομάτα στην Ισπανία: τι αλλάζει ο υδροσυγκρατητής ανά εκτάριο",
    description:
      "Ο πλήρης υπολογισμός για ένα εκτάριο βιομηχανικής ντομάτας σε ανοιχτό χωράφι: δόση υδροσυγκρατητή, κόστος, αύξηση παραγωγής, τιμή παραγωγού και καθαρό κέρδος. Κάθε αριθμός με την πηγή του.",
    chapeau:
      "Τρία γραμμάρια ανά φυτό, εβδομήντα πέντε κιλά ανά εκτάριο: εδώ είναι ολόκληρος ο υπολογισμός, γραμμή προς γραμμή, και η προέλευση κάθε αριθμού. Δεν έχουμε ακόμη δοκιμή σε ντομάτα· η αύξηση παραγωγής που χρησιμοποιούμε εδώ είναι αυτή που μετρήθηκε σε καρπούζι στο Μεξικό, μια κηπευτική καλλιέργεια που γίνεται με τον ίδιο τρόπο. Το λέμε καθαρά, και η δοκιμή βρίσκεται στο τέλος της σελίδας.",
    boutonEssais: "Δείτε τις δοκιμές πίσω από αυτούς τους αριθμούς",
    calculEyebrow: "Ο υπολογισμός",
    calculTitre: "Από τη δόση στο καθαρό κέρδος, σε ένα εκτάριο",
    calculTexte:
      "Το προϊόν κοστίζει {prix} € το κιλό, παραδοτέο στον καλλιεργητή. Με αυτή τη δόση, ένα εκτάριο χρειάζεται {kg} kg, δηλαδή {cout} € στη φύτευση. Να τι αποδίδει στη συνέχεια αυτό το εκτάριο.",
    imagesEyebrow: "Σε εικόνες",
    imagesTitre: "Ο ίδιος υπολογισμός, σε δύο σχέδια",
    graphRecolte: "Παραγωγή βιομηχανικής ντομάτας (t/ha)",
    graphSans: "Χωρίς υδροσυγκρατητή",
    graphAvec: "Με υδροσυγκρατητή",
    graphArgent: "Σε ένα εκτάριο, σε ευρώ",
    graphCout: "Κόστος του προϊόντος",
    graphRecette: "Επιπλέον έσοδα",
    solEyebrow: "Τι συμβαίνει κάτω από το χώμα",
    solTitre: "Το νερό μένει κοντά στις ρίζες",
    solTexte:
      "Ο υδροσυγκρατητής είναι μια σκόνη που διογκώνεται καθώς ρουφά το νερό της βροχής και της άρδευσης. Το κρατά στη ζώνη των ριζών αντί να το αφήνει να φεύγει βαθύτερα. Το φυτό πίνει όταν το χρειάζεται, και ο καλλιεργητής αραιώνει τα ποτίσματα χωρίς να διψάσει η ντομάτα.",
    filmLegende:
      "Σε τομή: αριστερά ένα φυτό ντομάτας χωρίς υδροσυγκρατητή, δεξιά το ίδιο φυτό με τους κόκκους γέλης που κρατούν το νερό γύρω από τις ρίζες.",
    filmAlt:
      "Κινούμενη τομή: δύο φυτά ντομάτας δίπλα δίπλα, με τις ρίζες ορατές στο χώμα και κόκκους γέλης γύρω από τις ρίζες του δεξιού",
    sourcesEyebrow: "Από πού προέρχονται οι αριθμοί",
    sourcesTitre: "Κάθε γραμμή, και η πηγή της",
    source1:
      "Δόση και πυκνότητα φύτευσης — {dose}, {doseDetail}. Αυτά είναι τα συνήθη μεγέθη του ισπανικού ανοιχτού χωραφιού: ξανακάντε τον υπολογισμό με τη δική σας πυκνότητα.",
    source2: "Τιμή του προϊόντος — {prix} € το κιλό, παραδοτέο στον καλλιεργητή. Αυτός είναι ο τιμοκατάλογός μας, όχι εκτίμηση.",
    source3:
      "Αύξηση παραγωγής — + {h} %. Μετρήθηκε σε καρπούζι στο Μεξικό, όχι σε ντομάτα: δεν έχουμε ακόμη δοκιμή σε ντομάτα. Το καρπούζι και η βιομηχανική ντομάτα καλλιεργούνται με τον ίδιο τρόπο, σε ανοιχτό χωράφι, με στάγδην άρδευση, σε δουλεμένο έδαφος.",
    source4:
      "Ένα δεύτερο σημείο αναφοράς — στην πατάτα στη Νότια Αφρική η μετρημένη αύξηση είναι + {p} %, πολύ κοντά στο + {h} % του καρπουζιού. Δύο κηπευτικές καλλιέργειες, δύο ήπειροι, το ίδιο μέγεθος.",
    source5:
      "Παραγωγή αναφοράς και τιμή παραγωγού — τα {avant} t/ha και τα {prixVente} € το κιλό είναι μέσοι όροι αγοράς. Αλλάζουν από περιοχή σε περιοχή και από χρονιά σε χρονιά, και μένουν να επιβεβαιωθούν.",
    espagneEyebrow: "Γιατί η Ισπανία",
    espagneTitre: "Εκεί όπου κάθε κυβικό μέτρο μετράει",
    espagne1:
      "Το Campo de Dalías και το Campo de Cartagena τροφοδοτούν την Ευρώπη με ντομάτα, πιπεριά, αγγούρι και μαρούλι σχεδόν όλο τον χρόνο.",
    espagne2:
      "Οι υδροφορείς υπεραντλούνται και η μεταφορά Τάγου-Σεγούρα μειώνεται: το αφαλατωμένο και το ανακυκλωμένο νερό παίρνουν τη σκυτάλη.",
    espagne3:
      "Το αφαλατωμένο νερό κοστίζει περισσότερο από το νερό της γεώτρησης: κάθε κυβικό μέτρο που εξοικονομείται φαίνεται αμέσως στο περιθώριο της εκμετάλλευσης.",
    dossierLien: "Διαβάστε τη μελέτη αγοράς μας για την Ισπανία (στα ισπανικά)",
    suiteEyebrow: "Και παρακάτω",
    suiteTitre: "Οι δοκιμές πίσω από αυτούς τους αριθμούς",
    tousEssais: "Όλες οι δοκιμές μας στο χωράφι →",
  },

  tr: {
    retour: "← Hektar başına hesaba dön",
    titre: "İspanya'da sanayi domatesi: su tutucunun hektarda değiştirdiği şey",
    description:
      "Açık tarlada bir hektar sanayi domatesi için tam hesap: su tutucu dozu, maliyet, verim artışı, üreticiye ödenen fiyat ve net kazanç. Her rakam kaynağıyla birlikte.",
    chapeau:
      "Fide başına üç gram, hektar başına yetmiş beş kilo: işte hesabın tamamı, satır satır, ve her rakamın kaynağı. Domateste henüz bir denememiz yok; burada kullanılan verim artışı Meksika'da karpuzda ölçülen artıştır; karpuz da aynı şekilde yetiştirilen bir sebze ürünüdür. Bunu açıkça yazıyoruz, denemenin bağlantısı da sayfanın altında.",
    boutonEssais: "Bu rakamların dayandığı denemeleri görün",
    calculEyebrow: "Hesap",
    calculTitre: "Dozdan net kazanca, bir hektarda",
    calculTexte:
      "Ürün, üreticiye teslim kilosu {prix} €. Bu dozda bir hektar {kg} kg alır, yani dikimde {cout} €. İşte bu hektarın sonrasında getirdiği.",
    imagesEyebrow: "Görsellerle",
    imagesTitre: "Aynı hesap, iki çizimde",
    graphRecolte: "Sanayi domatesi verimi (t/ha)",
    graphSans: "Su tutucu olmadan",
    graphAvec: "Su tutucu ile",
    graphArgent: "Bir hektarda, euro olarak",
    graphCout: "Ürünün maliyeti",
    graphRecette: "Ek gelir",
    solEyebrow: "Toprağın altında olup bitenler",
    solTitre: "Su köklerin erişebileceği yerde kalır",
    solTexte:
      "Su tutucu, yağmur ve sulama suyunu içtikçe şişen bir tozdur. Suyu derine sızmaya bırakmak yerine kök bölgesinde tutar. Bitki ihtiyaç duyduğunda içer, üretici de domatesi susuz bırakmadan sulama aralığını açar.",
    filmLegende:
      "Kesit görünüm: solda su tutucusuz bir domates fidesi, sağda aynı fide, köklerin çevresinde suyu tutan jel taneleriyle.",
    filmAlt:
      "Kesit animasyonu: yan yana iki domates fidesi, toprakta görünen kökler, sağdakinin köklerinin çevresinde jel taneleri",
    sourcesEyebrow: "Rakamlar nereden geliyor",
    sourcesTitre: "Her satır ve kaynağı",
    source1:
      "Doz ve dikim sıklığı — {dose}, {doseDetail}. Bunlar İspanya açık tarlasının alışılmış büyüklükleridir: hesabı kendi gerçek sıklığınızla yeniden yapın.",
    source2: "Ürünün fiyatı — üreticiye teslim kilosu {prix} €. Bu bizim tarifemizdir, tahmin değil.",
    source3:
      "Verim artışı — + {h} %. Meksika'da karpuzda ölçüldü, domateste değil: domateste henüz denememiz yok. Karpuz ile sanayi domatesi aynı şekilde yetiştirilir: açık tarlada, damla sulamayla, işlenmiş toprakta.",
    source4:
      "İkinci bir ölçüt — Güney Afrika'da patateste ölçülen artış + {p} %, karpuzdaki + {h} % değerine çok yakın. İki sebze ürünü, iki kıta, aynı büyüklük.",
    source5:
      "Referans verim ve üreticiye ödenen fiyat — {avant} t/ha ve kilosu {prixVente} € piyasa ortalamalarıdır. Bölgeye ve yıla göre değişir ve teyit edilmeyi bekler.",
    espagneEyebrow: "Neden İspanya",
    espagneTitre: "Her metreküpün hesabının tutulduğu yer",
    espagne1:
      "Campo de Dalías ve Campo de Cartagena, Avrupa'ya neredeyse yıl boyunca domates, biber, salatalık ve marul sağlar.",
    espagne2:
      "Yeraltı suları aşırı çekiliyor ve Tajo-Segura aktarımı azalıyor: yerini tuzdan arındırılmış ve geri kazanılmış su alıyor.",
    espagne3:
      "Tuzdan arındırılmış su kuyu suyundan pahalıdır: tasarruf edilen her metreküp doğrudan işletmenin kârına yansır.",
    dossierLien: "İspanya pazar çalışmamızı okuyun (İspanyolca)",
    suiteEyebrow: "Devamı",
    suiteTitre: "Bu rakamların dayandığı denemeler",
    tousEssais: "Bütün saha denemelerimiz →",
  },

  pl: {
    retour: "← Powrót do wyliczenia na hektar",
    titre: "Pomidor przemysłowy w Hiszpanii: co zmienia hydrożel w przeliczeniu na hektar",
    description:
      "Pełne wyliczenie dla hektara pomidora przemysłowego w polu: dawka hydrożelu, koszt, wzrost plonu, cena płacona rolnikowi i zysk netto. Każda liczba ze źródłem.",
    chapeau:
      "Trzy gramy na roślinę, siedemdziesiąt pięć kilogramów na hektar: oto całe wyliczenie, wiersz po wierszu, i pochodzenie każdej liczby. Nie mamy jeszcze doświadczenia na pomidorze; przyjęty tu wzrost plonu zmierzono na arbuzie w Meksyku, uprawie warzywnej prowadzonej tak samo. Piszemy to wprost, a odnośnik do doświadczenia jest na dole strony.",
    boutonEssais: "Zobacz doświadczenia, na których opierają się te liczby",
    calculEyebrow: "Wyliczenie",
    calculTitre: "Od dawki do zysku netto, na jednym hektarze",
    calculTexte:
      "Produkt kosztuje {prix} € za kilogram, z dostawą do gospodarstwa. Przy tej dawce hektar potrzebuje {kg} kg, czyli {cout} € przy sadzeniu. Oto, co ten hektar potem zwraca.",
    imagesEyebrow: "W obrazach",
    imagesTitre: "To samo wyliczenie, na dwóch rysunkach",
    graphRecolte: "Plon pomidora przemysłowego (t/ha)",
    graphSans: "Bez hydrożelu",
    graphAvec: "Z hydrożelem",
    graphArgent: "Na jednym hektarze, w euro",
    graphCout: "Koszt produktu",
    graphRecette: "Dodatkowy przychód",
    solEyebrow: "Co dzieje się pod ziemią",
    solTitre: "Woda zostaje w zasięgu korzeni",
    solTexte:
      "Hydrożel to proszek, który pęcznieje, pijąc wodę deszczową i wodę z nawadniania. Zatrzymuje ją w strefie korzeni, zamiast pozwolić jej odpłynąć głębiej. Roślina pije, kiedy tego potrzebuje, a rolnik może rzadziej podlewać, nie narażając pomidora na pragnienie.",
    filmLegende:
      "Widok w przekroju: po lewej roślina pomidora bez hydrożelu, po prawej ta sama roślina z kulkami żelu zatrzymującymi wodę wokół korzeni.",
    filmAlt:
      "Animacja w przekroju: dwie rośliny pomidora obok siebie, korzenie widoczne w ziemi, wokół tych po prawej kulki żelu",
    sourcesEyebrow: "Skąd pochodzą te liczby",
    sourcesTitre: "Każdy wiersz i jego źródło",
    source1:
      "Dawka i obsada — {dose}, {doseDetail}. To typowe wielkości dla hiszpańskiego pola: przelicz wszystko przy swojej rzeczywistej obsadzie.",
    source2: "Cena produktu — {prix} € za kilogram, z dostawą do gospodarstwa. To nasz cennik, a nie szacunek.",
    source3:
      "Wzrost plonu — + {h} %. Zmierzony na arbuzie w Meksyku, nie na pomidorze: nie mamy jeszcze doświadczenia na pomidorze. Arbuz i pomidor przemysłowy prowadzi się tak samo: w polu, z nawadnianiem kropelkowym, na uprawionej glebie.",
    source4:
      "Drugi punkt odniesienia — na ziemniaku w RPA zmierzony wzrost wynosi + {p} %, bardzo blisko + {h} % z arbuza. Dwie uprawy warzywne, dwa kontynenty, ta sama skala.",
    source5:
      "Plon odniesienia i cena płacona rolnikowi — {avant} t/ha i {prixVente} € za kilogram to średnie rynkowe. Zmieniają się zależnie od regionu i roku i pozostają do potwierdzenia.",
    espagneEyebrow: "Dlaczego Hiszpania",
    espagneTitre: "Tam, gdzie liczy się każdy metr sześcienny",
    espagne1:
      "Campo de Dalías i Campo de Cartagena zaopatrują Europę w pomidory, paprykę, ogórki i sałatę niemal przez cały rok.",
    espagne2:
      "Warstwy wodonośne są przeeksploatowane, a przerzut Tag-Segura maleje: ich miejsce zajmuje woda odsolona i woda z odzysku.",
    espagne3:
      "Woda odsolona kosztuje więcej niż woda ze studni: każdy zaoszczędzony metr sześcienny widać wprost w marży gospodarstwa.",
    dossierLien: "Przeczytaj nasze opracowanie rynku hiszpańskiego (po hiszpańsku)",
    suiteEyebrow: "Dalej",
    suiteTitre: "Doświadczenia, na których opierają się te liczby",
    tousEssais: "Wszystkie nasze doświadczenia polowe →",
  },

  hr: {
    retour: "← Natrag na izračun po hektaru",
    titre: "Industrijska rajčica u Španjolskoj: što hidroretent mijenja po hektaru",
    description:
      "Potpuni izračun za jedan hektar industrijske rajčice na otvorenom polju: doza hidroretenta, trošak, povećanje uroda, cijena plaćena proizvođaču i neto dobit. Svaka brojka sa svojim izvorom.",
    chapeau:
      "Tri grama po biljci, sedamdeset pet kilograma po hektaru: evo cijelog izračuna, redak po redak, i podrijetla svake brojke. Pokus na rajčici još nemamo; povećanje uroda koje ovdje uzimamo izmjereno je na lubenici u Meksiku, povrtnoj kulturi koja se vodi na isti način. To kažemo otvoreno, a poveznica na pokus je na dnu stranice.",
    boutonEssais: "Pogledajte pokuse na kojima počivaju ove brojke",
    calculEyebrow: "Izračun",
    calculTitre: "Od doze do neto dobiti, na jednom hektaru",
    calculTexte:
      "Proizvod stoji {prix} € po kilogramu, dostavljen na gospodarstvo. Pri toj dozi hektar traži {kg} kg, odnosno {cout} € pri sadnji. Evo što taj hektar poslije vraća.",
    imagesEyebrow: "U slikama",
    imagesTitre: "Isti izračun, u dva crteža",
    graphRecolte: "Urod industrijske rajčice (t/ha)",
    graphSans: "Bez hidroretenta",
    graphAvec: "S hidroretentom",
    graphArgent: "Na jednom hektaru, u eurima",
    graphCout: "Trošak proizvoda",
    graphRecette: "Dodatni prihod",
    solEyebrow: "Što se događa pod zemljom",
    solTitre: "Voda ostaje nadohvat korijenu",
    solTexte:
      "Hidroretent je prah koji bubri dok upija kišnicu i vodu za navodnjavanje. Zadržava je u zoni korijena umjesto da je pusti niže. Biljka pije kad joj treba, a poljoprivrednik prorjeđuje zalijevanje a da rajčica ne ožedni.",
    filmLegende:
      "Presjek: lijevo biljka rajčice bez hidroretenta, desno ista biljka s kuglicama gela koje zadržavaju vodu oko korijena.",
    filmAlt:
      "Animirani presjek: dvije biljke rajčice jedna uz drugu, korijenje vidljivo u zemlji, oko desnoga kuglice gela",
    sourcesEyebrow: "Odakle dolaze brojke",
    sourcesTitre: "Svaki redak i njegov izvor",
    source1:
      "Doza i sklop — {dose}, {doseDetail}. To su uobičajene veličine španjolskog otvorenog polja: ponovite izračun sa svojim stvarnim sklopom.",
    source2: "Cijena proizvoda — {prix} € po kilogramu, dostavljen na gospodarstvo. To je naš cjenik, a ne procjena.",
    source3:
      "Povećanje uroda — + {h} %. Izmjereno na lubenici u Meksiku, a ne na rajčici: pokus na rajčici još nemamo. Lubenica i industrijska rajčica vode se jednako: na otvorenom polju, kap po kap, na obrađenom tlu.",
    source4:
      "Druga uporišna točka — na krumpiru u Južnoj Africi izmjereno je povećanje od + {p} %, vrlo blizu + {h} % s lubenice. Dvije povrtne kulture, dva kontinenta, isti red veličine.",
    source5:
      "Referentni urod i cijena plaćena proizvođaču — {avant} t/ha i {prixVente} € po kilogramu tržišni su prosjeci. Mijenjaju se od kraja do kraja i od godine do godine te ih tek treba potvrditi.",
    espagneEyebrow: "Zašto Španjolska",
    espagneTitre: "Ondje gdje se broji svaki kubični metar",
    espagne1:
      "Campo de Dalías i Campo de Cartagena opskrbljuju Europu rajčicom, paprikom, krastavcem i salatom gotovo cijelu godinu.",
    espagne2:
      "Vodonosnici su prekomjerno crpljeni, a prebacivanje Tajo-Segura se smanjuje: na njihovo mjesto dolaze desalinizirana i pročišćena voda.",
    espagne3:
      "Desalinizirana voda skuplja je od bunarske: svaki ušteđeni kubični metar izravno se vidi na marži gospodarstva.",
    dossierLien: "Pročitajte našu studiju španjolskog tržišta (na španjolskom)",
    suiteEyebrow: "Dalje",
    suiteTitre: "Pokusi na kojima počivaju ove brojke",
    tousEssais: "Svi naši poljski pokusi →",
  },

  ca: {
    retour: "← Tornar al càlcul per hectàrea",
    titre: "Tomàquet d'indústria a Espanya: què canvia l'hidroretenidor per hectàrea",
    description:
      "El càlcul complet per a una hectàrea de tomàquet d'indústria a l'aire lliure: dosi d'hidroretenidor, cost, augment de collita, preu pagat al pagès i guany net. Cada xifra amb la seva font.",
    chapeau:
      "Tres grams per planta, setanta-cinc quilos per hectàrea: aquí teniu el càlcul complet, línia per línia, i l'origen de cada xifra. Encara no tenim cap assaig en tomàquet; l'augment de collita que fem servir aquí és el mesurat en síndria a Mèxic, un conreu hortícola que es porta igual. Ho diem clarament, i l'assaig és enllaçat al peu de la pàgina.",
    boutonEssais: "Veure els assaigs que sostenen aquestes xifres",
    calculEyebrow: "El càlcul",
    calculTitre: "De la dosi al guany net, en una hectàrea",
    calculTexte:
      "El producte costa {prix} € el quilo, posat a l'explotació. A aquesta dosi, una hectàrea necessita {kg} kg, és a dir {cout} € a la plantació. Això és el que torna després aquesta hectàrea.",
    imagesEyebrow: "En imatges",
    imagesTitre: "El mateix càlcul, en dos dibuixos",
    graphRecolte: "Collita de tomàquet d'indústria (t/ha)",
    graphSans: "Sense hidroretenidor",
    graphAvec: "Amb hidroretenidor",
    graphArgent: "En una hectàrea, en euros",
    graphCout: "Cost del producte",
    graphRecette: "Ingressos addicionals",
    solEyebrow: "El que passa sota terra",
    solTitre: "L'aigua es queda a l'abast de les arrels",
    solTexte:
      "L'hidroretenidor és una pols que s'infla mentre beu l'aigua de pluja i la de reg. La reté a la zona de les arrels en lloc de deixar-la fugir més avall. La planta beu quan ho necessita, i el pagès espaia els regs sense que el tomàquet passi set.",
    filmLegende:
      "Vista en secció: a l'esquerra una planta de tomàquet sense hidroretenidor, a la dreta la mateixa planta amb les perles de gel que retenen l'aigua al voltant de les arrels.",
    filmAlt:
      "Animació en secció: dues plantes de tomàquet de costat, amb les arrels visibles a la terra i perles de gel al voltant de les de la dreta",
    sourcesEyebrow: "D'on surten les xifres",
    sourcesTitre: "Cada línia, i la seva font",
    source1:
      "Dosi i densitat — {dose}, {doseDetail}. Són els ordres de magnitud habituals de l'aire lliure espanyol: refeu el càlcul amb la vostra densitat real.",
    source2: "Preu del producte — {prix} € el quilo, posat a l'explotació. És la nostra tarifa, no una estimació.",
    source3:
      "Augment de collita — + {h} %. Mesurat en síndria a Mèxic, no en tomàquet: encara no tenim cap assaig en tomàquet. La síndria i el tomàquet d'indústria es porten igual, a l'aire lliure, amb reg per degoteig, en sòl treballat.",
    source4:
      "Segona referència — en patata a Sud-àfrica l'augment mesurat és del + {p} %, molt a prop del + {h} % de la síndria. Dos conreus hortícoles, dos continents, el mateix ordre de magnitud.",
    source5:
      "Collita de referència i preu pagat al pagès — {avant} t/ha i {prixVente} € el quilo són mitjanes de mercat. Canvien segons la regió i l'any, i queden per confirmar.",
    espagneEyebrow: "Per què Espanya",
    espagneTitre: "Allà on cada metre cúbic compta",
    espagne1:
      "El Campo de Dalías i el Campo de Cartagena proveeixen Europa de tomàquet, pebrot, cogombre i enciam gairebé tot l'any.",
    espagne2:
      "Els aqüífers estan sobreexplotats i el transvasament Tajo-Segura es redueix: l'aigua dessalada i la regenerada prenen el relleu.",
    espagne3:
      "L'aigua dessalada costa més que la de pou: cada metre cúbic estalviat es veu directament al marge de l'explotació.",
    dossierLien: "Llegir el nostre estudi de mercat d'Espanya (en castellà)",
    suiteEyebrow: "Per anar més lluny",
    suiteTitre: "Els assaigs que sostenen aquestes xifres",
    tousEssais: "Tots els nostres assaigs de camp →",
  },
};

/** Les langues où la page est servie. Le français en premier : c'est la source. */
export const LANGUES_TOMATE = Object.keys(TOMATE);

export function tomate(langue: string): TextesTomate {
  return TOMATE[langue] ?? TOMATE.fr;
}
