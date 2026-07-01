import { NavLink } from "react-router-dom";
import "./RelatedNewsItem.css";
import { handleImageError } from "../../../utils/imageFallback";

function RelatedNewsItem({ id, img, title, source, date, readingTime, category }) {
  return (
    <NavLink
      to={`/detail/${id}`}
      state={{ img, title, source, date, minutes: readingTime, category }}
      className="related-news-item"
    >
      <div className="related-news-item__img">
        <img src={img} alt={title} onError={handleImageError} />
      </div>
      <div className="related-news-item__info">
        <h3 className="related-news-item__title">{title}</h3>
        <p className="related-news-item__source">{source}</p>
      </div>
    </NavLink>
  );
}

export default RelatedNewsItem;