import React from "react";
import CategoryList from "../../components/organisms/CategoryList/CategoryList";
import Footer from "../../components/organisms/Footer/Footer";
import "./InterestTopicTemplate.css";

const InterestTopicTemplate = ({ children }) => {
  return (
    <div className="interest-topic-template">
      <header className="interest-topic-template__header">
        <CategoryList />
      </header>
      <main className="interest-topic-template__content">
        {children}
      </main>
      <footer className="interest-topic-template__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default InterestTopicTemplate;
