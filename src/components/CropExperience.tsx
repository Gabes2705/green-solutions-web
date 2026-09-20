"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/content";
import styles from "./CropExperience.module.css";

type Phase = { title: string; description: string };

type CoreLang = "fr" | "en" | "es" | "pt" | "ar" | "zh";

type FilmCopy = {
  film: string;
  duration: string;
  restart: string;
  synergyEyebrow: string;
  synergyTitle: string;
  synergyIntro: string;
};

type ExperienceCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  modelNote: string;
  control: string;
  controlSub: string;
  treated: string;
  treatedSub: string;
  waterAvailable: string;
  irrigationInterval: string;
  low: string;
  high: string;
  frequent: string;
  spaced: string;
  reading: string;
  indexNote: string;
  metricWater: string;
  metricRoots: string;
  metricYield: string;
  adjust: string;
  solutions: string;
  previous: string;
  next: string;
  pause: string;
  play: string;
  phases: [Phase, Phase, Phase, Phase];
};

const COPY: Record<Lang, ExperienceCopy> = {
  fr: {
    eyebrow: "Démonstrateur agronomique interactif",
    title: "Voir cinq solutions agir, de l’eau jusqu’à la récolte",
    intro: "Comparez une culture témoin et une culture accompagnée par la synergie Green Solutions : eau préparée, réserve hydrique, nutrition ciblée et protection de la plante, du sol jusqu’aux épis.",
    modelNote: "Simulation pédagogique : les indices illustrent un mécanisme, ils ne constituent pas une promesse de rendement. Les résultats réels dépendent du sol, du climat, de la culture et du protocole.",
    control: "Culture témoin",
    controlSub: "Sol sans hydrorétenteur",
    treated: "Synergie Green Solutions",
    treatedSub: "5 solutions · un itinéraire agronomique",
    waterAvailable: "Eau disponible",
    irrigationInterval: "Intervalle d’irrigation",
    low: "Faible",
    high: "Élevée",
    frequent: "Fréquent",
    spaced: "Espacé",
    reading: "Lecture comparative",
    indexNote: "Indices pédagogiques / 100",
    metricWater: "Eau dans la zone racinaire",
    metricRoots: "Déploiement racinaire",
    metricYield: "Potentiel de rendement",
    adjust: "Ajustez le scénario",
    solutions: "Comprendre les solutions associées",
    previous: "Étape précédente",
    next: "Étape suivante",
    pause: "Mettre l’animation en pause",
    play: "Relancer l’animation",
    phases: [
      { title: "Sol sec", description: "Sans réserve locale, l’eau quitte plus vite la zone explorée par les racines." },
      { title: "Eau captée", description: "L’hydrorétenteur se charge et maintient une humidité disponible au voisinage des racines." },
      { title: "Racines", description: "Une disponibilité plus régulière accompagne l’exploration du volume de sol." },
      { title: "Récolte", description: "La plante traverse mieux l’intervalle d’irrigation et protège son potentiel agronomique." },
    ],
  },
  en: {
    eyebrow: "Interactive agronomic demonstrator",
    title: "See five solutions work, from water to harvest",
    intro: "Compare a control crop with a crop supported by the Green Solutions synergy: prepared water, root-zone reserve, targeted nutrition and plant protection, from soil to mature ears.",
    modelNote: "Educational simulation: the indices illustrate a mechanism and are not a yield promise. Field results depend on soil, climate, crop and protocol.",
    control: "Control crop",
    controlSub: "Soil without water retainer",
    treated: "Green Solutions synergy",
    treatedSub: "5 solutions · one agronomic pathway",
    waterAvailable: "Available water",
    irrigationInterval: "Irrigation interval",
    low: "Low",
    high: "High",
    frequent: "Frequent",
    spaced: "Spaced",
    reading: "Comparative reading",
    indexNote: "Educational indices / 100",
    metricWater: "Water in the root zone",
    metricRoots: "Root development",
    metricYield: "Yield potential",
    adjust: "Adjust the scenario",
    solutions: "Explore the related solutions",
    previous: "Previous stage",
    next: "Next stage",
    pause: "Pause animation",
    play: "Resume animation",
    phases: [
      { title: "Dry soil", description: "Without a local reserve, water leaves the root zone more quickly." },
      { title: "Captured water", description: "The water retainer charges and keeps available moisture close to the roots." },
      { title: "Roots", description: "More regular availability supports exploration of the soil volume." },
      { title: "Harvest", description: "The plant bridges irrigation intervals more effectively and protects its agronomic potential." },
    ],
  },
  es: {
    eyebrow: "Demostrador agronómico interactivo",
    title: "Vea actuar cinco soluciones, del agua a la cosecha",
    intro: "Compare un cultivo testigo con otro apoyado por la sinergia Green Solutions: agua preparada, reserva hídrica, nutrición específica y protección vegetal, del suelo a las mazorcas maduras.",
    modelNote: "Simulación pedagógica: los índices ilustran un mecanismo y no garantizan rendimiento. Los resultados dependen del suelo, clima, cultivo y protocolo.",
    control: "Cultivo testigo",
    controlSub: "Suelo sin hidroretenedor",
    treated: "Sinergia Green Solutions",
    treatedSub: "5 soluciones · un itinerario agronómico",
    waterAvailable: "Agua disponible",
    irrigationInterval: "Intervalo de riego",
    low: "Baja",
    high: "Alta",
    frequent: "Frecuente",
    spaced: "Espaciado",
    reading: "Lectura comparativa",
    indexNote: "Índices pedagógicos / 100",
    metricWater: "Agua en la zona radicular",
    metricRoots: "Desarrollo radicular",
    metricYield: "Potencial de rendimiento",
    adjust: "Ajuste el escenario",
    solutions: "Conocer las soluciones asociadas",
    previous: "Etapa anterior",
    next: "Etapa siguiente",
    pause: "Pausar la animación",
    play: "Reanudar la animación",
    phases: [
      { title: "Suelo seco", description: "Sin una reserva local, el agua abandona antes la zona radicular." },
      { title: "Agua captada", description: "El hidroretenedor se carga y mantiene humedad disponible cerca de las raíces." },
      { title: "Raíces", description: "Una disponibilidad más regular favorece la exploración del suelo." },
      { title: "Cosecha", description: "La planta atraviesa mejor el intervalo de riego y protege su potencial agronómico." },
    ],
  },
  pt: {
    eyebrow: "Demonstração agronómica interativa",
    title: "Veja cinco soluções em ação, da água à colheita",
    intro: "Compare uma cultura de controlo com outra apoiada pela sinergia Green Solutions: água preparada, reserva hídrica, nutrição dirigida e proteção vegetal, do solo às espigas maduras.",
    modelNote: "Simulação pedagógica: os índices ilustram um mecanismo e não garantem rendimento. Os resultados dependem do solo, clima, cultura e protocolo.",
    control: "Cultura de controlo",
    controlSub: "Solo sem hidroretentor",
    treated: "Sinergia Green Solutions",
    treatedSub: "5 soluções · um percurso agronómico",
    waterAvailable: "Água disponível",
    irrigationInterval: "Intervalo de rega",
    low: "Baixa",
    high: "Alta",
    frequent: "Frequente",
    spaced: "Espaçado",
    reading: "Leitura comparativa",
    indexNote: "Índices pedagógicos / 100",
    metricWater: "Água na zona radicular",
    metricRoots: "Desenvolvimento radicular",
    metricYield: "Potencial de rendimento",
    adjust: "Ajuste o cenário",
    solutions: "Conhecer as soluções associadas",
    previous: "Etapa anterior",
    next: "Etapa seguinte",
    pause: "Pausar a animação",
    play: "Retomar a animação",
    phases: [
      { title: "Solo seco", description: "Sem uma reserva local, a água deixa mais depressa a zona radicular." },
      { title: "Água captada", description: "O hidroretentor carrega-se e mantém humidade disponível junto às raízes." },
      { title: "Raízes", description: "Uma disponibilidade mais regular favorece a exploração do solo." },
      { title: "Colheita", description: "A planta atravessa melhor o intervalo de rega e protege o seu potencial agronómico." },
    ],
  },
  ar: {
    eyebrow: "عرض زراعي تفاعلي",
    title: "شاهد عمل خمسة حلول من الماء إلى الحصاد",
    intro: "قارن بين محصول شاهد ومحصول تدعمه منظومة Green Solutions: ماء مُحضّر ومخزون مائي وتغذية موجهة وحماية للنبات، من التربة حتى أكواز الذرة الناضجة.",
    modelNote: "محاكاة تعليمية: المؤشرات تشرح الآلية ولا تمثل ضماناً للإنتاج. تعتمد النتائج الفعلية على التربة والمناخ والمحصول والبروتوكول.",
    control: "المحصول الشاهد",
    controlSub: "تربة من دون مادة محتجزة للماء",
    treated: "تكامل Green Solutions",
    treatedSub: "5 حلول · مسار زراعي واحد",
    waterAvailable: "الماء المتاح",
    irrigationInterval: "الفاصل بين الري",
    low: "منخفض",
    high: "مرتفع",
    frequent: "متكرر",
    spaced: "متباعد",
    reading: "قراءة مقارنة",
    indexNote: "مؤشرات تعليمية / 100",
    metricWater: "الماء في منطقة الجذور",
    metricRoots: "نمو الجذور",
    metricYield: "إمكانات الإنتاج",
    adjust: "عدّل السيناريو",
    solutions: "استكشف الحلول المرتبطة",
    previous: "المرحلة السابقة",
    next: "المرحلة التالية",
    pause: "إيقاف الحركة مؤقتاً",
    play: "استئناف الحركة",
    phases: [
      { title: "تربة جافة", description: "من دون مخزون محلي، يغادر الماء منطقة الجذور بسرعة أكبر." },
      { title: "ماء محتجز", description: "تمتص المادة الماء وتحافظ على رطوبة متاحة قرب الجذور." },
      { title: "الجذور", description: "يساعد انتظام توفر الماء الجذور على استكشاف حجم أكبر من التربة." },
      { title: "الحصاد", description: "يتحمل النبات فترة الري بصورة أفضل ويحافظ على إمكاناته الزراعية." },
    ],
  },
  zh: {
    eyebrow: "互动农业演示",
    title: "观察五项方案从用水到收获的协同作用",
    intro: "对比普通种植与 Green Solutions 协同方案：优化水质、根区蓄水、精准营养和作物保护，从土壤一直观察到成熟玉米穗。",
    modelNote: "教学模拟：指数用于说明作用机制，并非产量承诺。实际结果取决于土壤、气候、作物和应用方案。",
    control: "对照种植",
    controlSub: "未使用保水剂的土壤",
    treated: "Green Solutions 协同方案",
    treatedSub: "5 项方案 · 一套农艺路径",
    waterAvailable: "可用水量",
    irrigationInterval: "灌溉间隔",
    low: "低",
    high: "高",
    frequent: "频繁",
    spaced: "较长",
    reading: "对比结果",
    indexNote: "教学指数 / 100",
    metricWater: "根区水分",
    metricRoots: "根系发育",
    metricYield: "产量潜力",
    adjust: "调整情景",
    solutions: "了解相关解决方案",
    previous: "上一阶段",
    next: "下一阶段",
    pause: "暂停动画",
    play: "继续动画",
    phases: [
      { title: "干燥土壤", description: "没有局部储水时，水分更快离开根区。" },
      { title: "水分保持", description: "保水剂吸收水分，并在根系附近保持可利用的湿度。" },
      { title: "根系", description: "更稳定的水分供应有助于根系探索更多土壤。" },
      { title: "收获", description: "植物更好地度过灌溉间隔并保持农业生产潜力。" },
    ],
  },
  id: {
    eyebrow: "Demonstrator agronomi interaktif",
    title: "Lihat perubahan dari cadangan air di zona akar",
    intro: "Bandingkan tanaman kontrol dengan tanaman yang memakai penahan air. Atur air tersedia dan jeda irigasi, lalu ikuti proses dari tanah hingga panen.",
    modelNote: "Simulasi edukatif: indeks menjelaskan mekanisme, bukan jaminan hasil. Hasil lapangan bergantung pada tanah, iklim, tanaman, dan protokol.",
    control: "Tanaman kontrol", controlSub: "Tanah tanpa penahan air", treated: "Sinergi Green Solutions", treatedSub: "5 solusi · satu jalur agronomi",
    waterAvailable: "Air tersedia", irrigationInterval: "Jeda irigasi", low: "Rendah", high: "Tinggi", frequent: "Sering", spaced: "Jarang",
    reading: "Perbandingan", indexNote: "Indeks edukatif / 100", metricWater: "Air di zona akar", metricRoots: "Perkembangan akar", metricYield: "Potensi hasil", adjust: "Atur skenario", solutions: "Pelajari solusi terkait", previous: "Tahap sebelumnya", next: "Tahap berikutnya", pause: "Jeda animasi", play: "Lanjutkan animasi",
    phases: [
      { title: "Tanah kering", description: "Tanpa cadangan lokal, air lebih cepat meninggalkan zona akar." },
      { title: "Air tertahan", description: "Penahan air menyerap dan menjaga kelembapan tersedia dekat akar." },
      { title: "Akar", description: "Ketersediaan yang lebih teratur membantu akar menjelajahi tanah." },
      { title: "Panen", description: "Tanaman lebih mampu melewati jeda irigasi dan menjaga potensinya." },
    ],
  },
  de: {
    eyebrow: "Interaktiver agronomischer Demonstrator",
    title: "So wirkt eine Wasserreserve im Wurzelraum",
    intro: "Vergleichen Sie eine Kontrollkultur mit einer Kultur mit Wasserspeicher. Variieren Sie Wassermenge und Bewässerungsabstand – vom Boden bis zur Ernte.",
    modelNote: "Lehrsimulation: Die Indizes erklären einen Mechanismus und sind keine Ertragsgarantie. Feldergebnisse hängen von Boden, Klima, Kultur und Protokoll ab.",
    control: "Kontrollkultur", controlSub: "Boden ohne Wasserspeicher", treated: "Green Solutions Synergie", treatedSub: "5 Lösungen · ein agronomisches System",
    waterAvailable: "Verfügbares Wasser", irrigationInterval: "Bewässerungsabstand", low: "Niedrig", high: "Hoch", frequent: "Häufig", spaced: "Weit",
    reading: "Vergleich", indexNote: "Lehrindizes / 100", metricWater: "Wasser im Wurzelraum", metricRoots: "Wurzelentwicklung", metricYield: "Ertragspotenzial", adjust: "Szenario anpassen", solutions: "Zugehörige Lösungen", previous: "Vorherige Phase", next: "Nächste Phase", pause: "Animation pausieren", play: "Animation fortsetzen",
    phases: [
      { title: "Trockener Boden", description: "Ohne lokale Reserve verlässt Wasser den Wurzelraum schneller." },
      { title: "Gespeichertes Wasser", description: "Der Wasserspeicher lädt sich auf und hält Feuchtigkeit nahe den Wurzeln verfügbar." },
      { title: "Wurzeln", description: "Eine gleichmäßigere Versorgung unterstützt die Erschließung des Bodenraums." },
      { title: "Ernte", description: "Die Pflanze übersteht Bewässerungsabstände besser und schützt ihr Potenzial." },
    ],
  },
  it: {
    eyebrow: "Dimostratore agronomico interattivo",
    title: "Scoprite cosa cambia con una riserva d’acqua nella zona radicale",
    intro: "Confrontate una coltura di controllo con una coltura dotata di idroritentore. Regolate acqua disponibile e intervallo irriguo, dal suolo al raccolto.",
    modelNote: "Simulazione didattica: gli indici illustrano un meccanismo e non garantiscono la resa. I risultati dipendono da suolo, clima, coltura e protocollo.",
    control: "Coltura di controllo", controlSub: "Suolo senza idroritentore", treated: "Sinergia Green Solutions", treatedSub: "5 soluzioni · un percorso agronomico",
    waterAvailable: "Acqua disponibile", irrigationInterval: "Intervallo irriguo", low: "Bassa", high: "Alta", frequent: "Frequente", spaced: "Distanziato",
    reading: "Lettura comparativa", indexNote: "Indici didattici / 100", metricWater: "Acqua nella zona radicale", metricRoots: "Sviluppo radicale", metricYield: "Potenziale di resa", adjust: "Regolate lo scenario", solutions: "Scoprite le soluzioni associate", previous: "Fase precedente", next: "Fase successiva", pause: "Metti in pausa", play: "Riprendi l’animazione",
    phases: [
      { title: "Suolo secco", description: "Senza una riserva locale, l’acqua lascia più rapidamente la zona radicale." },
      { title: "Acqua trattenuta", description: "L’idroritentore si carica e mantiene umidità disponibile vicino alle radici." },
      { title: "Radici", description: "Una disponibilità più regolare favorisce l’esplorazione del suolo." },
      { title: "Raccolto", description: "La pianta supera meglio l’intervallo irriguo e protegge il proprio potenziale." },
    ],
  },
  el: {
    eyebrow: "Διαδραστική γεωπονική επίδειξη", title: "Δείτε τι αλλάζει ένα απόθεμα νερού στη ριζόσφαιρα", intro: "Συγκρίνετε μια καλλιέργεια μάρτυρα με μια καλλιέργεια που χρησιμοποιεί υδροσυγκρατητικό. Ρυθμίστε το νερό και το διάστημα άρδευσης, από το έδαφος έως τη συγκομιδή.", modelNote: "Εκπαιδευτική προσομοίωση: οι δείκτες εξηγούν τον μηχανισμό και δεν εγγυώνται απόδοση. Τα αποτελέσματα εξαρτώνται από έδαφος, κλίμα, καλλιέργεια και πρωτόκολλο.",
    control: "Καλλιέργεια μάρτυρα", controlSub: "Έδαφος χωρίς υδροσυγκρατητικό", treated: "Συνέργεια Green Solutions", treatedSub: "5 λύσεις · μία γεωπονική διαδρομή", waterAvailable: "Διαθέσιμο νερό", irrigationInterval: "Διάστημα άρδευσης", low: "Χαμηλό", high: "Υψηλό", frequent: "Συχνό", spaced: "Αραιό", reading: "Σύγκριση", indexNote: "Εκπαιδευτικοί δείκτες / 100", metricWater: "Νερό στη ριζόσφαιρα", metricRoots: "Ανάπτυξη ριζών", metricYield: "Δυναμικό απόδοσης", adjust: "Ρυθμίστε το σενάριο", solutions: "Σχετικές λύσεις", previous: "Προηγούμενο στάδιο", next: "Επόμενο στάδιο", pause: "Παύση κίνησης", play: "Συνέχιση κίνησης",
    phases: [
      { title: "Ξηρό έδαφος", description: "Χωρίς τοπικό απόθεμα, το νερό απομακρύνεται γρηγορότερα από τη ριζόσφαιρα." },
      { title: "Συγκράτηση νερού", description: "Το υδροσυγκρατητικό φορτίζεται και διατηρεί διαθέσιμη υγρασία κοντά στις ρίζες." },
      { title: "Ρίζες", description: "Η πιο σταθερή διαθεσιμότητα βοηθά την εξερεύνηση του εδάφους." },
      { title: "Συγκομιδή", description: "Το φυτό αντέχει καλύτερα το διάστημα άρδευσης και προστατεύει το δυναμικό του." },
    ],
  },
  tr: {
    eyebrow: "Etkileşimli agronomi gösterimi", title: "Kök bölgesindeki su rezervinin etkisini görün", intro: "Kontrol ürünü ile su tutucu kullanılan ürünü karşılaştırın. Kullanılabilir suyu ve sulama aralığını ayarlayıp topraktan hasada süreci izleyin.", modelNote: "Eğitim simülasyonu: endeksler mekanizmayı açıklar, verim garantisi değildir. Sonuçlar toprak, iklim, ürün ve protokole bağlıdır.",
    control: "Kontrol ürünü", controlSub: "Su tutucusuz toprak", treated: "Green Solutions sinerjisi", treatedSub: "5 çözüm · tek agronomik yaklaşım", waterAvailable: "Kullanılabilir su", irrigationInterval: "Sulama aralığı", low: "Düşük", high: "Yüksek", frequent: "Sık", spaced: "Aralıklı", reading: "Karşılaştırma", indexNote: "Eğitim endeksleri / 100", metricWater: "Kök bölgesindeki su", metricRoots: "Kök gelişimi", metricYield: "Verim potansiyeli", adjust: "Senaryoyu ayarlayın", solutions: "İlgili çözümler", previous: "Önceki aşama", next: "Sonraki aşama", pause: "Animasyonu duraklat", play: "Animasyonu sürdür",
    phases: [
      { title: "Kuru toprak", description: "Yerel rezerv olmadan su kök bölgesinden daha hızlı uzaklaşır." },
      { title: "Tutulan su", description: "Su tutucu yüklenir ve köklere yakın kullanılabilir nemi korur." },
      { title: "Kökler", description: "Daha düzenli su, köklerin toprak hacmini keşfetmesini destekler." },
      { title: "Hasat", description: "Bitki sulama aralığını daha iyi geçirir ve potansiyelini korur." },
    ],
  },
  pl: {
    eyebrow: "Interaktywny demonstrator agronomiczny", title: "Zobacz wpływ rezerwy wody w strefie korzeni", intro: "Porównaj uprawę kontrolną z uprawą z hydroretenerem. Zmieniaj ilość wody i odstęp między nawadnianiem, śledząc drogę od gleby do zbioru.", modelNote: "Symulacja edukacyjna: wskaźniki objaśniają mechanizm i nie gwarantują plonu. Wyniki zależą od gleby, klimatu, uprawy i protokołu.",
    control: "Uprawa kontrolna", controlSub: "Gleba bez hydroretenera", treated: "Synergia Green Solutions", treatedSub: "5 rozwiązań · jeden program agronomiczny", waterAvailable: "Dostępna woda", irrigationInterval: "Odstęp nawadniania", low: "Mała", high: "Duża", frequent: "Częsty", spaced: "Rzadki", reading: "Porównanie", indexNote: "Wskaźniki edukacyjne / 100", metricWater: "Woda w strefie korzeni", metricRoots: "Rozwój korzeni", metricYield: "Potencjał plonu", adjust: "Dostosuj scenariusz", solutions: "Powiązane rozwiązania", previous: "Poprzedni etap", next: "Następny etap", pause: "Wstrzymaj animację", play: "Wznów animację",
    phases: [
      { title: "Sucha gleba", description: "Bez lokalnej rezerwy woda szybciej opuszcza strefę korzeni." },
      { title: "Zatrzymana woda", description: "Hydroretener napełnia się i utrzymuje dostępną wilgoć blisko korzeni." },
      { title: "Korzenie", description: "Bardziej regularna dostępność wspiera rozwój systemu korzeniowego." },
      { title: "Zbiór", description: "Roślina lepiej znosi odstęp nawadniania i chroni swój potencjał." },
    ],
  },
  hr: {
    eyebrow: "Interaktivni agronomski prikaz", title: "Pogledajte učinak zalihe vode u zoni korijena", intro: "Usporedite kontrolni usjev s usjevom koji koristi hidroretentor. Podesite dostupnu vodu i razmak navodnjavanja te pratite put od tla do žetve.", modelNote: "Edukativna simulacija: pokazatelji objašnjavaju mehanizam i nisu jamstvo prinosa. Rezultati ovise o tlu, klimi, usjevu i protokolu.",
    control: "Kontrolni usjev", controlSub: "Tlo bez hidroretentora", treated: "Sinergija Green Solutions", treatedSub: "5 rješenja · jedan agronomski pristup", waterAvailable: "Dostupna voda", irrigationInterval: "Razmak navodnjavanja", low: "Niska", high: "Visoka", frequent: "Čest", spaced: "Rijedak", reading: "Usporedni prikaz", indexNote: "Edukativni pokazatelji / 100", metricWater: "Voda u zoni korijena", metricRoots: "Razvoj korijena", metricYield: "Potencijal prinosa", adjust: "Podesite scenarij", solutions: "Povezana rješenja", previous: "Prethodna faza", next: "Sljedeća faza", pause: "Pauziraj animaciju", play: "Nastavi animaciju",
    phases: [
      { title: "Suho tlo", description: "Bez lokalne zalihe voda brže napušta zonu korijena." },
      { title: "Zadržana voda", description: "Hidroretentor upija vodu i održava vlagu dostupnom uz korijen." },
      { title: "Korijenje", description: "Redovitija dostupnost vode podupire razvoj korijena kroz tlo." },
      { title: "Žetva", description: "Biljka bolje podnosi razmak navodnjavanja i čuva svoj potencijal." },
    ],
  },
};

