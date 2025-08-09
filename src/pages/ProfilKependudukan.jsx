import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import TbBackground from '../assets/images/masjid.jpg';

// Pastikan path gambar benar, gunakan import jika perlu
import padangImg from '../assets/link_logo/padang.jpeg';
import sawahluntoImg from '../assets/link_logo/kota_sawahlunto.jpg';
import solokImg from '../assets/link_logo/kab_solok.jpeg';
import sijunjungImg from '../assets/link_logo/sijunjung.jpeg';
import tanahDatarImg from '../assets/link_logo/tanah_datar.jpeg';
import pdgPariamanImg from '../assets/link_logo/pdg_pariaman1.jpeg';
import agamImg from '../assets/link_logo/agam.jpeg';
import limaPuluhKotaImg from '../assets/link_logo/kab_50_kota.jpeg';
import dharmasrayaImg from '../assets/link_logo/dharmasraya.jpeg';
import solselImg from '../assets/link_logo/solsel.jpeg';
import pasbarImg from '../assets/link_logo/pasbar.jpeg';
import padangPanjangImg from '../assets/link_logo/padang_panjang.jpeg';
import bukittinggiImg from '../assets/link_logo/bukittinggi.jpeg';
import payakumbuhImg from '../assets/link_logo/payakumbuh.jpeg';
import pariamanImg from '../assets/link_logo/pariaman.jpeg';
import pasamanImg from '../assets/link_logo/pasaman.jpeg';

const profilDaerah = [
  { nama: 'Kota Padang', imgSrc: padangImg, link: 'https://online.disdukcapil.padang.go.id/' },
  { nama: 'Kota Sawahlunto', imgSrc: sawahluntoImg, link: 'http://rancakdigital.sawahluntokota.go.id/website/' },
  { nama: 'Kabupaten Solok', imgSrc: solokImg, link: 'https://disdukcapil.solokkab.go.id/' },
  { nama: 'Kabupaten Sijunjung', imgSrc: sijunjungImg, link: 'http://36.67.236.162/mobile/' },
  { nama: 'Kabupaten Tanah Datar', imgSrc: tanahDatarImg, link: 'https://dukcapil.tanahdatar.go.id/' },
  { nama: 'Kabupaten Padang Pariaman', imgSrc: pdgPariamanImg, link: 'https://siak.padangpariamankab.go.id/androids/' },
  { nama: 'Kabupaten Agam', imgSrc: agamImg, link: 'https://dukcapil.agamkab.go.id/' },
  { nama: 'Kabupaten Lima Puluh Kota', imgSrc: limaPuluhKotaImg, link: 'https://smartdukcapil.limapuluhkotakab.go.id/' },
  { nama: 'Kabupaten Dharmasraya', imgSrc: dharmasrayaImg, link: 'https://disdukcapil.dharmasrayakab.go.id/' },
  { nama: 'Kabupaten Solok Selatan', imgSrc: solselImg, link: 'http://disdukcapil.solselkab.go.id/' },
  { nama: 'Kabupaten Pasaman Barat', imgSrc: pasbarImg, link: 'https://www.disdukcapil.pasamanbaratkab.go.id/' },
  { nama: 'Kota Padang Panjang', imgSrc: padangPanjangImg, link: 'https://dukcapil.padangpanjang.go.id/' },
  { nama: 'Kota Bukittinggi', imgSrc: bukittinggiImg, link: 'https://dukcapil.bukittinggikota.go.id/' },
  { nama: 'Kota Payakumbuh', imgSrc: payakumbuhImg, link: 'https://disdukcapil.payakumbuhkota.go.id/' },
  { nama: 'Kota Pariaman', imgSrc: pariamanImg, link: 'http://dukcapildigi.pariamankota.go.id/' },
  { nama: 'Kabupaten Pasaman', imgSrc: pasamanImg, link: 'http://disdukcapil.pasamankab.go.id/' },
];

const ProfilKependudukan = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-blue-800 text-white py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url(${TbBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold uppercase tracking-wider drop-shadow-lg">
              Profil Kependudukan
            </h1>
            <div className="flex justify-center items-center text-sm mt-2">
              <Link to="/" className="flex items-center hover:text-blue-200 transition-colors">
                <FiHome className="mr-2" />
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span>Profil Kependudukan</span>
            </div>
          </div>
        </div>
        <a href="#scrollTo" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Content Section */}
      <section id="scrollTo" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {profilDaerah.map((profil, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gray-100 flex justify-center items-center h-52">
                  <img
                    src={profil.imgSrc}
                    alt={`Lambang ${profil.nama}`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/200x250.png?text=Gambar+Tidak+Tersedia';
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 h-14 flex items-center justify-center">
                    {profil.nama}
                  </h3>
                  <a
                    href={profil.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase px-6 py-2 rounded-md hover:bg-cyan-300 transition-all duration-200 shadow-md"
                  >
                    Kunjungi
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilKependudukan;