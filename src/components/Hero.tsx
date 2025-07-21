import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Zap } from 'lucide-react';

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={theme === 'light' ? 'particle-light' : 'particle-dark'}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Isometric Cubes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-16 cube-3d ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            } opacity-20 rounded-lg`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className={`text-lg font-mono tracking-wide font-semibold ${
            theme === 'light' ? 'text-yellow-100' : 'text-blue-400'
          }`}>
            AI/ML Engineer & UI/UX Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-futuristic"
        >
          <span className={`lightning-animate ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            KULDEEP
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light ${
            theme === 'light' ? 'text-white' : 'text-gray-300'
          }`}
        >
          Turning ideas into{' '}
          <span className={`font-semibold ${
            theme === 'light' ? 'text-yellow-200' : 'text-blue-400'
          }`}>intelligent</span> and{' '}
          <span className={`font-semibold ${
            theme === 'light' ? 'text-orange-200' : 'text-purple-400'
          }`}>intuitive</span> experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-white text-orange-600 hover:bg-yellow-50 shadow-lg hover:shadow-xl' 
                : 'btn-vibrant neon-orange'
            }`}
          >
            <span>Explore My Work</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 ${
              theme === 'light' 
                ? 'glass-light border-2 border-white text-white hover:bg-white hover:text-orange-600' 
                : 'glass-dark border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
            }`}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === 'light' ? 'border-white' : 'border-blue-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
              theme === 'light' ? 'bg-white' : 'bg-blue-400'
            }`}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;