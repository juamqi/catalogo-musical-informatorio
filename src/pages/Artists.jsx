import { artists } from "../data/data";
import ArtistCard from "../components/ArtistCard";

export default function Artists() {
  return (
    <main>
      <h2>Artistas</h2>
      <div className="grid-artists">
        {artists.map((a) => (
          <ArtistCard key={a.id} {...a} />
        ))}
      </div>
    </main>
  );
}