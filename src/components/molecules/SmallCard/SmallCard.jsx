import { NavLink } from "react-router-dom";
import "./SmallCard.css";
import { handleImageError } from "../../../utils/imageFallback";
import Title from "../../atoms/Title/Title";
import Source from "../../atoms/Source/Source";
import Description from "../../atoms/Description/Description";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

function SmallCard({ id, image, title, source, description, minutes, category, date }) {
  return (
    <NavLink
      to={`/detail/${id}`}
      state={{ image, title, source, date, minutes, category }}
      className="small-card"
    >
      <div className="small-card-img">
        {image ? <img src={image} alt={title} onError={handleImageError} /> : <div className="small-card-placeholder" />}
      </div>
      <div className="small-card-info">
        <Title text={title} />
        <Source text={source} />
        <p className="small-card-date">
          {date}{minutes && ` | reading-time ${minutes} menit`}
        </p>
        <Description text={description} />
      </div>
    </NavLink>
  );
}

export default SmallCard;