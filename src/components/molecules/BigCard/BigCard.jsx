import { NavLink } from "react-router-dom";
import "./BigCard.css";
import Title from "../../atoms/Title/Title";
import Source from "../../atoms/Source/Source";
import Description from "../../atoms/Description/Description";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

function BigCard({ id,img, title, source, description, minutes, category, date, readingTime }) {
  return (
    <NavLink to={`/detail/${id}`} state={{id, img, title, source, description, minutes, category, date, readingTime}}className="big-card">
      {img ? <img src={img} alt={title} className="big-card__img" /> : <div className="big-card__placeholder" />}
      <div className="big-card__overlay" />
      <div className="big-card__info">
        <p className="big-card__title">{title}</p>
        <Description text={description} />
        <div className="big-card__meta">
          {category && <span>{category}</span>}
          {source && <span>| {source}</span>}
          {date && <span>| {date}</span>}
          {minutes && <><span>|</span><ReadingTime minutes={minutes} /></>}
        </div>
      </div>
    </NavLink>
  );
}

export default BigCard;
