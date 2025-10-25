export default function ArtistCard({ name, img }) {
  return (
    <div className="artist-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
