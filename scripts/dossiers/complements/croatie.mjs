// Sedam stranica koje dopunjuju dosje za Hrvatsku (vidi build.mjs).
export default {
  paysTitre: "Hrvatsku",

  economie: {
    kicker: "GOSPODARSTVO I SIGURNOST HRANE",
    title: "Dobro tlo, a hrana se ipak uvozi",
    items: [
      { value: "≈ 3 %", label: "BDP-a dolazi iz poljoprivrede, šumarstva i ribarstva" },
      { value: "> 1 mlrd. €", label: "godišnji deficit u vanjskoj trgovini hranom" },
      { value: "≈ 100 tis.", label: "poljoprivrednih gospodarstava, većinom malih i obiteljskih" },
      { value: "≈ 50 000 t", label: "mandarina godišnje iz doline Neretve" },
    ],
    note:
      "Nacionalni projekt navodnjavanja i sredstva Zajedničke poljoprivredne politike EU financiraju nove sustave, ali većina površina i dalje ovisi o kiši. Svaka ljetna suša zato izravno pogađa prinos, a time i cijenu hrane.",
  },

  filieres: [
    {
      kicker: "PRVI SEKTOR",
      title: "Mandarine u dolini Neretve: voda i sol na istoj parceli",
      photo: 0,
      bullets: [
        "Delta Neretve najveće je hrvatsko područje uzgoja mandarina, na melioriranom tlu uz samo ušće rijeke.",
        "Ljeti se more probija uzvodno: zaslanjena voda za navodnjavanje i zaslanjeno tlo smanjuju prinos i kvalitetu ploda.",
        "Cijena ovisi o veličini i izgledu ploda: ujednačena berba izravno je prihod.",
        "Nasadi su trajni i skupi za obnovu; zaštita korijena od sušnog stresa čuva višegodišnje ulaganje.",
        "Zadržavanje vode u zoni korijena smanjuje broj zalijevanja i količinu vode koju treba crpiti.",
      ],
    },
    {
      kicker: "DRUGI SEKTOR",
      title: "Masline i vinogradi na kršu, gotovo bez navodnjavanja",
      photo: 4,
      bullets: [
        "Istra i Dalmacija uzgajaju masline i vinovu lozu na plitkom, kamenitom tlu koje brzo gubi vodu.",
        "Većina nasada nema navodnjavanje, a ljetna suša pada upravo u vrijeme cvatnje i nalijevanja ploda.",
        "Mlade sadnice najosjetljivije su u prve dvije godine, kada je gubitak sadnica najveći trošak.",
        "EVERGREEN® u sadnoj jami zadržava vodu oko korijena između rijetkih ljetnih kiša.",
        "Maslinovo ulje i vino sa zaštićenim oznakama postižu visoku cijenu: stabilan prinos isplaćuje ulaganje.",
      ],
    },
  ],

  rendement: ["mandarines", "olives", "raisin", "tomates", "pommes"],

  sources: [
    "Državni zavod za statistiku: biljna proizvodnja i poljoprivredna gospodarstva.",
    "Ministarstvo poljoprivrede: Nacionalni projekt navodnjavanja i gospodarenja zemljištem i vodama.",
    "Eurostat: struktura poljoprivrednih gospodarstava, vanjska trgovina hranom.",
    "FAO (FAOSTAT, AQUASTAT) i Svjetska banka (WDI).",
  ],
};
