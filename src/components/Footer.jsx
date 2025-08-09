import React from 'react';
import logo from '../assets/Logos/logo.png';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter, 
  FaInstagram, FaLinkedinIn, FaYoutube, FaRss, 
  FaEye, FaChartBar, FaUserFriends
} from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const statistikData = [
  { icon: <FaEye className="text-green-300" />, label: "Online", value: 1 },
  { icon: <FaChartBar className="text-green-300" />, label: "Hits", value: "683.097" },
  { icon: <FaUserFriends className="text-green-300" />, label: "Pengunjung Hari Ini", value: 1 },
  { icon: <FaUserFriends className="text-green-300" />, label: "Total Semua Pengunjung", value: "244.348" },
];

const socialLinks = [
  { icon: <FaFacebookF size={18} />, url: "https://facebook.com" },
  { icon: <FaTwitter size={18} />, url: "https://twitter.com" },
  { icon: <FaInstagram size={18} />, url: "https://instagram.com" },
  { icon: <FaLinkedinIn size={18} />, url: "https://linkedin.com" },
  { icon: <FaYoutube size={18} />, url: "https://youtube.com" },
  { icon: <FaRss size={18} />, url: "#" },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-7xl mx-auto">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Logo and Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-x-4">
            <img src={logo} alt="Logo Disdukcapil" className="h-16 w-auto" />
          </div>
          
          <div className="space-y-4 text-emerald-100">
            <div className="flex items-start gap-x-3">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <span>
                Jl. Rasuna Said No.81, Rimbo Kaluang,<br />
                Kec. Padang Bar., Kota Padang,<br />
                Sumatera Barat
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <FaPhoneAlt />
              <span>+6221 525 3004</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Ikuti Kami</h3>
            <div className="flex items-center gap-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-500 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-cyan-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 pb-2 border-b border-emerald-700">Tautan Cepat</h3>
          <ul className="space-y-3 text-emerald-100">
            <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
            <li><Link to="/profil" className="hover:text-white transition-colors">Profil</Link></li>
            <li><Link to="/layanan" className="hover:text-white transition-colors">Layanan</Link></li>
            <li><Link to="/berita" className="hover:text-white transition-colors">Berita</Link></li>
            <li><Link to="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
          </ul>
        </div>

        {/* Visitor Statistics */}
        <div>
          <h3 className="font-bold text-lg mb-4 pb-2 border-b border-emerald-700">Statistik Pengunjung</h3>
          <ul className="space-y-4">
            {statistikData.map((item, idx) => (
              <li key={idx} className="flex items-center gap-x-3">
                <span className="bg-emerald-700 p-2 rounded-full">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-emerald-100">{item.label}</p>
                  <p className="font-bold text-white">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-4 border-t border-emerald-700 text-center">
        <p className="text-emerald-100 mt-1">
          Copyright © {new Date().getFullYear()} Diskominfotik Sumbar. All Rights Reserved.
        </p>
      </div>
    </div>

    {/* Back to Top Button */}
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-emerald-700 hover:bg-cyan-300 transition-colors duration-200 rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-50"
      aria-label="Kembali ke atas"
    >
      <FiArrowUp size={20} />
    </button>
  </footer>
);

export default Footer;