import { useState, useEffect } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const headers = {
  "Accept": "application/json",
  "apikey": import.meta.env.VITE_API_KEY,
};

const estimateReadingTime = (text) => {
  if (!text) return 1;
  const wordCount = text.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.ceil(wordCount / 300) || 1;
};

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return (
    d.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }) +
    " - " +
    d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
  );
};

// ubah nama tag jadi slug URL (mis. "Gempa Venezuela" -> "gempa-venezuela")
export const slugifyTag = (tag = "") =>
  tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

// bentuk 1 artikel dari API ke bentuk yang dipakai kartu berita
export const normalizeArticle = (item) => {
  const a = item.attributes ?? {};
  return {
    id: item.id,
    title: a.title,
    image: a.image_url,
    category: a.category?.name,
    source: a.news_origin?.origin,
    date: formatDate(a.pubdate),
    description: a.description ?? "",
    readingTime: estimateReadingTime(a.content ?? a.description),
  };
};

const CATEGORY_ID_MAP = {
  "berita-utama": 15,
  "terkini": 1,
  "nasional": 16,
  "global": 17,
  "ekonomi": 7,
  "olahraga": 4,
  "seleb": 2,
  "gaya-hidup": 3,
  "otomotif": 13,
  "teknologi": 8,
  "travel": 18,
  "infografis": 19,
};

export function NewsServices(slug) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  // reset saat kategori berganti
  useEffect(() => {
    setNews([]);
    setPage(1);
    setHasMore(true);
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    const categoryId = CATEGORY_ID_MAP[slug] ?? 15;

    fetch(`${baseUrl}/aggregator/pages/home?category_id=${categoryId}&page=${page}&limit=10`, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    "apikey": import.meta.env.VITE_API_KEY,
  }
})
      .then((res) => {
        if (!res.ok) {
          const e = new Error(`Server merespons dengan kode ${res.status}`);
          e.status = res.status; // kode HTTP (mis. 404, 500)
          throw e;
        }
        return res.json();
      })
      .then((result) => {
        const list = result.data?.lists?.data ?? [];
        const meta = result.data?.lists?.meta;
        const normalized = list.map(normalizeArticle);
        setNews((prev) => (page === 1 ? normalized : [...prev, ...normalized]));
        if (meta && meta.current_page >= meta.last_page) setHasMore(false);
      })
      .catch((err) =>
        setError({ status: err.status ?? null, message: err.message })
      )
      .finally(() => setLoading(false));
  }, [slug, page, reloadKey]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  // ambil ulang data dari awal (dipakai tombol "Coba lagi")
  const refetch = () => {
    setNews([]);
    setPage(1);
    setHasMore(true);
    setError(null);
    setReloadKey((k) => k + 1);
  };

  return { news, loading, error, loadMore, hasMore, refetch };
}

export function useTrending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${baseUrl}/tags/trending?limit=10`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "apikey": import.meta.env.VITE_API_KEY,
      }
    })
      .then((res) => {
        if (!res.ok) {
          const e = new Error(`Server merespons dengan kode ${res.status}`);
          e.status = res.status;
          throw e;
        }
        return res.json();
      })
      .then((result) => {
        console.log("useTrending result:", result);
        setTrending(result.data ?? []);
      })
      .catch((err) => setError({ status: err.status ?? null, message: err.message }))
      .finally(() => setLoading(false));
  }, [reloadKey]);

  const refetch = () => setReloadKey((k) => k + 1);

  return { trending, loading, error, refetch };
}

export function useNewsDetail(id) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    fetch(`${baseUrl}/news/${id}`, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    "apikey": import.meta.env.VITE_API_KEY,
  },
    })
      .then((res) => {
        if (!res.ok) {
          const e = new Error(`Server merespons dengan kode ${res.status}`);
          e.status = res.status;
          throw e;
        }
        return res.json();
      })
      .then((result) => {
        console.log("useNewsDetail result:", result);
        setDetail(result.data ?? null);
      })
      .catch((err) => setError({ status: err.status ?? null, message: err.message }))
      .finally(() => setLoading(false));
  }, [id, reloadKey]);

  const refetch = () => {
    setError(null);
    setReloadKey((k) => k + 1);
  };

  return { detail, loading, error, refetch };
}
