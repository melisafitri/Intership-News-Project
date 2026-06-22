import React from "react";
import BigCard from "../../molecules/BigCard/BigCard";
import "./BigCardList.css";

const BigCardList = ({ news = [] }) => {
  if (news.length === 0) return null;

  return (
    <div className="big-card-list">
      {news.map((item) => (
        <BigCard
          key={item.id}
          id={item.id}
          img={item.image}
          title={item.title}
          source={item.source}
          category={item.category}
          date={item.date}
          description={item.description}
          minutes={item.readingTime}
        />
      ))}
    </div>
  );
};

export default BigCardList;
