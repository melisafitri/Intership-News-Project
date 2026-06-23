import "./RelatedNews.css";
import RelatedNewsItem from "../../molecules/RelatedNewsItem/RelatedNewsItem";

const DUMMY_RELATED = [
  {
    id: 1,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+1",
    title: "AS Identifikasi 8 Awak Tewas dalam...",
    source: "sindonews",
    category: "Global",
    date: "Senin, 22 Juni 2026 - 10:00",
    readingTime: 3,
  },
  {
    id: 2,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+2",
    title: "Analis Israel: Netanyahu Pembohong...",
    source: "sindonews",
    category: "Global",
    date: "Senin, 22 Juni 2026 - 09:00",
    readingTime: 2,
  },
  {
    id: 3,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+3",
    title: "Trump: AS Harus Kembalikan Uang Ira...",
    source: "sindonews",
    category: "Global",
    date: "Senin, 22 Juni 2026 - 08:00",
    readingTime: 4,
  },
  {
    id: 4,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+4",
    title: "Langka, Trump Bela Hak Iran Memiliki...",
    source: "sindonews",
    category: "Global",
    date: "Minggu, 21 Juni 2026 - 15:00",
    readingTime: 3,
  },
  {
    id: 5,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+5",
    title: "Trump Telah Teken Nota Kesepahaman...",
    source: "sindonews",
    category: "Global",
    date: "Minggu, 21 Juni 2026 - 14:00",
    readingTime: 5,
  },
];

function RelatedNews({ news = DUMMY_RELATED }) {
  return (
    <div className="related-news">
      <h2 className="related-news__title">Related News</h2>
      <div className="related-news__list">
        {news.map((item) => (
          <RelatedNewsItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            source={item.source}
            date={item.date}
            readingTime={item.readingTime}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedNews;