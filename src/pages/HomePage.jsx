// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/1.png';
import { FiArrowRight, FiClipboard, FiFileText, FiBookOpen, FiBell, FiBarChart2, FiPhone } from 'react-icons/fi';

const HomePage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [latestNews, setLatestNews] = useState([]); // State untuk berita dari API
  const [loadingNews, setLoadingNews] = useState(true); // State untuk status loading
  const [errorNews, setErrorNews] = useState(null); // State untuk error

  useEffect(() => {
    // Efek untuk visibilitas hero section
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Fungsi untuk mengambil data berita dari API
    const fetchNews = async () => {
      try {
        // Ganti 'YOUR_NEWS_API_ENDPOINT' dengan endpoint API berita Anda
        // dan tambahkan parameter seperti 'apiKey' jika diperlukan
        const response = await fetch('https://api.example.com/latest-news?q=Sumatera%20Barat&apiKey=YOUR_API_KEY');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Sesuaikan dengan struktur data API Anda
        // Misalnya, jika berita ada di data.articles, gunakan data.articles
        setLatestNews(data.articles.slice(0, 3)); // Ambil 3 berita terbaru
      } catch (error) {
        console.error("Error fetching news:", error);
        setErrorNews("Gagal memuat berita. Silakan coba lagi nanti.");
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNews(); // Panggil fungsi fetchNews

    // Cleanup: Hapus listener dan timer
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const mainServices = [
    { title: "Layanan Perizinan", icon: <FiClipboard className="h-8 w-8 text-green-600" />, link: "/layanan/perizinan" },
    { title: "Informasi Publik", icon: <FiFileText className="h-8 w-8 text-green-600" />, link: "/informasi-publik" },
    { title: "Produk", icon: <FiBookOpen className="h-8 w-8 text-green-600" />, link: "/produk" },
    { title: "Pengaduan Masyarakat", icon: <FiPhone className="h-8 w-8 text-green-600" />, link: "/kontak" },
  ];

  return (
    <div className="bg-gray-50">
      <section
        className="relative bg-green-700 text-white h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div
          className={`relative container mx-auto px-6 text-center transition-all duration-1000 ease-in-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Dinas Kependudukan dan Pencatatan Sipil Provinsi Sumatera Barat
          </h1>
          <p className="text-lg lg:text-xl text-cyan-200 max-w-3xl mx-auto mb-8">
            Portal Resmi Pemerintah Provinsi Sumatra Barat. Temukan informasi terbaru dan layanan publik yang Anda butuhkan dengan mudah.
          </p>
          <Link
            to="/profil"
            className="inline-block bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-cyan-200 transition duration-300 transform hover:scale-105"
          >
            Tentang Kami
          </Link>
        </div>

        <a
          href="#scrollTo"
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-500 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      <section id="scrollTo" className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Berita & Informasi Terkini</h2>
              <p className="text-gray-600">Ikuti perkembangan terbaru dari Pemerintah Provinsi Sumatra Barat.</p>
            </div>
            <Link
              to="/berita"
              className="mt-4 lg:mt-0 flex items-center text-green-600 font-semibold hover:text-green-800 transition"
            >
              Lihat Semua Berita <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {loadingNews && <p className="text-center text-gray-600">Memuat berita...</p>}
          {errorNews && <p className="text-center text-red-500">{errorNews}</p>}
          {!loadingNews && !errorNews && latestNews.length === 0 && (
            <p className="text-center text-gray-600">Tidak ada berita terbaru saat ini.</p>
          )}

          <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
            <div className="flex w-full space-x-4">
              {latestNews.map((news) => (
                <div
                  key={news.id || news.url} // Gunakan ID unik dari API atau URL sebagai fallback
                  className="snap-start w-full flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="p-6">
                    <span className="text-sm font-semibold text-green-600 bg-green-100 py-1 px-3 rounded-full">
                      {news.category || 'Berita Umum'} {/* Sesuaikan dengan field kategori dari API */}
                    </span>
                    <h3 className="mt-4 mb-2 text-2xl font-bold text-gray-900 leading-tight hover:text-green-700">
                      <a href={news.link || news.url} target="_blank" rel="noopener noreferrer">{news.title}</a> {/* Gunakan link dari API */}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{news.date || new Date(news.publishedAt).toLocaleDateString('id-ID')}</p> {/* Sesuaikan dengan field tanggal dari API */}
                    <p className="text-gray-600 line-clamp-3">{news.summary || news.description}</p> {/* Sesuaikan dengan field ringkasan dari API */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Layanan Utama</h2>
          <p className="text-gray-600 mb-12">Akses cepat ke layanan yang paling sering dibutuhkan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service) => (
              <Link to={service.link} key={service.title} className="block p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-center items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-600 font-semibold">FOKUS KAMI</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">Transparansi Anggaran dan Produk</h2>
            <p className="text-gray-600 mb-6">
              Kami berkomitmen untuk menyediakan akses yang mudah dan transparan terhadap informasi anggaran serta semua produk yang berlaku untuk publik.
            </p>
            <div className="space-y-4">
              <Link to="#" className="flex items-center text-gray-700 hover:text-green-600 font-medium">
                <FiBarChart2 className="h-6 w-6 mr-3 text-green-500"/>
                <span>Lihat Laporan Anggaran</span>
              </Link>
              <Link to="/produk-hukum" className="flex items-center text-gray-700 hover:text-green-600 font-medium">
                <FiBookOpen className="h-6 w-6 mr-3 text-green-500"/>
                <span>Jelajahi Database Produk</span>
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-4">Pengumuman Penting</h3>
            <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                    <FiBell className="h-6 w-6 text-red-600"/>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Waspada Penipuan Mengatasnamakan Pejabat</p>
                    <p className="text-gray-600 text-sm mt-1">Pemerintah Provinsi tidak pernah meminta imbalan dalam bentuk apapun untuk layanannya. Laporkan jika Anda menemukan hal mencurigakan.</p>
                    <a href="#" className="text-red-600 text-sm font-semibold mt-2 inline-block">Baca Selengkapnya</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;