import { useState } from "react";
import AlbumCard from "../components/AlbumCard";
import SearchBar from "../components/SearchBar";
import { useAlbumsSearch } from "../hooks/useAlbumsSearch";

export default function Albums() {
  const [query, setQuery] = useState("phoebe bridgers");
  const { data, isLoading, isError } = useAlbumsSearch(query);

  const albums = data?.data ?? [];

  return (
    <main className="flex flex-col items-center gap-10 mt-15 mb-30">
      <h1 className="text-6xl">ÁLBUMES</h1>
      <SearchBar
        onSearch={(q) => setQuery(q)}
        placeholder="Buscar álbum..."
        showSort={false}
      />
      {isLoading && <p className="text-gray-400">Cargando álbumes...</p>}
      {isError && <p className="text-red-400">Ocurrió un error al cargar.</p>}
      {!isLoading && albums.length === 0 && (
        <p className="text-gray-400">No se encontraron resultados.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        {albums.map((a) => (
          <AlbumCard
            key={a.id}
            title={a.title}
            artist={a.artist?.name}
            cover={a.cover_medium}
            year={a.release_date?.split("-")[0]}
          />
        ))}
      </div>
    </main>
  );
}