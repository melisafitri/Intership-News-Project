import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./BannerCarousel.css";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

const BannerCarousel = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [current, slides.length]);

  if (slides.length === 0) {
    return <div className="carousel"><div className="carousel-placeholder carousel-placeholder--visible" /></div>;
  }

  const slide = slides[current];

  return (
    <div className="carousel">
      <NavLink to={`/detail/${slide?.id}`} className="carousel-link">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s) => (
            <div className="carousel-slide" key={s.id}>
              {s.image ? (
                <img src={s.image} alt={s.title} />
              ) : (
                <div className="carousel-placeholder carousel-placeholder--visible" />
              )}
            </div>
          ))}
        </div>

        <div className="carousel-overlay" />

        {slide?.title && (
          <div className="carousel-text">
            <h1>{slide.title}</h1>
            <div className="carousel-meta">
              {slide.category}
              {slide.source && ` | ${slide.source}`}
              {slide.date && ` | ${slide.date}`}
              {slide.readingTime && <> | <ReadingTime minutes={slide.readingTime} /></>}
            </div>
          </div>
        )}
      </NavLink>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <button className="carousel-arrow left" onClick={prev}>&#8249;</button>
      <button className="carousel-arrow right" onClick={next}>&#8250;</button>
    </div>
  );
};

export default BannerCarousel;