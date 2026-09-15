/* Les pages communes à tous les dossiers complets, par langue.
 *
 * Seul le pays change d'un dossier à l'autre dans ces pages : le reste de la
 * gamme (NAPEMA®, Paulownia), le modèle de partenariat, les hypothèses de
 * travail et le graphique de rendement. Les fourchettes de rendement sont
 * celles du calculateur du site (src/lib/evergreen/crops.ts) : un dossier ne
 * doit pas promettre davantage que le site.
 */

// Gain de rendement attendu, en %, [min, max]. Hors des cinq cultures
// documentées, le site retient 20 à 40 %.
const GAINS = {
  tomates: [30, 50],
  aubergines: [20, 35],
  bananes: [15, 30],
  avocats: [15, 25],
  canne: [10, 20],
};
const GAIN_PAR_DEFAUT = [20, 40];

const CULTURES = {
  tomates: { fr: "Tomates", en: "Tomatoes", es: "Tomates", ar: "الطماطم", hr: "Rajčica" },
  aubergines: { fr: "Aubergines", en: "Aubergines", es: "Berenjenas", ar: "الباذنجان", hr: "Patlidžan" },
  bananes: { fr: "Bananes", en: "Bananas", es: "Plátanos", ar: "الموز", hr: "Banane" },
  avocats: { fr: "Avocats", en: "Avocados", es: "Paltas", ar: "الأفوكادو", hr: "Avokado" },
  canne: { fr: "Canne à sucre", en: "Sugar cane", es: "Caña de azúcar", ar: "قصب السكر", hr: "Šećerna trska" },
  concombres: { fr: "Concombres", en: "Cucumbers", es: "Pepinos", ar: "الخيار", hr: "Krastavci" },
  poivrons: { fr: "Poivrons", en: "Peppers", es: "Pimientos", ar: "الفلفل", hr: "Paprika" },
  dattes: { fr: "Dattes", en: "Dates", es: "Dátiles", ar: "التمور", hr: "Datulje" },
  agrumes: { fr: "Agrumes", en: "Citrus", es: "Cítricos", ar: "الحمضيات", hr: "Agrumi" },
  olives: { fr: "Olives", en: "Olives", es: "Aceitunas", ar: "الزيتون", hr: "Masline" },
  pommesDeTerre: { fr: "Pommes de terre", en: "Potatoes", es: "Papas", ar: "البطاطس", hr: "Krumpir" },
  raisin: { fr: "Raisin", en: "Grapes", es: "Uva", ar: "العنب", hr: "Grožđe" },
  fraises: { fr: "Fraises", en: "Strawberries", es: "Frutillas", ar: "الفراولة", hr: "Jagode" },
  oignons: { fr: "Oignons", en: "Onions", es: "Cebollas", ar: "البصل", hr: "Luk" },
  mangues: { fr: "Mangues", en: "Mangoes", es: "Mangos", ar: "المانجو", hr: "Mango" },
  cacao: { fr: "Cacao", en: "Cocoa", es: "Cacao", ar: "الكاكاو", hr: "Kakao" },
  manioc: { fr: "Manioc", en: "Cassava", es: "Mandioca", ar: "الكسافا", hr: "Manioka" },
  cafe: { fr: "Café", en: "Coffee", es: "Café", ar: "البن", hr: "Kava" },
  pommes: { fr: "Pommes", en: "Apples", es: "Manzanas", ar: "التفاح", hr: "Jabuke" },
  myrtilles: { fr: "Myrtilles", en: "Blueberries", es: "Arándanos", ar: "التوت الأزرق", hr: "Borovnice" },
  mandarines: { fr: "Mandarines", en: "Mandarins", es: "Mandarinas", ar: "اليوسفي", hr: "Mandarine" },
  amandes: { fr: "Amandes", en: "Almonds", es: "Almendras", ar: "اللوز", hr: "Bademi" },
  laitues: { fr: "Laitues", en: "Lettuce", es: "Lechugas", ar: "الخس", hr: "Salata" },
};

