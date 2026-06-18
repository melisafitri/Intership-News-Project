import React from "react";
import CategoryList from "../../components/organisms/CategoryList/CategoryList";
import Footer from "../../components/organisms/Footer/Footer";
import "./HomeTemplate.css";

const HomeTemplate = ({ children }) => {
  return (
    <div className="home-template">
      <header className="home-template__header">
        <CategoryList />
      </header>
      <main className="home-template__content">
        {children}
      </main>
      <footer className="home-template__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeTemplate;
