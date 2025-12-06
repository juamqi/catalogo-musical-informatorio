const FAVORITES_KEY = "favoritos";

function safeParseFavorites(raw) {
  try {
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("No se pudieron leer los favoritos", error);
    return [];
  }
}

export function getStoredFavorites() {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return safeParseFavorites(stored);
}

export function isFavorite(id) {
  if (!id) return false;
  return getStoredFavorites().some((album) => album.id === id);
}

export function saveFavorites(albums) {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(albums));
}

export function addFavorite(album) {
  if (!album?.id) return [];
  const current = getStoredFavorites();
  const exists = current.some((a) => a.id === album.id);
  if (exists) return current;
  const updated = [...current, album];
  saveFavorites(updated);
  notifyFavoritesUpdated();
  return updated;
}

export function removeFavorite(id) {
  const current = getStoredFavorites();
  const updated = current.filter((album) => album.id !== id);
  saveFavorites(updated);
  notifyFavoritesUpdated();
  return updated;
}

export function notifyFavoritesUpdated() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("favoritesUpdated"));
}

export function clearFavorites() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(FAVORITES_KEY);
  notifyFavoritesUpdated();
}
