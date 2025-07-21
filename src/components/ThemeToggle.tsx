import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
        theme === 'light'
          ? 'bg-white/20 hover:bg-white/30 text-white border-2 border-white/30'
          : 'bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-600'
      }`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;