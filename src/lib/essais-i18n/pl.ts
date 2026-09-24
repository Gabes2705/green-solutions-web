import type { Traduction } from "./types";

/** Les essais de terrain en polonais. */
export const pl: Traduction = {
  habillage: {
    retour: "← Wszystkie próby",
    tousLesEssais: "Zobacz wszystkie próby →",
    lireRapport: "Przeczytaj pełny raport (PDF)",
    resultatsEyebrow: "Wyniki",
    resultatsTitre: "Co zmierzyła próba",
    imagesEyebrow: "W obrazach",
    imagesTitre: "Przed i po: zmierzona różnica",
    mecaniqueEyebrow: "Jak to działa",
    mecaniqueTitre: "Woda zostaje tam, gdzie roślina jej potrzebuje",
    mecaniqueTexte:
      "Wymieszany z glebą przy korzeniach hydrożel retencyjny nasiąka wodą przy każdym nawodnieniu i każdym deszczu, zamiast pozwolić jej wyparować lub przesiąknąć w głąb. Potem oddaje ją roślinie, dzień po dniu. Podlewa się rzadziej, a roślina nie cierpi z pragnienia między dwoma nawodnieniami.",
    videoLegende: "Nasiona kiełkują: korzenie schodzą w głąb po wodę w glebie.",
    videoAlt: "Przyspieszone nagranie kiełkujących nasion fasoli mung, korzenie widoczne w ziemi",
    videoMot: "Wideo",
    videoAccelere: "przyspieszone",
    ficheEyebrow: "Karta próby",
    ficheTitre: "Gdzie, kiedy, przez kogo",
    culture: "Uprawa",
    lieu: "Miejsce",
    periode: "Okres",
    conduitPar: "Przeprowadzona przez",
    produits: "Produkty",
    methodeEyebrow: "Metoda",
    methodeTitre: "Jak przeprowadzono próbę",
    observationsEyebrow: "Obserwacje",
    observationsTitre: "Co warto zapamiętać",
    autresEyebrow: "Inne próby",
    autresTitre: "Te same produkty, inne uprawy",
    hubEyebrow: "Próby polowe",
    hubTitre: "Mniej wody, większy plon: zmierzone wyniki",
    hubChapeau:
      "Uczelnie, ośrodki badawcze i gospodarstwa przetestowały hydrożel retencyjny EVERGREEN, sam lub z nawozem ECOFERT, na siedmiu uprawach w sześciu krajach. Każda strona podaje liczby z raportu i odsyła do pełnego dokumentu.",
    hubPrincipe:
      "Zasada jest wszędzie ta sama: hydrożel zatrzymuje wodę przy korzeniach i oddaje ją roślinie stopniowo. W zależności od uprawy i klimatu próby mierzą do 82 % mniej wody i do 93 % większy plon.",
    hubTermines: "Zakończone próby",
    hubEnCours: "Próby prowadzone z uczelniami",
    hubGuides: "Nasze przewodniki",
    hubCreditPhoto: "Zdjęcie nagłówka:",
    guideProduit: "Zobacz kartę produktu",
    guidePreuvesEyebrow: "Dowody z pola",
    guidePreuvesTitre: "Próby, które to zmierzyły",
    guideResultatsEyebrow: "Wyniki z pola",
    guideResultatsTitre: "Co zmierzyły próby",
    guideComparaisonEyebrow: "Porównanie",
    guideFaqEyebrow: "Częste pytania",
    guideFaqTitre: "O co pytają najczęściej",
    guideOui: "Tak",
    guideNon: "Nie",
    guideCritere: "Kryterium",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Palmy daktylowe w Emiratach: o 82 % mniej wody do nawadniania",
      description:
        "Próba EVERGREEN prowadzona przez ICBA w Dubaju na 27 palmach daktylowych w glebie piaszczystej: 82 % zaoszczędzonej wody i o 20 % więcej daktyli.",
      culture: "Palma daktylowa",
      lieu: "Stacja badawcza ICBA, Dubaj",
      pays: "Zjednoczone Emiraty Arabskie",
      periode: "Sezon 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (hydrożel retencyjny)",
      chapeau:
        "W Emiratach spada około 50 mm deszczu rocznie, a niemal całe rolnictwo zależy od nawadniania. ICBA przetestowało EVERGREEN w polu, w piaszczystej i zasolonej glebie, na palmach daktylowych w wieku około 8 lat.",
      resultats: [
        "wody do nawadniania w całym sezonie",
        "wody w ostatnich 7 miesiącach, bez stresu dla drzew",
        "więcej daktyli przy 300 g na drzewo",
        "częstotliwość nawadniania drzew traktowanych",
      ],
      protocole: [
        "27 palm daktylowych w rozstawie 8 × 8 m, na stacji badawczej ICBA.",
        "EVERGREEN wymieszany z wierzchnią warstwą 50 cm gleby na początku sezonu, w kilku dawkach na drzewo (w tym 300 g, 500 g i 1000 g).",
        "Nawadnianie sterowane sondami mierzącymi wilgotność gleby w czasie rzeczywistym.",
        "Porównanie z drzewami kontrolnymi bez EVERGREEN.",
      ],
      constats: [
        "Drzewa traktowane nie wykazały w sezonie żadnych oznak suszy ani uszkodzeń.",
        "Dostępnych składników pokarmowych w glebie jest wyraźnie więcej z EVERGREEN: woda i minerały zostają w strefie korzeni zamiast przesiąkać w głąb.",
        "Aktywność biologiczna gleby (oddychanie i biomasa mikroorganizmów) rośnie.",
        "ICBA potwierdza wszystkie wyniki uzyskane w warunkach polowych.",
      ],
      graphiques: [
        {
          titre: "Woda do nawadniania w sezonie (indeks, kontrola = 100)",
          barres: ["Bez EVERGREEN", "Z EVERGREEN"],
        },
        { titre: "Plon daktyli (indeks, kontrola = 100)", barres: ["Bez EVERGREEN", "300 g na drzewo"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Arbuzy w Meksyku: o 60,5 % mniej wody i o 30 % większy plon",
      description:
        "Próba EVERGREEN na 2600 roślinach arbuza w Hermosillo (Sonora, Meksyk), przy 45 °C: 60,5 % zaoszczędzonej wody i plon wyższy o 30 %.",
      culture: "Arbuz (odmiana Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "Meksyk",
      periode: "15 lutego – 2 sierpnia 2023",
      conduit: "Próba polowa Green Solutions",
      produits: "EVERGREEN (hydrożel retencyjny)",
      chapeau:
        "Sonora przoduje w produkcji arbuzów w Meksyku, ale w 2023 roku mocno ucierpiała od suszy. Próba miała zmierzyć, ile wody oszczędza EVERGREEN w bardzo suchym regionie, gdzie dni mają średnio 45 °C.",
      resultats: [
        "wody do nawadniania",
        "większy plon niż na poletku nawadnianym w 100 %",
        "średniej zawartości cukru w owocach",
        "EVERGREEN na roślinę",
      ],
      protocole: [
        "2600 roślin arbuza.",
        "Poletko kontrolne bez EVERGREEN, nawadniane w 100 %.",
        "Poletko traktowane 5 g EVERGREEN na roślinę (o 2 g więcej niż zwykle zalecane 3 g).",
      ],
      constats: [
        "Klimat skrajnie gorący i suchy, na jałowej glebie.",
        "Dawka zależy od rodzaju gleby (gliniasta, piaszczysta, kamienista, wapienna) i sposobu nawadniania (studnia, kroplówka, deszcz).",
        "Inna możliwa metoda: 15 do 20 g EVERGREEN na metr bieżący, zależnie od odmiany.",
      ],
      graphiques: [
        { titre: "Woda do nawadniania (indeks, kontrola = 100)", barres: ["Bez EVERGREEN", "5 g na roślinę"] },
        { titre: "Plon (indeks, kontrola = 100)", barres: ["Bez EVERGREEN", "5 g na roślinę"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Bawełna w Turcji: plon niemal podwojony przy stresie wodnym",
      description:
        "Pokaz EVERGREEN na bawełnie w regionie Hatay (Turcja) w 2025 roku: plon z 2,53 do 4,88 t/ha (+93 %) mimo poważnego braku wody.",
      culture: "Bawełna",
      lieu: "Gospodarstwo Mistikoğlu Tarım, równina Amik, Hatay",
      pays: "Turcja",
      periode: "Sezon 2025",
      conduit: "Green Solutions ze spółdzielnią Teknik Tarım",
      produits: "EVERGREEN (hydrożel retencyjny), wstrzykiwany pod strefę korzeni",
      chapeau:
        "Region Hatay cierpi na chroniczny brak wody, wielkie upały i sieć nawadniającą uszkodzoną przez trzęsienie ziemi w 2023 roku. W lipcu 2025 równina Amik przeżyła bezprecedensowy kryzys wodny. To tam przeprowadzono próbę.",
      resultats: [
        "plonu: 4,88 t/ha wobec 2,53 t/ha",
        "produktywności wody, co najmniej",
        "przychodu brutto (3300 $ wobec 1710 $)",
        "zysku netto, po odjęciu produktu i aplikacji",
      ],
      protocole: [
        "EVERGREEN wstrzyknięty pod strefę korzeni narzędziami Green Solutions, w redliny przygotowane do siewu.",
        "Porównano kilka dawek: 48, 55, 58 i 62 kg/ha.",
        "Porównanie ze strefą kontrolną bez zabiegu.",
        "Zwykłe nawadnianie regionu: zalewowe z otwartych kanałów.",
      ],
      constats: [
        "Bawełna traktowana zachowała lepszy wzrost i więcej biomasy mimo braku wody.",
        "Różnicę widać już od pierwszych tygodni, w okresie decydującym o końcowym plonie bawełny.",
      ],
      graphiques: [
        { titre: "Plon bawełny (t/ha)", barres: ["Strefa kontrolna", "Z EVERGREEN"] },
        { titre: "Przychód brutto (USD/ha)", barres: ["Strefa kontrolna", "Z EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Kukurydza w Turcji: o 39 % mniej wody i o 17 % większy plon",
      description:
        "Pokaz EVERGREEN na kukurydzy w Konyi (TIGEM, Turcja) w 2025 roku: 528 mm nawodnienia zamiast 864 mm i 12 060 kg/ha wobec 10 300 kg/ha.",
      culture: "Kukurydza",
      lieu: "Gospodarstwo państwowe TIGEM, Konya",
      pays: "Turcja",
      periode: "Maj – wrzesień 2025",
      conduit: "Green Solutions i D.I.S., pomiary działu nawadniania TIGEM",
      produits: "Hydrożel retencyjny EVERGREEN, aplikowany pod linią siewu",
      chapeau:
        "Cel był prosty: wyprodukować tyle samo albo więcej, przy mniejszej ilości wody. Hydrożel wstrzyknięto tuż pod linią siewu, na określoną głębokość, maszynami zaprojektowanymi przez D.I.S., a potem celowo ograniczono nawadnianie stref traktowanych.",
      resultats: [
        "wody: 528 mm zamiast 864 mm",
        "plonu: 12 060 kg/ha wobec 10 300 kg/ha",
        "produktywność wody: 22,8 kg kukurydzy na m³ wobec 11,9",
        "dawka dająca najlepszy wynik",
      ],
      protocole: [
        "Jedna strefa kontrolna i trzy strefy traktowane dawkami 39, 51 i 74 kg/ha.",
        "Aplikacja 14 i 15 maja 2025, bezpośrednio pod linią siewu.",
        "Nawadnianie stref traktowanych ograniczone o 50 %, a następnie o 30 %, zależnie od faz wzrostu.",
        "Zbiór 16 września 2025, na porównywalnych odcinkach.",
      ],
      constats: [
        "Zmierzone plony: kontrola 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "Precyzja się liczy: aplikacja zbyt płytka, zbyt głęboka albo obok linii siewu osłabia efekt.",
        "Dla gospodarstwa 39 % mniej wody to oszczędność 13 629 lir tureckich na hektar rocznie.",
      ],
      graphiques: [
        { titre: "Woda do nawadniania przez 4 miesiące (mm)", barres: ["Strefa kontrolna", "Strefy traktowane"] },
        {
          titre: "Plon kukurydzy według dawki (kg/ha)",
          barres: ["Kontrola", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Trzcina cukrowa na Jawie: o 55 % większy zbiór z EVERGREEN i ECOFERT",
      description:
        "Próba prowadzona przez Uniwersytet w Jember na trzcinie cukrowej na Jawie (Indonezja): o 34 % większy tonaż przy 2,5 g na roślinę i o 55 % przy 5 g, z wyższą zawartością cukru.",
      culture: "Trzcina cukrowa (odmiana B82.0333)",
      lieu: "Jember, Jawa",
      pays: "Indonezja",
      periode: "Luty – lipiec 2024",
      conduit: "Uniwersytet w Jember i indonezyjskie centrum badań nad trzciną cukrową",
      produits: "EVERGREEN (hydrożel retencyjny) i nawóz biostymulujący ECO (ECOFERT)",
      chapeau:
        "Próba porównywała trzy poletka na glebie gliniastej: poletko kontrolne, poletko z 2,5 g EVERGREEN na roślinę i poletko z 5 g; dwa ostatnie otrzymały także nawóz biostymulujący ECO.",
      resultats: [
        "tonażu przy 5 g na roślinę",
        "tonażu przy 2,5 g na roślinę",
        "zawartość sacharozy przy zbiorze (5 g wobec kontroli)",
        "wysokość źdźbła po 8 miesiącach, wobec 111 cm w kontroli",
      ],
      protocole: [
        "Trzy poletka po ćwierć hektara.",
        "EVERGREEN umieszczony przy korzeniach, gdy trzcina ma 3 miesiące.",
        "Nawóz ECO opryskiwany przy sadzeniu, 3 miesiące później i 8 miesięcy po sadzeniu.",
        "Dawki na hektar: 50 kg EVERGREEN i 500 ml nawozu.",
      ],
      constats: [
        "Tonaż całkowity: 6950 t dla kontroli, 9330 t przy 2,5 g na roślinę, 10 800 t przy 5 g na roślinę.",
        "Średnica źdźbła po 8 miesiącach: 2,47 cm w kontroli, 2,78 cm przy 2,5 g i 2,88 cm przy 5 g.",
        "Zawartość sacharozy: 14 w kontroli, 16 przy 2,5 g i 18 przy 5 g.",
      ],
      graphiques: [
        { titre: "Zebrany tonaż (t)", barres: ["Kontrola", "2,5 g na roślinę", "5 g na roślinę"] },
        {
          titre: "Zawartość sacharozy przy zbiorze",
          barres: ["Kontrola", "2,5 g na roślinę", "5 g na roślinę"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Ziemniaki w RPA: o 31 % większy plon i o 52 % mniej wody",
      description:
        "Próba EVERGREEN i ECOFERT na ziemniakach w Bloemfontein (RPA), 2025-2026: plon z 12 do 15,7 t/ha i 52 % zaoszczędzonej wody.",
      culture: "Ziemniak (odmiana Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Republika Południowej Afryki",
      periode: "Wrzesień 2025 – styczeń 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (hydrożel retencyjny) i ECOFERT (nawóz ekologiczny)",
      chapeau:
        "Ta próba pilotażowa mierzyła łączny efekt EVERGREEN w glebie i ECOFERT w oprysku na plon i jakość ziemniaków.",
      resultats: [
        "plonu całkowitego",
        "zamiast 12 t/ha",
        "wody",
        "EVERGREEN w redlinie sadzenia",
      ],
      protocole: [
        "Rzędy po 10 m, powtórzone 5 razy.",
        "Gleba pylasta (Avalon) z 15 do 18 % iłu; 26 667 roślin na hektar.",
        "Sadzenie ręczne 22 września 2025; zbiór od 25 do 31 stycznia 2026.",
        "EVERGREEN układany ręcznie w redlinie; ECOFERT opryskiwany w dawce 700 ml/ha.",
        "Nawadnianie konwencjonalne.",
      ],
      constats: [
        "Bulwy większe i bardziej wyrównane.",
        "Mniejsze ryzyko w produkcji i wyższy dochód rolnika.",
      ],
      graphiques: [
        { titre: "Plon (t/ha)", barres: ["Bez zabiegu", "EVERGREEN + ECOFERT"] },
        {
          titre: "Woda do nawadniania (indeks, kontrola = 100)",
          barres: ["Bez zabiegu", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soja w Chinach: o 11 % większy plon dzięki superabsorbentowi",
      description:
        "Próba w blokach losowanych z Instytutem Gleby i Nawozów w Shandongu (Chiny): szybsze wschody i plon soi wyższy o 11,2 do 11,4 %.",
      culture: "Soja (odmiana Ludou II)",
      lieu: "Taian, prowincja Shandong",
      pays: "Chiny",
      periode: "Czerwiec – październik 2017",
      conduit: "Instytut Gleby i Nawozów w Shandongu, z Summit Enterprise",
      produits: "Polimer superabsorbujący EVERGREEN",
      chapeau:
        "Latem, w porze siewu soi, w Shandongu jest gorąco i parowanie jest silne. Próba mierzyła wpływ superabsorbentu umieszczonego w linii siewu na wschody, wigor, plon i dochód.",
      resultats: [
        "plonu",
        "szybszych wschodów",
        "zdolności kiełkowania",
        "soi na akr",
      ],
      protocole: [
        "Bloki losowane: poletka po 30 m², każdy wariant powtórzony 4 razy.",
        "To samo nawożenie na wszystkich poletkach: nawóz wieloskładnikowy i kompost w linii siewu.",
        "Trzy warianty: kontrola bez superabsorbentu, 1,6 kg i 2 kg superabsorbentu na poletko 30 m².",
      ],
      constats: [
        "Wzrost plonu osiąga poziom istotny statystycznie.",
        "Zysk 62,9 do 66,1 juana na akr w porównaniu z kontrolą.",
      ],
      graphiques: [
        {
          titre: "Plon soi (indeks, kontrola = 100)",
          barres: ["Bez superabsorbentu", "Z superabsorbentem"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Klony czerwone w mieście — Uniwersytet Florydy",
      texte:
        "Laboratorium arborystyki Klein (Gainesville) testuje EVERGREEN na 90 klonach czerwonych posadzonych w kwietniu 2025: 30 z żelem w dole sadzeniowym, 30 z żelem wymieszanym z glebą wokół drzewa, 30 bez żelu. Badanie dwuletnie.",
    },
    {
      titre: "Zalesianie daglezjami — Uniwersytet Stanowy Oregonu",
      texte:
        "Spółdzielnia badawcza VMRC testuje EVERGREEN na dwóch powierzchniach zalesieniowych o różnym deficycie wody, w pobliżu Coquille i Roseburga: po 48 sadzonek z żelem i 48 bez żelu na każdej. Sadzenie w lutym 2025, badanie dwuletnie.",
    },
  ],
};
