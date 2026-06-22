import React, { useState, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import TopicTemplate from "../../templates/TopicTemplate/TopicTemplate";
import NewsList from "../../components/organisms/NewsList/NewsList";
import Pagination from "../../components/organisms/Pagination/Pagination";
import TopicList from "../../components/organisms/TopicList/TopicList";
import Source from "../../components/atoms/Source/Source";
import "./Topic.css";

const DUMMY_NEWS = [
  {
    id: 1,
    image: "/src/assets/images/Penangkapan Dadan Hindayana.jpg",
    title: "5 Fakta Penting Kasus Eks Kepala BGN Dadan Hindayana",
    source: "okezone",
    // description: "Kasus eks kepala BGN Dadan Hindayana menjadi sorotan publik.",
    readingTime: 3,
    date: "Kamis, 18 Juni 2026 - 18:52",
  },
  {
    id: 2,
    image: "/src/assets/images/4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN.jpg",
    title: "4 Fakta Prabowo Copot Dadan Hindayana dari Kepala BGN",
    source: "okezone",
    // description: "Presiden Prabowo resmi mencopot Dadan Hindayana dari jabatannya.",
    readingTime: 2,
    date: "Rabu, 17 Juni 2026 - 14:30",
  },
  {
    id: 3,
    image: "/src/assets/images/LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas.jpg",
    title: "LPSK Siap Lindungi Saksi-JC di Kasus Korupsi BGN dan Imipas",
    source: "okezone",
    // description: "LPSK menyatakan siap memberikan perlindungan kepada saksi.",
    readingTime: 4,
    date: "Selasa, 16 Juni 2026 - 10:00",
  },
  {
    id: 4,
    image: "/src/assets/images/LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN.jpg",
    title: "LPSK Siap Lindungi Saksi hingga Justice Collaborator Kasus Korupsi BGN",
    source: "okezone",
    // description: "LPSK akan melindungi justice collaborator dalam kasus ini.",
    readingTime: 3,
    date: "Senin, 15 Juni 2026 - 09:00",
  },
];

const ITEMS_PER_PAGE = 4;

const Topic = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);

  const topicLabel = location.state?.topicLabel || slug?.replace(/-/g, " ");
  const totalArticles = 66;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

  const clickPagination = (destinationPage) => {
    searchParams.set("page", destinationPage);
    setSearchParams(searchParams);
    setCurrentPage(destinationPage);
  };

  useEffect(() => {
    setCurrentPage(1);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }, [slug]);

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
          onPageChange={clickPagination}
        />
      </div>

      <div className="topic__right">
        <TopicList />
      </div>
    </TopicTemplate>
  );
};

export default Topic;