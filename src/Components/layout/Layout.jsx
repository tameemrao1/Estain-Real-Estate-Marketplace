import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Preloader from '../common/Preloader';

const Layout = ({ children }) => {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-[#141414] text-white">
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 