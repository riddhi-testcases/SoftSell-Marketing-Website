import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                SoftSell
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium"
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="btn btn-primary py-2 px-4"
            >
              Get Started
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-slideInRight">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a
              href="#how-it-works"
              className="block py-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="block py-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block w-full btn btn-primary py-2 px-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;