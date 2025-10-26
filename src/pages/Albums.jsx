import { useState } from "react";
import { albums as allAlbums } from "../data/data";
import AlbumCard from "../components/AlbumCard";
import SearchBar from "../components/SearchBar";

export default function Albums() {
  const [albums, setAlbums] = useState(allAlbums);

  const handleSearch = (query) => {
    const filtered = allAlbums.filter((a) =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    setAlbums(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...albums].sort((a, b) =>
      order === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setAlbums(sorted);
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h2 className="text-2xl font-semibold mt-6">Álbumes</h2>

      <SearchBar onSearch={handleSearch} onSort={handleSort} />

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {albums.map((a) => (
          <AlbumCard key={a.id} {...a} />
        ))}
      </div>
    </main>
  );
}