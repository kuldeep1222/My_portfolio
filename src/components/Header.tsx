import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'light' 
            ? 'matte-card backdrop-blur-sm' 
            : 'matte-card-dark backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <Zap className={`w-8 h-8 lightning-animate ${
                theme === 'light' ? 'text-white' : 'text-blue-400'
              }`} />
              <div className={`absolute inset-0 opacity-50 blur-sm animate-pulse ${
                theme === 'light' ? 'bg-white' : 'bg-blue-400'
              }`}></div>
            </div>
            <span className={`text-2xl font-bold font-futuristic ${
              theme === 'light' ? 'text-white' : 'gradient-text-dark'
            }`}>
              KULDEEP
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`font-medium transition-colors duration-300 relative group ${
                  theme === 'light' 
                    ? 'text-white hover:text-yellow-200' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  theme === 'light' ? 'bg-yellow-200' : 'bg-blue-400'
                }`}></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              theme === 'light' 
                ? 'text-white hover:text-yellow-200' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-4 rounded-lg p-4 ${
              theme === 'light' ? 'matte-card' : 'matte-card-dark'
            }`}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`block py-2 font-medium transition-colors duration-300 ${
                  theme === 'light' 
                    ? 'text-white hover:text-yellow-200' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;