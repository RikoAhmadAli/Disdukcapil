import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logos/logo.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall, FiClock, FiChevronDown, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownItems = {
    'PPID': [
        { label: 'link PPID SUMBAR', href: 'https://ppid.sumbarprov.go.id/' },
        { label: 'Tentang PPID', href: 'https://ppid.sumbarprov.go.id/tentang' },
        { label: 'Tugas & Fungsi PPID', href: 'https://ppid.sumbarprov.go.id/tugas-fungsi' },
        { label: 'Visi & Misi PPID', href: 'https://ppid.sumbarprov.go.id/visi-misi' },
        { label: 'Struktur Organisasi PPID', href: 'https://ppid.sumbarprov.go.id/struktur-organisasi' },
        { label: 'Permohonan Informasi', to: '/ppid/permohonan-informasi' },
    ],
    'Layanan': [
        { label: 'Standar layanan', to: '/standar_layanan' },
        { label: 'Maklumat layanan', to: '/maklumat_layanan' },
        { label: 'Pengelolaan pengaduan', to: '/pengelolaan_pengaduan' },
        { label: 'Survei kepuasan masyarakat', to: '/survei_kepuasan' },
    ],
    'Informasi': [
        { label: 'Buku Pedoman', to: '/buku-pedoman' },
        { label: 'Sibuk Data (sistem inovasi buku data dukcapil)', to: '/sibuk-data' },
        { label: 'Berita', to: '/berita' },
        { label: 'Dukcapil Belajar', to: '/dukcapil-belajar' },
        { label: 'Laporan', to: '/laporan' },
        { label: 'Tata Cara', to: '/tata-cara' },
        { label: 'Inovasi', to: '/inovasi' },
        { label: 'Data Data', to: '/data-data' },
        { label: 'Pelayanan Publik', to: '/pelayanan-publik' },
        { label: 'Peraturan/ Kebijakan/ Keputusan', to: '/peraturan' },
        { label: 'Perencanaan', to: '/perencanaan' },
        { label: 'Surat Keputusan', to: '/surat-keputusan' },
    ],
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
    const [isTopBarVisible, setIsTopBarVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > 50 && window.scrollY > lastScrollY) {
                setIsTopBarVisible(false);
            } else if (window.scrollY < 50) {
                setIsTopBarVisible(true);
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', to: '/' },
        { name: 'Profil', to: '/profil' },
        { name: 'PPID', hasDropdown: true },
        { name: 'Informasi', hasDropdown: true },
        { name: 'Disdukcapil kab/kota', to: '/profilkependudukan' },
        { name: 'Layanan', hasDropdown: true },
        { name: 'Galeri', to: '/galeri' },
        { name: 'F.A.Q', to: '/faq' },
        { name: 'SOP', to: '/sop' },
        { name: 'Lapor', href: 'https://lapor.go.id/' },
        { name: 'Hubungi Kami', to: '/kontak' },
    ];

    const renderLink = (item, className = "") => {
        if (item.href) {
            return <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{item.label}</a>;
        }
        return <Link to={item.to || '#'} className={className} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>;
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-80% bg-gray-900 shadow-md sticky top-0 z-50"
        >
            <AnimatePresence>
                {isTopBarVisible && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white text-black text-sm overflow-hidden"
                    >
                        <div className="container mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">
                            <div className="flex items-center gap-x-6">
                                <a href="#" className="hover:text-cyan-300"><FaFacebookF /></a>
                                <a href="#" className="hover:text-cyan-300"><FaTwitter /></a>
                                <a href="#" className="hover:text-cyan-300"><FaYoutube /></a>
                                <a href="#" className="hover:text-cyan-300"><FaInstagram /></a>
                            </div>
                            <div className="hidden md:flex items-center gap-x-6">
                                <div className="flex items-center gap-x-2"><FiPhoneCall /><span>+62 811 6617 222</span></div>
                                <div className=" text-orange-600 flex items-center gap-x-2"><FiClock /><span>Senin - Jumat 08:00 - 16:30</span></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className="container mx-auto px-4 lg:px-6 py-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-4">
                        <motion.img
                            src={logo}
                            alt="Logo"
                            className="h-15 w-auto"
                        />
                        {/* <div className="flex flex-col leading-tight">
                            <span className="text-orange-500 text-xl font-extrabold uppercase">
                                DINAS KEPENDUDUKAN<br />DAN PENCATATAN SIPIL
                            </span>
                            <span className="text-white text-sm font-bold uppercase tracking-wide">
                                PROVINSI SUMATERA BARAT
                            </span>
                        </div> */}
                    </Link>

                    <div className="hidden lg:flex items-center gap-x-4 text-emerald-500 font-semibold">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                {link.href ? (
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1 hover:text-cyan-300 transition-colors">
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link to={link.to || '#'} className="flex items-center gap-x-1 hover:text-cyan-300 transition-colors">
                                        {link.name}
                                        {link.hasDropdown && <FiChevronDown size={16} />}
                                    </Link>
                                )}
                                <AnimatePresence>
                                    {link.hasDropdown && openDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 rounded shadow-lg z-20"
                                        >
                                            <ul>{dropdownItems[link.name]?.map((item) => <li key={item.label}>{renderLink(item, "block px-4 py-2 hover:bg-green-100 transition-colors")}</li>)}</ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                        <button className="hover:text-cyan-300 transition-colors"><FiSearch size={20} /></button>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none"><FiMenu size={24} /></button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 z-40 backdrop-blur-sm" /* Added backdrop-blur-sm here */
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col"
                        >
                            <div className="p-4 flex justify-between items-center border-b">
                                <span className="font-semibold">Menu</span>
                                <button onClick={() => setIsMenuOpen(false)}><FiX size={24} /></button>
                            </div>
                            <ul className="flex-grow p-4 space-y-2 overflow-y-auto">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setOpenDropdownMobile(openDropdownMobile === link.name ? null : link.name)}
                                                    className="flex justify-between items-center w-full text-gray-800 font-semibold py-2"
                                                >
                                                    <span>{link.name}</span>
                                                    <FiChevronDown
                                                        className={`transition-transform duration-200 ${openDropdownMobile === link.name ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {openDropdownMobile === link.name && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="pl-4 mt-2 border-l border-green-200 overflow-hidden"
                                                        >
                                                            {dropdownItems[link.name]?.map((item) => (
                                                                <li key={item.label} className="py-1">
                                                                    {renderLink(item, "block text-gray-700 hover:text-green-700 transition-colors")}
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            link.href ? (
                                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="block text-gray-800 font-semibold py-2 hover:text-green-700">
                                                        {link.name}
                                                        </a>
                                            ) : (
                                                <Link to={link.to} onClick={() => setIsMenuOpen(false)} className="block text-gray-800 font-semibold py-2 hover:text-green-700">
                                                    {link.name}
                                                </Link>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 border-t">
                                <div className="relative">
                                    <input type="text" placeholder="Cari..." className="w-full pl-4 pr-10 py-2 border rounded-md" />
                                    <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;