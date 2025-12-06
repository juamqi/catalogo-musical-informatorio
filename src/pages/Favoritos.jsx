import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";
import { useAuth } from "../context/AuthContext";
import { getStoredFavorites } from "../utils/favorites";

export default function Favoritos() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState(() => getStoredFavorites());

  useEffect(() => {
    // Vuelve a sincronizar por si se modificaron desde otra pestaña.
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

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-[calc(100vh-140px)] flex flex-col gap-8 px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">Tus favoritos</h1>
          <p className="text-gray-300">Guardados en este dispositivo.</p>
        </div>
        <button
          onClick={handleLogout}
          className="self-start md:self-center px-5 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          Cerrar sesión
        </button>
      </div>

      {favoritos.length === 0 ? (
        <p className="text-gray-400 text-lg">No tenés álbumes favoritos guardados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </main>
  );
}
