import React from "react";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import BannerCarousel from "../../components/organisms/BannerCarousel/BannerCarousel";
import NewsList from "../../components/organisms/NewsList/NewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Home.css";

const Home = () => {
  return (
    <HomeTemplate>
      <div className="home__layout">
        <div className="home__main">
          <BannerCarousel />
          <NewsList news={[]} />
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </div>
        <aside className="home__sidebar">
          <TopicList />
        </aside>
      </div>
    </HomeTemplate>
  );
};

export default Home;