const TEXTES = {
  fr: {
    gamme: {
      kicker: "Le reste de la gamme",
      title: "Protéger les cultures, fixer les sols",
      left: {
        head: "NAPEMA® — protéger sans résidu",
        lines: [
          "Lutte contre maladies, parasites, champignons et ravageurs, sans molécule de synthèse.",
          "Pulvérisation foliaire et racinaire, à effet préventif comme curatif.",
          "Aucun résidu dans le sol, la plante ou l'air : pollinisateurs et auxiliaires préservés.",
          "Formulé sur mesure pour un problème précis : cochenille, HLB des agrumes, nématodes.",
        ],
      },
      right: {
        head: "Paulownia ALTIFOLIA® — l'arbre des régions chaudes",
        lines: [
          "13 à 15 m en six à huit ans, avec un tronc de gros diamètre.",
          "Associé à 100 g d'EVERGREEN® par plant, l'irrigation nécessaire diminue de 50 %.",
          "Résiste de −25 °C à +45 °C ; son bois ne s'enflamme qu'à partir de 426 °C.",
          "Brise-vent, protection des sols contre l'érosion, 400 à 700 kg de miel par hectare.",
        ],
      },
      note:
        "Plants livrés en pot (25 à 30 cm), certifiés indemnes de maladies et remplacés sous garantie en cas de perte. Première coupe à la fin de la sixième année, bois valorisé autour de 400 à 450 € le m³.",
    },
    partenariat: (pays) => ({
      kicker: "Travailler ensemble",
      title: `Un partenaire local pour ${pays}`,
      items: [
        { head: "Distribution", body: "Exclusivité territoriale et stock de lancement pour la première saison commerciale." },
        { head: "Formation", body: "Formation technique des équipes, protocoles de dosage et mises à jour à chaque saison." },
        { head: "Essais conjoints", body: "Parcelles de démonstration avec témoin, résultats partagés avec les producteurs." },
        { head: "Institutions", body: "Dialogue avec le ministère de l'Agriculture et les programmes de sécurité alimentaire." },
      ],
      note:
        "Le cadre s'adapte au territoire : un importateur, un distributeur d'intrants ou un groupement de producteurs peut porter le partenariat.",
    }),
    rendement: {
      kicker: "Potentiel de rendement",
      title: "Gain de rendement attendu par culture",
      min: "Bas de fourchette (%)",
      max: "Haut de fourchette (%)",
      head: "À lire avec prudence",
      body:
        "Fourchettes retenues par notre calculateur de dose, pour une culture conduite normalement avec EVERGREEN® à la plantation.\n\nLe résultat réel dépend du sol, du climat et de la conduite. Pour les céréales, aucun gain n'est avancé sans essai de terrain.",
    },
    sources: {
      kicker: "Sources",
      title: "Sources et hypothèses de travail",
      head: "Sources principales",
      droite: {
        head: "Hypothèses de travail",
        lines: [
          "Les chiffres sont des ordres de grandeur arrondis, tirés des dernières données publiques disponibles.",
          "Les gains d'eau et de rendement sont indicatifs et varient selon le sol, le climat et la culture.",
          "Document de travail commercial : chiffres à actualiser avant toute soumission officielle.",
        ],
      },
      note:
        "Rapports d'essais, certificats (SOHISCERT, analyses Polymex et SGS) et fiches techniques : disponibles sur demande.",
    },
  },

  en: {
    gamme: {
      kicker: "The rest of the range",
      title: "Protecting crops, holding soils",
      left: {
        head: "NAPEMA® — protection without residue",
        lines: [
          "Controls diseases, parasites, fungi and pests, with no synthetic molecule.",
          "Foliar and root spraying, working both preventively and curatively.",
          "No residue in soil, plant or air: pollinators and beneficial insects are spared.",
          "Formulated for one precise problem: mealybug, citrus greening (HLB), nematodes.",
        ],
      },
      right: {
        head: "Paulownia ALTIFOLIA® — the tree for hot regions",
        lines: [
          "13 to 15 m in six to eight years, with a wide trunk.",
          "Combined with 100 g of EVERGREEN® per plant, irrigation needs drop by 50%.",
          "Withstands −25 °C to +45 °C; the wood only ignites above 426 °C.",
          "Windbreak, protection against soil erosion, 400 to 700 kg of honey per hectare.",
        ],
      },
      note:
        "Plants delivered potted (25 to 30 cm), certified disease-free and replaced under warranty in case of loss. First harvest at the end of year six, with wood valued at around €400 to €450 per m³.",
    },
    partenariat: (pays) => ({
      kicker: "Working together",
      title: `A local partner for ${pays}`,
      items: [
        { head: "Distribution", body: "Territorial exclusivity and launch stock for the first commercial season." },
        { head: "Training", body: "Technical training for field teams, dosing protocols and seasonal updates." },
        { head: "Joint trials", body: "Demonstration plots with a control, results shared with growers." },
        { head: "Institutions", body: "Dialogue with the Ministry of Agriculture and food-security programmes." },
      ],
      note:
        "The framework adapts to the territory: an importer, an input distributor or a growers' group can lead the partnership.",
    }),
    rendement: {
      kicker: "Yield potential",
      title: "Expected yield gain by crop",
      min: "Low end (%)",
      max: "High end (%)",
      head: "Read with care",
      body:
        "Ranges used by our dose calculator, for a normally managed crop with EVERGREEN® applied at planting.\n\nActual results depend on soil, climate and management. For cereals, no gain is claimed without a field trial.",
    },
    sources: {
      kicker: "Sources",
      title: "Sources and working assumptions",
      head: "Main sources",
      droite: {
        head: "Working assumptions",
        lines: [
          "Figures are rounded orders of magnitude, taken from the latest public data available.",
          "Water and yield gains are indicative and vary with soil, climate and crop.",
          "Commercial working document: figures to be refreshed before any official submission.",
        ],
      },
      note:
        "Trial reports, certificates (SOHISCERT, Polymex and SGS analyses) and technical sheets: available on request.",
    },
  },

  es: {
    gamme: {
      kicker: "El resto de la gama",
      title: "Proteger los cultivos, sujetar los suelos",
      left: {
        head: "NAPEMA® — proteger sin residuos",
        lines: [
          "Controla enfermedades, parásitos, hongos y plagas, sin moléculas de síntesis.",
          "Pulverización foliar y radicular, con efecto preventivo y curativo.",
          "Ningún residuo en el suelo, la planta ni el aire: polinizadores y auxiliares a salvo.",
          "Formulado a medida para un problema concreto: cochinilla, HLB de los cítricos, nematodos.",
        ],
      },
      right: {
        head: "Paulownia ALTIFOLIA® — árbol de clima cálido",
        lines: [
          "De 13 a 15 m en seis a ocho años, con un tronco de gran diámetro.",
          "Con 100 g de EVERGREEN® por planta, el riego necesario disminuye un 50 %.",
          "Resiste de −25 °C a +45 °C; su madera solo se inflama a partir de 426 °C.",
          "Cortavientos, protección del suelo contra la erosión, de 400 a 700 kg de miel por hectárea.",
        ],
      },
      note:
        "Plantas entregadas en maceta (25 a 30 cm), certificadas libres de enfermedades y repuestas en garantía en caso de pérdida. Primera corta al final del sexto año, con la madera valorada en torno a 400-450 € el m³.",
    },
    partenariat: (pays) => ({
      kicker: "Trabajar juntos",
      title: `Un socio local para ${pays}`,
      items: [
        { head: "Distribución", body: "Exclusividad territorial y stock de lanzamiento para la primera campaña comercial." },
        { head: "Formación", body: "Formación técnica de los equipos, protocolos de dosis y actualización cada campaña." },
        { head: "Ensayos conjuntos", body: "Parcelas de demostración con testigo y resultados compartidos con los productores." },
        { head: "Instituciones", body: "Diálogo con el Ministerio de Agricultura y los programas de seguridad alimentaria." },
      ],
      note:
        "El marco se adapta al territorio: un importador, un distribuidor de insumos o una agrupación de productores puede liderar la alianza.",
    }),
    rendement: {
      kicker: "Potencial de rendimiento",
      title: "Aumento de rendimiento esperado por cultivo",
      min: "Mínimo (%)",
      max: "Máximo (%)",
      head: "Leer con prudencia",
      body:
        "Rangos que usa nuestra calculadora de dosis, para un cultivo manejado con normalidad y EVERGREEN® aplicado en la plantación.\n\nEl resultado real depende del suelo, el clima y el manejo. En cereales no se anuncia ningún aumento sin ensayo de campo.",
    },
    sources: {
      kicker: "Fuentes",
      title: "Fuentes e hipótesis de trabajo",
      head: "Fuentes principales",
      droite: {
        head: "Hipótesis de trabajo",
        lines: [
          "Las cifras son órdenes de magnitud redondeados, tomados de los últimos datos públicos disponibles.",
          "Los ahorros de agua y los aumentos de rendimiento son indicativos y varían según suelo, clima y cultivo.",
          "Documento comercial de trabajo: cifras a actualizar antes de cualquier presentación oficial.",
        ],
      },
      note:
        "Informes de ensayo, certificados (SOHISCERT, análisis Polymex y SGS) y fichas técnicas: disponibles a pedido.",
    },
  },

  ar: {
    gamme: {
      kicker: "بقية المنتجات",
      title: "حماية المحاصيل وتثبيت التربة",
      left: {
        head: "NAPEMA® — حماية دون متبقيات",
        lines: [
          "مكافحة الأمراض والطفيليات والفطريات والآفات، دون أي جزيء كيميائي مُصنَّع.",
          "رشّ على الأوراق والجذور، بمفعول وقائي وعلاجي في آن واحد.",
          "لا متبقيات في التربة ولا في النبات ولا في الهواء، مع الحفاظ على الملقِّحات والحشرات النافعة.",
          "تركيبة مصمَّمة لمشكلة محددة: البق الدقيقي، واخضرار الحمضيات (HLB)، والنيماتودا.",
        ],
      },
      right: {
        head: "Paulownia ALTIFOLIA® — شجرة المناطق الحارة",
        lines: [
          "من 13 إلى 15 متراً خلال ست إلى ثماني سنوات، بجذع كبير القطر.",
          "مع 100 غرام من EVERGREEN® لكل شتلة، تنخفض حاجة الري بنسبة 50 %.",
          "تتحمّل من −25 إلى +45 درجة مئوية، ولا يشتعل خشبها قبل 426 درجة.",
          "مصدّ للرياح، وحماية للتربة من التعرية، و400 إلى 700 كغ من العسل للهكتار.",
        ],
      },
      note:
        "تُسلَّم الشتلات في أصص (25 إلى 30 سم)، معتمدة خالية من الأمراض، وتُستبدل بالضمان عند تلفها. أول قطع في نهاية السنة السادسة، ويُقدَّر الخشب بنحو 400 إلى 450 يورو للمتر المكعب.",
    },
    partenariat: (pays) => ({
      kicker: "العمل معاً",
      title: `شريك محلي في ${pays}`,
      items: [
        { head: "التوزيع", body: "حصرية على مستوى الإقليم ومخزون إطلاق للموسم التجاري الأول." },
        { head: "التدريب", body: "تدريب فني للفرق، وبروتوكولات الجرعات، وتحديثها في كل موسم." },
        { head: "تجارب مشتركة", body: "قطع إرشادية مع قطعة شاهد، ونتائج تُعرض على المزارعين." },
        { head: "المؤسسات", body: "حوار مع وزارة الزراعة وبرامج الأمن الغذائي." },
      ],
      note:
        "يتكيف الإطار مع الإقليم: يمكن أن يقود الشراكة مستورد أو موزّع مدخلات زراعية أو جمعية منتجين.",
    }),
    rendement: {
      kicker: "إمكانات الإنتاج",
      title: "الزيادة المتوقعة في الإنتاج حسب المحصول",
      min: "الحد الأدنى (%)",
      max: "الحد الأعلى (%)",
      head: "تُقرأ بتحفّظ",
      body:
        "نطاقات يعتمدها حاسب الجرعات على موقعنا، لمحصول يُدار إدارة عادية مع وضع EVERGREEN® عند الزراعة.\n\nالنتيجة الفعلية تتوقف على التربة والمناخ وأسلوب الإدارة. أما الحبوب فلا نعلن فيها أي زيادة دون تجربة ميدانية.",
    },
    sources: {
      kicker: "المصادر",
      title: "المصادر وافتراضات العمل",
      head: "المصادر الرئيسية",
      droite: {
        head: "افتراضات العمل",
        lines: [
          "الأرقام رتب حجم مقرّبة، مأخوذة من أحدث البيانات العامة المتاحة.",
          "توفير الماء وزيادة الإنتاج أرقام استرشادية تتغير بحسب التربة والمناخ والمحصول.",
          "وثيقة عمل تجارية: تُحدَّث الأرقام قبل أي تقديم رسمي.",
        ],
      },
      note:
        "تقارير التجارب والشهادات (SOHISCERT، وتحاليل Polymex وSGS) والنشرات الفنية متاحة عند الطلب.",
    },
  },

  hr: {
    gamme: {
      kicker: "Ostatak asortimana",
      title: "Zaštititi usjeve, zadržati tlo",
      left: {
        head: "NAPEMA® — zaštita bez ostataka",
        lines: [
          "Suzbija bolesti, nametnike, gljivice i štetnike, bez sintetskih molekula.",
          "Folijarno i korijensko prskanje, s preventivnim i kurativnim učinkom.",
          "Bez ostataka u tlu, biljci i zraku: oprašivači i korisni kukci ostaju pošteđeni.",
          "Pripravak po mjeri za točno određen problem: štitaste uši, HLB agruma, nematode.",
        ],
      },
      right: {
        head: "Paulownia ALTIFOLIA® — stablo za topla područja",
        lines: [
          "13 do 15 m za šest do osam godina, s debelim deblom.",
          "Uz 100 g EVERGREEN®-a po sadnici potrebno navodnjavanje smanjuje se za 50 %.",
          "Podnosi od −25 °C do +45 °C; drvo se zapali tek na 426 °C.",
          "Vjetrobran, zaštita tla od erozije, 400 do 700 kg meda po hektaru.",
        ],
      },
      note:
        "Sadnice se isporučuju u posudama (25 do 30 cm), s potvrdom o zdravstvenoj ispravnosti, i zamjenjuju se u jamstvu u slučaju gubitka. Prva sječa na kraju šeste godine, drvo se vrednuje oko 400 do 450 € po m³.",
    },
    partenariat: (pays) => ({
      kicker: "Zajednički rad",
      title: `Lokalni partner za ${pays}`,
      items: [
        { head: "Distribucija", body: "Teritorijalna isključivost i početna zaliha za prvu prodajnu sezonu." },
        { head: "Obuka", body: "Tehnička obuka timova, protokoli doziranja i ažuriranje svake sezone." },
        { head: "Zajednički pokusi", body: "Pokazne parcele s kontrolom i rezultati podijeljeni s proizvođačima." },
        { head: "Institucije", body: "Dijalog s Ministarstvom poljoprivrede i programima sigurnosti hrane." },
      ],
      note:
        "Okvir se prilagođava području: partnerstvo može voditi uvoznik, distributer repromaterijala ili udruga proizvođača.",
    }),
    rendement: {
      kicker: "Potencijal prinosa",
      title: "Očekivano povećanje prinosa po kulturi",
      min: "Donja granica (%)",
      max: "Gornja granica (%)",
      head: "Čitati s oprezom",
      body:
        "Rasponi koje koristi naš kalkulator doze, za normalno vođen usjev uz EVERGREEN® primijenjen pri sadnji.\n\nStvarni rezultat ovisi o tlu, klimi i agrotehnici. Za žitarice se povećanje ne navodi bez poljskog pokusa.",
    },
    sources: {
      kicker: "Izvori",
      title: "Izvori i radne pretpostavke",
      head: "Glavni izvori",
      droite: {
        head: "Radne pretpostavke",
        lines: [
          "Brojke su zaokružene veličine, preuzete iz najnovijih dostupnih javnih podataka.",
          "Uštede vode i povećanja prinosa okvirni su i ovise o tlu, klimi i kulturi.",
          "Radni poslovni dokument: brojke treba ažurirati prije svakog službenog podnošenja.",
        ],
      },
      note:
        "Izvješća o pokusima, certifikati (SOHISCERT, analize Polymex i SGS) i tehnički listovi: dostupni na zahtjev.",
    },
  },

  el: {
    gamme: {
      kicker: "Η υπόλοιπη γκάμα",
      title: "Προστασία καλλιεργειών, συγκράτηση εδαφών",
      left: {
        head: "NAPEMA® — προστασία χωρίς υπολείμματα",
        lines: [
          "Καταπολεμά ασθένειες, παράσιτα, μύκητες και εχθρούς των καλλιεργειών χωρίς συνθετικά μόρια.",
          "Διαφυλλικός ψεκασμός και εφαρμογή στη ρίζα, με προληπτική και θεραπευτική δράση.",
          "Κανένα υπόλειμμα στο έδαφος, στο φυτό ή στον αέρα· επικονιαστές και ωφέλιμα έντομα προστατεύονται.",
          "Σκεύασμα για συγκεκριμένο πρόβλημα: κοκκοειδή, πρασίνισμα εσπεριδοειδών (HLB), νηματώδεις.",
        ],
      },
      right: {
        head: "Paulownia ALTIFOLIA® — δέντρο για θερμές περιοχές",
        lines: [
          "13 έως 15 m σε έξι έως οκτώ χρόνια, με κορμό μεγάλης διαμέτρου.",
          "Με 100 g EVERGREEN® ανά φυτό, η απαιτούμενη άρδευση μειώνεται κατά 50 %.",
          "Αντέχει από −25 °C έως +45 °C· το ξύλο αναφλέγεται μόνο πάνω από 426 °C.",
          "Ανεμοφράκτης, προστασία του εδάφους από τη διάβρωση, 400 έως 700 kg μέλι ανά εκτάριο.",
        ],
      },
      note:
        "Τα φυτά παραδίδονται σε γλάστρα (25 έως 30 cm), πιστοποιημένα απαλλαγμένα από ασθένειες, και αντικαθίστανται με εγγύηση σε περίπτωση απώλειας. Πρώτη υλοτομία στο τέλος του έκτου έτους, με το ξύλο να αποτιμάται περίπου στα 400 έως 450 € ανά m³.",
    },
    partenariat: (pays) => ({
      kicker: "Συνεργασία",
      title: `Τοπικός εταίρος για ${pays}`,
      items: [
        { head: "Διανομή", body: "Εδαφική αποκλειστικότητα και αρχικό απόθεμα για την πρώτη εμπορική περίοδο." },
        { head: "Εκπαίδευση", body: "Τεχνική εκπαίδευση των ομάδων, πρωτόκολλα δοσολογίας και ενημέρωση κάθε περίοδο." },
        { head: "Κοινές δοκιμές", body: "Αγροτεμάχια επίδειξης με μάρτυρα και αποτελέσματα κοινά με τους παραγωγούς." },
        { head: "Θεσμοί", body: "Διάλογος με το Υπουργείο Αγροτικής Ανάπτυξης και τα προγράμματα επισιτιστικής ασφάλειας." },
      ],
      note:
        "Το πλαίσιο προσαρμόζεται στην περιοχή: μπορεί να το αναλάβει εισαγωγέας, διανομέας εισροών ή ομάδα παραγωγών.",
    }),
    rendement: {
      kicker: "Δυναμικό απόδοσης",
      title: "Αναμενόμενη αύξηση απόδοσης ανά καλλιέργεια",
      min: "Κατώτατο όριο (%)",
      max: "Ανώτατο όριο (%)",
      head: "Να διαβάζεται με προσοχή",
      body:
        "Εύρη που χρησιμοποιεί ο υπολογιστής δόσης μας, για καλλιέργεια με κανονική διαχείριση και EVERGREEN® κατά τη φύτευση.\n\nΤο πραγματικό αποτέλεσμα εξαρτάται από το έδαφος, το κλίμα και τη διαχείριση. Για τα σιτηρά δεν αναφέρεται αύξηση χωρίς δοκιμή αγρού.",
    },
    sources: {
      kicker: "Πηγές",
      title: "Πηγές και παραδοχές εργασίας",
      head: "Κύριες πηγές",
      droite: {
        head: "Παραδοχές εργασίας",
        lines: [
          "Τα στοιχεία είναι στρογγυλεμένες τάξεις μεγέθους, από τα πιο πρόσφατα διαθέσιμα δημόσια δεδομένα.",
          "Η εξοικονόμηση νερού και η αύξηση απόδοσης είναι ενδεικτικές και εξαρτώνται από έδαφος, κλίμα και καλλιέργεια.",
          "Εμπορικό έγγραφο εργασίας: τα στοιχεία επικαιροποιούνται πριν από κάθε επίσημη υποβολή.",
        ],
      },
      note:
        "Εκθέσεις δοκιμών, πιστοποιητικά (SOHISCERT, αναλύσεις Polymex και SGS) και τεχνικά φυλλάδια: διαθέσιμα κατόπιν αιτήματος.",
    },
  },
};

