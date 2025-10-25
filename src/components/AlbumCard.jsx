export default function AlbumCard({ title, artist, year, cover }) {
  return (
    <div className="album-card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <span>{year}</span>
    </div>
  );
}
