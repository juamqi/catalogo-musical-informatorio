import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mi catálogo musical</h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/albums">Álbumes</Link>
        <Link to="/artists">Artistas</Link>
      </div>
    </nav>
  );
}