import { NavLink } from "react-router-dom";
import "./SmallCard.css";
import Title from "../../atoms/Title/Title";
import Source from "../../atoms/Source/Source";
import Description from "../../atoms/Description/Description";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

function SmallCard({ id, img, title, source, description, minutes, date }) {
  return (
    <NavLink to={`/detail/${id}`} className="small-card">
      <div className="small-card-img">
        {img ? <img src={img} alt={title} /> : <div className="small-card-placeholder" />}
      </div>
      <div className="small-card-info">
        <Title text={title} />
        <Source text={source} />
        <div className="small-card-meta">
          {date && <span className="small-card-date">{date}</span>}
          {minutes && <span className="small-card-date"> | waktu baca {minutes} menit</span>}
        </div>
        <Description text={description} />
      </div>
    </NavLink>
  );
}

export default SmallCard;