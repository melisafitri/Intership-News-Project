import { useNavigate } from "react-router-dom";
import TopicItem from "../../atoms/TopicItem/TopicItem";
import "./TopicList.css";

function TopicList() {
  const navigate = useNavigate();

  const topics = [
    { id: 1, label: "Blackout Sumatra" },
    { id: 2, label: "Persib Hattrick Juara" },
    { id: 3, label: "Waspada Begal" },
    { id: 4, label: "Arsenal Juara Premier League" },
    { id: 5, label: "Update Situasi TimTeng" },
  ];

  const handleTopicClick = (topic) => {
    const slug = topic.label
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    navigate(`/topicpage/${slug}`, { state: { topicLabel: topic.label } });
  };

  return (
    <div className="topic-list">
      <h2 className="topic-list-title">Popular Topics</h2>

      <ul className="topic-list-items">
        {topics.map((topic) => (
          <TopicItem
            key={topic.id}
            label={topic.label}
            onClick={() => handleTopicClick(topic)}
          />
        ))}
      </ul>

      <button className="topic-list-btn" onClick={() => navigate("/interest-topic")}>See More Topic</button>
    </div>
  );
}

export default TopicList;