import React, { useState, useEffect, useCallback } from "react";
import { NewsServices } from "../../services/newsService";
import InterestTopicTemplate from "../../templates/InterestTopicTemplate/InterestTopicTemplate";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import StateView from "../../components/molecules/StateView/StateView";
import { errorStateProps } from "../../utils/errorState";
import "./InterestTopic.css";

const TOPICS = [
  { id: 1, label: "78tahunbomnuklir", slug: "78tahunbomnuklir" },
  { id: 2, label: "16besarpialadunia", slug: "16besarpialadunia" },
  { id: 3, label: "1muharam1445h", slug: "1muharam1445h" },
  { id: 4, label: "20wnikorbantppo League", slug: "20wnikorbantppo League" },
  { id: 5, label: "69pegawaikemenkeu ", slug: "69pegawaikemenkeu " },
];

const TopicSection = ({ id, label, slug, onStatus }) => {
  const { news, loading, error } = NewsServices(slug);

  // laporkan status topik ini ke induk (InterestTopic)
  useEffect(() => {
    onStatus(id, { loading, error: error || null, count: news.length });
  }, [id, loading, error, news.length, onStatus]);

  // status ditangani di level halaman → di sini cukup tampil kalau ada isi
  if (loading || error || news.length === 0) return null;

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
  const [statuses, setStatuses] = useState({});
  const [reloadKey, setReloadKey] = useState(0);

  // ambil ulang semua topik: kosongkan status + remount semua section
  const retryAll = () => {
    setStatuses({});
    setReloadKey((k) => k + 1);
  };

  const handleStatus = useCallback((id, status) => {
    setStatuses((prev) => {
      const cur = prev[id];
      if (
        cur &&
        cur.loading === status.loading &&
        cur.error === status.error &&
        cur.count === status.count
      ) {
        return prev; // tidak berubah → jangan render ulang (cegah loop)
      }
      return { ...prev, [id]: status };
    });
  }, []);

  const list = Object.values(statuses);
  const settled = list.filter((s) => !s.loading);
  const allSettled = settled.length === TOPICS.length;
  const hasContent = list.some((s) => !s.loading && !s.error && s.count > 0);

  const allError = allSettled && settled.every((s) => s.error);
  const allEmpty = allSettled && settled.every((s) => !s.error && s.count === 0);
  const firstError = settled.find((s) => s.error)?.error;

  return (
    <InterestTopicTemplate>
      <div className="interest-topic">
        {TOPICS.map((topic) => (
          <TopicSection
            key={`${topic.id}-${reloadKey}`}
            id={topic.id}
            label={topic.label}
            slug={topic.slug}
            onStatus={handleStatus}
          />
        ))}
      </div>

      {!allSettled && !hasContent && (
        <p style={{ padding: "20px", color: "#aaa", textAlign: "center" }}>Memuat...</p>
      )}

      {allError && (
        <StateView {...errorStateProps(firstError)} onRetry={retryAll} />
      )}

      {!allError && allEmpty && (
        <StateView
          title="Berita tidak ditemukan"
          message="Belum ada berita untuk topik-topik ini."
        />
      )}
    </InterestTopicTemplate>
  );
};

export default InterestTopic;
