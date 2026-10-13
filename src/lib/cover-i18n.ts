import type { Lang } from "./content";

/**
 * The few strings the home cover needs that the rest of the site never had:
 * the film button, the text alternative of the drawing, the name of the row of
 * entry points, and the close button of the film dialog.
 *
 * Written for the cover only. A native reader should check each language
 * before the wording is relied on.
 */
export const COVER_TEXT: Record<
  Lang,
  { film: string; scene: string; doors: string; close: string }
> = {
  fr: {
    film: "Voir le film · 33 s",
    scene:
      "Coupe de sol : une goutte d'irrigation tombe, l'eau suit les racines et se stocke dans des billes de gel.",
    doors: "Nos domaines",
    close: "Fermer",
  },
  en: {
    film: "Watch the film · 33 s",
    scene:
      "Soil cross-section: an irrigation drop falls, water follows the roots and is stored in gel beads.",
    doors: "Our fields",
    close: "Close",
  },
  es: {
    film: "Ver el vídeo · 33 s",
    scene:
      "Corte de suelo: cae una gota de riego, el agua sigue las raíces y se almacena en bolitas de gel.",
    doors: "Nuestras áreas",
    close: "Cerrar",
  },
  pt: {
    film: "Ver o filme · 33 s",
    scene:
      "Corte do solo: cai uma gota de rega, a água segue as raízes e fica guardada em esferas de gel.",
    doors: "As nossas áreas",
    close: "Fechar",
  },
  ar: {
    film: "شاهد الفيلم · 33 ثانية",
    scene:
      "مقطع في التربة: تسقط قطرة ري، ويتبع الماء الجذور ويُخزَّن في حبيبات من الهلام.",
    doors: "مجالاتنا",
    close: "إغلاق",
  },
  zh: {
    film: "观看视频 · 33秒",
    scene: "土壤剖面：一滴灌溉水落下，水沿着根系流动，并储存在凝胶颗粒中。",
    doors: "我们的领域",
    close: "关闭",
  },
  id: {
    film: "Tonton film · 33 dtk",
    scene:
      "Penampang tanah: setetes air irigasi jatuh, air mengikuti akar dan tersimpan dalam butiran gel.",
    doors: "Bidang kami",
    close: "Tutup",
  },
  de: {
    film: "Film ansehen · 33 s",
    scene:
      "Bodenschnitt: Ein Bewässerungstropfen fällt, das Wasser folgt den Wurzeln und wird in Gelkügelchen gespeichert.",
    doors: "Unsere Bereiche",
    close: "Schließen",
  },
  it: {
    film: "Guarda il film · 33 s",
    scene:
      "Sezione del suolo: cade una goccia d'irrigazione, l'acqua segue le radici e si accumula in sferette di gel.",
    doors: "I nostri ambiti",
    close: "Chiudi",
  },
  el: {
    film: "Δείτε την ταινία · 33 δευτ.",
    scene:
      "Τομή εδάφους: μια σταγόνα άρδευσης πέφτει, το νερό ακολουθεί τις ρίζες και αποθηκεύεται σε σφαιρίδια γέλης.",
    doors: "Οι τομείς μας",
    close: "Κλείσιμο",
  },
  tr: {
    film: "Filmi izle · 33 sn",
    scene:
      "Toprak kesiti: bir sulama damlası düşer, su köklerin boyunca ilerler ve jel taneciklerinde depolanır.",
    doors: "Alanlarımız",
    close: "Kapat",
  },
  pl: {
    film: "Obejrzyj film · 33 s",
    scene:
      "Przekrój gleby: spada kropla nawadniania, woda płynie wzdłuż korzeni i magazynuje się w kulkach żelu.",
    doors: "Nasze obszary",
    close: "Zamknij",
  },
  hr: {
    film: "Pogledajte film · 33 s",
    scene:
      "Presjek tla: pada kap navodnjavanja, voda slijedi korijenje i pohranjuje se u kuglicama gela.",
    doors: "Naša područja",
    close: "Zatvori",
  },
  ca: {
    film: "Mira el vídeo · 33 s",
    scene:
      "Tall del sòl: cau una gota de reg, l'aigua segueix les arrels i s'emmagatzema en boletes de gel.",
    doors: "Els nostres àmbits",
    close: "Tanca",
  },
};