const POLICE = {
  legendFontFace: "Arial",
  dataLabelFontFace: "Arial",
  catAxisLabelFontFace: "Arial",
  valAxisLabelFontFace: "Arial",
};

export function communs(locale, pays) {
  const langue = locale.slice(0, 2);
  const t = TEXTES[langue];
  if (!t) throw new Error(`pas de pages communes pour la langue « ${langue} »`);
  const rtl = langue === "ar";

  return {
    gamme: t.gamme,
    partenariat: t.partenariat(pays),

    rendement(cultures) {
      const labels = cultures.map((k) => {
        if (!CULTURES[k]) throw new Error(`culture inconnue : ${k}`);
        return CULTURES[k][langue];
      });
      const gains = cultures.map((k) => GAINS[k] ?? GAIN_PAR_DEFAUT);
      return {
        kicker: t.rendement.kicker,
        title: t.rendement.title,
        type: "bar",
        data: [
          { name: t.rendement.min, labels, values: gains.map((g) => g[0]) },
          { name: t.rendement.max, labels, values: gains.map((g) => g[1]) },
        ],
        opts: {
          barDir: "col",
          barGrouping: "clustered",
          dataLabelFormatCode: '0"%"',
          ...(rtl ? POLICE : {}),
        },
        reading: { head: t.rendement.head, body: t.rendement.body },
      };
    },

    sources(lignes) {
      return {
        kicker: t.sources.kicker,
        title: t.sources.title,
        left: { head: t.sources.head, lines: lignes },
        right: t.sources.droite,
        note: t.sources.note,
      };
    },
  };
}
