import React from "react";
import CategoryList from "../../components/organisms/CategoryList/CategoryList";
import Footer from "../../components/organisms/Footer/Footer";
import "./DetailNewsTemplate.css";

const DetailNewsTemplate = ({ children }) => {
  return (
    <div className="detail-news-template">
      <header className="detail-news-template__header">
        <CategoryList />
      </header>

      <main className="detail-news-template__content">
        {children}
      </main>

      <footer className="detail-news-template__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DetailNewsTemplate;