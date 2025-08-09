import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiChevronRight, FiCalendar, FiUser, FiTag } from 'react-icons/fi';
import heroImage from '../assets/images/masjid.jpg'; // Anda bisa mengganti ini dengan gambar yang relevan

const dummyNews = [
  {
    id: 1,
    title: 'Pemprov Sumbar dan Bea Cukai Gencar Berantas Rokok Ilegal',
    category: 'Hukum',
    author: 'RRI',
    date: '6 Agustus 2025',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'Pemerintah Provinsi Sumatera Barat bersama dengan Bea dan Cukai terus menggencarkan operasi pemberantasan rokok ilegal di berbagai daerah. Langkah ini diambil untuk melindungi pendapatan negara dan kesehatan masyarakat dari produk tanpa cukai.'
  },
  {
    id: 2,
    title: 'Gempa Magnitudo 4,3 Guncang Padang, Disebabkan Aktivitas Sesar Mentawai',
    category: 'Bencana',
    author: 'iNews',
    date: '6 Agustus 2025',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-6e2a74c6a6f1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'Gempa dengan magnitudo 4,3 mengguncang Kota Padang dan sekitarnya. BMKG menyatakan gempa ini dipicu oleh aktivitas Sesar Mentawai. Warga diimbau untuk tetap tenang namun waspada terhadap potensi gempa susulan.'
  },
  {
    id: 3,
    title: 'Gunung Marapi Bisa Erupsi Sewaktu-waktu, Badan Geologi Minta Warga Waspada',
    category: 'Bencana',
    author: 'Radar Sumbar',
    date: '6 Agustus 2025',
    imageUrl: 'https://images.unsplash.com/photo-1589395521019-a131826d7c6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'Badan Geologi Kementerian ESDM menyatakan bahwa aktivitas vulkanik Gunung Marapi masih tinggi dan bisa mengalami erupsi kapan saja. Masyarakat yang berada di sekitar zona bahaya diminta untuk meningkatkan kewaspadaan.'
  },
  {
    id: 4,
    title: 'Aksi Heroik Bidan Dona Seberangi Sungai Deras Diganjar Penghargaan',
    category: 'Sosial',
    author: 'Detikcom',
    date: '5 Agustus 2025',
    imageUrl: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'Bidan Dona, yang videonya viral saat menyeberangi sungai deras demi melayani pasien, mendapatkan penghargaan sebagai Tenaga Kesehatan Teladan dari Pemerintah Provinsi Sumatera Barat sebagai bentuk apresiasi atas dedikasinya.'
  },
   {
    id: 5,
    title: '9 Ribu Warga Pasaman Barat Belum Rekam KTP, Disdukcapil Gencarkan Sosialisasi',
    category: 'Pemerintahan',
    author: 'Radar Sumbar',
    date: '6 Agustus 2025',
    imageUrl: 'https://images.unsplash.com/photo-1614036124115-2f87a039756c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kabupaten Pasaman Barat terus mendorong percepatan perekaman KTP elektronik. Hingga saat ini, masih ada sekitar 9 ribu warga yang belum melakukan perekaman data.'
  },
  {
    id: 6,
    title: 'Kabar Baik! Pemprov Sumbar Siapkan Hadiah Umrah bagi Wajib Pajak Taat',
    category: 'Ekonomi',
    author: 'Radar Sumbar',
    date: '5 Agustus 2025',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'Sebagai bentuk apresiasi kepada masyarakat yang taat membayar pajak kendaraan bermotor, Pemerintah Provinsi Sumatera Barat menyiapkan hadiah berupa paket umrah yang akan diundi pada akhir tahun.'
  }
];

const Berita = () => {
  const featuredNews = dummyNews[0];
  const otherNews = dummyNews.slice(1);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-blue-800 text-white py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider drop-shadow-lg">
            Berita & Informasi
          </h1>
          <div className="flex justify-center items-center text-sm mt-4">
            <Link to="/" className="flex items-center hover:text-cyan-300 transition-colors">
              <FiHome className="mr-2" />
              Beranda
            </Link>
            <FiChevronRight className="mx-2" />
            <span>Berita</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured News */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={featuredNews.imageUrl} alt={featuredNews.title} className="h-full w-full object-cover"/>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm mb-2">
                  <span className="bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded-full flex items-center gap-2"><FiTag /> {featuredNews.category}</span>
                  <span className="text-gray-500 flex items-center gap-2"><FiCalendar /> {featuredNews.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors">
                  <Link to={`/berita/${featuredNews.id}`}>{featuredNews.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{featuredNews.excerpt}</p>
                 <div className="text-sm text-gray-500 flex items-center gap-2"><FiUser /> Oleh {featuredNews.author}</div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-emerald-500 pl-4">Berita Lainnya</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover"/>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs mb-2">
                    <span className="bg-cyan-100 text-cyan-800 font-semibold px-2 py-1 rounded-full flex items-center gap-1"><FiTag /> {news.category}</span>
                    <span className="text-gray-500 flex items-center gap-1"><FiCalendar /> {news.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex-grow hover:text-emerald-600 transition-colors">
                    <Link to={`/berita/${news.id}`}>{news.title}</Link>
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                    <div className="text-xs text-gray-500 mt-auto flex items-center gap-1"><FiUser /> Oleh {news.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Berita;