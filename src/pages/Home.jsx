import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import MusicParticles from "../components/MusicParticles";
import Section from "../components/Section";
import "../index.css";
import { fetchFromDeezer } from "../api/deezer";

async function fetchAlbum(query) {
  const json = await fetchFromDeezer("/search/album", { q: query });
  return json.data?.[0];
}

async function fetchArtist(query) {
  const json = await fetchFromDeezer("/search/artist", { q: query });
  return json.data?.[0];
}

export default function Home() {
  const {
    data: featuredAlbums,
    isLoading: albumsLoading,
    isError: albumsError,
  } = useQuery({
    queryKey: ["featured-albums"],
    queryFn: async () => {
      const [inRainbows, nfr, boxer] = await Promise.all([
        fetchAlbum("In Rainbows Radiohead"),
        fetchAlbum("Norman Fucking Rockwell Lana Del Rey"),
        fetchAlbum("Boxer The National"),
      ]);
      return [inRainbows, nfr, boxer].filter(Boolean);
    },
  });

  const {
    data: featuredArtists,
    isLoading: artistsLoading,
    isError: artistsError,
  } = useQuery({
    queryKey: ["featured-artists"],
    queryFn: async () => {
      const [clairo, bigThief, phoebe] = await Promise.all([
        fetchArtist("Clairo"),
        fetchArtist("Big Thief"),
        fetchArtist("Phoebe Bridgers"),
      ]);
      return [clairo, bigThief, phoebe].filter(Boolean);
    },
  });

  return (
    <main className="relative flex flex-col items-center gap-25">
      <MusicParticles />
      <Section className="relative z-10">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-6xl leading-tight">
            ÁLBUMES
            <br />
            DESTACADOS
          </h1>
          <Link
            to="/albums"
            className="px-8 py-3 rounded-full bg-[#FF6500] text-black font-semibold text-base shadow-lg hover:bg-white hover:text-black hover:shadow-[#FF6500]/50 transition-all duration-300"
          >
            VER MÁS
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {albumsLoading && (
            <p className="text-gray-300">Cargando álbumes destacados...</p>
          )}
          {albumsError && (
            <p className="text-red-400">
              Ocurrió un error al cargar los álbumes.
            </p>
          )}
          {!albumsLoading &&
            !albumsError &&
            featuredAlbums?.map((a) => (
              <AlbumCard
                key={a.id}
                id={a.id}
                title={a.title}
                artist={a.artist?.name}
                year={a.release_date?.slice(0, 4)}
                cover={a.cover_medium}
              />
            ))}
        </div>
      </Section>
      <div className="absolute w-full flex gap-1 px-2 items-center justify-center mt-85">
        {Array.from({ length: 200 }).map((_, i) => {
          const delay = -(Math.random() * 1.8).toFixed(2);
          return (
            <div
              key={i}
              className="bg-[#FF6500] w-px h-25 animate-equalizer"
              style={{ animationDelay: `${delay}s`, animationDuration: "1.8s" }}
            />
          );
        })}
      </div>
      <Section className="relative text-center flex flex-col items-center mb-50">
        <h1 className="text-6xl leading-tight">
          ARTISTAS
          <br />
          DESTACADOS
        </h1>
        <Link
          to="/artists"
          className="z-10 absolute mt-42 px-8 py-3 rounded-full bg-[#FF6500] text-black font-semibold text-base shadow-lg hover:bg-white hover:text-black hover:shadow-[#FF6500]/50 transition-all duration-300"
        >
          VER MÁS
        </Link>
        {artistsLoading && (
          <p className="mt-10 text-gray-300">Cargando artistas destacados...</p>
        )}
        {artistsError && (
          <p className="mt-10 text-red-400">
            Ocurrió un error al cargar los artistas.
          </p>
        )}
        {!artistsLoading &&
          !artistsError &&
          featuredArtists &&
          featuredArtists.length >= 3 && (
            <div className="relative flex justify-center items-end mt-16">
              <div className="flex flex-col items-center">
                <ArtistCard
                  name={featuredArtists[0].name}
                  img={featuredArtists[0].picture_medium}
                />
              </div>
              <div className="flex flex-col items-center translate-y-25">
                <ArtistCard
                  name={featuredArtists[1].name}
                  img={featuredArtists[1].picture_medium}
                />
              </div>
              <div className="flex flex-col items-center">
                <ArtistCard
                  name={featuredArtists[2].name}
                  img={featuredArtists[2].picture_medium}
                />
              </div>
            </div>
          )}
      </Section>
    </main>
  );
}
