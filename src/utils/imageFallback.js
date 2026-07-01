// Placeholder saat gambar berita gagal dimuat (mis. image_url dari API 404).
// SVG inline (data URI) — kotak abu gelap sesuai tema + ikon gambar.
export const NEWS_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='250'%20viewBox='0%200%20400%20250'%3E%3Crect%20width='400'%20height='250'%20fill='%232a2a2a'/%3E%3Cg%20fill='none'%20stroke='%23555555'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Crect%20x='150'%20y='95'%20width='100'%20height='70'%20rx='6'/%3E%3Ccircle%20cx='175'%20cy='120'%20r='9'/%3E%3Cpath%20d='M150%20150l25-22%2018%2015%2022-20%2035%2032'/%3E%3C/g%3E%3C/svg%3E";

// Pasang sebagai onError pada <img>. Mencegah loop kalau placeholder ikut gagal.
export function handleImageError(e) {
  const img = e.currentTarget;
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "1";
  img.src = NEWS_PLACEHOLDER;
}
