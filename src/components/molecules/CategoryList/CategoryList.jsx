import React, { useState } from "react";
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
  "Other",
];

const CategoryList = () => {
  const [active, setActive] = useState("Berita Utama");

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
            onClick={() => setActive(cat)}
          />
        ))}
      </div>
    </nav>
  );
};

export default CategoryList;
