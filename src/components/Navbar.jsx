import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `text-sm font-medium transition-colors hover:text-gray-900 ${
      location.pathname === path ? "text-black font-semibold" : "text-gray-600"
    }`;

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-lg font-bold tracking-wide text-black">
        Mi catálogo musical
      </Link>

      <div className="flex gap-8">
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
