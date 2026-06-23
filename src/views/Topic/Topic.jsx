import React, { useState, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import TopicTemplate from "../../templates/TopicTemplate/TopicTemplate";
import NewsList from "../../components/organisms/NewsList/NewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Topic.css";

const ALL_NEWS = [
  { id: 1, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "5 Fakta Penting Kasus Eks Kepala BGN Dadan Hindayana", source: "okezone", category: "Nasional", readingTime: 4, date: "Kamis, 18 Juni 2026 - 18:52" },
  { id: 2, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN", source: "okezone", category: "Nasional", readingTime: 5, date: "Rabu, 17 Juni 2026 - 14:30" },
  { id: 3, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas", source: "okezone", category: "Nasional", readingTime: 4, date: "Selasa, 16 Juni 2026 - 10:00" },
  { id: 4, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN", source: "okezone", category: "Nasional", readingTime: 4, date: "Senin, 15 Juni 2026 - 09:00" },
  { id: 5, image: "/src/assets/images/KPK Panggil 3 Saksi Kasus BGN Termasuk Mantan Direktur.jpg", title: "KPK Panggil 3 Saksi Kasus BGN Termasuk Mantan Direktur", source: "sindonews", category: "Nasional", readingTime: 3, date: "Minggu, 14 Juni 2026 - 08:00" },
  { id: 6, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "Prabowo Tunjuk Plt Kepala BGN Setelah Copot Dadan", source: "okezone", category: "Nasional", readingTime: 2, date: "Sabtu, 13 Juni 2026 - 11:00" },
  { id: 7, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "LPSK Tambah Tim Pengamanan untuk Saksi Kasus BGN", source: "inews", category: "Nasional", readingTime: 4, date: "Jumat, 12 Juni 2026 - 09:30" },
  { id: 8, image: "/src/assets/images/Sidang Perdana Kasus BGN Dijadwalkan Bulan Depan.jpg", title: "Sidang Perdana Kasus BGN Dijadwalkan Bulan Depan", source: "sindonews", category: "Nasional", readingTime: 4, date: "Kamis, 11 Juni 2026 - 14:00" },
  { id: 9, image: "/src/assets/images/Aset Tersangka Kasus BGN Disita KPK Senilai Rp12 Miliar.jpg", title: "Aset Tersangka Kasus BGN Disita KPK Senilai Rp12 Miliar", source: "okezone", category: "Nasional", readingTime: 5, date: "Rabu, 10 Juni 2026 - 10:00" },
  { id: 10, image: "/src/assets/images/DPR Panggil Pejabat BGN untuk Rapat Dengar Pendapat.jpg", title: "DPR Panggil Pejabat BGN untuk Rapat Dengar Pendapat", source: "inews", category: "Nasional", readingTime: 4, date: "Selasa, 09 Juni 2026 - 13:00" },
  { id: 11, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Jaksa KPK Siapkan Dakwaan untuk Tersangka BGN", source: "okezone", category: "Nasional", readingTime: 4, date: "Senin, 08 Juni 2026 - 09:00" },
  { id: 12, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Keluarga Tersangka BGN Minta Proses Hukum Adil", source: "sindonews", category: "Nasional", readingTime: 3, date: "Minggu, 07 Juni 2026 - 08:30" },
  { id: 13, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "Hakim Tolak Eksepsi Tersangka Kasus BGN di Pengadilan Tipikor", source: "okezone", category: "Nasional", readingTime: 3, date: "Sabtu, 06 Juni 2026 - 10:00" },
  { id: 14, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "KPK Dalami Aliran Dana Korupsi BGN ke Rekening Luar Negeri", source: "sindonews", category: "Nasional", readingTime: 4, date: "Jumat, 05 Juni 2026 - 09:00" },
  { id: 15, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Polisi Tangkap Dua Tersangka Baru Terkait Kasus BGN", source: "inews", category: "Nasional", readingTime: 5, date: "Kamis, 04 Juni 2026 - 11:00" },
  { id: 16, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Kementerian Keuangan Audit Anggaran BGN Selama 5 Tahun", source: "okezone", category: "Nasional", readingTime: 5, date: "Rabu, 03 Juni 2026 - 08:00" },
  { id: 17, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "ICW Desak KPK Percepat Penyelesaian Kasus BGN", source: "sindonews", category: "Nasional", readingTime: 3, date: "Selasa, 02 Juni 2026 - 14:00" },
  { id: 18, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "Sidang Kedua Kasus BGN Hadirkan 5 Saksi Ahli", source: "inews", category: "Nasional", readingTime: 2, date: "Senin, 01 Juni 2026 - 10:00" },
  { id: 19, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Tersangka BGN Ajukan Penangguhan Penahanan ke Pengadilan", source: "okezone", category: "Nasional", readingTime: 5, date: "Minggu, 31 Mei 2026 - 09:00" },
  { id: 20, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Komisi III DPR Minta KPK Transparan dalam Kasus BGN", source: "sindonews", category: "Nasional", readingTime: 4, date: "Sabtu, 30 Mei 2026 - 11:00" },
  { id: 21, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "Mantan Bendahara BGN Diperiksa KPK Selama 8 Jam", source: "okezone", category: "Nasional", readingTime: 3, date: "Jumat, 29 Mei 2026 - 13:00" },
  { id: 22, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "BGN Bentuk Tim Internal Investigasi Dugaan Korupsi", source: "inews", category: "Nasional", readingTime: 2, date: "Kamis, 28 Mei 2026 - 10:00" },
  { id: 23, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "KPK Sita Dokumen Penting dari Kantor BGN Pusat", source: "sindonews", category: "Nasional", readingTime: 3, date: "Rabu, 27 Mei 2026 - 09:00" },
  { id: 24, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Pengacara Tersangka BGN Ajukan Gugatan Praperadilan", source: "okezone", category: "Nasional", readingTime: 4, date: "Selasa, 26 Mei 2026 - 14:00" },
  { id: 25, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "Ketua BGN Nonaktif Jalani Pemeriksaan Maraton di KPK", source: "inews", category: "Nasional", readingTime: 3, date: "Senin, 25 Mei 2026 - 10:00" },
  { id: 26, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "KPK Temukan Bukti Baru dalam Penggeledahan Kantor BGN", source: "sindonews", category: "Nasional", readingTime: 5, date: "Minggu, 24 Mei 2026 - 08:00" },
  { id: 27, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Saksi Kunci Kasus BGN Diberi Perlindungan Khusus LPSK", source: "okezone", category: "Nasional", readingTime: 3, date: "Sabtu, 23 Mei 2026 - 11:00" },
  { id: 28, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Sidang Ketiga Kasus BGN Ungkap Aliran Dana Miliaran", source: "inews", category: "Nasional", readingTime: 4, date: "Jumat, 22 Mei 2026 - 09:00" },
  { id: 29, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "Ombudsman RI Turut Selidiki Maladministrasi di BGN", source: "sindonews", category: "Nasional", readingTime: 3, date: "Kamis, 21 Mei 2026 - 13:00" },
  { id: 30, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "Presiden Prabowo Minta KPK Tuntas Selesaikan Kasus BGN", source: "okezone", category: "Nasional", readingTime: 5, date: "Rabu, 20 Mei 2026 - 10:00" },
  { id: 31, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "BPK Rilis Temuan Audit Keuangan BGN Tahun 2024", source: "inews", category: "Nasional", readingTime: 4, date: "Selasa, 19 Mei 2026 - 09:00" },
  { id: 32, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "KPK Tetapkan Tersangka Baru dalam Kasus Korupsi BGN", source: "okezone", category: "Nasional", readingTime: 3, date: "Senin, 18 Mei 2026 - 08:00" },
  { id: 33, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "Masyarakat Desak Transparansi Penanganan Kasus BGN", source: "sindonews", category: "Nasional", readingTime: 3, date: "Minggu, 17 Mei 2026 - 10:00" },
  { id: 34, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "KPK Gandeng PPATK Lacak Aliran Dana Kasus BGN", source: "inews", category: "Nasional", readingTime: 5, date: "Sabtu, 16 Mei 2026 - 11:00" },
  { id: 35, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Sidang Keempat Kasus BGN Digelar dengan Keamanan Ketat", source: "okezone", category: "Nasional", readingTime: 3, date: "Jumat, 15 Mei 2026 - 09:00" },
  { id: 36, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Tersangka BGN Diduga Miliki Aset Tersembunyi di Luar Negeri", source: "sindonews", category: "Nasional", readingTime: 4, date: "Kamis, 14 Mei 2026 - 14:00" },
  { id: 37, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "KPK Periksa 10 Pegawai BGN sebagai Saksi Tambahan", source: "okezone", category: "Nasional", readingTime: 3, date: "Rabu, 13 Mei 2026 - 10:00" },
  { id: 38, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "Jaksa Tuntut Hukuman Maksimal untuk Tersangka BGN", source: "inews", category: "Nasional", readingTime: 5, date: "Selasa, 12 Mei 2026 - 09:00" },
  { id: 39, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Pengacara Tersangka BGN Sebut Dakwaan Tidak Berdasar", source: "sindonews", category: "Nasional", readingTime: 3, date: "Senin, 11 Mei 2026 - 11:00" },
  { id: 40, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "KPK Pastikan Proses Hukum Kasus BGN Berjalan Adil", source: "okezone", category: "Nasional", readingTime: 5, date: "Minggu, 10 Mei 2026 - 08:00" },
  { id: 41, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "Sidang Kelima Kasus BGN Hadirkan Ahli Keuangan Negara", source: "inews", category: "Nasional", readingTime: 3, date: "Sabtu, 09 Mei 2026 - 10:00" },
  { id: 42, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "KPK Blokir Rekening 5 Tersangka Kasus Korupsi BGN", source: "sindonews", category: "Nasional", readingTime: 3, date: "Jumat, 08 Mei 2026 - 09:00" },
  { id: 43, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Komnas HAM Pantau Proses Penahanan Tersangka BGN", source: "okezone", category: "Nasional", readingTime: 5, date: "Kamis, 07 Mei 2026 - 13:00" },
  { id: 44, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "Eks Direktur BGN Kooperatif Hadiri Panggilan KPK", source: "inews", category: "Nasional", readingTime: 3, date: "Rabu, 06 Mei 2026 - 10:00" },
  { id: 45, image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg", title: "KPK Buka Hotline Pengaduan Terkait Kasus Korupsi BGN", source: "sindonews", category: "Nasional", readingTime: 4, date: "Selasa, 05 Mei 2026 - 09:00" },
  { id: 46, image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg", title: "Sidang Vonis Kasus BGN Dijadwalkan Akhir Juni 2026", source: "okezone", category: "Nasional", readingTime: 3, date: "Senin, 04 Mei 2026 - 11:00" },
  { id: 47, image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg", title: "Tersangka BGN Ajukan Banding atas Vonis Pengadilan", source: "inews", category: "Nasional", readingTime: 3, date: "Minggu, 03 Mei 2026 - 08:00" },
  { id: 48, image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg", title: "KPK Nyatakan Kasus BGN Selesai Setelah Vonis Inkrah", source: "sindonews", category: "Nasional", readingTime: 5, date: "Sabtu, 02 Mei 2026 - 10:00" },
];
const ITEMS_PER_PAGE = 4;

const Topic = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);

  const topicLabel = location.state?.topicLabel || slug?.replace(/-/g, " ");
  const totalArticles = ALL_NEWS.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = ALL_NEWS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const clickPagination = (destinationPage) => {
    searchParams.set("page", destinationPage);
    setSearchParams(searchParams);
    setCurrentPage(destinationPage);
  };

  useEffect(() => {
    setCurrentPage(1);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }, [slug]);

  return (
    <TopicTemplate>
      <div className="topic__left">
        <div className="topic__result-header">
          <p className="topic__result">Result for # {topicLabel}</p>
          <p className="topic__total">Total {totalArticles} Articles</p>
        </div>

        <NewsList news={currentNews} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={clickPagination}
        />
      </div>

      <div className="topic__right">
        <TopicList />
      </div>
    </TopicTemplate>
  );
};

export default Topic;