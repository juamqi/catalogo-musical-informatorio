import { useState } from "react";
import { albums as allAlbums } from "../data/data";
import AlbumCard from "../components/AlbumCard";
import SearchBar from "../components/SearchBar";

export default function Albums() {
  const [albums, setAlbums] = useState([...allAlbums].sort((a, b) => a.title.localeCompare(b.title)));
  const handleSearch = (query) => { const filtered = allAlbums.filter((a) => a.title.toLowerCase().includes(query.toLowerCase())).sort((a, b) => a.title.localeCompare(b.title)); setAlbums(filtered); };
  const handleSort = (order) => { const sorted = [...albums].sort((a, b) => order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)); setAlbums(sorted); };
  return (
    <main className="flex flex-col items-center gap-10 mt-15 mb-30">
      <h1 className="text-6xl">ÁLBUMES</h1>
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        {albums.map((a) => (
          <AlbumCard key={a.id} {...a} />
        ))}
      </div>
    </main>
  );
}