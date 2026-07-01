import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/icons/back.png";
import shareIcon from "../../../assets/icons/share.png";
import "./MobileTopBar.css";

/**
 * Header khusus mobile: tombol back (kiri), judul (tengah),
 * dan opsional tombol bagikan (kanan).
 * Disembunyikan di desktop lewat CSS.
 */
function MobileTopBar({ title = "", showShare = false, shareTitle = "" }) {
  const navigate = useNavigate();

  const handleShare = async () => {
    const url = window.location.href;
    const data = { title: shareTitle || document.title, url };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* user membatalkan share, abaikan */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link berita disalin ke clipboard");
      } catch {
        /* abaikan */
      }
    }
  };

  return (
    <div className="mobile-top-bar">
      <button
        type="button"
        className="mobile-top-bar__btn"
        onClick={() => navigate(-1)}
        aria-label="Kembali"
      >
        <img src={backIcon} alt="Kembali" className="mobile-top-bar__icon" />
      </button>

      <span className="mobile-top-bar__title">{title}</span>

      {showShare ? (
        <button
          type="button"
          className="mobile-top-bar__btn"
          onClick={handleShare}
          aria-label="Bagikan"
        >
          <img src={shareIcon} alt="Bagikan" className="mobile-top-bar__icon" />
        </button>
      ) : (
        <span className="mobile-top-bar__spacer" />
      )}
    </div>
  );
}

export default MobileTopBar;
