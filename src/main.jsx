import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/Profile'; 
import ContactPage from './pages/Contact';
import SOP from './pages/SOP.jsx';
import FAQ from './pages/FAQ.jsx';
import Galeri from './pages/Galeri.jsx';
import ProfileKependudukan from './pages/ProfilKependudukan';
{/*Iformasi*/}

import Berita from './Informasi/Berita.jsx';
import Laporan from './Informasi/Laporan.jsx';
{/*Layanan */}
import Maklumat_layanan from './Layanan/maklumat_layanan.jsx';
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "profil", element: <ProfilePage /> },
        { path: "kontak", element: <ContactPage /> },
        { path: "profilkependudukan", element: <ProfileKependudukan /> },
        { path: "sop", element: <SOP /> },
        { path: "faq", element: <FAQ /> },
        { path: "galeri", element: <Galeri /> },
        { path: "berita", element: <Berita /> },
        { path: "laporan", element: <Laporan /> },
        { path: "maklumat_layanan", element: <Maklumat_layanan /> },
        { path: "*", element: <h1>Halaman tidak ditemukan</h1> } // fallback
      ],
    },
  ],
  {
    basename: "/Disdukcapil", // penting untuk GitHub Pages
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);