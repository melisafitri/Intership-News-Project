import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryTemplate from "../../templates/CategoryTemplate/CategoryTemplate";
import BannerCarousel from "../../components/organisms/BannerCarousel/BannerCarousel";
import NewsList from "../../components/organisms/NewsList/NewsList";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Home.css";
import imgDemo from "../../assets/images/demo.png";
import imgDrump from "../../assets/images/drump.png";
import imgKemarau from "../../assets/images/kemarau.png";
import imgKereta from "../../assets/images/kereta.png";

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
const FIRST_BATCH = 5;
const TOTAL_ARTICLES = 120; // <-- sesuaikan nanti dengan jumlah berita asli (dari API)

const HORIZONTAL_PLACEHOLDER = [
  { id: "h1", image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 3 },
  { id: "h1", image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 3 },
  { id: "h2", image: imgDemo, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: "iNews", date: "Jum'at, 12 Juni 2026", readingTime: 2 },
  { id: "h3", image: imgKemarau, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 4 },
  { id: "h4", image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026", readingTime: 4 },
  { id: "h5", image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026", readingTime: 4 },
];

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { slug } = useParams();
  const [slides, setSlides] = useState([
    { id: "s1", image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 3 },
    { id: "s2", image: imgDemo, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: "iNews", date: "Jum'at, 12 Juni 2026", readingTime: 2 },
    { id: "s3", image: imgKemarau, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 4 },
    { id: "s4", image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026", readingTime: 4 },
  ]);
  const [news, setNews] = useState([
    { id: 1, image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2: Duo Tuan Rumah Masih Memimpin", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 3, description: "" },
    { id: 2, image: imgDemo, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
    { id: 3, image: imgKemarau, title: "Dasco Bertemu OJK dan BEI, Bahas Perbaikan Tata Kelola Pasar Modal Indonesia", category: "Nasional", source: "sindonews", date: "Kamis, 18 Juni 2026 - 15:30", readingTime: 3, description: "" },
    { id: 4, image: imgDrump, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: "iNews", date: "Jum'at, 12 Juni 2026 - 13:14", readingTime: 2, description: "" },
    { id: 5, image: imgKereta, title: "Demo BEM UI Hari Ini, Kendaraan Taktis TNI Disiagakan di Sekitar Lokasi", category: "Terkini", source: "iNews", date: "Jum'at, 12 Juni 2026 - 11:44", readingTime: 3, description: "" },
    { id: 6, image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026 - 22:00", readingTime: 4, description: "" },
    { id: 7, image: imgKereta, title: "Waspada Begal Bersenjata Api Marak di Wilayah Tangerang, Ini Imbauan Polisi", category: "Nasional", source: "sindonews", date: "Selasa, 16 Juni 2026 - 09:00", readingTime: 3, description: "" },
    { id: 8, image: imgDrump, title: "Update Situasi Timur Tengah: Gencatan Senjata Gaza Masih Alot Dinego", category: "Global", source: "iNews", date: "Senin, 15 Juni 2026 - 14:20", readingTime: 5, description: "" },
    { id: 9, image: imgKereta, title: "Persib Hattrick Juara BRI Liga 1, Bojan Hodak Ungkap Rahasianya", category: "Olahraga", source: "okezone", date: "Minggu, 14 Juni 2026 - 20:45", readingTime: 3, description: "" },
    { id: 10, image: imgDrump, title: "Blackout Sumatra: PLN Pastikan Pemulihan Listrik Rampung Sebelum Malam", category: "Nasional", source: "sindonews", date: "Sabtu, 13 Juni 2026 - 07:30", readingTime: 4, description: "" },
  ]);
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);
  const totalPages = Math.ceil(TOTAL_ARTICLES / ITEMS_PER_PAGE);

  const activeSlug = slug || "berita-utama";
  const label = CATEGORY_LABELS[activeSlug] || activeSlug.replace(/-/g, " ");

  useEffect(() => {
    console.log("ini page active", page)
  }, [page])

  const clickPagination = (destinationPage) => {
    searchParams.set("page", destinationPage);
    setSearchParams(searchParams);
    setCurrentPage(destinationPage);
  }

  useEffect(() => {
    setCurrentPage(1);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }, [activeSlug]);

  return (
    <CategoryTemplate>
      <div className="home__layout">
        <div className="home__main">
          <BannerCarousel slides={slides} />
          <NewsList news={news} limit={FIRST_BATCH} />
          <HorizontalNewsList title="Trending Topics" news={HORIZONTAL_PLACEHOLDER} />
          <NewsList news={news} offset={FIRST_BATCH} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={clickPagination}
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