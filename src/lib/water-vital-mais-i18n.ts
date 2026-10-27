/**
 * Les mots du bloc « Water Vital® pour le maïs ensilage », sur la page
 * Water Vital® (technologies/eau-restructuree).
 *
 * C'est la fiche que Gabriel a envoyée en anglais, en arabe et en français : ses
 * six pistes à évaluer, sa méthode de vérification, son avertissement et sa
 * phrase d'appel. Rien n'y est ajouté. Les trois versions reçues servent de
 * source ; les onze autres langues en sont la traduction.
 *
 * Deux choix d'écriture : le produit s'écrit « Water Vital® » comme sur le reste
 * du site (le logo de la fiche l'écrit « WaterVital », en un mot) ; et les
 * adresses du bandeau du bas de la fiche (courriel et site d'un tiers) ne sont
 * pas reprises : le bouton mène au formulaire de contact du site.
 *
 * En arabe, « ® » est suivi d'une marque gauche-à-droite (‎) : sans elle,
 * le signe se détache du nom et passe à sa gauche.
 *
 * Traductions non relues par des personnes dont c'est la langue maternelle.
 */

export type AvantageMais = { h: string; p: string };

export type TextesMais = {
  title: string;
  subtitle: string;
  lede: string;
  /** Description de la photo des racines (texte alternatif). */
  photoAlt: string;
  /** Mention sous la photo : la fiche d'origine la marque « image illustrative ». */
  photoCaption: string;
  benefitsTitle: string;
  /** Les six pistes, dans l'ordre de la fiche. */
  benefits: [AvantageMais, AvantageMais, AvantageMais, AvantageMais, AvantageMais, AvantageMais];
  verifyTitle: string;
  verifyText: string;
  silageAlt: string;
  /** Avec sa ponctuation : « Important : », « Important: », « 重要： »… */
  importantLabel: string;
  important: string;
  cta: string;
};

