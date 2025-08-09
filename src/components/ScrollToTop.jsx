import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  // Gunakan useEffect untuk menjalankan fungsi setiap kali 'pathname' berubah
  useEffect(() => {
    // Scroll jendela ke posisi paling atas (koordinat 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Array dependensi, efek ini akan berjalan lagi jika pathname berubah

  return null; // Komponen ini tidak me-render elemen apapun
}

export default ScrollToTop;