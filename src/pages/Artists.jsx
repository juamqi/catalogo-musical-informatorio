import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ArtistCard from "../components/ArtistCard";
import { useArtistsSearch } from "../hooks/useArtistsSearch";

export default function Artists() {
  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim();
  const { data, isLoading, isError } = useArtistsSearch(trimmedQuery);

  const artists = data?.data ?? [];
  const shouldShowResults = trimmedQuery.length > 0;
  const containerClasses = `min-h-[calc(100vh-140px)] flex flex-col items-center ${
    shouldShowResults ? "justify-start pt-12 pb-28" : "justify-center text-center"
  }`;

  return (
    <main className={containerClasses}>
      <h1 className="text-6xl mb-8 tracking-wider">ARTISTAS</h1>
      <SearchBar
        onSearch={(q) => setQuery(q)}
        placeholder="Buscar artista..."
        showSort={false}
      />
      {shouldShowResults && isLoading && (
        <p className="text-gray-400">Cargando artistas...</p>
      )}
      {shouldShowResults && isError && (
        <p className="text-red-400">Ocurrió un error al cargar.</p>
      )}
      {shouldShowResults && !isLoading && artists.length === 0 && (
        <p className="text-gray-400">No se encontraron resultados.</p>
      )}
      {shouldShowResults && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
          {artists.map((a) => (
            <ArtistCard
              key={a.id}
              name={a.name}
              img={a.picture_medium}
            />
          ))}
        </div>
      )}
    </main>
  );
}
