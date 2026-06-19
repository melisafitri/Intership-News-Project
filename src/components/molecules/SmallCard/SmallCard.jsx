import { NavLink } from "react-router-dom";
import "./SmallCard.css";
import Title from "../../atoms/Title/Title";
import Source from "../../atoms/Source/Source";
import Description from "../../atoms/Description/Description";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

function SmallCard({ id, img, title, source, description, minutes, category, date }) {
  return (
    <NavLink to={`/detail/${id}`} state={{ id, img, title, source, description, minutes, category, date }} className="small-card">
      <div className="small-card-img">
        {img ? <img src={img} alt={title} /> : <div className="small-card-placeholder" />}
      </div>
      <div className="small-card-info">
        <Title text={title} />
        <Description text={description} />
        <div className="small-card-meta">
          {category && <span>{category}</span>}
          {source && <span>| {source}</span>}
          {date && <span>| {date}</span>}
          {minutes && <><span>|</span><ReadingTime minutes={minutes} /></>}
        </div>
      </div>
    </NavLink>
  );
}

export default SmallCard;