export const MAIS: Record<string, TextesMais> = {
  fr: {
    title: "Water Vital® pour le maïs ensilage",
    subtitle: "De l'irrigation à la qualité de l'alimentation animale",
    lede: "Une proposition d'évaluation sur le terrain de la gestion de l'eau, du développement racinaire et de la production d'ensilage.",
    photoAlt: "Racines d'un plant de maïs dans un sol humide, avec un pivot d'irrigation à l'arrière-plan",
    photoCaption: "Image illustrative",
    benefitsTitle: "Bénéfices potentiels à valider dans votre culture",
    benefits: [
      { h: "Développement racinaire", p: "Évaluer la croissance des racines, la formation de racines fines et l'exploration du sol." },
      { h: "Eau et nutriments", p: "Vérifier l'humidité de la zone racinaire et l'état nutritionnel des plantes par analyse foliaire." },
      { h: "Efficacité de la fertilisation", p: "Tester s'il est possible de réduire les engrais tout en maintenant le rendement et la qualité de l'ensilage." },
      { h: "Gestion de l'irrigation", p: "Comparer le volume d'eau appliqué, l'uniformité de l'irrigation et la production par mètre cube." },
      { h: "Production fourragère", p: "Mesurer la production de matière sèche par hectare et observer l'uniformité de la culture." },
      { h: "Qualité de l'ensilage", p: "Analyser la matière sèche, l'amidon, les fibres, la digestibilité et la qualité de la fermentation." },
    ],
    verifyTitle: "Comment vérifier les résultats",
    verifyText:
      "Comparez des parcelles avec et sans Water Vital®, avec des répétitions et des conditions similaires de sol, d'hybride et de conduite culturale. Consignez l'eau, les engrais, le rendement et les analyses de l'ensilage. Évaluez chaque modification séparément.",
    silageAlt: "Maïs haché pour l'ensilage",
    importantLabel: "Important :",
    important:
      "Les effets spécifiques de Water Vital® doivent être démontrés par des essais comparatifs. Ne réduisez pas l'eau ou la fertilisation sans suivi et conseil agronomique. Le stade de récolte, le compactage et l'étanchéité restent essentiels pour un bon ensilage.",
    cta: "Planifiez un essai sur votre exploitation",
  },
  en: {
    title: "Water Vital® for silage corn",
    subtitle: "From irrigation to animal feed quality",
    lede: "A field evaluation proposal for water management, root development and silage production.",
    photoAlt: "Roots of a corn plant in moist soil, with an irrigation pivot in the background",
    photoCaption: "Illustrative image",
    benefitsTitle: "Potential benefits to evaluate in your field",
    benefits: [
      { h: "Root development", p: "Evaluate root growth, fine-root formation and soil exploration." },
      { h: "Water and nutrients", p: "Check root-zone moisture and plant nutritional status through leaf analysis." },
      { h: "Fertilizer efficiency", p: "Test whether fertilizer inputs can be adjusted while maintaining yield and silage quality." },
      { h: "Irrigation management", p: "Compare applied water volume, irrigation uniformity and production per cubic metre." },
      { h: "Forage production", p: "Measure dry-matter yield per hectare and observe crop uniformity." },
      { h: "Silage quality", p: "Analyse dry matter, starch, fibre, digestibility and fermentation quality." },
    ],
    verifyTitle: "How to verify the results",
    verifyText:
      "Compare areas with and without Water Vital®, using replicates and similar soil, hybrid and management conditions. Record water, fertilizer, yield and silage analyses. Evaluate each change separately.",
    silageAlt: "Chopped corn for silage",
    importantLabel: "Important:",
    important:
      "The specific effects of Water Vital® must be demonstrated through comparative trials. Do not reduce water or fertilizer without monitoring and agronomic guidance. Harvest timing, compaction and airtight sealing remain essential for good silage.",
    cta: "Plan a trial on your farm",
  },
  es: {
    title: "Water Vital® para el maíz de ensilaje",
    subtitle: "Del riego a la calidad de la alimentación animal",
    lede: "Una propuesta de evaluación en campo de la gestión del agua, el desarrollo radicular y la producción de ensilaje.",
    photoAlt: "Raíces de una planta de maíz en suelo húmedo, con un pivote de riego al fondo",
    photoCaption: "Imagen ilustrativa",
    benefitsTitle: "Beneficios potenciales por validar en su cultivo",
    benefits: [
      { h: "Desarrollo radicular", p: "Evaluar el crecimiento de las raíces, la formación de raíces finas y la exploración del suelo." },
      { h: "Agua y nutrientes", p: "Comprobar la humedad de la zona radicular y el estado nutricional de las plantas mediante análisis foliar." },
      { h: "Eficiencia de la fertilización", p: "Probar si se pueden reducir los fertilizantes manteniendo el rendimiento y la calidad del ensilaje." },
      { h: "Gestión del riego", p: "Comparar el volumen de agua aplicado, la uniformidad del riego y la producción por metro cúbico." },
      { h: "Producción forrajera", p: "Medir la producción de materia seca por hectárea y observar la uniformidad del cultivo." },
      { h: "Calidad del ensilaje", p: "Analizar la materia seca, el almidón, la fibra, la digestibilidad y la calidad de la fermentación." },
    ],
    verifyTitle: "Cómo verificar los resultados",
    verifyText:
      "Compare parcelas con y sin Water Vital®, con repeticiones y condiciones similares de suelo, híbrido y manejo del cultivo. Registre el agua, los fertilizantes, el rendimiento y los análisis del ensilaje. Evalúe cada cambio por separado.",
    silageAlt: "Maíz picado para ensilaje",
    importantLabel: "Importante:",
    important:
      "Los efectos específicos de Water Vital® deben demostrarse mediante ensayos comparativos. No reduzca el agua ni la fertilización sin seguimiento y asesoramiento agronómico. El momento de la cosecha, la compactación y el cierre hermético siguen siendo esenciales para un buen ensilaje.",
    cta: "Planifique un ensayo en su explotación",
  },
  pt: {
    title: "Water Vital® para o milho de silagem",
    subtitle: "Da rega à qualidade da alimentação animal",
    lede: "Uma proposta de avaliação no terreno da gestão da água, do desenvolvimento radicular e da produção de silagem.",
    photoAlt: "Raízes de uma planta de milho em solo húmido, com um pivô de rega ao fundo",
    photoCaption: "Imagem ilustrativa",
    benefitsTitle: "Benefícios potenciais a validar na sua cultura",
    benefits: [
      { h: "Desenvolvimento radicular", p: "Avaliar o crescimento das raízes, a formação de raízes finas e a exploração do solo." },
      { h: "Água e nutrientes", p: "Verificar a humidade da zona radicular e o estado nutricional das plantas através da análise foliar." },
      { h: "Eficiência da fertilização", p: "Testar se é possível reduzir os fertilizantes mantendo a produtividade e a qualidade da silagem." },
      { h: "Gestão da rega", p: "Comparar o volume de água aplicado, a uniformidade da rega e a produção por metro cúbico." },
      { h: "Produção forrageira", p: "Medir a produção de matéria seca por hectare e observar a uniformidade da cultura." },
      { h: "Qualidade da silagem", p: "Analisar a matéria seca, o amido, as fibras, a digestibilidade e a qualidade da fermentação." },
    ],
    verifyTitle: "Como verificar os resultados",
    verifyText:
      "Compare parcelas com e sem Water Vital®, com repetições e condições semelhantes de solo, híbrido e condução da cultura. Registe a água, os fertilizantes, a produtividade e as análises da silagem. Avalie cada alteração separadamente.",
    silageAlt: "Milho triturado para silagem",
    importantLabel: "Importante:",
    important:
      "Os efeitos específicos do Water Vital® têm de ser demonstrados através de ensaios comparativos. Não reduza a água nem a fertilização sem acompanhamento e aconselhamento agronómico. O momento da colheita, a compactação e a vedação hermética continuam a ser essenciais para uma boa silagem.",
    cta: "Planeie um ensaio na sua exploração",
  },
  ar: {
    title: "Water Vital®‎ للذرة المعدّة للسيلاج",
    subtitle: "من الري إلى جودة تغذية الحيوان",
    lede: "مقترح لتقييم إدارة المياه ونمو الجذور وإنتاج السيلاج ميدانياً.",
    photoAlt: "جذور نبتة ذرة في تربة رطبة، مع محور ري في الخلفية",
    photoCaption: "صورة توضيحية",
    benefitsTitle: "فوائد محتملة للتحقق منها في محصولك",
    benefits: [
      { h: "نمو الجذور", p: "تقييم نمو الجذور وتكوّن الجذور الدقيقة وانتشارها في التربة." },
      { h: "المياه والعناصر الغذائية", p: "قياس رطوبة منطقة الجذور وتقييم الحالة الغذائية للنباتات بتحليل الأوراق." },
      { h: "كفاءة التسميد", p: "اختبار إمكانية خفض الأسمدة مع الحفاظ على إنتاجية السيلاج وجودته." },
      { h: "إدارة الري", p: "مقارنة كمية مياه الري وانتظام توزيعها والإنتاج لكل متر مكعب من المياه." },
      { h: "إنتاج الأعلاف", p: "قياس إنتاج المادة الجافة لكل هكتار وملاحظة تجانس المحصول." },
      { h: "جودة السيلاج", p: "تحليل المادة الجافة والنشا والألياف وقابلية الهضم وجودة التخمّر." },
    ],
    verifyTitle: "كيفية التحقق من النتائج",
    verifyText:
      "قارن بين قطع زراعية مع Water Vital®‎ وبدونه، مع تكرارات وظروف متشابهة للتربة وهجين الذرة والممارسات الزراعية. سجّل كميات المياه والأسمدة والإنتاجية ونتائج تحليل السيلاج. قيّم كل تغيير على حدة.",
    silageAlt: "ذرة مفرومة للسيلاج",
    importantLabel: "مهم:",
    important:
      "يجب إثبات التأثيرات الخاصة بـ Water Vital®‎ بتجارب مقارنة. لا تقلّل مياه الري أو التسميد دون متابعة وإرشاد زراعي. يظل توقيت الحصاد والكبس والإغلاق المحكم عوامل أساسية للحصول على سيلاجٍ جيد.",
    cta: "خطّط لتجربة في مزرعتك",
  },
  zh: {
    title: "Water Vital® 用于青贮玉米",
    subtitle: "从灌溉到饲料品质",
    lede: "一项在田间评估水分管理、根系发育和青贮产量的方案。",
    photoAlt: "湿润土壤中的玉米根系，背景是灌溉喷灌机",
    photoCaption: "示意图",
    benefitsTitle: "可在您的作物上验证的潜在效益",
    benefits: [
      { h: "根系发育", p: "评估根系生长、细根形成以及对土壤的探索能力。" },
      { h: "水分与养分", p: "通过叶片分析，检查根区含水量和植株营养状况。" },
      { h: "肥料效率", p: "测试在保持产量和青贮品质的前提下，能否调整肥料用量。" },
      { h: "灌溉管理", p: "比较灌溉水量、灌溉均匀度以及每立方米水的产量。" },
      { h: "饲料产量", p: "测定每公顷干物质产量，并观察作物的整齐度。" },
      { h: "青贮品质", p: "分析干物质、淀粉、纤维、消化率和发酵品质。" },
    ],
    verifyTitle: "如何验证结果",
    verifyText:
      "在土壤、杂交品种和管理条件相近的情况下，设置重复，对比使用与不使用 Water Vital® 的地块。记录用水量、肥料、产量和青贮分析结果。每项变化需单独评估。",
    silageAlt: "用于青贮的玉米切碎料",
    importantLabel: "重要：",
    important:
      "Water Vital® 的具体效果必须通过对比试验来证明。在没有监测和农艺指导的情况下，请勿减少用水或施肥。收割时机、压实和密封性仍然是做好青贮的关键。",
    cta: "在您的农场规划一次试验",
  },
  id: {
    title: "Water Vital® untuk jagung silase",
    subtitle: "Dari irigasi hingga kualitas pakan ternak",
    lede: "Usulan evaluasi di lapangan untuk pengelolaan air, perkembangan akar, dan produksi silase.",
    photoAlt: "Akar tanaman jagung di tanah yang lembap, dengan pivot irigasi di latar belakang",
    photoCaption: "Gambar ilustrasi",
    benefitsTitle: "Potensi manfaat yang perlu divalidasi pada tanaman Anda",
    benefits: [
      { h: "Perkembangan akar", p: "Evaluasi pertumbuhan akar, pembentukan akar halus, dan penjelajahan tanah." },
      { h: "Air dan hara", p: "Periksa kelembapan zona akar dan status hara tanaman melalui analisis daun." },
      { h: "Efisiensi pemupukan", p: "Uji apakah pemakaian pupuk dapat disesuaikan dengan tetap menjaga hasil dan kualitas silase." },
      { h: "Pengelolaan irigasi", p: "Bandingkan volume air yang diberikan, keseragaman irigasi, dan produksi per meter kubik." },
      { h: "Produksi hijauan", p: "Ukur hasil bahan kering per hektare dan amati keseragaman tanaman." },
      { h: "Kualitas silase", p: "Analisis bahan kering, pati, serat, daya cerna, dan kualitas fermentasi." },
    ],
    verifyTitle: "Cara memverifikasi hasil",
    verifyText:
      "Bandingkan petak dengan dan tanpa Water Vital®, dengan ulangan serta kondisi tanah, hibrida, dan pengelolaan yang serupa. Catat air, pupuk, hasil panen, dan analisis silase. Evaluasi setiap perubahan secara terpisah.",
    silageAlt: "Jagung cincang untuk silase",
    importantLabel: "Penting:",
    important:
      "Efek spesifik Water Vital® harus dibuktikan melalui uji perbandingan. Jangan mengurangi air atau pupuk tanpa pemantauan dan bimbingan agronomi. Waktu panen, pemadatan, dan penutupan kedap udara tetap penting untuk silase yang baik.",
    cta: "Rencanakan uji coba di lahan pertanian Anda",
  },
  de: {
    title: "Water Vital® für Silomais",
    subtitle: "Von der Bewässerung bis zur Qualität des Tierfutters",
    lede: "Ein Vorschlag zur Bewertung von Wassermanagement, Wurzelentwicklung und Silageproduktion im Feld.",
    photoAlt: "Wurzeln einer Maispflanze in feuchtem Boden, im Hintergrund eine Beregnungsanlage",
    photoCaption: "Symbolbild",
    benefitsTitle: "Mögliche Vorteile, die in Ihrem Bestand zu prüfen sind",
    benefits: [
      { h: "Wurzelentwicklung", p: "Wurzelwachstum, Feinwurzelbildung und Bodenerschließung bewerten." },
      { h: "Wasser und Nährstoffe", p: "Die Feuchte im Wurzelraum und den Nährstoffstatus der Pflanzen per Blattanalyse prüfen." },
      { h: "Düngeeffizienz", p: "Testen, ob sich der Düngereinsatz anpassen lässt, ohne Ertrag und Silagequalität zu mindern." },
      { h: "Bewässerungsmanagement", p: "Ausgebrachte Wassermenge, Gleichmäßigkeit der Bewässerung und Ertrag je Kubikmeter vergleichen." },
      { h: "Futterertrag", p: "Den Trockenmasseertrag je Hektar messen und die Gleichmäßigkeit des Bestands beobachten." },
      { h: "Silagequalität", p: "Trockenmasse, Stärke, Fasern, Verdaulichkeit und Gärqualität analysieren." },
    ],
    verifyTitle: "So überprüfen Sie die Ergebnisse",
    verifyText:
      "Vergleichen Sie Flächen mit und ohne Water Vital® mit Wiederholungen und ähnlichen Boden-, Sorten- und Bewirtschaftungsbedingungen. Erfassen Sie Wasser, Dünger, Ertrag und Silageanalysen. Bewerten Sie jede Änderung einzeln.",
    silageAlt: "Gehäckselter Mais für Silage",
    importantLabel: "Wichtig:",
    important:
      "Die spezifischen Wirkungen von Water Vital® müssen durch Vergleichsversuche nachgewiesen werden. Reduzieren Sie Wasser oder Dünger nicht ohne Kontrolle und agronomische Beratung. Erntezeitpunkt, Verdichtung und luftdichter Verschluss bleiben für eine gute Silage entscheidend.",
    cta: "Planen Sie einen Versuch auf Ihrem Betrieb",
  },
  it: {
    title: "Water Vital® per il mais da insilato",
    subtitle: "Dall'irrigazione alla qualità dell'alimentazione animale",
    lede: "Una proposta di valutazione in campo della gestione dell'acqua, dello sviluppo radicale e della produzione di insilato.",
    photoAlt: "Radici di una pianta di mais in un suolo umido, con un pivot di irrigazione sullo sfondo",
    photoCaption: "Immagine illustrativa",
    benefitsTitle: "Benefici potenziali da verificare nella vostra coltura",
    benefits: [
      { h: "Sviluppo radicale", p: "Valutare la crescita delle radici, la formazione di radici fini e l'esplorazione del suolo." },
      { h: "Acqua e nutrienti", p: "Verificare l'umidità della zona radicale e lo stato nutrizionale delle piante con l'analisi fogliare." },
      { h: "Efficienza della concimazione", p: "Verificare se è possibile ridurre i concimi mantenendo la resa e la qualità dell'insilato." },
      { h: "Gestione dell'irrigazione", p: "Confrontare il volume d'acqua applicato, l'uniformità dell'irrigazione e la produzione per metro cubo." },
      { h: "Produzione foraggera", p: "Misurare la produzione di sostanza secca per ettaro e osservare l'uniformità della coltura." },
      { h: "Qualità dell'insilato", p: "Analizzare sostanza secca, amido, fibre, digeribilità e qualità della fermentazione." },
    ],
    verifyTitle: "Come verificare i risultati",
    verifyText:
      "Confrontate appezzamenti con e senza Water Vital®, con ripetizioni e condizioni simili di suolo, ibrido e gestione colturale. Registrate acqua, concimi, resa e analisi dell'insilato. Valutate ogni modifica separatamente.",
    silageAlt: "Mais trinciato per insilato",
    importantLabel: "Importante:",
    important:
      "Gli effetti specifici di Water Vital® devono essere dimostrati con prove comparative. Non riducete l'acqua o la concimazione senza monitoraggio e consulenza agronomica. Il momento della raccolta, la compattazione e la chiusura ermetica restano essenziali per un buon insilato.",
    cta: "Pianificate una prova nella vostra azienda",
  },
  el: {
    title: "Water Vital® για το καλαμπόκι ενσίρωσης",
    subtitle: "Από την άρδευση έως την ποιότητα της ζωοτροφής",
    lede: "Μια πρόταση αξιολόγησης στο χωράφι για τη διαχείριση του νερού, την ανάπτυξη του ριζικού συστήματος και την παραγωγή ενσιρώματος.",
    photoAlt: "Ρίζες φυτού καλαμποκιού σε υγρό έδαφος, με ένα σύστημα άρδευσης στο βάθος",
    photoCaption: "Ενδεικτική εικόνα",
    benefitsTitle: "Πιθανά οφέλη προς επαλήθευση στην καλλιέργειά σας",
    benefits: [
      { h: "Ανάπτυξη ριζικού συστήματος", p: "Αξιολόγηση της ανάπτυξης των ριζών, του σχηματισμού λεπτών ριζών και της εξερεύνησης του εδάφους." },
      { h: "Νερό και θρεπτικά στοιχεία", p: "Έλεγχος της υγρασίας στη ριζόσφαιρα και της θρεπτικής κατάστασης των φυτών με φυλλοδιαγνωστική." },
      { h: "Αποδοτικότητα της λίπανσης", p: "Δοκιμή για το αν μπορούν να προσαρμοστούν τα λιπάσματα διατηρώντας την απόδοση και την ποιότητα του ενσιρώματος." },
      { h: "Διαχείριση της άρδευσης", p: "Σύγκριση του όγκου νερού που εφαρμόζεται, της ομοιομορφίας της άρδευσης και της παραγωγής ανά κυβικό μέτρο." },
      { h: "Παραγωγή ζωοτροφής", p: "Μέτρηση της παραγωγής ξηρής ουσίας ανά εκτάριο και παρατήρηση της ομοιομορφίας της καλλιέργειας." },
      { h: "Ποιότητα ενσιρώματος", p: "Ανάλυση ξηρής ουσίας, αμύλου, ινών, πεπτικότητας και ποιότητας ζύμωσης." },
    ],
    verifyTitle: "Πώς να επαληθεύσετε τα αποτελέσματα",
    verifyText:
      "Συγκρίνετε τεμάχια με και χωρίς Water Vital®, με επαναλήψεις και παρόμοιες συνθήκες εδάφους, υβριδίου και καλλιεργητικής διαχείρισης. Καταγράψτε το νερό, τα λιπάσματα, την απόδοση και τις αναλύσεις του ενσιρώματος. Αξιολογήστε κάθε αλλαγή ξεχωριστά.",
    silageAlt: "Κομμένο καλαμπόκι για ενσίρωση",
    importantLabel: "Σημαντικό:",
    important:
      "Οι ειδικές επιδράσεις του Water Vital® πρέπει να αποδεικνύονται με συγκριτικές δοκιμές. Μην μειώνετε το νερό ή τη λίπανση χωρίς παρακολούθηση και αγρονομική καθοδήγηση. Το στάδιο συγκομιδής, η συμπίεση και η αεροστεγής σφράγιση παραμένουν καθοριστικά για ένα καλό ενσίρωμα.",
    cta: "Σχεδιάστε μια δοκιμή στην εκμετάλλευσή σας",
  },
  tr: {
    title: "Silajlık mısır için Water Vital®",
    subtitle: "Sulamadan hayvan yemi kalitesine",
    lede: "Su yönetimini, kök gelişimini ve silaj üretimini tarlada değerlendirmeye yönelik bir öneri.",
    photoAlt: "Nemli toprakta bir mısır bitkisinin kökleri, arka planda bir sulama pivotu",
    photoCaption: "Temsili görsel",
    benefitsTitle: "Tarlanızda doğrulanması gereken olası faydalar",
    benefits: [
      { h: "Kök gelişimi", p: "Kök büyümesini, ince kök oluşumunu ve toprağın keşfedilmesini değerlendirin." },
      { h: "Su ve besin maddeleri", p: "Kök bölgesi nemini ve bitkilerin beslenme durumunu yaprak analiziyle kontrol edin." },
      { h: "Gübre verimliliği", p: "Verimi ve silaj kalitesini korurken gübre girdisinin ayarlanıp ayarlanamayacağını test edin." },
      { h: "Sulama yönetimi", p: "Uygulanan su hacmini, sulama düzgünlüğünü ve metreküp başına üretimi karşılaştırın." },
      { h: "Yem üretimi", p: "Hektar başına kuru madde verimini ölçün ve bitki örtüsünün homojenliğini gözlemleyin." },
      { h: "Silaj kalitesi", p: "Kuru madde, nişasta, lif, sindirilebilirlik ve fermantasyon kalitesini analiz edin." },
    ],
    verifyTitle: "Sonuçlar nasıl doğrulanır",
    verifyText:
      "Benzer toprak, hibrit ve yönetim koşullarında, tekrarlarla Water Vital® uygulanan ve uygulanmayan alanları karşılaştırın. Suyu, gübreyi, verimi ve silaj analizlerini kaydedin. Her değişikliği ayrı ayrı değerlendirin.",
    silageAlt: "Silaj için doğranmış mısır",
    importantLabel: "Önemli:",
    important:
      "Water Vital®'ın özel etkileri karşılaştırmalı denemelerle kanıtlanmalıdır. İzleme ve agronomik rehberlik olmadan suyu veya gübreyi azaltmayın. Hasat zamanı, sıkıştırma ve hava geçirmez kapatma, iyi bir silaj için hâlâ vazgeçilmezdir.",
    cta: "Çiftliğinizde bir deneme planlayın",
  },
  pl: {
    title: "Water Vital® do kukurydzy na kiszonkę",
    subtitle: "Od nawadniania do jakości paszy dla zwierząt",
    lede: "Propozycja oceny w polu: gospodarka wodna, rozwój korzeni i produkcja kiszonki.",
    photoAlt: "Korzenie rośliny kukurydzy w wilgotnej glebie, w tle maszyna nawadniająca",
    photoCaption: "Ilustracja poglądowa",
    benefitsTitle: "Potencjalne korzyści do zweryfikowania w uprawie",
    benefits: [
      { h: "Rozwój korzeni", p: "Ocena wzrostu korzeni, tworzenia korzeni drobnych i eksploracji gleby." },
      { h: "Woda i składniki pokarmowe", p: "Sprawdzenie wilgotności strefy korzeniowej i stanu odżywienia roślin na podstawie analizy liści." },
      { h: "Efektywność nawożenia", p: "Sprawdzenie, czy można dostosować nawożenie przy zachowaniu plonu i jakości kiszonki." },
      { h: "Zarządzanie nawadnianiem", p: "Porównanie ilości zastosowanej wody, równomierności nawadniania i produkcji na metr sześcienny." },
      { h: "Produkcja paszy", p: "Pomiar plonu suchej masy z hektara i obserwacja jednolitości łanu." },
      { h: "Jakość kiszonki", p: "Analiza suchej masy, skrobi, włókna, strawności i jakości fermentacji." },
    ],
    verifyTitle: "Jak zweryfikować wyniki",
    verifyText:
      "Porównaj poletka z Water Vital® i bez niego, w powtórzeniach i w podobnych warunkach glebowych, odmianowych i agrotechnicznych. Zapisuj zużycie wody i nawozów, plon oraz wyniki analiz kiszonki. Oceniaj każdą zmianę osobno.",
    silageAlt: "Sieczka z kukurydzy na kiszonkę",
    importantLabel: "Ważne:",
    important:
      "Specyficzne działanie Water Vital® trzeba wykazać w badaniach porównawczych. Nie ograniczaj wody ani nawożenia bez monitorowania i doradztwa agronomicznego. Termin zbioru, ubicie i szczelne zamknięcie pozostają kluczowe dla dobrej kiszonki.",
    cta: "Zaplanuj doświadczenie w swoim gospodarstwie",
  },
  hr: {
    title: "Water Vital® za silažni kukuruz",
    subtitle: "Od navodnjavanja do kvalitete stočne hrane",
    lede: "Prijedlog procjene na terenu: upravljanje vodom, razvoj korijena i proizvodnja silaže.",
    photoAlt: "Korijenje biljke kukuruza u vlažnom tlu, u pozadini sustav za navodnjavanje",
    photoCaption: "Ilustrativna slika",
    benefitsTitle: "Potencijalne koristi koje treba provjeriti u vašem usjevu",
    benefits: [
      { h: "Razvoj korijena", p: "Procijeniti rast korijena, stvaranje sitnog korijenja i istraživanje tla." },
      { h: "Voda i hranjiva", p: "Provjeriti vlažnost zone korijena i ishranjenost biljaka analizom lista." },
      { h: "Učinkovitost gnojidbe", p: "Ispitati može li se gnojidba prilagoditi uz zadržavanje prinosa i kvalitete silaže." },
      { h: "Upravljanje navodnjavanjem", p: "Usporediti primijenjenu količinu vode, ujednačenost navodnjavanja i proizvodnju po kubnom metru." },
      { h: "Proizvodnja krme", p: "Izmjeriti prinos suhe tvari po hektaru i promatrati ujednačenost usjeva." },
      { h: "Kvaliteta silaže", p: "Analizirati suhu tvar, škrob, vlakna, probavljivost i kvalitetu fermentacije." },
    ],
    verifyTitle: "Kako provjeriti rezultate",
    verifyText:
      "Usporedite parcele sa Water Vital® i bez njega, s ponavljanjima i sličnim uvjetima tla, hibrida i agrotehnike. Bilježite vodu, gnojivo, prinos i analize silaže. Svaku promjenu procjenjujte zasebno.",
    silageAlt: "Usitnjeni kukuruz za silažu",
    importantLabel: "Važno:",
    important:
      "Specifični učinci Water Vital® moraju se dokazati usporednim pokusima. Ne smanjujte vodu ni gnojidbu bez praćenja i agronomskog savjetovanja. Vrijeme žetve, sabijanje i zrakonepropusno zatvaranje i dalje su ključni za dobru silažu.",
    cta: "Planirajte pokus na svojem gospodarstvu",
  },
  ca: {
    title: "Water Vital® per al blat de moro d'ensitjat",
    subtitle: "Del reg a la qualitat de l'alimentació animal",
    lede: "Una proposta d'avaluació al camp de la gestió de l'aigua, el desenvolupament radicular i la producció d'ensitjat.",
    photoAlt: "Arrels d'una planta de blat de moro en un sòl humit, amb un pivot de reg al fons",
    photoCaption: "Imatge il·lustrativa",
    benefitsTitle: "Beneficis potencials per validar en el vostre cultiu",
    benefits: [
      { h: "Desenvolupament radicular", p: "Avaluar el creixement de les arrels, la formació d'arrels fines i l'exploració del sòl." },
      { h: "Aigua i nutrients", p: "Comprovar la humitat de la zona radicular i l'estat nutricional de les plantes mitjançant l'anàlisi foliar." },
      { h: "Eficiència de la fertilització", p: "Provar si es poden reduir els fertilitzants mantenint el rendiment i la qualitat de l'ensitjat." },
      { h: "Gestió del reg", p: "Comparar el volum d'aigua aplicat, la uniformitat del reg i la producció per metre cúbic." },
      { h: "Producció farratgera", p: "Mesurar la producció de matèria seca per hectàrea i observar la uniformitat del cultiu." },
      { h: "Qualitat de l'ensitjat", p: "Analitzar la matèria seca, el midó, les fibres, la digestibilitat i la qualitat de la fermentació." },
    ],
    verifyTitle: "Com verificar els resultats",
    verifyText:
      "Compareu parcel·les amb i sense Water Vital®, amb repeticions i condicions semblants de sòl, híbrid i maneig del cultiu. Registreu l'aigua, els fertilitzants, el rendiment i les anàlisis de l'ensitjat. Avalueu cada canvi per separat.",
    silageAlt: "Blat de moro triturat per a ensitjat",
    importantLabel: "Important:",
    important:
      "Els efectes específics de Water Vital® s'han de demostrar mitjançant assajos comparatius. No reduïu l'aigua ni la fertilització sense seguiment i assessorament agronòmic. El moment de la collita, la compactació i el tancament hermètic continuen sent essencials per a un bon ensitjat.",
    cta: "Planifiqueu un assaig a la vostra explotació",
  },
};

/** Le français d'abord : c'est la langue de repli. */
export function mais(langue: string): TextesMais {
  return MAIS[langue] ?? MAIS.fr;
}
