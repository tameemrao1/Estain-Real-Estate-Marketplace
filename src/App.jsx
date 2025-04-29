import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Properties from './Components/properties';
import Header from './Components/Header';
import Services from './Components/Services';
import Contact from './Components/Contact';
import CTAandFooter from './Components/cta-footer';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Components/Preloader';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#141414] text-white">
        <Preloader />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <CTAandFooter />
      </div>
    </Router>
  );
}

export default App;
