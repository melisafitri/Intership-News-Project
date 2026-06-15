import React from "react";
import "./TopicItem.css";

function TopicItem({ label, onClick }) {
  return (
    <li className="topic-item" onClick={onClick}>
      <span className="topic-item__hash">#</span>
      <span className="topic-item__label">{label}</span>
    </li>
  );
}

export default TopicItem;
