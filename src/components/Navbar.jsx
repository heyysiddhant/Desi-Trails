import { useState } from 'react';
import { FaBars, FaGoogle } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'About' },
    { name: 'Locations', id: 'Locations' },
    { name: 'Tours', id: 'Tours' },
    { name: 'Offers', id: 'Offers' },
    { name: 'Blog', id: 'Blog' },
    { name: 'Testimonials', id: 'Testimonials' },
    { name: 'FAQ', id: 'FAQ' },
    { name: 'Map', id: 'map' },
    { name: 'Photogallery', id: 'Photogallery' },
    { name: 'Contact', id: 'Contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="flex justify-between items-center px-5 py-4 bg-white dark:bg-gray-900 dark:text-white shadow-md fixed w-full z-20">
        {/* Logo */}
        <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <a href="#">Desi Trails</a>
        </h4>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm hover:from-blue-600 hover:to-indigo-600 transition"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-2xl dark:text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col items-start bg-white dark:bg-gray-900 shadow-md fixed top-16 left-0 w-full md:hidden p-5 gap-4 z-10 text-sm font-medium">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 w-80 animate-fade-in relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 text-2xl"
              onClick={() => setShowLoginModal(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Login to Desi Trails</h2>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="mx-2 text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>

            <button className="w-full flex items-center justify-center gap-3 border py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FaGoogle className="text-red-500 text-lg" />
              <span className="text-gray-700 dark:text-white">Login with Google</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;