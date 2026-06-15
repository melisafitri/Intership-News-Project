import React from "react";
import timeIcon from "../../../assets/icons/time.png";
import "./ReadingTime.css";

const ReadingTime = ({ minutes }) => {
  return (
    <span className="reading-time">
      <img src={timeIcon} alt="reading time" className="reading-time__icon" />
      {minutes} menit
    </span>
  );
};

export default ReadingTime;
