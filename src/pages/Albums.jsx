import { useState } from "react";
import AlbumCard from "../components/AlbumCard";
import SearchBar from "../components/SearchBar";
import { useAlbumsSearch } from "../hooks/useAlbumsSearch";

export default function Albums() {
  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim();
  const { data, isLoading, isError } = useAlbumsSearch(trimmedQuery);

  const albums = data?.data ?? [];
  const shouldShowResults = trimmedQuery.length > 0;
  const containerClasses = `min-h-[calc(100vh-140px)] flex flex-col items-center ${
    shouldShowResults ? "justify-start pt-12 pb-28" : "justify-center text-center"
  }`;

  return (
    <main className={containerClasses}>
      <h1 className="text-6xl mb-8 tracking-wider">ÁLBUMES</h1>
      <SearchBar
        onSearch={(q) => setQuery(q)}
        placeholder="Buscar álbum..."
        showSort={false}
      />
      {shouldShowResults && isLoading && (
        <p className="text-gray-400">Cargando álbumes...</p>
      )}
      {shouldShowResults && isError && (
        <p className="text-red-400">Ocurrió un error al cargar.</p>
      )}
      {shouldShowResults && !isLoading && albums.length === 0 && (
        <p className="text-gray-400">No se encontraron resultados.</p>
      )}
      {shouldShowResults && (
        <div className="grid grid-cols-4 gap-8 mt-4">
          {albums.map((a) => (
            <AlbumCard
              key={a.id}
              id={a.id}
              title={a.title}
              artist={a.artist?.name}
              year={a.release_date?.slice(0, 4)}
              cover={a.cover_medium}
            />
          ))}
        </div>
      )}
    </main>
  );
}
