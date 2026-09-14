// Géocodage et relevé climatique via Open-Meteo (sans clé d'API).
// Isolé du moteur de calcul : une panne réseau ne doit jamais empêcher le
// calcul de dose, seulement priver l'estimation d'eau de son contexte.

import { climateZone, stressLevel, type Climate } from "./dose.ts";

const GEOCODING = "https://geocoding-api.open-meteo.com/v1/search";
const ARCHIVE = "https://archive-api.open-meteo.com/v1/archive";

export interface PlaceQuery {
  country: string;
  region?: string;
  city?: string;
}

export interface Place {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  altitude: number | null;
}

export class ClimateUnavailable extends Error {}

interface GeocodingHit {
  name: string;
  country?: string;
  latitude: number;
  longitude: number;
  elevation?: number;
}

export async function findPlace(
  query: PlaceQuery,
  signal?: AbortSignal,
  language = "fr",
): Promise<Place> {
  const term = (query.city || query.region || query.country || "").trim();
  if (!term) throw new ClimateUnavailable("empty query");

  const url = `${GEOCODING}?name=${encodeURIComponent(term)}&count=10&language=${language}&format=json`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new ClimateUnavailable(`geocoding ${res.status}`);

  const data = (await res.json()) as { results?: GeocodingHit[] };
  const hits = data.results ?? [];
  if (hits.length === 0) throw new ClimateUnavailable("not found");

  // Une même ville existe sous plusieurs pays : le pays saisi arbitre.
  const wanted = query.country.trim().toLowerCase();
  const hit =
    (wanted && hits.find((h) => String(h.country ?? "").toLowerCase().includes(wanted))) || hits[0];

  return {
    name: hit.name,
    country: hit.country ?? "",
    latitude: hit.latitude,
    longitude: hit.longitude,
    altitude: Number.isFinite(hit.elevation) ? (hit.elevation as number) : null,
  };
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

export async function fetchClimate(place: Place, signal?: AbortSignal): Promise<Climate> {
  // L'archive accuse quelques jours de retard : on recule la fenêtre d'autant.
  const end = new Date();
  end.setDate(end.getDate() - 6);
  const start = new Date(end);
  start.setFullYear(start.getFullYear() - 1);

  const url =
    `${ARCHIVE}?latitude=${place.latitude}&longitude=${place.longitude}` +
    `&start_date=${iso(start)}&end_date=${iso(end)}` +
    `&daily=temperature_2m_mean,precipitation_sum&timezone=auto`;

  const res = await fetch(url, { signal });
  if (!res.ok) throw new ClimateUnavailable(`archive ${res.status}`);

  const data = (await res.json()) as {
    daily?: { temperature_2m_mean?: (number | null)[]; precipitation_sum?: (number | null)[] };
  };

  const temps = (data.daily?.temperature_2m_mean ?? []).filter(
    (v): v is number => typeof v === "number" && Number.isFinite(v),
  );
  const rains = (data.daily?.precipitation_sum ?? []).filter(
    (v): v is number => typeof v === "number" && Number.isFinite(v),
  );
  if (temps.length === 0) throw new ClimateUnavailable("no temperature series");

  const temperature = temps.reduce((a, b) => a + b, 0) / temps.length;
  const rainfall = rains.reduce((a, b) => a + b, 0);

  return {
    latitude: place.latitude,
    temperature,
    rainfall,
    altitude: place.altitude,
    zone: climateZone(place.latitude, temperature),
    stress: stressLevel(temperature),
  };
}

export async function resolveClimate(
  query: PlaceQuery,
  signal?: AbortSignal,
  language = "fr",
): Promise<{ place: Place; climate: Climate }> {
  const place = await findPlace(query, signal, language);
  const climate = await fetchClimate(place, signal);
  return { place, climate };
}
