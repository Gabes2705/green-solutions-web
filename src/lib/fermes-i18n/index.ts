import type { Lang } from "@/lib/content";
import type { FermesCopy } from "./types";
import ar from "./ar";
import ca from "./ca";
import de from "./de";
import el from "./el";
import en from "./en";
import es from "./es";
import fr from "./fr";
import hr from "./hr";
import id from "./id";
import it from "./it";
import pl from "./pl";
import pt from "./pt";
import tr from "./tr";
import zh from "./zh";

export type { Carte, FermesCopy } from "./types";

/* Les textes de la rubrique « Fermes idéales », une entrée par langue du site. */
export const FERMES: Record<Lang, FermesCopy> = {
  fr,
  en,
  es,
  pt,
  ar,
  zh,
  id,
  de,
  it,
  el,
  tr,
  pl,
  hr,
  ca,
};
