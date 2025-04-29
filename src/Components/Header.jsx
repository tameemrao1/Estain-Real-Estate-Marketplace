import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavButton from './NavButton';
import logo from '../assets/Images/logo.png';
import menuIcon from '../assets/Images/menu-icon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname === '/' ? 'Home' : location.pathname.slice(1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <header className="w-full z-50 top-0 left-0 border-b-2 border-red-100">
      <div className="relative">
        {/* Top Banner */}
        {showBanner && (
          <div className="bg-[url(./assets/images/one.png)] bg-[#1A1A1A] py-2 px-4 text-center relative">
            <p className="text-white text-sm">
              ✨ Discover Your Dream Property with Estatein
              <span className="ml-2 text-[#fff] cursor-pointer transition-colors duration-300">
                Learn More
              </span>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="bg-[#1A1A1A] py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Estatein Logo" className="w-8 h-8 object-contain" />
              <span className="text-white text-xl font-semibold">Estatein</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { text: "Home", path: "/" },
                { text: "Properties", path: "/properties" },
                { text: "Services", path: "/services" },
                { text: "About Us", path: "/about" }
              ].map((item) => (
                <Link key={item.text} to={item.path}>
                  <NavButton
                    text={item.text}
                    isActive={currentPath.toLowerCase() === (item.text === "Home" ? "home" : item.text.toLowerCase().replace(" ", ""))}
                  />
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block">
              <button 
                onClick={handleContactClick}
                className="bg-[#A685FA] hover:bg-[#8B6CD9] text-white px-6 py-2 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              <img
                src={menuIcon}
                alt="Menu"
                className={`scale-100 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-white transition-colors duration-300 focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                <div className="flex items-center space-x-2 mb-12">
                  <img src={logo} alt="Estatein Logo" className="w-10 h-10 object-contain" />
                  <span className="text-white text-2xl font-semibold">Estatein</span>
                </div>
                <Link
                  to="/"
                  className="text-white text-2xl hover:text-[#A685FA] transition-colors duration-300 w-full text-center py-3 border-b border-gray-800"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/properties"
                  className="text-white text-2xl hover:text-[#A685FA] transition-colors duration-300 w-full text-center py-3 border-b border-gray-800"
                  onClick={toggleMenu}
                >
                  Properties
                </Link>
                <Link
                  to="/services"
                  className="text-white text-2xl hover:text-[#A685FA] transition-colors duration-300 w-full text-center py-3 border-b border-gray-800"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-white text-2xl hover:text-[#A685FA] transition-colors duration-300 w-full text-center py-3 border-b border-gray-800"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <button
                  onClick={handleContactClick}
                  className="bg-[#A685FA] hover:bg-[#8B6CD9] text-xl text-white px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg w-full text-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;