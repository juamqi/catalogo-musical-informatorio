export default function ArtistCard({ name, img, width = 296, height = 296 }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.05]">
      <img src={img} width={width} height={height} loading="lazy" fetchPriority={name === "Clairo" ? "high" : "auto"} decoding="async" alt={name} className="w-80 h-80 object-cover rounded-full shadow-sm hover:shadow-lg transition-all duration-300 card-glow"/>
      <p className="mt-3 text-xl font-semibold text-white">{name}</p>
    </div>
  );
}