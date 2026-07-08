import React from "react";
import { useLocation, useParams } from "react-router-dom";
import TopicTemplate from "../../templates/TopicTemplate/TopicTemplate";
import NewsList from "../../components/organisms/NewsList/NewsList";
import TopicList from "../../components/organisms/TopicList/TopicList";
import MobileTopBar from "../../components/organisms/MobileTopBar/MobileTopBar";
import StateView from "../../components/molecules/StateView/StateView";
import { errorStateProps } from "../../utils/errorState";
import { useTrending, normalizeArticle, slugifyTag } from "../../services/newsService";
import "./Topic.css";

const Topic = () => {
  const location = useLocation();
  const { slug } = useParams();

  const { trending, loading, error, refetch } = useTrending();

  // cocokkan slug URL dengan tag dari /tags/trending, lalu ambil beritanya
  const topic = trending.find((t) => slugifyTag(t.tag) === slug);
  const topicLabel = location.state?.topicLabel || topic?.tag || slug?.replace(/-/g, " ");
  const news = (topic?.data ?? []).map(normalizeArticle);

  return (
    <TopicTemplate mobileHeader={<MobileTopBar title={topicLabel} />}>
      <div className="topic__left">
        <div className="topic__result-header">
          <p className="topic__result">Result for # {topicLabel}</p>
          <p className="topic__total">
            {loading ? "Memuat..." : `Total ${news.length} Articles`}
          </p>
        </div>

        {error ? (
          <StateView {...errorStateProps(error)} onRetry={refetch} />
        ) : loading ? (
          <p style={{ color: "#aaa", padding: "20px 0" }}>Memuat berita...</p>
        ) : news.length === 0 ? (
          <StateView
            title="Berita tidak ditemukan"
            message={`Tidak ada hasil untuk #${topicLabel}.`}
          />
        ) : (
          <NewsList news={news} />
        )}
      </div>

      <div className="topic__right">
        <TopicList />
      </div>
    </TopicTemplate>
  );
};

export default Topic;









// import React, { useState, useEffect } from "react";
// import { useLocation, useParams, useSearchParams } from "react-router-dom";
// import TopicTemplate from "../../templates/TopicTemplate/TopicTemplate";
// import NewsList from "../../components/organisms/NewsList/NewsList";
// import Pagination from "../../components/organisms/Pagination/Pagination";
// import TopicList from "../../components/organisms/TopicList/TopicList";
// import "./Topic.css";

// const ITEMS_PER_PAGE = 4;

// const SLUG_TO_CNN_CATEGORY = {
//   "berita-utama": "nasional",
//   "terkini": "nasional",
//   "nasional": "nasional",
//   "global": "internasional",
//   "ekonomi": "ekonomi",
//   "olahraga": "olahraga",
//   "seleb": "hiburan",
//   "gaya-hidup": "gaya-hidup",
//   "otomotif": "nasional",
//   "teknologi": "teknologi",
//   "travel": "gaya-hidup",
//   "infografis": "nasional",
// };

// const formatDate = (isoDate) => {
//   if (!isoDate) return "";
//   const date = new Date(isoDate);
//   return date.toLocaleDateString("id-ID", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }) + " - " + date.toLocaleTimeString("id-ID", {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// };

// const Topic = () => {
//   const location = useLocation();
//   const { slug } = useParams();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const page = searchParams.get("page");
//   const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);
//   const [allNews, setAllNews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const topicLabel = location.state?.topicLabel || slug?.replace(/-/g, " ");
//   const cnnCategory = SLUG_TO_CNN_CATEGORY[slug] || "nasional";

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await fetch(`https://berita-indo-api-next.vercel.app/api/cnn-news/${cnnCategory}`);
//         const json = await res.json();
//         const mapped = json.data.map((item, index) => ({
//           id: index + 1,
//           image: item.image?.large || item.image?.small || "",
//           title: item.title,
//           source: "CNN Indonesia",
//           category: topicLabel,
//           // description: item.contentSnippet,
//           readingTime: Math.ceil(item.contentSnippet?.split(" ").length / 200) || 3,
//           date: formatDate(item.isoDate),
//           link: item.link,
//         }));
//         setAllNews(mapped);
//       } catch (err) {
//         setError("Gagal memuat berita. Coba lagi nanti.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [slug, cnnCategory]);

//   useEffect(() => {
//     setCurrentPage(1);
//     searchParams.set("page", 1);
//     setSearchParams(searchParams);
//   }, [slug]);

//   const totalArticles = allNews.length;
//   const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentNews = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const clickPagination = (destinationPage) => {
//     searchParams.set("page", destinationPage);
//     setSearchParams(searchParams);
//     setCurrentPage(destinationPage);
//   };

//   return (
//     <TopicTemplate>
//       <div className="topic__left">
//         <div className="topic__result-header">
//           <p className="topic__result">Result for # {topicLabel}</p>
//           <p className="topic__total">
//             {loading ? "Memuat..." : `Total ${totalArticles} Articles`}
//           </p>
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {loading ? (
//           <p style={{ color: "#aaa", padding: "20px 0" }}>Memuat berita...</p>
//         ) : (
//           <>
//             <NewsList news={currentNews} />
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={clickPagination}
//             />
//           </>
//         )}
//       </div>

//       <div className="topic__right">
//         <TopicList />
//       </div>
//     </TopicTemplate>
//   );
// };

// export default Topic;