import failedLoadIcon from "../assets/icons/failed-load-news.svg";
import emptyIcon from "../assets/icons/failed-load-news.svg";

export function errorStateProps(error) {
  // semua error HTTP (termasuk 500) → gagal memuat data
  if (error && error.status) {
    return {
      image: failedLoadIcon,
      title: "Gagal memuat data",
      message: "Server sedang bermasalah. Silakan coba lagi nanti.",
    };
  }

  // tanpa status → masalah koneksi/jaringan
  return {
    image: failedLoadIcon,
    title: "Koneksi bermasalah",
    message: "Gagal memuat berita. Periksa koneksi internet Anda, lalu coba lagi.",
  };
}

// empty state → data kosong / tidak ada hasil
export function emptyStateProps(message = "Belum ada berita untuk ditampilkan.") {
  return {
    image: emptyIcon,
    title: "Belum ada berita",
    message,
  };
}
