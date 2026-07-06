import React, { useState } from "react";
import CategoryItem from "../../atoms/CategoryItem/CategoryItem";
import Logo from "../../atoms/Logo/Logo";
import { NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import "./CategoryList.css";

const CATEGORIES = [
  { label: "Berita Utama", slug: "berita-utama", to: "/" },
  { label: "Terkini", slug: "terkini", to: "/category/terkini" },
  { label: "Nasional", slug: "nasional", to: "/category/nasional" },
  { label: "Global", slug: "global", to: "/category/global" },
  { label: "Ekonomi", slug: "ekonomi", to: "/category/ekonomi" },
  { label: "Olahraga", slug: "olahraga", to: "/category/olahraga" },
  { label: "Seleb", slug: "seleb", to: "/category/seleb" },
  { label: "Gaya Hidup", slug: "gaya-hidup", to: "/category/gaya-hidup" },
  { label: "Otomotif", slug: "otomotif", to: "/category/otomotif" },
  { label: "Teknologi", slug: "teknologi", to: "/category/teknologi" },
];

const CategoryList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();

  // Tentukan kategori aktif berdasarkan URL
  const activeSlug = slug || "berita-utama";

  // Slug yang ada di dalam dropdown "Other"
  const OTHER_SLUGS = ["travel", "infografis"];
  const isOtherActive = OTHER_SLUGS.includes(activeSlug);

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
            isActive={activeSlug === cat.slug}
            onClick={() => navigate(cat.to)}
          />
        ))}

        <div className="category-list__dropdown">
          <span
            className={`category-list__dropdown-label ${isOtherActive ? "category-list__dropdown-label--active" : ""}`}
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