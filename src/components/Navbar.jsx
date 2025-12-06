import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const linkStyle = (path) =>
    `relative text-base tracking-wide transition-all duration-300 ${location.pathname === path
      ? "text-[#FF6500] font-semibold"
      : "text-white"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="w-full bg-black/40 backdrop-blur-md shadow-lg py-5 px-10 flex justify-between items-center sticky top-0 z-50 border-b border-white/10">
      <Link to="/" className="text-lg text-white tracking-widest">
        Mi Catálogo Musical
      </Link>
      <div className="flex items-center gap-8">
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
          {isAuthenticated && (
            <Link to="/favoritos" className={linkStyle("/favoritos")}>
              Favoritos
            </Link>
          )}
        </div>
        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full border border-[#FF6500] text-[#FF6500] hover:bg-[#FF6500] hover:text-black transition-colors"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
