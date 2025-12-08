import { useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard";
import { getStoredFavorites } from "../utils/favorites";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState(() => getStoredFavorites());

  useEffect(() => {
    const handleStorage = () => {
      setFavoritos(getStoredFavorites());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("favoritesUpdated", handleStorage);
    setFavoritos(getStoredFavorites());
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("favoritesUpdated", handleStorage);
    };
  }, []);

  return (
    <main className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center pt-12 pb-28">
      <div className="px-10 flex flex-col items-center">
        <h1 className="text-6xl mb-8 tracking-wider">TUS FAVORITOS</h1>
        {favoritos.length === 0 ? (
          <p className="text-gray-400 text-lg">No tenés álbumes favoritos guardados.</p>
        ) : (
          <div className="w-full grid grid-cols-4 gap-8 mt-4">
            {favoritos.map((album) => (
              <AlbumCard
                key={album.id}
                id={album.id}
                title={album.title}
                artist={album.artist}
                year={album.year}
                cover={album.cover}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}