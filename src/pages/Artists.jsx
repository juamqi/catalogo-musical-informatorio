import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ArtistCard from "../components/ArtistCard";
import { useArtistsSearch } from "../hooks/useArtistsSearch";

export default function Artists() {
  const [query, setQuery] = useState("clairo");
  const { data, isLoading, isError } = useArtistsSearch(query);

  const artists = data?.data ?? [];

  return (
    <main className="flex flex-col items-center gap-10 mt-15 mb-30">
      <h1 className="text-6xl">ARTISTAS</h1>
      <SearchBar
        onSearch={(q) => setQuery(q)}
        placeholder="Buscar artista..."
        showSort={false}
      />
      {isLoading && <p className="text-gray-400">Cargando artistas...</p>}
      {isError && <p className="text-red-400">Ocurrió un error al cargar.</p>}
      {!isLoading && artists.length === 0 && (
        <p className="text-gray-400">No se encontraron resultados.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        {artists.map((a) => (
          <ArtistCard
            key={a.id}
            name={a.name}
            img={a.picture_medium}
          />
        ))}
      </div>
    </main>
  );
}