import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import MusicParticles from "../components/MusicParticles";
import Section from "../components/Section";
import { albums, artists } from "../data/data";
import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center gap-25">
      <MusicParticles />
      {/* Sección de álbumes */}
      <Section className="relative z-10">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-6xl leading-tight">ÁLBUMES<br />DESTACADOS</h1>
          <Link to="/albums" className="px-8 py-3 rounded-full bg-[#FF6500] text-black font-semibold text-base shadow-lg hover:bg-white hover:text-black hover:shadow-[#FF6500]/50 transition-all duration-300">
            VER TODOS
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {albums.slice(0, 3).map((a) => (<AlbumCard key={a.id} {...a} />))}
        </div>
      </Section>
      {/* Animación de ecualizador */}
      <div className="absolute w-full flex gap-1 px-2 items-center justify-center mt-85">
        {Array.from({ length: 200 }).map((_, i) => { const delay = -(Math.random() * 1.8).toFixed(2); return (<div key={i} className="bg-[#FF6500] w-px h-25 animate-equalizer" style={{ animationDelay: `${delay}s`, animationDuration: "1.8s" }} />); })}
      </div>
      {/* Sección de artistas */}
      <Section className="relative text-center flex flex-col items-center mb-50">
        <h1 className="text-6xl leading-tight">ARTISTAS<br />DESTACADOS</h1>
        <Link to="/artists" className="z-10 absolute mt-42 px-8 py-3 rounded-full bg-[#FF6500] text-black font-semibold text-base shadow-lg hover:bg-white hover:text-black hover:shadow-[#FF6500]/50 transition-all duration-300">
          VER TODOS
        </Link>
        <div className="relative flex justify-center items-end">
          <div className="flex flex-col items-center">
            <ArtistCard {...artists[0]} />
          </div>
          <div className="flex flex-col items-center translate-y-25">
            <ArtistCard {...artists[1]} />
          </div>
          <div className="flex flex-col items-center">
            <ArtistCard {...artists[2]} />
          </div>
        </div>
      </Section>
    </main>
  );
}