import React from "react";
import { useTrending, normalizeArticle } from "../../services/newsService";
import InterestTopicTemplate from "../../templates/InterestTopicTemplate/InterestTopicTemplate";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import StateView from "../../components/molecules/StateView/StateView";
import { errorStateProps, emptyStateProps } from "../../utils/errorState";
import "./InterestTopic.css";

const InterestTopic = () => {
  const { trending, loading, error, refetch } = useTrending();

  // tiap tag dari /tags/trending sudah membawa beritanya di "data"
  const topics = trending
    .map((t) => ({
      tag: t.tag,
      total: t.total_articles ?? (t.data ?? []).length,
      articles: (t.data ?? []).map(normalizeArticle),
    }))
    .filter((t) => t.articles.length > 0);

  return (
    <InterestTopicTemplate>
      <div className="interest-topic">
        {loading ? (
          <p style={{ padding: "20px", color: "#aaa", textAlign: "center" }}>Memuat...</p>
        ) : error ? (
          <StateView {...errorStateProps(error)} onRetry={refetch} />
        ) : topics.length === 0 ? (
          <StateView {...emptyStateProps("Belum ada berita untuk topik-topik ini.")} />
        ) : (
          topics.map((topic) => (
            <div className="interest-topic__section" key={topic.tag}>
              <div className="interest-topic__section-header">
                <span className="interest-topic__tag">#{topic.tag}</span>
                <span className="interest-topic__count">{topic.total} Articles</span>
              </div>
              <HorizontalNewsList title="" news={topic.articles.slice(0, 5)} />
            </div>
          ))
        )}
      </div>
    </InterestTopicTemplate>
  );
};

export default InterestTopic;
