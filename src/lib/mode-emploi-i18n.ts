/**
 * Le mode d'emploi EVERGREEN® / ECOSORB® (document de Gabriel), dans les 14 langues du site.
 * Fichier écrit par un script à partir des textes du Word : à régénérer plutôt qu'à éditer à la main.
 */
import type { Lang } from "./content";

export type Bloc =
  | { t: "T" | "S" | "X"; x: string }
  | { t: "PHOTO"; n: number }
  | { t: "COTE"; n: number; x: string[] }
  | { t: "RANGEE"; n: number[] };

export type ModeEmploiTexte = {
  lang: string;
  eyebrow: string;
  titre: string;
  bouton: string;
  sommaire: string;
  blocs: Bloc[];
};

export const MODE_EMPLOI: Record<Lang, ModeEmploiTexte> = {
  "fr": {
    "lang": "fr-FR",
    "eyebrow": "MODE D'EMPLOI",
    "titre": "Mise en œuvre des hydrorétenteurs EVERGREEN® et ECOSORB®",
    "bouton": "Mode d'emploi EVERGREEN® et ECOSORB®",
    "sommaire": "Sommaire",
    "blocs": [
      {
        "t": "T",
        "x": "1. Principes d’utilisation"
      },
      {
        "t": "X",
        "x": "Les deux hydrorétenteurs peuvent être appliqués à la main ou à la machine, sous forme de granulés secs ou préhydratés (hydrogel). Le choix dépend du matériel disponible et des objectifs de culture. Les gestes changent peu en application manuelle. En revanche, chaque forme demande une méthode et un équipement différents en application mécanisée."
      },
      {
        "t": "X",
        "x": "Pour manipuler le produit sec, utilisez du matériel sec. Au contact de l’humidité, les granulés deviennent collants, ce qui gêne le travail à la main. Dans une machine, ils risquent d’obstruer les systèmes de reprise et d’amenée au sol et d’en empêcher le fonctionnement."
      },
      {
        "t": "T",
        "x": "2. Plantation avec des granulés secs"
      },
      {
        "t": "X",
        "x": "L’application est rapide si chaque planteur dispose sur la parcelle d’un outil de dosage qu’il sait utiliser. Gardez les mains sèches et utilisez un doseur propre et sec. Les granulés adhèrent aux surfaces humides, ce qui entraîne des pertes ou une mauvaise répartition du produit."
      },
      {
        "t": "X",
        "x": "Le tableau de dosage de Green Solutions indique la dose de référence pour chaque culture. Ces préconisations reposent sur les meilleurs résultats obtenus en fonction des plantes, du sol et du climat. Consultez-nous avant de modifier la dose."
      },
      {
        "t": "X",
        "x": "Creusez un trou de plantation 30 % plus profond que d’habitude. Cet espace permet aux granulés de gonfler en absorbant l’eau de pluie ou d’arrosage. Si le trou est trop peu profond, le gonflement risque de soulever le plant et d’exposer ses racines à l’air, au détriment de la plante et de l’efficacité de l’hydrorétenteur."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Plantation avec des granulés hydratés"
      },
      {
        "t": "X",
        "x": "L’hydrogel est immédiatement actif dans le sol. L’eau présente au niveau des racines supprime le stress hydrique lié à la transplantation. Le plant dispose dès le repiquage d’une réserve d’eau plus durable et plus efficace que celle d’un seul arrosage à la plantation."
      },
      {
        "t": "S",
        "x": "Dosage de l’hydrogel"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Respectez le tableau de dosage. Un gramme d’EVERGREEN® sec correspond à environ 100 g d’hydrogel d’EVERGREEN®. Pour repiquer un plant de tomate, comptez 3 g de produit sec ou environ 300 g d’hydrogel.",
          "L’hydrogel se dose plus facilement que quelques grammes de granulés secs. Une bouteille d’eau découpée ou une boîte de conserve peut servir de dosette. Le récipient doit être propre et calibré pour la dose préconisée (voir le tutoriel).",
          "Avec l’hydrogel, le planteur voit le volume nécessaire pour loger le produit, la terre et le plant. Le produit ayant déjà gonflé, on évite ainsi l’expulsion du plant lorsque le trou n’a pas été creusé plus profondément."
        ]
      },
      {
        "t": "S",
        "x": "Arrosage au semis ou à la plantation"
      },
      {
        "t": "X",
        "x": "Arrosez pour humidifier le sol autour du plant et permettre à l’hydrogel de continuer à se charger en eau. Cet apport est moins important qu’avec des granulés secs, qui nécessitent un arrosage abondant pour se charger au moment de la plantation."
      },
      {
        "t": "X",
        "x": "Les cultures doivent ensuite être arrosées, quelle que soit la forme utilisée. Les produits permettent de réduire les besoins en eau d’au moins 50 %."
      },
      {
        "t": "T",
        "x": "4. Préparation du chantier"
      },
      {
        "t": "X",
        "x": "Avant le semis ou la plantation, réunissez le matériel nécessaire et prévoyez les effectifs adaptés, que vous utilisiez les granulés secs ou préhydratés."
      },
      {
        "t": "S",
        "x": "Préparation et conservation de l’hydrogel"
      },
      {
        "t": "X",
        "x": "L’hydrogel peut être préparé la veille du chantier. Utilisez-le dans les deux jours qui suivent sa préparation. Si vous le stockez en vue d’une utilisation le lendemain, gardez-le à l’abri du soleil et de la chaleur directe. Cette précaution de stockage concerne la période qui précède la plantation."
      },
      {
        "t": "S",
        "x": "Propreté du matériel"
      },
      {
        "t": "X",
        "x": "Vérifiez la propreté des récipients et du matériel. Des résidus de produits phytosanitaires peuvent rester actifs dans l’hydrogel et nuire à la croissance du végétal. La même précaution s’applique aux seaux ayant contenu des produits de nettoyage ou d’autres produits non destinés à un usage agricole."
      },
      {
        "t": "T",
        "x": "5. Application mécanisée des granulés secs"
      },
      {
        "t": "X",
        "x": "L’application à sec est la principale méthode de mise en œuvre mécanique des hydrorétenteurs."
      },
      {
        "t": "S",
        "x": "Microgranulateur"
      },
      {
        "t": "X",
        "x": "Le microgranulateur dépose les granulés d’hydrorétenteur en ligne, sous la ligne de semis. Une trémie reçoit le produit et un entraînement mécanique assure le dosage. Les granulés descendent ensuite par gravité ou sont répartis par un système pneumatique."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Parmi les fabricants et distributeurs de microgranulateurs figurent MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM et PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Matériel STARTEC : https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Travaillez à l’abri de la pluie et d’une forte humidité pour éviter que les granulés ne s’agglomèrent et ne bouchent les tuyaux de répartition. Calculez la dose au mètre linéaire, puis réglez le microgranulateur en conséquence."
      },
      {
        "t": "S",
        "x": "Épandeur et fraise rotative"
      },
      {
        "t": "X",
        "x": "Pour les céréales et les semis de gazon, les granulés secs peuvent être épandus puis enfouis à la fraise rotative au moment du semis. L’opération est comparable à l’épandage et à l’enfouissement d’engrais avec un combiné de semis conventionnel."
      },
      {
        "t": "T",
        "x": "6. Injection d’hydrogel sur les végétaux en place"
      },
      {
        "t": "X",
        "x": "L’hydrogel s’applique facilement à la main. Son application mécanisée demande davantage de moyens. L’injection concerne uniquement les végétaux déjà en place, notamment les arbres. Elle vise à relancer l’activité végétale ou à renforcer la résistance de l’arbre en milieu sec. Ces deux objectifs peuvent être associés."
      },
      {
        "t": "S",
        "x": "Préparation et injection"
      },
      {
        "t": "X",
        "x": "Mélangez les granulés secs avec de l’eau, de préférence sur le chantier. Une préparation avec transport en cuves peut également être organisée."
      },
      {
        "t": "X",
        "x": "Selon la taille et l’âge de l’arbre, effectuez trois à quatre injections au niveau des racines. Enfoncez l’aiguille de l’injecteur pneumatique dans le sol. L’air comprimé permet d’injecter la dose d’hydrogel contenue dans la cuve."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Exemples de matériel de la société COSERWA : https://www.coserwa.com/"
      }
    ]
  },
  "en": {
    "lang": "en-GB",
    "eyebrow": "INSTRUCTIONS FOR USE",
    "titre": "Application of EVERGREEN® and ECOSORB® water retainers",
    "bouton": "EVERGREEN® and ECOSORB® user guide",
    "sommaire": "Contents",
    "blocs": [
      {
        "t": "T",
        "x": "1. Principles of use"
      },
      {
        "t": "X",
        "x": "Both water retainers can be applied by hand or by machine, as dry or pre-hydrated granules (hydrogel). The choice depends on the available equipment and crop requirements. The handling changes little for manual application. By contrast, each form requires a different method and equipment for mechanised application."
      },
      {
        "t": "X",
        "x": "Use dry equipment when handling the dry product. On contact with moisture, the granules become sticky, making manual work difficult. In a machine, they may clog the product pick-up and delivery systems to the soil, preventing them from operating."
      },
      {
        "t": "T",
        "x": "2. Planting with dry granules"
      },
      {
        "t": "X",
        "x": "Application is quick if each planter has a dosing tool on the plot that they know how to use. Keep your hands dry and use a clean, dry dispenser. The granules adhere to damp surfaces, resulting in product loss or uneven distribution."
      },
      {
        "t": "X",
        "x": "The Green Solutions dosage table gives the reference dose for each crop. These recommendations are based on the best results achieved according to the plants, soil and climate. Consult us before changing the dose."
      },
      {
        "t": "X",
        "x": "Dig a planting hole 30 % deeper than usual. This space allows the granules to swell as they absorb rainwater or irrigation water. If the hole is too shallow, swelling may lift the plant and expose its roots to the air, to the detriment of the plant and the effectiveness of the water retainer."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Planting with hydrated granules"
      },
      {
        "t": "X",
        "x": "The hydrogel is immediately active in the soil. The water present around the roots eliminates transplanting water stress. From transplanting onwards, the plant has a water reserve that is more long-lasting and more effective than that provided by a single watering at planting."
      },
      {
        "t": "S",
        "x": "Hydrogel dosage"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Follow the dosage table. One gram of dry EVERGREEN® is equivalent to approximately 100 g of EVERGREEN® hydrogel. To transplant a tomato plant, allow 3 g of dry product or approximately 300 g of hydrogel.",
          "Hydrogel is easier to measure than a few grams of dry granules. A cut water bottle or a tin can may be used as a measuring scoop. The container must be clean and calibrated to the recommended dose (see the tutorial).",
          "With hydrogel, the planter can see the volume needed to accommodate the product, soil and plant. As the product has already swollen, this prevents the plant from being pushed out when the hole has not been dug deeper."
        ]
      },
      {
        "t": "S",
        "x": "Watering at sowing or planting"
      },
      {
        "t": "X",
        "x": "Water to moisten the soil around the plant and allow the hydrogel to continue absorbing water. This amount is less than with dry granules, which require thorough watering to absorb water at the time of planting."
      },
      {
        "t": "X",
        "x": "Crops must subsequently be watered, regardless of the form used. The products reduce water requirements by at least 50 %."
      },
      {
        "t": "T",
        "x": "4. Preparing the work site"
      },
      {
        "t": "X",
        "x": "Before sowing or planting, gather the necessary equipment and plan suitable staffing levels, whether using dry or pre-hydrated granules."
      },
      {
        "t": "S",
        "x": "Preparation and storage of hydrogel"
      },
      {
        "t": "X",
        "x": "Hydrogel can be prepared the day before work begins. Use it within two days of preparation. If storing it for use the following day, keep it away from sunlight and direct heat. This storage precaution applies during the period before planting."
      },
      {
        "t": "S",
        "x": "Equipment cleanliness"
      },
      {
        "t": "X",
        "x": "Check that containers and equipment are clean. Residues of plant protection products may remain active in the hydrogel and harm plant growth. The same precaution applies to buckets that have contained cleaning products or other products not intended for agricultural use."
      },
      {
        "t": "T",
        "x": "5. Mechanised application of dry granules"
      },
      {
        "t": "X",
        "x": "Dry application is the main method for mechanically applying water retainers."
      },
      {
        "t": "S",
        "x": "Microgranulator"
      },
      {
        "t": "X",
        "x": "The microgranulator deposits water-retainer granules in rows, below the sowing line. A hopper receives the product and a mechanical drive ensures dosing. The granules then descend by gravity or are distributed by a pneumatic system."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Manufacturers and distributors of microgranulators include MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM and PNEUMASEM."
      },
      {
        "t": "X",
        "x": "STARTEC equipment: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Work sheltered from rain and high humidity to prevent the granules from clumping together and blocking the distribution pipes. Calculate the dose per linear metre, then set the microgranulator accordingly."
      },
      {
        "t": "S",
        "x": "Spreader and rotary tiller"
      },
      {
        "t": "X",
        "x": "For cereals and lawn sowing, dry granules can be spread and then incorporated with a rotary tiller at the time of sowing. The operation is comparable to spreading and incorporating fertiliser with a conventional seed drill combination."
      },
      {
        "t": "T",
        "x": "6. Hydrogel injection for established plants"
      },
      {
        "t": "X",
        "x": "Hydrogel is easily applied by hand. Its mechanised application requires greater resources. Injection applies only to plants already in place, particularly trees. It is intended to revive plant activity or strengthen tree resistance in dry conditions. Both objectives may be combined."
      },
      {
        "t": "S",
        "x": "Preparation and injection"
      },
      {
        "t": "X",
        "x": "Mix the dry granules with water, preferably at the work site. Preparation with transport in tanks can also be arranged."
      },
      {
        "t": "X",
        "x": "Depending on the size and age of the tree, carry out three to four injections around the roots. Push the needle of the pneumatic injector into the soil. Compressed air injects the dose of hydrogel contained in the tank."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Examples of equipment from the company COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "es": {
    "lang": "es-ES",
    "eyebrow": "MODO DE EMPLEO",
    "titre": "Aplicación de los hidrorretenedores EVERGREEN® y ECOSORB®",
    "bouton": "Modo de empleo EVERGREEN® y ECOSORB®",
    "sommaire": "Índice",
    "blocs": [
      {
        "t": "T",
        "x": "1. Principios de uso"
      },
      {
        "t": "X",
        "x": "Los dos hidrorretenedores pueden aplicarse a mano o a máquina, en forma de gránulos secos o prehidratados (hidrogel). La elección depende del equipo disponible y de los objetivos del cultivo. En la aplicación manual, los gestos cambian poco. En cambio, en la aplicación mecanizada, cada forma requiere un método y un equipo diferentes."
      },
      {
        "t": "X",
        "x": "Para manipular el producto seco, utilice material seco. En contacto con la humedad, los gránulos se vuelven pegajosos, lo que dificulta el trabajo a mano. En una máquina, pueden obstruir los sistemas de toma y de conducción hasta el suelo e impedir su funcionamiento."
      },
      {
        "t": "T",
        "x": "2. Plantación con gránulos secos"
      },
      {
        "t": "X",
        "x": "La aplicación es rápida si cada plantador dispone en la parcela de una herramienta de dosificación que sepa utilizar. Mantenga las manos secas y utilice un dosificador limpio y seco. Los gránulos se adhieren a las superficies húmedas, lo que provoca pérdidas o un mal reparto del producto."
      },
      {
        "t": "X",
        "x": "La tabla de dosificación de Green Solutions indica la dosis de referencia para cada cultivo. Estas recomendaciones se basan en los mejores resultados obtenidos según las plantas, el suelo y el clima. Consúltenos antes de modificar la dosis."
      },
      {
        "t": "X",
        "x": "Cave un hoyo de plantación un 30 % más profundo de lo habitual. Este espacio permite que los gránulos se hinchen al absorber el agua de lluvia o de riego. Si el hoyo es demasiado poco profundo, el hinchamiento puede levantar la planta y dejar sus raíces al aire, en perjuicio de la planta y de la eficacia del hidrorretenedor."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Plantación con gránulos hidratados"
      },
      {
        "t": "X",
        "x": "El hidrogel actúa de inmediato en el suelo. El agua presente a la altura de las raíces elimina el estrés hídrico del trasplante. Desde el trasplante, la planta dispone de una reserva de agua más duradera y más eficaz que la de un único riego de plantación."
      },
      {
        "t": "S",
        "x": "Dosificación del hidrogel"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Respete la tabla de dosificación. Un gramo de EVERGREEN® seco equivale a unos 100 g de hidrogel de EVERGREEN®. Para trasplantar una planta de tomate, cuente 3 g de producto seco o unos 300 g de hidrogel.",
          "El hidrogel se dosifica más fácilmente que unos pocos gramos de gránulos secos. Una botella de agua cortada o una lata de conserva puede servir de dosificador. El recipiente debe estar limpio y calibrado para la dosis recomendada (véase el tutorial).",
          "Con el hidrogel, el plantador ve el volumen necesario para alojar el producto, la tierra y la planta. Como el producto ya se ha hinchado, se evita que la planta sea expulsada cuando el hoyo no se ha cavado más profundo."
        ]
      },
      {
        "t": "S",
        "x": "Riego en la siembra o en la plantación"
      },
      {
        "t": "X",
        "x": "Riegue para humedecer el suelo alrededor de la planta y permitir que el hidrogel siga cargándose de agua. Este aporte es menor que con gránulos secos, que necesitan un riego abundante para cargarse en el momento de la plantación."
      },
      {
        "t": "X",
        "x": "Después, los cultivos deben regarse, sea cual sea la forma utilizada. Los productos permiten reducir las necesidades de agua al menos en un 50 %."
      },
      {
        "t": "T",
        "x": "4. Preparación de la obra"
      },
      {
        "t": "X",
        "x": "Antes de la siembra o la plantación, reúna el material necesario y prevea el personal adecuado, tanto si utiliza gránulos secos como prehidratados."
      },
      {
        "t": "S",
        "x": "Preparación y conservación del hidrogel"
      },
      {
        "t": "X",
        "x": "El hidrogel puede prepararse la víspera de la obra. Utilícelo en los dos días siguientes a su preparación. Si lo almacena para usarlo al día siguiente, manténgalo protegido del sol y del calor directo. Esta precaución de almacenamiento se refiere al periodo anterior a la plantación."
      },
      {
        "t": "S",
        "x": "Limpieza del material"
      },
      {
        "t": "X",
        "x": "Compruebe que los recipientes y el material estén limpios. Los restos de productos fitosanitarios pueden seguir activos en el hidrogel y perjudicar el crecimiento de la planta. La misma precaución se aplica a los cubos que hayan contenido productos de limpieza u otros productos no destinados a uso agrícola."
      },
      {
        "t": "T",
        "x": "5. Aplicación mecanizada de los gránulos secos"
      },
      {
        "t": "X",
        "x": "La aplicación en seco es el principal método de aplicación mecánica de los hidrorretenedores."
      },
      {
        "t": "S",
        "x": "Microgranulador"
      },
      {
        "t": "X",
        "x": "El microgranulador deposita los gránulos de hidrorretenedor en línea, bajo la línea de siembra. Una tolva recibe el producto y un accionamiento mecánico asegura la dosificación. Después, los gránulos bajan por gravedad o se reparten mediante un sistema neumático."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Entre los fabricantes y distribuidores de microgranuladores figuran MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM y PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Equipos STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Trabaje protegido de la lluvia y de una humedad elevada para evitar que los gránulos se apelmacen y obstruyan los tubos de reparto. Calcule la dosis por metro lineal y ajuste el microgranulador en consecuencia."
      },
      {
        "t": "S",
        "x": "Esparcidora y fresadora rotativa"
      },
      {
        "t": "X",
        "x": "Para los cereales y las siembras de césped, los gránulos secos pueden esparcirse y después enterrarse con la fresadora rotativa en el momento de la siembra. La operación es comparable al esparcido y enterrado de abono con un combinado de siembra convencional."
      },
      {
        "t": "T",
        "x": "6. Inyección de hidrogel en plantas ya establecidas"
      },
      {
        "t": "X",
        "x": "El hidrogel se aplica fácilmente a mano. Su aplicación mecanizada requiere más medios. La inyección se refiere únicamente a las plantas ya establecidas, en particular los árboles. Su objetivo es reactivar la actividad vegetal o reforzar la resistencia del árbol en medio seco. Ambos objetivos pueden combinarse."
      },
      {
        "t": "S",
        "x": "Preparación e inyección"
      },
      {
        "t": "X",
        "x": "Mezcle los gránulos secos con agua, preferiblemente en la obra. También puede organizarse una preparación con transporte en cubas."
      },
      {
        "t": "X",
        "x": "Según el tamaño y la edad del árbol, realice de tres a cuatro inyecciones a la altura de las raíces. Clave la aguja del inyector neumático en el suelo. El aire comprimido permite inyectar la dosis de hidrogel contenida en la cuba."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Ejemplos de equipos de la empresa COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "pt": {
    "lang": "pt-PT",
    "eyebrow": "MODO DE UTILIZAÇÃO",
    "titre": "Aplicação dos hidrorretentores EVERGREEN® e ECOSORB®",
    "bouton": "Modo de utilização EVERGREEN® e ECOSORB®",
    "sommaire": "Índice",
    "blocs": [
      {
        "t": "T",
        "x": "1. Princípios de utilização"
      },
      {
        "t": "X",
        "x": "Os dois hidrorretentores podem ser aplicados manualmente ou à máquina, sob a forma de grânulos secos ou pré-hidratados (hidrogel). A escolha depende do equipamento disponível e dos objetivos de cultivo. Na aplicação manual, os procedimentos pouco mudam. Em contrapartida, na aplicação mecanizada, cada forma requer um método e equipamento diferentes."
      },
      {
        "t": "X",
        "x": "Para manusear o produto seco, utilize equipamento seco. Em contacto com a humidade, os grânulos tornam-se pegajosos, o que dificulta o trabalho manual. Numa máquina, podem obstruir os sistemas de recolha e de condução até ao solo e impedir o seu funcionamento."
      },
      {
        "t": "T",
        "x": "2. Plantação com grânulos secos"
      },
      {
        "t": "X",
        "x": "A aplicação é rápida se cada plantador dispuser, na parcela, de uma ferramenta de dosagem que saiba utilizar. Mantenha as mãos secas e utilize um doseador limpo e seco. Os grânulos aderem às superfícies húmidas, o que provoca perdas ou uma distribuição inadequada do produto."
      },
      {
        "t": "X",
        "x": "A tabela de dosagem da Green Solutions indica a dose de referência para cada cultura. Estas recomendações baseiam-se nos melhores resultados obtidos em função das plantas, do solo e do clima. Consulte-nos antes de alterar a dose."
      },
      {
        "t": "X",
        "x": "Abra uma cova de plantação 30 % mais profunda do que o habitual. Este espaço permite que os grânulos inchem ao absorver a água da chuva ou da rega. Se a cova for pouco profunda, o inchaço pode elevar a planta e expor as suas raízes ao ar, em detrimento da planta e da eficácia do hidrorretentor."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Plantação com grânulos hidratados"
      },
      {
        "t": "X",
        "x": "O hidrogel fica imediatamente ativo no solo. A água presente ao nível das raízes elimina o stress hídrico associado ao transplante. Desde a transplantação, a planta dispõe de uma reserva de água mais duradoura e mais eficaz do que a proporcionada por uma única rega durante a plantação."
      },
      {
        "t": "S",
        "x": "Dosagem do hidrogel"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Respeite a tabela de dosagem. Um grama de EVERGREEN® seco corresponde a cerca de 100 g de hidrogel de EVERGREEN®. Para transplantar uma planta de tomate, conte com 3 g de produto seco ou cerca de 300 g de hidrogel.",
          "O hidrogel é mais fácil de dosar do que alguns gramas de grânulos secos. Uma garrafa de água cortada ou uma lata de conserva pode servir de doseador. O recipiente deve estar limpo e calibrado para a dose recomendada (ver o tutorial).",
          "Com o hidrogel, o plantador vê o volume necessário para acomodar o produto, a terra e a planta. Como o produto já inchou, evita-se assim a expulsão da planta quando a cova não foi aberta mais profundamente."
        ]
      },
      {
        "t": "S",
        "x": "Rega na sementeira ou na plantação"
      },
      {
        "t": "X",
        "x": "Regue para humedecer o solo em redor da planta e permitir que o hidrogel continue a carregar-se de água. Este fornecimento é menos importante do que com grânulos secos, que necessitam de uma rega abundante para se carregarem no momento da plantação."
      },
      {
        "t": "X",
        "x": "As culturas devem ser regadas posteriormente, qualquer que seja a forma utilizada. Os produtos permitem reduzir as necessidades de água em, pelo menos, 50 %."
      },
      {
        "t": "T",
        "x": "4. Preparação dos trabalhos"
      },
      {
        "t": "X",
        "x": "Antes da sementeira ou da plantação, reúna o material necessário e preveja o efetivo adequado, quer utilize grânulos secos quer pré-hidratados."
      },
      {
        "t": "S",
        "x": "Preparação e conservação do hidrogel"
      },
      {
        "t": "X",
        "x": "O hidrogel pode ser preparado na véspera dos trabalhos. Utilize-o nos dois dias seguintes à sua preparação. Se o armazenar para utilização no dia seguinte, mantenha-o ao abrigo do sol e do calor direto. Esta precaução de armazenamento diz respeito ao período anterior à plantação."
      },
      {
        "t": "S",
        "x": "Limpeza do material"
      },
      {
        "t": "X",
        "x": "Verifique a limpeza dos recipientes e do material. Os resíduos de produtos fitofarmacêuticos podem permanecer ativos no hidrogel e prejudicar o crescimento da planta. A mesma precaução aplica-se aos baldes que tenham contido produtos de limpeza ou outros produtos não destinados a uso agrícola."
      },
      {
        "t": "T",
        "x": "5. Aplicação mecanizada de grânulos secos"
      },
      {
        "t": "X",
        "x": "A aplicação a seco é o principal método de aplicação mecânica dos hidrorretentores."
      },
      {
        "t": "S",
        "x": "Microgranulador"
      },
      {
        "t": "X",
        "x": "O microgranulador deposita os grânulos de hidrorretentor em linha, sob a linha de sementeira. Uma tremonha recebe o produto e um acionamento mecânico assegura a dosagem. Os grânulos descem depois por gravidade ou são distribuídos por um sistema pneumático."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Entre os fabricantes e distribuidores de microgranuladores encontram-se MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM e PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Equipamento STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Trabalhe ao abrigo da chuva e de humidade elevada para evitar que os grânulos se aglomerem e obstruam os tubos de distribuição. Calcule a dose por metro linear e regule o microgranulador em conformidade."
      },
      {
        "t": "S",
        "x": "Distribuidor e fresa rotativa"
      },
      {
        "t": "X",
        "x": "Para cereais e sementeiras de relvado, os grânulos secos podem ser distribuídos e depois incorporados com a fresa rotativa no momento da sementeira. A operação é comparável à distribuição e incorporação de adubo com um combinado de sementeira convencional."
      },
      {
        "t": "T",
        "x": "6. Injeção de hidrogel em plantas já instaladas"
      },
      {
        "t": "X",
        "x": "O hidrogel aplica-se facilmente à mão. A sua aplicação mecanizada requer mais meios. A injeção diz respeito apenas a plantas já instaladas, nomeadamente árvores. Tem por objetivo reativar a atividade vegetal ou reforçar a resistência da árvore em meio seco. Estes dois objetivos podem ser associados."
      },
      {
        "t": "S",
        "x": "Preparação e injeção"
      },
      {
        "t": "X",
        "x": "Misture os grânulos secos com água, de preferência no local dos trabalhos. Também pode ser organizada uma preparação com transporte em cubas."
      },
      {
        "t": "X",
        "x": "Consoante o tamanho e a idade da árvore, efetue três a quatro injeções ao nível das raízes. Introduza a agulha do injetor pneumático no solo. O ar comprimido permite injetar a dose de hidrogel contida na cuba."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Exemplos de equipamento da empresa COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "ar": {
    "lang": "ar",
    "eyebrow": "دليل الاستخدام",
    "titre": "استخدام محتجزات المياه EVERGREEN® وECOSORB®",
    "bouton": "دليل استخدام EVERGREEN® وECOSORB®",
    "sommaire": "المحتويات",
    "blocs": [
      {
        "t": "T",
        "x": "1. مبادئ الاستخدام"
      },
      {
        "t": "X",
        "x": "يمكن استخدام محتجزي المياه كليهما يدويًا أو آليًا، على شكل حبيبات جافة أو مرطبة مسبقًا (الهيدروجيل). ويعتمد الاختيار على المعدات المتاحة وأهداف الزراعة. ولا تختلف خطوات التطبيق اليدوي كثيرًا. أما في التطبيق الآلي، فيتطلب كل شكل طريقة ومعدات مختلفة."
      },
      {
        "t": "X",
        "x": "للتعامل مع المنتج الجاف، استخدم معدات جافة. فعند ملامسة الرطوبة، تصبح الحبيبات لزجة، مما يعيق العمل اليدوي. وفي الآلات، قد تسد أنظمة السحب والنقل إلى التربة، فتمنعها من العمل."
      },
      {
        "t": "T",
        "x": "2. الزراعة باستخدام الحبيبات الجافة"
      },
      {
        "t": "X",
        "x": "يكون التطبيق سريعًا إذا كان لدى كل عامل زراعة في الحقل أداة جرعات يعرف كيفية استخدامها. حافظ على جفاف اليدين واستخدم أداة معايرة نظيفة وجافة. تلتصق الحبيبات بالأسطح الرطبة، مما يؤدي إلى فقدان المنتج أو سوء توزيعه."
      },
      {
        "t": "X",
        "x": "يوضح جدول الجرعات الخاص بـ Green Solutions الجرعة المرجعية لكل محصول. وتستند هذه التوصيات إلى أفضل النتائج التي تم الحصول عليها بحسب النباتات والتربة والمناخ. استشرنا قبل تغيير الجرعة."
      },
      {
        "t": "X",
        "x": "احفر حفرة زراعة أعمق بنسبة 30 % من المعتاد. تتيح هذه المساحة للحبيبات أن تنتفخ بامتصاص مياه المطر أو الري. وإذا كانت الحفرة ضحلة جدًا، فقد يؤدي الانتفاخ إلى رفع الشتلة وتعريض جذورها للهواء، بما يضر بالنبات وبفعالية محتجز المياه."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. الزراعة باستخدام الحبيبات المرطبة"
      },
      {
        "t": "X",
        "x": "يكون الهيدروجيل فعالًا فورًا في التربة. فالماء الموجود عند مستوى الجذور يزيل الإجهاد المائي المرتبط بالشتل. ومنذ إعادة الغرس، تتوفر للشتلة كمية احتياطية من المياه تدوم مدة أطول وتكون أكثر فاعلية من رية واحدة عند الزراعة."
      },
      {
        "t": "S",
        "x": "معايرة الهيدروجيل"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "التزم بجدول الجرعات. يعادل غرام واحد من EVERGREEN® الجاف نحو 100 g من هيدروجيل EVERGREEN®. ولإعادة غرس شتلة طماطم، استخدم 3 g من المنتج الجاف أو نحو 300 g من الهيدروجيل.",
          "تكون معايرة الهيدروجيل أسهل من معايرة بضعة غرامات من الحبيبات الجافة. ويمكن استخدام زجاجة ماء مقصوصة أو علبة حفظ كأداة معايرة. يجب أن تكون العبوة نظيفة ومُعايرة للجرعة الموصى بها (انظر الدليل التعليمي).",
          "باستخدام الهيدروجيل، يرى عامل الزراعة الحجم اللازم لاستيعاب المنتج والتربة والشتلة. وبما أن المنتج قد انتفخ بالفعل، فإن ذلك يمنع خروج الشتلة من الحفرة عندما لا تكون قد حُفرت بعمق أكبر."
        ]
      },
      {
        "t": "S",
        "x": "الري عند البذر أو الزراعة"
      },
      {
        "t": "X",
        "x": "ارْوِ لترطيب التربة حول الشتلة والسماح للهيدروجيل بمواصلة التشبع بالماء. وهذه الكمية أقل أهمية منها مع الحبيبات الجافة التي تتطلب ريًا غزيرًا لتتشبع وقت الزراعة."
      },
      {
        "t": "X",
        "x": "بعد ذلك، يجب ري المحاصيل أيًا كان الشكل المستخدم. وتتيح المنتجات خفض الاحتياجات المائية بما لا يقل عن 50 %."
      },
      {
        "t": "T",
        "x": "4. إعداد موقع العمل"
      },
      {
        "t": "X",
        "x": "قبل البذر أو الزراعة، اجمع المعدات اللازمة وخطط لتوفير العدد المناسب من العمال، سواء استخدمت الحبيبات الجافة أو المرطبة مسبقًا."
      },
      {
        "t": "S",
        "x": "إعداد الهيدروجيل وحفظه"
      },
      {
        "t": "X",
        "x": "يمكن إعداد الهيدروجيل في اليوم السابق للعمل. استخدمه خلال اليومين التاليين لإعداده. وإذا خزّنته لاستخدامه في اليوم التالي، فأبقِه بعيدًا عن أشعة الشمس والحرارة المباشرة. وينطبق احتياط التخزين هذا على الفترة التي تسبق الزراعة."
      },
      {
        "t": "S",
        "x": "نظافة المعدات"
      },
      {
        "t": "X",
        "x": "تحقق من نظافة العبوات والمعدات. فقد تبقى بقايا منتجات وقاية النباتات نشطة في الهيدروجيل وتضر بنمو النبات. وينطبق الاحتياط نفسه على الدلاء التي احتوت على منتجات تنظيف أو منتجات أخرى غير مخصصة للاستخدام الزراعي."
      },
      {
        "t": "T",
        "x": "5. التطبيق الآلي للحبيبات الجافة"
      },
      {
        "t": "X",
        "x": "يُعد التطبيق الجاف الطريقة الرئيسية للاستخدام الآلي لمحتجزات المياه."
      },
      {
        "t": "S",
        "x": "موزع الحبيبات الدقيقة"
      },
      {
        "t": "X",
        "x": "يضع موزع الحبيبات الدقيقة حبيبات محتجز المياه في صف، تحت صف البذر. يستقبل قادوس المنتج، ويتولى محرك ميكانيكي ضبط الجرعة. ثم تنزل الحبيبات بالجاذبية أو تُوزع بواسطة نظام هوائي."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "من بين مصنّعي وموزعي موزعات الحبيبات الدقيقة: MONOSEM، STARTEC، SEPEBA، KUHN، GASPARDO، VÄDERSTAD، PROMOSEM وPNEUMASEM."
      },
      {
        "t": "X",
        "x": "معدات STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "اعمل بعيدًا عن المطر والرطوبة العالية لتجنب تكتل الحبيبات وسد أنابيب التوزيع. احسب الجرعة لكل متر طولي، ثم اضبط موزع الحبيبات الدقيقة وفقًا لذلك."
      },
      {
        "t": "S",
        "x": "آلة نثر وعزاقة دوارة"
      },
      {
        "t": "X",
        "x": "بالنسبة إلى الحبوب وبذر المسطحات العشبية، يمكن نثر الحبيبات الجافة ثم طمرها بالعزاقة الدوارة وقت البذر. تشبه العملية نثر السماد وطمره باستخدام مركبة بذر تقليدية."
      },
      {
        "t": "T",
        "x": "6. حقن الهيدروجيل للنباتات القائمة"
      },
      {
        "t": "X",
        "x": "يمكن استخدام الهيدروجيل يدويًا بسهولة. ويتطلب تطبيقه آليًا وسائل أكثر. ويقتصر الحقن على النباتات القائمة بالفعل، ولا سيما الأشجار. ويهدف إلى تنشيط النمو النباتي مجددًا أو تعزيز مقاومة الشجرة في البيئات الجافة. ويمكن الجمع بين هذين الهدفين."
      },
      {
        "t": "S",
        "x": "الإعداد والحقن"
      },
      {
        "t": "X",
        "x": "اخلط الحبيبات الجافة بالماء، ويفضل أن يكون ذلك في موقع العمل. ويمكن أيضًا تنظيم الإعداد مع النقل في خزانات."
      },
      {
        "t": "X",
        "x": "حسب حجم الشجرة وعمرها، أجرِ من ثلاث إلى أربع عمليات حقن عند مستوى الجذور. أدخل إبرة المحقن الهوائي في التربة. يتيح الهواء المضغوط حقن جرعة الهيدروجيل الموجودة في الخزان."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "أمثلة على معدات شركة COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "zh": {
    "lang": "zh-CN",
    "eyebrow": "使用说明",
    "titre": "EVERGREEN® 和 ECOSORB® 保水剂的施用",
    "bouton": "EVERGREEN® 和 ECOSORB® 使用说明",
    "sommaire": "目录",
    "blocs": [
      {
        "t": "T",
        "x": "1. 使用原则"
      },
      {
        "t": "X",
        "x": "这两种保水剂可采用手工或机械方式施用，可使用干颗粒或预水合颗粒（水凝胶）。选择何种方式取决于现有设备和作物种植目标。手工施用时，操作方法差别不大。相比之下，机械施用时，每种形态都需要不同的方法和设备。"
      },
      {
        "t": "X",
        "x": "处理干产品时，请使用干燥的设备。颗粒接触水分后会变得黏稠，从而妨碍手工操作。在机械中，它们可能堵塞回收和输送至土壤的系统，导致设备无法正常工作。"
      },
      {
        "t": "T",
        "x": "2. 使用干颗粒进行种植"
      },
      {
        "t": "X",
        "x": "如果每位种植人员在田块中都配有并会使用计量工具，施用就会很快捷。请保持双手干燥，并使用清洁、干燥的计量器。颗粒会附着在潮湿表面上，造成产品损失或分布不均。"
      },
      {
        "t": "X",
        "x": "Green Solutions 的用量表列出了每种作物的参考用量。这些建议基于针对植物、土壤和气候条件取得的最佳效果。调整用量前，请先咨询我们。"
      },
      {
        "t": "X",
        "x": "种植穴应比平时深 30 %。该空间可使颗粒吸收雨水或灌溉水后膨胀。如果种植穴过浅，膨胀可能将植株顶起，使根部暴露在空气中，不利于植株生长并降低保水剂的效果。"
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. 使用水合颗粒进行种植"
      },
      {
        "t": "X",
        "x": "水凝胶在土壤中立即发挥作用。根部周围的水分可消除移栽造成的水分胁迫。植株从移栽时起便拥有比种植时单次浇水更持久、更有效的水分储备。"
      },
      {
        "t": "S",
        "x": "水凝胶的用量"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "请遵守用量表。1 克干 EVERGREEN® 约相当于 100 g EVERGREEN® 水凝胶。移栽一株番茄苗时，需使用 3 g 干产品或约 300 g 水凝胶。",
          "与计量几克干颗粒相比，水凝胶更易于计量。可将剪开的饮用水瓶或罐头盒用作量杯。容器必须清洁，并按建议用量进行校准（见教程）。",
          "使用水凝胶时，种植人员可直观看到容纳产品、土壤和植株所需的体积。由于产品已膨胀，即使种植穴没有挖得更深，也可避免植株被顶出。"
        ]
      },
      {
        "t": "S",
        "x": "播种或种植时浇水"
      },
      {
        "t": "X",
        "x": "请浇水以湿润植株周围的土壤，并使水凝胶继续吸水。与干颗粒相比，此时的供水量较少；干颗粒需要在种植时大量浇水才能吸水膨胀。"
      },
      {
        "t": "X",
        "x": "之后，无论使用何种形态，作物都必须浇水。这些产品可将用水需求至少降低 50 %。"
      },
      {
        "t": "T",
        "x": "4. 作业准备"
      },
      {
        "t": "X",
        "x": "播种或种植前，请备齐所需设备，并根据使用干颗粒或预水合颗粒的情况安排适当的人员。"
      },
      {
        "t": "S",
        "x": "水凝胶的制备与保存"
      },
      {
        "t": "X",
        "x": "水凝胶可在作业前一天制备。请在制备后的两天内使用。如需储存至次日使用，请避免阳光照射和直接受热。该储存注意事项适用于种植前的阶段。"
      },
      {
        "t": "S",
        "x": "设备清洁"
      },
      {
        "t": "X",
        "x": "请检查容器和设备是否清洁。植物保护产品的残留物可能在水凝胶中仍保持活性，并损害植物生长。对于曾盛放清洁剂或其他非农业用途产品的桶，也应采取同样的预防措施。"
      },
      {
        "t": "T",
        "x": "5. 干颗粒的机械施用"
      },
      {
        "t": "X",
        "x": "干法施用是保水剂机械施用的主要方式。"
      },
      {
        "t": "S",
        "x": "微粒施用器"
      },
      {
        "t": "X",
        "x": "微粒施用器将保水剂颗粒成行施放在播种行下方。料斗装载产品，机械驱动装置确保计量。随后，颗粒通过重力下落，或由气动系统进行分配。"
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "微粒施用器的制造商和经销商包括 MONOSEM、STARTEC、SEPEBA、KUHN、GASPARDO、VÄDERSTAD、PROMOSEM 和 PNEUMASEM。"
      },
      {
        "t": "X",
        "x": "STARTEC 设备：https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "请在避雨且湿度不高的条件下作业，以防颗粒结块并堵塞分配管。先计算每延米的用量，再据此调整微粒施用器。"
      },
      {
        "t": "S",
        "x": "撒播机和旋耕机"
      },
      {
        "t": "X",
        "x": "对于谷物和草坪播种，可在播种时先撒施干颗粒，再用旋耕机将其翻入土中。该操作类似于使用常规播种组合机撒施并翻埋肥料。"
      },
      {
        "t": "T",
        "x": "6. 向已定植植物注入水凝胶"
      },
      {
        "t": "X",
        "x": "水凝胶易于手工施用。其机械施用需要更多设备。注入仅适用于已定植的植物，尤其是树木。其目的在于恢复植物活力，或增强树木在干燥环境中的抗性。这两个目标可以同时实现。"
      },
      {
        "t": "S",
        "x": "制备与注入"
      },
      {
        "t": "X",
        "x": "将干颗粒与水混合，最好在作业现场进行。也可采用罐体运输的方式进行制备。"
      },
      {
        "t": "X",
        "x": "根据树木的大小和树龄，在根部区域进行三至四次注入。将气动注射器的针头插入土壤。压缩空气可将罐体内的规定用量水凝胶注入土中。"
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "COSERWA 公司的设备示例：https://www.coserwa.com/"
      }
    ]
  },
  "id": {
    "lang": "id-ID",
    "eyebrow": "PETUNJUK PENGGUNAAN",
    "titre": "Penerapan penahan air EVERGREEN® dan ECOSORB®",
    "bouton": "Petunjuk penggunaan EVERGREEN® dan ECOSORB®",
    "sommaire": "Daftar isi",
    "blocs": [
      {
        "t": "T",
        "x": "1. Prinsip penggunaan"
      },
      {
        "t": "X",
        "x": "Kedua penahan air dapat diaplikasikan secara manual atau dengan mesin, dalam bentuk granula kering atau prahidrat (hydrogel). Pilihan bergantung pada peralatan yang tersedia dan tujuan budidaya. Dalam aplikasi manual, langkah-langkahnya hanya sedikit berbeda. Namun, dalam aplikasi mekanis, setiap bentuk memerlukan metode dan peralatan yang berbeda."
      },
      {
        "t": "X",
        "x": "Untuk menangani produk kering, gunakan peralatan yang kering. Saat terkena kelembapan, granula menjadi lengket sehingga menyulitkan pekerjaan manual. Di dalam mesin, granula dapat menyumbat sistem pengambilan dan penyaluran ke tanah serta menghambat fungsinya."
      },
      {
        "t": "T",
        "x": "2. Penanaman dengan granula kering"
      },
      {
        "t": "X",
        "x": "Aplikasi berlangsung cepat apabila setiap penanam memiliki alat takar di lahan yang dapat digunakannya. Jaga tangan tetap kering dan gunakan alat takar yang bersih serta kering. Granula menempel pada permukaan yang lembap, sehingga menyebabkan kehilangan atau penyebaran produk yang tidak merata."
      },
      {
        "t": "X",
        "x": "Tabel dosis Green Solutions menunjukkan dosis acuan untuk setiap tanaman. Rekomendasi ini didasarkan pada hasil terbaik yang diperoleh sesuai dengan tanaman, tanah, dan iklim. Konsultasikan dengan kami sebelum mengubah dosis."
      },
      {
        "t": "X",
        "x": "Gali lubang tanam 30 % lebih dalam dari biasanya. Ruang ini memungkinkan granula mengembang dengan menyerap air hujan atau air irigasi. Jika lubang terlalu dangkal, pengembangan dapat mengangkat tanaman dan membuat akarnya terpapar udara, sehingga merugikan tanaman dan mengurangi efektivitas penahan air."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Penanaman dengan granula terhidrasi"
      },
      {
        "t": "X",
        "x": "Hydrogel langsung aktif di dalam tanah. Air yang berada di sekitar akar menghilangkan stres air akibat pemindahan tanaman. Sejak penanaman kembali, tanaman memiliki cadangan air yang lebih tahan lama dan lebih efektif daripada satu kali penyiraman saat penanaman."
      },
      {
        "t": "S",
        "x": "Dosis hydrogel"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Ikuti tabel dosis. Satu gram EVERGREEN® kering setara dengan sekitar 100 g hydrogel EVERGREEN®. Untuk memindahkan satu tanaman tomat, gunakan 3 g produk kering atau sekitar 300 g hydrogel.",
          "Hydrogel lebih mudah ditakar daripada beberapa gram granula kering. Botol air yang dipotong atau kaleng dapat digunakan sebagai alat takar. Wadah harus bersih dan dikalibrasi sesuai dosis yang direkomendasikan (lihat tutorial).",
          "Dengan hydrogel, penanam dapat melihat volume yang diperlukan untuk menampung produk, tanah, dan tanaman. Karena produk sudah mengembang, hal ini mencegah tanaman terdorong keluar ketika lubang tidak digali lebih dalam."
        ]
      },
      {
        "t": "S",
        "x": "Penyiraman saat penyemaian atau penanaman"
      },
      {
        "t": "X",
        "x": "Siram untuk membasahi tanah di sekitar tanaman dan memungkinkan hydrogel terus menyerap air. Pasokan ini lebih sedikit dibandingkan dengan granula kering, yang memerlukan penyiraman melimpah agar menyerap air pada saat penanaman."
      },
      {
        "t": "X",
        "x": "Selanjutnya, tanaman budidaya harus disiram, apa pun bentuk yang digunakan. Produk ini memungkinkan pengurangan kebutuhan air setidaknya 50 %."
      },
      {
        "t": "T",
        "x": "4. Persiapan pekerjaan"
      },
      {
        "t": "X",
        "x": "Sebelum penyemaian atau penanaman, siapkan peralatan yang diperlukan dan rencanakan jumlah tenaga kerja yang sesuai, baik menggunakan granula kering maupun prahidrat."
      },
      {
        "t": "S",
        "x": "Persiapan dan penyimpanan hydrogel"
      },
      {
        "t": "X",
        "x": "Hydrogel dapat disiapkan sehari sebelum pekerjaan dimulai. Gunakan dalam dua hari setelah persiapan. Jika disimpan untuk digunakan keesokan hari, lindungi dari sinar matahari dan panas langsung. Tindakan pencegahan penyimpanan ini berlaku untuk periode sebelum penanaman."
      },
      {
        "t": "S",
        "x": "Kebersihan peralatan"
      },
      {
        "t": "X",
        "x": "Periksa kebersihan wadah dan peralatan. Residu produk fitosanitari dapat tetap aktif di dalam hydrogel dan mengganggu pertumbuhan tanaman. Tindakan pencegahan yang sama berlaku untuk ember yang sebelumnya berisi produk pembersih atau produk lain yang tidak ditujukan untuk penggunaan pertanian."
      },
      {
        "t": "T",
        "x": "5. Aplikasi mekanis granula kering"
      },
      {
        "t": "X",
        "x": "Aplikasi kering merupakan metode utama penerapan mekanis penahan air."
      },
      {
        "t": "S",
        "x": "Mikrogranulator"
      },
      {
        "t": "X",
        "x": "Mikrogranulator menempatkan granula penahan air dalam barisan, di bawah barisan semai. Sebuah hopper menampung produk dan penggerak mekanis memastikan penakaran. Granula kemudian turun karena gravitasi atau disalurkan melalui sistem pneumatik."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Di antara produsen dan distributor mikrogranulator terdapat MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM, dan PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Peralatan STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Bekerjalah terlindung dari hujan dan kelembapan tinggi untuk mencegah granula menggumpal dan menyumbat pipa penyalur. Hitung dosis per meter linear, lalu atur mikrogranulator sesuai perhitungan tersebut."
      },
      {
        "t": "S",
        "x": "Penyebar dan pengolah tanah rotari"
      },
      {
        "t": "X",
        "x": "Untuk serealia dan penyemaian rumput, granula kering dapat disebarkan lalu dibenamkan dengan pengolah tanah rotari pada saat penyemaian. Proses ini serupa dengan penyebaran dan pembenaman pupuk menggunakan kombinasi mesin semai konvensional."
      },
      {
        "t": "T",
        "x": "6. Injeksi hydrogel pada tanaman yang sudah tumbuh"
      },
      {
        "t": "X",
        "x": "Hydrogel mudah diaplikasikan secara manual. Aplikasi mekanisnya memerlukan lebih banyak sarana. Injeksi hanya ditujukan untuk tanaman yang sudah tumbuh, khususnya pohon. Tujuannya adalah mengaktifkan kembali aktivitas vegetatif atau memperkuat ketahanan pohon di lingkungan kering. Kedua tujuan tersebut dapat digabungkan."
      },
      {
        "t": "S",
        "x": "Persiapan dan injeksi"
      },
      {
        "t": "X",
        "x": "Campurkan granula kering dengan air, sebaiknya di lokasi pekerjaan. Persiapan dengan pengangkutan dalam tangki juga dapat dilakukan."
      },
      {
        "t": "X",
        "x": "Sesuai ukuran dan umur pohon, lakukan tiga hingga empat injeksi di sekitar akar. Tancapkan jarum injektor pneumatik ke dalam tanah. Udara bertekanan memungkinkan penyuntikan dosis hydrogel yang terdapat dalam tangki."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Contoh peralatan dari perusahaan COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "de": {
    "lang": "de-DE",
    "eyebrow": "GEBRAUCHSANWEISUNG",
    "titre": "Anwendung der Wasserspeicher EVERGREEN® und ECOSORB®",
    "bouton": "Gebrauchsanleitung EVERGREEN® und ECOSORB®",
    "sommaire": "Inhalt",
    "blocs": [
      {
        "t": "T",
        "x": "1. Anwendungsgrundsätze"
      },
      {
        "t": "X",
        "x": "Die beiden Wasserspeicher können von Hand oder maschinell als trockene oder vorhydratisierte Granulate (Hydrogel) ausgebracht werden. Die Wahl hängt von der verfügbaren Ausrüstung und den Anbauzielen ab. Bei der manuellen Anwendung unterscheiden sich die Arbeitsschritte kaum. Bei der maschinellen Anwendung erfordert jede Form hingegen eine andere Methode und Ausrüstung."
      },
      {
        "t": "X",
        "x": "Verwenden Sie für die Handhabung des trockenen Produkts trockene Geräte. Bei Kontakt mit Feuchtigkeit werden die Granulate klebrig, was die Arbeit von Hand erschwert. In einer Maschine können sie die Aufnahme- und Zuführsysteme zum Boden verstopfen und deren Funktion beeinträchtigen."
      },
      {
        "t": "T",
        "x": "2. Pflanzung mit trockenen Granulaten"
      },
      {
        "t": "X",
        "x": "Die Anwendung geht schnell, wenn jede pflanzende Person auf der Fläche über ein Dosierwerkzeug verfügt, das sie sicher bedienen kann. Halten Sie Ihre Hände trocken und verwenden Sie ein sauberes, trockenes Dosiergerät. Die Granulate haften an feuchten Oberflächen, was zu Verlusten oder einer ungleichmäßigen Verteilung des Produkts führt."
      },
      {
        "t": "X",
        "x": "Die Dosiertabelle von Green Solutions gibt die Referenzdosis für jede Kultur an. Diese Empfehlungen beruhen auf den besten Ergebnissen in Abhängigkeit von Pflanzen, Boden und Klima. Wenden Sie sich an uns, bevor Sie die Dosis ändern."
      },
      {
        "t": "X",
        "x": "Heben Sie ein Pflanzloch aus, das 30 % tiefer ist als üblich. Dieser Raum ermöglicht es den Granulaten, durch die Aufnahme von Regen- oder Gießwasser aufzuquellen. Ist das Loch zu flach, kann das Aufquellen die Pflanze anheben und ihre Wurzeln der Luft aussetzen, was der Pflanze und der Wirksamkeit des Wasserspeichers schadet."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Pflanzung mit hydratisierten Granulaten"
      },
      {
        "t": "X",
        "x": "Das Hydrogel ist im Boden sofort wirksam. Das im Wurzelbereich vorhandene Wasser beseitigt den mit dem Umpflanzen verbundenen Wasserstress. Die Pflanze verfügt bereits beim Umpflanzen über eine Wasserreserve, die nachhaltiger und wirksamer ist als eine einmalige Bewässerung bei der Pflanzung."
      },
      {
        "t": "S",
        "x": "Dosierung des Hydrogels"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Beachten Sie die Dosiertabelle. Ein Gramm trockenes EVERGREEN® entspricht etwa 100 g EVERGREEN®-Hydrogel. Für das Umpflanzen einer Tomatenpflanze rechnen Sie mit 3 g Trockenprodukt oder etwa 300 g Hydrogel.",
          "Hydrogel lässt sich leichter dosieren als wenige Gramm trockene Granulate. Eine aufgeschnittene Wasserflasche oder eine Konservendose kann als Dosierhilfe dienen. Der Behälter muss sauber und auf die empfohlene Dosis kalibriert sein (siehe Tutorial).",
          "Mit Hydrogel erkennt die pflanzende Person das erforderliche Volumen für das Produkt, die Erde und die Pflanze. Da das Produkt bereits aufgequollen ist, wird so verhindert, dass die Pflanze herausgedrückt wird, wenn das Loch nicht tiefer ausgehoben wurde."
        ]
      },
      {
        "t": "S",
        "x": "Bewässerung bei der Aussaat oder Pflanzung"
      },
      {
        "t": "X",
        "x": "Bewässern Sie den Boden um die Pflanze herum, damit er feucht wird und das Hydrogel weiterhin Wasser aufnehmen kann. Diese Wassergabe ist geringer als bei trockenen Granulaten, die bei der Pflanzung reichlich bewässert werden müssen, damit sie sich mit Wasser füllen."
      },
      {
        "t": "X",
        "x": "Die Kulturen müssen anschließend unabhängig von der verwendeten Form bewässert werden. Mit den Produkten kann der Wasserbedarf um mindestens 50 % gesenkt werden."
      },
      {
        "t": "T",
        "x": "4. Vorbereitung der Arbeiten"
      },
      {
        "t": "X",
        "x": "Stellen Sie vor der Aussaat oder Pflanzung die erforderliche Ausrüstung zusammen und planen Sie ausreichend Personal ein, unabhängig davon, ob Sie trockene oder vorhydratisierte Granulate verwenden."
      },
      {
        "t": "S",
        "x": "Vorbereitung und Lagerung des Hydrogels"
      },
      {
        "t": "X",
        "x": "Das Hydrogel kann am Vortag der Arbeiten vorbereitet werden. Verwenden Sie es innerhalb von zwei Tagen nach der Zubereitung. Wenn Sie es für die Verwendung am nächsten Tag lagern, schützen Sie es vor Sonne und direkter Hitze. Diese Lagerungsvorsichtsmaßnahme gilt für den Zeitraum vor der Pflanzung."
      },
      {
        "t": "S",
        "x": "Sauberkeit der Ausrüstung"
      },
      {
        "t": "X",
        "x": "Überprüfen Sie die Sauberkeit der Behälter und Geräte. Rückstände von Pflanzenschutzmitteln können im Hydrogel aktiv bleiben und das Pflanzenwachstum beeinträchtigen. Dieselbe Vorsichtsmaßnahme gilt für Eimer, die Reinigungsmittel oder andere Produkte enthielten, die nicht für die landwirtschaftliche Verwendung bestimmt sind."
      },
      {
        "t": "T",
        "x": "5. Maschinelle Ausbringung trockener Granulate"
      },
      {
        "t": "X",
        "x": "Die Trockenausbringung ist die wichtigste Methode zur maschinellen Anwendung von Wasserspeichern."
      },
      {
        "t": "S",
        "x": "Mikrogranulatstreuer"
      },
      {
        "t": "X",
        "x": "Der Mikrogranulatstreuer legt die Wasserspeicher-Granulate in einer Reihe unterhalb der Saatreihe ab. Ein Vorratsbehälter nimmt das Produkt auf, und ein mechanischer Antrieb gewährleistet die Dosierung. Anschließend fallen die Granulate durch Schwerkraft nach unten oder werden über ein pneumatisches System verteilt."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Zu den Herstellern und Vertreibern von Mikrogranulatstreuern zählen MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM und PNEUMASEM."
      },
      {
        "t": "X",
        "x": "STARTEC-Geräte: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Arbeiten Sie geschützt vor Regen und hoher Luftfeuchtigkeit, damit die Granulate nicht verklumpen und die Verteilerschläuche verstopfen. Berechnen Sie die Dosis je laufendem Meter und stellen Sie den Mikrogranulatstreuer entsprechend ein."
      },
      {
        "t": "S",
        "x": "Streuer und Kreiselegge"
      },
      {
        "t": "X",
        "x": "Bei Getreide und Rasenaussaat können die trockenen Granulate zum Zeitpunkt der Aussaat ausgestreut und anschließend mit der Kreiselegge eingearbeitet werden. Der Vorgang ist vergleichbar mit dem Ausbringen und Einarbeiten von Dünger mit einer herkömmlichen Sämaschinenkombination."
      },
      {
        "t": "T",
        "x": "6. Injektion von Hydrogel bei bestehenden Pflanzen"
      },
      {
        "t": "X",
        "x": "Hydrogel lässt sich leicht von Hand ausbringen. Seine maschinelle Anwendung erfordert mehr Mittel. Die Injektion betrifft ausschließlich bereits etablierte Pflanzen, insbesondere Bäume. Sie soll die Pflanzenaktivität wieder anregen oder die Widerstandsfähigkeit des Baumes in trockener Umgebung stärken. Beide Ziele können miteinander verbunden werden."
      },
      {
        "t": "S",
        "x": "Vorbereitung und Injektion"
      },
      {
        "t": "X",
        "x": "Mischen Sie die trockenen Granulate mit Wasser, vorzugsweise direkt am Einsatzort. Eine Vorbereitung mit Transport in Tanks kann ebenfalls organisiert werden."
      },
      {
        "t": "X",
        "x": "Führen Sie je nach Größe und Alter des Baumes drei bis vier Injektionen im Wurzelbereich durch. Stechen Sie die Nadel des pneumatischen Injektors in den Boden. Die Druckluft ermöglicht die Injektion der im Tank enthaltenen Hydrogel-Dosis."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Beispiele für Geräte des Unternehmens COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "it": {
    "lang": "it-IT",
    "eyebrow": "ISTRUZIONI PER L'USO",
    "titre": "Impiego dei ritentori idrici EVERGREEN® ed ECOSORB®",
    "bouton": "Istruzioni per l'uso EVERGREEN® ed ECOSORB®",
    "sommaire": "Indice",
    "blocs": [
      {
        "t": "T",
        "x": "1. Principi di utilizzo"
      },
      {
        "t": "X",
        "x": "I due ritentori idrici possono essere applicati a mano o con macchine, sotto forma di granuli secchi o preidratati (hydrogel). La scelta dipende dalle attrezzature disponibili e dagli obiettivi colturali. Nell'applicazione manuale, le operazioni cambiano poco. Nell'applicazione meccanizzata, invece, ciascuna forma richiede un metodo e un'attrezzatura diversi."
      },
      {
        "t": "X",
        "x": "Per manipolare il prodotto secco, utilizzare attrezzature asciutte. A contatto con l'umidità, i granuli diventano appiccicosi, ostacolando il lavoro manuale. In una macchina, rischiano di ostruire i sistemi di ripresa e di distribuzione al suolo, impedendone il funzionamento."
      },
      {
        "t": "T",
        "x": "2. Piantagione con granuli secchi"
      },
      {
        "t": "X",
        "x": "L'applicazione è rapida se ogni addetto alla piantagione dispone, sul campo, di uno strumento di dosaggio che sa utilizzare. Mantenere le mani asciutte e utilizzare un dosatore pulito e asciutto. I granuli aderiscono alle superfici umide, causando perdite o una cattiva distribuzione del prodotto."
      },
      {
        "t": "X",
        "x": "La tabella di dosaggio di Green Solutions indica la dose di riferimento per ciascuna coltura. Queste raccomandazioni si basano sui migliori risultati ottenuti in funzione delle piante, del suolo e del clima. Consultarci prima di modificare la dose."
      },
      {
        "t": "X",
        "x": "Scavare una buca di piantagione più profonda del 30 % rispetto al solito. Questo spazio permette ai granuli di gonfiarsi assorbendo l'acqua piovana o di irrigazione. Se la buca è troppo poco profonda, il rigonfiamento rischia di sollevare la pianta ed esporne le radici all'aria, a discapito della pianta e dell'efficacia del ritentore idrico."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Piantagione con granuli idratati"
      },
      {
        "t": "X",
        "x": "L'hydrogel è immediatamente attivo nel suolo. L'acqua presente a livello delle radici elimina lo stress idrico legato al trapianto. Fin dal trapianto, la pianta dispone di una riserva d'acqua più durevole ed efficace di quella apportata da una sola irrigazione al momento della piantagione."
      },
      {
        "t": "S",
        "x": "Dosaggio dell'hydrogel"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Rispettare la tabella di dosaggio. Un grammo di EVERGREEN® secco corrisponde a circa 100 g di hydrogel EVERGREEN®. Per trapiantare una pianta di pomodoro, calcolare 3 g di prodotto secco oppure circa 300 g di hydrogel.",
          "L'hydrogel si dosa più facilmente di pochi grammi di granuli secchi. Una bottiglia d'acqua tagliata o una scatoletta per conserve può fungere da dosatore. Il recipiente deve essere pulito e tarato per la dose raccomandata (vedere il tutorial).",
          "Con l'hydrogel, l'addetto alla piantagione può valutare il volume necessario per contenere il prodotto, la terra e la pianta. Poiché il prodotto si è già gonfiato, si evita così l'espulsione della pianta quando la buca non è stata scavata più in profondità."
        ]
      },
      {
        "t": "S",
        "x": "Irrigazione alla semina o alla piantagione"
      },
      {
        "t": "X",
        "x": "Irrigare per inumidire il suolo attorno alla pianta e consentire all'hydrogel di continuare a caricarsi d'acqua. Questo apporto è minore rispetto a quello necessario con i granuli secchi, che richiedono un'irrigazione abbondante per caricarsi al momento della piantagione."
      },
      {
        "t": "X",
        "x": "Le colture devono poi essere irrigate, indipendentemente dalla forma utilizzata. I prodotti consentono di ridurre il fabbisogno idrico di almeno il 50 %."
      },
      {
        "t": "T",
        "x": "4. Preparazione del cantiere"
      },
      {
        "t": "X",
        "x": "Prima della semina o della piantagione, riunire il materiale necessario e prevedere personale adeguato, sia che si utilizzino granuli secchi sia preidratati."
      },
      {
        "t": "S",
        "x": "Preparazione e conservazione dell'hydrogel"
      },
      {
        "t": "X",
        "x": "L'hydrogel può essere preparato il giorno prima del cantiere. Utilizzarlo entro i due giorni successivi alla preparazione. Se viene conservato per essere utilizzato il giorno seguente, tenerlo al riparo dal sole e dal calore diretto. Questa precauzione di conservazione riguarda il periodo precedente alla piantagione."
      },
      {
        "t": "S",
        "x": "Pulizia delle attrezzature"
      },
      {
        "t": "X",
        "x": "Verificare la pulizia dei recipienti e delle attrezzature. I residui di prodotti fitosanitari possono rimanere attivi nell'hydrogel e danneggiare la crescita della pianta. La stessa precauzione si applica ai secchi che hanno contenuto prodotti per la pulizia o altri prodotti non destinati all'uso agricolo."
      },
      {
        "t": "T",
        "x": "5. Applicazione meccanizzata dei granuli secchi"
      },
      {
        "t": "X",
        "x": "L'applicazione a secco è il principale metodo di impiego meccanico dei ritentori idrici."
      },
      {
        "t": "S",
        "x": "Microgranulatore"
      },
      {
        "t": "X",
        "x": "Il microgranulatore deposita i granuli di ritentore idrico in linea, sotto la linea di semina. Una tramoggia riceve il prodotto e un azionamento meccanico assicura il dosaggio. I granuli scendono poi per gravità o vengono distribuiti mediante un sistema pneumatico."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Tra i produttori e distributori di microgranulatori figurano MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM e PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Attrezzature STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Lavorare al riparo dalla pioggia e da una forte umidità per evitare che i granuli si agglomerino e ostruiscano i tubi di distribuzione. Calcolare la dose per metro lineare, quindi regolare il microgranulatore di conseguenza."
      },
      {
        "t": "S",
        "x": "Spanditore e fresa rotativa"
      },
      {
        "t": "X",
        "x": "Per i cereali e le semine di tappeto erboso, i granuli secchi possono essere distribuiti e poi interrati con la fresa rotativa al momento della semina. L'operazione è paragonabile alla distribuzione e all'interramento di fertilizzante con una combinata di semina convenzionale."
      },
      {
        "t": "T",
        "x": "6. Iniezione di hydrogel su vegetali già impiantati"
      },
      {
        "t": "X",
        "x": "L'hydrogel si applica facilmente a mano. La sua applicazione meccanizzata richiede maggiori mezzi. L'iniezione riguarda esclusivamente vegetali già impiantati, in particolare gli alberi. Ha lo scopo di rilanciare l'attività vegetativa o di rafforzare la resistenza dell'albero in ambiente secco. I due obiettivi possono essere associati."
      },
      {
        "t": "S",
        "x": "Preparazione e iniezione"
      },
      {
        "t": "X",
        "x": "Mescolare i granuli secchi con acqua, preferibilmente sul cantiere. Può essere organizzata anche una preparazione con trasporto in cisterne."
      },
      {
        "t": "X",
        "x": "In base alle dimensioni e all'età dell'albero, effettuare da tre a quattro iniezioni a livello delle radici. Inserire nel suolo l'ago dell'iniettore pneumatico. L'aria compressa permette di iniettare la dose di hydrogel contenuta nella cisterna."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Esempi di attrezzature della società COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "el": {
    "lang": "el-GR",
    "eyebrow": "ΟΔΗΓΙΕΣ ΧΡΗΣΗΣ",
    "titre": "Εφαρμογή των υδροσυγκρατητών EVERGREEN® και ECOSORB®",
    "bouton": "Οδηγίες χρήσης EVERGREEN® και ECOSORB®",
    "sommaire": "Περιεχόμενα",
    "blocs": [
      {
        "t": "T",
        "x": "1. Αρχές χρήσης"
      },
      {
        "t": "X",
        "x": "Οι δύο υδροσυγκρατητές μπορούν να εφαρμοστούν με το χέρι ή με μηχάνημα, σε μορφή ξηρών ή προενυδατωμένων κόκκων (υδρογέλης). Η επιλογή εξαρτάται από τον διαθέσιμο εξοπλισμό και τους στόχους της καλλιέργειας. Στη χειροκίνητη εφαρμογή, οι χειρισμοί αλλάζουν ελάχιστα. Αντίθετα, στη μηχανοποιημένη εφαρμογή, κάθε μορφή απαιτεί διαφορετική μέθοδο και εξοπλισμό."
      },
      {
        "t": "X",
        "x": "Για τον χειρισμό του ξηρού προϊόντος, χρησιμοποιήστε στεγνό εξοπλισμό. Κατά την επαφή με την υγρασία, οι κόκκοι γίνονται κολλώδεις, γεγονός που δυσκολεύει τη χειρωνακτική εργασία. Σε ένα μηχάνημα, υπάρχει κίνδυνος να φράξουν τα συστήματα παραλαβής και μεταφοράς προς το έδαφος και να εμποδίσουν τη λειτουργία τους."
      },
      {
        "t": "T",
        "x": "2. Φύτευση με ξηρούς κόκκους"
      },
      {
        "t": "X",
        "x": "Η εφαρμογή είναι γρήγορη εφόσον κάθε φυτευτής διαθέτει στο αγροτεμάχιο ένα εργαλείο δοσομέτρησης που γνωρίζει να χρησιμοποιεί. Διατηρείτε τα χέρια σας στεγνά και χρησιμοποιείτε καθαρό και στεγνό δοσομετρητή. Οι κόκκοι προσκολλώνται σε υγρές επιφάνειες, με αποτέλεσμα απώλειες ή κακή κατανομή του προϊόντος."
      },
      {
        "t": "X",
        "x": "Ο πίνακας δοσολογίας της Green Solutions αναφέρει τη δόση αναφοράς για κάθε καλλιέργεια. Οι συστάσεις αυτές βασίζονται στα καλύτερα αποτελέσματα που επιτεύχθηκαν ανάλογα με τα φυτά, το έδαφος και το κλίμα. Συμβουλευτείτε μας πριν αλλάξετε τη δόση."
      },
      {
        "t": "X",
        "x": "Ανοίξτε λάκκο φύτευσης κατά 30 % βαθύτερο από το συνηθισμένο. Αυτός ο χώρος επιτρέπει στους κόκκους να διογκωθούν απορροφώντας νερό βροχής ή άρδευσης. Αν ο λάκκος είναι υπερβολικά ρηχός, η διόγκωση μπορεί να ανασηκώσει το φυτό και να εκθέσει τις ρίζες του στον αέρα, εις βάρος του φυτού και της αποτελεσματικότητας του υδροσυγκρατητή."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Φύτευση με ενυδατωμένους κόκκους"
      },
      {
        "t": "X",
        "x": "Η υδρογέλη δρα αμέσως στο έδαφος. Το νερό που βρίσκεται στο επίπεδο των ριζών εξαλείφει το υδατικό στρες που συνδέεται με τη μεταφύτευση. Από τη μεταφύτευση, το φυτό διαθέτει απόθεμα νερού πιο μακράς διάρκειας και αποτελεσματικότερο από εκείνο ενός μόνο ποτίσματος κατά τη φύτευση."
      },
      {
        "t": "S",
        "x": "Δοσολογία της υδρογέλης"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Τηρείτε τον πίνακα δοσολογίας. Ένα γραμμάριο ξηρού EVERGREEN® αντιστοιχεί σε περίπου 100 g υδρογέλης EVERGREEN®. Για να μεταφυτεύσετε ένα φυτό τομάτας, υπολογίστε 3 g ξηρού προϊόντος ή περίπου 300 g υδρογέλης.",
          "Η υδρογέλη δοσομετρείται ευκολότερα από λίγα γραμμάρια ξηρών κόκκων. Ένα κομμένο μπουκάλι νερού ή ένα κουτί κονσέρβας μπορεί να χρησιμοποιηθεί ως δοσομετρητής. Το δοχείο πρέπει να είναι καθαρό και βαθμονομημένο για τη συνιστώμενη δόση (βλέπε το εκπαιδευτικό βίντεο).",
          "Με την υδρογέλη, ο φυτευτής βλέπει τον απαιτούμενο όγκο για την τοποθέτηση του προϊόντος, του χώματος και του φυτού. Καθώς το προϊόν έχει ήδη διογκωθεί, αποφεύγεται έτσι η εκτόπιση του φυτού όταν ο λάκκος δεν έχει ανοιχτεί βαθύτερα."
        ]
      },
      {
        "t": "S",
        "x": "Πότισμα κατά τη σπορά ή τη φύτευση"
      },
      {
        "t": "X",
        "x": "Ποτίστε για να υγράνετε το έδαφος γύρω από το φυτό και να επιτρέψετε στην υδρογέλη να συνεχίσει να εμπλουτίζεται με νερό. Η ποσότητα αυτή είναι μικρότερη από εκείνη που απαιτείται με ξηρούς κόκκους, οι οποίοι χρειάζονται άφθονο πότισμα για να εμπλουτιστούν κατά τη φύτευση."
      },
      {
        "t": "X",
        "x": "Στη συνέχεια, οι καλλιέργειες πρέπει να ποτίζονται, ανεξάρτητα από τη μορφή που χρησιμοποιείται. Τα προϊόντα επιτρέπουν τη μείωση των αναγκών σε νερό κατά τουλάχιστον 50 %."
      },
      {
        "t": "T",
        "x": "4. Προετοιμασία του χώρου εργασίας"
      },
      {
        "t": "X",
        "x": "Πριν από τη σπορά ή τη φύτευση, συγκεντρώστε τον απαραίτητο εξοπλισμό και προβλέψτε το κατάλληλο προσωπικό, είτε χρησιμοποιείτε ξηρούς είτε προενυδατωμένους κόκκους."
      },
      {
        "t": "S",
        "x": "Προετοιμασία και διατήρηση της υδρογέλης"
      },
      {
        "t": "X",
        "x": "Η υδρογέλη μπορεί να προετοιμαστεί την παραμονή της εργασίας. Χρησιμοποιήστε την εντός των δύο ημερών που ακολουθούν την προετοιμασία της. Αν την αποθηκεύετε για χρήση την επόμενη ημέρα, διατηρήστε την προστατευμένη από τον ήλιο και την άμεση θερμότητα. Αυτή η προφύλαξη αποθήκευσης αφορά την περίοδο πριν από τη φύτευση."
      },
      {
        "t": "S",
        "x": "Καθαριότητα του εξοπλισμού"
      },
      {
        "t": "X",
        "x": "Ελέγξτε την καθαριότητα των δοχείων και του εξοπλισμού. Υπολείμματα φυτοπροστατευτικών προϊόντων μπορεί να παραμείνουν ενεργά στην υδρογέλη και να βλάψουν την ανάπτυξη του φυτού. Η ίδια προφύλαξη ισχύει για τους κουβάδες που έχουν περιέξει προϊόντα καθαρισμού ή άλλα προϊόντα που δεν προορίζονται για γεωργική χρήση."
      },
      {
        "t": "T",
        "x": "5. Μηχανοποιημένη εφαρμογή ξηρών κόκκων"
      },
      {
        "t": "X",
        "x": "Η εφαρμογή ξηρού προϊόντος είναι η κύρια μέθοδος μηχανικής εφαρμογής των υδροσυγκρατητών."
      },
      {
        "t": "S",
        "x": "Μικροκοκκοδιανομέας"
      },
      {
        "t": "X",
        "x": "Ο μικροκοκκοδιανομέας τοποθετεί τους κόκκους υδροσυγκρατητή σε γραμμή, κάτω από τη γραμμή σποράς. Μια χοάνη δέχεται το προϊόν και ένας μηχανικός μηχανισμός κίνησης εξασφαλίζει τη δοσομέτρηση. Στη συνέχεια, οι κόκκοι κατεβαίνουν με τη βαρύτητα ή κατανέμονται μέσω πνευματικού συστήματος."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Στους κατασκευαστές και διανομείς μικροκοκκοδιανομέων περιλαμβάνονται οι MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM και PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Εξοπλισμός STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Εργαστείτε προστατευμένοι από τη βροχή και την υψηλή υγρασία, ώστε να αποφύγετε τη συσσωμάτωση των κόκκων και την απόφραξη των σωλήνων διανομής. Υπολογίστε τη δόση ανά γραμμικό μέτρο και κατόπιν ρυθμίστε ανάλογα τον μικροκοκκοδιανομέα."
      },
      {
        "t": "S",
        "x": "Διανομέας και περιστροφική φρέζα"
      },
      {
        "t": "X",
        "x": "Για τα σιτηρά και τις σπορές γκαζόν, οι ξηροί κόκκοι μπορούν να διασκορπιστούν και στη συνέχεια να ενσωματωθούν με περιστροφική φρέζα κατά τη σπορά. Η εργασία είναι συγκρίσιμη με τη διασπορά και ενσωμάτωση λιπάσματος με συμβατικό συνδυασμένο σπαρτικό."
      },
      {
        "t": "T",
        "x": "6. Έγχυση υδρογέλης σε εγκατεστημένα φυτά"
      },
      {
        "t": "X",
        "x": "Η υδρογέλη εφαρμόζεται εύκολα με το χέρι. Η μηχανοποιημένη εφαρμογή της απαιτεί περισσότερα μέσα. Η έγχυση αφορά αποκλειστικά φυτά που βρίσκονται ήδη στη θέση τους, ιδίως δέντρα. Στόχος της είναι η επανεκκίνηση της φυτικής δραστηριότητας ή η ενίσχυση της αντοχής του δέντρου σε ξηρό περιβάλλον. Οι δύο αυτοί στόχοι μπορούν να συνδυαστούν."
      },
      {
        "t": "S",
        "x": "Προετοιμασία και έγχυση"
      },
      {
        "t": "X",
        "x": "Αναμείξτε τους ξηρούς κόκκους με νερό, κατά προτίμηση στον χώρο εργασίας. Μπορεί επίσης να οργανωθεί προετοιμασία με μεταφορά σε δεξαμενές."
      },
      {
        "t": "X",
        "x": "Ανάλογα με το μέγεθος και την ηλικία του δέντρου, πραγματοποιήστε τρεις έως τέσσερις εγχύσεις στο επίπεδο των ριζών. Εισαγάγετε τη βελόνα του πνευματικού εγχυτήρα στο έδαφος. Ο πεπιεσμένος αέρας επιτρέπει την έγχυση της δόσης υδρογέλης που περιέχεται στη δεξαμενή."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Παραδείγματα εξοπλισμού της εταιρείας COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "tr": {
    "lang": "tr-TR",
    "eyebrow": "KULLANIM KILAVUZU",
    "titre": "EVERGREEN® ve ECOSORB® su tutucularının uygulanması",
    "bouton": "EVERGREEN® ve ECOSORB® kullanım kılavuzu",
    "sommaire": "İçindekiler",
    "blocs": [
      {
        "t": "T",
        "x": "1. Kullanım İlkeleri"
      },
      {
        "t": "X",
        "x": "Her iki su tutucu da kuru veya önceden hidratlanmış granüller (hidrojel) hâlinde elle ya da makineyle uygulanabilir. Seçim, mevcut ekipmana ve yetiştirme hedeflerine bağlıdır. Elle uygulamada işlemler çok az değişir. Buna karşılık, mekanize uygulamada her form farklı bir yöntem ve ekipman gerektirir."
      },
      {
        "t": "X",
        "x": "Kuru ürünü kullanmak için kuru ekipman kullanın. Nemle temas ettiğinde granüller yapışkan hâle gelir; bu da elle çalışmayı zorlaştırır. Bir makinede ise alma ve toprağa iletme sistemlerini tıkayarak çalışmalarını engelleyebilirler."
      },
      {
        "t": "T",
        "x": "2. Kuru granüllerle dikim"
      },
      {
        "t": "X",
        "x": "Parselde her dikim işçisinin kullanmayı bildiği bir dozaj aracı varsa uygulama hızlıdır. Ellerinizi kuru tutun ve temiz, kuru bir dozaj aleti kullanın. Granüller nemli yüzeylere yapışır; bu da ürün kaybına veya ürünün eşit dağılmamasına yol açar."
      },
      {
        "t": "X",
        "x": "Green Solutions dozaj tablosu, her ürün için referans dozu gösterir. Bu öneriler, bitkiye, toprağa ve iklime göre elde edilen en iyi sonuçlara dayanır. Dozu değiştirmeden önce bize danışın."
      },
      {
        "t": "X",
        "x": "Her zamankinden %30 daha derin bir dikim çukuru açın. Bu alan, granüllerin yağmur veya sulama suyunu emerek şişmesini sağlar. Çukur çok sığ olursa şişme, fidanı yukarı kaldırarak köklerini havaya açıkta bırakabilir; bu durum bitkiye ve su tutucunun etkinliğine zarar verir."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Hidratlanmış granüllerle dikim"
      },
      {
        "t": "X",
        "x": "Hidrojel toprakta hemen etkinleşir. Kök seviyesinde bulunan su, şaşırtmadan kaynaklanan su stresini ortadan kaldırır. Fidan, dikimden itibaren tek seferlik dikim sulamasına göre daha kalıcı ve daha etkili bir su rezervine sahip olur."
      },
      {
        "t": "S",
        "x": "Hidrojel dozajı"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Dozaj tablosuna uyun. 1 g kuru EVERGREEN®, yaklaşık 100 g EVERGREEN® hidrojeline karşılık gelir. Bir domates fidanını şaşırtmak için 3 g kuru ürün veya yaklaşık 300 g hidrojel hesaplayın.",
          "Hidrojelin dozajı, birkaç gram kuru granüle göre daha kolay yapılır. Kesilmiş bir su şişesi veya konserve kutusu dozaj kabı olarak kullanılabilir. Kap temiz olmalı ve önerilen doza göre kalibre edilmelidir (eğitime bakın).",
          "Hidrojel kullanıldığında dikim işçisi, ürünü, toprağı ve fidanı yerleştirmek için gerekli hacmi görür. Ürün zaten şişmiş olduğundan, çukur daha derin kazılmamışsa fidanın dışarı itilmesi önlenir."
        ]
      },
      {
        "t": "S",
        "x": "Ekim veya dikimde sulama"
      },
      {
        "t": "X",
        "x": "Fidanın çevresindeki toprağı nemlendirmek ve hidrojelin suyla dolmaya devam etmesini sağlamak için sulayın. Bu su uygulaması, dikim sırasında dolabilmeleri için bol sulama gerektiren kuru granüllere kıyasla daha az önemlidir."
      },
      {
        "t": "X",
        "x": "Kullanılan form ne olursa olsun, ekinler daha sonra sulanmalıdır. Ürünler su ihtiyacını en az %50 azaltmayı sağlar."
      },
      {
        "t": "T",
        "x": "4. İşin hazırlanması"
      },
      {
        "t": "X",
        "x": "Ekim veya dikimden önce gerekli ekipmanı hazırlayın ve kuru ya da önceden hidratlanmış granüller kullanmanıza göre uygun sayıda personel planlayın."
      },
      {
        "t": "S",
        "x": "Hidrojelin hazırlanması ve saklanması"
      },
      {
        "t": "X",
        "x": "Hidrojel, işe başlanmadan bir gün önce hazırlanabilir. Hazırlandıktan sonraki iki gün içinde kullanın. Ertesi gün kullanmak üzere saklıyorsanız, güneşten ve doğrudan sıcaktan koruyun. Bu saklama önlemi, dikimden önceki dönem için geçerlidir."
      },
      {
        "t": "S",
        "x": "Ekipmanın temizliği"
      },
      {
        "t": "X",
        "x": "Kapların ve ekipmanın temizliğini kontrol edin. Bitki koruma ürünlerinin kalıntıları hidrojelde etkin kalabilir ve bitkinin büyümesine zarar verebilir. Aynı önlem, temizlik ürünleri veya tarımsal kullanım için tasarlanmamış başka ürünler içermiş kovalar için de geçerlidir."
      },
      {
        "t": "T",
        "x": "5. Kuru granüllerin mekanize uygulanması"
      },
      {
        "t": "X",
        "x": "Kuru uygulama, su tutucuların mekanik olarak uygulanmasındaki başlıca yöntemdir."
      },
      {
        "t": "S",
        "x": "Mikrogranülatör"
      },
      {
        "t": "X",
        "x": "Mikrogranülatör, su tutucu granüllerini ekim sırasının altına, sıra hâlinde bırakır. Bir hazne ürünü alır ve mekanik tahrik dozajı sağlar. Granüller daha sonra yer çekimiyle iner veya pnömatik bir sistemle dağıtılır."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Mikrogranülatör üreticileri ve dağıtıcıları arasında MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM ve PNEUMASEM yer alır."
      },
      {
        "t": "X",
        "x": "STARTEC ekipmanı: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Granüllerin topaklaşmasını ve dağıtım borularını tıkamasını önlemek için yağmurdan ve yüksek nemden korunarak çalışın. Dozu metre başına hesaplayın, ardından mikrogranülatörü buna göre ayarlayın."
      },
      {
        "t": "S",
        "x": "Serpme makinesi ve rotovatör"
      },
      {
        "t": "X",
        "x": "Tahıllar ve çim ekimleri için kuru granüller serpilebilir, ardından ekim sırasında rotovatörle toprağa karıştırılabilir. İşlem, geleneksel bir ekim kombinasyonu ile gübrenin serpilmesine ve toprağa gömülmesine benzer."
      },
      {
        "t": "T",
        "x": "6. Yerinde bulunan bitkilere hidrojel enjeksiyonu"
      },
      {
        "t": "X",
        "x": "Hidrojel elle kolayca uygulanır. Mekanize uygulaması daha fazla ekipman gerektirir. Enjeksiyon yalnızca hâlihazırda yerinde bulunan bitkiler, özellikle ağaçlar için uygulanır. Amaç, bitkisel faaliyeti yeniden canlandırmak veya ağacın kuru ortamdaki direncini güçlendirmektir. Bu iki amaç birleştirilebilir."
      },
      {
        "t": "S",
        "x": "Hazırlama ve enjeksiyon"
      },
      {
        "t": "X",
        "x": "Kuru granülleri tercihen çalışma sahasında suyla karıştırın. Tanklarla taşıma içeren bir hazırlık da düzenlenebilir."
      },
      {
        "t": "X",
        "x": "Ağacın boyutuna ve yaşına göre kök seviyesinde üç ila dört enjeksiyon yapın. Pnömatik enjektörün iğnesini toprağa sokun. Basınçlı hava, tanktaki hidrojel dozunun enjekte edilmesini sağlar."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "COSERWA şirketinin ekipman örnekleri: https://www.coserwa.com/"
      }
    ]
  },
  "pl": {
    "lang": "pl-PL",
    "eyebrow": "INSTRUKCJA STOSOWANIA",
    "titre": "Stosowanie środków zatrzymujących wodę EVERGREEN® i ECOSORB®",
    "bouton": "Instrukcja stosowania EVERGREEN® i ECOSORB®",
    "sommaire": "Spis treści",
    "blocs": [
      {
        "t": "T",
        "x": "1. Zasady stosowania"
      },
      {
        "t": "X",
        "x": "Oba środki zatrzymujące wodę można stosować ręcznie lub mechanicznie, w postaci suchych albo wstępnie nawodnionych granulek (hydrogelu). Wybór zależy od dostępnego sprzętu i celów uprawy. Przy stosowaniu ręcznym sposób postępowania zmienia się nieznacznie. Natomiast przy stosowaniu mechanicznym każda postać wymaga innej metody i innego wyposażenia."
      },
      {
        "t": "X",
        "x": "Do obchodzenia się z suchym produktem należy używać suchego sprzętu. W kontakcie z wilgocią granulki stają się lepkie, co utrudnia pracę ręczną. W maszynie mogą zatkać układy pobierania i doprowadzania do gleby, uniemożliwiając ich działanie."
      },
      {
        "t": "T",
        "x": "2. Sadzenie z użyciem suchych granulek"
      },
      {
        "t": "X",
        "x": "Stosowanie przebiega szybko, jeśli każdy sadzący ma na działce dozownik, którym potrafi się posługiwać. Należy zachować suche dłonie i używać czystego, suchego dozownika. Granulki przywierają do wilgotnych powierzchni, co powoduje straty lub nierównomierne rozprowadzenie produktu."
      },
      {
        "t": "X",
        "x": "Tabela dawkowania Green Solutions wskazuje dawkę referencyjną dla każdej uprawy. Zalecenia te opierają się na najlepszych wynikach uzyskanych w zależności od roślin, gleby i klimatu. Przed zmianą dawki należy się z nami skonsultować."
      },
      {
        "t": "X",
        "x": "Należy wykopać dołek do sadzenia o 30% głębszy niż zwykle. Przestrzeń ta umożliwia granulkom pęcznienie przez wchłanianie wody deszczowej lub wody do nawadniania. Jeśli dołek jest zbyt płytki, pęcznienie może wypchnąć roślinę i odsłonić jej korzenie, ze szkodą dla rośliny i skuteczności środka zatrzymującego wodę."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Sadzenie z użyciem nawodnionych granulek"
      },
      {
        "t": "X",
        "x": "Hydrogel działa w glebie natychmiast. Woda obecna na poziomie korzeni eliminuje stres wodny związany z przesadzaniem. Już od chwili przesadzenia roślina dysponuje rezerwą wody trwalszą i skuteczniejszą niż zapewniana przez jednorazowe podlanie podczas sadzenia."
      },
      {
        "t": "S",
        "x": "Dawkowanie hydrogelu"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Należy przestrzegać tabeli dawkowania. Jeden gram suchego EVERGREEN® odpowiada około 100 g hydrogelu EVERGREEN®. Do przesadzenia rośliny pomidora należy zastosować 3 g suchego produktu lub około 300 g hydrogelu.",
          "Hydrogel łatwiej jest dozować niż kilka gramów suchych granulek. Jako miarka może służyć przecięta butelka po wodzie lub puszka po konserwie. Pojemnik musi być czysty i wyskalowany na zalecaną dawkę (zob. samouczek).",
          "Dzięki hydrogelowi sadzący widzi objętość niezbędną do umieszczenia produktu, ziemi i rośliny. Ponieważ produkt już spęczniał, można w ten sposób uniknąć wypchnięcia rośliny, gdy dołek nie został wykopany głębiej."
        ]
      },
      {
        "t": "S",
        "x": "Podlewanie przy siewie lub sadzeniu"
      },
      {
        "t": "X",
        "x": "Należy podlać, aby zwilżyć glebę wokół rośliny i umożliwić hydrogelowi dalsze nasycanie się wodą. Ilość tej wody jest mniejsza niż w przypadku suchych granulek, które wymagają obfitego podlewania, aby nasycić się podczas sadzenia."
      },
      {
        "t": "X",
        "x": "Następnie uprawy należy podlewać, niezależnie od zastosowanej postaci produktu. Produkty umożliwiają zmniejszenie zapotrzebowania na wodę o co najmniej 50%."
      },
      {
        "t": "T",
        "x": "4. Przygotowanie prac"
      },
      {
        "t": "X",
        "x": "Przed siewem lub sadzeniem należy zgromadzić niezbędny sprzęt i zapewnić odpowiednią liczbę pracowników, zarówno w przypadku stosowania suchych, jak i wstępnie nawodnionych granulek."
      },
      {
        "t": "S",
        "x": "Przygotowanie i przechowywanie hydrogelu"
      },
      {
        "t": "X",
        "x": "Hydrogel można przygotować w przeddzień prac. Należy go zużyć w ciągu dwóch dni od przygotowania. Jeśli jest przechowywany w celu użycia następnego dnia, należy chronić go przed słońcem i bezpośrednim ciepłem. Środek ostrożności dotyczący przechowywania odnosi się do okresu poprzedzającego sadzenie."
      },
      {
        "t": "S",
        "x": "Czystość sprzętu"
      },
      {
        "t": "X",
        "x": "Należy sprawdzić czystość pojemników i sprzętu. Pozostałości środków ochrony roślin mogą pozostać aktywne w hydrogelu i szkodzić wzrostowi roślin. Taka sama ostrożność dotyczy wiader, w których znajdowały się środki czyszczące lub inne produkty nieprzeznaczone do zastosowań rolniczych."
      },
      {
        "t": "T",
        "x": "5. Mechaniczne stosowanie suchych granulek"
      },
      {
        "t": "X",
        "x": "Stosowanie na sucho jest główną metodą mechanicznego użycia środków zatrzymujących wodę."
      },
      {
        "t": "S",
        "x": "Mikrogranulator"
      },
      {
        "t": "X",
        "x": "Mikrogranulator umieszcza granulki środka zatrzymującego wodę w rzędzie, pod linią siewu. Zbiornik zasypowy przyjmuje produkt, a napęd mechaniczny zapewnia dawkowanie. Następnie granulki opadają pod wpływem grawitacji lub są rozprowadzane przez układ pneumatyczny."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Wśród producentów i dystrybutorów mikrogranulatorów znajdują się MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM i PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Sprzęt STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Należy pracować pod osłoną przed deszczem i wysoką wilgotnością, aby zapobiec zbrylaniu się granulek i zatykaniu przewodów rozprowadzających. Należy obliczyć dawkę na metr bieżący, a następnie odpowiednio wyregulować mikrogranulator."
      },
      {
        "t": "S",
        "x": "Rozsiewacz i glebogryzarka rotacyjna"
      },
      {
        "t": "X",
        "x": "W przypadku zbóż i wysiewu trawników suche granulki można rozsiewać, a następnie podczas siewu wymieszać z glebą za pomocą glebogryzarki rotacyjnej. Operacja jest porównywalna z rozsiewaniem i mieszaniem nawozu z glebą przy użyciu konwencjonalnego agregatu siewnego."
      },
      {
        "t": "T",
        "x": "6. Wstrzykiwanie hydrogelu do roślin już rosnących"
      },
      {
        "t": "X",
        "x": "Hydrogel łatwo stosuje się ręcznie. Jego mechaniczne stosowanie wymaga większych nakładów. Wstrzykiwanie dotyczy wyłącznie roślin już rosnących, w szczególności drzew. Ma ono na celu pobudzenie aktywności roślinnej lub wzmocnienie odporności drzewa w suchym środowisku. Oba cele można łączyć."
      },
      {
        "t": "S",
        "x": "Przygotowanie i wstrzykiwanie"
      },
      {
        "t": "X",
        "x": "Suche granulki należy wymieszać z wodą, najlepiej na miejscu prac. Można również zorganizować przygotowanie produktu z transportem w zbiornikach."
      },
      {
        "t": "X",
        "x": "W zależności od wielkości i wieku drzewa należy wykonać od trzech do czterech wstrzyknięć na poziomie korzeni. Należy wbić igłę iniektora pneumatycznego w glebę. Sprężone powietrze umożliwia wstrzyknięcie dawki hydrogelu znajdującej się w zbiorniku."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Przykłady sprzętu firmy COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "hr": {
    "lang": "hr-HR",
    "eyebrow": "UPUTE ZA UPORABU",
    "titre": "Primjena sredstava za zadržavanje vode EVERGREEN® i ECOSORB®",
    "bouton": "Upute za uporabu EVERGREEN® i ECOSORB®",
    "sommaire": "Sadržaj",
    "blocs": [
      {
        "t": "T",
        "x": "1. Načela uporabe"
      },
      {
        "t": "X",
        "x": "Oba sredstva za zadržavanje vode mogu se primjenjivati ručno ili strojno, u obliku suhih ili prethodno hidratiziranih granula (hidrogel). Izbor ovisi o dostupnoj opremi i ciljevima uzgoja. Postupci se pri ručnoj primjeni malo razlikuju. Međutim, svaki oblik pri strojnoj primjeni zahtijeva drukčiju metodu i opremu."
      },
      {
        "t": "X",
        "x": "Za rukovanje suhim proizvodom koristite suhu opremu. U dodiru s vlagom granule postaju ljepljive, što otežava ručni rad. U stroju mogu začepiti sustave za preuzimanje i dovod u tlo te spriječiti njihov rad."
      },
      {
        "t": "T",
        "x": "2. Sadnja sa suhim granulama"
      },
      {
        "t": "X",
        "x": "Primjena je brza ako svaki saditelj na parceli ima dozirni alat kojim se zna koristiti. Držite ruke suhima i koristite čist i suh dozator. Granule se prianjaju uz vlažne površine, što uzrokuje gubitke ili nepravilnu raspodjelu proizvoda."
      },
      {
        "t": "X",
        "x": "Tablica doziranja tvrtke Green Solutions navodi referentnu dozu za svaki uzgoj. Ove se preporuke temelje na najboljim postignutim rezultatima u skladu s biljkama, tlom i klimom. Obratite nam se prije promjene doze."
      },
      {
        "t": "X",
        "x": "Iskopajte sadnu jamu 30 % dublju nego što je uobičajeno. Taj prostor omogućuje granulama da nabubre upijajući kišnicu ili vodu za navodnjavanje. Ako je jama preplitka, bubrenje može podići sadnicu i izložiti njezino korijenje zraku, na štetu biljke i učinkovitosti sredstva za zadržavanje vode."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Sadnja s hidratiziranim granulama"
      },
      {
        "t": "X",
        "x": "Hidrogel odmah djeluje u tlu. Voda prisutna u zoni korijena uklanja vodni stres povezan s presađivanjem. Sadnica već pri presađivanju ima na raspolaganju dugotrajniju i učinkovitiju zalihu vode od one koju pruža samo jedno zalijevanje pri sadnji."
      },
      {
        "t": "S",
        "x": "Doziranje hidrogela"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Pridržavajte se tablice doziranja. Jedan gram suhog proizvoda EVERGREEN® odgovara približno 100 g hidrogela EVERGREEN®. Za presađivanje sadnice rajčice predvidite 3 g suhog proizvoda ili približno 300 g hidrogela.",
          "Hidrogel se lakše dozira nego nekoliko grama suhih granula. Odrezana boca za vodu ili konzerva može poslužiti kao mjerica. Posuda mora biti čista i kalibrirana za preporučenu dozu (pogledajte vodič).",
          "S hidrogelom saditelj vidi volumen potreban za smještaj proizvoda, zemlje i sadnice. Budući da je proizvod već nabubrio, time se izbjegava izbacivanje sadnice kada jama nije iskopana dublje."
        ]
      },
      {
        "t": "S",
        "x": "Zalijevanje pri sjetvi ili sadnji"
      },
      {
        "t": "X",
        "x": "Zalijte kako biste navlažili tlo oko sadnice i omogućili hidrogelu da se nastavi puniti vodom. Taj je unos manji nego kod suhih granula, kojima je pri sadnji potrebno obilno zalijevanje da bi se napunile."
      },
      {
        "t": "X",
        "x": "Usjeve nakon toga treba zalijevati, bez obzira na upotrijebljeni oblik. Proizvodi omogućuju smanjenje potreba za vodom za najmanje 50 %."
      },
      {
        "t": "T",
        "x": "4. Priprema radilišta"
      },
      {
        "t": "X",
        "x": "Prije sjetve ili sadnje prikupite potrebnu opremu i osigurajte odgovarajući broj radnika, bilo da koristite suhe ili prethodno hidratizirane granule."
      },
      {
        "t": "S",
        "x": "Priprema i čuvanje hidrogela"
      },
      {
        "t": "X",
        "x": "Hidrogel se može pripremiti dan prije radova. Upotrijebite ga u roku od dva dana nakon pripreme. Ako ga skladištite za uporabu sljedećeg dana, držite ga zaštićenog od sunca i izravne topline. Ova se mjera opreza pri skladištenju odnosi na razdoblje prije sadnje."
      },
      {
        "t": "S",
        "x": "Čistoća opreme"
      },
      {
        "t": "X",
        "x": "Provjerite čistoću posuda i opreme. Ostaci sredstava za zaštitu bilja mogu ostati aktivni u hidrogelu i štetiti rastu biljke. Ista mjera opreza vrijedi za kante u kojima su se nalazila sredstva za čišćenje ili drugi proizvodi koji nisu namijenjeni poljoprivrednoj uporabi."
      },
      {
        "t": "T",
        "x": "5. Strojna primjena suhih granula"
      },
      {
        "t": "X",
        "x": "Suha primjena glavna je metoda strojne uporabe sredstava za zadržavanje vode."
      },
      {
        "t": "S",
        "x": "Mikrogranulator"
      },
      {
        "t": "X",
        "x": "Mikrogranulator polaže granule sredstva za zadržavanje vode u red, ispod reda sjetve. Spremnik prima proizvod, a mehanički pogon osigurava doziranje. Granule se zatim spuštaju gravitacijom ili se raspoređuju pneumatskim sustavom."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Među proizvođačima i distributerima mikrogranulatora nalaze se MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM i PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Oprema STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Radite zaštićeni od kiše i visoke vlage kako biste spriječili zgrudnjavanje granula i začepljenje cijevi za raspodjelu. Izračunajte dozu po dužnom metru, a zatim prema tome podesite mikrogranulator."
      },
      {
        "t": "S",
        "x": "Rasipač i rotacijska freza"
      },
      {
        "t": "X",
        "x": "Za žitarice i sjetvu travnjaka suhe se granule mogu rasipati, a zatim pri sjetvi unijeti u tlo rotacijskom frezom. Postupak je usporediv s rasipanjem i unošenjem gnojiva u tlo konvencionalnom sjetvenom kombinacijom."
      },
      {
        "t": "T",
        "x": "6. Ubrizgavanje hidrogela u postojeće biljke"
      },
      {
        "t": "X",
        "x": "Hidrogel se lako primjenjuje ručno. Njegova strojna primjena zahtijeva više sredstava. Ubrizgavanje se odnosi samo na već postojeće biljke, osobito stabla. Cilj je ponovno potaknuti aktivnost biljke ili ojačati otpornost stabla u suhom okolišu. Ta se dva cilja mogu kombinirati."
      },
      {
        "t": "S",
        "x": "Priprema i ubrizgavanje"
      },
      {
        "t": "X",
        "x": "Pomiješajte suhe granule s vodom, po mogućnosti na radilištu. Može se organizirati i priprema uz prijevoz u spremnicima."
      },
      {
        "t": "X",
        "x": "Ovisno o veličini i starosti stabla, izvršite tri do četiri ubrizgavanja u zoni korijena. Utisnite iglu pneumatskog injektora u tlo. Komprimirani zrak omogućuje ubrizgavanje doze hidrogela sadržane u spremniku."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Primjeri opreme tvrtke COSERWA: https://www.coserwa.com/"
      }
    ]
  },
  "ca": {
    "lang": "ca-ES",
    "eyebrow": "MODE D'ÚS",
    "titre": "Aplicació dels hidroretenidors EVERGREEN® i ECOSORB®",
    "bouton": "Mode d'ús EVERGREEN® i ECOSORB®",
    "sommaire": "Índex",
    "blocs": [
      {
        "t": "T",
        "x": "1. Principis d'utilització"
      },
      {
        "t": "X",
        "x": "Els dos hidroretenidors es poden aplicar manualment o amb màquina, en forma de grànuls secs o prehidratats (hidrogel). L'elecció depèn del material disponible i dels objectius del cultiu. En l'aplicació manual, els gestos varien poc. En canvi, en l'aplicació mecanitzada, cada forma requereix un mètode i un equip diferents."
      },
      {
        "t": "X",
        "x": "Per manipular el producte sec, utilitzeu material sec. En contacte amb la humitat, els grànuls es tornen enganxosos, fet que dificulta el treball manual. En una màquina, poden obstruir els sistemes de recollida i de conducció fins al sòl i impedir-ne el funcionament."
      },
      {
        "t": "T",
        "x": "2. Plantació amb grànuls secs"
      },
      {
        "t": "X",
        "x": "L'aplicació és ràpida si cada plantador disposa a la parcel·la d'una eina de dosificació que sap utilitzar. Manteniu les mans seques i utilitzeu un dosificador net i sec. Els grànuls s'adhereixen a les superfícies humides, cosa que provoca pèrdues o una mala distribució del producte."
      },
      {
        "t": "X",
        "x": "La taula de dosificació de Green Solutions indica la dosi de referència per a cada cultiu. Aquestes recomanacions es basen en els millors resultats obtinguts segons les plantes, el sòl i el clima. Consulteu-nos abans de modificar la dosi."
      },
      {
        "t": "X",
        "x": "Caveu un clot de plantació un 30 % més profund del que és habitual. Aquest espai permet que els grànuls s'inflin en absorbir l'aigua de pluja o de reg. Si el clot és massa poc profund, la inflor pot aixecar la planta i exposar-ne les arrels a l'aire, en perjudici de la planta i de l'eficàcia de l'hidroretenidor."
      },
      {
        "t": "PHOTO",
        "n": 1
      },
      {
        "t": "T",
        "x": "3. Plantació amb grànuls hidratats"
      },
      {
        "t": "X",
        "x": "L'hidrogel actua immediatament al sòl. L'aigua present a l'altura de les arrels elimina l'estrès hídric associat al trasplantament. Des del repicat, la planta disposa d'una reserva d'aigua més duradora i més eficaç que la d'un sol reg en la plantació."
      },
      {
        "t": "S",
        "x": "Dosificació de l'hidrogel"
      },
      {
        "t": "COTE",
        "n": 2,
        "x": [
          "Respecteu la taula de dosificació. Un gram d'EVERGREEN® sec equival a aproximadament 100 g d'hidrogel d'EVERGREEN®. Per trasplantar una planta de tomàquet, calculeu 3 g de producte sec o aproximadament 300 g d'hidrogel.",
          "L'hidrogel es dosifica més fàcilment que uns quants grams de grànuls secs. Una ampolla d'aigua tallada o una llauna de conserva pot servir de dosificador. El recipient ha d'estar net i calibrat per a la dosi recomanada (vegeu el tutorial).",
          "Amb l'hidrogel, el plantador veu el volum necessari per allotjar el producte, la terra i la planta. Com que el producte ja s'ha inflat, s'evita així l'expulsió de la planta quan el clot no s'ha cavat més profund."
        ]
      },
      {
        "t": "S",
        "x": "Reg en la sembra o en la plantació"
      },
      {
        "t": "X",
        "x": "Regueu per humitejar el sòl al voltant de la planta i permetre que l'hidrogel continuï carregant-se d'aigua. Aquesta aportació és menys important que amb els grànuls secs, que necessiten un reg abundant per carregar-se en el moment de la plantació."
      },
      {
        "t": "X",
        "x": "Posteriorment, els cultius s'han de regar, independentment de la forma utilitzada. Els productes permeten reduir les necessitats d'aigua en almenys un 50 %."
      },
      {
        "t": "T",
        "x": "4. Preparació de l'obra"
      },
      {
        "t": "X",
        "x": "Abans de la sembra o la plantació, reuniu el material necessari i preveieu el personal adequat, tant si utilitzeu grànuls secs com prehidratats."
      },
      {
        "t": "S",
        "x": "Preparació i conservació de l'hidrogel"
      },
      {
        "t": "X",
        "x": "L'hidrogel es pot preparar el dia abans de l'obra. Utilitzeu-lo durant els dos dies posteriors a la preparació. Si l'emmagatzemeu per utilitzar-lo l'endemà, manteniu-lo protegit del sol i de la calor directa. Aquesta precaució d'emmagatzematge fa referència al període anterior a la plantació."
      },
      {
        "t": "S",
        "x": "Neteja del material"
      },
      {
        "t": "X",
        "x": "Comproveu la neteja dels recipients i del material. Els residus de productes fitosanitaris poden continuar actius a l'hidrogel i perjudicar el creixement del vegetal. La mateixa precaució s'aplica als cubells que hagin contingut productes de neteja o altres productes no destinats a un ús agrícola."
      },
      {
        "t": "T",
        "x": "5. Aplicació mecanitzada dels grànuls secs"
      },
      {
        "t": "X",
        "x": "L'aplicació en sec és el principal mètode d'aplicació mecànica dels hidroretenidors."
      },
      {
        "t": "S",
        "x": "Microgranulador"
      },
      {
        "t": "X",
        "x": "El microgranulador diposita els grànuls d'hidroretenidor en línia, sota la línia de sembra. Una tremuja rep el producte i un accionament mecànic garanteix la dosificació. Després, els grànuls baixen per gravetat o es distribueixen mitjançant un sistema pneumàtic."
      },
      {
        "t": "RANGEE",
        "n": [
          4,
          5,
          6
        ]
      },
      {
        "t": "X",
        "x": "Entre els fabricants i distribuïdors de microgranuladors hi ha MONOSEM, STARTEC, SEPEBA, KUHN, GASPARDO, VÄDERSTAD, PROMOSEM i PNEUMASEM."
      },
      {
        "t": "X",
        "x": "Material STARTEC: https://www.startecitaly.com/en/products/mikro/soffio/"
      },
      {
        "t": "X",
        "x": "Treballeu a l'abric de la pluja i d'una humitat elevada per evitar que els grànuls s'aglomerin i obstrueixin els tubs de distribució. Calculeu la dosi per metre lineal i, a continuació, ajusteu el microgranulador en conseqüència."
      },
      {
        "t": "S",
        "x": "Escampador i fresadora rotativa"
      },
      {
        "t": "X",
        "x": "Per als cereals i les sembres de gespa, els grànuls secs es poden escampar i després enterrar amb la fresadora rotativa en el moment de la sembra. L'operació és comparable a l'escampada i l'enterrament d'adob amb una combinada de sembra convencional."
      },
      {
        "t": "T",
        "x": "6. Injecció d'hidrogel en vegetals ja establerts"
      },
      {
        "t": "X",
        "x": "L'hidrogel s'aplica fàcilment a mà. La seva aplicació mecanitzada requereix més mitjans. La injecció es refereix únicament als vegetals ja establerts, en particular als arbres. Té com a objectiu reactivar l'activitat vegetal o reforçar la resistència de l'arbre en un medi sec. Aquests dos objectius es poden associar."
      },
      {
        "t": "S",
        "x": "Preparació i injecció"
      },
      {
        "t": "X",
        "x": "Barregeu els grànuls secs amb aigua, preferiblement a l'obra. També es pot organitzar una preparació amb transport en cisternes."
      },
      {
        "t": "X",
        "x": "Segons la mida i l'edat de l'arbre, efectueu de tres a quatre injeccions a l'altura de les arrels. Introduïu l'agulla de l'injector pneumàtic al sòl. L'aire comprimit permet injectar la dosi d'hidrogel continguda a la cisterna."
      },
      {
        "t": "RANGEE",
        "n": [
          7,
          8
        ]
      },
      {
        "t": "X",
        "x": "Exemples de material de l'empresa COSERWA: https://www.coserwa.com/"
      }
    ]
  }
};
