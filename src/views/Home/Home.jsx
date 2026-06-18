import React, { useState, useEffect } from "react";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import BannerCarousel from "../../components/organisms/BannerCarousel/BannerCarousel";
import NewsList from "../../components/organisms/NewsList/NewsList";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Home.css";

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [beritaUtama, setBeritaUtama] = useState([]);
  const [terkini, setTerkini] = useState([]);
  const [nasional, setNasional] = useState([]);
  const [global, setGlobal] = useState([]);
  const [ekonomi, setEkonomi] = useState([]);
  const [olahraga, setOlahraga] = useState([]);
  const [seleb, setSeleb] = useState([]);
  const [gayaHidup, setGayaHidup] = useState([]);
  const [otomotif, setOtomotif] = useState([]);
  const [teknologi, setTeknologi] = useState([]);

  useEffect(() => {
    // TODO: fetch slides dari API
  }, []);

  useEffect(() => {
    // TODO: fetch news dari API berdasarkan currentPage
  }, [currentPage]);

  useEffect(() => {
    // TODO: fetch semua kategori dari API
    // fetchCategory("berita-utama").then(setBeritaUtama)
    // fetchCategory("terkini").then(setTerkini)
    // fetchCategory("nasional").then(setNasional)
    // fetchCategory("global").then(setGlobal)
    // fetchCategory("ekonomi").then(setEkonomi)
    // fetchCategory("olahraga").then(setOlahraga)
    // fetchCategory("seleb").then(setSeleb)
    // fetchCategory("gaya-hidup").then(setGayaHidup)
    // fetchCategory("otomotif").then(setOtomotif)
    // fetchCategory("teknologi").then(setTeknologi)
  }, []);

  return (
    <HomeTemplate>
      <div className="home__layout">
        <div className="home__main">
          <BannerCarousel slides={slides} />
          <NewsList news={news} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          <HorizontalNewsList title="Berita Utama" news={beritaUtama} />
          <HorizontalNewsList title="Terkini" news={terkini} />
          <HorizontalNewsList title="Nasional" news={nasional} />
          <HorizontalNewsList title="Global" news={global} />
          <HorizontalNewsList title="Ekonomi" news={ekonomi} />
          <HorizontalNewsList title="Olahraga" news={olahraga} />
          <HorizontalNewsList title="Seleb" news={seleb} />
          <HorizontalNewsList title="Gaya Hidup" news={gayaHidup} />
          <HorizontalNewsList title="Otomotif" news={otomotif} />
          <HorizontalNewsList title="Teknologi" news={teknologi} />
        </div>
        <aside className="home__sidebar">
          <TopicList />
        </aside>
      </div>
    </HomeTemplate>
  );
};

export default Home;
