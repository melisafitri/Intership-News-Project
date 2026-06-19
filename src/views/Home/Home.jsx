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

  const activeSlug = slug || "berita-utama";
  const label = CATEGORY_LABELS[activeSlug] || activeSlug.replace(/-/g, " ");

  useEffect(() => {
    setCurrentPage(1);
  }, [activeSlug]);

  useEffect(() => {
    // TODO: fetch slides berdasarkan activeSlug dari API
  }, [activeSlug]);

  useEffect(() => {
    // TODO: fetch news berdasarkan activeSlug dan currentPage
    // contoh: fetchNewsByCategory(activeSlug, { page: currentPage, limit: ITEMS_PER_PAGE }).then(res => {
    //   setNews(res.data);
    //   setTotalPages(res.totalPages);
    // });
  }, [activeSlug, currentPage]);

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
