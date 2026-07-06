import "./StateView.css";
import notFoundImg from "../../../assets/icons/search-not-found-data.png";

/**
 * Tampilan untuk "negative case": data kosong / gagal dimuat.
 * Dipakai ulang untuk error (sinyal/API) maupun hasil kosong (not found),
 * cukup ganti title & message-nya.
 */
function StateView({ image = notFoundImg, title, message, onRetry }) {
  return (
    <div className="state-view">
      <img src={image} alt={title} className="state-view__img" />
      <h3 className="state-view__title">{title}</h3>
      {message && <p className="state-view__msg">{message}</p>}
      {onRetry && (
        <button type="button" className="state-view__btn" onClick={onRetry}>
          Coba lagi
        </button>
      )}
    </div>
  );
}

export default StateView;
