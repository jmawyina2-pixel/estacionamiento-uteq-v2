import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">
        <span>🅿️ UTEQ Smart Parking</span>
        <span className="nav-badge">Live RTDB</span>
      </Link>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/estacionamiento">Monitor en Vivo</Link>
      </nav>
    </header>
  );
};