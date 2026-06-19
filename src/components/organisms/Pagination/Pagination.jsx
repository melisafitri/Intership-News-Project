import PaginationItem from "../../atoms/PaginationItem/PaginationItem";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange, windowSize = 10 }) {
  const half = Math.floor(windowSize / 2);
  let start = currentPage - half;
  let end = start + windowSize - 1;

  if (start < 1) {
    start = 1;
    end = Math.min(windowSize, totalPages);
  }
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, totalPages - windowSize + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <PaginationItem
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &#8249;
      </PaginationItem>

      {pages.map((page) => (
        <PaginationItem
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationItem>
      ))}

      {currentPage < totalPages && (
        <PaginationItem onClick={() => onPageChange(currentPage + 1)}>
          &#8250;
        </PaginationItem>
      )}
    </div>
  );
}

export default Pagination;