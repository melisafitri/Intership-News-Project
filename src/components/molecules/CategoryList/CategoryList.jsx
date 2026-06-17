import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import CategoryItem from "../../atoms/CategoryItem/CategoryItem";
import Logo from "../../atoms/Logo/Logo";
import "./CategoryList.css";

const CATEGORIES = [
  "Berita Utama",
  "Terkini",
  "Nasional",
  "Global",
  "Ekonomi",
  "Olahraga",
  "Seleb",
  "Gaya Hidup",
  "Otomotif",
  "Teknologi",
];

const CategoryList = () => {
  const [active, setActive] = useState("Berita Utama");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (cat) => {
    setActive(cat);

    if (cat === "Berita Utama") {
      navigate("/");
    } else {
      const slug = cat.toLowerCase().replace(/\s+/g, "-");
      navigate(`/topicpage/${slug}`);
    }
  };

  return (
    <nav className="category-list">
      <div className="category-list__logo">
        <Logo />
      </div>
      <div className="category-list__items">
        {CATEGORIES.map((cat) => (
          <CategoryItem
            key={cat}
            label={cat}
            isActive={active === cat}
            onClick={() => handleClick(cat)}
          />
        ))}

        <div
          className="category-list__dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="category-list__dropdown-label">Other ▾</span>
          {dropdownOpen && (
            <div className="category-list__dropdown-menu">
              <NavLink to="/travel">Travel</NavLink>
              <NavLink to="/infografis">Infografis</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryList;