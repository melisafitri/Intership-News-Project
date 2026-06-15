import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import "./TopNavbar.css";

function TopNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="top-navbar">

      <Logo />

      <div className="top-navbar-menu">
        <NavLink to="/berita-utama">Berita Utama</NavLink>
        <NavLink to="/terkini">Terkini</NavLink>
        <NavLink to="/nasional">Nasional</NavLink>
        <NavLink to="/global">Global</NavLink>
        <NavLink to="/ekonomi">Ekonomi</NavLink>
        <NavLink to="/olahraga">Olahraga</NavLink>
        <NavLink to="/seleb">Seleb</NavLink>
        <NavLink to="/gaya-hidup">Gaya Hidup</NavLink>
        <NavLink to="/otomotif">Otomotif</NavLink>
        <NavLink to="/teknologi">Teknologi</NavLink>

        <div
          className="top-navbar-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>Other ▾</span>
          {dropdownOpen && (
            <div className="top-navbar-dropdown-menu">
              <NavLink to="/travel">Travel</NavLink>
              <NavLink to="/infografis">Infografis</NavLink>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default TopNavbar;