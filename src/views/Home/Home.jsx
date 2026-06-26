import React, { useState, useEffect } from "react";
import { NewsServices } from "../../services/newsService";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryTemplate from "../../templates/CategoryTemplate/CategoryTemplate";
import BannerCarousel from "../../components/organisms/BannerCarousel/BannerCarousel";
import NewsList from "../../components/organisms/NewsList/NewsList";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Home.css";
/* 
import imgDemo from "../../assets/images/demo.png";
import imgDrump from "../../assets/images/drump.png";
import imgKemarau from "../../assets/images/kemarau.png";
import imgKereta from "../../assets/images/kereta.png";
import imghaji from "../../assets/images/haji.png";
import imgroysuryo from "../../assets/images/roysuryo.png";
import imgmessi from "../../assets/images/messi.png";
import imgpelaku from "../../assets/images/pelaku.png";
import imgpolisi from "../../assets/images/polisi.png";
import imgtimnasnorwegia from "../../assets/images/timnasnorwegia.png";
import imgsadis from "../../assets/images/sadis.png";
import imgkpk from "../../assets/images/kpk.png";
import imgterungkap from "../../assets/images/terungkap.png";
*/

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

/* DUMMY HORIZONTAL — dinonaktifkan, data dari API
const HORIZONTAL_PLACEHOLDER = [
  { id: "h1", image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 3 },
  { id: "h2", image: imgDemo, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: "iNews", date: "Jumat, 12 Juni 2026", readingTime: 2 },
  { id: "h3", image: imgKemarau, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 4 },
  { id: "h4", image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026", readingTime: 4 },
  { id: "h5", image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026", readingTime: 4 },
];
*/

