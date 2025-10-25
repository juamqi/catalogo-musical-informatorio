import { albums, artists } from "../data/data";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import Section from "../components/Section";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Section title="Álbumes destacados">
        {albums.slice(0, 3).map((a) => (
          <AlbumCard key={a.id} {...a} />
        ))}
        <Link to="/albums"><button>Ver Todos</button></Link>
      </Section>

      <Section title="Artistas destacados">
        {artists.slice(0, 3).map((a) => (
          <ArtistCard key={a.id} {...a} />
        ))}
        <Link to="/artists"><button>Ver Todos</button></Link>
      </Section>
    </main>
  );
}