const FILM_COPY: Record<CoreLang, FilmCopy> = {
  fr: {
    film: "Film de synergie agronomique",
    duration: "4 s · comparaison accélérée",
    restart: "Recommencer le film",
    synergyEyebrow: "Le système complet",
    synergyTitle: "Cinq solutions, une seule synergie agronomique",
    synergyIntro: "EVERGREEN® et ECOSORB® créent deux réserves hydriques complémentaires ; Water Vital® prépare l’eau, ECOFERT® nourrit la plante et NAPEMA® la protège. Leur combinaison construit un itinéraire agronomique cohérent.",
  },
  en: {
    film: "Agronomic synergy film",
    duration: "4 sec · accelerated comparison",
    restart: "Restart film",
    synergyEyebrow: "The complete system",
    synergyTitle: "Five solutions, one agronomic synergy",
    synergyIntro: "EVERGREEN® and ECOSORB® create two complementary water reserves; Water Vital® prepares the water, ECOFERT® feeds the plant and NAPEMA® protects it. Together they form a coherent agronomic pathway.",
  },
  es: {
    film: "Película de sinergia agronómica",
    duration: "4 s · comparación acelerada",
    restart: "Reiniciar la película",
    synergyEyebrow: "El sistema completo",
    synergyTitle: "Cinco soluciones, una sinergia agronómica",
    synergyIntro: "EVERGREEN® y ECOSORB® crean dos reservas hídricas complementarias; Water Vital® prepara el agua, ECOFERT® nutre la planta y NAPEMA® la protege. Juntas forman un itinerario agronómico coherente.",
  },
  pt: {
    film: "Filme de sinergia agronómica",
    duration: "4 s · comparação acelerada",
    restart: "Reiniciar o filme",
    synergyEyebrow: "O sistema completo",
    synergyTitle: "Cinco soluções, uma sinergia agronómica",
    synergyIntro: "EVERGREEN® e ECOSORB® criam duas reservas hídricas complementares; Water Vital® prepara a água, ECOFERT® nutre a planta e NAPEMA® protege-a. Juntas formam um percurso agronómico coerente.",
  },
  ar: {
    film: "فيلم التكامل الزراعي",
    duration: "4 ثوانٍ · مقارنة متسارعة",
    restart: "إعادة تشغيل الفيلم",
    synergyEyebrow: "النظام المتكامل",
    synergyTitle: "خمسة حلول في منظومة زراعية متكاملة",
    synergyIntro: "يشكّل EVERGREEN® وECOSORB® مخزونين مائيين متكاملين؛ ويُحضّر Water Vital® الماء، ويغذي ECOFERT® النبات، ويحميه NAPEMA®. وتكوّن معاً مساراً زراعياً متكاملاً.",
  },
  zh: {
    film: "农艺协同短片",
    duration: "4 秒 · 加速对比",
    restart: "重新播放",
    synergyEyebrow: "完整系统",
    synergyTitle: "五项方案，一套农艺协同系统",
    synergyIntro: "EVERGREEN® 与 ECOSORB® 形成互补的蓄水系统；Water Vital® 优化水质，ECOFERT® 为作物提供营养，NAPEMA® 提供保护。五项方案共同形成完整的农艺路径。",
  },
};

