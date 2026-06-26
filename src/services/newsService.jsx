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

const CATEGORY_ID_MAP = {
  "berita-utama": 15,
  "terkini": 15,
  "nasional": 15,
  "global": 15,
  "ekonomi": 15,
  "olahraga": 15,
  "seleb": 15,
  "gaya-hidup": 15,
  "teknologi": 15,
  "otomotif": 15,
  "travel": 15,
};

export function NewsServices(slug) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
      .then((res) => res.json())
      .then((result) => {
        const list = result.data?.lists?.data ?? [];
        const meta = result.data?.lists?.meta;
        const normalized = list.map((item) => {
          const a = item.attributes;
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
        });
        setNews((prev) => (page === 1 ? normalized : [...prev, ...normalized]));
        if (meta && meta.current_page >= meta.last_page) setHasMore(false);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return { news, loading, error, loadMore, hasMore };
}

export function useTrending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/tags/trending?limit=10`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "apikey": import.meta.env.VITE_API_KEY,
      }
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("useTrending result:", result);
        setTrending(result.data ?? []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { trending, loading, error };
}

export function useNewsDetail(id) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`${baseUrl}/news/${id}`, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    // "Visitor-Id": "Hello World",
    "apikey": import.meta.env.VITE_API_KEY,
  },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("useNewsDetail result:", result);
        setDetail(result.data ?? null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { detail, loading, error };
}
