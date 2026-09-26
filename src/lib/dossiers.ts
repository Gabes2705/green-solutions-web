/**
 * Les dossiers pays, en données.
 *
 * CE FICHIER EST GÉNÉRÉ — ne pas l'éditer à la main.
 *
 *   node scripts/dossiers/vers_web.mjs
 *
 * La source reste scripts/dossiers/pays/<slug>.mjs, qui sert aussi à fabriquer
 * le PDF : le texte de la page et celui du dossier téléchargeable ne peuvent
 * donc pas diverger. Chaque dossier est rédigé dans la langue de son marché,
 * portée ici par « locale » : la page se déclare dans cette langue plutôt que
 * de laisser croire à une traduction qui n'existe pas.
 */

export type Lecture = { head: string; body: string };
export type Serie = { name: string; labels: string[]; values: number[] };

export type Graphique = {
  kicker: string;
  title: string;
  type: string;
  series: Serie[];
  reading: Lecture | null;
};

export type Chiffres = {
  kicker: string;
  title: string;
  items: { value: string; label: string }[];
  note: string | null;
};

export type Puces = {
  kicker: string;
  title: string;
  caption: string | null;
  bullets: string[];
  photo: number | null;
};

export type Colonne = { head: string; lines: string[] };

export type Colonnes = {
  kicker: string;
  title: string;
  left: Colonne | null;
  right: Colonne | null;
  note: string | null;
};

export type Etapes = {
  kicker: string;
  title: string;
  items: { head: string; body: string }[];
  note: string | null;
};

export type Cartes = {
  kicker: string;
  title: string;
  items: { head: string; metric: string | null; lines: string[]; photo: number | null }[];
};

export type Dossier = {
  slug: string;
  locale: string;
  langue: string;
  /** Null quand le PDF a été retiré du site. */
  pdf: string | null;
  /** Nombre de photos installées. Zéro quand leur origine n'est pas établie. */
  photos: number;
  credits: { titre: string | null; auteur: string | null; licence: string | null; source: string }[] | null;
  cover: {
    eyebrow: string;
    title: string;
    officiel: string | null;
    lieu: string | null;
    subtitle: string | null;
  };
  chiffres: Chiffres | null;
  contrainte: Puces | null;
  stress: Graphique | null;
  usages: Graphique | null;
  economie: Chiffres | null;
  productions: Graphique | null;
  filieres: Puces[];
  solutions: Colonnes | null;
  economies: Graphique | null;
  regions: Cartes | null;
  deploiement: Etapes | null;
  risques: Colonnes | null;
  sources: string[] | null;
  closing: { title: string; body: string; contact: string | null };
};

