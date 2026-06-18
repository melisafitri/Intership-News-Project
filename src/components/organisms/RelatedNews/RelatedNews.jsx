import "./RelatedNews.css";
import RelatedNewsItem from "../../molecules/RelatedNewsItem/RelatedNewsItem";

const DUMMY_RELATED = [
  {
    id: 1,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+1",
    title: "AS Identifikasi 8 Awak Tewas dalam...",
    source: "sindonews",
  },
  {
    id: 2,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+2",
    title: "Analis Israel: Netanyahu Pembohong...",
    source: "sindonews",
  },
  {
    id: 3,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+3",
    title: "Trump: AS Harus Kembalikan Uang Ira...",
    source: "sindonews",
  },
  {
    id: 4,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+4",
    title: "Langka, Trump Bela Hak Iran Memiliki...",
    source: "sindonews",
  },
  {
    id: 5,
    img: "https://placehold.co/100x70/1a1a2e/ffffff?text=News+5",
    title: "Trump Telah Teken Nota Kesepahaman...",
    source: "sindonews",
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
            img={item.img}
            title={item.title}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedNews;