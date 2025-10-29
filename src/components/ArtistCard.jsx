export default function ArtistCard({ name, img }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center p-4
        transform transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.05]
      "
    >
      <img
        src={img}
        alt={name}
        className="
          w-70 h-70 object-cover rounded-full
          shadow-sm hover:shadow-lg
          transition-all duration-300
        "
      />
      <p className="mt-3 text-xl font-semibold text-white">{name}</p>
    </div>
  );
}