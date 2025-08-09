import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityMenu from './components/AccessibilityMenu';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <AccessibilityMenu />
      <main className="flex-grow *:z-50">
        <Outlet /> {/* Di sinilah konten halaman akan ditampilkan */}
      </main>
      <Footer />
    </div>
  );
}

export default App;