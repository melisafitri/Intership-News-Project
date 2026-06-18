import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryTemplate from "../../templates/CategoryTemplate/CategoryTemplate";
import BannerCarousel from "../../components/organisms/BannerCarousel/BannerCarousel";
import NewsList from "../../components/organisms/NewsList/NewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Home.css";

const CATEGORY_LABELS = {
  "berita-utama": "Berita Utama",
  "terkini": "Terkini",
  "nasional": "Nasional",
  "global": "Global",
  "ekonomi": "Ekonomi",
  "olahraga": "Olahraga",
  "seleb": "Seleb",
  "gaya-hidup": "Gaya Hidup",
  "otomotif": "Otomotif",
  "teknologi": "Teknologi",
  "travel": "Travel",
  "infografis": "Infografis",
};

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const { slug } = useParams();
  const [slides, setSlides] = useState([]);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const label = CATEGORY_LABELS[slug] || slug?.replace(/-/g, " ");

  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  useEffect(() => {
    // TODO: fetch slides berdasarkan slug kategori dari API
  }, [slug]);

  useEffect(() => {
    // TODO: fetch news berdasarkan slug kategori dan currentPage
    // contoh: fetchNewsByCategory(slug, { page: currentPage, limit: ITEMS_PER_PAGE }).then(res => {
    //   setNews(res.data);
    //   setTotalPages(res.totalPages);
    // });
  }, [slug, currentPage]);

  return (
    <CategoryTemplate>
      <div className="home__layout">
        <div className="home__main">
          <BannerCarousel slides={slides} />
          <NewsList news={news} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        <aside className="home__sidebar">
          <TopicList />
        </aside>
      </div>
    </CategoryTemplate>
  );
};

export default Home;
