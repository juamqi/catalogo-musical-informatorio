import { useEffect, useState } from "react";
import { useFavoriteAlbum } from "../hooks/useFavoriteAlbum";
import { useAuth } from "../context/AuthContext";
import {
  addFavorite,
  isFavorite as isFavoriteStored,
  removeFavorite,
} from "../utils/favorites";

export default function AlbumCard({
  id,
  title,
  artist,
  year,
  cover,
  width = 296,
  height = 296,
}) {
  const { mutate, isPending, isError } = useFavoriteAlbum();
  const { isAuthenticated } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isFavoriteStored(id));

    const syncFavorites = () => setIsFavorite(isFavoriteStored(id));
    window.addEventListener("favoritesUpdated", syncFavorites);
    window.addEventListener("storage", syncFavorites);
    return () => {
      window.removeEventListener("favoritesUpdated", syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, [id]);

  const handleFavorite = () => {
    if (!isAuthenticated) {
      alert("Debés iniciar sesión para agregar favoritos.");
      return;
    }

    if (!id) return;
    if (isFavorite) {
      removeFavorite(id);
      setIsFavorite(false);
      return;
    }

    mutate(
      { id, title, artist },
      {
        onSuccess: () => {
          addFavorite({ id, title, artist, year, cover });
          setIsFavorite(true);
        },
      }
    );
  };

  const favoriteIcon = isPending ? (
    <span className="animate-spin">⟳</span>
  ) : isFavorite ? (
    "❤"
  ) : (
    "♡"
  );

  return (
    <div className="flex flex-col items-start w-80 p-3 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]">
      <img
        src={cover}
        width={width}
        height={height}
        loading={title === "In Rainbows" ? "eager" : "lazy"}
        fetchPriority={title === "In Rainbows" ? "high" : "auto"}
        decoding={title === "In Rainbows" ? "sync" : "async"}
        alt={`${title} cover`}
        className="card-glow w-full object-cover rounded-md mb-3"
      />
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
        <p className="text-md line-clamp-1">{artist}</p>
        <button
          onClick={handleFavorite}
          disabled={isPending}
          className={`w-8 h-8 rounded-full flex items-center justify-center border transition disabled:opacity-50 ${isFavorite
            ? "bg-[#EDF252] border-[#EDF252] text-black"
            : "border-[#EDF252] text-[#EDF252] hover:bg-[#EDF252] hover:text-black"
            }`}
        >
          {favoriteIcon}
        </button>
        {isError && (
          <p className="text-xs text-red-400 mt-1">Hubo un error</p>
        )}
      </div>
    </div>
  );
}
