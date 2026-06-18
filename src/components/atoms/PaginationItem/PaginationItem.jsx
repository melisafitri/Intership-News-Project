import "./PaginationItem.css";

function PaginationItem({ children, onClick, disabled, active }) {
  return (
    <button
      className={`pagination-btn ${active ? "active" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PaginationItem;