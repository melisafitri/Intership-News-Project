import React from "react";
import { NewsServices } from "../../services/newsService";
import InterestTopicTemplate from "../../templates/InterestTopicTemplate/InterestTopicTemplate";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import "./InterestTopic.css";

const TOPICS = [
  { id: 1, label: "Nasional", slug: "nasional" },
  { id: 2, label: "Olahraga", slug: "olahraga" },
  { id: 3, label: "Teknologi", slug: "teknologi" },
  { id: 4, label: "Ekonomi", slug: "ekonomi" },
  { id: 5, label: "Global", slug: "global" },
];

const TopicSection = ({ label, slug }) => {
  const { news, loading } = NewsServices(slug);
  if (loading) return <p>Memuat {label}...</p>;
  if (news.length === 0) return null;

  return (
    <div className="interest-topic__section">
      <div className="interest-topic__section-header">
        <span className="interest-topic__tag">#{label}</span>
        <span className="interest-topic__count">{news.length} Articles</span>
      </div>
      <HorizontalNewsList title="" news={news.slice(0, 5)} />
    </div>
  );
};

const InterestTopic = () => {
  return (
    <InterestTopicTemplate>
      <div className="interest-topic">
        {TOPICS.map((topic) => (
          <TopicSection key={topic.id} label={topic.label} slug={topic.slug} />
        ))}
      </div>
    </InterestTopicTemplate>
  );
};

export default InterestTopic;
