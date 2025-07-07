import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-black text-white min-h-screen relative overflow-hidden">
        {/* Architectural Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Main architectural shapes inspired by the reference */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-gray-800/20 to-gray-900/30 transform -skew-x-12 origin-top-left"></div>
          <div className="absolute top-1/4 right-0 w-1/4 h-3/4 bg-gradient-to-bl from-gray-700/15 to-gray-800/25 transform skew-y-6"></div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-tr from-gray-900/25 to-gray-800/20 transform -skew-x-6"></div>
          
          {/* Geometric accent elements */}
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gray-600/5 transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gray-500/10 rounded-full"></div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/3 to-gray-800/5"></div>
          
          {/* Additional architectural elements */}
          <div className="absolute top-1/2 left-0 w-16 h-64 bg-gray-700/10 transform -rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-gray-600/20 transform rotate-45"></div>
        </div>

        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        
        <AIAssistant />
      </div>
    </div>
  );
}

export default App;