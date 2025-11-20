const CORS = "https://proxy.corsfix.com/?";
const BASE = "https://api.deezer.com";

function getUrl(path, params = {}) {
  const searchParams = new URLSearchParams(params);

  if (import.meta.env.DEV) {
    const query = searchParams.toString();
    return `${CORS}${BASE}${path}${query ? `?${query}` : ""}`;
  }

  const proxyParams = new URLSearchParams({ path, ...params });
  return `/api/deezer?${proxyParams.toString()}`;
}

async function fetchFromDeezer(path, params) {
  const res = await fetch(getUrl(path, params));
  if (!res.ok) throw new Error("Error");
  return res.json();
}

export async function searchArtists(query) {
  return fetchFromDeezer("/search/artist", { q: query });
}

export async function searchAlbums(query) {
  return fetchFromDeezer("/search/album", { q: query });
}

export { fetchFromDeezer };