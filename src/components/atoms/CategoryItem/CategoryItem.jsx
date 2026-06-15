import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ label, isActive = false, onClick }) => {
  return (
    <button
      className={`category-item ${isActive ? "category-item--active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CategoryItem;
