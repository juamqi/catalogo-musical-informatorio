import { useState } from "react";
import { artists as allArtists } from "../data/data";
import SearchBar from "../components/SearchBar";
import ArtistCard from "../components/ArtistCard";

export default function Artists() {
  const [artists, setArtists] = useState(
    [...allArtists].sort((a, b) => a.name.localeCompare(b.name))
  );

  const handleSearch = (query) => {
    const filtered = allArtists
      .filter((a) => a.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
    setArtists(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...artists].sort((a, b) =>
      order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setArtists(sorted);
  };

  return (
    <main className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-5xl">ARTISTAS</h1>

      <SearchBar onSearch={handleSearch} onSort={handleSort} />

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {artists.map((a) => (
          <ArtistCard key={a.id} {...a} />
        ))}
      </div>
    </main>
  );
}
