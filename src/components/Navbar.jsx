import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `relative text-base tracking-wide transition-all duration-300 ${location.pathname === path
      ? "text-[#FF6500] font-semibold"
      : "text-white"
    }`;

  return (
    <nav className="w-full bg-black/40 backdrop-blur-md shadow-lg py-5 px-10 flex justify-between items-center sticky top-0 z-50 border-b border-white/10">
      <Link to="/" className="text-lg text-white tracking-widest">
        Mi Catálogo Musical
      </Link>
      <div className="flex gap-10">
        <Link to="/" className={linkStyle("/")}>
          Inicio
        </Link>
        <Link to="/albums" className={linkStyle("/albums")}>
          Álbumes
        </Link>
        <Link to="/artists" className={linkStyle("/artists")}>
          Artistas
        </Link>
      </div>
    </nav>
  );
}