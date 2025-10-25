import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import { albums, artists } from "../data/data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 bg-gray-200">
      <section className="text-center">
        <div className="flex justify-between items-center w-full max-w-5xl mb-6 mt-25">
          <h2 className="text-2xl font-semibold">Álbumes destacados</h2>
          <Link
            to="/albums"
            className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Ver Todos
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          {albums.slice(0, 3).map((a) => (
            <AlbumCard key={a.id} {...a} />
          ))}
        </div>
      </section>
      <section className="text-center mb-25">
        <h2 className="text-2xl font-semibold mb-6">Artistas destacados</h2>
        <Link
          to="/artists"
          className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          Ver Todos
        </Link>
        <div className="flex justify-center items-start gap-16 mb-6 relative">
          <div className="flex flex-col items-center">
            <ArtistCard {...artists[0]} />
          </div>
          <div className="flex flex-col items-center translate-y-10">
            <ArtistCard {...artists[1]} />
          </div>
          <div className="flex flex-col items-center">
            <ArtistCard {...artists[2]} />
          </div>
        </div>
      </section>
    </main>
  );
}
