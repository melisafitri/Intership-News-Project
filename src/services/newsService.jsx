import { useState, useEffect } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const headers = {
  "Accept": "application/json",
  "apikey": import.meta.env.VITE_API_KEY,
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

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    const categoryId = CATEGORY_ID_MAP[slug] ?? 15;
    
    fetch(`${baseUrl}/aggregator/pages/home?category_id=${categoryId}&page=1&limit=10`, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    "apikey": import.meta.env.VITE_API_KEY,
  }
})
      .then((res) => res.json())
      .then((result) => {
        const list = result.data?.lists?.data ?? [];
        const normalized = list.map((item) => {
          const a = item.attributes;
          return {
            id: item.id,
            title: a.title,
            image: a.image_url,
            category: a.category?.name,
            source: a.news_origin?.origin,
            date: a.pubdate,
            description: a.description ?? "",
          };
        });
        console.log("NewsServices items:", normalized);
        setNews(normalized);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  return { news, loading, error };
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
    "Visitor-Id": "Hello World",
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
