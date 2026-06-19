import React, { useRef } from "react";
import SmallCard from "../../molecules/SmallCard/SmallCard";
import "./HorizontalNewsList.css";

const HorizontalNewsList = ({ title = "", news = [] }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  if (news.length === 0) return null;

  return (
    <section className="horizontal-news">
      <div className="horizontal-news__header">
        <h2 className="horizontal-news__title">{title}</h2>
        <div className="horizontal-news__arrows">
          <button onClick={() => scroll("left")}>&#8249;</button>
          <button onClick={() => scroll("right")}>&#8250;</button>
        </div>
      </div>
      <div className="horizontal-news__list" ref={scrollRef}>
        {news.map((item) => (
          <div className="horizontal-news__item" key={item.id}>
            <SmallCard
              id={item.id}
              img={item.image}
              title={item.title}
              source={item.source}
              description={item.description}
              minutes={item.readingTime}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalNewsList;