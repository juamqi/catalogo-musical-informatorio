import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const linkStyle = (path) =>
    `relative text-base tracking-wide transition-all duration-300 ${location.pathname === path
      ? "text-[#EDF252] font-semibold"
      : "text-white"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="w-full h-16 backdrop-blur-md shadow-lg px-10 flex items-center sticky top-0 z-50 border-b border-[#BBBF49]/50">
      <Link to="/" className="flex-none w-60 text-lg text-[#BBBF49] tracking-widest">
        Catálogo Musical
      </Link>

      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          <Link to="/" className= {linkStyle("/")}>
            Inicio
          </Link>
          <Link to="/albums" className={linkStyle("/albums")}>
            Álbumes
          </Link>
          <Link to="/artists" className={linkStyle("/artists")}>
            Artistas
          </Link>
          {isAuthenticated && (
            <Link to="/favoritos" className={linkStyle("/favoritos")}>
              Favoritos
            </Link>
          )}
        </div>
      </div>

      <div className="flex-none w-60 flex items-center justify-end gap-3">
        {!isAuthenticated ? (
          <Link
            to="/login"
            className="text-[#EDF252] transition-colors"
          >
            Iniciar sesión
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="text-red-500 transition-colors"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
}
