import React, { useState } from "react";
import CategoryItem from "../../atoms/CategoryItem/CategoryItem";
import Logo from "../../atoms/Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import "./CategoryList.css";

const CATEGORIES = [
  { label: "Berita Utama", slug: "berita-utama" },
  { label: "Terkini", slug: "terkini" },
  { label: "Nasional", slug: "nasional" },
  { label: "Global", slug: "global" },
  { label: "Ekonomi", slug: "ekonomi" },
  { label: "Olahraga", slug: "olahraga" },
  { label: "Seleb", slug: "seleb" },
  { label: "Gaya Hidup", slug: "gaya-hidup" },
  { label: "Otomotif", slug: "otomotif" },
  { label: "Teknologi", slug: "teknologi" },
];

const CategoryList = () => {
  const [active, setActive] = useState("Berita Utama");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="category-list">
      <div className="category-list__logo">
        <Logo />
      </div>
      <div className="category-list__items">
        {CATEGORIES.map((cat) => (
          <CategoryItem
            key={cat.slug}
            label={cat.label}
            isActive={active === cat.slug}
            onClick={() => { setActive(cat.slug); navigate(`/category/${cat.slug}`); }}
          />
        ))}

        <div className="category-list__dropdown">
          <span
            className="category-list__dropdown-label"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Other {dropdownOpen ? "▴" : "▾"}
          </span>
          {dropdownOpen && (
            <div className="category-list__dropdown-menu">
              <NavLink to="/category/travel" onClick={() => setDropdownOpen(false)}>Travel</NavLink>
              <NavLink to="/category/infografis" onClick={() => setDropdownOpen(false)}>Infografis</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryList;
