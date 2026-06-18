import PaginationItem from "../../atoms/PaginationItem/PaginationItem";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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

      <PaginationItem
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </PaginationItem>
    </div>
  );
}

export default Pagination;