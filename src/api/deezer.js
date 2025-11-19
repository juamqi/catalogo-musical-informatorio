const CORS = "https://proxy.corsfix.com/?";
const BASE = "https://api.deezer.com";

function URL(path) {
  return `${CORS}${BASE}${path}`;
}

export async function searchArtists(query) {
  const res = await fetch(URL(`/search/artist?q=${encodeURIComponent(query)}`));
  if (!res.ok) throw new Error("Error");
  return res.json();
}

export async function searchAlbums(query) {
  const res = await fetch(URL(`/search/album?q=${encodeURIComponent(query)}`));
  if (!res.ok) throw new Error("Error");
  return res.json();
}