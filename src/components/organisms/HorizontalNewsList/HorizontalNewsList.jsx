import React, { useRef, useState } from "react";
import BigCard from "../../molecules/BigCard/BigCard";
import "./HorizontalNewsList.css";

const HorizontalNewsList = ({ title = "", news = [] }) => {
  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollX(el.scrollLeft);
    setReachedEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  if (news.length === 0) return null;

  return (
    <section className="horizontal-news">
      {title && <h2 className="horizontal-news__title">{title}</h2>}
      <div className="horizontal-news__track">
        {scrollX > 0 && (
          <button className="horizontal-news__btn horizontal-news__btn--left" onClick={() => scroll("left")}>&#8249;</button>
        )}
        <div className="horizontal-news__list" ref={scrollRef} onScroll={handleScroll}>
          {news.map((item) => (
            <div className="horizontal-news__item" key={item.id}>
              <BigCard
                img={item.image}
                title={item.title}
                source={item.source}
                readingTime={item.readingTime}
                description={item.description}
              />
            </div>
          ))}
        </div>
        {!reachedEnd && (
          <button className="horizontal-news__btn horizontal-news__btn--right" onClick={() => scroll("right")}>&#8250;</button>
        )}
      </div>
    </section>
  );
};

export default HorizontalNewsList;
