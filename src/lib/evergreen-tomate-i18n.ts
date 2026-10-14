/**
 * Les mots du bloc « Sur tomate », sur la page EVERGREEN® & ECOSORB®
 * (technologies/retention-eau).
 *
 * Les légendes sont celles que Gabriel a dictées, photo par photo : la 1re,
 * tige normale du plant de tomate ; la 2e, tige avec notre hydrorétenteur ;
 * la 3e et la 4e, production avec l'hydrorétenteur (la 4e ajoute que les
 * tomates sont si nombreuses et si grosses qu'on voit la tige pliée en haut) ;
 * puis sa phrase de résultat, « jusqu'à 800 % ». Rien n'est ajouté, hormis le
 * titre « Sur tomate ».
 *
 * Le produit porte dans chaque langue le nom qu'il a déjà dans content.ts :
 * hydrorétenteur, water-retaining polymer, polímero retenedor de agua…
 * Traductions non relues par des personnes dont c'est la langue maternelle.
 */

export type TextesTomate = {
  title: string;
  /** Les quatre légendes, dans l'ordre des photos ; elles servent aussi de texte alternatif. */
  photos: [string, string, string, string];
  result: string;
};

export const TOMATE: Record<string, TextesTomate> = {
  fr: {
    title: "Sur tomate",
    photos: [
      "Tige normale du plant de tomate",
      "Tige avec notre hydrorétenteur",
      "Production avec notre hydrorétenteur",
      "Production avec l'hydrorétenteur. Les tomates sont en tel nombre et en telle grosseur qu'on peut voir la tige qui est pliée en haut.",
    ],
    result: "Le résultat prouvé avec nos produits peut aller jusqu'à 800 %.",
  },
  en: {
    title: "On tomato",
    photos: [
      "Normal stem of a tomato plant",
      "Stem with our water-retaining polymer",
      "Production with our water-retaining polymer",
      "Production with the water-retaining polymer. There are so many tomatoes, and they are so large, that the stem can be seen bent at the top.",
    ],
    result: "The result proven with our products can go up to 800%.",
  },
  es: {
    title: "En tomate",
    photos: [
      "Tallo normal de una planta de tomate",
      "Tallo con nuestro polímero retenedor de agua",
      "Producción con nuestro polímero retenedor de agua",
      "Producción con el polímero retenedor de agua. Los tomates son tan numerosos y tan grandes que se ve el tallo doblado en la parte superior.",
    ],
    result: "El resultado demostrado con nuestros productos puede llegar hasta el 800 %.",
  },
  pt: {
    title: "No tomate",
    photos: [
      "Caule normal de uma planta de tomate",
      "Caule com o nosso polímero retentor de água",
      "Produção com o nosso polímero retentor de água",
      "Produção com o polímero retentor de água. Os tomates são tão numerosos e tão grandes que se vê o caule dobrado na parte de cima.",
    ],
    result: "O resultado comprovado com os nossos produtos pode chegar a 800%.",
  },
  ar: {
    title: "على الطماطم",
    photos: [
      "ساق عادي لنبتة طماطم",
      "ساق مع بوليمرنا المحتفظ بالماء",
      "إنتاج مع بوليمرنا المحتفظ بالماء",
      "إنتاج مع البوليمر المحتفظ بالماء. ثمار الطماطم كثيرة وكبيرة إلى درجة أنّ الساق تبدو منحنية في الأعلى.",
    ],
    result: "يمكن أن تصل النتيجة المثبتة بمنتجاتنا إلى 800%.",
  },
  zh: {
    title: "在番茄上",
    photos: [
      "番茄植株的正常茎秆",
      "使用我们保水剂的茎秆",
      "使用我们保水剂的产出",
      "使用保水剂的产出。番茄数量之多、个头之大，以至于可以看到茎秆在顶部被压弯。",
    ],
    result: "使用我们的产品，已被证实的结果最高可达800%。",
  },
  id: {
    title: "Pada tomat",
    photos: [
      "Batang normal tanaman tomat",
      "Batang dengan polimer penahan air kami",
      "Produksi dengan polimer penahan air kami",
      "Produksi dengan polimer penahan air. Buah tomatnya begitu banyak dan begitu besar sehingga batangnya terlihat melengkung di bagian atas.",
    ],
    result: "Hasil yang terbukti dengan produk kami bisa mencapai 800%.",
  },
  de: {
    title: "Bei Tomaten",
    photos: [
      "Normaler Stängel einer Tomatenpflanze",
      "Stängel mit unserem wasserspeichernden Polymer",
      "Ertrag mit unserem wasserspeichernden Polymer",
      "Ertrag mit dem wasserspeichernden Polymer. Die Tomaten sind so zahlreich und so groß, dass man den Stängel oben gebogen sehen kann.",
    ],
    result: "Das mit unseren Produkten nachgewiesene Ergebnis kann bis zu 800 % betragen.",
  },
  it: {
    title: "Sul pomodoro",
    photos: [
      "Stelo normale di una pianta di pomodoro",
      "Stelo con il nostro idroritentore",
      "Produzione con il nostro idroritentore",
      "Produzione con l'idroritentore. I pomodori sono così numerosi e così grossi che si vede lo stelo piegato in alto.",
    ],
    result: "Il risultato dimostrato con i nostri prodotti può arrivare fino all'800%.",
  },
  el: {
    title: "Στην τομάτα",
    photos: [
      "Φυσιολογικό στέλεχος φυτού τομάτας",
      "Στέλεχος με τον υδροσυγκρατητή μας",
      "Παραγωγή με τον υδροσυγκρατητή μας",
      "Παραγωγή με τον υδροσυγκρατητή. Οι τομάτες είναι τόσο πολλές και τόσο μεγάλες που φαίνεται το στέλεχος λυγισμένο στο πάνω μέρος.",
    ],
    result: "Το αποδεδειγμένο αποτέλεσμα με τα προϊόντα μας μπορεί να φτάσει έως και το 800%.",
  },
  tr: {
    title: "Domateste",
    photos: [
      "Normal bir domates bitkisinin gövdesi",
      "Hidro-tutucumuzun kullanıldığı gövde",
      "Hidro-tutucumuzla elde edilen verim",
      "Hidro-tutucuyla elde edilen verim. Domatesler o kadar çok ve o kadar iri ki gövdenin üstte büküldüğü görülüyor.",
    ],
    result: "Ürünlerimizle kanıtlanan sonuç %800'e kadar çıkabilir.",
  },
  pl: {
    title: "Na pomidorze",
    photos: [
      "Normalna łodyga rośliny pomidora",
      "Łodyga z naszym hydrożelem retencyjnym",
      "Plon z naszym hydrożelem retencyjnym",
      "Plon z hydrożelem retencyjnym. Pomidorów jest tak dużo i są tak duże, że widać łodygę wygiętą na górze.",
    ],
    result: "Wynik udowodniony za pomocą naszych produktów może sięgać nawet 800%.",
  },
  hr: {
    title: "Na rajčici",
    photos: [
      "Normalna stabljika biljke rajčice",
      "Stabljika s našim hidroretenterom",
      "Proizvodnja s našim hidroretenterom",
      "Proizvodnja s hidroretenterom. Rajčica je toliko mnogo i toliko krupna da se vidi stabljika savijena pri vrhu.",
    ],
    result: "Rezultat dokazan našim proizvodima može doseći i do 800 %.",
  },
  ca: {
    title: "Al tomàquet",
    photos: [
      "Tija normal d'una planta de tomàquet",
      "Tija amb el nostre hidroretenidor",
      "Producció amb el nostre hidroretenidor",
      "Producció amb l'hidroretenidor. Els tomàquets són tan nombrosos i tan grossos que es veu la tija doblegada a la part de dalt.",
    ],
    result: "El resultat demostrat amb els nostres productes pot arribar fins al 800 %.",
  },
};

/** Le français d'abord : c'est la langue de repli. */
export function tomate(langue: string): TextesTomate {
  return TOMATE[langue] ?? TOMATE.fr;
}
