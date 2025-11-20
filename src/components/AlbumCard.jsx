import { useFavoriteAlbum } from "../hooks/useFavoriteAlbum";

export default function AlbumCard({
  id,
  title,
  artist,
  cover,
  width = 296,
  height = 296,
}) {
  const { mutate, isPending, isSuccess, isError } = useFavoriteAlbum();

  const handleFavorite = () => {
    mutate({ id, title, artist, });
  };

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
          className="w-8 h-8 rounded-full flex items-center justify-center border border-[#FF6500] text-[#FF6500] hover:bg-[#FF6500] hover:text-black transition disabled:opacity-50">
          {isPending ? (
            <span className="animate-spin">⟳</span>
          ) : isSuccess ? (
            "❤"
          ) : (
            "♡"
          )}
        </button>
        {isError && (
          <p className="text-xs text-red-400 mt-1">Hubo un error</p>
        )}
      </div>
    </div>
  );
}