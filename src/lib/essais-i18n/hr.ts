import type { Traduction } from "./types";

/** Les essais de terrain en croate. */
export const hr: Traduction = {
  habillage: {
    retour: "← Svi pokusi",
    tousLesEssais: "Pogledaj sve pokuse →",
    lireRapport: "Pročitaj cijeli izvještaj (PDF)",
    resultatsEyebrow: "Rezultati",
    resultatsTitre: "Što je pokus izmjerio",
    imagesEyebrow: "U slikama",
    imagesTitre: "Prije i poslije: izmjerena razlika",
    mecaniqueEyebrow: "Kako djeluje",
    mecaniqueTitre: "Voda ostaje ondje gdje je biljci treba",
    mecaniqueTexte:
      "Pomiješan s tlom uz korijenje, hidroretenter upija vodu pri svakom navodnjavanju i svakoj kiši, umjesto da ona ispari ili otekne u dubinu. Zatim je vraća biljci, dan za danom. Navodnjava se rjeđe, a biljka ne žeđa između dva navodnjavanja.",
    ficheEyebrow: "Podaci o pokusu",
    ficheTitre: "Gdje, kada, tko",
    culture: "Kultura",
    lieu: "Mjesto",
    periode: "Razdoblje",
    conduitPar: "Proveo",
    produits: "Proizvodi",
    methodeEyebrow: "Metoda",
    methodeTitre: "Kako je pokus proveden",
    observationsEyebrow: "Zapažanja",
    observationsTitre: "Što treba zapamtiti",
    autresEyebrow: "Drugi pokusi",
    autresTitre: "Isti proizvodi, druge kulture",
    hubEyebrow: "Poljski pokusi",
    hubTitre: "Manje vode, više uroda: izmjereni rezultati",
    hubChapeau:
      "Sveučilišta, istraživački centri i gospodarstva ispitali su hidroretenter EVERGREEN, sam ili s gnojivom ECOFERT, na sedam kultura u šest država. Svaka stranica donosi brojke iz izvještaja i vodi na cijeli dokument.",
    hubPrincipe:
      "Načelo je svugdje isto: hidroretenter zadržava vodu uz korijenje i vraća je biljci malo po malo. Ovisno o kulturi i klimi, pokusi mjere do 82 % manje vode i do 93 % više uroda.",
    hubTermines: "Završeni pokusi",
    hubEnCours: "Pokusi u tijeku sa sveučilištima",
    hubGuides: "Naši vodiči",
    hubCreditPhoto: "Fotografija zaglavlja:",
    guideProduit: "Pogledaj stranicu proizvoda",
    guidePreuvesEyebrow: "Dokazi s terena",
    guidePreuvesTitre: "Pokusi koji su to izmjerili",
    guideResultatsEyebrow: "Rezultati s terena",
    guideResultatsTitre: "Što su pokusi izmjerili",
    guideComparaisonEyebrow: "Usporedba",
    guideFaqEyebrow: "Česta pitanja",
    guideFaqTitre: "Što nas najčešće pitaju",
    guideOui: "Da",
    guideNon: "Ne",
    guideCritere: "Kriterij",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Datulje u Emiratima: 82 % manje vode za navodnjavanje",
      description:
        "Pokus EVERGREEN koji je proveo ICBA u Dubaiju na 27 datuljinih palmi u pjeskovitom tlu: 82 % uštede vode i 20 % više ploda.",
      culture: "Datuljina palma",
      lieu: "Istraživačka postaja ICBA, Dubai",
      pays: "Ujedinjeni Arapski Emirati",
      periode: "Sezona 2020. – 2021.",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (hidroretenter)",
      chapeau:
        "U Emiratima padne oko 50 mm kiše godišnje i gotovo cijela poljoprivreda ovisi o navodnjavanju. ICBA je ispitao EVERGREEN na otvorenom polju, u pjeskovitom i slanom tlu, na datuljinim palmama starima oko 8 godina.",
      resultats: [
        "vode za navodnjavanje kroz cijelu sezonu",
        "vode u posljednjih 7 mjeseci, bez stresa za stabla",
        "više datulja uz 300 g po stablu",
        "učestalost navodnjavanja tretiranih stabala",
      ],
      protocole: [
        "27 datuljinih palmi posađenih na razmak 8 × 8 m, na istraživačkoj postaji ICBA.",
        "EVERGREEN unesen u prvih 50 cm tla na početku sezone, u više doza po stablu (među njima 300 g, 500 g i 1000 g).",
        "Navodnjavanje vođeno sondama koje mjere vlagu tla u stvarnom vremenu.",
        "Usporedba s kontrolnim stablima bez EVERGREEN-a.",
      ],
      constats: [
        "Tretirana stabla tijekom sezone nisu pokazala nikakav znak suše ni oštećenja.",
        "Dostupnih hranjiva u tlu znatno je više uz EVERGREEN: voda i minerali ostaju u zoni korijena umjesto da otječu u dubinu.",
        "Biološka aktivnost tla (disanje i mikrobna biomasa) raste.",
        "ICBA potvrđuje sve rezultate dobivene u poljskim uvjetima.",
      ],
      graphiques: [
        {
          titre: "Voda za navodnjavanje u sezoni (indeks, kontrola = 100)",
          barres: ["Bez EVERGREEN-a", "S EVERGREEN-om"],
        },
        { titre: "Prinos datulja (indeks, kontrola = 100)", barres: ["Bez EVERGREEN-a", "300 g po stablu"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Lubenice u Meksiku: 60,5 % manje vode i 30 % više uroda",
      description:
        "Pokus EVERGREEN na 2600 biljaka lubenice u Hermosillu (Sonora, Meksiko), na 45 °C: 60,5 % uštede vode i urod veći za 30 %.",
      culture: "Lubenica (sorta Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "Meksiko",
      periode: "15. veljače – 2. kolovoza 2023.",
      conduit: "Poljski pokus Green Solutionsa",
      produits: "EVERGREEN (hidroretenter)",
      chapeau:
        "Sonora predvodi meksičku proizvodnju lubenica, ali ju je 2023. teško pogodila suša. Pokus je trebao izmjeriti koliko vode štedi EVERGREEN u vrlo sušnom području, gdje dani u prosjeku imaju 45 °C.",
      resultats: [
        "vode za navodnjavanje",
        "više uroda nego na parceli navodnjavanoj 100 %",
        "prosječnog udjela šećera u plodu",
        "EVERGREEN-a po biljci",
      ],
      protocole: [
        "2600 biljaka lubenice.",
        "Kontrolna parcela bez EVERGREEN-a, navodnjavana 100 %.",
        "Tretirana parcela s 5 g EVERGREEN-a po biljci (2 g više od uobičajeno preporučenih 3 g).",
      ],
      constats: [
        "Izrazito vruća i suha klima, na sušnom tlu.",
        "Doza ovisi o vrsti tla (glinasto, pjeskovito, kamenito, vapnenasto) i o načinu navodnjavanja (bunar, kap po kap, kiša).",
        "Druga moguća metoda: 15 do 20 g EVERGREEN-a po dužnom metru, ovisno o sorti.",
      ],
      graphiques: [
        { titre: "Voda za navodnjavanje (indeks, kontrola = 100)", barres: ["Bez EVERGREEN-a", "5 g po biljci"] },
        { titre: "Urod (indeks, kontrola = 100)", barres: ["Bez EVERGREEN-a", "5 g po biljci"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Pamuk u Turskoj: prinos gotovo udvostručen uz vodni stres",
      description:
        "Pokazni pokus EVERGREEN na pamuku u pokrajini Hatay (Turska) 2025.: prinos s 2,53 na 4,88 t/ha (+93 %) unatoč teškoj nestašici vode.",
      culture: "Pamuk",
      lieu: "Gospodarstvo Mistikoğlu Tarım, ravnica Amik, Hatay",
      pays: "Turska",
      periode: "Sezona 2025.",
      conduit: "Green Solutions sa zadrugom Teknik Tarım",
      produits: "EVERGREEN (hidroretenter), ubrizgan ispod zone korijena",
      chapeau:
        "Pokrajina Hatay pati od kronične nestašice vode, velikih vrućina i mreže za navodnjavanje oštećene u potresu 2023. U srpnju 2025. ravnica Amik doživjela je vodnu krizu bez presedana. Ondje je pokus proveden.",
      resultats: [
        "prinosa: 4,88 t/ha prema 2,53 t/ha",
        "produktivnosti vode, najmanje",
        "bruto prihoda (3300 $ prema 1710 $)",
        "neto dobiti, nakon troška proizvoda i primjene",
      ],
      protocole: [
        "EVERGREEN ubrizgan ispod zone korijena alatima Green Solutionsa, u grebene pripremljene za sjetvu.",
        "Uspoređeno više doza: 48, 55, 58 i 62 kg/ha.",
        "Usporedba s netretiranom kontrolnom zonom.",
        "Uobičajeno navodnjavanje u području: preplavljivanjem iz otvorenih kanala.",
      ],
      constats: [
        "Tretirani pamuk zadržao je bolji rast i više biomase unatoč manjku vode.",
        "Razlika se vidi već prvih tjedana, u razdoblju presudnom za konačni prinos pamuka.",
      ],
      graphiques: [
        { titre: "Prinos pamuka (t/ha)", barres: ["Kontrolna zona", "S EVERGREEN-om"] },
        { titre: "Bruto prihod (USD/ha)", barres: ["Kontrolna zona", "S EVERGREEN-om"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Kukuruz u Turskoj: 39 % manje vode i 17 % veći prinos",
      description:
        "Pokazni pokus EVERGREEN na kukuruzu u Konyi (TIGEM, Turska) 2025.: 528 mm navodnjavanja umjesto 864 mm i 12 060 kg/ha prema 10 300 kg/ha.",
      culture: "Kukuruz",
      lieu: "Državno gospodarstvo TIGEM, Konya",
      pays: "Turska",
      periode: "Svibanj – rujan 2025.",
      conduit: "Green Solutions i D.I.S., mjerenja odjela za navodnjavanje TIGEM-a",
      produits: "Hidroretenter EVERGREEN, primijenjen ispod sjetvenog reda",
      chapeau:
        "Cilj je bio jednostavan: proizvesti jednako ili više, uz manje vode. Hidroretenter je ubrizgan točno ispod sjetvenog reda, na točnu dubinu, strojevima koje je izradio D.I.S., a zatim je navodnjavanje tretiranih zona namjerno smanjeno.",
      resultats: [
        "vode: 528 mm umjesto 864 mm",
        "prinosa: 12 060 kg/ha prema 10 300 kg/ha",
        "produktivnost vode: 22,8 kg kukuruza po m³ prema 11,9",
        "doza s najboljim rezultatom",
      ],
      protocole: [
        "Jedna kontrolna zona i tri tretirane zone s 39, 51 i 74 kg/ha.",
        "Primjena 14. i 15. svibnja 2025., izravno ispod sjetvenog reda.",
        "Navodnjavanje tretiranih zona smanjeno za 50 %, zatim za 30 %, ovisno o fazama rasta.",
        "Žetva 16. rujna 2025., na usporedivim dijelovima.",
      ],
      constats: [
        "Izmjereni prinosi: kontrola 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "Preciznost je važna: preplitka, preduboka ili pomaknuta primjena u odnosu na sjetveni red smanjuje učinak.",
        "Za gospodarstvo 39 % manje vode znači uštedu od 13 629 turskih lira po hektaru godišnje.",
      ],
      graphiques: [
        { titre: "Voda za navodnjavanje kroz 4 mjeseca (mm)", barres: ["Kontrolna zona", "Tretirane zone"] },
        {
          titre: "Prinos kukuruza prema dozi (kg/ha)",
          barres: ["Kontrola", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Šećerna trska na Javi: 55 % više uroda uz EVERGREEN i ECOFERT",
      description:
        "Pokus koji je pratilo Sveučilište u Jemberu na šećernoj trsci na Javi (Indonezija): 34 % veća masa uz 2,5 g po biljci i 55 % uz 5 g, uz više šećera.",
      culture: "Šećerna trska (sorta B82.0333)",
      lieu: "Jember, Java",
      pays: "Indonezija",
      periode: "Veljača – srpanj 2024.",
      conduit: "Sveučilište u Jemberu i indonezijski institut za šećernu trsku",
      produits: "EVERGREEN (hidroretenter) i biostimulativno gnojivo ECO (ECOFERT)",
      chapeau:
        "Pokus je usporedio tri parcele na glinastom tlu: kontrolnu parcelu, parcelu s 2,5 g EVERGREEN-a po biljci i parcelu s 5 g; posljednje dvije dobile su i biostimulativno gnojivo ECO.",
      resultats: [
        "mase uz 5 g po biljci",
        "mase uz 2,5 g po biljci",
        "udio saharoze u berbi (5 g prema kontroli)",
        "visina stabljike u 8. mjesecu, prema 111 cm u kontroli",
      ],
      protocole: [
        "Tri parcele od četvrt hektara.",
        "EVERGREEN unesen uz korijenje kad trska ima 3 mjeseca.",
        "Gnojivo ECO poprskano pri sadnji, 3 mjeseca poslije, pa 8 mjeseci nakon sadnje.",
        "Doze po hektaru: 50 kg EVERGREEN-a i 500 ml gnojiva.",
      ],
      constats: [
        "Ukupna masa: 6950 t u kontroli, 9330 t uz 2,5 g po biljci, 10 800 t uz 5 g po biljci.",
        "Promjer stabljike u 8. mjesecu: 2,47 cm u kontroli, 2,78 cm uz 2,5 g i 2,88 cm uz 5 g.",
        "Udio saharoze: 14 u kontroli, 16 uz 2,5 g i 18 uz 5 g.",
      ],
      graphiques: [
        { titre: "Požnjevena masa (t)", barres: ["Kontrola", "2,5 g po biljci", "5 g po biljci"] },
        {
          titre: "Udio saharoze u berbi",
          barres: ["Kontrola", "2,5 g po biljci", "5 g po biljci"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Krumpir u Južnoj Africi: 31 % veći prinos, 52 % manje vode",
      description:
        "Pokus EVERGREEN i ECOFERT na krumpiru u Bloemfonteinu (Južna Afrika), 2025. – 2026.: prinos s 12 na 15,7 t/ha i 52 % uštede vode.",
      culture: "Krumpir (sorta Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Južna Afrika",
      periode: "Rujan 2025. – siječanj 2026.",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (hidroretenter) i ECOFERT (ekološko gnojivo)",
      chapeau:
        "Ovaj pilot-pokus mjerio je zajednički učinak EVERGREEN-a u tlu i ECOFERT-a u prskanju na prinos i kakvoću krumpira.",
      resultats: [
        "ukupnog prinosa",
        "umjesto 12 t/ha",
        "vode",
        "EVERGREEN-a u brazdi za sadnju",
      ],
      protocole: [
        "Redovi od 10 m, ponovljeni 5 puta.",
        "Ilovasto tlo (Avalon) s 15 do 18 % gline; 26 667 biljaka po hektaru.",
        "Ručna sadnja 22. rujna 2025.; berba od 25. do 31. siječnja 2026.",
        "EVERGREEN položen rukom u brazdu; ECOFERT poprskan u dozi 700 ml/ha.",
        "Uobičajeno navodnjavanje.",
      ],
      constats: [
        "Krupniji i ujednačeniji gomolji.",
        "Manji rizik u proizvodnji i veći prihod za gospodarstvo.",
      ],
      graphiques: [
        { titre: "Prinos (t/ha)", barres: ["Bez tretmana", "EVERGREEN + ECOFERT"] },
        {
          titre: "Voda za navodnjavanje (indeks, kontrola = 100)",
          barres: ["Bez tretmana", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soja u Kini: 11 % veći prinos uz superapsorbent",
      description:
        "Pokus u slučajnim blokovima s Institutom za tlo i gnojiva Shandonga (Kina): brže nicanje i prinos soje veći za 11,2 do 11,4 %.",
      culture: "Soja (sorta Ludou II)",
      lieu: "Taian, pokrajina Shandong",
      pays: "Kina",
      periode: "Lipanj – listopad 2017.",
      conduit: "Institut za tlo i gnojiva Shandonga, sa Summit Enterpriseom",
      produits: "Superapsorbirajući polimer EVERGREEN",
      chapeau:
        "Ljeti, u vrijeme sjetve soje, Shandong je vruć uz snažno isparavanje. Pokus je mjerio učinak superapsorbenta položenog u sjetveni red na nicanje, bujnost, prinos i prihod.",
      resultats: [
        "prinosa",
        "bržeg nicanja",
        "klijavosti",
        "soje po akru",
      ],
      protocole: [
        "Slučajni blokovi: parcele od 30 m², svaki tretman ponovljen 4 puta.",
        "Ista gnojidba na svim parcelama: kompleksno gnojivo i kompost u sjetvenom redu.",
        "Tri tretmana: kontrola bez superapsorbenta, 1,6 kg i 2 kg superapsorbenta po parceli od 30 m².",
      ],
      constats: [
        "Povećanje prinosa doseže statistički značajnu razinu.",
        "Dobitak prihoda od 62,9 do 66,1 juana po akru u odnosu na kontrolu.",
      ],
      graphiques: [
        {
          titre: "Prinos soje (indeks, kontrola = 100)",
          barres: ["Bez superapsorbenta", "Sa superapsorbentom"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Crveni javori u gradu — Sveučilište Floride",
      texte:
        "Laboratorij za arborikulturu Klein (Gainesville) ispituje EVERGREEN na 90 crvenih javora posađenih u travnju 2025.: 30 s gelom u sadnoj jami, 30 s gelom umiješanim u tlo oko stabla i 30 bez gela. Dvogodišnje istraživanje.",
    },
    {
      titre: "Pošumljavanje duglazijom — Državno sveučilište Oregona",
      texte:
        "Istraživačka zadruga VMRC ispituje EVERGREEN na dva pošumljavana lokaliteta s različitim manjkom vode, blizu Coquillea i Roseburga: po 48 sadnica s gelom i 48 bez gela na svakom. Sadnja u veljači 2025., dvogodišnje istraživanje.",
    },
  ],
};
