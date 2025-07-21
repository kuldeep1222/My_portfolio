import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import Preloader from './components/Preloader';
import ThemeToggle from './components/ThemeToggle';
import BackgroundElements from './components/BackgroundElements';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`min-h-screen relative overflow-x-hidden transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-500' 
          : 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'
      } ${theme === 'light' ? 'text-white' : 'text-white'}`}>
        <BackgroundElements theme={theme} />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Header theme={theme} />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <Hero theme={theme} />
              <About theme={theme} />
              <Projects theme={theme} />
              <Skills theme={theme} />
              <Experience theme={theme} />
              <Certificates theme={theme} />
              <Contact theme={theme} />
              <AIAssistant theme={theme} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;