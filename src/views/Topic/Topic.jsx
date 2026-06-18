import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TopicTemplate from "../../templates/TopicTemplate/TopicTemplate";
import NewsList from "../../components/organisms/NewsList/NewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import "./Topic.css";

const DUMMY_NEWS = [
  {
    id: 1,
    image: "https://placehold.co/195x108/1a1a2e/ffffff?text=Berita+1",
    title: "5 Fakta Penting Kasus Eks Kepala BGN Dadan Hindayana",
    source: "okezone",
    description: "Kasus eks kepala BGN Dadan Hindayana menjadi sorotan publik.",
    readingTime: 3,
  },
  {
    id: 2,
    image: "https://placehold.co/195x108/1a1a2e/ffffff?text=Berita+2",
    title: "4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN",
    source: "okezone",
    description: "Presiden Prabowo resmi mencopot Dadan Hindayana dari jabatannya.",
    readingTime: 2,
  },
  {
    id: 3,
    image: "https://placehold.co/195x108/1a1a2e/ffffff?text=Berita+3",
    title: "LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas",
    source: "okezone",
    description: "LPSK menyatakan siap memberikan perlindungan kepada saksi.",
    readingTime: 4,
  },
  {
    id: 4,
    image: "https://placehold.co/195x108/1a1a2e/ffffff?text=Berita+4",
    title: "LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN",
    source: "okezone",
    description: "LPSK akan melindungi justice collaborator dalam kasus ini.",
    readingTime: 3,
  },
];

const ITEMS_PER_PAGE = 4;

const Topic = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const topicLabel = location.state?.topicLabel || slug?.replace(/-/g, " ");
  const totalArticles = 66;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

  return (
    <TopicTemplate>
      <div className="topic__left">
        <div className="topic__result-header">
          <p className="topic__result">Result for # {topicLabel}</p>
          <p className="topic__total">Total {totalArticles} Articles</p>
        </div>

        <NewsList news={DUMMY_NEWS} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="topic__right">
        <TopicList />
      </div>
    </TopicTemplate>
  );
};

export default Topic;