const CORE_LANGS = new Set<Lang>(["fr", "en", "es", "pt", "ar", "zh"]);

/*
 * Positionnement volontairement irrégulier des grains dans la moitié traitée.
 * Ils commencent comme des cristaux secs, puis gonflent lors de l'arrivée de
 * l'eau. On garde cette couche dans le navigateur afin qu'elle reste exactement
 * alignée sur les racines, même pendant les fondus du film.
 */
function clamp(value: number, minimum: number, maximum: number) {
  return Math.max(minimum, Math.min(maximum, value));
}

export default function CropExperience() {
  const { language, c } = useLanguage();
  const copy = COPY[language];
  const filmCopy = FILM_COPY[CORE_LANGS.has(language) ? language as CoreLang : "en"];
  const [phase, setPhase] = useState(0);
  const [filmRun, setFilmRun] = useState(0);
  const [water, setWater] = useState(70);
  const [interval, setIntervalValue] = useState(8);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhase((current) => {
        const next = (current + 1) % 4;
        return next;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const metrics = useMemo(() => {
    const controlWater = clamp(Math.round(water * 0.62 - interval * 2.2), 12, 78);
    const treatedWater = clamp(Math.round(controlWater + 28 + water * 0.08), controlWater + 14, 96);
    const controlRoots = clamp(Math.round(28 + water * 0.23 - interval * 0.9), 24, 68);
    const treatedRoots = clamp(Math.round(controlRoots + 30 - interval * 0.2), controlRoots + 18, 97);
    const controlYield = clamp(Math.round(25 + water * 0.37 - interval * 1.6), 22, 78);
    const treatedYield = clamp(Math.round(controlYield + 31 + (interval - 3) * 0.7), controlYield + 18, 98);
    return {
      water: [controlWater, treatedWater],
      roots: [controlRoots, treatedRoots],
      yield: [controlYield, treatedYield],
    };
  }, [interval, water]);

  const visualStyle = {
    "--control-stress": String(clamp((100 - metrics.water[0]) / 100, 0.18, 0.72)),
    "--treated-reserve": String(clamp(metrics.water[1] / 145, 0.28, 0.66)),
  } as CSSProperties;

  const seekTo = (index: number) => {
    setPhase(index);
  };

  const restartFilm = () => {
    setPhase(0);
    setFilmRun((current) => current + 1);
  };

  const metricRows = [
    { label: copy.metricWater, values: metrics.water },
    { label: copy.metricRoots, values: metrics.roots },
    { label: copy.metricYield, values: metrics.yield },
  ];
  const synergyItems = [
    { ...c.products.items[0], id: "retention-eau", title: "EVERGREEN®" },
    { ...c.products.items[0], id: "retention-eau", title: "ECOSORB®" },
    c.products.items[3],
    c.products.items[1],
    c.products.items[2],
  ];

  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 id="experience-title">{copy.title}</h2>
          </div>
          <div className={styles.introText}>
            <p>{copy.intro}</p>
            <p className={styles.modelNote}>{copy.modelNote}</p>
          </div>
        </header>

        <div className={styles.shell}>
          <div className={styles.toolbar}>
            <div className={styles.phaseCopy} aria-live="polite">
              <span className={styles.phaseNumber}>{String(phase + 1).padStart(2, "0")}</span>
              <div>
                <strong>{filmCopy.film} · {copy.phases[phase].title}</strong>
                <span>{copy.phases[phase].description} · {filmCopy.duration}</span>
              </div>
            </div>
            <div className={styles.transport}>
              <button type="button" onClick={restartFilm} aria-label={filmCopy.restart}>↻</button>
            </div>
          </div>

          <div className={styles.visual} style={visualStyle}>
            <video
              key={filmRun}
              className={styles.film}
              poster="/images/comparatif-tomates-poster.jpg"
              aria-label={`${copy.control} / ${copy.treated} — ${filmCopy.film} — 4 secondes`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/comparatif-tomates.webm" type="video/webm; codecs=vp9" />
              <source src="/videos/comparatif-tomates-compatible.mp4" type="video/mp4" />
              Votre navigateur ne peut pas lire ce film.
            </video>
            <div className={styles.controlStress} aria-hidden="true" />
            <div className={styles.treatedReserve} aria-hidden="true" />
            <div className={styles.splitFrame} aria-hidden="true"><i /><i /></div>
            <div className={styles.plotLabelControl}>
              <span>A</span><div><strong>{copy.control}</strong><small>{copy.controlSub}</small></div>
            </div>
            <div className={styles.plotLabelTreated}>
              <span>B</span><div><strong>{copy.treated}</strong><small>{copy.treatedSub}</small></div>
            </div>
            <div className={styles.divider} aria-hidden="true"><span>VS</span></div>
          </div>

          <div className={styles.dashboard}>
            <div className={styles.scenario}>
              <p className={styles.panelTitle}>{copy.adjust}</p>
              <label className={styles.rangeField}>
                <span><b>{copy.waterAvailable}</b><output>{water} mm</output></span>
                <input type="range" min="30" max="120" step="5" value={water} onChange={(event) => setWater(Number(event.target.value))} />
                <small><span>{copy.low}</span><span>{copy.high}</span></small>
              </label>
              <label className={styles.rangeField}>
                <span><b>{copy.irrigationInterval}</b><output>{interval} j</output></span>
                <input type="range" min="3" max="14" step="1" value={interval} onChange={(event) => setIntervalValue(Number(event.target.value))} />
                <small><span>{copy.frequent}</span><span>{copy.spaced}</span></small>
              </label>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metricsHeading}>
                <p className={styles.panelTitle}>{copy.reading}</p>
                <span>{copy.indexNote}</span>
              </div>
              {metricRows.map((metric) => (
                <div className={styles.metricRow} key={metric.label}>
                  <span>{metric.label}</span>
                  <div className={styles.bars} aria-hidden="true">
                    <i style={{ width: `${metric.values[0]}%` }} />
                    <i style={{ width: `${metric.values[1]}%` }} />
                  </div>
                  <strong><span>{metric.values[0]}</span><b>→</b><span>{metric.values[1]}</span></strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.phaseRail} role="tablist" aria-label={copy.eyebrow}>
          {copy.phases.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={phase === index}
              className={phase === index ? styles.activeTab : ""}
              onClick={() => seekTo(index)}
              key={item.title}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>

        <div className={styles.synergy}>
          <header>
            <div>
              <p>{filmCopy.synergyEyebrow}</p>
              <h3>{filmCopy.synergyTitle}</h3>
            </div>
            <span>{filmCopy.synergyIntro}</span>
          </header>
          <div className={styles.synergyGrid}>
            {synergyItems.map((item, index) => (
              <a href={`#${item.id}`} key={`${item.id}-${item.title}`}>
                <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                <strong>{item.title}</strong>
                <b>{item.kicker}</b>
                <small>{item.text}</small>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.solutions}>
          <p>{copy.solutions}</p>
          <div>
            {synergyItems.map((item, index) => (
              <a href={`#${item.id}`} key={`${item.id}-${item.title}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{item.kicker}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
