import { albums } from "../data/data";
import AlbumCard from "../components/AlbumCard";

export default function Albums() {
  return (
    <main>
      <h2>Álbumes destacados</h2>
      <div className="grid">
        {albums.map((a) => (
          <AlbumCard key={a.id} {...a} />
        ))}
      </div>
    </main>
  );
}