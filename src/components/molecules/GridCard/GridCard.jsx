import { NavLink } from "react-router-dom";
import "./GridCard.css";
import { handleImageError } from "../../../utils/imageFallback";

function GridCard({ id, image, title, source, category, date, minutes }) {
  return (
    <NavLink
      to={`/detail/${id}`}
      state={{ id, image, title, source, category, date, minutes }}
      className="grid-card"
    >
      <div className="grid-card__img-wrap">
        {image ? <img src={image} alt={title} className="grid-card__img" onError={handleImageError} /> : <div className="grid-card__placeholder" />}
      </div>
      <p className="grid-card__title">{title}</p>
      <p className="grid-card__meta">
        {source}
        {date && ` | ${date}`}
      </p>
    </NavLink>
  );
}

export default GridCard;