export const DOSSIERS: Record<string, Dossier> = {
  "afrique-du-sud": {
    "slug": "afrique-du-sud",
    "locale": "en-ZA",
    "langue": "en",
    "pdf": "/documents/countries/afrique-du-sud.pdf",
    "photos": 4,
    "credits": [
      {
        "titre": "Hemel-en-aarde Valley -Babylon Tower.jpg",
        "auteur": "Amada44",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Field and Sky.jpg",
        "auteur": "Barry haynes",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Africain farmers.jpg",
        "auteur": "Haytam123258",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Farms near Clarens.jpg",
        "auteur": "Ossewa",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "MARKET DOSSIER",
      "title": "South Africa",
      "officiel": "REPUBLIC OF SOUTH AFRICA",
      "lieu": "Pretoria · 2026",
      "subtitle": "Citrus, deciduous fruit and wine grapes grown on half the world's average rainfall.\nWhat hydro-retention changes for an export-led sector."
    },
    "chiffres": {
      "kicker": "THE MARKET IN BRIEF",
      "title": "A small share of GDP, a large export earner",
      "items": [
        {
          "value": "≈ 2.5 %",
          "label": "of GDP from agriculture, forestry and fishing"
        },
        {
          "value": "≈ 1.6 M ha",
          "label": "under irrigation, out of some 12 M ha of arable land"
        },
        {
          "value": "≈ 465 mm",
          "label": "of rain a year, about half the world average"
        },
        {
          "value": "US$ 13 bn",
          "label": "of farm exports a year — a consistent net exporter"
        }
      ],
      "note": "Agriculture is a modest share of national output but employs roughly 5 % of the workforce, close to 900,000 people, and feeds an agro-processing chain worth several times the farm-gate value. Output comes from some 40,000 commercial farms alongside a much larger smallholder base."
    },
    "contrainte": {
      "kicker": "THE CONSTRAINT",
      "title": "A dry country, and rainfall it cannot count on",
      "caption": "Orchards and vineyards, Western Cape",
      "bullets": [
        "Mean annual rainfall is around 465 mm, roughly half the world average, and potential evaporation exceeds it across most of the interior.",
        "Irrigation takes about 60 % of the water withdrawn each year: when the resource tightens, the restriction reaches the field before it reaches the city.",
        "Rainfall is unevenly spread — under 200 mm a year in the Northern Cape, more than 1,000 mm on the KwaZulu-Natal coast — and it arrives in short, intense events.",
        "Drought is a recurring line item: the 2015/16 El Niño season cut the commercial maize crop to under 8 million tonnes; the 2015-2018 Western Cape drought forced irrigation quota cuts.",
        "Public plans — new dams, water reuse, coastal desalination — act on supply. Hydro-retention acts on demand, in the root zone, block by block."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "DROUGHT AND WATER STRESS",
      "title": "Pressure is rising, but risk remains local",
      "type": "bar",
      "series": [
        {
          "name": "Global index of drought number and duration",
          "labels": [
            "1980–1999",
            "Since 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Two indicators, not a shortcut",
        "body": "Worldwide, the number and duration of droughts have risen by 29% since 2000 compared with the two previous decades.\n\nWater stress measures something different: withdrawals as a share of renewable resources available after environmental needs. This global signal is therefore not a country forecast; it must be read alongside local rainfall, aquifers, seasons and uses."
      }
    },
    "usages": {
      "kicker": "WHERE THE WATER GOES",
      "title": "Irrigation takes six litres in every ten",
      "type": "doughnut",
      "series": [
        {
          "name": "Water withdrawals",
          "labels": [
            "Agriculture",
            "Municipal & domestic",
            "Industry, mining & other"
          ],
          "values": [
            60,
            27,
            13
          ]
        }
      ],
      "reading": {
        "head": "What this implies",
        "body": "A 10 % cut in irrigation demand releases close to half the volume used by industry, mining and every other non-municipal use combined.\n\nThat is why the effort belongs in the field rather than in the other uses."
      }
    },
    "economie": {
      "kicker": "ECONOMY AND FOOD SECURITY",
      "title": "A net food exporter with a two-speed farm economy",
      "items": [
        {
          "value": "No. 2",
          "label": "exporter of fresh citrus in the world"
        },
        {
          "value": "≈ 0.9 M",
          "label": "people employed in primary agriculture"
        },
        {
          "value": "≈ 40,000",
          "label": "commercial farming units in the latest census"
        },
        {
          "value": "≈ 2.3 M",
          "label": "households farming on a small scale, mostly for their own food"
        }
      ],
      "note": "Commercial agriculture earns foreign exchange from fruit, wine, nuts and sugar, while millions of households farm small plots with little access to water. Water-use licensing, electricity load-shedding and land reform all weigh on investment decisions."
    },
    "productions": {
      "kicker": "THE MAIN CROPS",
      "title": "Five crops carry the volume and the value",
      "type": "bar",
      "series": [
        {
          "name": "Annual production (million tonnes)",
          "labels": [
            "Sugar cane",
            "Maize*",
            "Citrus",
            "Potatoes",
            "Grapes"
          ],
          "values": [
            18,
            15,
            3.3,
            2.5,
            1.8
          ]
        }
      ],
      "reading": {
        "head": "Reading",
        "body": "Citrus and grapes are irrigated, export-bound and priced per carton: there, a litre saved converts into margin. The country ships about 2.6 million tonnes of citrus a year, second only to Spain.\n\n* Maize is mostly rain-fed and swings by several million tonnes between seasons."
      }
    },
    "filieres": [
      {
        "kicker": "FIRST SECTOR",
        "title": "Citrus: an export leader on a tight water allocation",
        "caption": null,
        "bullets": [
          "Citrus is grown in Limpopo, the Eastern Cape, Mpumalanga and the Western Cape, mostly under micro-irrigation.",
          "Orchards draw on allocated river and dam water, which is cut back in drought years.",
          "Load-shedding interrupts pumping schedules, so trees can miss irrigations during hot, dry spells.",
          "Export markets pay for size and appearance: steady soil moisture protects both at fruit set and sizing.",
          "NAPEMA® treats pests without residue, which matters under strict European maximum residue limits."
        ],
        "photo": 3
      },
      {
        "kicker": "SECOND SECTOR",
        "title": "Wine and table grapes in the Western Cape",
        "caption": null,
        "bullets": [
          "The Western Cape holds most of the vineyard area, from Stellenbosch to the Breede and Olifants river valleys.",
          "The 2015–2018 drought brought Cape Town close to 'Day Zero', and farms lost much of their water allocation.",
          "Table-grape growers in the Hex and Orange River valleys depend on long, hot seasons and dependable irrigation.",
          "Replanting a vineyard costs several years of income: young vines must be kept free of water stress to establish.",
          "EVERGREEN® placed in the planting furrow holds water around young roots between irrigations."
        ],
        "photo": 4
      }
    ],
    "solutions": {
      "kicker": "OUR RESPONSE",
      "title": "Two technologies, two different constraints",
      "left": {
        "head": "EVERGREEN® — holding the water",
        "lines": [
          "A potassium-based hydro-retainer placed in the root zone at planting or at replant.",
          "It captures rain and irrigation water and releases it back to the plant gradually, removing water stress through the critical stages.",
          "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
          "Breaks down by 20 to 25 % a year, with no build-up and no risk of overdosing."
        ]
      },
      "right": {
        "head": "ECOFERT® — feeding without depleting",
        "lines": [
          "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
          "Non-chelating: it does not strip the clay-humus complex and adds neither salinity nor nitrate load.",
          "Certified SOHISCERT and EU Bio, in use in 60 countries — the entry condition for European buyers' specifications.",
          "1 to 4 bottles of 140 ml per hectare, compatible with existing fertigation equipment."
        ]
      },
      "note": "The two products are sold separately but were designed to reinforce each other: the hydro-retainer extends how long water stays available, the fertiliser puts that water to work without degrading the soil."
    },
    "economies": {
      "kicker": "ORDERS OF MAGNITUDE",
      "title": "Expected water saving by irrigation method",
      "type": "bar",
      "series": [
        {
          "name": "Low end of range (%)",
          "labels": [
            "Drip",
            "Micro-sprinkler",
            "Centre pivot",
            "Flood / furrow"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "High end of range (%)",
          "labels": [
            "Drip",
            "Micro-sprinkler",
            "Centre pivot",
            "Flood / furrow"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Read with caution",
        "body": "These ranges are indicative and based on the savings documented for our hydro-retainers.\n\nThe actual result depends on the soil, the climate and the crop. They give an order of magnitude and are in no case a guaranteed, contractual or absolute value."
      }
    },
    "regions": {
      "kicker": "THREE PRIORITY AREAS",
      "title": "Where to run the first trials",
      "items": [
        {
          "head": "Western Cape",
          "metric": "≈ 90,000 ha of vineyard",
          "lines": [
            "Nearly all of the national vineyard, plus the deciduous fruit of the Breede and Olifants valleys.",
            "Winter rainfall of 250 to 400 mm inland, and the 2015-2018 quota cuts are a live memory.",
            "Export blocks already on drip or micro-sprinkler, with buyers asking for organic certification."
          ],
          "photo": 2
        },
        {
          "head": "Limpopo",
          "metric": "≈ 450 mm of rain a year",
          "lines": [
            "The leading citrus province, with macadamia and avocado on sandy, low-retention soils.",
            "High summer evaporation and a long dry winter: irrigation carries the whole season.",
            "Orchards planted for twenty years or more — planting is exactly when the retainer goes in."
          ],
          "photo": 0
        },
        {
          "head": "KwaZulu-Natal",
          "metric": "≈ 300,000 ha of cane",
          "lines": [
            "A sugar belt from the North Coast to Zululand, carrying most of a national crop of roughly 18 million tonnes.",
            "Largely rain-fed: the gain is in holding the rain that falls, not in trimming a dose.",
            "Around twenty thousand growers organised around mills — one route to a coordinated trial."
          ],
          "photo": 4
        }
      ]
    },
    "deploiement": {
      "kicker": "HOW WE WORK",
      "title": "A staged rollout, measured at every step",
      "items": [
        {
          "head": "Assessment",
          "body": "Soil, irrigation method and crop are reviewed. No commitment at this stage."
        },
        {
          "head": "Trial block",
          "body": "One comparative trial block, against a control block managed identically."
        },
        {
          "head": "Measurement",
          "body": "Water use and yield recorded over a full growing season."
        },
        {
          "head": "Extension",
          "body": "Gradual rollout to the remaining blocks, on the basis of what was measured."
        }
      ],
      "note": "The dosing rule is the same everywhere: 3 grams per litre of useful soil. What changes from one site to the next is the volume of soil the roots actually explore."
    },
    "risques": {
      "kicker": "WHAT TO ANTICIPATE",
      "title": "Identified risks and our answers",
      "left": {
        "head": "Risks",
        "lines": [
          "Rainfall variability: one good La Niña season is enough to mask the value of the product.",
          "Registration: fertilisers and soil amendments fall under Act 36 of 1947 and must be registered before commercial sale.",
          "The memory of cheap sodium-based polymers, which left a poor reputation in several regions.",
          "Farm cash flow after successive droughts, high input costs and a rand that raises the price of every imported input."
        ]
      },
      "right": {
        "head": "Our answers",
        "lines": [
          "Run the trial over a full season against a control block, so the gain is measurable even in a favourable year.",
          "Open the registration file in parallel with the first trials rather than after them.",
          "Document the formulation: potassium, never sodium, and compatible with food crops.",
          "Spread the commitment: a useful life of 3 to 4 years amortises the cost over several seasons."
        ]
      },
      "note": "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027."
    },
    "sources": [
      "Statistics South Africa: GDP by industry, Quarterly Labour Force Survey, Census of Commercial Agriculture.",
      "Department of Agriculture: Abstract of Agricultural Statistics.",
      "Citrus Growers' Association; SAWIS for vineyard area.",
      "Department of Water and Sanitation; FAO (FAOSTAT, AQUASTAT); World Bank (WDI).",
      "UNCCD, Drought in Numbers 2022: number and duration of droughts, +29% since 2000 versus 1980–1999.",
      "UN-Water / FAO AQUASTAT, SDG indicator 6.4.2: definition and thresholds of water stress."
    ],
    "closing": {
      "title": "Tell us about your block",
      "body": "Crop, irrigation method, soil type, the volume of water you use today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  },
  "algerie": {
    "slug": "algerie",
    "locale": "fr-DZ",
    "langue": "fr",
    "pdf": "/documents/countries/algerie.pdf",
    "photos": 4,
    "credits": [
      {
        "titre": "Agricultureadrar.jpg",
        "auteur": "Clapsus",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Agriculture Chlef 3.jpg",
        "auteur": "Knight of honor",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "El oued crop pivots.jpg",
        "auteur": "NASA",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Plaine du gri.jpg",
        "auteur": "Timici",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Algérie",
      "officiel": "RÉPUBLIQUE ALGÉRIENNE",
      "lieu": "Alger · 2026",
      "subtitle": "Maraîchage, dattes et céréales entre littoral saturé et périmètres sahariens.\nCe que l'hydro-rétention change quand l'eau ne se renouvelle plus."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Un secteur stratégique, très exposé à la ressource en eau",
      "items": [
        {
          "value": "≈ 12 %",
          "label": "du PIB provient de l'agriculture"
        },
        {
          "value": "≈ 8,5 M ha",
          "label": "de surface agricole utile"
        },
        {
          "value": "≈ 1,4 M ha",
          "label": "irrigués, soit environ 16 % de la SAU"
        },
        {
          "value": "≈ 10–20 %",
          "label": "de la population active, selon les sources"
        }
      ],
      "note": "L'agriculture algérienne couvre l'essentiel de la demande nationale en légumes, en pomme de terre et en dattes, mais le pays importe encore de l'ordre de 6 à 8 millions de tonnes de blé par an. La marge de progression passe par l'eau disponible à la parcelle."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Une ressource rare, inégalement répartie",
      "caption": "Périmètre irrigué sous pivot, Sud algérien",
      "bullets": [
        "La disponibilité en eau renouvelable est de l'ordre de 300 m³ par habitant et par an, très en dessous du seuil de pénurie communément retenu de 1 000 m³.",
        "L'agriculture mobilise environ les deux tiers de l'eau prélevée : toute tension sur la ressource se traduit d'abord par des restrictions d'irrigation.",
        "Le gradient pluviométrique est brutal : 600 à 1 000 mm par an en Kabylie, 300 à 400 mm sur les Hauts Plateaux, moins de 100 mm dès l'entrée du Sahara.",
        "Les nappes sahariennes exploitées à El Oued, Ouargla ou Adrar sont pour l'essentiel fossiles : le mètre cube pompé ne se reconstitue pas à l'échelle humaine.",
        "La réponse publique — barrages, transferts, unités de dessalement de grande capacité — porte sur l'offre. L'hydro-rétention agit sur la demande, à la parcelle."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'agriculture, premier poste de prélèvement",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            65,
            30,
            5
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Réduire de 10 % la consommation agricole libère plus de volume que l'arrêt complet de l'usage industriel.\n\nDans un pays qui produit une part croissante de son eau potable par dessalement, chaque mètre cube économisé à la parcelle a une valeur directe."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "Produire davantage pour importer moins",
      "items": [
        {
          "value": "8–10 Md$",
          "label": "d'importations alimentaires par an, céréales et lait en tête"
        },
        {
          "value": "Top 5",
          "label": "des importateurs mondiaux de blé"
        },
        {
          "value": "≈ 20 M",
          "label": "de palmiers dattiers, Deglet Nour en tête"
        },
        {
          "value": "Top 4",
          "label": "des producteurs mondiaux de dattes"
        }
      ],
      "note": "La politique agricole encourage la mise en valeur des terres du Sud — céréales sous pivot, pomme de terre, maïs — pour réduire la facture des importations. Chaque hectare gagné sur le désert se paie en eau souterraine : l'efficience au champ conditionne l'extension."
    },
    "productions": {
      "kicker": "LES FILIÈRES",
      "title": "Cinq productions structurent l'offre nationale",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (millions de tonnes)",
          "labels": [
            "Pomme de terre",
            "Céréales*",
            "Tomate",
            "Agrumes",
            "Dattes"
          ],
          "values": [
            4.7,
            3.5,
            2.2,
            1.4,
            1.2
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Pomme de terre, tomate et dattes sont intégralement irriguées : c'est là que l'économie d'eau se convertit en marge.\n\n* Les céréales sont majoritairement pluviales et le volume varie fortement d'une campagne à l'autre selon la pluviométrie."
      }
    },
    "filieres": [
      {
        "kicker": "PREMIÈRE FILIÈRE",
        "title": "Dattes : la Deglet Nour sous contrainte d'eau et de sel",
        "caption": null,
        "bullets": [
          "Les palmeraies des Ziban, de l'Oued Righ et du Souf fournissent l'essentiel de la production, dont la Deglet Nour exportée.",
          "L'irrigation par submersion reste courante, alors que les nappes profondes du Sahara ne se renouvellent pas.",
          "La remontée des sels et l'ensablement réduisent le calibre et la qualité des dattes dans les vieilles palmeraies.",
          "Les nouvelles plantations passent au goutte-à-goutte : c'est le moment où l'hydro-rétenteur se pose le plus simplement.",
          "Un rejet planté avec EVERGREEN® dans la fosse garde l'eau au niveau des racines entre deux irrigations."
        ],
        "photo": 3
      },
      {
        "kicker": "DEUXIÈME FILIÈRE",
        "title": "Pomme de terre sous pivot : le rendement se joue à l'arrosage",
        "caption": null,
        "bullets": [
          "Avec près de 5 millions de tonnes, la pomme de terre est la première production végétale du pays.",
          "El Oued est devenu en vingt ans un bassin majeur, sur sable, sous pivot, avec une eau pompée en profondeur.",
          "Sur sol sableux, l'eau traverse la zone racinaire en quelques heures : une partie de chaque arrosage est perdue.",
          "Le coût du pompage et de l'électricité pèse de plus en plus dans la marge à l'hectare.",
          "Des essais secteur contre secteur sous un même pivot mesurent l'eau économisée sur une saison complète."
        ],
        "photo": 5
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Deux technologies, deux contraintes différentes",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, incorporé dans la zone racinaire à la plantation ou à la reprise.",
          "Capte l'eau d'irrigation ou de pluie et la restitue progressivement, ce qui supprime le stress hydrique des phases critiques.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation dans le profil ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique et n'augmente ni la salinité ni la teneur en nitrates.",
          "Certifié SOHISCERT et EU Bio — condition d'accès aux cahiers des charges des acheteurs européens.",
          "1 à 4 flacons de 140 ml par hectare, compatible avec les équipements de fertirrigation en place."
        ]
      },
      "note": "Les deux produits se vendent séparément mais se renforcent : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans charger un sol déjà sensible à la salinité."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'irrigation",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Pivot",
            "Submersion"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Pivot",
            "Submersion"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Mitidja",
          "metric": "≈ 130 000 ha de plaine agricole",
          "lines": [
            "Premier bassin d'agrumes et de maraîchage du pays, adossé au marché d'Alger.",
            "Nappe alluviale surexploitée, avec des remontées salines constatées en bordure côtière.",
            "Exploitations moyennes déjà équipées en goutte-à-goutte, capables de décider vite sur un essai."
          ],
          "photo": 1
        },
        {
          "head": "Ziban — Biskra",
          "metric": "Dattes Deglet Nour et primeurs",
          "lines": [
            "Premier pôle dattier du pays et principal fournisseur de primeurs hors saison.",
            "Sols sableux à très faible capacité de rétention : l'eau percole avant d'être absorbée.",
            "Filière d'exportation déjà structurée vers l'Europe, sensible aux exigences de certification."
          ],
          "photo": 4
        },
        {
          "head": "El Oued — Souf",
          "metric": "Pomme de terre sous pivot",
          "lines": [
            "Bassin de pomme de terre développé sur sable, irrigué par pivots depuis des nappes profondes.",
            "Sol filtrant et évapotranspiration élevée : le poste irrigation pèse lourd dans le coût de revient.",
            "Ressource fossile non renouvelable : l'économie d'eau conditionne la durée d'exploitation."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement progressif, mesuré à chaque étape",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'irrigation et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur une parcelle, avec témoin conduit strictement à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de consommation et de rendement sur un cycle cultural complet."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre réellement exploré par les racines — un pivot sur sable du Souf et un verger d'agrumes de Mitidja n'appellent pas la même quantité."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Variabilité interannuelle de la pluviométrie : une campagne humide masque l'intérêt du produit sur les Hauts Plateaux.",
          "Foncier morcelé au Nord : beaucoup de petites exploitations, décision d'achat dispersée.",
          "Concurrence de produits bas de gamme à base de sodium, qui ont laissé de mauvais souvenirs.",
          "Contraintes d'importation et délais logistiques sur les intrants agricoles."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Conduire l'essai sur un cycle complet avec parcelle témoin, pour objectiver le gain même en année favorable.",
          "Passer par les coopératives, les groupements et les grandes fermes pilotes du Sud.",
          "Documenter la formulation : potassium et non sodium, compatible avec les cultures alimentaires.",
          "Étaler l'engagement : la durée d'effet de 3 à 4 ans amortit le coût sur plusieurs campagnes."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g), screening REACH / SVHC (SGS) et certificat SOHISCERT valable jusqu'au 4 septembre 2027 : disponibles sur demande."
    },
    "sources": [
      "Office national des statistiques (ONS) : comptes nationaux, production agricole.",
      "Ministère de l'Agriculture et du Développement rural : statistiques agricoles.",
      "Douanes algériennes : importations de céréales, de lait et de produits alimentaires.",
      "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'irrigation, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "arabie-saoudite": {
    "slug": "arabie-saoudite",
    "locale": "ar-SA",
    "langue": "ar",
    "pdf": "/documents/countries/arabie-saoudite.pdf",
    "photos": 5,
    "credits": [
      {
        "titre": "Palmeraie irriguée — concept Al-Ahsa",
        "auteur": "Green Solutions / OpenAI",
        "licence": "Illustration conceptuelle, septembre 2026",
        "source": "conceptual"
      },
      {
        "titre": "Pivot et blé en milieu aride — concept Al-Jawf",
        "auteur": "Green Solutions / OpenAI",
        "licence": "Illustration conceptuelle, septembre 2026",
        "source": "conceptual"
      },
      {
        "titre": "Serre maraîchère de précision — concept saoudien",
        "auteur": "Green Solutions / OpenAI",
        "licence": "Illustration conceptuelle, septembre 2026",
        "source": "conceptual"
      },
      {
        "titre": "Essai comparatif de maïs en zone aride — concept",
        "auteur": "Green Solutions / OpenAI",
        "licence": "Illustration conceptuelle, septembre 2026",
        "source": "conceptual"
      },
      {
        "titre": "Oliveraie irriguée — concept Al-Jawf",
        "auteur": "Green Solutions / OpenAI",
        "licence": "Illustration conceptuelle, septembre 2026",
        "source": "conceptual"
      }
    ],
    "cover": {
      "eyebrow": "ملف السوق الزراعي",
      "title": "المملكة العربية السعودية",
      "officiel": "المملكة العربية السعودية",
      "lieu": "الرياض · 2026",
      "subtitle": "التمور والخضروات المحمية والزراعة المروية تحت قيد مائي دائم.\nما الذي يغيّره احتباس الماء في التربة على مستوى الحقل."
    },
    "chiffres": {
      "kicker": "السوق في سطور",
      "title": "زراعة مروية بالكامل تقريباً على موارد غير متجددة",
      "items": [
        {
          "value": "≈ 2,5 %",
          "label": "من الناتج المحلي الإجمالي مصدره القطاع الزراعي"
        },
        {
          "value": "≈ 84 %",
          "label": "من المياه المسحوبة سنوياً تستهلكها الزراعة"
        },
        {
          "value": "> 90 %",
          "label": "من المساحة المزروعة تعتمد على الري، لا على المطر"
        },
        {
          "value": "< 100 مم",
          "label": "متوسط هطول الأمطار السنوي في معظم أنحاء المملكة"
        }
      ],
      "note": "لا تتجاوز المساحة المزروعة فعلياً نحو مليون هكتار، ولا يتعدى نصيب الزراعة 3 % من إجمالي العمالة، بينما تستورد المملكة ما يقارب 80 % من غذائها. لذلك تجعل رؤية 2030 والاستراتيجية الوطنية للأمن الغذائي من ترشيد المياه في الحقل شرطاً لأي توسّع زراعي، لا خياراً إضافياً."
    },
    "contrainte": {
      "kicker": "القيد الأساسي",
      "title": "ماء أحفوري لا يتجدد وأمطار دون 100 مم",
      "caption": "مزرعة تعمل بالري المحوري، وسط المملكة",
      "bullets": [
        "لا يوجد في المملكة أي نهر دائم. تعتمد الزراعة أساساً على طبقات جوفية أحفورية — الساق والوجيد وأم الرضمة — تكوّنت مياهها منذ آلاف السنين ولا تتجدد عملياً.",
        "تستهلك الزراعة نحو 84 % من المياه المسحوبة سنوياً: أي ضغط على الموارد يُترجم أولاً إلى قيود على الري وحصص على الآبار.",
        "تقل الأمطار عن 100 مم في السنة على معظم المساحة، ولا تبلغ 300 إلى 500 مم إلا في مرتفعات عسير، بينما يتجاوز التبخر المحتمل 3 000 مم في المناطق الداخلية.",
        "أوقفت الدولة زراعة القمح المروي تدريجياً حتى عام 2016، ثم منعت زراعة الأعلاف الخضراء عام 2018، حمايةً للمخزون الجوفي.",
        "تحلية المياه تغطي الشرب بأكثر من 5 ملايين متر مكعب يومياً، لكن كلفتها تستبعدها للري. هذه معالجة لجانب العرض؛ أما احتباس الماء في التربة فيعمل على الطلب، عند الجذر."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "الجفاف والإجهاد المائي",
      "title": "الضغط يتزايد، لكن المخاطر تبقى محلية",
      "type": "bar",
      "series": [
        {
          "name": "مؤشر عالمي لعدد فترات الجفاف ومدتها",
          "labels": [
            "1980–1999",
            "منذ 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "مؤشران مختلفان",
        "body": "عالمياً، ارتفع عدد فترات الجفاف ومدتها بنسبة 29٪ منذ عام 2000 مقارنة بالعقدين السابقين.\n\nأما الإجهاد المائي فيقيس نسبة السحب إلى الموارد المتجددة المتاحة بعد الاحتياجات البيئية. لذلك لا تمثل هذه الإشارة العالمية توقعاً خاصاً بالدولة، بل يجب قراءتها مع الأمطار والمياه الجوفية والمواسم والاستخدامات المحلية."
      }
    },
    "usages": {
      "kicker": "أين يذهب الماء",
      "title": "الري يستأثر بمعظم المياه المسحوبة",
      "type": "doughnut",
      "series": [
        {
          "name": "المياه المسحوبة",
          "labels": [
            "الزراعة",
            "مياه الشرب",
            "الصناعة"
          ],
          "values": [
            84,
            12,
            4
          ]
        }
      ],
      "reading": {
        "head": "ما يعنيه ذلك",
        "body": "خفض الاستهلاك الزراعي بنسبة 10 % يوفّر حجماً من الماء أكبر مما يوفّره إلغاء الاستخدام الصناعي بالكامل.\n\nلهذا ينصبّ الجهد على الحقل نفسه، لا على بقية الاستخدامات."
      }
    },
    "economie": {
      "kicker": "الاقتصاد والأمن الغذائي",
      "title": "قدرة شرائية عالية وقاعدة غذائية ضيقة",
      "items": [
        {
          "value": "≈ 33 مليون",
          "label": "نخلة في أنحاء المملكة، من أكبر ثروات النخيل في العالم"
        },
        {
          "value": "≈ 1,5 مليار",
          "label": "ريال قيمة صادرات التمور في عام 2023"
        },
        {
          "value": "> 100 %",
          "label": "نسبة الاكتفاء الذاتي من التمور والحليب"
        },
        {
          "value": "≈ 70 %",
          "label": "نسبة الاكتفاء الذاتي من الدواجن، والهدف 80 %"
        }
      ],
      "note": "تشجع رؤية 2030 والاستراتيجية الوطنية للأمن الغذائي الإنتاج المحلي عالي القيمة — التمور والخضروات المحمية والدواجن — وتربطانه بترشيد المياه. أما الفجوة الغذائية فتبقى في الحبوب والأعلاف، ومعظمها مستورد."
    },
    "productions": {
      "kicker": "الإنتاج الزراعي",
      "title": "أربعة منتجات تشكّل جوهر الإنتاج المحلي",
      "type": "bar",
      "series": [
        {
          "name": "الإنتاج السنوي (مليون طن)",
          "labels": [
            "التمور",
            "الخضروات",
            "القمح*",
            "فواكه أخرى"
          ],
          "values": [
            1.6,
            2.6,
            1,
            0.5
          ]
        }
      ],
      "reading": {
        "head": "قراءة",
        "body": "التمور والخضروات المحمية هما الأعلى قيمة للهكتار، وفيهما يتحول توفير الماء إلى هامش مباشر.\n\n* عاد القمح ضمن حصص محدودة بعد التخلي عن هدف الاكتفاء الذاتي؛ يتغير حجمه من موسم إلى آخر تبعاً للسياسة المائية."
      }
    },
    "filieres": [
      {
        "kicker": "القطاع الأول",
        "title": "التمور: ثروة وطنية تحت ضغط الماء والملوحة",
        "caption": null,
        "bullets": [
          "تتركز زراعة النخيل في القصيم والأحساء والمدينة المنورة والرياض، وتضم المملكة مئات الأصناف، أشهرها السكري والخلاص والعجوة.",
          "يحتاج النخيل إلى كميات كبيرة من ماء الري في الصيف، وما زال كثير من البساتين يُروى بالغمر أو بالأحواض.",
          "ملوحة مياه الآبار والتربة تُضعف الإنتاج وجودة الثمار، ولا سيما في الواحات الشرقية.",
          "يدفع المركز الوطني للنخيل والتمور نحو الجودة والتصدير: كل تحسّن في انتظام الثمار قيمة مباشرة.",
          "وضع الحابس للماء عند غرس الفسائل أو حول جذور النخيل القائم يطيل توافر الماء بين الريّات."
        ],
        "photo": 0
      },
      {
        "kicker": "القطاع الثاني",
        "title": "الخضروات المحمية: كل لتر هامش ربح",
        "caption": null,
        "bullets": [
          "توسعت البيوت المحمية لتقليص استيراد الطماطم والخيار والفلفل، بدعم حكومي للتقنيات الموفّرة للماء.",
          "حرارة الصيف تفرض التبريد وتزيد الطلب على الماء: الماء والطاقة أكبر بندين في كلفة الإنتاج.",
          "في التربة الرملية، يؤدي أي انقطاع في الري إلى إجهاد فوري وتساقط الأزهار.",
          "الخضروات من أكثر المحاصيل استجابة: من 30 إلى 50 % زيادة متوقعة في محصول الطماطم.",
          "‏NAPEMA® يعالج الآفات دون متبقيات، وهو شرط في سلاسل التجزئة الكبرى والتصدير."
        ],
        "photo": 2
      }
    ],
    "solutions": {
      "kicker": "استجابتنا",
      "title": "تقنيتان لقيدين مختلفين",
      "left": {
        "head": "EVERGREEN® — احتباس الماء",
        "lines": [
          "مادة حابسة للماء أساسها البوتاسيوم، تُوضع في منطقة الجذور عند الغرس أو عند تجديد الزراعة.",
          "تلتقط ماء الري أو المطر وتعيده إلى النبات تدريجياً، فتلغي الإجهاد المائي في المراحل الحرجة.",
          "قدرة امتصاص تبلغ نحو 300 ضعف وزنها، ومفعول مفيد يمتد من 3 إلى 4 سنوات داخل التربة.",
          "تتحلل بنسبة 20 إلى 25 % سنوياً، دون تراكم ودون خطر جرعة زائدة."
        ]
      },
      "right": {
        "head": "ECOFERT® — تغذية دون إنهاك التربة",
        "lines": [
          "سماد بجرعات دقيقة من الأحماض الأمينية والنيتروجين والفوسفور والبوتاسيوم، من موارد متجددة.",
          "غير مخلّب: لا يستنزف مركّب الطين والدبال، ولا يرفع الملوحة ولا نسبة النترات.",
          "حاصل على شهادة SOHISCERT وشهادة الزراعة العضوية الأوروبية — شرط للدخول في دفاتر شروط المشترين الأوروبيين.",
          "من قنينة إلى أربع قنينات سعة 140 مل للهكتار، متوافق مع أنظمة الري بالتسميد القائمة."
        ]
      },
      "note": "يُباع المنتجان منفصلين، غير أنهما صُمّما ليعزّز أحدهما الآخر: الحابس للماء يطيل مدة توافر الماء، والسماد يثمّن هذا الماء المتاح دون إنهاك التربة."
    },
    "economies": {
      "kicker": "أرقام استرشادية",
      "title": "توفير الماء المتوقع حسب أسلوب الري",
      "type": "bar",
      "series": [
        {
          "name": "الحد الأدنى (%)",
          "labels": [
            "الري بالتنقيط",
            "الري بالرش",
            "الري المحوري",
            "الري بالغمر"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "الحد الأعلى (%)",
          "labels": [
            "الري بالتنقيط",
            "الري بالرش",
            "الري المحوري",
            "الري بالغمر"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "تُقرأ بتحفّظ",
        "body": "هذه النطاقات تقديرية واسترشادية، مبنية على المكاسب الموثّقة لموادنا الحابسة للماء.\n\nتتوقف النتيجة الفعلية على التربة والمناخ والمحصول. وهي تعطي ترتيب حجم فحسب، ولا تشكّل بأي حال قيمة مضمونة أو تعاقدية أو مطلقة."
      }
    },
    "regions": {
      "kicker": "ثلاثة مواقع ذات أولوية",
      "title": "أين نبدأ التجارب الأولى",
      "items": [
        {
          "head": "الأحساء",
          "metric": "≈ 2,5 مليون نخلة",
          "lines": [
            "أكبر واحة نخيل في العالم، بتربة رملية شديدة النفاذية ومياه ري مالحة نسبياً.",
            "انخفاض متواصل في منسوب الآبار بعد أن كانت العيون تتدفق من تلقائها.",
            "زحف الرمال وارتفاع ملوحة التربة يستدعيان حلاً يعمل عند الجذر مباشرة."
          ],
          "photo": 0
        },
        {
          "head": "القصيم",
          "metric": "أكثر من 8 ملايين نخلة",
          "lines": [
            "قلب الري المحوري في المملكة، معتمد على طبقة الساق الجوفية غير المتجددة.",
            "مزارع تجارية كبيرة قادرة على اتخاذ قرار سريع بشأن تجربة ميدانية.",
            "بريدة سوق تمور مرجعية: نتيجة تجربة واحدة تنتشر بسرعة بين المزارعين."
          ],
          "photo": 1
        },
        {
          "head": "عسير",
          "metric": "300 إلى 500 مم أمطار",
          "lines": [
            "المنطقة الوحيدة التي تسمح بزراعة بعلية، على مدرجات جبلية ضيقة.",
            "الأمطار موسمية وغير منتظمة: الاحتفاظ بها في التربة هو المسألة الأساسية.",
            "محاصيل عالية القيمة — البن العربي والفواكه — تبرّر كلفة التدخل."
          ],
          "photo": 4
        }
      ]
    },
    "deploiement": {
      "kicker": "كيف نعمل",
      "title": "انتشار على مراحل، مع قياس عند كل خطوة",
      "items": [
        {
          "head": "التشخيص",
          "body": "تحليل التربة وأسلوب الري والمحصول. لا التزام في هذه المرحلة."
        },
        {
          "head": "قطعة تجريبية",
          "body": "تجربة مقارنة على قطعة واحدة، مع قطعة شاهد تُدار بالطريقة نفسها."
        },
        {
          "head": "القياس",
          "body": "رصد الاستهلاك المائي والإنتاج على مدى دورة زراعية كاملة."
        },
        {
          "head": "التوسّع",
          "body": "تعميم تدريجي على بقية القطع بناءً على النتائج المسجّلة."
        }
      ],
      "note": "قاعدة الجرعة واحدة في كل مكان: 3 غرامات لكل لتر من التربة المفيدة. ما يتغير من أرض إلى أخرى هو حجم التربة الذي تستكشفه الجذور فعلياً."
    },
    "risques": {
      "kicker": "ما يجب توقّعه",
      "title": "مخاطر محددة وردود عليها",
      "left": {
        "head": "المخاطر",
        "lines": [
          "تربة رملية شديدة النفاذية وحرارة صيفية تتجاوز 45 درجة: تباين كبير في النتائج من قطعة إلى أخرى.",
          "ملوحة مياه الري والتربة في المناطق الشرقية، وما ترتّب عليها من حذر تجاه أي مادة مضافة.",
          "منافسة منتجات رخيصة أساسها الصوديوم تركت انطباعاً سيئاً لدى المزارعين.",
          "دورات قرار طويلة لدى الشركات الزراعية الكبرى والجهات الحكومية."
        ]
      },
      "right": {
        "head": "الردود",
        "lines": [
          "إجراء التجربة على دورة كاملة مع قطعة شاهد، لتوثيق الفارق بالأرقام لا بالوعود.",
          "تركيبة أساسها البوتاسيوم لا الصوديوم: لا تضيف ملوحة، ومتوافقة مع المحاصيل الغذائية.",
          "تجهيز الملف التنظيمي مبكراً: التحاليل وشهادات المطابقة قبل بدء التفاوض.",
          "العمل عبر الجمعيات التعاونية الزراعية وبرامج دعم الريف، لا عبر المزارع الفردية."
        ]
      },
      "note": "تحليل الأكريلاميد (مختبر Polymex، ISO 9001، بتركيز أقل من 3,0 ميكروغرام/غرام) وفحص REACH / SVHC (SGS) وشهادة SOHISCERT السارية حتى 4 سبتمبر 2027: متاحة جميعها عند الطلب."
    },
    "sources": [
      "الهيئة العامة للإحصاء: الناتج المحلي حسب النشاط والإحصاءات الزراعية.",
      "وزارة البيئة والمياه والزراعة: الاستراتيجية الوطنية للأمن الغذائي ونسب الاكتفاء الذاتي.",
      "المركز الوطني للنخيل والتمور: أعداد النخيل وصادرات التمور.",
      "منظمة الأغذية والزراعة (FAOSTAT وAQUASTAT) والبنك الدولي (WDI).",
      "اتفاقية الأمم المتحدة لمكافحة التصحر، الجفاف بالأرقام 2022: ارتفاع عدد فترات الجفاف ومدتها 29٪ منذ 2000 مقارنة بـ1980–1999.",
      "الأمم المتحدة للمياه / أكواستات الفاو، مؤشر الهدف 6.4.2: تعريف الإجهاد المائي وحدوده."
    ],
    "closing": {
      "title": "أخبرنا عن أرضك",
      "body": "المحصول، وأسلوب الري، وطبيعة التربة، وحجم الماء المستهلك اليوم. نعود إليكم بالتركيبة المناسبة من التقنيات، والجرعات، والتجارب التي أُجريت في ظروف مشابهة.\n\nالتواصل الأول لا يُلزم بشيء.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  },
  "argentine": {
    "slug": "argentine",
    "locale": "es-AR",
    "langue": "es",
    "pdf": "/documents/countries/argentine.pdf",
    "photos": 1,
    "credits": [
      {
        "titre": "Soja en Siembra Directa sobre rastrojo de Sorgo Granífero (cropped).jpg",
        "auteur": "Maggilautaro",
        "licence": "CC BY 3.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MERCADO",
      "title": "Argentina",
      "officiel": "REPÚBLICA ARGENTINA",
      "lieu": "Buenos Aires · 2026",
      "subtitle": "Granos, vid y fruta de exportación bajo una restricción hídrica creciente.\nLo que la hidro-retención cambia para una agricultura exportadora."
    },
    "chiffres": {
      "kicker": "EL MERCADO EN SÍNTESIS",
      "title": "Un gigante agroexportador expuesto a la sequía",
      "items": [
        {
          "value": "≈ 60 %",
          "label": "del valor exportado en bienes viene del agro"
        },
        {
          "value": "≈ 40 M ha",
          "label": "sembradas con cultivos extensivos cada campaña"
        },
        {
          "value": "≈ 2,1 M ha",
          "label": "bajo riego, cerca del 5 % de la superficie sembrada"
        },
        {
          "value": "≈ 7 %",
          "label": "del PIB aportado en forma directa por el agro"
        }
      ],
      "note": "El sector agropecuario aporta en forma directa alrededor del 7 % del PIB, y cerca del 20 % si se suma la agroindustria. La producción se concentra en pocos cultivos y en pocas provincias: una sequía regional tiene efecto macroeconómico inmediato sobre el ingreso de divisas."
    },
    "contrainte": {
      "kicker": "LA LIMITACIÓN",
      "title": "La sequía dejó de ser una excepción de calendario",
      "caption": "Lote bajo riego por pivote, región pampeana",
      "bullets": [
        "La campaña 2022/23 fue la más seca en décadas: la soja cayó a unos 20 millones de toneladas, menos de la mitad de un año normal, y el maíz a cerca de 34 millones.",
        "Las pérdidas de exportación de esa sola campaña fueron estimadas en el orden de 20 000 millones de dólares, sobre un complejo agroindustrial que sostiene la balanza comercial.",
        "La agricultura moviliza del orden del 74 % del agua extraída del país: toda tensión sobre el recurso se traduce primero en restricciones al riego.",
        "El gradiente pluviométrico es extremo: de más de 1 500 mm anuales en Misiones a menos de 200 mm en Mendoza, San Juan y el norte patagónico.",
        "La respuesta pública trabaja sobre la oferta — embalses, revestimiento de canales, riego tecnificado. La hidro-retención actúa sobre la demanda, en el lote."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "SEQUÍA Y ESTRÉS HÍDRICO",
      "title": "La presión aumenta, pero el riesgo sigue siendo local",
      "type": "bar",
      "series": [
        {
          "name": "Índice mundial del número y duración de las sequías",
          "labels": [
            "1980–1999",
            "Desde 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Dos indicadores, no un atajo",
        "body": "A escala mundial, el número y la duración de las sequías han aumentado un 29 % desde 2000 frente a las dos décadas anteriores.\n\nEl estrés hídrico mide otra cosa: las extracciones respecto a los recursos renovables disponibles tras las necesidades ambientales. Esta señal mundial no es una previsión nacional; debe leerse con la lluvia, los acuíferos, las estaciones y los usos locales."
      }
    },
    "usages": {
      "kicker": "ADÓNDE VA EL AGUA",
      "title": "El riego concentra la mayor parte de la extracción",
      "type": "doughnut",
      "series": [
        {
          "name": "Extracciones",
          "labels": [
            "Agricultura",
            "Agua potable",
            "Industria"
          ],
          "values": [
            74,
            15,
            11
          ]
        }
      ],
      "reading": {
        "head": "Lo que esto implica",
        "body": "Reducir un 10 % el consumo agrícola libera un volumen equivalente a cerca de dos tercios de todo el uso industrial del país.\n\nPor eso el esfuerzo se concentra en el lote y no en los demás usos. En las provincias áridas de Cuyo la participación del riego supera el 80 %."
      }
    },
    "economie": {
      "kicker": "ECONOMÍA Y SEGURIDAD ALIMENTARIA",
      "title": "Un exportador de alimentos que depende de la lluvia",
      "items": [
        {
          "value": "N.º 1",
          "label": "exportador mundial de harina y aceite de soja"
        },
        {
          "value": "≈ 20 000 M",
          "label": "de dólares de pérdidas atribuidas a la sequía 2022/23"
        },
        {
          "value": "≈ 70 %",
          "label": "del vino argentino se elabora en Mendoza"
        },
        {
          "value": "≈ 400 M",
          "label": "de personas alimentadas con lo que produce el país, según el sector"
        }
      ],
      "note": "Los derechos de exportación de granos financian una parte del gasto público: cada mala campaña se traduce en menos divisas. Las economías regionales —vid, frutas, olivo, hortalizas— dependen en cambio del riego en zonas áridas, donde el agua de deshielo disminuye."
    },
    "productions": {
      "kicker": "LOS CULTIVOS",
      "title": "Cinco cultivos concentran el volumen producido",
      "type": "bar",
      "series": [
        {
          "name": "Producción anual (millones de toneladas)*",
          "labels": [
            "Maíz",
            "Soja",
            "Trigo",
            "Cebada",
            "Girasol"
          ],
          "values": [
            50,
            45,
            18,
            5,
            4
          ]
        }
      ],
      "reading": {
        "head": "Lectura",
        "body": "Maíz y soja concentran el volumen y son mayoritariamente de secano: el rendimiento sigue directamente a la lluvia de diciembre y enero.\n\n* Los volúmenes varían mucho entre campañas. En 2022/23 la soja cayó a cerca de 20 millones de toneladas."
      }
    },
    "filieres": [
      {
        "kicker": "PRIMER SECTOR",
        "title": "Vid en Cuyo: menos nieve, menos agua de riego",
        "caption": null,
        "bullets": [
          "Mendoza y San Juan concentran la mayor parte del viñedo del país, regado con agua de los ríos andinos.",
          "Las nevadas más escasas en la cordillera reducen los caudales de verano y los turnos de riego asignados.",
          "Muchos viñedos todavía riegan por surco o por manto, con pérdidas altas por infiltración y evaporación.",
          "La reconversión a goteo es la ocasión natural para incorporar un retenedor de agua en la línea de plantación.",
          "Un rendimiento estable y una madurez regular son lo que pagan las bodegas y los mercados de exportación."
        ],
        "photo": 6
      },
      {
        "kicker": "SEGUNDO SECTOR",
        "title": "Olivo y frutales: las economías regionales bajo riego",
        "caption": null,
        "bullets": [
          "El olivo se extiende por Catamarca, La Rioja, San Juan y Mendoza, sobre suelos pobres y con muy poca lluvia.",
          "El Alto Valle de Río Negro y Neuquén es la gran zona de peras y manzanas de exportación del país.",
          "Las plantaciones nuevas dependen del bombeo de agua subterránea, cuyo costo energético crece cada año.",
          "Heladas y golpes de calor se suman al estrés hídrico en floración y cuaje.",
          "NAPEMA® trata las plagas sin residuos, una exigencia de los compradores europeos de fruta fresca."
        ],
        "photo": 3
      }
    ],
    "solutions": {
      "kicker": "NUESTRA RESPUESTA",
      "title": "Dos tecnologías para dos limitaciones distintas",
      "left": {
        "head": "EVERGREEN® — retener el agua",
        "lines": [
          "Hidro-retenedor a base de potasio, colocado en la zona radicular en la siembra o en la plantación.",
          "Capta el agua de lluvia o de riego y la devuelve a la planta a medida que la necesita, suprimiendo el estrés hídrico en las etapas críticas.",
          "Capacidad de absorción del orden de 300 veces su peso; vida útil de 3 a 4 años en el suelo.",
          "Se degrada entre 20 y 25 % por año, sin acumulación ni riesgo de sobredosis."
        ]
      },
      "right": {
        "head": "ECOFERT® — nutrir sin agotar",
        "lines": [
          "Fertilizante en microdosis de aminoácidos, nitrógeno, fósforo y potasio, de origen renovable.",
          "No quelante: no empobrece el complejo arcillo-húmico ni aumenta la salinidad ni el contenido de nitratos.",
          "Certificado SOHISCERT y EU Bio — condición de acceso a los pliegos de los compradores europeos.",
          "De 1 a 4 frascos de 140 ml por hectárea, compatible con los equipos de fertirriego existentes."
        ]
      },
      "note": "Los dos productos se venden por separado pero fueron concebidos para reforzarse: el hidro-retenedor prolonga la disponibilidad del agua, el fertilizante valoriza esa agua disponible sin degradar el suelo."
    },
    "economies": {
      "kicker": "ÓRDENES DE MAGNITUD",
      "title": "Ahorro de agua esperado según el método de riego",
      "type": "bar",
      "series": [
        {
          "name": "Rango inferior (%)",
          "labels": [
            "Goteo",
            "Aspersión",
            "Pivote central",
            "Manto / surco"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "Rango superior (%)",
          "labels": [
            "Goteo",
            "Aspersión",
            "Pivote central",
            "Manto / surco"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Leer con prudencia",
        "body": "Estos rangos son indicativos y se apoyan en las mejoras documentadas de nuestros hidro-retenedores.\n\nEl resultado real depende del suelo, del clima y del cultivo. Las cifras dan un orden de magnitud: en ningún caso constituyen un valor garantizado, contractual ni absoluto."
      }
    },
    "regions": {
      "kicker": "TRES ZONAS PRIORITARIAS",
      "title": "Dónde conviene iniciar los primeros ensayos",
      "items": [
        {
          "head": "Cuyo — Mendoza y San Juan",
          "metric": "≈ 190 000 ha de viñedo",
          "lines": [
            "Menos de 200 mm de lluvia al año: toda la producción depende del deshielo andino y del riego por manto o por goteo.",
            "Vid, olivo y frutales de alto valor unitario, con destino de exportación y pliegos de calidad exigentes.",
            "Suelos arenosos y pedregosos de baja capacidad de retención, donde el efecto del hidro-retenedor es directamente medible."
          ],
          "photo": 1
        },
        {
          "head": "Pampa Húmeda",
          "metric": "≈ 30 M ha sembradas",
          "lines": [
            "Corazón de la producción de soja, maíz y trigo, repartido entre Buenos Aires, Córdoba y Santa Fe.",
            "Producción casi enteramente de secano: el riesgo no es la falta de riego sino el veranillo de enero.",
            "Estructuras grandes y profesionalizadas, capaces de conducir un ensayo comparativo con lote testigo."
          ],
          "photo": 5
        },
        {
          "head": "Alto Valle del Río Negro",
          "metric": "≈ 40 000 ha de pepita",
          "lines": [
            "Peras y manzanas para exportación en un valle que recibe cerca de 200 mm de lluvia al año.",
            "Riego gravitacional heredado, con márgenes de mejora importantes en la eficiencia de aplicación.",
            "Ventana de exportación a contraestación hacia Europa y Brasil: la calibración del fruto condiciona el precio."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "CÓMO TRABAJAMOS",
      "title": "Un despliegue por etapas, medido en cada paso",
      "items": [
        {
          "head": "Diagnóstico",
          "body": "Análisis del suelo, del método de riego y del cultivo. Sin ningún compromiso en esta etapa."
        },
        {
          "head": "Lote piloto",
          "body": "Un ensayo comparativo sobre un lote, con lote testigo conducido de manera idéntica."
        },
        {
          "head": "Medición",
          "body": "Registro de consumo de agua y de rendimiento a lo largo de un ciclo productivo completo."
        },
        {
          "head": "Extensión",
          "body": "Ampliación progresiva a los demás lotes sobre la base de los resultados observados."
        }
      ],
      "note": "La regla de dosificación es la misma en todas partes: 3 gramos por litro de tierra útil. Lo que cambia de un lote a otro es el volumen de suelo que las raíces exploran efectivamente."
    },
    "risques": {
      "kicker": "QUÉ HAY QUE PREVER",
      "title": "Riesgos identificados y nuestras respuestas",
      "left": {
        "head": "Riesgos",
        "lines": [
          "Variabilidad interanual de las lluvias: una campaña húmeda oculta el interés del producto.",
          "Volatilidad cambiaria y de los costos de importación, que complica la previsibilidad del precio en pesos.",
          "Antecedentes de polímeros de baja calidad a base de sodio, que dejaron mala reputación entre los productores.",
          "Decisión de compra dispersa entre productor, ingeniero agrónomo y distribuidor de insumos."
        ]
      },
      "right": {
        "head": "Respuestas",
        "lines": [
          "Conducir el ensayo sobre un ciclo completo con lote testigo, para objetivar la mejora incluso en un año favorable.",
          "Escalonar el compromiso: la vida útil de 3 a 4 años amortiza el costo sobre varias campañas.",
          "Documentar la formulación: potasio y nunca sodio, compatible con cultivos alimentarios.",
          "Trabajar a través de cooperativas, distribuidores de insumos y asesores técnicos, y entregar el protocolo de ensayo por anticipado."
        ]
      },
      "note": "Análisis de acrilamida (laboratorio Polymex, ISO 9001, contenido inferior a 3,0 µg/g) y screening REACH / SVHC (SGS) disponibles a pedido, junto con el certificado SOHISCERT vigente hasta el 4 de septiembre de 2027."
    },
    "sources": [
      "INDEC: comercio exterior y cuentas nacionales.",
      "Bolsa de Cereales de Buenos Aires y Bolsa de Comercio de Rosario: campañas y sequía 2022/23.",
      "Instituto Nacional de Vitivinicultura (INV): superficie y elaboración por provincia.",
      "FAO (FAOSTAT, AQUASTAT) y Banco Mundial (WDI).",
      "UNCCD, Drought in Numbers 2022: número y duración de las sequías, +29 % desde 2000 frente a 1980–1999.",
      "ONU-Agua / FAO AQUASTAT, indicador ODS 6.4.2: definición y umbrales del estrés hídrico."
    ],
    "closing": {
      "title": "Cuéntenos cómo es su lote",
      "body": "Cultivo, método de riego, tipo de suelo y volumen de agua que aplica hoy. Volvemos con la combinación de tecnologías correspondiente, las dosis, y los ensayos ya conducidos en situaciones comparables.\n\nUna primera conversación no compromete a nada.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suiza"
    }
  },
  "benin": {
    "slug": "benin",
    "locale": "fr-BJ",
    "langue": "fr",
    "pdf": null,
    "photos": 0,
    "credits": null,
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Bénin",
      "officiel": "RÉPUBLIQUE DU BÉNIN",
      "lieu": "Cotonou · 2026",
      "subtitle": "1er producteur de coton d'Afrique de l'Ouest, sur une seule saison des pluies au nord.\nCe que l'hydro-rétention change quand la surface cultivée grandit plus vite que le rendement."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Un pays agricole, tiré par le coton et le soja",
      "items": [
        {
          "value": "≈ 15 M",
          "label": "d'habitants, une population jeune en forte croissance"
        },
        {
          "value": "≈ 24 %",
          "label": "du PIB provient de l'agriculture (2,3 M d'actifs)"
        },
        {
          "value": "637 000 t",
          "label": "de coton produites en 2024-2025, 1er rang en Afrique de l'Ouest"
        },
        {
          "value": "652 000 t",
          "label": "de soja attendues sur la même campagne, filière en plein essor"
        }
      ],
      "note": "L'agriculture reste le premier employeur du pays. Les cultures vivrières (manioc, igname, maïs, riz) progressent, mais surtout parce que la surface cultivée augmente : les rendements, eux, reculent globalement. Les cultures de rente — coton, anacarde, ananas, palmier à huile — sont en plein développement et concentrent l'essentiel des recettes d'exportation."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Une seule saison des pluies au nord, des rendements qui reculent",
      "caption": null,
      "bullets": [
        "Le pays a un climat tropical gouverné par la mousson ouest-africaine : une seule saison des pluies au nord, qui démarre autour de la mi-mars, contre un régime plus arrosé et mieux réparti au sud.",
        "Au nord et au centre, la pluviométrie descend sous les 700 à 800 mm par an, et moins encore à l'extrême nord : chaque pause pluvieuse pèse directement sur la levée du coton et des céréales.",
        "Sur la période récente, la production vivrière augmente surtout parce que les surfaces cultivées s'étendent — le rendement à l'hectare, lui, est globalement en baisse.",
        "Le coton, culture de rente n°1 du pays, est conduit très majoritairement en pluvial dans le nord : un aléa sur la saison touche directement la principale source de devises agricoles.",
        "La zone industrielle de Glo-Djigbé (GDIZ) pousse à transformer davantage sur place plutôt qu'à exporter brut, ce qui suppose un approvisionnement régulier en matière première agricole."
      ],
      "photo": 1
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": null,
    "economie": {
      "kicker": "ÉCONOMIE ET TRANSFORMATION LOCALE",
      "title": "Le coton porte l'économie, la transformation prend le relais",
      "items": [
        {
          "value": "1er",
          "label": "producteur de coton d'Afrique de l'Ouest (637 000 t, 2024-2025)"
        },
        {
          "value": "≈ 63 %",
          "label": "du territoire est considéré cultivable"
        },
        {
          "value": "135 hab./km²",
          "label": "densité moyenne, en forte croissance démographique"
        },
        {
          "value": "GDIZ",
          "label": "la zone industrielle de Glo-Djigbé, moteur de la transformation locale"
        }
      ],
      "note": "Le Bénin cherche à transformer davantage de ses cultures de rente sur place plutôt qu'à les exporter brutes, en particulier via la zone industrielle de Glo-Djigbé. Cette stratégie suppose un approvisionnement agricole régulier, d'un bout à l'autre de l'année, ce qui remet la question du rendement et de l'eau au centre."
    },
    "productions": null,
    "filieres": [
      {
        "kicker": "FILIÈRE PHARE",
        "title": "Le coton du nord : une culture pluviale, une seule saison",
        "caption": null,
        "bullets": [
          "Le coton béninois est cultivé très majoritairement en pluvial, dans le nord et le centre du pays, sur la seule saison des pluies de la région.",
          "Un démarrage tardif ou une pause de pluie en début de cycle compromet directement la levée, sans irrigation de secours sur la plupart des parcelles.",
          "La filière est structurée autour de sociétés cotonnières et de coopératives, un circuit qui facilite le déploiement d'un essai groupé.",
          "Anacarde et ananas, cultures de rente en forte croissance, partagent la même contrainte pluviale sur des sols souvent moins profonds.",
          "Sur ces cultures de diversification, EVERGREEN® se teste en une saison ; le calendrier du coton lui-même dépend des campagnes de la filière."
        ],
        "photo": 2
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Retenir l'eau, nourrir sans épuiser",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire au semis, à la plantation ou à la reprise.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui amortit une pause de pluie en début de saison.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà sollicité par l'extension des surfaces cultivées.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières coton et anacarde tournées vers l'export.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans dégrader un sol que l'extension des surfaces met déjà sous pression."
    },
    "economies": null,
    "regions": null,
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de levée, de consommation d'eau et de rendement sur une campagne complète."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Filière coton très structurée autour de circuits d'intrants existants, avec des habitudes déjà installées.",
          "Trésorerie limitée des petits producteurs vivriers, qui rend un achat d'intrant difficile à engager seul.",
          "Variabilité de la saison unique du nord : une bonne année masque l'intérêt du produit, une mauvaise année fragilise la trésorerie du producteur.",
          "Produit peu connu localement, homologation des intrants à instruire avant toute vente commerciale."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Commencer par les cultures de rente à plus forte valeur (anacarde, ananas) où le gain se chiffre plus vite qu'en vivrier pur.",
          "Passer par les coopératives et sociétés cotonnières déjà organisées plutôt que par le producteur isolé.",
          "Mesurer sur une campagne complète avec parcelle témoin, même en bonne année.",
          "Ouvrir le dossier d'homologation en parallèle des premiers essais, avec un partenaire local."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "cameroun": {
    "slug": "cameroun",
    "locale": "fr-CM",
    "langue": "fr",
    "pdf": "/documents/countries/cameroun.pdf",
    "photos": 9,
    "credits": [
      {
        "titre": "Bakweri cocoyam farmer from Cameroon.jpg",
        "auteur": "Amcaja",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Agriculture rurale.jpg",
        "auteur": "Perez Mekem",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivatrice camerounaise.jpg",
        "auteur": "Hnkamwa",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivatrice camerounaise5.jpg",
        "auteur": "Hnkamwa",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Plantation-cacao-cameroun.jpg",
        "auteur": "Barada-nikto",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "ChrisTonaldo on his harvested coacoa.jpg",
        "auteur": "CHRISTONALDO",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Plantation de thé - Ouest du Cameroun.JPG",
        "auteur": "PRA",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Rows in a tea plantation.jpg",
        "auteur": "Adesolive",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Tea farm at dawn.jpg",
        "auteur": "Adesolive",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Cameroun",
      "officiel": "RÉPUBLIQUE DU CAMEROUN",
      "lieu": "Yaoundé · 2026",
      "subtitle": "Cacao, coton, banane et vivrier, du Sud humide au Grand Nord sahélien.\nCe que l'hydro-rétention change quand la saison sèche s'allonge."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Une agriculture qui fait vivre plus de quatre actifs sur dix",
      "items": [
        {
          "value": "≈ 17 %",
          "label": "du PIB provient de l'agriculture"
        },
        {
          "value": "≈ 43 %",
          "label": "de la population active travaille dans le secteur"
        },
        {
          "value": "≈ 309 000 t",
          "label": "de cacao récoltées en 2024/25, un record"
        },
        {
          "value": "≈ 350 000 t",
          "label": "de coton-graine attendues dans le Grand Nord"
        }
      ],
      "note": "Le pays compte environ 30 millions d'habitants et une agriculture très diversifiée, portée par des centaines de milliers de petites exploitations. Les filières d'exportation — cacao, coton, banane, café, hévéa — côtoient un vivrier qui nourrit les villes et une partie des pays voisins de la zone CEMAC."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Deux climats, une même fragilité face à l'eau",
      "caption": null,
      "bullets": [
        "Au Sud, 1 500 à 3 000 mm de pluie par an, mais des saisons sèches qui s'allongent et se décalent : les jeunes cacaoyers et les bananiers en souffrent les premiers.",
        "Au Nord, la pluie tombe en quatre à cinq mois : chaque sécheresse en début de cycle coûte des semaines de croissance au coton et aux céréales.",
        "Le lac Tchad a perdu l'essentiel de sa superficie depuis les années 1960, et la dégradation des terres progresse dans les régions septentrionales.",
        "Inondations et ravageurs ont fait reculer les surfaces de coton, dont le rendement est passé d'environ 1 600 à 1 300 kg/ha.",
        "Presque toute la production est pluviale : l'enjeu n'est pas de pomper davantage, mais de garder l'eau de pluie dans la zone racinaire au moment où la plante en a besoin."
      ],
      "photo": 6
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'agriculture, premier poste de prélèvement",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            74,
            18,
            8
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Les prélèvements restent faibles au regard de la ressource du Sud : le pays n'est pas en pénurie d'eau à l'échelle nationale.\n\nLa contrainte est locale et saisonnière — le Grand Nord, la saison sèche, les jeunes plantations. C'est là que l'hydro-rétention se mesure."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "Un exportateur agricole qui importe encore son riz",
      "items": [
        {
          "value": "Top 5",
          "label": "des producteurs mondiaux de cacao"
        },
        {
          "value": "≈ 30 M",
          "label": "d'habitants, dont plus de la moitié en ville"
        },
        {
          "value": "≈ 800 000 t",
          "label": "de riz importées chaque année"
        },
        {
          "value": "≈ 12 M ha",
          "label": "de terres dégradées, dont les deux tiers au Nord"
        }
      ],
      "note": "Le Cameroun approvisionne ses voisins de la CEMAC en produits vivriers, mais importe l'essentiel de son riz, de son blé et de son poisson. La politique d'import-substitution vise à produire localement une part croissante de ces volumes."
    },
    "productions": {
      "kicker": "LES FILIÈRES",
      "title": "Cinq productions structurent l'offre agricole",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (millions de tonnes)",
          "labels": [
            "Manioc",
            "Banane plantain",
            "Maïs",
            "Coton-graine",
            "Cacao"
          ],
          "values": [
            5.5,
            4.5,
            2.3,
            0.35,
            0.31
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Manioc, plantain et maïs nourrissent le pays ; cacao et coton rapportent les devises.\n\nLes filières d'exportation pèsent peu en tonnes mais beaucoup en valeur, et elles sont encadrées : c'est là qu'un essai mesuré se transforme le plus vite en décision."
      }
    },
    "filieres": [
      {
        "kicker": "FILIÈRE PHARE",
        "title": "Cacao : un record à transformer en rendement durable",
        "caption": null,
        "bullets": [
          "La campagne 2024/25 a dépassé pour la première fois 300 000 tonnes, portée par des prix mondiaux historiquement élevés.",
          "La production repose sur des centaines de milliers de petites exploitations du Centre, du Sud et du Sud-Ouest, aux vergers souvent âgés.",
          "Le rendement moyen reste faible, et la variabilité des pluies pèse sur chaque récolte comme sur la reprise des jeunes plants.",
          "Les acheteurs européens exigent traçabilité, zéro déforestation et limites strictes de résidus : NAPEMA® protège sans résidu.",
          "À la replantation, EVERGREEN® dans le trou de plantation sécurise la reprise pendant la première saison sèche."
        ],
        "photo": 5
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Retenir l'eau, nourrir sans épuiser",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la replantation.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui protège les jeunes plants pendant la saison sèche.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique de sols cultivés depuis des générations.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières cacao et café exportatrices.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans dégrader le sol."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'arrosage",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Micro-aspersion",
            "Aspersion",
            "Arrosage manuel"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Micro-aspersion",
            "Aspersion",
            "Arrosage manuel"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Centre et Sud — cacao",
          "metric": "≈ 309 000 t en 2024/25",
          "lines": [
            "Petites cacaoyères familiales, souvent âgées, où la replantation est la priorité des programmes publics.",
            "Mortalité des jeunes plants en saison sèche : l'hydro-rétenteur se juge au taux de reprise.",
            "Coopératives et exportateurs déjà organisés pour suivre des parcelles."
          ],
          "photo": 4
        },
        {
          "head": "Grand Nord — coton",
          "metric": "Plus de 200 000 familles",
          "lines": [
            "Producteurs encadrés par la SODECOTON, avec des intrants distribués en début de campagne.",
            "Pluie concentrée sur quelques mois et poches de sécheresse au semis.",
            "Un réseau d'encadrement qui permet un essai coordonné sur de nombreux sites."
          ],
          "photo": 1
        },
        {
          "head": "Moungo et Littoral — banane",
          "metric": "Banane d'export et vivrier",
          "lines": [
            "Plantations de banane dessert autour de Njombé-Penja, suivies bloc par bloc.",
            "Sols volcaniques fertiles, mais saison sèche marquée de décembre à mars.",
            "Volumes contractualisables et protocole d'essai facile à tenir sur un bloc homogène."
          ],
          "photo": 3
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de reprise, de consommation et de rendement à cheval sur la saison sèche."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Logistique intérieure et coût du transport entre Douala et le Grand Nord.",
          "Insécurité dans une partie de l'Extrême-Nord et des régions du Nord-Ouest et du Sud-Ouest.",
          "Trésorerie limitée des petits producteurs, qui achètent souvent leurs intrants à crédit.",
          "Produit peu connu, parfois confondu avec les polymères à base de sodium."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Passer par les structures d'encadrement et les coopératives pour grouper achats et suivi.",
          "Choisir des sites d'essai accessibles et sûrs, puis étendre selon les résultats.",
          "Raisonner le coût sur 3 à 4 ans d'effet utile et sur la reprise des jeunes plants.",
          "Documenter la formulation potassique, sans sodium, compatible avec les cultures alimentaires."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "chili": {
    "slug": "chili",
    "locale": "es-CL",
    "langue": "es",
    "pdf": "/documents/countries/chili.pdf",
    "photos": 3,
    "credits": [
      {
        "titre": "Sauzal vineyard ancient vines and grower Nivaldo Morales.jpg",
        "auteur": "Alder Yarrow",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Row upon row across gently rolling valleys, Matetic Wines, Chile (38609005014).jpg",
        "auteur": "Winniepix",
        "licence": "CC BY 2.0",
        "source": "commons"
      },
      {
        "titre": "Waling through the vineyard at Bodegas RE, Casablanca Valley, Chile (27137278149).jpg",
        "auteur": "Winniepix",
        "licence": "CC BY 2.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "ESTUDIO DE MERCADO",
      "title": "Chile",
      "officiel": "REPÚBLICA DE CHILE",
      "lieu": "Santiago · 2026",
      "subtitle": "Fruta de exportación, viñedos y hortalizas bajo una sequía de más de una década.\nLo que cambia la hidrorretención en una agricultura de contraestación."
    },
    "chiffres": {
      "kicker": "EL MERCADO EN RESUMEN",
      "title": "Una agricultura exportadora en un país largo y seco",
      "items": [
        {
          "value": "≈ 3 %",
          "label": "del PIB lo aporta el sector silvoagropecuario"
        },
        {
          "value": "≈ 1,1 M ha",
          "label": "de superficie bajo riego, sobre todo en el centro"
        },
        {
          "value": "≈ 20 000 M",
          "label": "de dólares en exportaciones silvoagropecuarias al año"
        },
        {
          "value": "≈ 9 %",
          "label": "del empleo nacional depende del sector"
        }
      ],
      "note": "La agricultura chilena vive de la contraestación: exporta fruta al hemisferio norte cuando allá es invierno, con más de 25 acuerdos comerciales vigentes. Esa ventaja comercial descansa sobre un recurso hídrico que lleva más de una década por debajo de lo normal en la zona central."
    },
    "contrainte": {
      "kicker": "LA RESTRICCIÓN",
      "title": "Más de una década de megasequía en la zona central",
      "caption": "Parronal bajo riego, valle central",
      "bullets": [
        "Desde 2010 la zona central acumula déficits de precipitación del orden de 20 a 40 % año tras año: es el episodio seco más prolongado del que se tenga registro en el país.",
        "La agricultura concentra cerca del 72 % del agua de uso consuntivo: cualquier tensión sobre el recurso se traduce primero en restricciones de riego.",
        "El gradiente de lluvia es extremo: menos de 10 mm al año en el desierto de Atacama, del orden de 300 mm en Santiago y más de 1 500 mm en la zona lluviosa del sur.",
        "Los embalses de Coquimbo y del valle central han operado varias temporadas muy por debajo de su capacidad, y decenas de comunas siguen bajo decreto de escasez hídrica.",
        "La respuesta pública —embalses, revestimiento de canales, desalación en el norte— actúa sobre la oferta. La hidrorretención actúa sobre la demanda, dentro del predio."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "SEQUÍA Y ESTRÉS HÍDRICO",
      "title": "La presión aumenta, pero el riesgo sigue siendo local",
      "type": "bar",
      "series": [
        {
          "name": "Índice mundial del número y duración de las sequías",
          "labels": [
            "1980–1999",
            "Desde 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Dos indicadores, no un atajo",
        "body": "A escala mundial, el número y la duración de las sequías han aumentado un 29 % desde 2000 frente a las dos décadas anteriores.\n\nEl estrés hídrico mide otra cosa: las extracciones respecto a los recursos renovables disponibles tras las necesidades ambientales. Esta señal mundial no es una previsión nacional; debe leerse con la lluvia, los acuíferos, las estaciones y los usos locales."
      }
    },
    "usages": {
      "kicker": "ADÓNDE VA EL AGUA",
      "title": "El riego concentra casi tres cuartos de la extracción",
      "type": "doughnut",
      "series": [
        {
          "name": "Uso consuntivo del agua",
          "labels": [
            "Agricultura",
            "Agua potable",
            "Industria y minería"
          ],
          "values": [
            72,
            11,
            17
          ]
        }
      ],
      "reading": {
        "head": "Lo que implica",
        "body": "Con casi tres cuartos del uso consuntivo, el riego es el único frente donde un ahorro moderado mueve volúmenes grandes: bajar un 10 % el consumo agrícola equivale a cerca de dos tercios de toda el agua potable del país.\n\nPor eso el esfuerzo se concentra en el predio, y no en los demás usos."
      }
    },
    "economie": {
      "kicker": "ECONOMÍA Y SEGURIDAD ALIMENTARIA",
      "title": "Un exportador de fruta fresca hacia el mundo entero",
      "items": [
        {
          "value": "N.º 1",
          "label": "exportador mundial de cerezas frescas"
        },
        {
          "value": "≈ 90 %",
          "label": "de las cerezas chilenas exportadas se venden en China"
        },
        {
          "value": "> 60",
          "label": "economías con un acuerdo comercial vigente con Chile"
        }
      ],
      "note": "La fruta fresca —cerezas, uva de mesa, arándanos, manzanas y paltas— sostiene las exportaciones agrícolas junto al vino. Ese modelo depende del riego en valles donde el Código de Aguas, reformado en 2022, prioriza el consumo humano y limita los nuevos derechos."
    },
    "productions": {
      "kicker": "LOS RUBROS",
      "title": "Cinco producciones concentran el volumen agrícola",
      "type": "bar",
      "series": [
        {
          "name": "Producción anual (millones de toneladas)",
          "labels": [
            "Uva*",
            "Trigo",
            "Manzana",
            "Papa",
            "Maíz"
          ],
          "values": [
            2.6,
            1.3,
            1.2,
            1.1,
            1
          ]
        }
      ],
      "reading": {
        "head": "Lectura",
        "body": "* Uva vinífera y de mesa en conjunto: la vinífera aporta la mayor parte del volumen, la de mesa el mayor valor por hectárea.\n\nLa fruta de exportación —cerezas, uva de mesa, manzanas, paltas— se riega prácticamente en su totalidad. Ahí el ahorro de agua se convierte directamente en margen."
      }
    },
    "filieres": [
      {
        "kicker": "PRIMER SECTOR",
        "title": "Palta en laderas: árboles caros de mantener sin agua",
        "caption": null,
        "bullets": [
          "La palta Hass se planta en laderas de Valparaíso, Coquimbo y la Región Metropolitana, regadas por goteo.",
          "En Petorca y La Ligua la escasez de agua obligó a abandonar huertos y abrió un debate nacional sobre su uso.",
          "Un palto adulto no tolera cortes largos de riego: el estrés hídrico hace caer la fruta y compromete la temporada siguiente.",
          "Los suelos de ladera, delgados y con pendiente, retienen poca agua entre dos riegos.",
          "EVERGREEN® en la plantación o en la línea de goteo mantiene el agua en la zona de raíces."
        ],
        "photo": 3
      },
      {
        "kicker": "SEGUNDO SECTOR",
        "title": "Uva de mesa y cerezas: exportar con menos agua",
        "caption": null,
        "bullets": [
          "La uva de mesa se concentra de Atacama a O'Higgins; la cereza avanza de O'Higgins hacia el Maule y más al sur.",
          "Los compradores de Asia, Estados Unidos y Europa pagan calibre, firmeza y condición tras semanas de viaje.",
          "Las dotaciones de los canalistas bajan en años secos y la extracción subterránea está cada vez más limitada.",
          "Un riego regular durante el crecimiento del fruto evita partiduras y problemas de calibre.",
          "NAPEMA® controla plagas sin residuos, un requisito de los protocolos fitosanitarios de exportación."
        ],
        "photo": 0
      }
    ],
    "solutions": {
      "kicker": "NUESTRA RESPUESTA",
      "title": "Dos tecnologías para dos restricciones distintas",
      "left": {
        "head": "EVERGREEN® — retener el agua",
        "lines": [
          "Hidrorretenedor a base de potasio, incorporado en la zona radicular a la plantación o en la reposición de plantas.",
          "Capta el agua de lluvia o de riego y la devuelve a la planta de forma gradual, suprimiendo el estrés hídrico en las etapas críticas.",
          "Capacidad de absorción del orden de 300 veces su peso; efecto útil de 3 a 4 años en el suelo.",
          "Se degrada entre 20 y 25 % al año, sin acumulación ni riesgo de sobredosis."
        ]
      },
      "right": {
        "head": "ECOFERT® — nutrir sin agotar el suelo",
        "lines": [
          "Fertilizante en microdosis de aminoácidos, nitrógeno, fósforo y potasio, obtenido de recursos renovables.",
          "No quelante: no empobrece el complejo arcillo-húmico y no incrementa la salinidad ni el contenido de nitratos.",
          "Certificado SOHISCERT y EU Bio, condición de acceso a los pliegos de los compradores europeos.",
          "De 1 a 4 frascos de 140 ml por hectárea, compatible con los equipos de fertirriego ya instalados."
        ]
      },
      "note": "Los dos productos se venden por separado, pero fueron concebidos para reforzarse: el hidrorretenedor prolonga la disponibilidad del agua y el fertilizante valoriza esa agua disponible sin degradar el suelo."
    },
    "economies": {
      "kicker": "ÓRDENES DE MAGNITUD",
      "title": "Ahorro de agua esperado según el método de riego",
      "type": "bar",
      "series": [
        {
          "name": "Rango bajo (%)",
          "labels": [
            "Goteo",
            "Microaspersión",
            "Pivote",
            "Surco"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Rango alto (%)",
          "labels": [
            "Goteo",
            "Microaspersión",
            "Pivote",
            "Surco"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Leer con prudencia",
        "body": "Estos rangos son indicativos y se apoyan en las ganancias documentadas de nuestros hidrorretenedores.\n\nEl resultado real depende del suelo, del clima y del cultivo. Estas cifras dan un orden de magnitud: en ningún caso constituyen un valor garantizado, contractual ni absoluto."
      }
    },
    "regions": {
      "kicker": "TRES ZONAS PRIORITARIAS",
      "title": "Dónde iniciar los primeros ensayos",
      "items": [
        {
          "head": "Coquimbo",
          "metric": "Del orden de 100 mm de lluvia al año",
          "lines": [
            "Uva de mesa, uva pisquera, cítricos y palta: casi toda la superficie ya se riega por goteo y no queda margen de ahorro en el método mismo.",
            "Los embalses del Limarí y del Elqui han operado temporadas enteras a una fracción de su capacidad, con turnos de agua y superficie arrancada.",
            "Suelos delgados y pedregosos, de baja retención: el agua aplicada percola antes de que la raíz alcance a aprovecharla."
          ],
          "photo": 1
        },
        {
          "head": "Valparaíso — Aconcagua",
          "metric": "≈ 60 % de la palta nacional",
          "lines": [
            "Concentra la mayor parte del palto del país, cultivo de alta exigencia hídrica y plantado con frecuencia en laderas de cerro.",
            "La cuenca del Petorca es el caso emblemático del conflicto por el agua: la presión regulatoria y reputacional es máxima.",
            "Exportadores expuestos a las auditorías hídricas de los compradores europeos y norteamericanos."
          ],
          "photo": 4
        },
        {
          "head": "O'Higgins y Maule",
          "metric": "≈ 50 000 ha de viñedos en Maule",
          "lines": [
            "Corazón del cerezo de exportación a China y del manzano: fruta de alto valor donde el estrés hídrico en cuaja y llenado cuesta calibre.",
            "Viñedos del secano interior y costero, sin riego o con riego deficitario: el hidrorretenedor actúa donde no hay infraestructura.",
            "Predios medianos y grandes, con capacidad técnica para conducir un ensayo con parcela testigo."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "CÓMO TRABAJAMOS",
      "title": "Un despliegue por etapas, medido en cada paso",
      "items": [
        {
          "head": "Diagnóstico",
          "body": "Análisis del suelo, del método de riego y del cultivo. Sin compromiso en esta etapa."
        },
        {
          "head": "Parcela piloto",
          "body": "Un ensayo comparativo en una parcela, con parcela testigo conducida de forma idéntica."
        },
        {
          "head": "Medición",
          "body": "Registro de consumo de agua y de rendimiento durante un ciclo de cultivo completo."
        },
        {
          "head": "Extensión",
          "body": "Ampliación gradual a las demás parcelas sobre la base de los resultados constatados."
        }
      ],
      "note": "La regla de dosificación es la misma en todas partes: 3 gramos por litro de tierra útil. Lo que cambia de un predio a otro es el volumen de suelo que las raíces exploran realmente."
    },
    "risques": {
      "kicker": "LO QUE HAY QUE ANTICIPAR",
      "title": "Riesgos identificados y respuestas",
      "left": {
        "head": "Riesgos",
        "lines": [
          "Variabilidad entre temporadas: un año lluvioso, ligado a El Niño, enmascara el interés del producto.",
          "Parque de riego ya muy tecnificado: el comprador pregunta qué aporta el producto por sobre el goteo.",
          "Competencia de polímeros baratos a base de sodio, que dejaron mal recuerdo en suelos salinos.",
          "Trámites de registro e ingreso de insumos ante el SAG, y liquidez de los predios tras varias temporadas secas."
        ]
      },
      "right": {
        "head": "Respuestas",
        "lines": [
          "Conducir el ensayo sobre un ciclo completo con parcela testigo, para objetivar la ganancia incluso en año favorable.",
          "Medir el ahorro sobre el goteo mismo: la hidrorretención actúa en el suelo, no en el método de aplicación.",
          "Documentar la formulación: potasio y no sodio, compatible con cultivos alimentarios.",
          "Escalonar el compromiso: el efecto útil de 3 a 4 años amortiza el costo sobre varias temporadas."
        ]
      },
      "note": "Análisis de acrilamida (laboratorio Polymex, ISO 9001, contenido inferior a 3,0 µg/g), screening REACH / SVHC (SGS) y certificado SOHISCERT vigente hasta el 4 de septiembre de 2027, disponibles a solicitud."
    },
    "sources": [
      "Banco Central de Chile: cuentas nacionales y exportaciones.",
      "ODEPA: boletines de exportaciones silvoagropecuarias y de fruta fresca.",
      "Dirección General de Aguas: Código de Aguas y decretos de escasez hídrica.",
      "FAO (FAOSTAT, AQUASTAT) y Banco Mundial (WDI).",
      "UNCCD, Drought in Numbers 2022: número y duración de las sequías, +29 % desde 2000 frente a 1980–1999.",
      "ONU-Agua / FAO AQUASTAT, indicador ODS 6.4.2: definición y umbrales del estrés hídrico."
    ],
    "closing": {
      "title": "Cuéntenos cómo es su predio",
      "body": "Cultivo, método de riego, tipo de suelo, volumen de agua que consume hoy. Volvemos con la combinación de tecnologías correspondiente, las dosis y los ensayos ya realizados en situaciones comparables.\n\nUna primera conversación no compromete a nada.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suiza"
    }
  },
  "cote-divoire": {
    "slug": "cote-divoire",
    "locale": "fr-CI",
    "langue": "fr",
    "pdf": "/documents/countries/cote-divoire.pdf",
    "photos": 11,
    "credits": [
      {
        "titre": "Cacao San Pedro Grand Bereby La Flotte.jpg",
        "auteur": "GillesJer",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cacao fruit in Côte d'Ivoire (14).JPG",
        "auteur": "Hanay",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivateurs de cacao.jpg",
        "auteur": "KokoDZ",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivateur de cacao 01.jpg",
        "auteur": "KokoDZ",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cacao fruit in Côte d'Ivoire (16).JPG",
        "auteur": "Hanay",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivateur de manioc 1.jpg",
        "auteur": "Metchyves",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Planting corn in Ivory coast.jpg",
        "auteur": "Pedro Radio Brandoni",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Emballage de Cacao.jpg",
        "auteur": "Abdallahbigboy",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivateur de cacao 02.jpg",
        "auteur": "KokoDZ",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cacao fruit in Côte d'Ivoire (11).JPG",
        "auteur": "Hanay",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Cultivateur de cacao 04.jpg",
        "auteur": "KokoDZ",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Côte d'Ivoire",
      "officiel": "RÉPUBLIQUE DE CÔTE D'IVOIRE",
      "lieu": "Abidjan · 2026",
      "subtitle": "Premier producteur mondial de cacao et de noix de cajou, sur des vergers âgés et des pluies devenues irrégulières.\nCe que l'hydro-rétention change au moment de replanter."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "La première agriculture d'exportation d'Afrique de l'Ouest",
      "items": [
        {
          "value": "≈ 20 %",
          "label": "du PIB provient de l'agriculture"
        },
        {
          "value": "≈ 45 %",
          "label": "de la population active vit du secteur"
        },
        {
          "value": "≈ 40 %",
          "label": "du cacao mondial vient de Côte d'Ivoire"
        },
        {
          "value": "≈ 2 Mt",
          "label": "de fèves de cacao récoltées en 2024/25"
        }
      ],
      "note": "Le pays compte environ 33 millions d'habitants et reste la première économie de l'UEMOA. Cacao, anacarde, hévéa, palmier et café sont produits pour l'essentiel par des exploitations familiales de quelques hectares, encadrées par des filières structurées et des coopératives nombreuses."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Beaucoup de pluie, des vergers qui n'en profitent plus",
      "caption": "Cacaoyère du sud forestier",
      "bullets": [
        "Le cacaoyer demande une pluie régulière sur neuf mois. Les saisons se décalent, et les épisodes secs tombent désormais pendant la formation des cabosses.",
        "Le couvert forestier a fortement reculé depuis l'indépendance : les parcelles perdent l'ombrage et l'humidité que la forêt leur apportait.",
        "Une grande partie du verger a dépassé son pic de production. Replanter est devenu le principal chantier des filières cacao et café.",
        "Au centre et au nord, la pluie tombe sur cinq à six mois : chaque poche de sécheresse au semis coûte des semaines de croissance.",
        "Presque toute la production est pluviale. L'enjeu n'est pas de pomper davantage, mais de garder l'eau de pluie dans la zone racinaire au moment où la plante en a besoin."
      ],
      "photo": 4
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'agriculture prélève la moitié de l'eau utilisée",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            52,
            27,
            21
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Avec environ 84 milliards de m³ de ressources renouvelables, le pays n'est pas en pénurie d'eau à l'échelle nationale.\n\nLa contrainte est saisonnière et locale : la saison sèche, le nord, et surtout les jeunes plants mis en terre. C'est là que l'hydro-rétention se mesure."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "Premier exportateur de cacao, importateur de riz",
      "items": [
        {
          "value": "1er",
          "label": "producteur mondial de cacao et de noix de cajou"
        },
        {
          "value": "3e",
          "label": "producteur mondial de caoutchouc naturel"
        },
        {
          "value": "≈ 1,6 Mt",
          "label": "de riz importées chaque année"
        },
        {
          "value": "≈ 33 M",
          "label": "d'habitants, dont plus de la moitié en ville"
        }
      ],
      "note": "Les recettes d'exportation reposent largement sur le cacao, ce qui expose le pays aux cours mondiaux. En face, le riz reste massivement importé : les programmes publics de relance rizicole visent à réduire cette facture, et cherchent des gains de rendement sur des périmètres largement pluviaux."
    },
    "productions": {
      "kicker": "LES FILIÈRES",
      "title": "Le vivrier en volume, les cultures pérennes en valeur",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (millions de tonnes)",
          "labels": [
            "Manioc",
            "Igname",
            "Banane plantain",
            "Cacao",
            "Hévéa"
          ],
          "values": [
            7.4,
            7,
            2.3,
            2,
            1.8
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Manioc, igname et banane plantain nourrissent le pays et pèsent le plus en tonnes.\n\nCacao, hévéa, anacarde et palmier rapportent les devises. Ces filières sont encadrées et suivies : c'est là qu'un essai mesuré se transforme le plus vite en décision d'achat."
      }
    },
    "filieres": [
      {
        "kicker": "FILIÈRE PHARE",
        "title": "Cacao : le rendement, pas le volume",
        "caption": null,
        "bullets": [
          "Environ 40 % du cacao mondial sort de Côte d'Ivoire, produit par des centaines de milliers d'exploitations familiales.",
          "Le rendement moyen tourne autour de 500 kg par hectare, très en dessous de ce que le cacaoyer peut donner sur un verger jeune et bien conduit.",
          "L'écart s'explique par l'âge des arbres, la pression du swollen shoot et des pluies devenues irrégulières — pas par un manque de surface.",
          "Les acheteurs européens exigent traçabilité, zéro déforestation et limites strictes de résidus : NAPEMA® protège sans laisser de résidu sur la fève.",
          "À la replantation, EVERGREEN® dans le trou de plantation sécurise la reprise pendant la première saison sèche, quand la perte de jeunes plants coûte une année entière."
        ],
        "photo": 2
      },
      {
        "kicker": "DEUXIÈME FILIÈRE",
        "title": "Anacarde et cultures du Nord : la saison courte",
        "caption": "Plantation de maïs, Côte d'Ivoire",
        "bullets": [
          "Le pays est devenu en quinze ans le premier producteur mondial de noix de cajou brutes, avec près d'un million de tonnes récoltées.",
          "La filière se concentre au centre et au nord, où la pluie tombe sur cinq à six mois seulement.",
          "Les rendements par hectare restent faibles et l'essentiel de la noix part encore brute : le pays développe sa transformation locale.",
          "Igname, maïs et coton partagent les mêmes parcelles et la même contrainte : une poche de sécheresse au semis se paie à la récolte.",
          "Retenir l'eau de pluie dans la zone racinaire est ici le levier le plus direct, sur des sols sableux qui la laissent filer."
        ],
        "photo": 6
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Retenir l'eau, nourrir sans épuiser",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la replantation.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui protège les jeunes plants pendant la saison sèche.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique de sols cultivés depuis des générations.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument direct face aux exigences des acheteurs européens de cacao.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans dégrader le sol."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'arrosage",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Micro-aspersion",
            "Aspersion",
            "Arrosage manuel"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Micro-aspersion",
            "Aspersion",
            "Arrosage manuel"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Sud-Ouest — cacao",
          "metric": "Premier bassin cacaoyer",
          "lines": [
            "San-Pédro, Soubré, Gagnoa : la plus forte concentration de cacaoyères du pays.",
            "Verger âgé et programmes de replantation en cours : l'hydro-rétenteur se juge au taux de reprise.",
            "Coopératives certifiées et exportateurs déjà organisés pour suivre des parcelles."
          ],
          "photo": 3
        },
        {
          "head": "Centre et Nord — anacarde, coton, vivrier",
          "metric": "≈ 1 Mt de noix brutes",
          "lines": [
            "Bouaké, Korhogo, Bondoukou : anacarde, coton, igname et maïs sur cinq à six mois de pluie.",
            "Poches de sécheresse au semis et sols sableux qui retiennent peu l'eau.",
            "Producteurs encadrés par les structures de filière : un essai peut être coordonné sur plusieurs sites."
          ],
          "photo": 5
        },
        {
          "head": "Sud-Est et lagunes — hévéa, palmier",
          "metric": "≈ 1,8 Mt de caoutchouc",
          "lines": [
            "Aboisso, Dabou, Bonoua : plantations industrielles et villageoises suivies bloc par bloc.",
            "Mortalité des jeunes plants en saison sèche, sur des sols lessivés par les fortes pluies.",
            "Volumes contractualisables et protocole d'essai facile à tenir sur un bloc homogène."
          ],
          "photo": 1
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de reprise, de consommation et de rendement à cheval sur la saison sèche."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Trésorerie limitée des planteurs, qui achètent leurs intrants à crédit.",
          "Filières cacao et anacarde encadrées : rien ne se déploie sans l'accord des organismes de filière.",
          "Le swollen shoot ne se corrige pas par l'eau : l'hydro-rétenteur accompagne la replantation.",
          "Produit peu connu, parfois confondu avec les polymères à base de sodium."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Passer par les coopératives et les exportateurs pour grouper les achats.",
          "Présenter les essais aux structures de filière dès la première parcelle.",
          "Positionner EVERGREEN® sur la reprise des jeunes plants, mesurée en une saison.",
          "Documenter la formulation potassique, sans sodium, compatible avec l'alimentaire."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "Conseil du Café-Cacao et Conseil Coton-Anacarde : production, campagnes, prix garantis.",
      "Ministère de l'Agriculture, ANADER et FIRCA : statistiques agricoles et programmes de filière.",
      "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI) : PIB agricole, emploi, prélèvements d'eau.",
      "USDA GAIN et ICCO : cacao, café, riz et échanges mondiaux.",
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "croatie": {
    "slug": "croatie",
    "locale": "hr-HR",
    "langue": "hr",
    "pdf": "/documents/countries/croatie.pdf",
    "photos": 5,
    "credits": [
      {
        "titre": "Croatia agriculture-1.jpg",
        "auteur": "Beyond silence",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Croatia agriculture-3.jpg",
        "auteur": "László Szalai (Beyond silence)",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Croatia agriculture-4.jpg",
        "auteur": "László Szalai (Beyond silence)",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Croatia agriculture-5.jpg",
        "auteur": "László Szalai (Beyond silence)",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Vineyards of Istria (Croatia).jpg",
        "auteur": "Petar Milošević",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "TRŽIŠNA STUDIJA",
      "title": "Hrvatska",
      "officiel": "REPUBLIKA HRVATSKA",
      "lieu": "Zagreb · 2026.",
      "subtitle": "Ratarstvo, masline i mandarine u zemlji bogatoj vodom, a bez navodnjavanja.\nŠto hidroretencija mijenja ondje gdje infrastrukture nema."
    },
    "chiffres": {
      "kicker": "TRŽIŠTE UKRATKO",
      "title": "Vode na pretek, navodnjavanja gotovo nikako",
      "items": [
        {
          "value": "≈ 1,5 mil. ha",
          "label": "korištenoga poljoprivrednog zemljišta"
        },
        {
          "value": "≈ 2 %",
          "label": "te površine se stvarno navodnjava"
        },
        {
          "value": "≈ 600 000 ha",
          "label": "procijenjeni potencijal za navodnjavanje"
        },
        {
          "value": "≈ 400 000 ha",
          "label": "pod kukuruzom i pšenicom, gotovo sve oborinsko"
        }
      ],
      "note": "Hrvatska je među vodom najbogatijim zemljama Europe, a istodobno ima jedan od najnižih udjela navodnjavanih površina u Uniji. Posljedica je izravna: prinos glavnih kultura ovisi o rasporedu oborina, a ne o odluci poljoprivrednika. Upravo zato je ovo tržište drukčije od mediteranskih — ovdje se ne optimizira postojeće navodnjavanje, nego se djeluje ondje gdje ga uopće nema."
    },
    "contrainte": {
      "kicker": "OGRANIČENJE",
      "title": "Suša pogađa usjeve koji se ne mogu zaliti",
      "caption": "Ratarski krajolik, kontinentalna Hrvatska",
      "bullets": [
        "Suše 2003., 2012., 2017., 2022. i 2024. nanijele su znatne štete ratarstvu Slavonije, uz gubitke prinosa kukuruza koji su u najtežim godinama premašili trećinu.",
        "Bez sustava za navodnjavanje na najvećem dijelu površina, jedini raspoloživi odgovor na sušu jest voda koju tlo samo uspije zadržati.",
        "Klimatski su rasponi veliki: kontinentalna Panonska nizina s ljetnim sušama nasuprot krškom priobalju, gdje su tla plitka i gotovo bez zadržavanja vode.",
        "U dolini Neretve prodor morske vode u ušće povećava zaslanjenost tla i vode za natapanje, što isključuje svako rješenje na bazi natrija.",
        "Javni odgovor — sustavi navodnjavanja, akumulacije, sredstva EU za ruralni razvoj — gradi ponudu, a traje godinama. Hidroretencija djeluje odmah, unutar same parcele."
      ],
      "photo": 2
    },
    "stress": {
      "kicker": "SUŠA I VODNI STRES",
      "title": "Pritisak raste, ali rizik ostaje lokalan",
      "type": "bar",
      "series": [
        {
          "name": "Globalni indeks broja i trajanja suša",
          "labels": [
            "1980.–1999.",
            "Od 2000."
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Dva različita pokazatelja",
        "body": "Globalno su broj i trajanje suša od 2000. porasli 29% u odnosu na prethodna dva desetljeća.\n\nVodni stres mjeri nešto drugo: zahvaćanje vode kao udio obnovljivih resursa nakon okolišnih potreba. Taj globalni signal nije prognoza za pojedinu državu; mora se čitati uz lokalne oborine, vodonosnike, sezone i načine uporabe."
      }
    },
    "usages": {
      "kicker": "KAMO ODLAZI VODA",
      "title": "Poljoprivreda je najmanji potrošač — i najizloženija",
      "type": "doughnut",
      "series": [
        {
          "name": "Zahvaćanje vode",
          "labels": [
            "Javna vodoopskrba",
            "Industrija",
            "Poljoprivreda"
          ],
          "values": [
            62,
            25,
            13
          ]
        }
      ],
      "reading": {
        "head": "Što to znači",
        "body": "Suprotno mediteranskim zemljama, poljoprivreda ovdje zahvaća najmanji dio vode — ne zato što joj ne treba, nego zato što je nema čime dovesti na parcelu.\n\nOgraničenje stoga nije količina vode u zemlji, nego njezina dostupnost korijenu u trenutku kada je biljci potrebna."
      }
    },
    "economie": {
      "kicker": "GOSPODARSTVO I SIGURNOST HRANE",
      "title": "Dobro tlo, a hrana se ipak uvozi",
      "items": [
        {
          "value": "≈ 3 %",
          "label": "BDP-a dolazi iz poljoprivrede, šumarstva i ribarstva"
        },
        {
          "value": "> 1 mlrd. €",
          "label": "godišnji deficit u vanjskoj trgovini hranom"
        },
        {
          "value": "≈ 100 tis.",
          "label": "poljoprivrednih gospodarstava, većinom malih i obiteljskih"
        },
        {
          "value": "≈ 50 000 t",
          "label": "mandarina godišnje iz doline Neretve"
        }
      ],
      "note": "Nacionalni projekt navodnjavanja i sredstva Zajedničke poljoprivredne politike EU financiraju nove sustave, ali većina površina i dalje ovisi o kiši. Svaka ljetna suša zato izravno pogađa prinos, a time i cijenu hrane."
    },
    "productions": {
      "kicker": "KULTURE",
      "title": "Pet proizvodnji nosi obujam",
      "type": "bar",
      "series": [
        {
          "name": "Godišnja proizvodnja (milijuni tona)",
          "labels": [
            "Kukuruz",
            "Pšenica",
            "Šećerna repa",
            "Ječam",
            "Soja"
          ],
          "values": [
            2,
            0.9,
            0.9,
            0.3,
            0.25
          ]
        }
      ],
      "reading": {
        "head": "Čitanje",
        "body": "Kukuruz i pšenica zauzimaju najveće površine i gotovo se u cijelosti uzgajaju oborinski: ondje se svaka sušna godina izravno očitava u prinosu.\n\nVisokovrijedne kulture — masline, vinova loza, mandarine iz Neretve — obuhvaćaju male površine, ali nose izvoznu vrijednost i najbrže opravdavaju ulaganje po hektaru."
      }
    },
    "filieres": [
      {
        "kicker": "PRVI SEKTOR",
        "title": "Mandarine u dolini Neretve: voda i sol na istoj parceli",
        "caption": null,
        "bullets": [
          "Delta Neretve najveće je hrvatsko područje uzgoja mandarina, na melioriranom tlu uz samo ušće rijeke.",
          "Ljeti se more probija uzvodno: zaslanjena voda za navodnjavanje i zaslanjeno tlo smanjuju prinos i kvalitetu ploda.",
          "Cijena ovisi o veličini i izgledu ploda: ujednačena berba izravno je prihod.",
          "Nasadi su trajni i skupi za obnovu; zaštita korijena od sušnog stresa čuva višegodišnje ulaganje.",
          "Zadržavanje vode u zoni korijena smanjuje broj zalijevanja i količinu vode koju treba crpiti."
        ],
        "photo": 0
      },
      {
        "kicker": "DRUGI SEKTOR",
        "title": "Masline i vinogradi na kršu, gotovo bez navodnjavanja",
        "caption": null,
        "bullets": [
          "Istra i Dalmacija uzgajaju masline i vinovu lozu na plitkom, kamenitom tlu koje brzo gubi vodu.",
          "Većina nasada nema navodnjavanje, a ljetna suša pada upravo u vrijeme cvatnje i nalijevanja ploda.",
          "Mlade sadnice najosjetljivije su u prve dvije godine, kada je gubitak sadnica najveći trošak.",
          "EVERGREEN® u sadnoj jami zadržava vodu oko korijena između rijetkih ljetnih kiša.",
          "Maslinovo ulje i vino sa zaštićenim oznakama postižu visoku cijenu: stabilan prinos isplaćuje ulaganje."
        ],
        "photo": 4
      }
    ],
    "solutions": {
      "kicker": "NAŠ ODGOVOR",
      "title": "Dvije tehnologije za dva različita ograničenja",
      "left": {
        "head": "EVERGREEN® — zadržati vodu",
        "lines": [
          "Hidroretenter na bazi kalija, unesen u zonu korijena pri sadnji ili nadosadnji.",
          "Hvata kišnicu ili vodu od navodnjavanja i postupno je vraća biljci, uklanjajući vodni stres u kritičnim fazama.",
          "Kapacitet upijanja reda veličine 300 puta vlastite težine; korisno djelovanje 3 do 4 godine u tlu.",
          "Razgrađuje se 20 do 25 % godišnje, bez nakupljanja i bez opasnosti od predoziranja."
        ]
      },
      "right": {
        "head": "ECOFERT® — hraniti bez iscrpljivanja",
        "lines": [
          "Gnojivo u mikrodozama aminokiselina, dušika, fosfora i kalija, iz obnovljivih izvora.",
          "Nije kelatno: ne osiromašuje glineno-humusni kompleks i ne povećava slanost ni udio nitrata.",
          "Certificirano SOHISCERT i u skladu s uredbom EU o ekološkoj proizvodnji — uvjet pristupa specifikacijama europskih kupaca.",
          "1 do 4 bočice od 140 ml po hektaru, primjenjivo postojećom opremom za fertirigaciju."
        ]
      },
      "note": "Oba se proizvoda prodaju odvojeno, ali su osmišljena da se pojačavaju: hidroretenter produljuje dostupnost vode, a gnojivo tu dostupnu vodu vrednuje bez degradacije tla. Na oborinskoj parceli, gdje nema navodnjavanja koje bi se moglo pojačati, prvi je od njih jedina poluga koja preostaje."
    },
    "economies": {
      "kicker": "REDOVI VELIČINE",
      "title": "Očekivana ušteda vode prema načinu navodnjavanja",
      "type": "bar",
      "series": [
        {
          "name": "Donja granica (%)",
          "labels": [
            "Kap po kap",
            "Rasprskivanje",
            "Pivot",
            "Gravitacijsko"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Gornja granica (%)",
          "labels": [
            "Kap po kap",
            "Rasprskivanje",
            "Pivot",
            "Gravitacijsko"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Čitati s oprezom",
        "body": "Ovi su rasponi okvirni i oslanjaju se na dokumentirane uštede naših hidroretentera.\n\nNa oborinskoj parceli mjerilo nije ušteda vode, nego zadržan prinos u sušnoj godini. Stvarni rezultat ovisi o tlu, klimi i kulturi: ove brojke daju red veličine i ni u kojem slučaju ne predstavljaju zajamčenu, ugovornu ni apsolutnu vrijednost."
      }
    },
    "regions": {
      "kicker": "TRI PRIORITETNA PODRUČJA",
      "title": "Gdje započeti prve pokuse",
      "items": [
        {
          "head": "Slavonija",
          "metric": "Žitnica zemlje",
          "lines": [
            "Najveće ratarske površine u zemlji, gotovo sve oborinske: hidroretenter djeluje bez ikakve infrastrukture.",
            "Suše 2022. i 2024. pokazale su koliko stoji nedostatak vode u fazi svilanja kukuruza.",
            "Velika gospodarstva i zadruge s kapacitetom za pokus s kontrolnom parcelom."
          ],
          "photo": 3
        },
        {
          "head": "Dolina Neretve",
          "metric": "Mandarine i povrće",
          "lines": [
            "Izvozno voćarstvo i povrtlarstvo na aluvijalnom tlu, s visokom vrijednošću po hektaru.",
            "Prodor morske vode podiže zaslanjenost: formulacija na bazi kalija, a ne natrija, ovdje je uvjet, a ne prednost.",
            "Kratki ciklusi povrća daju rezultat pokusa unutar jedne sezone."
          ],
          "photo": 1
        },
        {
          "head": "Istra i Dalmacija",
          "metric": "Masline i vinova loza",
          "lines": [
            "Krška tla, plitka i kamenita, gotovo bez zadržavanja: voda procijedi prije nego je korijen iskoristi.",
            "Ljetna suša pogađa u razdoblju nalijevanja ploda, kada maslina i loza odlučuju o kakvoći.",
            "Visoka jedinična vrijednost: ekstra djevičansko ulje i vina sa zaštićenom oznakom."
          ],
          "photo": 4
        }
      ]
    },
    "deploiement": {
      "kicker": "KAKO RADIMO",
      "title": "Postupno uvođenje, mjereno u svakom koraku",
      "items": [
        {
          "head": "Dijagnostika",
          "body": "Analiza tla, načina navodnjavanja i kulture. U ovoj fazi bez ikakve obveze."
        },
        {
          "head": "Pokusna parcela",
          "body": "Usporedni pokus na jednoj parceli, uz kontrolnu parcelu vođenu na jednak način."
        },
        {
          "head": "Mjerenje",
          "body": "Bilježenje potrošnje vode i prinosa tijekom cijeloga vegetacijskog ciklusa."
        },
        {
          "head": "Proširenje",
          "body": "Postupno širenje na ostale parcele na temelju utvrđenih rezultata."
        }
      ],
      "note": "Pravilo doziranja svugdje je isto: 3 grama po litri korisne zemlje. Ono što se mijenja od gospodarstva do gospodarstva jest obujam tla koji korijenje stvarno prožima."
    },
    "risques": {
      "kicker": "ŠTO TREBA PREDVIDJETI",
      "title": "Prepoznati rizici i odgovori",
      "left": {
        "head": "Rizici",
        "lines": [
          "Kišna godina prikriva korist proizvoda: u oborinskom uzgoju razlika se vidi tek u sušnoj sezoni.",
          "Rascjepkanost posjeda i velik broj malih gospodarstava: odluka o kupnji je raspršena.",
          "Europski okvir o namjerno dodanim mikroplastikama stavlja svaki poljoprivredni polimer pod povećalo.",
          "Konkurencija jeftinih polimera na bazi natrija, koji su ostavili loše iskustvo na zaslanjenim tlima."
        ]
      },
      "right": {
        "head": "Odgovori",
        "lines": [
          "Voditi pokus kroz cijeli ciklus s kontrolnom parcelom, kako bi dobitak bio mjerljiv i u povoljnoj godini.",
          "Ići preko zadruga i proizvođačkih organizacija, a ne od gospodarstva do gospodarstva.",
          "Priložiti dokumentaciju o razgradnji — 20 do 25 % godišnje, bez nakupljanja — te screening REACH / SVHC.",
          "Dokumentirati formulaciju: kalij, a ne natrij, primjereno prehrambenim kulturama i zaslanjenim tlima."
        ]
      },
      "note": "Analiza akrilamida (laboratorij Polymex, ISO 9001, udio niži od 3,0 µg/g), screening REACH / SVHC (SGS) i certifikat SOHISCERT koji vrijedi do 4. rujna 2027. dostupni su na zahtjev. Mjere ruralnog razvoja iz sredstava EU mogu sufinancirati ulaganje u poboljšanje tla."
    },
    "sources": [
      "Državni zavod za statistiku: biljna proizvodnja i poljoprivredna gospodarstva.",
      "Ministarstvo poljoprivrede: Nacionalni projekt navodnjavanja i gospodarenja zemljištem i vodama.",
      "Eurostat: struktura poljoprivrednih gospodarstava, vanjska trgovina hranom.",
      "FAO (FAOSTAT, AQUASTAT) i Svjetska banka (WDI).",
      "UNCCD, Drought in Numbers 2022: broj i trajanje suša, +29% od 2000. u odnosu na 1980.–1999.",
      "UN-Water / FAO AQUASTAT, pokazatelj SDG 6.4.2: definicija i pragovi vodnog stresa."
    ],
    "closing": {
      "title": "Recite nam kakvo je vaše gospodarstvo",
      "body": "Kultura, način navodnjavanja, tip tla, količina vode koju danas trošite. Vraćamo se s odgovarajućom kombinacijom tehnologija, s dozama i s pokusima već provedenima u usporedivim situacijama.\n\nPrvi razgovor ni na što ne obvezuje.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Švicarska"
    }
  },
  "egypte": {
    "slug": "egypte",
    "locale": "ar-EG",
    "langue": "ar",
    "pdf": "/documents/countries/egypte.pdf",
    "photos": 2,
    "credits": [
      {
        "titre": "Agricultural Farmland (1).jpg",
        "auteur": "Myousry6666",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Agricultural Farmland (4).jpg",
        "auteur": "Myousry6666",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "دراسة سوق",
      "title": "مصر",
      "officiel": "جمهورية مصر العربية",
      "lieu": "القاهرة · 2026",
      "subtitle": "زراعة مروية بالكامل تعتمد على نهر واحد وحصة مائية ثابتة.\nما الذي يغيّره احتباس الماء في التربة لمنتج يصدّر إلى أوروبا والخليج."
    },
    "chiffres": {
      "kicker": "السوق في سطور",
      "title": "بلد زراعي كبير على حصة مائية ثابتة",
      "items": [
        {
          "value": "≈ 11 %",
          "label": "من الناتج المحلي الإجمالي مصدره القطاع الزراعي"
        },
        {
          "value": "≈ 4 ملايين",
          "label": "هكتار مزروعة، أي نحو 9,5 مليون فدان"
        },
        {
          "value": "55,5 مليار",
          "label": "متر مكعب: حصة مصر السنوية من مياه النيل"
        },
        {
          "value": "≈ 20 %",
          "label": "من قوة العمل تشتغل في الزراعة"
        }
      ],
      "note": "الزراعة المصرية مروية بالكامل تقريبًا: الأمطار لا تكاد تُذكر خارج الساحل الشمالي، والنيل هو المورد الوحيد عمليًا. حصة المياه لم تتغير منذ 1959 بينما تجاوز السكان 105 ملايين نسمة. هذا الفارق بين مورد ثابت وطلب متزايد هو ما يجعل مصر سوقًا ذات أولوية لتقنياتنا."
    },
    "contrainte": {
      "kicker": "القيد الأساسي",
      "title": "مورد ثابت أمام طلب يتضاعف",
      "caption": "أرض مروية في دلتا النيل",
      "bullets": [
        "حصة مصر من مياه النيل ثابتة عند نحو 55,5 مليار متر مكعب سنويًا منذ اتفاقية 1959، بينما تجاوز عدد السكان 105 ملايين نسمة.",
        "نصيب الفرد من المياه العذبة نزل إلى نحو 500 إلى 600 متر مكعب في السنة، أي أقل بكثير من خط الفقر المائي المتعارف عليه دوليًا عند 1000 متر مكعب.",
        "الأمطار شبه معدومة: أقل من 5 ملم سنويًا في الصعيد، ونحو 100 إلى 200 ملم على الساحل الشمالي وحده. كل زراعة تقريبًا مروية.",
        "الغالبية العظمى من الأراضي القديمة ما زالت تُروى بالغمر، بينما تُستصلح أراضٍ رملية جديدة ضعيفة الاحتفاظ بالماء: الحالتان تفقدان الماء قبل وصوله إلى الجذر.",
        "المشروعات العامة — تبطين الترع، إعادة استخدام مياه الصرف، التحلية — تعالج جانب العرض. احتباس الماء في التربة يعمل على جانب الطلب، داخل الحقل نفسه."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "الجفاف والإجهاد المائي",
      "title": "الضغط يتزايد، لكن المخاطر تبقى محلية",
      "type": "bar",
      "series": [
        {
          "name": "مؤشر عالمي لعدد فترات الجفاف ومدتها",
          "labels": [
            "1980–1999",
            "منذ 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "مؤشران مختلفان",
        "body": "عالمياً، ارتفع عدد فترات الجفاف ومدتها بنسبة 29٪ منذ عام 2000 مقارنة بالعقدين السابقين.\n\nأما الإجهاد المائي فيقيس نسبة السحب إلى الموارد المتجددة المتاحة بعد الاحتياجات البيئية. لذلك لا تمثل هذه الإشارة العالمية توقعاً خاصاً بالدولة، بل يجب قراءتها مع الأمطار والمياه الجوفية والمواسم والاستخدامات المحلية."
      }
    },
    "usages": {
      "kicker": "أين تذهب المياه",
      "title": "الري يستهلك أربعة أخماس المسحوب",
      "type": "doughnut",
      "series": [
        {
          "name": "سحب المياه",
          "labels": [
            "الزراعة",
            "مياه الشرب",
            "الصناعة"
          ],
          "values": [
            80,
            12,
            8
          ]
        }
      ],
      "reading": {
        "head": "ماذا يعني ذلك",
        "body": "خفض الاستهلاك الزراعي بنسبة 10 % يوفّر حجمًا من الماء يعادل الاستخدام الصناعي كله تقريبًا.\n\nلذلك ينصبّ الجهد أولًا على الحقل، لا على الاستخدامات الأخرى."
      }
    },
    "economie": {
      "kicker": "الاقتصاد والأمن الغذائي",
      "title": "من أكبر مستوردي القمح، وأول مصدّر للبرتقال",
      "items": [
        {
          "value": "≈ 12 مليون",
          "label": "طن من القمح مستوردة سنوياً، من الأعلى عالمياً"
        },
        {
          "value": "الأول",
          "label": "عالمياً في تصدير البرتقال"
        },
        {
          "value": "≈ 107 مليون",
          "label": "نسمة يعيشون على نحو 5 % من مساحة البلاد"
        }
      ],
      "note": "يستهلك الخبز المدعوم جزءاً كبيراً من القمح المستورد، ما يربط فاتورة الغذاء مباشرة بسعر الصرف. في المقابل تتوسع صادرات الموالح والبطاطس والعنب والفراولة، ومعظمها يأتي من الأراضي الجديدة المستصلحة المروية بالتنقيط."
    },
    "productions": {
      "kicker": "المحاصيل الرئيسية",
      "title": "خمسة محاصيل تحمل عمود الإنتاج",
      "type": "bar",
      "series": [
        {
          "name": "الإنتاج السنوي (مليون طن)",
          "labels": [
            "قصب السكر",
            "القمح",
            "الذرة",
            "الطماطم",
            "الموالح"
          ],
          "values": [
            16,
            9,
            7.5,
            6.3,
            4
          ]
        }
      ],
      "reading": {
        "head": "قراءة الرسم",
        "body": "قصب السكر أعلى المحاصيل استهلاكًا للماء لكل هكتار، وهو مركّز في الصعيد.\n\nالموالح والطماطم هما محصولا التصدير: أكثر من 1,5 مليون طن من البرتقال تُشحن سنويًا. هنا يتحوّل توفير الماء مباشرة إلى هامش ربح."
      }
    },
    "filieres": [
      {
        "kicker": "القطاع الأول",
        "title": "الموالح: ريادة تصديرية على أراضٍ رملية",
        "caption": null,
        "bullets": [
          "تتركز بساتين البرتقال في النوبارية والبحيرة والإسماعيلية والقليوبية، ويتجه جزء كبير من المحصول إلى التصدير.",
          "الأراضي الجديدة رملية وفقيرة، تفقد ماء الري بسرعة وتحتاج إلى ريّات متقاربة.",
          "مع ارتفاع الحرارة تزداد حاجة الأشجار إلى الماء في الصيف، بينما تبقى الحصص محدودة في أطراف الدلتا.",
          "تشترط أسواق التصدير حدوداً صارمة للمتبقيات: NAPEMA® يعالج الآفات دون أن يترك أثراً.",
          "وضع EVERGREEN® عند الغرس أو في خط التنقيط يطيل بقاء الماء حول الجذور بين الريّات."
        ],
        "photo": 2
      },
      {
        "kicker": "القطاع الثاني",
        "title": "البطاطس والخضروات: من الدلتا إلى الصحراء المستصلحة",
        "caption": null,
        "bullets": [
          "مصر من أكبر منتجي البطاطس في أفريقيا، وتصدّر جزءاً مهماً منها إلى أوروبا والخليج.",
          "تُزرع بطاطس التصدير في المنيا والنوبارية والصالحية، تحت الري المحوري أو بالتنقيط على تربة رملية.",
          "في الأراضي القديمة بالدلتا ما زال الري بالغمر شائعاً، مع فواقد كبيرة وارتفاع في ملوحة التربة.",
          "تشجع الدولة التحول إلى الري الحديث في الأراضي القديمة لتوفير جزء من حصة النيل.",
          "تستفيد الطماطم والبطاطس مباشرة من احتباس الماء في منطقة الجذور، خصوصاً على التربة الرملية."
        ],
        "photo": 0
      }
    ],
    "solutions": {
      "kicker": "ما نقترحه",
      "title": "تقنيتان لقيدين مختلفين",
      "left": {
        "head": "EVERGREEN® — الاحتفاظ بالماء",
        "lines": [
          "مادة حابسة للماء أساسها البوتاسيوم، تُوضع في منطقة الجذور عند الزراعة أو عند تجديد الغرس.",
          "تلتقط ماء الري وتعيده إلى النبات تدريجيًا، فتلغي الإجهاد المائي في المراحل الحرجة بين ريّتين.",
          "قدرة امتصاص تبلغ نحو 300 ضعف وزنها، ومفعول مفيد يمتد من 3 إلى 4 سنوات في التربة.",
          "تتحلل بنسبة 20 إلى 25 % سنويًا، دون تراكم في التربة ودون خطر جرعة زائدة."
        ]
      },
      "right": {
        "head": "ECOFERT® — التغذية دون إنهاك التربة",
        "lines": [
          "سماد بجرعات دقيقة من الأحماض الأمينية والنيتروجين والفوسفور والبوتاسيوم، من موارد متجددة.",
          "غير مخلّب: لا يستنزف المركّب الطيني الدبالي ولا يرفع الملوحة ولا نسبة النترات — نقطة حاسمة في شمال الدلتا.",
          "حاصل على شهادتي SOHISCERT والعضوية الأوروبية، وهو شرط دخول دفاتر شروط المشترين الأوروبيين.",
          "من 1 إلى 4 عبوات سعة 140 مل للهكتار، متوافق مع معدات التسميد بالري القائمة."
        ]
      },
      "note": "المنتجان يُباعان منفصلين لكنهما صُمّما ليعزّز كل منهما الآخر: المادة الحابسة تطيل بقاء الماء متاحًا، والسماد يثمّر هذا الماء المتاح دون إضعاف التربة."
    },
    "economies": {
      "kicker": "ترتيب الحجم المتوقع",
      "title": "توفير الماء المتوقع حسب أسلوب الري",
      "type": "bar",
      "series": [
        {
          "name": "الحد الأدنى (%)",
          "labels": [
            "الري بالغمر",
            "الري بالتنقيط",
            "الري بالرش",
            "الري بالمحاور"
          ],
          "values": [
            55,
            40,
            50,
            50
          ]
        },
        {
          "name": "الحد الأعلى (%)",
          "labels": [
            "الري بالغمر",
            "الري بالتنقيط",
            "الري بالرش",
            "الري بالمحاور"
          ],
          "values": [
            70,
            55,
            65,
            65
          ]
        }
      ],
      "reading": {
        "head": "تُقرأ بتحفّظ",
        "body": "هذه النطاقات تقديرية إرشادية، مبنية على المكاسب الموثقة لموادنا الحابسة للماء.\n\nالنتيجة الفعلية تتوقف على التربة والمناخ والمحصول. الأرقام تعطي ترتيب حجم فقط، وهي ليست بأي حال قيمة مضمونة أو تعاقدية أو مطلقة."
      }
    },
    "regions": {
      "kicker": "ثلاثة ميادين أولوية",
      "title": "أين نبدأ التجارب الأولى",
      "items": [
        {
          "head": "شمال الدلتا",
          "metric": "أرز وخضر وموالح على أرض قديمة",
          "lines": [
            "خضر وأرز وموالح على أراضٍ قديمة خصبة، لكن الري بالغمر ما زال هو السائد.",
            "تداخل مياه البحر يرفع الملوحة: سماد غير مخلّب ميزة مباشرة هنا.",
            "كثافة عالية من الجمعيات التعاونية تسمح بالوصول إلى عدد كبير من المزارعين."
          ],
          "photo": 1
        },
        {
          "head": "صعيد مصر",
          "metric": "≈ 16 مليون طن قصب سنويًا",
          "lines": [
            "قصب السكر مركّز في المنيا وقنا وأسوان، وهو أعلى المحاصيل استهلاكًا للماء.",
            "تبخر شديد وصيف يتجاوز 45 درجة: الفاقد بين ريّتين هو الأعلى في البلاد.",
            "مصانع السكر مشترٍ منظَّم، يسهّل اتفاقًا على مستوى منطقة كاملة."
          ],
          "photo": 5
        },
        {
          "head": "النوبارية وغرب الدلتا",
          "metric": "قطب تصدير الموالح والعنب",
          "lines": [
            "أراضٍ مستصلحة رملية: قدرة احتفاظ بالماء ضعيفة، وهي الحالة الأنسب لموادنا.",
            "مزارع تصدير كبيرة مجهّزة بالتنقيط والمحاور، وقرار شراء مركزي وسريع.",
            "المشترون الأوروبيون يطلبون شهادة عضوية سارية."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "كيف نعمل",
      "title": "انتشار على مراحل، مُقاس عند كل خطوة",
      "items": [
        {
          "head": "التشخيص",
          "body": "تحليل التربة وأسلوب الري والمحصول. لا التزام على الإطلاق في هذه المرحلة."
        },
        {
          "head": "قطعة تجريبية",
          "body": "تجربة مقارنة على قطعة واحدة، مع قطعة شاهدة تُدار بالطريقة نفسها."
        },
        {
          "head": "القياس",
          "body": "تسجيل الاستهلاك المائي والمحصول على دورة زراعية كاملة."
        },
        {
          "head": "التوسيع",
          "body": "تعميم تدريجي على باقي القطع بناءً على النتائج المسجَّلة فعليًا."
        }
      ],
      "note": "قاعدة الجرعة واحدة في كل مكان: 3 غرامات لكل لتر من التربة النافعة. ما يتغير من أرض إلى أخرى هو حجم التربة الذي تستكشفه الجذور فعليًا."
    },
    "risques": {
      "kicker": "ما ينبغي توقّعه",
      "title": "مخاطر محدّدة وردود عليها",
      "left": {
        "head": "المخاطر",
        "lines": [
          "تفتّت الحيازات في الوادي والدلتا: متوسط الحيازة أقل من فدانين، وقرار الشراء مشتّت.",
          "ماء الري متاح بتكلفة منخفضة جدًا للمزارع، ما يضعف الحافز المالي المباشر للتوفير.",
          "منافسة مواد رخيصة أساسها الصوديوم تركت انطباعًا سيئًا وأضرّت بتربة مالحة أصلًا.",
          "سيولة المزارع محدودة وتكلفة المستلزمات المستوردة مرتفعة بفعل تقلبات سعر الصرف."
        ]
      },
      "right": {
        "head": "الردود",
        "lines": [
          "المرور عبر الجمعيات التعاونية ومصانع السكر ومصدّري الموالح، لا عبر الحيازة الفردية.",
          "عرض المكسب على المحصول والجودة، لا على فاتورة الماء وحدها: الماء المتاح باستمرار يرفع الإنتاج.",
          "توثيق فارق التركيبة: بوتاسيوم لا صوديوم، ملائم للمحاصيل الغذائية وللتربة المالحة.",
          "توزيع الالتزام: مفعول يمتد 3 إلى 4 سنوات يوزّع التكلفة على عدة مواسم."
        ]
      },
      "note": "تحليل الأكريلاميد (مختبر Polymex، ISO 9001، بتركيز أقل من 3,0 ميكروغرام/غرام) وفحص REACH / SVHC (SGS) وشهادة SOHISCERT السارية حتى 4 سبتمبر 2027: متاحة جميعها عند الطلب."
    },
    "sources": [
      "الجهاز المركزي للتعبئة العامة والإحصاء: السكان والإنتاج الزراعي والتجارة الخارجية.",
      "وزارة الزراعة واستصلاح الأراضي: إحصاءات الصادرات الزراعية.",
      "وزارة الموارد المائية والري: الخطة القومية للموارد المائية.",
      "منظمة الأغذية والزراعة (FAOSTAT وAQUASTAT) والبنك الدولي (WDI).",
      "اتفاقية الأمم المتحدة لمكافحة التصحر، الجفاف بالأرقام 2022: ارتفاع عدد فترات الجفاف ومدتها 29٪ منذ 2000 مقارنة بـ1980–1999.",
      "الأمم المتحدة للمياه / أكواستات الفاو، مؤشر الهدف 6.4.2: تعريف الإجهاد المائي وحدوده."
    ],
    "closing": {
      "title": "احكِ لنا عن أرضك",
      "body": "المحصول، أسلوب الري، طبيعة التربة، كمية الماء المستهلكة اليوم. نعود إليك بتركيبة التقنيات المناسبة، والجرعات، والتجارب التي أُجريت في أوضاع مشابهة.\n\nأول تبادل لا يلزمك بشيء.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  },
  "espagne": {
    "slug": "espagne",
    "locale": "es-ES",
    "langue": "es",
    "pdf": "/documents/countries/espagne.pdf",
    "photos": 4,
    "credits": [
      {
        "titre": "Fields in Spring, Montferri.jpg",
        "auteur": "Galimatiasgg",
        "licence": "CC0",
        "source": "commons"
      },
      {
        "titre": "Olive trees almond trees near Arenas del Rey, Andalusia, Spain.jpg",
        "auteur": "Jebulon",
        "licence": "CC0",
        "source": "commons"
      },
      {
        "titre": "OrangeTreesPicassent.jpg",
        "auteur": "Raul2009",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Agricultura a la Ribera - 39.jpeg",
        "auteur": "User:Coentor",
        "licence": "CC BY-SA 1.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "ESTUDIO DE MERCADO",
      "title": "España",
      "officiel": "REINO DE ESPAÑA",
      "lieu": "Madrid · 2026",
      "subtitle": "Olivar, hortícola bajo plástico y cítricos con el mayor regadío de Europa.\nLo que cambia la hidrorretención donde el método de riego ya no deja margen."
    },
    "chiffres": {
      "kicker": "EL MERCADO EN RESUMEN",
      "title": "La huerta de Europa, sobre un recurso que se agota",
      "items": [
        {
          "value": "≈ 23,7 M ha",
          "label": "de superficie agrícola utilizada"
        },
        {
          "value": "≈ 3,9 M ha",
          "label": "de regadío, el parque más extenso de la Unión Europea"
        },
        {
          "value": "≈ 45 %",
          "label": "del aceite de oliva del mundo sale de España"
        },
        {
          "value": "≈ 60 %",
          "label": "del valor de la producción vegetal procede del regadío"
        }
      ],
      "note": "El regadío ocupa alrededor del 16 % de la superficie cultivada y genera cerca del 60 % del valor de la producción vegetal: la agricultura española que exporta es, casi en su totalidad, agricultura de riego. Esa concentración de valor sobre una fracción de la superficie es exactamente lo que vuelve crítico cada metro cúbico."
    },
    "contrainte": {
      "kicker": "LA RESTRICCIÓN",
      "title": "El método de riego ya está optimizado; el suelo no",
      "caption": "Olivar en la campiña andaluza",
      "bullets": [
        "España riega por goteo más de la mitad de su superficie regada, la proporción más alta de Europa: la vía de la eficiencia en la aplicación está prácticamente agotada.",
        "La agricultura concentra en torno al 80 % de la extracción de agua: cualquier tensión sobre el recurso se traduce primero en recortes de dotación.",
        "El gradiente de lluvia es extremo: más de 1 500 mm al año en la cornisa cantábrica, por debajo de 250 mm en el sureste peninsular.",
        "Entre 2022 y 2024, embalses de las cuencas del Guadalquivir y del interior de Cataluña operaron temporadas enteras por debajo de una cuarta parte de su capacidad, con dotaciones de riego recortadas o suspendidas.",
        "La respuesta pública —desalación, regeneración, modernización de regadíos, trasvases— actúa sobre la oferta. La hidrorretención actúa sobre la demanda, dentro de la parcela."
      ],
      "photo": 2
    },
    "stress": {
      "kicker": "SEQUÍA Y ESTRÉS HÍDRICO",
      "title": "La presión aumenta, pero el riesgo sigue siendo local",
      "type": "bar",
      "series": [
        {
          "name": "Índice mundial del número y duración de las sequías",
          "labels": [
            "1980–1999",
            "Desde 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Dos indicadores, no un atajo",
        "body": "A escala mundial, el número y la duración de las sequías han aumentado un 29 % desde 2000 frente a las dos décadas anteriores.\n\nEl estrés hídrico mide otra cosa: las extracciones respecto a los recursos renovables disponibles tras las necesidades ambientales. Esta señal mundial no es una previsión nacional; debe leerse con la lluvia, los acuíferos, las estaciones y los usos locales."
      }
    },
    "usages": {
      "kicker": "ADÓNDE VA EL AGUA",
      "title": "El regadío concentra cuatro quintas partes de la extracción",
      "type": "doughnut",
      "series": [
        {
          "name": "Extracción de agua",
          "labels": [
            "Agricultura",
            "Abastecimiento urbano",
            "Industria"
          ],
          "values": [
            80,
            13,
            7
          ]
        }
      ],
      "reading": {
        "head": "Lo que implica",
        "body": "Bajar un 10 % el consumo agrícola libera más volumen que suprimir por completo el uso industrial del país.\n\nPor eso el esfuerzo se concentra en la parcela, y no en los demás usos."
      }
    },
    "economie": {
      "kicker": "ECONOMÍA Y SEGURIDAD ALIMENTARIA",
      "title": "Un sector exportador que sostiene el medio rural",
      "items": [
        {
          "value": "≈ 70 000 M€",
          "label": "de exportaciones agroalimentarias en 2023"
        },
        {
          "value": "N.º 1",
          "label": "exportador mundial de aceite de oliva y de cítricos frescos"
        },
        {
          "value": "≈ 0,75 M",
          "label": "de personas ocupadas en la agricultura"
        },
        {
          "value": "≈ 2,5 %",
          "label": "del PIB procede de la agricultura, la ganadería y la pesca"
        }
      ],
      "note": "La sequía de 2022–2024 redujo a la mitad la cosecha de aceite en dos campañas seguidas y obligó a recortar las dotaciones de riego en cuencas como la del Guadalquivir y la del Segura. Los fondos europeos financian la modernización de regadíos, pero el agua disponible por hectárea sigue bajando."
    },
    "productions": {
      "kicker": "LOS CULTIVOS",
      "title": "Cinco producciones concentran el volumen",
      "type": "bar",
      "series": [
        {
          "name": "Producción anual (millones de toneladas)",
          "labels": [
            "Cereales*",
            "Hortalizas",
            "Aceituna*",
            "Cítricos",
            "Uva"
          ],
          "values": [
            20,
            14,
            6.5,
            6.5,
            6
          ]
        }
      ],
      "reading": {
        "head": "Lectura",
        "body": "* Cereal y aceituna son los dos rubros que más oscilan de una campaña a otra, porque dependen de la lluvia: la cosecha de aceituna de 2022/23 cayó a menos de la mitad de una campaña normal.\n\nHortalizas y cítricos se riegan en su práctica totalidad y se destinan a la exportación. Ahí el ahorro de agua se convierte directamente en margen."
      }
    },
    "filieres": [
      {
        "kicker": "PRIMER SECTOR",
        "title": "Olivar andaluz: la sequía se nota en la almazara",
        "caption": null,
        "bullets": [
          "Andalucía reúne la mayor parte del olivar español; Jaén y Córdoba son el corazón del aceite de oliva.",
          "La mayor parte del olivar tradicional es de secano: sin lluvia en primavera, la floración y el cuajado fallan.",
          "Las campañas 2022/23 y 2023/24 dejaron cosechas muy por debajo de la media y precios récord.",
          "El olivar intensivo y superintensivo depende del goteo, con dotaciones que se recortan en sequía.",
          "EVERGREEN® en la plantación o en la línea de goteo mantiene el agua en la zona radicular entre riegos."
        ],
        "photo": 3
      },
      {
        "kicker": "SEGUNDO SECTOR",
        "title": "Hortalizas de Almería y Murcia: cada metro cúbico cuenta",
        "caption": null,
        "bullets": [
          "El Campo de Dalías y el Campo de Cartagena abastecen a Europa de tomate, pimiento, pepino y lechuga casi todo el año.",
          "Los acuíferos están sobreexplotados y el trasvase Tajo-Segura se reduce: crece el uso de agua desalada y regenerada.",
          "El agua desalada es más cara: ahorrar agua por hectárea mejora directamente la cuenta del agricultor.",
          "La crisis del Mar Menor ha traído normas estrictas sobre fertilizantes y lixiviados en su entorno.",
          "NAPEMA® controla plagas sin residuos, en cultivos donde la lucha biológica ya es la norma."
        ],
        "photo": 0
      }
    ],
    "solutions": {
      "kicker": "NUESTRA RESPUESTA",
      "title": "Dos tecnologías para dos restricciones distintas",
      "left": {
        "head": "EVERGREEN® — retener el agua",
        "lines": [
          "Hidrorretenedor a base de potasio, incorporado en la zona radicular a la plantación o en la reposición de plantas.",
          "Capta el agua de lluvia o de riego y la devuelve a la planta de forma gradual, suprimiendo el estrés hídrico en las etapas críticas.",
          "Capacidad de absorción del orden de 300 veces su peso; efecto útil de 3 a 4 años en el suelo.",
          "Se degrada entre 20 y 25 % al año, sin acumulación ni riesgo de sobredosis."
        ]
      },
      "right": {
        "head": "ECOFERT® — nutrir sin agotar el suelo",
        "lines": [
          "Fertilizante en microdosis de aminoácidos, nitrógeno, fósforo y potasio, obtenido de recursos renovables.",
          "No quelante: no empobrece el complejo arcillo-húmico y no incrementa la salinidad ni el contenido de nitratos.",
          "Certificado por SOHISCERT, entidad andaluza, y conforme a la normativa europea de producción ecológica.",
          "De 1 a 4 frascos de 140 ml por hectárea, compatible con los equipos de fertirriego ya instalados."
        ]
      },
      "note": "Los dos productos se venden por separado, pero fueron concebidos para reforzarse: el hidrorretenedor prolonga la disponibilidad del agua y el fertilizante valoriza esa agua disponible sin degradar el suelo. En zona vulnerable a nitratos, el carácter no quelante y la microdosis del segundo importan tanto como el ahorro de agua del primero."
    },
    "economies": {
      "kicker": "ÓRDENES DE MAGNITUD",
      "title": "Ahorro de agua esperado según el método de riego",
      "type": "bar",
      "series": [
        {
          "name": "Rango bajo (%)",
          "labels": [
            "Goteo",
            "Microaspersión",
            "Pivote",
            "Gravedad"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Rango alto (%)",
          "labels": [
            "Goteo",
            "Microaspersión",
            "Pivote",
            "Gravedad"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Leer con prudencia",
        "body": "Estos rangos son indicativos y se apoyan en las ganancias documentadas de nuestros hidrorretenedores.\n\nEl resultado real depende del suelo, del clima y del cultivo. Estas cifras dan un orden de magnitud: en ningún caso constituyen un valor garantizado, contractual ni absoluto."
      }
    },
    "regions": {
      "kicker": "TRES ZONAS PRIORITARIAS",
      "title": "Dónde iniciar los primeros ensayos",
      "items": [
        {
          "head": "Jaén y Córdoba",
          "metric": "≈ 1,6 M ha de olivar en Andalucía",
          "lines": [
            "Mayor concentración de olivar del mundo, con buena parte aún en secano: el hidrorretenedor actúa donde no hay riego.",
            "Las campañas 2022/23 y 2023/24 mostraron lo que cuesta una floración sin agua.",
            "Tejido cooperativo denso: el ensayo se decide en grupo, no finca por finca."
          ],
          "photo": 3
        },
        {
          "head": "Murcia — Campo de Cartagena",
          "metric": "Hortícola de exportación",
          "lines": [
            "La huerta de exportación por excelencia, con dotaciones dependientes del trasvase Tajo-Segura y sometidas a recortes reiterados.",
            "El Mar Menor ha impuesto el marco regulatorio más estricto del país en materia de nitratos: reducir aportes sin perder rendimiento es la exigencia central.",
            "Riego localizado generalizado: el margen de ahorro ya no está en el método, sino en lo que el suelo es capaz de retener."
          ],
          "photo": 0
        },
        {
          "head": "Almería — Campo de Dalías",
          "metric": "≈ 33 000 ha de invernadero",
          "lines": [
            "La mayor superficie de cultivo bajo plástico del mundo, sobre acuíferos sobreexplotados y con intrusión salina en la franja costera.",
            "Ciclos cortos y rotaciones rápidas: el ensayo da resultado en una campaña, no en cuatro años.",
            "Compradores del norte de Europa que auditan la huella hídrica de sus proveedores y piden trazabilidad documental."
          ],
          "photo": 4
        }
      ]
    },
    "deploiement": {
      "kicker": "CÓMO TRABAJAMOS",
      "title": "Un despliegue por etapas, medido en cada paso",
      "items": [
        {
          "head": "Diagnóstico",
          "body": "Análisis del suelo, del método de riego y del cultivo. Sin compromiso en esta etapa."
        },
        {
          "head": "Parcela piloto",
          "body": "Un ensayo comparativo en una parcela, con parcela testigo conducida de forma idéntica."
        },
        {
          "head": "Medición",
          "body": "Registro de consumo de agua y de rendimiento durante un ciclo de cultivo completo."
        },
        {
          "head": "Extensión",
          "body": "Ampliación gradual a las demás parcelas sobre la base de los resultados constatados."
        }
      ],
      "note": "La regla de dosificación es la misma en todas partes: 3 gramos por litro de tierra útil. Lo que cambia de una finca a otra es el volumen de suelo que las raíces exploran realmente."
    },
    "risques": {
      "kicker": "LO QUE HAY QUE ANTICIPAR",
      "title": "Riesgos identificados y respuestas",
      "left": {
        "head": "Riesgos",
        "lines": [
          "Variabilidad entre campañas: un año lluvioso enmascara el interés del producto.",
          "Parque de riego ya muy tecnificado: el comprador pregunta qué aporta el producto por encima del goteo que ya tiene instalado.",
          "Marco europeo sobre microplásticos añadidos intencionadamente: cualquier polímero agrícola queda bajo escrutinio.",
          "Competencia de polímeros baratos a base de sodio, que dejaron mal recuerdo en suelos ya salinizados."
        ]
      },
      "right": {
        "head": "Respuestas",
        "lines": [
          "Conducir el ensayo sobre un ciclo completo con parcela testigo, para objetivar la ganancia incluso en año favorable.",
          "Medir el ahorro sobre el goteo mismo: la hidrorretención actúa en el suelo, no en el método de aplicación.",
          "Aportar la documentación de degradación —entre 20 y 25 % al año, sin acumulación— y el screening REACH / SVHC.",
          "Documentar la formulación: potasio y no sodio, compatible con cultivos alimentarios y con suelos salinos."
        ]
      },
      "note": "Análisis de acrilamida (laboratorio Polymex, ISO 9001, contenido inferior a 3,0 µg/g), screening REACH / SVHC (SGS) y certificado SOHISCERT vigente hasta el 4 de septiembre de 2027, disponibles a solicitud. SOHISCERT tiene su sede en Sevilla: el organismo que nos certifica es el mismo que audita a buena parte de sus vecinos."
    },
    "sources": [
      "INE: Contabilidad Nacional y Encuesta de Población Activa.",
      "Ministerio de Agricultura, Pesca y Alimentación: ESYRCE, anuario de estadística, comercio exterior agroalimentario.",
      "Confederaciones Hidrográficas del Guadalquivir y del Segura: dotaciones de riego.",
      "FAO (FAOSTAT, AQUASTAT) y Banco Mundial (WDI).",
      "UNCCD, Drought in Numbers 2022: número y duración de las sequías, +29 % desde 2000 frente a 1980–1999.",
      "ONU-Agua / FAO AQUASTAT, indicador ODS 6.4.2: definición y umbrales del estrés hídrico."
    ],
    "closing": {
      "title": "Cuéntenos cómo es su finca",
      "body": "Cultivo, método de riego, tipo de suelo, volumen de agua que consume hoy. Volvemos con la combinación de tecnologías correspondiente, las dosis y los ensayos ya realizados en situaciones comparables.\n\nUna primera conversación no compromete a nada.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suiza"
    }
  },
  "gabon": {
    "slug": "gabon",
    "locale": "fr-GA",
    "langue": "fr",
    "pdf": "/documents/countries/gabon.pdf",
    "photos": 4,
    "credits": [
      {
        "titre": "Plantation de feuilles de manioc.jpg",
        "auteur": "Estrella230",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Plantation d' une université.jpg",
        "auteur": "Estrella230",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Plantation de cannes à sucre.jpg",
        "auteur": "Estrella230",
        "licence": "CC BY 4.0",
        "source": "commons"
      },
      {
        "titre": "Plantation au quartier Melen.jpg",
        "auteur": "Estrella230",
        "licence": "CC BY 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Gabon",
      "officiel": "RÉPUBLIQUE GABONAISE",
      "lieu": "Libreville · 2026",
      "subtitle": "Vivrier, maraîchage péri-urbain et plantations industrielles sur sols lessivés.\nCe que l'hydro-rétention change quand la pluie s'arrête quatre mois."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Un pays forestier qui importe sa nourriture",
      "items": [
        {
          "value": "≈ 5 %",
          "label": "du PIB provient de l'agriculture"
        },
        {
          "value": "≈ 80 %",
          "label": "des produits alimentaires consommés sont importés"
        },
        {
          "value": "≈ 25 %",
          "label": "de la population active vit du secteur agricole"
        },
        {
          "value": "≈ 1 800 mm",
          "label": "de pluie par an, mais concentrés sur huit mois"
        }
      ],
      "note": "Moins de 2 % du territoire est cultivé, alors que la forêt en couvre près de 88 %. La réduction de la facture alimentaire est un objectif public constant depuis dix ans : elle suppose de sécuriser des rendements sur des sols pauvres, avec très peu d'irrigation installée."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Beaucoup de pluie, des sols qui ne la retiennent pas",
      "caption": "Parcelle vivrière en lisière de forêt",
      "bullets": [
        "Le pays reçoit de 1 500 à 3 000 mm de pluie par an, mais la grande saison sèche court de juin à septembre : trois à quatre mois quasiment sans précipitations sur la côte et le nord.",
        "Les sols ferralitiques du littoral et les sables des plateaux Batéké retiennent peu l'eau : une averse forte percole sous la zone racinaire en quelques heures.",
        "Cette percolation lessive aussi les éléments nutritifs. Les sols sont acides, pauvres en matière organique, et la fertilisation classique s'y dilue rapidement.",
        "Hors plantations industrielles, la production vivrière est presque entièrement pluviale : la campagne s'interrompt quand la pluie s'arrête.",
        "La contrainte n'est donc pas le volume d'eau reçu, mais sa disponibilité dans la zone racinaire au moment où la plante en a besoin. C'est précisément ce que corrige l'hydro-rétention."
      ],
      "photo": 2
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'agriculture n'est pas le premier usage de l'eau",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            40,
            50,
            10
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Le Gabon n'est pas en pénurie d'eau : la ressource est abondante et l'agriculture n'en prélève qu'une part limitée.\n\nL'argument n'est donc pas d'économiser un volume national, mais de maintenir l'eau disponible à la racine pendant la saison sèche, et de réduire le coût du pompage."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "Une économie pétrolière qui veut nourrir ses villes",
      "items": [
        {
          "value": "≈ 90 %",
          "label": "de la population vit en ville, près de la moitié à Libreville"
        },
        {
          "value": "≈ 88 %",
          "label": "du territoire couvert par la forêt"
        },
        {
          "value": "≈ 500 Md",
          "label": "de francs CFA d'importations alimentaires par an"
        },
        {
          "value": "2014",
          "label": "lancement du programme GRAINE de relance agricole"
        }
      ],
      "note": "Le pétrole, le manganèse et le bois font l'essentiel des exportations, tandis que l'assiette des Gabonais vient largement de l'étranger. Les plans de diversification et le programme GRAINE misent sur une agriculture vivrière et périurbaine capable de réduire cette dépendance."
    },
    "productions": {
      "kicker": "LES FILIÈRES",
      "title": "Cinq productions structurent l'offre nationale",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (milliers de tonnes)",
          "labels": [
            "Manioc",
            "Banane plantain",
            "Canne à sucre",
            "Huile de palme",
            "Caoutchouc"
          ],
          "values": [
            330,
            300,
            250,
            80,
            30
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Manioc et banane plantain forment la base alimentaire, cultivés en petites parcelles pluviales.\n\nHuile de palme, canne et hévéa sont conduits en plantations industrielles, sur des périmètres suivis et équipés : ce sont les interlocuteurs les plus rapides à convaincre par la mesure."
      }
    },
    "filieres": [
      {
        "kicker": "PREMIÈRE FILIÈRE",
        "title": "Banane plantain et manioc : la base de l'assiette",
        "caption": null,
        "bullets": [
          "Manioc et banane plantain sont les deux aliments de base, cultivés surtout en petites parcelles familiales.",
          "Les sols ferralitiques, lessivés par les fortes pluies, retiennent mal l'eau et les éléments nutritifs.",
          "La saison sèche, de juin à septembre, suffit à faire chuter la production des parcelles non arrosées.",
          "Une part importante de la banane plantain vendue à Libreville arrive encore du Cameroun.",
          "EVERGREEN® à la plantation garde l'humidité au pied pendant la saison sèche ; ECOFERT® apporte ce que la pluie emporte."
        ],
        "photo": 6
      },
      {
        "kicker": "DEUXIÈME FILIÈRE",
        "title": "Maraîchage autour de Libreville : produire là où l'on mange",
        "caption": null,
        "bullets": [
          "Tomates, piments, oseille et légumes-feuilles sont cultivés en ceinture de Libreville, d'Owendo et de Ntoum.",
          "Les légumes importés arrivent chers et souvent abîmés : la production locale a un marché immédiat.",
          "Sur sol sableux ou très lessivé, l'arrosage manuel ne suffit plus dès que la pluie s'interrompt quelques jours.",
          "Les maladies fongiques profitent de l'humidité : NAPEMA® les traite sans résidu sur des légumes vendus frais.",
          "Retenir l'eau au niveau des racines réduit les arrosages et stabilise les récoltes entre deux pluies."
        ],
        "photo": 5
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Retenir l'eau, nourrir sans lessiver",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui lisse l'écart entre une averse tropicale et quatre mois sans pluie.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà fragile sur sols ferralitiques acides.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières palme et hévéa exportatrices.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans ajouter à la charge saline d'un sol déjà lessivé."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'arrosage",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Micro-aspersion",
            "Aspersion",
            "Arrosage manuel"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Micro-aspersion",
            "Aspersion",
            "Arrosage manuel"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Estuaire — Libreville",
          "metric": "≈ 900 000 consommateurs",
          "lines": [
            "Ceinture maraîchère de Ntoum et Kango, qui approvisionne la capitale toute l'année.",
            "Sols sableux littoraux, arrosage manuel ou goutte-à-goutte : l'eau y coûte cher en main-d'œuvre.",
            "Cultures à cycle court et à forte valeur, où un essai se conclut en une saison."
          ],
          "photo": 1
        },
        {
          "head": "Woleu-Ntem — Oyem",
          "metric": "Premier bassin vivrier",
          "lines": [
            "Manioc, banane plantain et arachide sur de petites parcelles familiales, presque toutes pluviales.",
            "Cacaoyers et caféiers en replantation, cultures pérennes où l'effet de 3 à 4 ans est décisif à la reprise.",
            "Coopératives déjà structurées : la décision d'achat peut être groupée."
          ],
          "photo": 4
        },
        {
          "head": "Ngounié — Mouila",
          "metric": "≈ 40 000 ha de palmier",
          "lines": [
            "Plantations industrielles de palmier à huile, suivies agronomiquement bloc par bloc.",
            "Forte mortalité des jeunes plants en saison sèche : l'hydro-rétenteur se juge au taux de reprise.",
            "Volumes contractualisables et protocole d'essai facile à tenir sur un bloc homogène."
          ],
          "photo": 5
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de reprise, de consommation et de rendement à cheval sur la saison sèche."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Marché intérieur étroit : environ 2,4 millions d'habitants et des exploitations vivrières de très petite taille.",
          "Logistique intérieure difficile en saison des pluies, qui renchérit la distribution hors des axes principaux.",
          "Pluviométrie abondante : un essai conduit hors saison sèche masque l'intérêt du produit.",
          "Produit peu connu, parfois confondu avec les polymères à base de sodium vendus en jardinerie."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Concentrer les premiers volumes sur les plantations industrielles et les coopératives maraîchères péri-urbaines.",
          "Grouper les commandes sur un conteneur via le port d'Owendo, avec un stock tampon à Libreville.",
          "Programmer systématiquement l'essai de mai à octobre, pour couvrir la grande saison sèche.",
          "Documenter la formulation potassique, sans sodium, compatible avec les cultures alimentaires."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "Direction générale de la statistique : comptes nationaux, commerce extérieur.",
      "Ministère de l'Agriculture : programme GRAINE, statistiques agricoles.",
      "Banque africaine de développement : profil agricole du Gabon.",
      "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "grece": {
    "slug": "grece",
    "locale": "el-GR",
    "langue": "el",
    "pdf": "/documents/countries/grece.pdf",
    "photos": 9,
    "credits": [
      {
        "titre": "Lavandula fields.jpg",
        "auteur": "Neptuul",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Corfu olive grove bgiu.jpg",
        "auteur": "Bogdan Giuşcă",
        "licence": "CC BY-SA 2.5",
        "source": "commons"
      },
      {
        "titre": "1.The olive grove.jpg",
        "auteur": "Freideriki Dionysopoulou",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "10. Rainbow in olive grove.jpg",
        "auteur": "Freideriki Dionysopoulou",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Olive Grove (158100468).jpg",
        "auteur": "Alastair Rae from London, United Kingdom",
        "licence": "CC BY-SA 2.0",
        "source": "commons"
      },
      {
        "titre": "Olive grove - panoramio.jpg",
        "auteur": "vitsoft",
        "licence": "CC BY 3.0",
        "source": "commons"
      },
      {
        "titre": "Keri Peninsula with olive groves and view into Keri Bay.jpg",
        "auteur": "Jimzoun",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Olive grove with grazing sheep - panoramio.jpg",
        "auteur": "macrolepis",
        "licence": "CC BY 3.0",
        "source": "commons"
      },
      {
        "titre": "Olive grove, Amoudi IMG 6928 - panoramio.jpg",
        "auteur": "Paul Lakin",
        "licence": "CC BY 3.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "ΜΕΛΕΤΗ ΑΓΟΡΑΣ",
      "title": "Ελλάδα",
      "officiel": "ΕΛΛΗΝΙΚΗ ΔΗΜΟΚΡΑΤΙΑ",
      "lieu": "Αθήνα · 2026",
      "subtitle": "Ελαιόλαδο, βαμβάκι, αμπέλι και οπωροφόρα με όλο και λιγότερο νερό.\nΤι αλλάζει η συγκράτηση νερού στο έδαφος σε μια εξαγωγική γεωργία."
    },
    "chiffres": {
      "kicker": "Η ΑΓΟΡΑ ΣΥΝΟΠΤΙΚΑ",
      "title": "Μια εξαγωγική γεωργία που εξαρτάται από το νερό",
      "items": [
        {
          "value": "≈ 4 %",
          "label": "του ΑΕΠ προέρχεται από τη γεωργία"
        },
        {
          "value": "> 80 %",
          "label": "της ευρωπαϊκής παραγωγής βαμβακιού"
        },
        {
          "value": "≈ 1,2 εκατ. ha",
          "label": "αρδευόμενης γης"
        },
        {
          "value": "≈ 83 %",
          "label": "των αντλήσεων νερού πηγαίνουν στη γεωργία"
        }
      ],
      "note": "Η Ελλάδα είναι από τους μεγαλύτερους παραγωγούς ελαιολάδου στον κόσμο και ο πρώτος παραγωγός βαμβακιού της Ευρωπαϊκής Ένωσης. Οι εκμεταλλεύσεις είναι μικρές και κατακερματισμένες, και η παραγωγή εξαρτάται όλο και περισσότερο από την άρδευση σε καλοκαίρια με καύσωνες και ξηρασία."
    },
    "contrainte": {
      "kicker": "Ο ΠΕΡΙΟΡΙΣΜΟΣ",
      "title": "Περισσότερη ζέστη, λιγότερη βροχή, πιεσμένοι υδροφορείς",
      "caption": null,
      "bullets": [
        "Η βροχή πέφτει κυρίως τον χειμώνα, ενώ οι καλλιέργειες τη χρειάζονται το καλοκαίρι, όταν η θερμοκρασία ξεπερνά συχνά τους 40 °C.",
        "Στη Θεσσαλία οι αντλήσεις για άρδευση ξεπερνούν εδώ και χρόνια την ανανέωση των υπόγειων νερών, και η στάθμη τους πέφτει.",
        "Οι ταμιευτήρες υποχωρούν σε χρονιές ξηρασίας: ο Μόρνος, που υδροδοτεί την Αθήνα, έφτασε το 2025 σε ιστορικά χαμηλά επίπεδα.",
        "Μετά την κακοκαιρία Daniel το 2023, μεγάλο μέρος της θεσσαλικής πεδιάδας έχασε έδαφος, υποδομές και παραγωγή.",
        "Τα έργα αποθήκευσης και επαναχρησιμοποίησης νερού δρουν στην προσφορά· η συγκράτηση νερού στο έδαφος δρα στη ζήτηση, στη ρίζα."
      ],
      "photo": 2
    },
    "stress": {
      "kicker": "ΞΗΡΑΣΙΑ ΚΑΙ ΥΔΑΤΙΚΗ ΠΙΕΣΗ",
      "title": "Η πίεση αυξάνεται, αλλά ο κίνδυνος παραμένει τοπικός",
      "type": "bar",
      "series": [
        {
          "name": "Παγκόσμιος δείκτης αριθμού και διάρκειας ξηρασιών",
          "labels": [
            "1980–1999",
            "Από το 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Δύο διαφορετικοί δείκτες",
        "body": "Παγκοσμίως, ο αριθμός και η διάρκεια των ξηρασιών αυξήθηκαν κατά 29% από το 2000 σε σύγκριση με τις δύο προηγούμενες δεκαετίες.\n\nΗ υδατική πίεση μετρά κάτι διαφορετικό: τις απολήψεις ως ποσοστό των ανανεώσιμων πόρων μετά τις περιβαλλοντικές ανάγκες. Το παγκόσμιο σήμα δεν είναι εθνική πρόβλεψη· διαβάζεται μαζί με τις τοπικές βροχές, τους υδροφορείς, τις εποχές και τις χρήσεις."
      }
    },
    "usages": {
      "kicker": "ΠΟΥ ΠΗΓΑΙΝΕΙ ΤΟ ΝΕΡΟ",
      "title": "Η άρδευση παίρνει οκτώ λίτρα στα δέκα",
      "type": "doughnut",
      "series": [
        {
          "name": "Αντλήσεις νερού",
          "labels": [
            "Γεωργία",
            "Ύδρευση",
            "Βιομηχανία"
          ],
          "values": [
            83,
            14,
            3
          ]
        }
      ],
      "reading": {
        "head": "Τι σημαίνει αυτό",
        "body": "Μείωση 10 % της ζήτησης για άρδευση εξοικονομεί πολύ περισσότερο νερό από όσο καταναλώνει όλη η βιομηχανία.\n\nΓι' αυτό η προσπάθεια αφορά πρώτα το χωράφι."
      }
    },
    "economie": {
      "kicker": "ΟΙΚΟΝΟΜΙΑ ΚΑΙ ΕΠΙΣΙΤΙΣΤΙΚΗ ΑΣΦΑΛΕΙΑ",
      "title": "Ισχυρές εξαγωγές, ευάλωτη παραγωγή",
      "items": [
        {
          "value": "Top 5",
          "label": "παραγωγοί ελαιολάδου στον κόσμο"
        },
        {
          "value": "≈ 8 δισ. €",
          "label": "εξαγωγές αγροτικών προϊόντων και τροφίμων τον χρόνο"
        },
        {
          "value": "≈ 530 χιλ.",
          "label": "γεωργικές εκμεταλλεύσεις, με μέσο μέγεθος κάτω από 7 ha"
        }
      ],
      "note": "Οι εξαγωγές στηρίζονται στο ελαιόλαδο, τις επιτραπέζιες ελιές, τη φέτα, τα φρούτα και το βαμβάκι. Η Κοινή Αγροτική Πολιτική χρηματοδοτεί εκσυγχρονισμό και εξοικονόμηση νερού, αλλά οι μικρές εκμεταλλεύσεις επενδύουν μόνο όταν το όφελος μετριέται στο χωράφι."
    },
    "productions": {
      "kicker": "ΟΙ ΚΑΛΛΙΕΡΓΕΙΕΣ",
      "title": "Τέσσερις καλλιέργειες κρατούν τον όγκο και την αξία",
      "type": "bar",
      "series": [
        {
          "name": "Ετήσια παραγωγή (εκατ. τόνοι)",
          "labels": [
            "Ελιές*",
            "Πορτοκάλια",
            "Βαμβάκι σύσπορο",
            "Σταφύλια"
          ],
          "values": [
            2,
            0.9,
            0.85,
            0.85
          ]
        }
      ],
      "reading": {
        "head": "Ανάγνωση",
        "body": "Η ελιά κυριαρχεί σε έκταση και αξία, από την Κρήτη ως την Πελοπόννησο και τα Ιόνια νησιά.\n\n* Η παραγωγή ελιάς αλλάζει έντονα από χρονιά σε χρονιά, με τον καιρό και την παρενιαυτοφορία. Στρογγυλεμένες τιμές."
      }
    },
    "filieres": [
      {
        "kicker": "ΚΥΡΙΟΣ ΤΟΜΕΑΣ",
        "title": "Ελαιόλαδο: υψηλή αξία, όλο και πιο ευάλωτη σοδειά",
        "caption": null,
        "bullets": [
          "Οι ελαιώνες καλύπτουν μεγάλο μέρος της γεωργικής γης, από την Κρήτη και την Πελοπόννησο ως τα Ιόνια νησιά.",
          "Οι περισσότεροι παραδοσιακοί ελαιώνες δεν αρδεύονται: ένας ξηρός χειμώνας και ένας ανοιξιάτικος καύσωνας μειώνουν την ανθοφορία και την καρπόδεση.",
          "Οι τιμές του ελαιολάδου έφτασαν σε ιστορικά υψηλά μετά τις κακές σοδειές στη Μεσόγειο το 2022–2024.",
          "Οι νέοι πυκνοί ελαιώνες αρδεύονται με στάγδην και εξαρτώνται από νερό που σπανίζει όλο και περισσότερο.",
          "Το EVERGREEN® στη φύτευση ή στη γραμμή στάγδην κρατά το νερό στη ζώνη των ριζών ανάμεσα στις αρδεύσεις."
        ],
        "photo": 7
      }
    ],
    "solutions": {
      "kicker": "Η ΑΠΑΝΤΗΣΗ ΜΑΣ",
      "title": "Δύο τεχνολογίες για δύο διαφορετικούς περιορισμούς",
      "left": {
        "head": "EVERGREEN® — συγκράτηση νερού",
        "lines": [
          "Υδροσυγκρατητής με βάση το κάλιο, που τοποθετείται στη ζώνη των ριζών κατά τη φύτευση ή την ανανέωση.",
          "Συγκρατεί το νερό της βροχής ή της άρδευσης και το αποδίδει σταδιακά, περιορίζοντας την υδατική καταπόνηση.",
          "Απορροφά περίπου 300 φορές το βάρος του· ωφέλιμη διάρκεια δράσης 3 έως 4 χρόνια στο έδαφος.",
          "Αποικοδομείται κατά 20 έως 25 % τον χρόνο, χωρίς συσσώρευση και χωρίς κίνδυνο υπερδοσολογίας."
        ]
      },
      "right": {
        "head": "ECOFERT® — θρέψη χωρίς εξάντληση",
        "lines": [
          "Λίπασμα σε μικροδόσεις αμινοξέων, αζώτου, φωσφόρου και καλίου, από ανανεώσιμες πηγές.",
          "Μη χηλικό: δεν εξαντλεί το αργιλοχουμικό σύμπλοκο και δεν αυξάνει την αλατότητα ούτε τα νιτρικά.",
          "Πιστοποιημένο από SOHISCERT και με το ευρωπαϊκό σήμα βιολογικής γεωργίας, σε χρήση σε 60 χώρες.",
          "1 έως 4 φιάλες των 140 ml ανά εκτάριο, συμβατό με τα υπάρχοντα συστήματα υδρολίπανσης."
        ]
      },
      "note": "Τα δύο προϊόντα πωλούνται χωριστά, αλλά σχεδιάστηκαν για να λειτουργούν μαζί: ο υδροσυγκρατητής παρατείνει τη διαθεσιμότητα του νερού και το λίπασμα την αξιοποιεί χωρίς να υποβαθμίζει το έδαφος."
    },
    "economies": {
      "kicker": "ΤΑΞΕΙΣ ΜΕΓΕΘΟΥΣ",
      "title": "Αναμενόμενη εξοικονόμηση νερού ανά μέθοδο άρδευσης",
      "type": "bar",
      "series": [
        {
          "name": "Κατώτατο όριο (%)",
          "labels": [
            "Στάγδην",
            "Μικροεκτοξευτές",
            "Καταιονισμός",
            "Κατάκλυση"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "Ανώτατο όριο (%)",
          "labels": [
            "Στάγδην",
            "Μικροεκτοξευτές",
            "Καταιονισμός",
            "Κατάκλυση"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Να διαβάζονται με προσοχή",
        "body": "Τα εύρη είναι ενδεικτικά και βασίζονται στα τεκμηριωμένα αποτελέσματα των υδροσυγκρατητών μας.\n\nΤο πραγματικό αποτέλεσμα εξαρτάται από το έδαφος, το κλίμα και την καλλιέργεια. Δίνουν μια τάξη μεγέθους και σε καμία περίπτωση δεν αποτελούν εγγυημένη, συμβατική ή απόλυτη τιμή."
      }
    },
    "regions": {
      "kicker": "ΤΡΕΙΣ ΠΕΡΙΟΧΕΣ ΠΡΟΤΕΡΑΙΟΤΗΤΑΣ",
      "title": "Πού να γίνουν οι πρώτες δοκιμές",
      "items": [
        {
          "head": "Θεσσαλία",
          "metric": "Βαμβάκι και σιτηρά",
          "lines": [
            "Η μεγαλύτερη πεδιάδα της χώρας, με εντατική άρδευση βαμβακιού από γεωτρήσεις.",
            "Πτώση της στάθμης των υπόγειων νερών και ζημιές από την κακοκαιρία Daniel.",
            "Μεγάλοι αγροτικοί συνεταιρισμοί, ικανοί να παρακολουθήσουν μια δοκιμή."
          ],
          "photo": 3
        },
        {
          "head": "Μεσσηνία",
          "metric": "Ελαιώνες Καλαμάτας",
          "lines": [
            "Ελαιώνες υψηλής αξίας, πολλοί χωρίς άρδευση, εκτεθειμένοι σε καύσωνες.",
            "Το 2021 η ζέστη της άνοιξης μείωσε σημαντικά την παραγωγή της περιοχής.",
            "Νέες φυτεύσεις και ανανεώσεις: η κατάλληλη στιγμή για τον υδροσυγκρατητή."
          ],
          "photo": 1
        },
        {
          "head": "Κρήτη",
          "metric": "Ελιά, αμπέλι, θερμοκήπια",
          "lines": [
            "Ξηρά καλοκαίρια και υδροφορείς υπό πίεση, ιδίως στην ανατολική Κρήτη.",
            "Θερμοκήπια στην Ιεράπετρα και ελαιώνες σε όλο το νησί.",
            "Παραγωγοί εξοικειωμένοι με τη στάγδην άρδευση και τις πιστοποιήσεις εξαγωγής."
          ],
          "photo": 5
        }
      ]
    },
    "deploiement": {
      "kicker": "ΠΩΣ ΔΟΥΛΕΥΟΥΜΕ",
      "title": "Σταδιακή εφαρμογή, με μέτρηση σε κάθε βήμα",
      "items": [
        {
          "head": "Διάγνωση",
          "body": "Ανάλυση εδάφους, μεθόδου άρδευσης και καλλιέργειας. Καμία δέσμευση σε αυτό το στάδιο."
        },
        {
          "head": "Δοκιμή",
          "body": "Συγκριτική δοκιμή σε ένα αγροτεμάχιο, με μάρτυρα που καλλιεργείται με τον ίδιο τρόπο."
        },
        {
          "head": "Μέτρηση",
          "body": "Καταγραφή κατανάλωσης νερού και απόδοσης σε μια πλήρη καλλιεργητική περίοδο."
        },
        {
          "head": "Επέκταση",
          "body": "Σταδιακή εφαρμογή στα υπόλοιπα αγροτεμάχια, με βάση τα μετρημένα αποτελέσματα."
        }
      ],
      "note": "Ο κανόνας δοσολογίας είναι παντού ο ίδιος: 3 γραμμάρια ανά λίτρο ωφέλιμου εδάφους. Αυτό που αλλάζει από χωράφι σε χωράφι είναι ο όγκος εδάφους που εξερευνούν πραγματικά οι ρίζες."
    },
    "risques": {
      "kicker": "ΤΙ ΠΡΕΠΕΙ ΝΑ ΠΡΟΒΛΕΦΘΕΙ",
      "title": "Κίνδυνοι και απαντήσεις",
      "left": {
        "head": "Κίνδυνοι",
        "lines": [
          "Μικρές και κατακερματισμένες εκμεταλλεύσεις, με περιορισμένη δυνατότητα επένδυσης.",
          "Μια βροχερή χρονιά αρκεί για να κρύψει την αξία του προϊόντος.",
          "Καταχώριση λιπασμάτων και εδαφοβελτιωτικών πριν από την εμπορική διάθεση.",
          "Κακή φήμη φθηνών πολυμερών με βάση το νάτριο."
        ]
      },
      "right": {
        "head": "Απαντήσεις",
        "lines": [
          "Συνεργασία με συνεταιρισμούς και ομάδες παραγωγών για ομαδικές αγορές.",
          "Δοκιμή σε πλήρη περίοδο με μάρτυρα, ώστε το όφελος να μετριέται και σε καλή χρονιά.",
          "Προετοιμασία του φακέλου καταχώρισης παράλληλα με τις πρώτες δοκιμές.",
          "Τεκμηρίωση της σύνθεσης: κάλιο, ποτέ νάτριο, συμβατό με τροφικές καλλιέργειες."
        ]
      },
      "note": "Ανάλυση ακρυλαμιδίου (εργαστήριο Polymex, ISO 9001, περιεκτικότητα κάτω από 3,0 µg/g) και έλεγχος REACH / SVHC (SGS) διαθέσιμα κατόπιν αιτήματος, μαζί με το πιστοποιητικό SOHISCERT σε ισχύ έως τις 4 Σεπτεμβρίου 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022: αριθμός και διάρκεια ξηρασιών, +29% από το 2000 έναντι 1980–1999.",
      "UN-Water / FAO AQUASTAT, δείκτης ΣΒΑ 6.4.2: ορισμός και όρια υδατικής πίεσης."
    ],
    "closing": {
      "title": "Πείτε μας για το χωράφι σας",
      "body": "Καλλιέργεια, μέθοδος άρδευσης, τύπος εδάφους, όγκος νερού που χρησιμοποιείτε σήμερα. Επιστρέφουμε με τον κατάλληλο συνδυασμό τεχνολογιών, τις δόσεις και τις δοκιμές που έχουν ήδη γίνει σε παρόμοιες συνθήκες.\n\nΜια πρώτη συζήτηση δεν σας δεσμεύει σε τίποτα.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Ελβετία"
    }
  },
  "guadeloupe": {
    "slug": "guadeloupe",
    "locale": "fr-GP",
    "langue": "fr",
    "pdf": null,
    "photos": 0,
    "credits": null,
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Guadeloupe",
      "officiel": "RÉGION GUADELOUPE",
      "lieu": "Basse-Terre · 2026",
      "subtitle": "Une île tropicale qui manque d'eau : 60 % de l'eau potable perdue dans un réseau qui fuit, une sécheresse qui s'ajoute par-dessus.\nCe que l'hydro-rétention change quand chaque litre retenu au champ est un litre qui n'a pas à transiter par le réseau."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Une agriculture tropicale, un réseau d'eau à bout de souffle",
      "items": [
        {
          "value": "≈ 384 000",
          "label": "habitants (2023), population en léger recul"
        },
        {
          "value": "60 %",
          "label": "de l'eau potable perdue avant d'arriver au robinet, à cause des fuites du réseau"
        },
        {
          "value": "-75 %",
          "label": "de déficit de pluie sur la Grande-Terre en juin 2026, deuxième juin le plus sec depuis 1991"
        },
        {
          "value": "1 hab./4",
          "label": "n'a pas l'eau au robinet tous les jours, hors même tout épisode de sécheresse"
        }
      ],
      "note": "La Guadeloupe cumule deux crises de l'eau distinctes : une sécheresse climatique qui s'aggrave, et un réseau de distribution vieillissant qui perd plus de la moitié de l'eau potable produite avant qu'elle n'atteigne un robinet. Les autorités locales ont dû imposer des tours d'eau — des coupures tournantes — dès juillet 2026."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Climat tropical, mais l'eau ne suit plus",
      "caption": null,
      "bullets": [
        "Le déficit de pluie n'est pas anecdotique : jusqu'à -75 % sur la Grande-Terre en juin 2026, dans un contexte de Super El Niño qui touche l'ensemble de l'Atlantique.",
        "Le réseau public perd environ 60 % de l'eau potable qu'il produit avant qu'elle n'arrive chez l'usager : la ressource se perd autant dans les canalisations qu'au champ.",
        "Les cultures d'exportation historiques — banane, canne à sucre — sont directement affectées : la campagne de replantation de la canne a été compromise par la sécheresse de 2026.",
        "La qualité de l'eau se dégrade en parallèle : moins de 30 % des sites en rivière sont d'excellente qualité, ce qui limite aussi les prélèvements agricoles en aval.",
        "Sur une île volcanique aux reliefs marqués, la capacité de stockage est structurellement limitée : il n'y a pas de grand réservoir capable d'absorber plusieurs mois de déficit."
      ],
      "photo": 1
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": null,
    "economie": {
      "kicker": "ÉCONOMIE AGRICOLE",
      "title": "Banane et canne à sucre, deux filières d'export sous tension",
      "items": [
        {
          "value": "60 %",
          "label": "de l'eau potable perdue dans le réseau avant d'arriver au robinet"
        },
        {
          "value": "29,4 %",
          "label": "seulement des sites en rivière jugés d'excellente qualité"
        },
        {
          "value": "2026",
          "label": "campagne de replantation de la canne compromise par la sécheresse"
        },
        {
          "value": "UGPBAN",
          "label": "l'union de producteurs qui commercialise la banane des Antilles françaises"
        }
      ],
      "note": "La banane et la canne à sucre restent les deux piliers de l'agriculture d'exportation guadeloupéenne, commercialisées via des structures collectives établies (UGPBAN pour la banane, filière sucre-rhum pour la canne). La crise de l'eau de 2026 touche les deux filières en même temps : la sécheresse au champ, les fuites dans le réseau."
    },
    "productions": null,
    "filieres": [
      {
        "kicker": "FILIÈRE PHARE",
        "title": "Banane et canne : deux cultures qui encaissent le déficit hydrique",
        "caption": null,
        "bullets": [
          "La banane, principale culture d'export de l'île, est sensible à tout déficit hydrique prolongé, en particulier sur les parcelles les moins bien exposées.",
          "La canne à sucre, conduite pour l'essentiel vers l'industrie sucrière, a vu sa campagne de replantation 2026 directement compromise par le manque de pluie.",
          "Les deux filières sont structurées autour d'organisations de producteurs, ce qui facilite un essai groupé plutôt qu'exploitation par exploitation.",
          "Le maraîchage de diversification, plus fragile en trésorerie, est le segment où un gain d'eau se traduit le plus vite en résultat visible.",
          "Sur ces cultures, EVERGREEN® se teste en une saison ; la canne, cultivée sur plusieurs cycles, demande un suivi sur au moins une replantation complète."
        ],
        "photo": 2
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Retenir l'eau à la parcelle, avant qu'elle ne se perde",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement : un levier qui ne dépend pas de la pression du réseau public.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique des sols déjà sollicités par la banane et la canne.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — un atout pour des filières d'export déjà très réglementées.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Sur une île où l'eau se perd autant dans le réseau qu'au champ, l'intérêt de nos deux produits n'est pas seulement agronomique : c'est de rendre chaque exploitation moins dépendante d'une ressource publique déjà sous tension."
    },
    "economies": null,
    "regions": null,
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de levée, de consommation d'eau et de rendement sur une campagne complète."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Filières banane et canne déjà structurées autour de coopératives (UGPBAN, SICA Canne-Union), avec des pratiques établies.",
          "Pression foncière forte : peu de surfaces disponibles pour de nouveaux essais à grande échelle.",
          "Une bonne saison des pluies peut masquer temporairement l'intérêt du produit auprès des exploitants.",
          "Contexte réglementaire européen (DOM) : toute homologation d'intrant doit s'instruire selon les règles applicables en France et dans l'UE."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Passer par les coopératives et interprofessions déjà en place plutôt que par l'exploitant isolé.",
          "Documenter le lien direct entre le gain d'eau retenue et la crise du réseau, un argument concret pour les exploitants.",
          "Mesurer sur une campagne complète avec parcelle témoin, y compris lors d'une saison plus arrosée.",
          "Vérifier au cas par cas le statut réglementaire des produits en France métropolitaine et dans les DOM avant toute commercialisation."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "haiti": {
    "slug": "haiti",
    "locale": "fr-HT",
    "langue": "fr",
    "pdf": "/documents/countries/haiti.pdf",
    "photos": 3,
    "credits": [
      {
        "titre": "Fish Farm (5683723189).jpg",
        "auteur": "USAID U.S. Agency for International Development",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Agriculture Training Center (5683690897).jpg",
        "auteur": "USAID U.S. Agency for International Development",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "Mountainous Farming Plots Haiti.jpg",
        "auteur": "Jlanghurst",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Haïti",
      "officiel": "RÉPUBLIQUE D'HAÏTI",
      "lieu": "Port-au-Prince · 2026",
      "subtitle": "Vivrier, riz irrigué et cultures de rente sur des sols en érosion.\nCe que l'hydro-rétention change là où la pluie ruisselle au lieu d'entrer."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Une agriculture qui fait vivre la moitié du pays",
      "items": [
        {
          "value": "≈ 20 %",
          "label": "du PIB provient de l'agriculture"
        },
        {
          "value": "≈ 50 %",
          "label": "de la population active travaille la terre"
        },
        {
          "value": "≈ 1 M ha",
          "label": "de surface cultivée, très morcelée"
        },
        {
          "value": "≈ 0,7 ha",
          "label": "de surface moyenne par exploitation"
        }
      ],
      "note": "L'agriculture haïtienne est d'abord vivrière et conduite sur de très petites parcelles, souvent en pente. Elle ne couvre plus qu'une part de la consommation nationale : près de la moitié des besoins alimentaires est importée, dont l'essentiel du riz. Regagner du rendement à la parcelle a ici une portée qui dépasse l'exploitation."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Il pleut assez, mais l'eau ne reste pas",
      "caption": "Versants cultivés, Haïti",
      "bullets": [
        "La pluviométrie est abondante — de 1 000 à 2 000 mm par an selon les régions — mais concentrée sur deux saisons, avec de longues périodes sèches entre les deux.",
        "Le couvert forestier a presque disparu. Sur des versants dénudés et pentus, la pluie ruisselle et emporte la terre arable au lieu de s'infiltrer.",
        "L'érosion fait perdre chaque année des millimètres de sol fertile : le problème n'est pas le volume d'eau reçu, c'est la fraction que le sol parvient à retenir.",
        "Les périmètres irrigués aménagés, de l'ordre de 100 000 hectares, sont pour beaucoup dégradés ou partiellement hors service faute d'entretien.",
        "Les cyclones et tempêtes tropicales détruisent régulièrement les récoltes et aggravent le décapage des sols sur les parcelles les plus exposées."
      ],
      "photo": 1
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'irrigation domine largement les prélèvements",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            80,
            15,
            5
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Réduire de 10 % la consommation d'irrigation libère un volume comparable à la moitié de tout l'usage domestique du pays.\n\nMais la vraie marge, ici, est en pluvial : c'est sur les parcelles non irriguées que la pluie se perd le plus."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "Un pays agricole qui importe la moitié de sa nourriture",
      "items": [
        {
          "value": "≈ 50 %",
          "label": "de la nourriture consommée est importée"
        },
        {
          "value": "≈ 80 %",
          "label": "du riz consommé vient de l'étranger"
        },
        {
          "value": "≈ 5 M",
          "label": "d'Haïtiens en insécurité alimentaire aiguë selon l'IPC"
        },
        {
          "value": "1er",
          "label": "producteur mondial d'huile essentielle de vétiver"
        }
      ],
      "note": "L'insécurité, l'état des routes et la hausse des prix pèsent sur les campagnes autant que sur les villes. Les filières d'exportation — mangue Francisque, cacao, café, vétiver — restent les rares sources de devises agricoles, et chaque récolte perdue se ressent directement dans le revenu des familles."
    },
    "productions": {
      "kicker": "LES CULTURES",
      "title": "Cinq productions structurent les campagnes",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (milliers de tonnes)",
          "labels": [
            "Manioc",
            "Banane plantain",
            "Maïs",
            "Riz paddy",
            "Haricot"
          ],
          "values": [
            600,
            320,
            300,
            150,
            70
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Ces cinq cultures sont d'abord destinées au marché intérieur : chaque tonne gagnée remplace une tonne importée.\n\nÀ côté, les cultures de rente — café, cacao, mangue Francique, vétiver — pèsent peu en volume mais portent l'essentiel des devises agricoles."
      }
    },
    "filieres": [
      {
        "kicker": "PREMIÈRE FILIÈRE",
        "title": "Mangue Francisque et cacao : des devises à protéger",
        "caption": null,
        "bullets": [
          "La mangue Francisque, exportée surtout vers les États-Unis, vient de vergers souvent anciens et dispersés.",
          "Le cacao du Nord et de la Grand'Anse gagne des marchés de qualité, notamment en filière biologique.",
          "Les arbres subissent des sécheresses de plus en plus marquées entre deux saisons des pluies.",
          "Les exigences sanitaires à l'export imposent une protection sans résidu : NAPEMA® y répond.",
          "Planter les jeunes arbres avec EVERGREEN® améliore leur survie pendant la première saison sèche."
        ],
        "photo": 5
      },
      {
        "kicker": "DEUXIÈME FILIÈRE",
        "title": "Mornes dénudés : retenir l'eau et le sol sur les pentes",
        "caption": null,
        "bullets": [
          "Une grande partie des terres cultivées est en pente, où maïs, haricot et pois congo sont semés sur sol nu.",
          "La déforestation expose les sols : chaque averse emporte de la terre fertile vers les rivières et la mer.",
          "Il pleut assez sur l'année, mais l'eau ruisselle au lieu de s'infiltrer, puis manque en saison sèche.",
          "Des haies et des arbres comme le Paulownia tiennent les sols tout en produisant du bois et du miel.",
          "Un hydro-rétenteur au pied des plants garde l'eau de pluie là où les racines peuvent la prendre."
        ],
        "photo": 1
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Deux technologies, deux contraintes différentes",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
          "Capte l'eau de pluie avant qu'elle ne ruisselle et la restitue à la plante pendant les séquences sèches entre deux saisons.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Sur parcelle en pente, il agit là où l'aménagement anti-érosif seul ne suffit pas : à l'intérieur du sol."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà très entamé sur les sols décapés.",
          "Certifié SOHISCERT et EU Bio — utile pour les filières café et cacao qui visent les primes de certification.",
          "1 à 4 flacons de 140 ml par hectare : un format transportable, compatible avec le morcellement des parcelles."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau disponible sans dégrader davantage un sol déjà fragile."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'irrigation",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Gravitaire",
            "Submersion (riz)"
          ],
          "values": [
            40,
            50,
            55,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Gravitaire",
            "Submersion (riz)"
          ],
          "values": [
            55,
            65,
            70,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Vallée de l'Artibonite",
          "metric": "Le grenier à riz du pays",
          "lines": [
            "Le plus grand périmètre irrigué d'Haïti, alimenté par le fleuve Artibonite.",
            "Riz conduit en submersion : c'est le mode d'irrigation où la marge d'économie est la plus large.",
            "Réseau de canaux ancien et partiellement dégradé, d'où des inégalités d'accès à l'eau en bout de parcours."
          ],
          "photo": 3
        },
        {
          "head": "Plateau Central",
          "metric": "Vivrier et élevage",
          "lines": [
            "Maïs, haricot, manioc et sorgho conduits presque entièrement en pluvial.",
            "Saison sèche marquée : c'est exactement la séquence que l'hydro-rétenteur est fait pour franchir.",
            "Organisations paysannes structurées, capables de porter un essai groupé sur plusieurs parcelles."
          ],
          "photo": 2
        },
        {
          "head": "Grand Sud — Grand'Anse",
          "metric": "Café, cacao, mangue, vétiver",
          "lines": [
            "Cultures de rente destinées à l'export, seules à supporter une prime de certification biologique.",
            "Versants pentus et fortement érodés : chaque averse emporte du sol si rien ne le retient.",
            "Zone exposée aux cyclones, où la reprise des jeunes plants après sinistre est un enjeu récurrent."
          ],
          "photo": 5
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, de la pente et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur une parcelle, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de rendement et de reprise sur un cycle cultural complet."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive par groupement de producteurs, sur la base des résultats."
        }
      ],
      "note": "Un essai est déjà en cours en Haïti avec l'Institut CEHPAPE, sur maraîchage, banane plantain et riz, avec ECOSORB®, ECOFERT®, EVERGREEN® et NAPEMA®. Les premiers relevés sont disponibles sur demande."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Morcellement extrême du foncier : la décision d'achat est dispersée sur des milliers de très petites exploitations.",
          "Capacité de trésorerie limitée des producteurs, qui rend tout achat d'intrant difficile à engager seul.",
          "Aléa cyclonique : une tempête peut effacer les résultats d'un essai en cours de campagne.",
          "Logistique intérieure et sécurité des déplacements, qui compliquent le suivi agronomique de terrain."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Passer par les organisations de producteurs et les coopératives plutôt que par l'exploitation individuelle.",
          "Adosser les premiers déploiements aux programmes de développement agricole et aux bailleurs déjà présents.",
          "Conduire les essais sur deux cycles, pour que l'aléa d'une campagne ne décide pas seul du résultat.",
          "S'appuyer sur l'essai CEHPAPE en cours et sur un relais local établi pour le suivi des parcelles."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g), screening REACH / SVHC (SGS) et certificat SOHISCERT valable jusqu'au 4 septembre 2027 : disponibles sur demande."
    },
    "sources": [
      "Institut haïtien de statistique et d'informatique (IHSI) : comptes nationaux.",
      "Coordination nationale de la sécurité alimentaire (CNSA) et analyses IPC.",
      "Ministère de l'Agriculture, des Ressources naturelles et du Développement rural (MARNDR).",
      "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, pente, nature du sol, mode d'irrigation s'il y en a un. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les résultats déjà relevés en Haïti et dans la Caraïbe.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "jordanie": {
    "slug": "jordanie",
    "locale": "ar-JO",
    "langue": "ar",
    "pdf": "/documents/countries/jordanie.pdf",
    "photos": 2,
    "credits": [
      {
        "titre": "Farm, Al-Hisn, Jordan.jpg",
        "auteur": "User:Issagm",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Irbid Farm 2026.jpg",
        "auteur": "Omarbrodsd",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "ملف سوق",
      "title": "المملكة الأردنية الهاشمية",
      "officiel": "المملكة الأردنية الهاشمية",
      "lieu": "عمّان · 2026",
      "subtitle": "خضار الأغوار وزيتون المرتفعات تحت ندرة مائية هيكلية.\nما الذي يغيّره الاحتفاظ بالماء في التربة على مستوى الحقل."
    },
    "chiffres": {
      "kicker": "السوق في سطور",
      "title": "بلد زراعي مصدّر يعمل تحت ندرة مائية قصوى",
      "items": [
        {
          "value": "≈ 5 %",
          "label": "من الناتج المحلي الإجمالي مصدره القطاع الزراعي"
        },
        {
          "value": "< 100 م³",
          "label": "نصيب الفرد سنوياً من المياه المتجددة"
        },
        {
          "value": "≈ 100 ألف",
          "label": "هكتار مروي، معظمها بالري بالتنقيط"
        },
        {
          "value": "≈ 52 %",
          "label": "من المياه المسحوبة تذهب إلى الري الزراعي"
        }
      ],
      "note": "تجمع الزراعة الأردنية بين قطاع تصديري مكثّف في الأغوار يعمل بالتنقيط وبحصص مائية مقننة، وزراعة بعلية في المرتفعات يتبع مردودها مطر الموسم مباشرة. هذا الارتهان للماء هو ما يجعل المملكة سوقاً ذات أولوية لتقنياتنا."
    },
    "contrainte": {
      "kicker": "القيد الأساسي",
      "title": "ندرة مائية هيكلية، لا أزمة موسمية",
      "caption": "أراضٍ مروية في وادي الأردن",
      "bullets": [
        "نصيب الفرد من المياه المتجددة أقل من 100 م³ سنوياً، أي دون خُمس عتبة الندرة المائية المطلقة المعتمدة دولياً والبالغة 500 م³.",
        "الطلب السنوي على المياه يتجاوز الموارد المتجددة بفارق واضح؛ الفجوة تُسدّ من الضخ الجوفي ومن خزانات أحفورية غير متجددة كخزان الديسي.",
        "معظم مساحة المملكة تتلقى أقل من 200 مم من الأمطار سنوياً، وتنزل إلى نحو 50 مم في البادية الشرقية مقابل 400 إلى 600 مم في مرتفعات عجلون وإربد.",
        "أحواض المياه الجوفية، وفي مقدمتها حوض الأزرق، تُستنزف بمعدل يقارب ضعف حدها الآمن، مع هبوط مستمر في مناسيب الآبار وارتفاع في ملوحتها.",
        "الاستجابة الرسمية — ناقل مياه العقبة وإعادة استخدام أكثر من 90 % من مياه الصرف المعالجة في الري — تعالج جانب العرض. الاحتفاظ بالماء في التربة يعمل على جانب الطلب، داخل الحقل نفسه."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "الجفاف والإجهاد المائي",
      "title": "الضغط يتزايد، لكن المخاطر تبقى محلية",
      "type": "bar",
      "series": [
        {
          "name": "مؤشر عالمي لعدد فترات الجفاف ومدتها",
          "labels": [
            "1980–1999",
            "منذ 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "مؤشران مختلفان",
        "body": "عالمياً، ارتفع عدد فترات الجفاف ومدتها بنسبة 29٪ منذ عام 2000 مقارنة بالعقدين السابقين.\n\nأما الإجهاد المائي فيقيس نسبة السحب إلى الموارد المتجددة المتاحة بعد الاحتياجات البيئية. لذلك لا تمثل هذه الإشارة العالمية توقعاً خاصاً بالدولة، بل يجب قراءتها مع الأمطار والمياه الجوفية والمواسم والاستخدامات المحلية."
      }
    },
    "usages": {
      "kicker": "أين تذهب المياه",
      "title": "الري يستحوذ على أكثر من نصف المسحوب",
      "type": "doughnut",
      "series": [
        {
          "name": "المسحوبات المائية",
          "labels": [
            "الزراعة",
            "مياه الشرب",
            "الصناعة"
          ],
          "values": [
            52,
            43,
            5
          ]
        }
      ],
      "reading": {
        "head": "ما الذي يعنيه ذلك",
        "body": "خفض استهلاك الري بنسبة 10 % يوفّر حجماً أكبر مما يوفّره إلغاء الاستخدام الصناعي بالكامل.\n\nحصة مياه الشرب هنا مرتفعة بمقاييس المنطقة بفعل النمو السكاني، ما يجعل أي توسّع زراعي مرهوناً بترشيد ما هو قائم."
      }
    },
    "economie": {
      "kicker": "الاقتصاد والأمن الغذائي",
      "title": "بلد يستورد حبوبه ويصدّر خضرواته",
      "items": [
        {
          "value": "> 90 %",
          "label": "من القمح والحبوب المستهلكة مستوردة"
        },
        {
          "value": "≈ 17 مليون",
          "label": "شجرة زيتون، أهم شجرة مثمرة في المملكة"
        },
        {
          "value": "≈ 2 %",
          "label": "من مساحة المملكة أراضٍ صالحة للزراعة"
        }
      ],
      "note": "تتركز صادرات الأردن الزراعية في الخضروات والفواكه المتجهة أساساً إلى أسواق الخليج، بينما يعتمد على الخارج في القمح والأعلاف. وتضع الاستراتيجية الوطنية للمياه إعادة استخدام المياه المعالجة وترشيد الري في قلب أي توسع زراعي."
    },
    "productions": {
      "kicker": "المحاصيل",
      "title": "خمسة محاصيل تشكّل عصب الإنتاج والتصدير",
      "type": "bar",
      "series": [
        {
          "name": "الإنتاج السنوي (ألف طن)",
          "labels": [
            "طماطم",
            "بطاطا",
            "زيتون*",
            "خيار",
            "حمضيات"
          ],
          "values": [
            750,
            180,
            150,
            130,
            100
          ]
        }
      ],
      "reading": {
        "head": "قراءة",
        "body": "الطماطم والخيار محصولان مرويان موجّهان أساساً إلى أسواق الخليج: فيهما يتحوّل توفير الماء مباشرة إلى هامش.\n\n* إنتاج الزيتون يتذبذب بين موسم وآخر بحكم المعاومة. أما تمور المجهول فحجمها أصغر (نحو 35 ألف طن) لكن قيمتها التصديرية للطن هي الأعلى."
      }
    },
    "filieres": [
      {
        "kicker": "القطاع الأول",
        "title": "الزيتون: شجرة المرتفعات البعلية",
        "caption": null,
        "bullets": [
          "يغطي الزيتون الجزء الأكبر من المساحة المزروعة بالأشجار، في إربد وعجلون وجرش والبلقاء والمفرق.",
          "معظم البساتين بعلية: تتوقف غلة السنة على أمطار الشتاء، وتتراجع كثيراً في سنوات الجفاف.",
          "تذبذب الحمل بين سنة وأخرى يُضعف دخل المزارع ويصعّب تثبيت عقود بيع الزيت.",
          "الغراس الجديدة هي الأكثر عرضة للموت في صيفها الأول دون ري تكميلي.",
          "وضع EVERGREEN® في حفرة الغرس يحتفظ بمياه المطر حول الجذور لأسابيع إضافية."
        ],
        "photo": 2
      },
      {
        "kicker": "القطاع الثاني",
        "title": "خضروات وادي الأردن: إنتاج الشتاء للتصدير",
        "caption": null,
        "bullets": [
          "يسمح دفء وادي الأردن بإنتاج الطماطم والخيار والفلفل في الشتاء، حين تكون أسعار التصدير في أعلاها.",
          "يُروى الوادي من قناة الملك عبد الله بمزيج من مياه اليرموك والمياه المعالجة، وبحصص محدودة.",
          "ملوحة المياه والتربة في جنوب الوادي تخفض الإنتاج وتفرض غسل التربة بكميات ماء إضافية.",
          "الري بالتنقيط منتشر، لذلك يأتي أي توفير جديد من الاحتفاظ بالماء في التربة نفسها.",
          "‏NAPEMA® يعالج الآفات دون متبقيات، وهو شرط لقبول الشحنات في أسواق التصدير."
        ],
        "photo": 3
      }
    ],
    "solutions": {
      "kicker": "استجابتنا",
      "title": "تقنيتان لقيدين مختلفين",
      "left": {
        "head": "EVERGREEN® — الاحتفاظ بالماء",
        "lines": [
          "مادة محتفظة بالماء أساسها البوتاسيوم، توضع في منطقة الجذور عند الزراعة أو عند التجديد.",
          "تلتقط ماء المطر أو الري وتعيده إلى النبات تدريجياً، فتزيل الإجهاد المائي في المراحل الحرجة.",
          "قدرة امتصاص تبلغ نحو 300 ضعف وزنها، ومدة أثر مفيد من 3 إلى 4 سنوات في التربة.",
          "تتحلل بنسبة 20 إلى 25 % سنوياً، دون تراكم ودون خطر جرعة زائدة."
        ]
      },
      "right": {
        "head": "ECOFERT® — تغذية دون استنزاف",
        "lines": [
          "مخصّب بجرعات دقيقة من الأحماض الأمينية والنيتروجين والفوسفور والبوتاسيوم، من موارد متجددة.",
          "غير مخلبي: لا يفقر مركّب الطين والدبال، ولا يرفع ملوحة التربة ولا محتواها من النترات.",
          "حائز شهادتي SOHISCERT والعضوية الأوروبية — شرط للدخول إلى دفاتر شروط المشترين الأوروبيين.",
          "من 1 إلى 4 عبوات سعة 140 مل للهكتار، متوافق مع تجهيزات الري بالتسميد القائمة."
        ]
      },
      "note": "المنتجان يُباعان منفصلين لكنهما صُمّما ليعزز أحدهما الآخر: المادة المحتفظة بالماء تطيل توفّره في منطقة الجذور، والمخصّب يثمّن هذا الماء المتاح دون إرهاق التربة."
    },
    "economies": {
      "kicker": "أحجام تقديرية",
      "title": "توفير المياه المتوقع حسب أسلوب الري",
      "type": "bar",
      "series": [
        {
          "name": "الحد الأدنى للنطاق (%)",
          "labels": [
            "ري بالتنقيط",
            "ري بالرش",
            "ري محوري",
            "ري بالغمر"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "الحد الأعلى للنطاق (%)",
          "labels": [
            "ري بالتنقيط",
            "ري بالرش",
            "ري محوري",
            "ري بالغمر"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "تُقرأ بحذر",
        "body": "هذه النطاقات تقديرية استرشادية، مبنية على المكاسب الموثقة لموادنا المحتفظة بالماء.\n\nالنتيجة الفعلية تتوقف على التربة والمناخ والمحصول. الأرقام تعطي حجماً تقريبياً لا أكثر، وهي لا تشكّل بأي حال قيمة مضمونة أو تعاقدية أو مطلقة."
      }
    },
    "regions": {
      "kicker": "ثلاثة ميادين أولوية",
      "title": "أين تُجرى التجارب الأولى",
      "items": [
        {
          "head": "وادي الأردن — الأغوار",
          "metric": "≈ 35 ألف هكتار مروية",
          "lines": [
            "قلب الإنتاج التصديري الشتوي: خضار محمية ومكشوفة موجّهة إلى أسواق الخليج، معظمها مروي بالتنقيط.",
            "الزراعة دون مستوى سطح البحر بنحو 200 إلى 400 م، مع تبخّر مرتفع طوال الموسم.",
            "حصص مائية مقننة عبر قناة الملك عبدالله، وجزء متزايد منها مياه صرف معالجة."
          ],
          "photo": 1
        },
        {
          "head": "المرتفعات الشمالية",
          "metric": "زيتون بعلي — إربد وعجلون وجرش",
          "lines": [
            "نحو نصف مساحة الزيتون في المملكة، وهي زراعة بعلية يتحدد إنتاجها بمطر الموسم مباشرة.",
            "أمطار بين 400 و600 مم سنوياً، لكنها متركزة في أشهر قليلة ومتفاوتة بين سنة وأخرى.",
            "الاحتفاظ بالماء في منطقة الجذور يمدّ أثر المطر إلى ما بعد توقّفه: هذا هو الرهان هنا."
          ],
          "photo": 4
        },
        {
          "head": "المفرق وحوض الأزرق",
          "metric": "ضخ جوفي يقارب ضعف الحد الآمن",
          "lines": [
            "مزارع مروية بالكامل من الآبار: خضار مكشوفة وأشجار مثمرة وزيتون مروي في مناخ شبه صحراوي.",
            "قيود متزايدة على تراخيص الآبار وعلى حصص الضخ، ما يجعل كل متر مكعب موفَّر ذا قيمة مباشرة.",
            "ملوحة مياه الآبار في ارتفاع، وهو ما يستوجب مادة بوتاسية لا صوديومية في منطقة الجذور."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "كيف نعمل",
      "title": "انتشار على مراحل، يُقاس عند كل مرحلة",
      "items": [
        {
          "head": "التشخيص",
          "body": "تحليل التربة وأسلوب الري والمحصول. لا التزام على الإطلاق في هذه المرحلة."
        },
        {
          "head": "قطعة تجريبية",
          "body": "تجربة مقارنة على قطعة واحدة، مع قطعة شاهدة تُدار بالطريقة نفسها."
        },
        {
          "head": "القياس",
          "body": "رصد الاستهلاك المائي والمردود على مدى دورة زراعية كاملة."
        },
        {
          "head": "التوسيع",
          "body": "تعميم تدريجي على بقية القطع استناداً إلى النتائج المسجّلة فعلياً."
        }
      ],
      "note": "قاعدة الجرعة واحدة في كل مكان: 3 غرامات لكل لتر من التربة المستغلة. ما يتغيّر من أرض إلى أخرى هو حجم التربة الذي تستكشفه الجذور فعلياً."
    },
    "risques": {
      "kicker": "ما ينبغي توقّعه",
      "title": "مخاطر محددة وردود عليها",
      "left": {
        "head": "المخاطر",
        "lines": [
          "تفاوت الأمطار بين سنة وأخرى: موسم رطب قد يحجب فائدة المنتج في المرتفعات البعلية.",
          "تجزّؤ الحيازات وصغر مساحاتها، ما يشتّت قرار الشراء على عدد كبير من المزارعين.",
          "منافسة مواد رخيصة أساسها الصوديوم تركت انطباعاً سيئاً لدى المزارعين.",
          "ضغط على السيولة لدى الحيازات بعد مواسم متتالية من ارتفاع كلفة المياه والمدخلات."
        ]
      },
      "right": {
        "head": "الردود",
        "lines": [
          "إجراء التجربة على دورة كاملة مع قطعة شاهدة، لتوثيق المكسب حتى في سنة مواتية.",
          "المرور عبر الجمعيات التعاونية واتحادات المزارعين بدل التعامل الفردي.",
          "توثيق فارق التركيبة: بوتاسيوم لا صوديوم، وملاءمة للمحاصيل الغذائية وللتربة المالحة.",
          "توزيع الالتزام على الزمن: أثر يدوم 3 إلى 4 سنوات يوزّع الكلفة على عدة مواسم."
        ]
      },
      "note": "تحليل الأكريلاميد (مختبر Polymex، ISO 9001، بتركيز أقل من 3,0 ميكروغرام/غرام) وفحص REACH / SVHC (SGS) وشهادة SOHISCERT السارية حتى 4 سبتمبر 2027: متاحة جميعها عند الطلب."
    },
    "sources": [
      "دائرة الإحصاءات العامة: الناتج المحلي الإجمالي والمسوح الزراعية.",
      "وزارة الزراعة: الاستراتيجية الوطنية للتنمية الزراعية وإحصاءات الزيتون.",
      "وزارة المياه والري وسلطة وادي الأردن: الاستراتيجية الوطنية للمياه وحصص الري.",
      "منظمة الأغذية والزراعة (FAOSTAT وAQUASTAT) والبنك الدولي (WDI).",
      "اتفاقية الأمم المتحدة لمكافحة التصحر، الجفاف بالأرقام 2022: ارتفاع عدد فترات الجفاف ومدتها 29٪ منذ 2000 مقارنة بـ1980–1999.",
      "الأمم المتحدة للمياه / أكواستات الفاو، مؤشر الهدف 6.4.2: تعريف الإجهاد المائي وحدوده."
    ],
    "closing": {
      "title": "حدّثونا عن قطعتكم",
      "body": "المحصول، وأسلوب الري، وطبيعة التربة، وحجم المياه المستهلك اليوم. نعود إليكم بتركيبة التقنيات المناسبة، والجرعات، والتجارب التي أُجريت في أوضاع مشابهة.\n\nالتواصل الأول لا يرتّب أي التزام.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  },
  "madagascar": {
    "slug": "madagascar",
    "locale": "fr-MG",
    "langue": "fr",
    "pdf": "/documents/countries/madagascar.pdf",
    "photos": 5,
    "credits": [
      {
        "titre": "Rice paddies in Madagascar.jpg",
        "auteur": "Luc Legay",
        "licence": "CC BY-SA 2.0",
        "source": "commons"
      },
      {
        "titre": "Madagascar CNFPAR.jpg",
        "auteur": "Smegrandria",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Baobab and rice field.jpg",
        "auteur": "Zigomar",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Produits agroécologiques, Ankazobe Madagascar.jpg",
        "auteur": "Cactus0625",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Village Sunrise, Madagascar.jpg",
        "auteur": "Rod Waddington",
        "licence": "CC BY-SA 2.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Madagascar",
      "officiel": "RÉPUBLIQUE DE MADAGASCAR",
      "lieu": "Antananarivo · 2026",
      "subtitle": "Riz des Hautes Terres, cultures vivrières du Grand Sud et filières de valeur exposées à des chocs climatiques très contrastés.\nCe que la rétention d’eau change quand la moyenne nationale masque les crises locales."
    },
    "chiffres": {
      "kicker": "LE PAYS EN BREF",
      "title": "Une agriculture pluviale, vitale et très exposée",
      "items": [
        {
          "value": "31,2 M",
          "label": "d’habitants"
        },
        {
          "value": "1,7 M",
          "label": "de personnes en forte insécurité alimentaire aiguë"
        },
        {
          "value": "11,3 %",
          "label": "de stress hydrique national en 2022"
        },
        {
          "value": "≈ 40 %",
          "label": "des enfants touchés par la malnutrition chronique"
        }
      ],
      "note": "Le stress hydrique national reste inférieur aux seuils élevés, mais cette moyenne ne décrit ni les sécheresses récurrentes du Sud, ni les déficits saisonniers, ni la dépendance d’une grande partie des exploitations aux pluies. Les chiffres alimentaires sont ceux du Programme alimentaire mondial ; l’indicateur d’eau vient de la Banque mondiale et de FAO AQUASTAT."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Trop peu d’eau au Sud, parfois trop d’eau à l’Est",
      "caption": "Travail du sol dans une exploitation malgache",
      "bullets": [
        "Le Sud est régulièrement touché par la sécheresse, tandis que le Sud-Est subit cyclones et inondations récurrents : le même pays doit gérer le manque et l’excès d’eau.",
        "Une grande part de la production dépend directement de la pluie ; une rupture au semis ou à la floraison devient rapidement une perte de récolte.",
        "Sur les Hautes Terres, les rizières retiennent l’eau mais les cultures de contre-saison et les pépinières restent exposées aux tours d’eau irréguliers.",
        "Dans le Grand Sud, sols pauvres, vent et évaporation réduisent la réserve utile autour des racines.",
        "L’enjeu n’est pas de remplacer l’irrigation : il est de sécuriser la zone racinaire et de mesurer l’effet sur une parcelle témoin conduite à l’identique."
      ],
      "photo": 1
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "LIRE LE STRESS HYDRIQUE",
      "title": "Une moyenne nationale basse peut cacher un risque local fort",
      "type": "bar",
      "series": [
        {
          "name": "Part des ressources renouvelables prélevée (%)",
          "labels": [
            "Madagascar, 2022",
            "Seuil de stress faible",
            "Seuil de stress élevé"
          ],
          "values": [
            11.3,
            25,
            75
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "L’indicateur ODD 6.4.2 place Madagascar sous 25 % au niveau national. Il ne mesure toutefois ni la répartition géographique, ni la saison, ni une sécheresse météorologique.\n\nLes essais doivent donc être ciblés par bassin, culture et calendrier, en priorité là où les racines manquent réellement d’eau."
      }
    },
    "economie": {
      "kicker": "SÉCURITÉ ALIMENTAIRE",
      "title": "La résilience agricole est un enjeu économique immédiat",
      "items": [
        {
          "value": "31,2 M",
          "label": "d’habitants"
        },
        {
          "value": "1,7 M",
          "label": "de personnes en forte insécurité alimentaire aiguë"
        },
        {
          "value": "102 000",
          "label": "petits producteurs accompagnés par le PAM"
        },
        {
          "value": "57",
          "label": "sites communautaires nutritionnels soutenus par le PAM"
        }
      ],
      "note": "Le Programme alimentaire mondial relie l’insécurité alimentaire à la dépendance aux pluies, à la faible diversification et à l’intensification des chocs climatiques. L’opportunité commerciale doit donc être construite avec un protocole abordable et une preuve économique locale."
    },
    "productions": null,
    "filieres": [
      {
        "kicker": "FILIÈRE PRIORITAIRE",
        "title": "Riz : sécuriser les stades sensibles, pas promettre l’impossible",
        "caption": null,
        "bullets": [
          "Le riz structure les paysages, l’alimentation et le revenu de nombreuses exploitations des Hautes Terres.",
          "L’hydro-rétention n’a pas vocation à remplacer la submersion d’une rizière correctement alimentée.",
          "Les cibles pertinentes sont les pépinières, le repiquage, les bordures drainantes et les cultures de contre-saison.",
          "Le protocole doit séparer survie des plants, fréquence d’arrosage, rendement et coût de main-d’œuvre.",
          "Une belle parcelle ne suffit pas : seule la comparaison avec un témoin permet de conclure."
        ],
        "photo": 0
      },
      {
        "kicker": "FILIÈRE RÉSILIENCE",
        "title": "Grand Sud : protéger la levée et la réserve racinaire",
        "caption": null,
        "bullets": [
          "Maïs, manioc et légumineuses subissent les pauses de pluie et des sols à faible réserve utile.",
          "Le premier objectif d’essai est la régularité de levée et la survie jusqu’à l’enracinement.",
          "EVERGREEN® ou ECOSORB® sont évalués avec WATER VITAL®, ECOFERT® et NAPEMA® seulement si le diagnostic le justifie.",
          "La synergie attendue doit être décomposée : eau, nutrition, protection sanitaire et coût total.",
          "Le prix et la rentabilité restent des champs ouverts, à compléter avec les équipes et les producteurs."
        ],
        "photo": 4
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Une combinaison à tester, pas une promesse isolée",
      "left": {
        "head": "EVERGREEN® / ECOSORB® — retenir près des racines",
        "lines": [
          "Hydro-rétenteur à base de potassium placé dans la zone racinaire au semis, à la plantation ou au repiquage.",
          "Capte une partie de la pluie ou de l’irrigation et la restitue progressivement pendant les intervalles secs.",
          "WATER VITAL® intervient sur la qualité et la disponibilité de l’eau lorsque l’analyse du site le justifie.",
          "Le protocole compare toujours une parcelle traitée et une parcelle témoin conduites avec la même eau et le même calendrier."
        ]
      },
      "right": {
        "head": "ECOFERT® / NAPEMA® — nourrir et protéger",
        "lines": [
          "ECOFERT® apporte une nutrition en microdose, sans présenter l’effet de l’hydro-rétenteur comme un substitut à la fertilité.",
          "NAPEMA® complète le dispositif lorsque ravageurs ou maladies limitent le potentiel de la culture.",
          "L’intérêt recherché est synergique : eau disponible, nutrition adaptée et protection cohérente au même stade cultural.",
          "Le rendement, la consommation d’eau et la marge sont mesurés séparément avant toute généralisation."
        ]
      },
      "note": "Le choix des produits et leur dosage restent conditionnés par l’analyse de sol, la qualité de l’eau, la culture et un essai local. Aucun gain de rendement ou d’économie n’est garanti avant mesure sur le terrain."
    },
    "economies": null,
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais comparatifs",
      "items": [
        {
          "head": "Hautes Terres",
          "metric": "Riz et contre-saison",
          "lines": [
            "Rizières en terrasses autour d’Antananarivo et d’Antsirabe.",
            "Cibler pépinières, repiquage et cultures de contre-saison plutôt que promettre un gain sur riz submergé.",
            "Mesurer reprise, fréquence des tours d’eau et rendement marchand."
          ],
          "photo": 0
        },
        {
          "head": "Grand Sud",
          "metric": "Maïs, manioc, légumineuses",
          "lines": [
            "Sécheresses récurrentes et forte dépendance à une saison des pluies courte.",
            "Priorité à la levée et à l’enracinement, avec témoin et suivi de l’humidité du sol.",
            "Associer l’essai à une conduite réaliste pour les petits producteurs."
          ],
          "photo": 4
        },
        {
          "head": "Nord-Est et SAVA",
          "metric": "Vanille et cultures de valeur",
          "lines": [
            "Forte valeur à l’hectare, mais alternance d’excès d’eau, d’érosion et de périodes sèches.",
            "Tester sur jeunes plants et pépinières, là où une perte de plant coûte le plus.",
            "Intégrer drainage, ombrage et protection sanitaire au protocole."
          ],
          "photo": 3
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un essai local, mesuré avant toute extension",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Sol, eau, pluie, culture et pratiques de la parcelle sont documentés."
        },
        {
          "head": "Témoin",
          "body": "Une parcelle traitée et une parcelle témoin sont conduites à l’identique."
        },
        {
          "head": "Mesure",
          "body": "Humidité, reprise, eau apportée, rendement marchand et coûts sont relevés."
        },
        {
          "head": "Décision",
          "body": "La solution n’est étendue que si l’écart technique et économique est net."
        }
      ],
      "note": "Le prix produit, la main-d’œuvre, l’eau et la valeur de la récolte restent des champs de calcul ouverts jusqu’à validation par les équipes locales."
    },
    "risques": {
      "kicker": "CE QU’IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Résultats très variables entre Hautes Terres, côte humide et Grand Sud.",
          "Confusion possible entre sécheresse, manque d’irrigation et stress hydrique national.",
          "Coût d’accès aux parcelles, petites superficies et suivi de mesure irrégulier.",
          "Pression cyclonique et excès d’eau dans l’Est, où la rétention n’est pas toujours la priorité."
        ]
      },
      "right": {
        "head": "Nos réponses",
        "lines": [
          "Segmenter les essais par bassin, sol et culture, sans extrapoler une moyenne nationale.",
          "Mesurer l’humidité, l’eau réellement apportée et la récolte commercialisable.",
          "Travailler avec une organisation locale capable de tenir le protocole jusqu’à la récolte.",
          "Exclure les parcelles mal drainées et adapter la combinaison de solutions au diagnostic."
        ]
      },
      "note": "Les éléments réglementaires, certificats et fiches techniques doivent être revus avec l’importateur et les autorités malgaches avant commercialisation."
    },
    "sources": [
      "Programme alimentaire mondial, page pays Madagascar : population, insécurité alimentaire, chocs climatiques et actions de résilience.",
      "Banque mondiale, World Development Indicators, ER.H2O.FWST.ZS : stress hydrique à Madagascar, 2022.",
      "FAO AQUASTAT et ONU-Eau : indicateur ODD 6.4.2 et limites d’interprétation à l’échelle nationale.",
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Choisissons une parcelle pilote",
      "body": "Culture, type de sol, calendrier des pluies, accès à l’eau, coût de l’irrigation et prix de vente. À partir de ces données, nous préparons un protocole simple avec témoin, critères de réussite et budget à compléter par l’équipe locale.\n\nUne première étude n’engage pas à un déploiement.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "maroc": {
    "slug": "maroc",
    "locale": "fr-MA",
    "langue": "fr",
    "pdf": "/documents/countries/maroc.pdf",
    "photos": 2,
    "credits": [
      {
        "titre": "AZILAL agriculture.jpg",
        "auteur": "Hamza EL GHAZALI",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Agriculture in ASNI- TOUBKAL.jpg",
        "auteur": "Hamza EL GHAZALI",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Maroc",
      "officiel": "ROYAUME DU MAROC",
      "lieu": "Rabat · 2026",
      "subtitle": "Agrumes, maraîchage et oléiculture sous contrainte hydrique durable.\nCe que l'hydro-rétention change pour une filière exportatrice."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Un pays agricole exportateur, exposé à la sécheresse",
      "items": [
        {
          "value": "≈ 12 %",
          "label": "du PIB provient de l'agriculture"
        },
        {
          "value": "≈ 8,7 M ha",
          "label": "de surface agricole utile"
        },
        {
          "value": "≈ 1,5 M ha",
          "label": "irrigués, soit environ 17 % de la SAU"
        },
        {
          "value": "≈ 30 %",
          "label": "de la population active employée par le secteur"
        }
      ],
      "note": "L'agriculture marocaine combine une filière d'exportation très structurée (agrumes, tomate, petits fruits) et une céréaliculture pluviale dont le rendement suit directement la pluviométrie. C'est cette dépendance à l'eau qui rend le pays prioritaire pour nos technologies."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Six campagnes de sécheresse consécutives",
      "caption": "Périmètre irrigué, région du Souss",
      "bullets": [
        "Depuis 2018, le Maroc enchaîne des campagnes déficitaires : le taux de remplissage des barrages est descendu sous le quart de leur capacité sur plusieurs bassins.",
        "L'agriculture mobilise de l'ordre de 85 % de l'eau prélevée : toute tension sur la ressource se traduit d'abord par des restrictions d'irrigation.",
        "Le gradient pluviométrique est extrême : de 600 à 800 mm par an dans le Rif, à moins de 100 mm dans les provinces du Sud.",
        "Les nappes du Souss-Massa et du Haouz sont surexploitées, avec un rabattement continu des niveaux piézométriques.",
        "La réponse publique — barrages, dessalement à Agadir et Casablanca, reconversion au goutte-à-goutte — traite l'offre. L'hydro-rétention agit sur la demande, à la parcelle."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'irrigation concentre l'essentiel du prélèvement",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            85,
            10,
            5
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Réduire de 10 % la consommation agricole libère davantage de volume que de supprimer la totalité de l'usage industriel.\n\nC'est pourquoi l'effort porte en priorité sur la parcelle, et non sur les autres usages."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "Exporter des primeurs, importer du blé",
      "items": [
        {
          "value": "Top 5",
          "label": "des exportateurs mondiaux de tomates fraîches"
        },
        {
          "value": "≈ 80 Md DH",
          "label": "d'exportations agroalimentaires par an"
        },
        {
          "value": "> 50 %",
          "label": "du blé consommé importé les années de sécheresse"
        },
        {
          "value": "2030",
          "label": "horizon de la stratégie Génération Green, après le Plan Maroc Vert"
        }
      ],
      "note": "Le Maroc exporte tomates, agrumes, fruits rouges et olives vers l'Europe et l'Afrique, mais dépend de l'étranger pour une large part de son blé. Avec des barrages au plus bas, les dotations d'irrigation ont été réduites et le dessalement s'est ouvert à l'agriculture, notamment à Chtouka."
    },
    "productions": {
      "kicker": "LES FILIÈRES",
      "title": "Quatre productions portent la valeur à l'export",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (millions de tonnes)",
          "labels": [
            "Agrumes",
            "Tomate",
            "Olive",
            "Céréales*"
          ],
          "values": [
            2.6,
            1.4,
            1.9,
            5
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Agrumes et tomate sont irrigués et destinés à l'export : ce sont les cultures où l'économie d'eau se convertit directement en marge.\n\n* Les céréales sont majoritairement pluviales ; le volume varie fortement d'une campagne à l'autre selon la pluviométrie."
      }
    },
    "filieres": [
      {
        "kicker": "PREMIÈRE FILIÈRE",
        "title": "Tomate sous serre du Souss : l'export au litre près",
        "caption": null,
        "bullets": [
          "Le Souss-Massa concentre l'essentiel des serres de tomates destinées à l'Europe, de l'automne au printemps.",
          "La nappe du Souss baisse depuis des décennies ; une partie des exploitations est irriguée à l'eau dessalée de Chtouka.",
          "L'eau dessalée coûte nettement plus cher que l'eau de forage : chaque litre économisé améliore directement la marge.",
          "Les exportateurs doivent respecter des limites de résidus strictes : NAPEMA® traite les ravageurs sans résidu.",
          "Retenir l'eau dans le sol espace les apports et réduit le drainage perdu sous la serre."
        ],
        "photo": 2
      },
      {
        "kicker": "DEUXIÈME FILIÈRE",
        "title": "Agrumes et olivier : des vergers à protéger de la sécheresse",
        "caption": null,
        "bullets": [
          "Agrumes du Souss, du Gharb et de Berkane, olivier du Haouz et du Saïss : des cultures pérennes à fort investissement.",
          "Les restrictions d'eau des dernières campagnes ont conduit des producteurs à arracher une partie de leurs vergers d'agrumes.",
          "L'olivier, souvent conduit en pluvial, voit sa récolte chuter fortement les années sans pluie de printemps.",
          "Un verger perdu coûte plusieurs années de production : protéger les racines du stress hydrique protège le capital.",
          "EVERGREEN® posé à la plantation ou au rajeunissement du verger prolonge la réserve d'eau entre deux irrigations."
        ],
        "photo": 3
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Deux technologies, deux contraintes différentes",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
          "Capte l'eau de pluie ou d'irrigation et la restitue à la plante au fur et à mesure, en supprimant le stress hydrique des phases critiques.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique et n'augmente ni la salinité ni la teneur en nitrates.",
          "Certifié SOHISCERT et EU Bio — condition d'accès aux cahiers des charges des acheteurs européens.",
          "1 à 4 flacons de 140 ml par hectare, compatible avec les équipements de fertirrigation existants."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau disponible sans dégrader le sol."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'irrigation",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Pivot",
            "Gravitaire"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Pivot",
            "Gravitaire"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Souss-Massa",
          "metric": "Agrumes et primeurs",
          "lines": [
            "Cœur de la filière d'exportation, déjà largement converti au goutte-à-goutte.",
            "Nappe en rabattement continu : la pression réglementaire sur les prélèvements y est la plus forte.",
            "Acheteurs européens demandeurs de certification biologique."
          ],
          "photo": 1
        },
        {
          "head": "Haouz — Marrakech",
          "metric": "Maraîchage et oliviers",
          "lines": [
            "Périmètres irrigués dépendants des barrages, soumis aux tours d'eau en année sèche.",
            "Forte proportion de structures moyennes, capables de décider vite sur un essai.",
            "Oléiculture en modernisation, avec des marges de progrès agronomiques nettes."
          ],
          "photo": 4
        },
        {
          "head": "Drâa-Tafilalet",
          "metric": "Palmier dattier et arganier",
          "lines": [
            "Oasis en situation de stress hydrique structurel, moins de 100 mm de pluie par an.",
            "Enjeu de préservation autant que de rendement : lutte contre l'ensablement.",
            "Filières à forte valeur unitaire — datte de bouche, huile d'argan."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'irrigation et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur une parcelle, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de consommation et de rendement sur un cycle cultural complet."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Variabilité interannuelle de la pluviométrie : une campagne humide masque l'intérêt du produit.",
          "Fragmentation du foncier : beaucoup de petites exploitations, décision d'achat dispersée.",
          "Concurrence de solutions bas de gamme à base de sodium, qui ont laissé de mauvais souvenirs.",
          "Trésorerie des exploitations après plusieurs campagnes déficitaires."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Conduire l'essai sur un cycle complet avec parcelle témoin, pour objectiver le gain même en année favorable.",
          "Passer par les coopératives et les groupements, plutôt que par l'exploitation individuelle.",
          "Documenter la différence de formulation : potassium et non sodium, compatible cultures alimentaires.",
          "Étaler l'engagement : la durée d'effet de 3 à 4 ans amortit le coût sur plusieurs campagnes."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g), screening REACH / SVHC (SGS) et certificat SOHISCERT valable jusqu'au 4 septembre 2027 : disponibles sur demande."
    },
    "sources": [
      "Haut-Commissariat au Plan (HCP) : comptes nationaux et emploi.",
      "Ministère de l'Agriculture : stratégie Génération Green, statistiques des filières.",
      "Office des changes : exportations agroalimentaires.",
      "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'irrigation, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "martinique": {
    "slug": "martinique",
    "locale": "fr-MQ",
    "langue": "fr",
    "pdf": null,
    "photos": 0,
    "credits": null,
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Martinique",
      "officiel": "RÉGION MARTINIQUE",
      "lieu": "Fort-de-France · 2026",
      "subtitle": "94 % de l'eau consommée vient directement des rivières, avec trois jours de réserve.\nCe que l'hydro-rétention change quand la moindre semaine sans pluie se lit sur tout le territoire."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Une île sous alerte sécheresse, une réserve d'eau de trois jours",
      "items": [
        {
          "value": "≈ 360 000",
          "label": "habitants (2023), population en recul"
        },
        {
          "value": "94 %",
          "label": "de l'eau consommée provient directement des rivières"
        },
        {
          "value": "≈ 3 jours",
          "label": "de capacité de stockage disponible pour l'ensemble du territoire"
        },
        {
          "value": "20–60 %",
          "label": "des normales saisonnières de pluie seulement, en juin 2026"
        }
      ],
      "note": "La Martinique n'a quasiment pas de marge de manœuvre hydraulique : sans grand réservoir, l'essentiel de l'eau consommée vient directement des rivières, dont le débit dépend de la pluie de la semaine. En 2026, la préfecture a placé l'île en alerte sécheresse sur l'ensemble du territoire et engagé une procédure de calamité agricole."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Pas de réserve : l'eau du jour dépend de la pluie du jour",
      "caption": null,
      "bullets": [
        "Avec une capacité de stockage limitée à environ trois jours, la Martinique ne peut pas absorber une séquence sèche de plusieurs semaines comme le ferait un territoire doté de grands barrages.",
        "En juin 2026, les cumuls de pluie n'ont représenté que 20 à 60 % des normales saisonnières, dans un contexte de Super El Niño touchant l'ensemble de l'Atlantique.",
        "Le Bureau de recherches géologiques et minières a constaté des niveaux de nappes souterraines inférieurs à la moyenne dès fin juin 2026, un signal qui s'ajoute au déficit de surface.",
        "Face à la gravité de la situation, la préfecture a engagé fin août 2026 une procédure de calamité agricole pour l'ensemble des filières.",
        "Les restrictions imposées à la population (arrosage, remplissage de piscines) montrent l'ampleur de la tension, bien au-delà du seul usage agricole."
      ],
      "photo": 1
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": null,
    "economie": {
      "kicker": "ÉCONOMIE AGRICOLE",
      "title": "Banane et canne à sucre, sous alerte sécheresse territoriale",
      "items": [
        {
          "value": "94 %",
          "label": "de l'eau consommée vient directement des rivières"
        },
        {
          "value": "≈ 3 jours",
          "label": "de capacité de stockage pour tout le territoire"
        },
        {
          "value": "2026",
          "label": "procédure de calamité agricole engagée par la préfecture"
        },
        {
          "value": "Banamart",
          "label": "la structure qui fédère l'essentiel des producteurs de banane"
        }
      ],
      "note": "Banane et canne à sucre restent les deux piliers de l'agriculture d'exportation martiniquaise, commercialisées via des structures collectives établies (Banamart pour la banane, SICA Canne-Union pour la canne et le rhum). L'absence quasi totale de réserve d'eau rend chaque semaine sans pluie immédiatement visible sur les deux filières."
    },
    "productions": null,
    "filieres": [
      {
        "kicker": "FILIÈRE PHARE",
        "title": "Banane et canne : deux cultures exposées à l'absence de réserve",
        "caption": null,
        "bullets": [
          "La banane, principale culture d'export de l'île, encaisse directement tout déficit hydrique prolongé faute de réserve territoriale.",
          "La canne à sucre, destinée pour l'essentiel à la distillerie agricole et au sucre, est également concernée par la procédure de calamité agricole 2026.",
          "Les deux filières sont structurées autour d'organisations de producteurs, ce qui facilite un essai groupé plutôt qu'exploitation par exploitation.",
          "Le maraîchage de diversification, plus fragile en trésorerie, est le segment où un gain d'eau se traduit le plus vite en résultat visible.",
          "Sur ces cultures, EVERGREEN® se teste en une saison ; la canne, cultivée sur plusieurs cycles, demande un suivi sur au moins une replantation complète."
        ],
        "photo": 2
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Amortir l'absence de réserve, à l'échelle de la parcelle",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement : une réserve locale, là où le territoire n'en a pas.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique des sols déjà sollicités par la banane et la canne.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — un atout pour des filières d'export déjà très réglementées.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Quand le territoire n'a que trois jours de réserve, retenir l'eau à la racine plutôt que de compter sur le réseau ou la rivière devient un levier direct, pas seulement un gain de confort."
    },
    "economies": null,
    "regions": null,
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de levée, de consommation d'eau et de rendement sur une campagne complète."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Filières banane et canne déjà structurées autour de coopératives (Banamart, SICA Canne-Union), avec des pratiques établies.",
          "Forte pression foncière : peu de surfaces disponibles pour de nouveaux essais à grande échelle.",
          "Une procédure de calamité agricole en cours peut détourner l'attention des exploitants vers l'urgence plutôt que vers un essai de fond.",
          "Contexte réglementaire européen (DOM) : toute homologation d'intrant doit s'instruire selon les règles applicables en France et dans l'UE."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Passer par les coopératives et interprofessions déjà en place plutôt que par l'exploitant isolé.",
          "Positionner l'essai comme une réponse concrète à la calamité en cours plutôt que comme un projet à part.",
          "Mesurer sur une campagne complète avec parcelle témoin, y compris lors d'une saison plus arrosée.",
          "Vérifier au cas par cas le statut réglementaire des produits en France métropolitaine et dans les DOM avant toute commercialisation."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "oman": {
    "slug": "oman",
    "locale": "en-OM",
    "langue": "en",
    "pdf": "/documents/countries/oman.pdf",
    "photos": 9,
    "credits": [
      {
        "titre": "Jebel Akhdar – irrigation canals in Al-Ayn.jpg",
        "auteur": "albinfo",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Date palm tree irrigation.jpg",
        "auteur": "Okhtyartist",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "\"The Falaj\" - Traditional irrigation system.jpg",
        "auteur": "Altaf Habib",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "\"The Falaj\" - Traditional irrigation system 06.jpg",
        "auteur": "Altaf Habib",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Farm house, tareef - panoramio.jpg",
        "auteur": "Omar AV",
        "licence": "CC BY 3.0",
        "source": "commons"
      },
      {
        "titre": "Nakhl Fort amid palm groves, Oman (3).jpg",
        "auteur": "Prof. Mortel",
        "licence": "CC BY 2.0",
        "source": "commons"
      },
      {
        "titre": "Palm grove at Nakhl, Oman (2).jpg",
        "auteur": "Prof. Mortel",
        "licence": "CC BY 2.0",
        "source": "commons"
      },
      {
        "titre": "Palm grove at Nakhl, Oman (6).jpg",
        "auteur": "Prof. Mortel",
        "licence": "CC BY 2.0",
        "source": "commons"
      },
      {
        "titre": "Palm grove at Nakhl, Oman (1).jpg",
        "auteur": "Prof. Mortel",
        "licence": "CC BY 2.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "MARKET DOSSIER",
      "title": "Oman",
      "officiel": "SULTANATE OF OMAN",
      "lieu": "Muscat · 2026",
      "subtitle": "Dates, vegetables and fodder grown on shrinking aquifers and under 100 mm of rain.\nWhat hydro-retention changes when every cubic metre is pumped."
    },
    "chiffres": {
      "kicker": "THE MARKET IN BRIEF",
      "title": "Irrigated farming on a very tight water budget",
      "items": [
        {
          "value": "≈ 2 %",
          "label": "of GDP from agriculture and fisheries"
        },
        {
          "value": "≈ 83 %",
          "label": "of water withdrawals go to agriculture"
        },
        {
          "value": "< 100 mm",
          "label": "of rain a year across most of the country"
        },
        {
          "value": "≈ 370,000 t",
          "label": "of dates harvested a year"
        }
      ],
      "note": "Farming is concentrated on the Al Batinah coastal plain, the interior oases and the monsoon-fed Dhofar region. Most irrigation water comes from aquifers and from some 3,000 active aflaj, traditional channels that are themselves fed by groundwater."
    },
    "contrainte": {
      "kicker": "THE CONSTRAINT",
      "title": "Groundwater is the farm, and it is running down",
      "caption": null,
      "bullets": [
        "Outside Dhofar and the Hajar mountains, rainfall averages well under 100 mm a year, while potential evaporation is many times higher.",
        "Agriculture draws the large majority of the water withdrawn each year, almost all of it from aquifers and aflaj.",
        "Along Al Batinah, decades of pumping have lowered water tables and let seawater intrude: salinity has taken farmland out of production.",
        "In long droughts many aflaj run weaker or dry up, and the oasis date groves they feed suffer first.",
        "Desalination supplies the cities, but its cost rules it out for most irrigation. Hydro-retention works on demand, in the root zone, where every pumped cubic metre is paid for."
      ],
      "photo": 0
    },
    "stress": {
      "kicker": "DROUGHT AND WATER STRESS",
      "title": "Pressure is rising, but risk remains local",
      "type": "bar",
      "series": [
        {
          "name": "Global index of drought number and duration",
          "labels": [
            "1980–1999",
            "Since 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Two indicators, not a shortcut",
        "body": "Worldwide, the number and duration of droughts have risen by 29% since 2000 compared with the two previous decades.\n\nWater stress measures something different: withdrawals as a share of renewable resources available after environmental needs. This global signal is therefore not a country forecast; it must be read alongside local rainfall, aquifers, seasons and uses."
      }
    },
    "usages": {
      "kicker": "WHERE THE WATER GOES",
      "title": "Irrigation takes eight litres in every ten",
      "type": "doughnut",
      "series": [
        {
          "name": "Water withdrawals",
          "labels": [
            "Agriculture",
            "Municipal",
            "Industry"
          ],
          "values": [
            83,
            15,
            2
          ]
        }
      ],
      "reading": {
        "head": "What this implies",
        "body": "A 10 % cut in irrigation demand saves several times the volume used by the whole of industry.\n\nThat is why the effort belongs in the field: dates, fodder and vegetables on the coastal plain."
      }
    },
    "economie": {
      "kicker": "ECONOMY AND FOOD SECURITY",
      "title": "Strong purchasing power, a narrow food base",
      "items": [
        {
          "value": "≈ 5 M",
          "label": "residents, with food demand rising every year"
        },
        {
          "value": "> 100 %",
          "label": "self-sufficiency in dates and in fresh fish"
        },
        {
          "value": "≈ 3,000",
          "label": "active aflaj, five of them on the UNESCO World Heritage list"
        },
        {
          "value": "2040",
          "label": "horizon of Oman Vision, with food security as a priority"
        }
      ],
      "note": "Oman imports most of its cereals, sugar, dairy and meat, and part of its vegetables. Food security plans favour local production of high-value crops and a more efficient use of every cubic metre of groundwater."
    },
    "productions": {
      "kicker": "THE MAIN CROPS",
      "title": "Date palms hold half of the cropped area",
      "type": "bar",
      "series": [
        {
          "name": "Share of cropped area (%)",
          "labels": [
            "Date palms",
            "Fodder",
            "Vegetables",
            "Other fruit"
          ],
          "values": [
            50,
            25,
            15,
            10
          ]
        }
      ],
      "reading": {
        "head": "Reading",
        "body": "Date palms occupy about half of the cropped area and carry cultural as well as economic weight.\n\nFodder, mostly Rhodes grass and alfalfa, is the thirstiest use per hectare and the first target of water rationing. Shares are rounded orders of magnitude."
      }
    },
    "filieres": [
      {
        "kicker": "LEADING SECTOR",
        "title": "Dates: a heritage crop with a modern water problem",
        "caption": null,
        "bullets": [
          "Date palms cover about half of Oman's cropped area, from the Al Batinah coast to the interior oases.",
          "Many groves are still irrigated in basins, with high losses on sandy soils in summer heat.",
          "Saline groundwater along the coast lowers yields and fruit quality, and weakens young palms.",
          "Public programmes distribute offshoots of premium varieties: planting is the moment to act on water.",
          "EVERGREEN® placed in the planting pit holds irrigation water around the roots through the first hot season."
        ],
        "photo": 7
      }
    ],
    "solutions": {
      "kicker": "OUR RESPONSE",
      "title": "Two technologies, two different constraints",
      "left": {
        "head": "EVERGREEN® — holding the water",
        "lines": [
          "A potassium-based hydro-retainer placed in the root zone at planting or at replant.",
          "It captures irrigation water and releases it back to the plant gradually, removing water stress through the hottest months.",
          "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
          "Breaks down by 20 to 25 % a year, with no build-up and no risk of overdosing."
        ]
      },
      "right": {
        "head": "ECOFERT® — feeding without depleting",
        "lines": [
          "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
          "Non-chelating: it does not strip the clay-humus complex and adds neither salinity nor nitrate load.",
          "Certified SOHISCERT and EU Bio, in use in 60 countries — an entry condition for premium buyers.",
          "1 to 4 bottles of 140 ml per hectare, compatible with existing fertigation equipment."
        ]
      },
      "note": "The two products are sold separately but were designed to reinforce each other: the hydro-retainer extends how long water stays available, the fertiliser puts that water to work without degrading the soil."
    },
    "economies": {
      "kicker": "ORDERS OF MAGNITUDE",
      "title": "Expected water saving by irrigation method",
      "type": "bar",
      "series": [
        {
          "name": "Low end of range (%)",
          "labels": [
            "Drip",
            "Bubbler",
            "Sprinkler",
            "Basin / falaj"
          ],
          "values": [
            40,
            45,
            50,
            55
          ]
        },
        {
          "name": "High end of range (%)",
          "labels": [
            "Drip",
            "Bubbler",
            "Sprinkler",
            "Basin / falaj"
          ],
          "values": [
            55,
            60,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Read with caution",
        "body": "These ranges are indicative and based on the savings documented for our hydro-retainers.\n\nThe actual result depends on the soil, the climate and the crop. They give an order of magnitude and are in no case a guaranteed, contractual or absolute value."
      }
    },
    "regions": {
      "kicker": "THREE PRIORITY AREAS",
      "title": "Where to run the first trials",
      "items": [
        {
          "head": "Al Batinah",
          "metric": "Oman's main farm belt",
          "lines": [
            "Vegetables, dates and fodder on a coastal plain where aquifers are over-drawn and turning saline.",
            "Farms already on drip, with pumps running daily: the saving shows on the power bill.",
            "Many commercial farms able to host a trial block quickly."
          ],
          "photo": 4
        },
        {
          "head": "Interior oases",
          "metric": "Aflaj-fed date groves",
          "lines": [
            "Historic date groves around Nizwa and Bahla, irrigated by shared falaj rotations.",
            "Weaker flows in drought years mean longer intervals between turns.",
            "Young offshoots planted with a retainer establish before the summer heat."
          ],
          "photo": 1
        },
        {
          "head": "Dhofar — Salalah",
          "metric": "Monsoon from June to September",
          "lines": [
            "The only region with a monsoon: coconut, banana, papaya and vegetables near Salalah.",
            "Eight dry months outside the khareef: holding the monsoon water in the soil is the whole question.",
            "Soils poor in organic matter, where ECOFERT® adds value alongside the retainer."
          ],
          "photo": 6
        }
      ]
    },
    "deploiement": {
      "kicker": "HOW WE WORK",
      "title": "A staged rollout, measured at every step",
      "items": [
        {
          "head": "Assessment",
          "body": "Soil, irrigation method and crop are reviewed. No commitment at this stage."
        },
        {
          "head": "Trial block",
          "body": "One comparative trial block, against a control block managed identically."
        },
        {
          "head": "Measurement",
          "body": "Water use and yield recorded over a full season, summer included."
        },
        {
          "head": "Extension",
          "body": "Gradual rollout to the remaining blocks, on the basis of what was measured."
        }
      ],
      "note": "The dosing rule is the same everywhere: 3 grams per litre of useful soil. What changes from one site to the next is the volume of soil the roots actually explore."
    },
    "risques": {
      "kicker": "WHAT TO ANTICIPATE",
      "title": "Identified risks and our answers",
      "left": {
        "head": "Risks",
        "lines": [
          "Summer heat above 45 °C and sandy soils: results vary strongly from one block to the next.",
          "Saline irrigation water in coastal areas, and caution toward any new soil input.",
          "Registration of fertilisers and soil conditioners before commercial sale.",
          "Long decision cycles at large agricultural companies and public bodies."
        ]
      },
      "right": {
        "head": "Our answers",
        "lines": [
          "Run trials over a full season against a control block, so the gain is documented in figures.",
          "A potassium formulation, never sodium: it adds no salinity and is safe for food crops.",
          "Prepare the regulatory file early: analyses and certificates before negotiation starts.",
          "Work through farmer associations and model farms to reach many growers at once."
        ]
      },
      "note": "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022: number and duration of droughts, +29% since 2000 versus 1980–1999.",
      "UN-Water / FAO AQUASTAT, SDG indicator 6.4.2: definition and thresholds of water stress."
    ],
    "closing": {
      "title": "Tell us about your farm",
      "body": "Crop, irrigation method, soil type, the volume of water you use today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  },
  "senegal": {
    "slug": "senegal",
    "locale": "fr-SN",
    "langue": "fr",
    "pdf": "/documents/countries/senegal.pdf",
    "photos": 6,
    "credits": [
      {
        "titre": "Agriculture Tradictionnelle.jpg",
        "auteur": "Abdoulaye9",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Irrigated rice cultivation in the Senegal River Valley - panoramio.jpg",
        "auteur": "Africa Rice Center",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Irrigated rice cultivation in the Senegal River Valley - panoramio (9).jpg",
        "auteur": "Africa Rice Center",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Irrigated rice cultivation in the Senegal River Valley - panoramio (14).jpg",
        "auteur": "Africa Rice Center",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Irrigated rice cultivation in the Senegal River Valley - panoramio (16).jpg",
        "auteur": "Africa Rice Center",
        "licence": "CC BY-SA 3.0",
        "source": "commons"
      },
      {
        "titre": "Vegetable crop production West Africa.jpg",
        "auteur": "T.K. Naliaka",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "DOSSIER DE MARCHÉ",
      "title": "Sénégal",
      "officiel": "RÉPUBLIQUE DU SÉNÉGAL",
      "lieu": "Dakar · 2026",
      "subtitle": "Arachide, riz du fleuve et maraîchage des Niayes sur des sols sableux et des pluies qui reculent.\nCe que l'hydro-rétention change quand chaque semaine sèche compte."
    },
    "chiffres": {
      "kicker": "LE MARCHÉ EN BREF",
      "title": "Un pays agricole à la pluie courte et aux sols pauvres",
      "items": [
        {
          "value": "≈ 17 %",
          "label": "du PIB provient de l'agriculture, élevage compris"
        },
        {
          "value": "≈ 3,8 M ha",
          "label": "de terres cultivables"
        },
        {
          "value": "≈ 1,5 M t",
          "label": "d'arachide récoltées les bonnes années"
        },
        {
          "value": "300–1 200 mm",
          "label": "de pluie par an, du Nord sahélien à la Casamance"
        }
      ],
      "note": "Environ 18 millions d'habitants, une façade atlantique et le fleuve Sénégal : le pays a les terres et une partie de l'eau, mais une agriculture encore largement pluviale, concentrée sur quelques mois d'hivernage. La souveraineté alimentaire, en particulier pour le riz, est une priorité affichée des pouvoirs publics."
    },
    "contrainte": {
      "kicker": "LA CONTRAINTE",
      "title": "Un hivernage court, des sols sableux qui ne gardent rien",
      "caption": null,
      "bullets": [
        "L'essentiel des pluies tombe en trois à quatre mois, de juillet à octobre : une pause de deux semaines après le semis suffit à compromettre la levée.",
        "Les sols sableux du bassin arachidier sont pauvres en matière organique : l'eau percole sous la zone racinaire en quelques heures.",
        "Au nord, la pluviométrie reste proche de 300 mm par an ; seule la Casamance dépasse régulièrement 1 000 mm.",
        "Dans les Niayes, le maraîchage dépend de nappes peu profondes qui baissent et se salinisent près de la côte.",
        "Dans la vallée du fleuve, l'eau est pompée à grands frais : chaque tour d'eau économisé réduit la facture de gasoil ou d'électricité."
      ],
      "photo": 1
    },
    "stress": {
      "kicker": "SÉCHERESSE ET STRESS HYDRIQUE",
      "title": "La pression augmente, mais le risque se lit localement",
      "type": "bar",
      "series": [
        {
          "name": "Indice mondial du nombre et de la durée des sécheresses",
          "labels": [
            "1980–1999",
            "Depuis 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Deux indicateurs, pas un raccourci",
        "body": "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux."
      }
    },
    "usages": {
      "kicker": "OÙ PART L'EAU",
      "title": "L'irrigation concentre presque tous les prélèvements",
      "type": "doughnut",
      "series": [
        {
          "name": "Prélèvements",
          "labels": [
            "Agriculture",
            "Eau potable",
            "Industrie"
          ],
          "values": [
            93,
            4,
            3
          ]
        }
      ],
      "reading": {
        "head": "Ce que cela implique",
        "body": "Les prélèvements agricoles se concentrent dans la vallée du fleuve et les Niayes, là où l'eau est pompée.\n\nC'est donc au champ que se joue l'économie d'eau, et sur les cultures irriguées que l'essai se chiffre le plus vite."
      }
    },
    "economie": {
      "kicker": "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
      "title": "La souveraineté alimentaire passe par le riz",
      "items": [
        {
          "value": "≈ 18 M",
          "label": "d'habitants, dont près de la moitié en ville"
        },
        {
          "value": "> 1 M t",
          "label": "de riz importées chaque année"
        },
        {
          "value": "≈ 25 000 t",
          "label": "de mangues exportées par an, surtout vers l'Europe"
        },
        {
          "value": "2024",
          "label": "début de la production pétrolière, qui rend la diversification urgente"
        }
      ],
      "note": "Le riz est l'aliment de base, et une grande partie en est importée, comme les légumes de contre-saison. Les programmes publics misent sur l'extension du riz irrigué dans la vallée du fleuve et sur la modernisation du maraîchage."
    },
    "productions": {
      "kicker": "LES FILIÈRES",
      "title": "Cinq productions structurent l'offre nationale",
      "type": "bar",
      "series": [
        {
          "name": "Production annuelle (millions de tonnes)",
          "labels": [
            "Arachide",
            "Riz paddy",
            "Mil",
            "Maïs",
            "Oignon"
          ],
          "values": [
            1.5,
            1.3,
            1,
            0.7,
            0.45
          ]
        }
      ],
      "reading": {
        "head": "Lecture",
        "body": "Arachide et mil occupent l'essentiel des surfaces pluviales du bassin arachidier.\n\nRiz irrigué et oignon, cultivés sous pompage, sont les filières où l'eau économisée se voit directement dans la marge. Volumes arrondis, variables selon l'hivernage."
      }
    },
    "filieres": [
      {
        "kicker": "FILIÈRE PHARE",
        "title": "Vallée du fleuve : produire plus avec la même eau",
        "caption": null,
        "bullets": [
          "Les périmètres irrigués de la vallée du fleuve Sénégal portent l'essentiel de la politique d'autosuffisance en riz.",
          "Les rendements varient fortement d'un aménagement à l'autre, selon la maîtrise de l'eau et le calendrier cultural.",
          "Le pompage pèse lourd dans le coût de production, et les parcelles sableuses en bordure perdent beaucoup d'eau.",
          "Oignon, tomate et patate douce en contre-saison diversifient les revenus sur les mêmes périmètres.",
          "Sur ces cultures de diversification, EVERGREEN® se teste en une saison ; le riz en submersion n'est pas sa cible."
        ],
        "photo": 2
      }
    ],
    "solutions": {
      "kicker": "NOTRE RÉPONSE",
      "title": "Retenir l'eau, nourrir sans épuiser",
      "left": {
        "head": "EVERGREEN® — retenir l'eau",
        "lines": [
          "Hydro-rétenteur à base de potassium, placé dans la zone racinaire au semis, à la plantation ou à la reprise.",
          "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui amortit une pause de pluie en début d'hivernage.",
          "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
          "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage."
        ]
      },
      "right": {
        "head": "ECOFERT® — nourrir sans épuiser",
        "lines": [
          "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
          "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà fragile sur sols sableux.",
          "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les exportateurs de légumes et de mangues.",
          "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation."
        ]
      },
      "note": "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans dégrader le sol."
    },
    "economies": {
      "kicker": "ORDRES DE GRANDEUR",
      "title": "Économie d'eau attendue selon le mode d'irrigation",
      "type": "bar",
      "series": [
        {
          "name": "Fourchette basse (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Pivot",
            "Gravitaire"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "Fourchette haute (%)",
          "labels": [
            "Goutte-à-goutte",
            "Aspersion",
            "Pivot",
            "Gravitaire"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "À lire avec prudence",
        "body": "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue."
      }
    },
    "regions": {
      "kicker": "TROIS TERRAINS PRIORITAIRES",
      "title": "Où engager les premiers essais",
      "items": [
        {
          "head": "Vallée du fleuve Sénégal",
          "metric": "Riz et oignon irrigués",
          "lines": [
            "Périmètres irrigués aménagés par la SAED, de Saint-Louis à Matam.",
            "Pompage coûteux et parcelles sableuses en bordure : l'eau économisée se lit sur la facture.",
            "Organisations paysannes structurées, capables de suivre un essai sur une campagne."
          ],
          "photo": 4
        },
        {
          "head": "Niayes",
          "metric": "Premier bassin maraîcher",
          "lines": [
            "Bande côtière de Dakar à Saint-Louis, qui produit l'essentiel des légumes du pays.",
            "Nappes peu profondes en baisse et salinisation près de la mer.",
            "Cultures à cycle court et à forte valeur : un essai se conclut en une saison."
          ],
          "photo": 5
        },
        {
          "head": "Bassin arachidier",
          "metric": "Arachide et mil pluviaux",
          "lines": [
            "Arachide et mil sur sols sableux épuisés, dans le centre du pays.",
            "Semis exposés aux pauses de pluie de début d'hivernage.",
            "Coopératives et huiliers capables de regrouper les commandes."
          ],
          "photo": 0
        }
      ]
    },
    "deploiement": {
      "kicker": "COMMENT NOUS PROCÉDONS",
      "title": "Un déploiement par étapes, mesuré à chaque palier",
      "items": [
        {
          "head": "Diagnostic",
          "body": "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade."
        },
        {
          "head": "Parcelle témoin",
          "body": "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique."
        },
        {
          "head": "Mesure",
          "body": "Relevés de levée, de consommation d'eau et de rendement sur une campagne complète."
        },
        {
          "head": "Extension",
          "body": "Généralisation progressive aux autres parcelles sur la base des résultats constatés."
        }
      ],
      "note": "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines."
    },
    "risques": {
      "kicker": "CE QU'IL FAUT ANTICIPER",
      "title": "Risques identifiés et réponses",
      "left": {
        "head": "Risques",
        "lines": [
          "Trésorerie limitée des petits producteurs pluviaux.",
          "Variabilité de l'hivernage : une bonne année masque l'intérêt du produit.",
          "Produit peu connu, parfois confondu avec les polymères à base de sodium.",
          "Homologation des intrants auprès des autorités avant la vente commerciale."
        ]
      },
      "right": {
        "head": "Réponses",
        "lines": [
          "Commencer par le maraîchage des Niayes et les cultures irriguées, où le gain se chiffre vite.",
          "Mesurer sur une campagne complète avec parcelle témoin, même en bonne année.",
          "Documenter la formulation potassique, sans sodium, compatible avec les cultures alimentaires.",
          "Ouvrir le dossier d'homologation en parallèle des premiers essais."
        ]
      },
      "note": "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
      "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique."
    ],
    "closing": {
      "title": "Dites-nous votre parcelle",
      "body": "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse"
    }
  },
  "soudan-sud": {
    "slug": "soudan-sud",
    "locale": "en-SS",
    "langue": "en",
    "pdf": "/documents/countries/soudan-sud.pdf",
    "photos": 6,
    "credits": [
      {
        "titre": "Harvested grain in Mundri.jpg",
        "auteur": "Vetiverman",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "A kitchen garden next to a homestead of a South Sudanese.jpg",
        "auteur": "Lomoraronald",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "A afarmer in her farm.jpg",
        "auteur": "Kabang Bladina Gideon",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "A banana plantation.jpg",
        "auteur": "Kabang Bladina Gideon",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Women cool off after clearing the farm in South Sudan.jpg",
        "auteur": "Lomoraronald",
        "licence": "CC BY-SA 4.0",
        "source": "commons"
      },
      {
        "titre": "Small-scale farmers increase production (7536268172).jpg",
        "auteur": "Oxfam East Africa",
        "licence": "CC BY 2.0",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "MARKET DOSSIER",
      "title": "South Sudan",
      "officiel": "REPUBLIC OF SOUTH SUDAN",
      "lieu": "Juba · 2026",
      "subtitle": "Sorghum, maize, cassava and vegetables in a country of floods and dry spells.\nWhere hydro-retention helps, and where drainage must come first."
    },
    "chiffres": {
      "kicker": "THE MARKET IN BRIEF",
      "title": "A farming country that cannot yet feed itself",
      "items": [
        {
          "value": "≈ 80 %",
          "label": "of households depend on crops or livestock"
        },
        {
          "value": "≈ 4 %",
          "label": "of the land area is cultivated"
        },
        {
          "value": "≈ 25 %",
          "label": "cereal deficit after the 2024 harvest"
        },
        {
          "value": "≈ 7.7 M",
          "label": "people projected in acute food insecurity (IPC)"
        }
      ],
      "note": "South Sudan combines vast arable land, large herds and the White Nile system, yet most production is rain-fed, small-scale and exposed to conflict, poor roads and repeated floods. Oil still provides the large majority of export earnings."
    },
    "contrainte": {
      "kicker": "THE CONSTRAINT",
      "title": "Too much water in some places, too little in others",
      "caption": null,
      "bullets": [
        "The Greenbelt of Western and Central Equatoria has a long rainy season, while the east and north face shorter rains and dry spells.",
        "The Sudd wetland and the northern flood plains stay inundated for months: several years of major floods have displaced families and destroyed crops.",
        "Most farming is rain-fed on small plots worked by hand, with little access to seed, fertiliser or extension services.",
        "Poor roads cut markets off in the rainy season, and Juba relies heavily on food trucked in from neighbouring countries.",
        "Water retention only makes sense on well-drained, drought-exposed plots. On flood-prone land, drainage and raised planting come first."
      ],
      "photo": 4
    },
    "stress": {
      "kicker": "DROUGHT AND WATER STRESS",
      "title": "Pressure is rising, but risk remains local",
      "type": "bar",
      "series": [
        {
          "name": "Global index of drought number and duration",
          "labels": [
            "1980–1999",
            "Since 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Two indicators, not a shortcut",
        "body": "Worldwide, the number and duration of droughts have risen by 29% since 2000 compared with the two previous decades.\n\nWater stress measures something different: withdrawals as a share of renewable resources available after environmental needs. This global signal is therefore not a country forecast; it must be read alongside local rainfall, aquifers, seasons and uses."
      }
    },
    "usages": {
      "kicker": "THE FOOD BALANCE",
      "title": "Local cereal output covers about three quarters of needs",
      "type": "bar",
      "series": [
        {
          "name": "Million tonnes of cereals",
          "labels": [
            "Net output, 2024",
            "Estimated requirement"
          ],
          "values": [
            1.12,
            1.5
          ]
        }
      ],
      "reading": {
        "head": "What this implies",
        "body": "The gap of roughly 25 % is filled by imports from neighbouring countries and by food assistance.\n\nEvery tonne produced locally on a reliable basis replaces a trucked-in tonne whose price rises with fuel costs and insecurity."
      }
    },
    "economie": {
      "kicker": "ECONOMY AND FOOD SECURITY",
      "title": "An oil economy where most people live from the land",
      "items": [
        {
          "value": "≈ 90 %",
          "label": "of export earnings come from oil"
        },
        {
          "value": "≈ 12 M",
          "label": "inhabitants, most of them in rural areas"
        },
        {
          "value": "2011",
          "label": "independence, with agriculture named a priority for diversification"
        }
      ],
      "note": "Imports, humanitarian assistance and trade with Uganda, Kenya and Sudan fill much of the gap between local output and needs. Every stable gain in local production, storage and transport reduces exposure to price shocks and supply interruptions."
    },
    "productions": {
      "kicker": "THE MAIN CROPS",
      "title": "Sorghum dominates the cereal area",
      "type": "bar",
      "series": [
        {
          "name": "Share of cereal area (%)",
          "labels": [
            "Sorghum",
            "Maize",
            "Millet",
            "Rice"
          ],
          "values": [
            70,
            22,
            6,
            2
          ]
        }
      ],
      "reading": {
        "head": "Reading",
        "body": "Sorghum is grown almost everywhere and underpins household food security.\n\nMaize and cassava lead in the Greenbelt of Western Equatoria, where rainfall and soils respond best to improved practices. Shares are rounded orders of magnitude."
      }
    },
    "filieres": [
      {
        "kicker": "LEADING SECTOR",
        "title": "Maize and cassava: the Greenbelt opportunity",
        "caption": null,
        "bullets": [
          "Western Equatoria has the rainfall, soils and season length to supply Juba and regional markets.",
          "Controlled trials near Yambio and Nzara reached 4.7 t/ha of maize with nitrogen and phosphorus, against 2.9 t/ha on control plots.",
          "Cassava is the resilience crop: it stays in the ground through bad years and feeds households between harvests.",
          "Roads, storage and processing, more than rainfall, decide whether a surplus reaches a market.",
          "EVERGREEN® and ECOFERT® are to be trialled on drained plots exposed to dry spells, against an untreated control."
        ],
        "photo": 5
      }
    ],
    "solutions": {
      "kicker": "OUR RESPONSE",
      "title": "Two technologies, for drained land under dry spells",
      "left": {
        "head": "EVERGREEN® — holding the water",
        "lines": [
          "A potassium-based hydro-retainer placed in the root zone of drained, drought-exposed plots.",
          "It captures rain and releases it back to the plant gradually, bridging dry spells at emergence and flowering.",
          "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
          "Breaks down by 20 to 25 % a year, with no build-up and no risk of overdosing."
        ]
      },
      "right": {
        "head": "ECOFERT® — feeding without depleting",
        "lines": [
          "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
          "Non-chelating: it does not strip the clay-humus complex of soils that are often low in organic matter.",
          "Certified SOHISCERT and EU Bio, in use in 60 countries.",
          "1 to 4 bottles of 140 ml per hectare, applied with a knapsack sprayer."
        ]
      },
      "note": "Neither product replaces drainage, good seed or safe storage. They are trialled where water shortage, not waterlogging, limits the crop."
    },
    "economies": {
      "kicker": "ORDERS OF MAGNITUDE",
      "title": "Expected water saving by irrigation method",
      "type": "bar",
      "series": [
        {
          "name": "Low end of range (%)",
          "labels": [
            "Drip",
            "Sprinkler",
            "Hand watering",
            "Furrow"
          ],
          "values": [
            40,
            50,
            55,
            55
          ]
        },
        {
          "name": "High end of range (%)",
          "labels": [
            "Drip",
            "Sprinkler",
            "Hand watering",
            "Furrow"
          ],
          "values": [
            55,
            65,
            70,
            70
          ]
        }
      ],
      "reading": {
        "head": "Read with caution",
        "body": "These ranges are indicative and based on the savings documented for our hydro-retainers.\n\nThe actual result depends on the soil, the climate and the crop. They give an order of magnitude and are in no case a guaranteed, contractual or absolute value."
      }
    },
    "regions": {
      "kicker": "THREE PRIORITY AREAS",
      "title": "Where to run the first trials",
      "items": [
        {
          "head": "Western Equatoria",
          "metric": "The Greenbelt",
          "lines": [
            "Maize, cassava, groundnut and vegetables under a long rainy season.",
            "Trials near Yambio and Nzara reached 4.7 t/ha of maize with fertiliser, against 2.9 t/ha on control plots.",
            "Better access and security than most regions for a monitored pilot."
          ],
          "photo": 3
        },
        {
          "head": "Central Equatoria — Juba",
          "metric": "Peri-urban vegetables",
          "lines": [
            "Tomato, onion, okra and leafy vegetables for a city that imports much of its food.",
            "Hand watering and dry-season irrigation from wells and the Nile.",
            "Short cycles and a cash market: a trial shows results in one season."
          ],
          "photo": 2
        },
        {
          "head": "Northern Bahr el Ghazal",
          "metric": "Sorghum and rice",
          "lines": [
            "Rain-fed sorghum, and irrigated rice on the Aweil scheme.",
            "Dry spells early in the season, floods late: plots must be selected with care.",
            "Farmer groups already supported by FAO and NGO programmes."
          ],
          "photo": 0
        }
      ]
    },
    "deploiement": {
      "kicker": "HOW WE WORK",
      "title": "A staged rollout, measured at every step",
      "items": [
        {
          "head": "Site assessment",
          "body": "Drainage, soil, crop and access are reviewed. No commitment at this stage."
        },
        {
          "head": "Trial plot",
          "body": "One comparative plot on drained land, against a control plot managed identically."
        },
        {
          "head": "Measurement",
          "body": "Emergence, water use and yield recorded over a full season."
        },
        {
          "head": "Extension",
          "body": "Gradual rollout to other plots and sites, on the basis of what was measured."
        }
      ],
      "note": "The dosing rule is the same everywhere: 3 grams per litre of useful soil. What changes from one site to the next is the volume of soil the roots actually explore."
    },
    "risques": {
      "kicker": "WHAT TO ANTICIPATE",
      "title": "Identified risks and our answers",
      "left": {
        "head": "Risks",
        "lines": [
          "Insecurity and poor roads, which limit access to trial sites and raise transport costs.",
          "Flooding: waterlogged land gains nothing from water retention.",
          "Very little cash among smallholders, and dependence on donor-funded programmes.",
          "Import logistics through Uganda or Kenya, with long lead times."
        ]
      },
      "right": {
        "head": "Our answers",
        "lines": [
          "Start with accessible, secure pilot sites around Juba and in Western Equatoria.",
          "Select only drained, drought-exposed plots, after a site assessment.",
          "Work through FAO, NGOs and donor programmes that already supply inputs to farmers.",
          "Group orders and hold a buffer stock in Juba before the planting season."
        ]
      },
      "note": "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027."
    },
    "sources": [
      "UNCCD, Drought in Numbers 2022: number and duration of droughts, +29% since 2000 versus 1980–1999.",
      "UN-Water / FAO AQUASTAT, SDG indicator 6.4.2: definition and thresholds of water stress."
    ],
    "closing": {
      "title": "Tell us about your plot",
      "body": "Crop, drainage, soil type and how you water today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  },
  "usa": {
    "slug": "usa",
    "locale": "en-US",
    "langue": "en",
    "pdf": "/documents/countries/usa.pdf",
    "photos": 2,
    "credits": [
      {
        "titre": "20090915-USDA-OC-PSD-0002 - 54674579668 Agriculture in the United States.jpg",
        "auteur": "USDAgov",
        "licence": "Public domain",
        "source": "commons"
      },
      {
        "titre": "20090914-USDA-OC-PSD-0003 Agriculture in the United States.jpg",
        "auteur": "USDAgov",
        "licence": "Public domain",
        "source": "commons"
      }
    ],
    "cover": {
      "eyebrow": "MARKET DOSSIER",
      "title": "United States",
      "officiel": "UNITED STATES OF AMERICA",
      "lieu": "Washington · 2026",
      "subtitle": "Row crops, permanent plantings and specialty produce on a shrinking water budget.\nWhat hydro-retention changes for irrigated acres."
    },
    "chiffres": {
      "kicker": "THE MARKET AT A GLANCE",
      "title": "A large export sector working on a tighter water budget",
      "items": [
        {
          "value": "880M acres",
          "label": "of land in farms, about 40% of the land area"
        },
        {
          "value": "≈ 55M acres",
          "label": "under irrigation, three quarters of it in the West"
        },
        {
          "value": "≈ $180 B",
          "label": "in annual agricultural and food exports"
        },
        {
          "value": "≈ 2.6 M",
          "label": "people working on farms, near 1.4% of all U.S. jobs"
        }
      ],
      "note": "Farming contributes roughly 1% of GDP on its own, and close to 5% once processing and distribution are counted. Output is concentrated: a small share of operations generates most of the production value, and irrigated acres deliver far more than their proportion of that total."
    },
    "contrainte": {
      "kicker": "THE CONSTRAINT",
      "title": "Water scarcity here is regional, and it is structural",
      "caption": "Center-pivot irrigation, Great Plains",
      "bullets": [
        "Annual precipitation runs from under 10 inches (≈ 250 mm) in the Desert Southwest to more than 50 inches (≈ 1,270 mm) in the Southeast. Irrigation follows that gradient.",
        "About three quarters of irrigated acreage sits in the 17 western states, where most crops cannot be brought to harvest without applied water in a normal season.",
        "The Colorado River serves some 40 million people and roughly 5 million irrigated acres. Lake Mead and Lake Powell have operated near a third of capacity in recent years.",
        "The Ogallala Aquifer supports close to 12 million irrigated acres across eight states. In parts of Kansas and the Texas Panhandle, water levels have fallen by more than 100 feet.",
        "Public policy works on supply — storage, recycling, fallowing payments, groundwater plans California basins must balance by 2040. Hydro-retention works on demand, in the root zone."
      ],
      "photo": 3
    },
    "stress": {
      "kicker": "DROUGHT AND WATER STRESS",
      "title": "Pressure is rising, but risk remains local",
      "type": "bar",
      "series": [
        {
          "name": "Global index of drought number and duration",
          "labels": [
            "1980–1999",
            "Since 2000"
          ],
          "values": [
            100,
            129
          ]
        }
      ],
      "reading": {
        "head": "Two indicators, not a shortcut",
        "body": "Worldwide, the number and duration of droughts have risen by 29% since 2000 compared with the two previous decades.\n\nWater stress measures something different: withdrawals as a share of renewable resources available after environmental needs. This global signal is therefore not a country forecast; it must be read alongside local rainfall, aquifers, seasons and uses."
      }
    },
    "usages": {
      "kicker": "WHERE THE WATER GOES",
      "title": "Irrigation and power cooling dominate withdrawals",
      "type": "doughnut",
      "series": [
        {
          "name": "Withdrawals",
          "labels": [
            "Agriculture",
            "Public supply",
            "Industry & power"
          ],
          "values": [
            40,
            13,
            47
          ]
        }
      ],
      "reading": {
        "head": "What this means",
        "body": "The industrial share is inflated by once-through cooling at power plants, which returns most of its water to the river.\n\nIrrigation is different: most of what is applied is consumed. In consumptive terms, farming accounts for the large majority of U.S. freshwater use."
      }
    },
    "economie": {
      "kicker": "ECONOMY AND FOOD SYSTEM",
      "title": "The largest farm exporter, on a tightening water ledger",
      "items": [
        {
          "value": "≈ 1.9 M",
          "label": "farms, averaging about 460 acres each"
        },
        {
          "value": "≈ 0.7 %",
          "label": "of GDP from farms alone, over 5 % with food industries"
        },
        {
          "value": "≈ $59 B",
          "label": "in 2023 farm cash receipts for California, the top state"
        },
        {
          "value": "≈ 80 %",
          "label": "of the world's almonds grown in California"
        }
      ],
      "note": "Fruit, nuts and vegetables cover a small share of cropland but a large share of farm value, and most of them are irrigated in the West. California's Sustainable Groundwater Management Act and falling water tables on the High Plains now cap how much water those acres can draw."
    },
    "productions": {
      "kicker": "THE MAJOR CROPS",
      "title": "Five outputs carry the bulk of farm volume",
      "type": "bar",
      "series": [
        {
          "name": "Annual output (million metric tons)",
          "labels": [
            "Corn",
            "Soybeans",
            "Hay & forage",
            "Wheat",
            "Potatoes"
          ],
          "values": [
            380,
            115,
            110,
            50,
            19
          ]
        }
      ],
      "reading": {
        "head": "Reading",
        "body": "Corn and soybeans carry the volume, largely rain-fed across the Midwest.\n\nHay and forage are the single largest consumer of irrigation water in the West; alfalfa alone takes a significant share of Colorado River deliveries. Potatoes and specialty crops carry the highest value per acre."
      }
    },
    "filieres": [
      {
        "kicker": "FIRST SECTOR",
        "title": "California specialty crops: every acre-foot is margin",
        "caption": null,
        "bullets": [
          "California grows most U.S. almonds, pistachios, table grapes, strawberries and processing tomatoes, all under irrigation.",
          "In drought years surface-water allocations have fallen close to zero, pushing growers onto groundwater.",
          "SGMA requires groundwater basins to reach sustainable pumping by the early 2040s: less water per acre, or fewer acres.",
          "Orchards cannot be rotated out in a dry year; keeping the root zone moist protects a multi-decade investment.",
          "A water retainer placed at planting, or when an orchard is renewed, lengthens the interval between irrigations."
        ],
        "photo": 4
      },
      {
        "kicker": "SECOND SECTOR",
        "title": "High Plains corn above a shrinking Ogallala",
        "caption": null,
        "bullets": [
          "The Ogallala aquifer underlies parts of eight states and carries much of the irrigated corn, sorghum and cotton of the High Plains.",
          "In southwest Kansas and the Texas Panhandle, some wells no longer yield enough for full irrigation.",
          "Local districts now set pumping limits, and growers are shifting to fewer pivot acres or limited irrigation.",
          "For grain crops we claim no yield gain without a field trial: the case rests on the water saved per acre.",
          "Trials pair a treated pivot sector with an untreated one, measured over a full season with soil-moisture probes."
        ],
        "photo": 5
      }
    ],
    "solutions": {
      "kicker": "OUR ANSWER",
      "title": "Two technologies for two different constraints",
      "left": {
        "head": "EVERGREEN® — hold the water",
        "lines": [
          "Potassium-based hydro-retainer, placed in the root zone at planting or at the first pass of the season.",
          "Captures rain and irrigation water, then releases it back to the plant as demand arises, removing water stress during the critical growth stages.",
          "Absorbs on the order of 300 times its own weight; useful life of 3 to 4 years in the soil.",
          "Degrades by 20 to 25% per year, with no accumulation and no risk of overdose."
        ]
      },
      "right": {
        "head": "ECOFERT® — feed without depleting",
        "lines": [
          "Microdose fertilizer built on amino acids, nitrogen, phosphorus and potassium, sourced from renewable inputs.",
          "Non-chelating: it does not strip the clay-humus complex and does not raise soil salinity or nitrate load.",
          "SOHISCERT and EU Organic certified — the condition of entry to organic and export buyer programs.",
          "1 to 4 bottles of 140 ml per hectare, compatible with existing fertigation equipment."
        ]
      },
      "note": "The two products are sold separately but were designed to reinforce one another: the hydro-retainer extends how long water stays available, the fertilizer converts that available water into growth without degrading the soil."
    },
    "economies": {
      "kicker": "ORDERS OF MAGNITUDE",
      "title": "Expected water savings by irrigation method",
      "type": "bar",
      "series": [
        {
          "name": "Low end (%)",
          "labels": [
            "Drip",
            "Sprinkler",
            "Center pivot",
            "Furrow / flood"
          ],
          "values": [
            40,
            50,
            50,
            55
          ]
        },
        {
          "name": "High end (%)",
          "labels": [
            "Drip",
            "Sprinkler",
            "Center pivot",
            "Furrow / flood"
          ],
          "values": [
            55,
            65,
            65,
            70
          ]
        }
      ],
      "reading": {
        "head": "Read with care",
        "body": "These ranges are indicative and rest on documented gains from our hydro-retainers.\n\nActual results depend on the soil, the climate and the crop. The figures give an order of magnitude only: they are in no case a guaranteed, contractual or absolute value."
      }
    },
    "regions": {
      "kicker": "THREE PRIORITY AREAS",
      "title": "Where to run the first trials",
      "items": [
        {
          "head": "Central Valley, CA",
          "metric": "≈ 5M irrigated acres",
          "lines": [
            "More than 250 crops on one valley floor — almonds, pistachios, grapes, processing tomatoes. Permanent plantings cannot simply be fallowed in a dry year.",
            "State groundwater plans tighten pumping allowances through 2040: growers need savings per acre, not new supply.",
            "Drip and micro-sprinkler are already standard, so the remaining gain has to come from the soil itself."
          ],
          "photo": 1
        },
        {
          "head": "High Plains",
          "metric": "≈ 12M irrigated acres",
          "lines": [
            "Corn, sorghum, cotton and alfalfa across Nebraska, Kansas, Colorado and the Texas Panhandle, almost entirely on center pivot.",
            "Aquifer levels have declined for decades; well yields fall and pumping lift rises, pushing up energy cost per acre-inch applied.",
            "Sandy and sandy-loam soils hold little water — retention in the root zone has a direct, measurable effect."
          ],
          "photo": 4
        },
        {
          "head": "Columbia Basin",
          "metric": "≈ 700k irrigated acres",
          "lines": [
            "Potatoes, apples, hops, onions and wine grapes on sandy volcanic soils with very low water-holding capacity.",
            "Under 10 inches of rain a year: every acre depends on delivered water from the Columbia River system.",
            "High value per acre and strict packer quality specifications justify spending on per-acre inputs."
          ],
          "photo": 2
        }
      ]
    },
    "deploiement": {
      "kicker": "HOW WE PROCEED",
      "title": "A staged rollout, measured at every step",
      "items": [
        {
          "head": "Assessment",
          "body": "Review of the soil, the irrigation method and the crop. No commitment at this stage."
        },
        {
          "head": "Trial block",
          "body": "A comparative trial on one block, against a control block managed identically."
        },
        {
          "head": "Measurement",
          "body": "Water use and yield recorded across a full production cycle."
        },
        {
          "head": "Rollout",
          "body": "Gradual extension to the remaining acres on the basis of the results observed."
        }
      ],
      "note": "The dosing rule is the same everywhere: 3 grams per liter of usable soil. What changes from one field to the next is the volume of soil the roots actually explore."
    },
    "risques": {
      "kicker": "WHAT TO ANTICIPATE",
      "title": "Identified risks and how we answer them",
      "left": {
        "head": "Risks",
        "lines": [
          "Year-to-year rainfall variability: a wet season masks the value of the product.",
          "Long purchasing cycles and agronomist sign-off on large operations, plus dealer and co-op channels to qualify.",
          "Memory of low-grade sodium-based polymers, which left a poor reputation among growers.",
          "Tight margins on row crops when input costs rise faster than commodity prices."
        ]
      },
      "right": {
        "head": "Answers",
        "lines": [
          "Run the trial over a full cycle with a control block, so the gain is documented even in a favorable season.",
          "Work through dealers, co-ops and crop consultants rather than farm by farm, and supply the trial protocol in advance.",
          "Document the formulation: potassium, never sodium, compatible with food crops and with soil health.",
          "Spread the outlay: a 3 to 4 year useful life amortizes the cost across several seasons."
        ]
      },
      "note": "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g), REACH / SVHC screening (SGS) and the SOHISCERT certificate valid to 4 September 2027 are all available on request."
    },
    "sources": [
      "USDA NASS: 2022 Census of Agriculture, state farm cash receipts.",
      "USDA ERS: agriculture and food sectors in the economy, farm exports.",
      "USGS: estimated water use in the United States, High Plains aquifer monitoring.",
      "California Department of Water Resources (SGMA); Almond Board of California.",
      "UNCCD, Drought in Numbers 2022: number and duration of droughts, +29% since 2000 versus 1980–1999.",
      "UN-Water / FAO AQUASTAT, SDG indicator 6.4.2: definition and thresholds of water stress."
    ],
    "closing": {
      "title": "Tell us about your field",
      "body": "Crop, irrigation method, soil type, and the water volume you apply today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable conditions.\n\nA first conversation commits you to nothing.",
      "contact": "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland"
    }
  }
};

/** Les pays qui ont un dossier rédigé, dans l'ordre alphabétique de leur clé. */
export const DOSSIER_SLUGS = Object.keys(DOSSIERS);
