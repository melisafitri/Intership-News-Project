import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Pagination;