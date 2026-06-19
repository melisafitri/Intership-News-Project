import React, { useState } from "react";
import InterestTopicTemplate from "../../templates/InterestTopicTemplate/InterestTopicTemplate";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import imgDemo from "../../assets/images/demo.png";
import imgDrump from "../../assets/images/drump.png";
import imgKemarau from "../../assets/images/kemarau.png";
import imgKereta from "../../assets/images/kereta.png";
import "./InterestTopic.css";

const TOPICS = [
  {
    id: 1,
    label: "Blackout Sumatra",
    count: 24,
    news: [
      { id: "bs1", image: imgKemarau, title: "PLN Pastikan Pemulihan Listrik Sumatra Rampung Sebelum Malam", source: "sindonews", readingTime: 4, description: "" },
      { id: "bs2", image: imgKereta, title: "Blackout Sumatra Berdampak ke Ribuan Pelanggan di 5 Provinsi", source: "okezone", readingTime: 3, description: "" },
      { id: "bs3", image: imgDemo, title: "Penyebab Blackout Sumatra Terungkap, Ini Penjelasan PLN", source: "iNews", readingTime: 3, description: "" },
      { id: "bs4", image: imgDrump, title: "Warga Sumatra Keluhkan Kerugian Akibat Pemadaman Massal", source: "okezone", readingTime: 2, description: "" },
      { id: "bs5", image: imgKemarau, title: "Blackout Sumatra Ganggu Operasional Rumah Sakit dan Bandara", source: "sindonews", readingTime: 4, description: "" },
    ],
  },
  {
    id: 2,
    label: "Persib Hattrick Juara",
    count: 41,
    news: [
      { id: "pb1", image: imgDemo, title: "Persib Bandung Raih Hattrick Juara BRI Liga 1, Rekor Baru Tercipta", source: "okezone", readingTime: 3, description: "" },
      { id: "pb2", image: imgKereta, title: "Bojan Hodak Ungkap Rahasia di Balik Dominasi Persib Musim Ini", source: "iNews", readingTime: 4, description: "" },
      { id: "pb3", image: imgDrump, title: "Ribuan Bobotoh Rayakan Gelar Ketiga Persib di Jalanan Bandung", source: "sindonews", readingTime: 3, description: "" },
      { id: "pb4", image: imgKemarau, title: "David da Silva Jadi Pahlawan Persib di Laga Penentu Gelar", source: "okezone", readingTime: 2, description: "" },
      { id: "pb5", image: imgDemo, title: "Persib Diproyeksikan ke AFC Champions League Musim Depan", source: "iNews", readingTime: 3, description: "" },
    ],
  },
  {
    id: 3,
    label: "Waspada Begal",
    count: 18,
    news: [
      { id: "wb1", image: imgDrump, title: "Polisi Bongkar Komplotan Begal Bersenjata Api di Tangerang", source: "sindonews", readingTime: 3, description: "" },
      { id: "wb2", image: imgKereta, title: "Korban Begal di Tangerang Meningkat, Ini Imbauan Polisi", source: "okezone", readingTime: 2, description: "" },
      { id: "wb3", image: imgDemo, title: "Tips Aman Berkendara Malam Hari Hindari Aksi Begal", source: "iNews", readingTime: 4, description: "" },
      { id: "wb4", image: imgKemarau, title: "4 Pelaku Begal Motor di Tangerang Ditangkap Polisi", source: "sindonews", readingTime: 3, description: "" },
      { id: "wb5", image: imgDrump, title: "Kapolres Tangerang Janji Tindak Tegas Pelaku Begal", source: "okezone", readingTime: 2, description: "" },
    ],
  },
  {
    id: 4,
    label: "Arsenal Juara Premier League",
    count: 56,
    news: [
      { id: "ar1", image: imgKereta, title: "Arsenal Resmi Juara Premier League 2025/2026 Usai Tottenham Kalah", source: "okezone", readingTime: 4, description: "" },
      { id: "ar2", image: imgDemo, title: "Arteta Menangis Haru Setelah Arsenal Raih Gelar Liga Pertama Sejak 2004", source: "iNews", readingTime: 3, description: "" },
      { id: "ar3", image: imgDrump, title: "Ribuan Fan Arsenal Rayakan Gelar di Sekitar Emirates Stadium", source: "sindonews", readingTime: 2, description: "" },
      { id: "ar4", image: imgKemarau, title: "Saka dan Odegaard Jadi Kunci Sukses Arsenal Musim Ini", source: "okezone", readingTime: 4, description: "" },
      { id: "ar5", image: imgKereta, title: "Arsenal Akan Ikut UEFA Champions League Musim 2026/2027", source: "iNews", readingTime: 3, description: "" },
    ],
  },
  {
    id: 5,
    label: "Update Situasi TimTeng",
    count: 33,
    news: [
      { id: "tt1", image: imgDrump, title: "Gencatan Senjata Gaza Masih Alot, Mediasi Qatar Belum Membuahkan Hasil", source: "iNews", readingTime: 5, description: "" },
      { id: "tt2", image: imgKemarau, title: "Korban Sipil Gaza Terus Bertambah di Tengah Serangan Udara", source: "sindonews", readingTime: 4, description: "" },
      { id: "tt3", image: imgDemo, title: "Amerika Serikat Desak Israel Hentikan Operasi Militer di Rafah", source: "okezone", readingTime: 3, description: "" },
      { id: "tt4", image: imgKereta, title: "PBB Peringatkan Krisis Kemanusiaan di Gaza Makin Memburuk", source: "iNews", readingTime: 4, description: "" },
      { id: "tt5", image: imgDrump, title: "Iran Tegaskan Dukungan Penuh untuk Perjuangan Palestina", source: "sindonews", readingTime: 3, description: "" },
    ],
  },
];

const InterestTopic = () => {
  return (
    <InterestTopicTemplate>
      <div className="interest-topic">
        <h1 className="interest-topic__title">Daftar Topik</h1>
        {TOPICS.map((topic) => (
          <div key={topic.id} className="interest-topic__section">
            <div className="interest-topic__section-header">
              <span className="interest-topic__tag">#{topic.label}</span>
              <span className="interest-topic__count">{topic.count} Articles</span>
            </div>
            <HorizontalNewsList title="" news={topic.news} />
          </div>
        ))}
      </div>
    </InterestTopicTemplate>
  );
};

export default InterestTopic;
