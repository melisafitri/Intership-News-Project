export function errorStateProps(error) {
  if (error && error.status) {
    return {
      title: "Gagal memuat data",
      message: `Server sedang bermasalah (kode ${error.status}). Silakan coba lagi nanti.`,
    };
  }
  return {
    title: "Koneksi bermasalah",
    message: "Gagal memuat berita. Periksa koneksi internet Anda, lalu coba lagi.",
  };
}
