import { NavLink } from "react-router-dom";
import "./SmallCard.css";
import Title from "../../atoms/Title/Title";
import Source from "../../atoms/Source/Source";
import Description from "../../atoms/Description/Description";
import ReadingTime from "../../atoms/ReadingTime/ReadingTime";

function SmallCard({ img, title, source, description, minutes }) {
  return (
    <div className="small-card">
      <div className="small-card-img">
        {img ? <img src={img} alt={title} /> : <div className="small-card-placeholder" />}
      </div>
      <div className="small-card-info">
        <Title text={title} />
        <Source text={source} />
        <Description text={description} />
        <ReadingTime minutes={minutes} />
      </div>
    </div>
  );
}

export default SmallCard;