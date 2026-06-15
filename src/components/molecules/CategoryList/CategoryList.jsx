import React, { useState } from "react";
import CategoryItem from "../../atoms/CategoryItem/CategoryItem";
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
      {CATEGORIES.map((cat) => (
        <CategoryItem
          key={cat}
          label={cat}
          isActive={active === cat}
          onClick={() => setActive(cat)}
        />
      ))}
    </nav>
  );
};

export default CategoryList;
