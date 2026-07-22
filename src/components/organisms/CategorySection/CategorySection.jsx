import { NavLink } from "react-router-dom";
import { NewsServices } from "../../../services/newsService";
import GridCard from "../../molecules/GridCard/GridCard";
import "./CategorySection.css";

const ITEMS_SHOWN = 2;

function CategorySection({ label, slug }) {
  const { news, loading } = NewsServices(slug);

  if (!loading && news.length === 0) return null;

  return (
    <div className="category-section">
      <div className="category-section__header">
        <h2 className="category-section__title">{label}</h2>
        <NavLink
          to={`/category/${slug}`}
          className="category-section__see-more"
        >
          See More ›
        </NavLink>
      </div>
      <div className="category-section__grid">
        {loading
          ? Array.from({ length: ITEMS_SHOWN }).map((_, i) => (
              <div key={i} className="category-section__skeleton" />
            ))
          : news.slice(0, ITEMS_SHOWN).map((item) => (
              <GridCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                source={item.source}
                category={item.category}
                date={item.date}
                minutes={item.readingTime}
              />
            ))}
      </div>
    </div>
  );
}

export default CategorySection;
