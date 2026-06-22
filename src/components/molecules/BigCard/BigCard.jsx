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
        <div className="big-card__meta">
          {category && <span>{category}</span>}
          {source && <span>| {source}</span>}
        </div>
        <div className="big-card__bottom">
          {date && <span className="big-card__date">{date}</span>}
          {minutes && <span className="big-card__date"> | waktu baca {minutes} menit</span>}
        </div>
      </div>
    </NavLink>
  );
}

export default BigCard;
