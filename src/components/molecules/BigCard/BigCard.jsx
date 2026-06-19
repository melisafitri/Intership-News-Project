import "./BigCard.css";
import Source from "../../atoms/Source/Source";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

function BigCard({ img, title, source, readingTime }) {
  return (
    <div className="big-card">
      {img ? <img src={img} alt={title} className="big-card__img" /> : <div className="big-card__placeholder" />}
      <div className="big-card__overlay" />
      <div className="big-card__info">
        <p className="big-card__title">{title}</p>
        <div className="big-card__meta">
          <Source text={source} />
          {readingTime && <ReadingTime minutes={readingTime} />}
        </div>
      </div>
    </div>
  );
}

export default BigCard;
