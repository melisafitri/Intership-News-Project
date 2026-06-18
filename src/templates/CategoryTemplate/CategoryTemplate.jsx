import React from "react";
import CategoryList from "../../components/organisms/CategoryList/CategoryList";
import Footer from "../../components/organisms/Footer/Footer";
import "./CategoryTemplate.css";

const CategoryTemplate = ({ children }) => {
  return (
    <div className="category-template">
      <header className="category-template__header">
        <CategoryList />
      </header>
      <main className="category-template__content">
        {children}
      </main>
      <footer className="category-template__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default CategoryTemplate;
