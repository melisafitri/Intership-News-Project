import React from "react";
import CategoryList from "../../components/molecules/CategoryList/CategoryList";
import Footer from "../../components/organisms/Footer/Footer";
import "./TopicTemplate.css";

const TopicTemplate = ({ children }) => {
  return (
    <div className="topic-template">
      <header className="topic-template__header">
        <CategoryList />
      </header>

      <main className="topic-template__content">
        {children}
      </main>

      <footer className="topic-template__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default TopicTemplate;