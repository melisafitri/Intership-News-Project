import React from "react";
import SmallCard from "../../molecules/SmallCard/SmallCard";
import "./NewsList.css";

const NewsList = ({ news = [], offset = 0, limit }) => {
  const items = limit ? news.slice(offset, offset + limit) : news.slice(offset);
  if (items.length === 0) return null;

  return (
    <div className="news-list">
      {items.map((item) => (
        <SmallCard
          key={item.id}
          img={item.image}
          title={item.title}
          source={item.source}
          description={item.description}
          minutes={item.readingTime}
        />
      ))}

    </div>
  );
};

export default NewsList;
