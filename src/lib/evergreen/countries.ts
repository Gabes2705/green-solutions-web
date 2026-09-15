/* Les pays proposés au calculateur de dose, par code ISO 3166-1 alpha-2.
 *
 * Le nom n'est pas écrit ici : Intl.DisplayNames le donne dans la langue du
 * visiteur, et la liste se trie dans cette même langue — l'ordre alphabétique
 * d'un Français n'est pas celui d'un Arabe.
 */
const CODES = [
  "AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF",
  "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG",
  "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO",
  "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GF",
  "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL",
  "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR",
  "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD",
  "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MQ", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ",
  "NA", "NC", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PF", "PG", "PH",
  "PK", "PL", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC",
  "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD",
  "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY",
  "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "YE", "YT", "ZA", "ZM", "ZW",
];

export interface Country {
  code: string;
  name: string;
}

export function countryName(code: string, language: string): string {
  try {
    return new Intl.DisplayNames([language], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

export function countriesFor(language: string): Country[] {
  const collator = new Intl.Collator(language);
  return CODES.map((code) => ({ code, name: countryName(code, language) })).sort((a, b) =>
    collator.compare(a.name, b.name),
  );
}
