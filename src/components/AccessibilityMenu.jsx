import React, { useState, useEffect } from 'react';
import { FiEye, FiType, FiLink, FiX, FiChevronDown, FiVolume2, FiRotateCcw, FiDisc, FiCircle, FiStopCircle, FiArrowRight } from 'react-icons/fi';
import { FaUniversalAccess } from 'react-icons/fa';

const AccessibilityMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState('normal');
  const [contrast, setContrast] = useState('normal');
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [easyToReadFont, setEasyToReadFont] = useState(false);
  const [focusRing, setFocusRing] = useState(true); // Defaultnya aktif (terlihat)
  const [reduceAnimations, setReduceAnimations] = useState(false);
  // Tambahan untuk fitur "Skip to main content"
  const [showSkipLink, setShowSkipLink] = useState(false);

  // Efek untuk menerapkan kelas CSS ke elemen <html> berdasarkan state
  useEffect(() => {
    const root = document.documentElement;

    // Hapus semua kelas terkait sebelum menambahkan yang baru
    // Pastikan daftar kelas di sini lengkap sesuai dengan yang akan Anda gunakan
    root.classList.remove(
      'text-small',
      'text-large',
      'high-contrast',
      'links-highlighted',
      'grayscale-mode',
      'easy-font',
      'hide-focus-ring',
      'reduce-animations'
    );

    // Terapkan kelas ukuran teks
    if (textSize === 'small') {
      root.classList.add('text-small');
    } else if (textSize === 'large') {
      root.classList.add('text-large');
    }

    // Terapkan kelas kontras
    if (contrast === 'high') {
      root.classList.add('high-contrast');
    }

    // Terapkan kelas sorot tautan
    if (highlightLinks) {
      root.classList.add('links-highlighted');
    }

    // Terapkan mode grayscale
    if (grayscale) {
      root.classList.add('grayscale-mode');
    }

    // Terapkan font yang mudah dibaca
    if (easyToReadFont) {
      root.classList.add('easy-font');
    }

    // Terapkan visibilitas focus ring
    if (!focusRing) {
      root.classList.add('hide-focus-ring');
    }

    // Terapkan pengurangan animasi
    if (reduceAnimations) {
      root.classList.add('reduce-animations');
    }

    // Fungsi untuk menutup menu jika di luar diklik
    const handleClickOutside = (event) => {
      // Periksa apakah klik terjadi di luar menu dan tombol aksesibilitas
      if (isMenuOpen && !event.target.closest('.accessibility-menu-panel') && !event.target.closest('.accessibility-toggle-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [textSize, contrast, highlightLinks, grayscale, easyToReadFont, focusRing, reduceAnimations, isMenuOpen]);

  const handleSkipToMainContent = (event) => {
    event.preventDefault();
    const mainContent = document.querySelector('main'); // Asumsikan elemen konten utama Anda memiliki tag <main>
    if (mainContent) {
      mainContent.focus(); // Fokus ke elemen utama
      mainContent.tabIndex = -1; // Memungkinkan elemen untuk difokuskan secara terprogram
      // Opsional: scrollIntoView jika perlu
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Sembunyikan link setelah digunakan
    setShowSkipLink(false);
  };

  const resetAccessibility = () => {
    setTextSize('normal');
    setContrast('normal');
    setHighlightLinks(false);
    setGrayscale(false);
    setEasyToReadFont(false);
    setFocusRing(true); // Kembalikan ke default terlihat
    setReduceAnimations(false);
    // Tidak mereset isMenuOpen agar menu tetap terbuka setelah reset
  };

  return (
    <>
      <a
        href="#main-content" // Link ke ID konten utama Anda
        className={`sr-only focus:not-sr-only fixed top-0 left-0 bg-emerald-600 text-white p-3 z-[100] text-lg font-semibold rounded-br-lg transition-all duration-200 ${showSkipLink ? 'block' : 'hidden'}`}
        onFocus={() => setShowSkipLink(true)}
        onBlur={() => setShowSkipLink(false)}
        onClick={handleSkipToMainContent}
      >
        <FiArrowRight className="inline-block mr-2" /> Lewati ke Konten Utama
      </a>


      {/* Tombol Melayang untuk Membuka Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="accessibility-toggle-button fixed bottom-4 left-4 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-transform transform hover:scale-110"
        aria-label="Buka Menu Aksesibilitas"
        aria-expanded={isMenuOpen}
      >
        <FaUniversalAccess size={24} />
      </button>

      {/* Panel Menu Aksesibilitas */}
      <div
        className={`accessibility-menu-panel fixed bottom-20 left-4 z-50 w-72 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-menu-title"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 id="accessibility-menu-title" className="text-lg font-semibold text-gray-800">Menu Aksesibilitas</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Tutup Menu Aksesibilitas"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Opsi Ukuran Teks */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <FiType className="mr-2" /> Ukuran Teks
            </label>
            <div className="flex justify-between rounded-md shadow-sm" role="group" aria-label="Pilih ukuran teks">
              <button
                onClick={() => setTextSize('small')}
                className={`px-4 py-2 text-sm font-medium w-full ${textSize === 'small' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} rounded-l-lg`}
                aria-pressed={textSize === 'small'}
              >Kecil</button>
              <button
                onClick={() => setTextSize('normal')}
                className={`px-4 py-2 text-sm font-medium w-full ${textSize === 'normal' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-pressed={textSize === 'normal'}
              >Normal</button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-4 py-2 text-sm font-medium w-full ${textSize === 'large' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} rounded-r-lg`}
                aria-pressed={textSize === 'large'}
              >Besar</button>
            </div>
          </div>

          {/* Opsi Kontras Tinggi */}
          <div className="flex justify-between items-center">
            <label htmlFor="contrast-toggle" className="flex items-center text-gray-700 font-medium cursor-pointer">
              <FiEye className="mr-2" /> Kontras Tinggi
            </label>
            <button
              id="contrast-toggle"
              role="switch"
              aria-checked={contrast === 'high'}
              onClick={() => setContrast(contrast === 'normal' ? 'high' : 'normal')}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${contrast === 'high' ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${contrast === 'high' ? 'translate-x-6' : 'translate-x-1'}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Opsi Sorot Tautan */}
          <div className="flex justify-between items-center">
            <label htmlFor="links-toggle" className="flex items-center text-gray-700 font-medium cursor-pointer">
              <FiLink className="mr-2" /> Sorot Tautan
            </label>
            <button
              id="links-toggle"
              role="switch"
              aria-checked={highlightLinks}
              onClick={() => setHighlightLinks(!highlightLinks)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${highlightLinks ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${highlightLinks ? 'translate-x-6' : 'translate-x-1'}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Opsi Mode Grayscale */}
          <div className="flex justify-between items-center">
            <label htmlFor="grayscale-toggle" className="flex items-center text-gray-700 font-medium cursor-pointer">
              <FiDisc className="mr-2" /> Mode Grayscale
            </label>
            <button
              id="grayscale-toggle"
              role="switch"
              aria-checked={grayscale}
              onClick={() => setGrayscale(!grayscale)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${grayscale ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${grayscale ? 'translate-x-6' : 'translate-x-1'}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Opsi Font Mudah Dibaca */}
          <div className="flex justify-between items-center">
            <label htmlFor="easy-font-toggle" className="flex items-center text-gray-700 font-medium cursor-pointer">
              <FiType className="mr-2" /> Font Mudah Dibaca
            </label>
            <button
              id="easy-font-toggle"
              role="switch"
              aria-checked={easyToReadFont}
              onClick={() => setEasyToReadFont(!easyToReadFont)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${easyToReadFont ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${easyToReadFont ? 'translate-x-6' : 'translate-x-1'}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Opsi Visibilitas Focus Ring */}
          <div className="flex justify-between items-center">
            <label htmlFor="focus-ring-toggle" className="flex items-center text-gray-700 font-medium cursor-pointer">
              <FiCircle className="mr-2" /> Tampilkan Fokus
            </label>
            <button
              id="focus-ring-toggle"
              role="switch"
              aria-checked={focusRing}
              onClick={() => setFocusRing(!focusRing)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${focusRing ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${focusRing ? 'translate-x-6' : 'translate-x-1'}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Opsi Kurangi Animasi */}
          <div className="flex justify-between items-center">
            <label htmlFor="reduce-animations-toggle" className="flex items-center text-gray-700 font-medium cursor-pointer">
              <FiStopCircle className="mr-2" /> Kurangi Animasi
            </label>
            <button
              id="reduce-animations-toggle"
              role="switch"
              aria-checked={reduceAnimations}
              onClick={() => setReduceAnimations(!reduceAnimations)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${reduceAnimations ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${reduceAnimations ? 'translate-x-6' : 'translate-x-1'}`}
                aria-hidden="true"
              />
            </button>
          </div>

        </div>

        <div className="p-4 border-t text-center">
          <button
            onClick={resetAccessibility}
            className="text-sm text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
          >
            Atur Ulang Pengaturan
          </button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityMenu;