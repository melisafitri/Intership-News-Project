import React, { useState, useEffect } from "react";
import InterestTopicTemplate from "../../templates/InterestTopicTemplate/InterestTopicTemplate";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import "./InterestTopic.css";

const InterestTopic = () => {
  const [topics, setTopics] = useState([]);
  const [topicNews, setTopicNews] = useState({});

  useEffect(() => {
    // TODO: fetch list topic dari API
    // contoh: fetchTopics().then(setTopics)
  }, []);

  useEffect(() => {
    if (topics.length === 0) return;
    // TODO: fetch news per topic dari API
    // contoh:
    // topics.forEach((topic) => {
    //   fetchNewsByTopic(topic.slug).then((news) => {
    //     setTopicNews((prev) => ({ ...prev, [topic.slug]: news }));
    //   });
    // });
  }, [topics]);

  return (
    <InterestTopicTemplate>
      <div className="interest-topic">
        <h1 className="interest-topic__title">Daftar Topik</h1>
        {topics.map((topic) => (
          <div key={topic.id} className="interest-topic__section">
            <div className="interest-topic__section-header">
              <span className="interest-topic__tag"># {topic.label}</span>
            </div>
            <HorizontalNewsList
              title=""
              news={topicNews[topic.slug] || []}
            />
          </div>
        ))}
      </div>
    </InterestTopicTemplate>
  );
};

export default InterestTopic;
