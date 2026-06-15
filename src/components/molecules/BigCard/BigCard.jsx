import "./BigCard.css";
import Title from "../atoms/Title/Title";
import Source from "../atoms/Source/Source";
import ReadingTime from "../atoms/ReadingTime/ReadingTime";
import Description from "../atoms/Description/Description";

function BigCard({ img, title, source, readingTime, description }) {
  return (
    <div className="big-card">
      <div className="big-card-img">
        <img src={img} alt={title} />
      </div>
      <div className="big-card-info">
        <Title text={title} />
        <Source text={source} />
        <ReadingTime minutes={readingTime} />
        <Description text={description} />
      </div>
    </div>
  );
}

export default BigCard;