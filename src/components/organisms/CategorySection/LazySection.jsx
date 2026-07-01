import { useState, useRef, useEffect } from "react";

/**
 * Menunda render children sampai wrapper mendekati viewport.
 * Dipakai agar tiap CategorySection baru fetch datanya saat discroll,
 * bukan semua sekaligus saat halaman dibuka.
 *
 * Memakai cek scroll + getBoundingClientRect (bukan IntersectionObserver)
 * agar perilakunya bisa diverifikasi dan konsisten di semua browser.
 */
function LazySection({ children, minHeight = 420, buffer = 300 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    let ticking = false;

    const check = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight + buffer && rect.bottom >= -buffer) {
        setVisible(true);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(check);
    };

    // cek posisi awal (kalau sudah dekat viewport saat mount)
    check();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [visible, buffer]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}

export default LazySection;
