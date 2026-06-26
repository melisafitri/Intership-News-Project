import React from "react";
import { NewsServices } from "../../services/newsService";
import InterestTopicTemplate from "../../templates/InterestTopicTemplate/InterestTopicTemplate";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import "./InterestTopic.css";

const TOPICS = [
  { id: 1, label: "78tahunbomnuklir", slug: "78tahunbomnuklir" },
  { id: 2, label: "16besarpialadunia", slug: "16besarpialadunia" },
  { id: 3, label: "1muharam1445h", slug: "1muharam1445h" },
  { id: 4, label: "20wnikorbantppo League", slug: "20wnikorbantppo League" },
  { id: 5, label: "69pegawaikemenkeu ", slug: "69pegawaikemenkeu " },
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
