import "./RelatedNewsItem.css";

function RelatedNewsItem({ img, title, source }) {
  return (
    <div className="related-news-item">
      <div className="related-news-item__img">
        <img src={img} alt={title} />
      </div>
      <div className="related-news-item__info">
        <h3 className="related-news-item__title">{title}</h3>
        <p className="related-news-item__source">{source}</p>
      </div>
    </div>
  );
}

export default RelatedNewsItem;