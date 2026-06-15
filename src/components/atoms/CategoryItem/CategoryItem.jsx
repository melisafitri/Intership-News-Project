import React from "react";
import "./CategoryItem.css";

interface CategoryItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, isActive = false, onClick }) => {
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
