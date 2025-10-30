import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import { albums, artists } from "../data/data";
import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      {/* Animación de ecualizador */}
      <div className="absolute inset-0 z-0 flex gap-1 px-2 animate-pulse pointer-events-none items-center justify-center mb-190">
        {Array.from({ length: 200 }).map((_, i) => { const delay = -(Math.random() * 1.8).toFixed(2); return (<div key={i} className="bg-[#FF6500] w-0.5 h-32 origin-bottom animate-equalizer" style={{ animationDelay: `${delay}s`, animationDuration: "1.8s" }} />); })}
      </div>
      {/* Sección de álbumes */}
      <section className="h-screen relative z-10">
        <div className="flex justify-between items-center w-full max-w-5xl mb-25 mt-20">
          <h1 className="text-6xl leading-tight">ÁLBUMES<br />DESTACADOS</h1>
          <Link to="/albums" className="px-8 py-3 rounded-full bg-[#FF6500] text-black font-semibold text-base shadow-lg hover:bg-white hover:text-black hover:shadow-[#FF6500]/50 transition-all duration-300">
            VER TODOS
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {albums.slice(0, 3).map((a) => (<AlbumCard key={a.id} {...a} />))}
        </div>
      </section>
      {/* Sección de artistas */}
      <section className="relative z-10 text-center mb-60 flex flex-col items-center">
        <h1 className="text-6xl leading-tight mb-10">ARTISTAS<br />DESTACADOS</h1>
        <Link to="/artists" className="px-8 py-3 rounded-full bg-[#FF6500] text-black font-semibold text-base shadow-lg hover:bg-white hover:text-black hover:shadow-[#FF6500]/50 transition-all duration-300">
          VER TODOS
        </Link>
        <div className="relative flex justify-center items-end">
          <div className="flex flex-col items-center">
            <ArtistCard {...artists[0]} />
          </div>
          <div className="flex flex-col items-center translate-y-30">
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