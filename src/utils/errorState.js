import failedLoadIcon from "../assets/icons/failed-load-news.svg";
import error404Icon from "../assets/icons/error-404.svg";
import emptyIcon from "../assets/icons/failed-load-news.svg";

export function errorStateProps(error) {
  // 404 → berita/halaman tidak ditemukan
  if (error && error.status === 404) {
    return {
      image: error404Icon,
      title: "Berita tidak ditemukan",
      message: "Berita yang kamu cari tidak ditemukan atau sudah dihapus.",
    };
  }

  // error server lain (mis. 500) → gagal memuat data
  if (error && error.status) {
    return {
      image: failedLoadIcon,
      title: "Gagal memuat data",
      message: `Server sedang bermasalah (kode ${error.status}). Silakan coba lagi nanti.`,
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
    title: "Berita tidak ditemukan",
    message,
  };
}
