export default function AlbumCard({ title, artist, year, cover }) {
  return (
    <div className="
    flex flex-col items-start 
    w-80 p-3
    transform transition-all duration-300 
    hover:-translate-y-2 hover:scale-[1.03]
  ">
      <img src={cover} alt={`${title} cover`} className="card-glow w-full object-cover rounded-md mb-3" />
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
        <p className="text-md line-clamp-1">{artist}</p>
        <span className="text-md">{year}</span>
      </div>
    </div>
  );
}