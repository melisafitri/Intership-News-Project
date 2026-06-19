import React from "react";
import { useLocation } from "react-router-dom";
import DetailNewsTemplate from "../../templates/DetailNewsTemplate/DetailNewsTemplate";
import Title from "../../components/atoms/Title/Title";
import Source from "../../components/atoms/Source/Source";
import ReadingTime from "../../components/atoms/ReadingTime/ReadingTime";
import SocialMediaIcon from "../../components/atoms/SocialMediaIcon/SocialMediaIcon";
import HorizontalNewsList from "../../components/organisms/HorizontalNewsList/HorizontalNewsList";
import drumpImage from "../../assets/images/drump.png";
import "./DetailNews.css";

const relatedNews = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60",
    title: "BMKG: Indonesia Bagian Selatan Semakin Kering...",
    source: "Nasional | 3 menit lalu",
    description: "BMKG memperingatkan wilayah Indonesia bagian selatan akan mengalami kekeringan ekstrem.",
    readingTime: 3,
    link: "/news/detail/1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60",
    title: "SOKSI dan PEMI Tekan MoU Dorong Pekerja...",
    source: "Nasional | 5 menit lalu",
    description: "Kerja sama ini ditujukan untuk meningkatkan perlindungan bagi pekerja migran Indonesia.",
    readingTime: 5,
    link: "/news/detail/2",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&auto=format&fit=crop&q=60",
    title: "Gibran Ajak Mahasiswa Kunker Ende hing...",
    source: "Nasional | 8 menit lalu",
    description: "Kunjungan kerja ini bertujuan untuk meninjau proyek pembangunan daerah terpencil.",
    readingTime: 8,
    link: "/news/detail/3",
  },
];

  function DetailNews() {
  const { state } = useLocation();
  const img = state?.img || drumpImage;
  const title = state?.title || "Perampok Gasak Uang Nasabah Bank Rp850 Juta di Cirebon, Sebar Uang ke Jalan";
  const source = state?.source || "iNews";
  const category = state?.category || "Nasional";
  const date = state?.date || "Kamis, 18 Juni 2026 - 18:52";
  const minutes = state?.minutes || 5;

  return (
    <DetailNewsTemplate>
      <div className="detail-news">
        <div className="detail-news__container">
          <div className="detail-news__image-wrapper">
            <img className="detail-news__image" src={img} alt={title} />
          </div>

          <div className="detail-news__content">
            <Title text={title} />

            <div className="detail-news__meta">
              <Source text={`${category} | ${source} | ${date} |`} />
              <ReadingTime minutes={minutes} />
            </div>

            <div className="detail-news__social">
              <SocialMediaIcon type="twitter" href="https://x.com/rctiplus" />
          <SocialMediaIcon type="facebook" href="https://www.facebook.com/RCTIPlusOfficial/" />
          <SocialMediaIcon type="instagram" href="https://www.instagram.com/rctiplusofficial/" />
          <SocialMediaIcon type="youtube" href="https://www.youtube.com/channel/UCDR9KL8jZnz0qcqVoU6lIMA" />
            </div>

            <div className="detail-news__body">
              <p>
                <strong>CIREBON, iNews.id</strong> - Aksi perampokan menggemparkan warga Kabupaten Cirebon, Jawa Barat, Kamis (18/6/2026). Kawanan rampok tersebut menggasak uang tunai sebesar Rp850 juta milik seorang agen perbankan bernama Tohir.
              </p>

              <p>
                Peristiwa perampokan bermula saat korban usai menarik uang tunai dalam jumlah besar di salah satu kantor cabang bank daerah Jatibarang, Indramayu.
              </p>

              <p>
                Korban kemudian dibuntuti kedua pelaku sejak keluar dari area bank. Tiba di Desa Guwa Kidul, Kecamatan Kaliwedi, Kabupaten Cirebon, korban menghentikan kendaraan dan turun sebentar untuk membeli air mineral di sebuah warung kelontong pinggir jalan.
              </p>

              <p>
                Melihat hal itu, kedua pelaku yang mengendarai sepeda motor sempat memarkirkan kendaraannya dengan jarak sekitar 100 meter dari mobil korban.
              </p>

              <p>
                Pelaku kemudian membuka paksa pintu kiri yang tidak terkunci, lalu menggasak tas berisi uang tunai Rp850 juta yang diletakkan di kursi penumpang depan. Pelaku langsung memutar arah dan kabur dengan kecepatan tinggi.
              </p>

              <div className="detail-news__baca-juga">
                <span className="baca-juga__label">Baca Juga</span>
                <a href="#" className="baca-juga__link">
                  Atasi Persoalan Sampah, Pembangunan PSEL di Makassar Harus Segera Terealisasi
                </a>
              </div>

              <p>
                Korban baru menyadari menjadi korban kejahatan saat berbalik badan dan melihat pintu mobilnya sudah terbuka lebar dengan kondisi tas raib.
              </p>

              <p>
                Sadar telah dirampok, Tohir berteriak histeris meminta pertolongan massa. Warga sekitar dan pengguna jalan yang berada di lokasi langsung bergerak melakukan pengejaran agresif terhadap motor pelaku yang melesat kencang.
              </p>

              <p>
                Namun, menyadari posisi mereka terdesak dan nyaris tertangkap, kedua pelaku merobek sebagian kantong atau tas dan melempar lembaran uang ratusan ribu ke udara hingga berserakan di jalan.
              </p>

              <p>
                Taktik licik ini berhasil. Konsentrasi massa pecah seketika karena banyak warga yang mendadak berhenti di tengah jalan demi berebut mengambil uang yang berhamburan. Akibatnya, laju pengejaran terhambat dan kedua pelaku berhasil meloloskan diri ke arah perbatasan wilayah hukum.
              </p>

              <p>
                Pasca-kejadian, rekaman kamera CCTV yang memperlihatkan pelaku memacu motornya dengan kecepatan penuh sambil dikejar warga langsung viral di berbagai platform media sosial.
              </p>

              <div className="detail-news__baca-juga">
                <span className="baca-juga__label">Baca Juga</span>
                <a href="#" className="baca-juga__link">
                  Noel Menyesal Jadi Wamenaker: Saya Lebih Banyak Selamatkan Duit Rakyat daripada KPK!
                </a>
              </div>

              <p>
                Melihat dampak kekacauan tersebut, sejumlah petugas Polsek Sukagumiwang, Polres Indramayu, langsung diterjunkan ke lapangan untuk mengamankan lokasi dan memberikan imbauan tegas kepada warga yang kedapatan memungut uang hasil kejahatan tersebut. Polisi berupaya mengumpulkan kembali lembaran uang milik korban yang sempat berserakan.
              </p>

              <p>
                "Awalnya warga tidak menaruh curiga, dikira motor biasa lewat. Tapi tiba-tiba mereka tancap gas dan putar balik cepat sekali bawa tas. Korban teriak, warga langsung mengejar, tapi pelaku malah melempar-lempar uang ke jalanan supaya orang-orang ramai memungut dan menghalangi jalan," ungkap Maksum, salah seorang warga Desa Guwa Kidul yang menyaksikan kepanikan tersebut di lokasi.
              </p>

              <p>
                Hingga sore ini, pihak kepolisian dari Polsek Kaliwedi bersama Tim Opsnal Satreskrim Polresta Cirebon telah merampungkan olah tempat kejadian perkara (TKP) awal, termasuk memeriksa kondisi fisik kendaraan roda empat milik korban.
              </p>

              <p>
                Penyelidikan mendalam kini tengah digulirkan oleh aparat penegak hukum secara maraton.
              </p>

              <div className="detail-news__baca-juga">
                <span className="baca-juga__label">Baca Juga</span>
                <a href="#" className="baca-juga__link">
                  Dipecat Kasus Narkoba, AKP Doky Tiba di Bareskrim dengan Tangan Terborgol
                </a>
              </div>

              <p>
                "Kasus ini sudah diambil alih dan kini ditangani penuh oleh petugas Satreskrim Polresta Cirebon. Kami sedang melakukan penyelidikan mendalam dengan memeriksa keterangan sejumlah saksi kunci di lapangan, melacak rekaman CCTV di sepanjang jalur pelarian pelaku, serta berkoordinasi dengan pihak bank tempat awal korban mengambil uang guna mengidentifikasi jaringan pelaku," tegas pihak kepolisian dalam keterangannya.
              </p>
            </div>
          </div>

          <div className="detail-news__related-list">
            <HorizontalNewsList title="Topik Menarik" news={relatedNews} />
          </div>
        </div>
      </div>
    </DetailNewsTemplate>
  );
}

export default DetailNews;