/* DUMMY ALL_NEWS — dinonaktifkan, data dari API
const ALL_NEWS = [
  { id: 1, image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2: Duo Tuan Rumah Masih Memimpin", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 3, description: "" },
  { id: 2, image: imgDemo, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
  { id: 3, image: imgKemarau, title: "Dasco Bertemu OJK dan BEI, Bahas Perbaikan Tata Kelola Pasar Modal Indonesia", category: "Nasional", source: "sindonews", date: "Kamis, 18 Juni 2026 - 15:30", readingTime: 3, description: "" },
  { id: 4, image: imgDrump, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: "iNews", date: "Jumat, 12 Juni 2026 - 13:14", readingTime: 2, description: "" },
  { id: 5, image: imgKereta, title: "Demo BEM UI Hari Ini, Kendaraan Taktis TNI Disiagakan di Sekitar Lokasi", category: "Terkini", source: "iNews", date: "Jumat, 12 Juni 2026 - 11:44", readingTime: 3, description: "" },
  { id: 6, image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026 - 22:00", readingTime: 4, description: "" },
  { id: 7, image: imgKereta, title: "Waspada Begal Bersenjata Api Marak di Wilayah Tangerang, Ini Imbauan Polisi", category: "Nasional", source: "sindonews", date: "Selasa, 16 Juni 2026 - 09:00", readingTime: 3, description: "" },
  { id: 8, image: imgDrump, title: "Update Situasi Timur Tengah: Gencatan Senjata Gaza Masih Alot Dinego", category: "Global", source: "iNews", date: "Senin, 15 Juni 2026 - 14:20", readingTime: 5, description: "" },
  { id: 9, image: imgKereta, title: "Persib Hattrick Juara BRI Liga 1, Bojan Hodak Ungkap Rahasianya", category: "Olahraga", source: "okezone", date: "Minggu, 14 Juni 2026 - 20:45", readingTime: 3, description: "" },
  { id: 10, image: imghaji, title: "Pendorongan Jamaah dari Makkah Berakhir, Layanan Haji Kini Terfokus di Madinah", category: "Berita Utama", source: "sindonews", date: "Sabtu, 13 Juni 2026 - 07:30", readingTime: 4, description: "" },
  { id: 11, image: imgroysuryo, title: "Roy Suryo-Dokter Tifa Ditawari Restorative Justice Tim Hukum Merah Putih: Bukan Ajakan Jokowi", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 3, description: "" },
  { id: 12, image: imgDemo, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
  { id: 13, image: imgKemarau, title: "Dasco Bertemu OJK dan BEI, Bahas Perbaikan Tata Kelola Pasar Modal Indonesia", category: "Nasional", source: "sindonews", date: "Kamis, 18 Juni 2026 - 15:30", readingTime: 3, description: "" },
  { id: 14, image: imgDrump, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: " idxchanne", date: "Selasa, 23 Juni 2026 - 09:24", readingTime: 2, description: "" },
  { id: 15, image: imgKereta, title: "Demo BEM UI Hari Ini, Kendaraan Taktis TNI Disiagakan di Sekitar Lokasi", category: "Terkini", source: "iNews", date: "Jumat, 12 Juni 2026 - 11:44", readingTime: 3, description: "" },
  { id: 16, image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026 - 22:00", readingTime: 4, description: "" },
  { id: 17, image: imgKereta, title: "Waspada Begal Bersenjata Api Marak di Wilayah Tangerang, Ini Imbauan Polisi", category: "Nasional", source: "sindonews", date: "Selasa, 16 Juni 2026 - 09:00", readingTime: 3, description: "" },
  { id: 18, image: imgDrump, title: "Update Situasi Timur Tengah: Gencatan Senjata Gaza Masih Alot Dinego", category: "Global", source: "iNews", date: "Senin, 15 Juni 2026 - 14:20", readingTime: 5, description: "" },
  { id: 19, image: imgKereta, title: "Persib Hattrick Juara BRI Liga 1, Bojan Hodak Ungkap Rahasianya", category: "Olahraga", source: "okezone", date: "Minggu, 14 Juni 2026 - 20:45", readingTime: 3, description: "" },
  { id: 20, image: imgDrump, title: "Blackout Sumatra: PLN Pastikan Pemulihan Listrik Rampung Sebelum Malam", category: "Nasional", source: "sindonews", date: "Sabtu, 13 Juni 2026 - 07:30", readingTime: 4, description: "" },
  { id: 21, image: imgmessi, title: "Update Ranking FIFA Hari Ini di Piala Dunia 2026: Timnas Argentina Kukuh di Puncak, Prancis Mengekor!", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 3, description: "" },
  { id: 22, image: imgpelaku, title: "Polisi Tangkap Pelaku Penembakan Brutal di Malam Hari, Korban Tewas 3 Orang", category: "Terkini", source: "sindonews", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
  { id: 23, image: imgpolisi, title: "Polisi Amankan Lokasi Usai Ledakan di Pusat Kota, Warga Diminta Waspada", category: "Nasional", source: "iNews", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 3, description: "" },
  { id: 24, image: imgtimnasnorwegia, title: "Timnas Norwegia Tampil Gemilang di Piala Dunia 2026, Fans Bersorak!", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
  { id: 25, image: imgsadis, title: "Kasus Sadis di Jakarta: Polisi Ungkap Tindakan Kejam Terhadap Korban", category: "Terkini", source: "sindonews", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
  { id: 26, image: imgkpk, title: "KPK Tangkap Pejabat Korupsi, Publik Menunggu Tindak Lanjut Kasus Ini", category: "Nasional", source: "iNews", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 3, description: "" },
  { id: 27, image: imgterungkap, title: "Kasus Terungkap: Polisi Bongkar Sindikat Kejahatan Internasional", category: "Global", source: "okezone", date: "Kamis, 18 Juni 2026 - 19:10", readingTime: 4, description: "" },
];
*/

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { slug } = useParams();
  /* DUMMY SLIDES — dinonaktifkan, diisi dari API
  const [slides, setSlides] = useState([
    { id: "s1", image: imgKereta, title: "Klasemen Sementara Grup A hingga D Piala Dunia 2026 Jelang Matchday 2", category: "Olahraga", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 3 },
    { id: "s2", image: imgDemo, title: "Selain Bundaran HI, Simak Titik Demo Mahasiswa Hari Ini di Jakarta", category: "Berita Utama", source: "iNews", date: "Jumat, 12 Juni 2026", readingTime: 2 },
    { id: "s3", image: imgKemarau, title: "Gubernur BI Yakin Rupiah Terus Menguat, Ini Strateginya", category: "Ekonomi", source: "okezone", date: "Kamis, 18 Juni 2026", readingTime: 4 },
    { id: "s4", image: imgDrump, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", category: "Olahraga", source: "okezone", date: "Rabu, 17 Juni 2026", readingTime: 4 },
  ]);
  */
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);

  const activeSlug = slug || "berita-utama";
  const label = CATEGORY_LABELS[activeSlug] || activeSlug.replace(/-/g, " ");

  const { news, loading, error, loadMore, hasMore } = NewsServices(activeSlug);

  const slides = news.slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (nearBottom && hasMore && !loading) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <CategoryTemplate>
      <div className="home__layout">
        <div className="home__main">
          <BannerCarousel slides={slides} />
          <NewsList news={news} limit={FIRST_BATCH} />
          <HorizontalNewsList title="Trending Topics" news={news.slice(0, 5)} />
          <NewsList news={news} offset={FIRST_BATCH} />
          {loading && <p style={{ textAlign: "center", padding: "20px" }}>Memuat berita...</p>}
        </div>
        <aside className="home__sidebar">
          <TopicList />
        </aside>
      </div>
    </CategoryTemplate>
  );
}

export default Home;