import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundElementsProps {
  theme: string;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({ theme }) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className={`border h-full ${
                theme === 'light' 
                  ? 'border-white/30' 
                  : 'border-blue-500/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3D Isometric Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-6 h-6 rounded-lg blur-sm ${
              theme === 'light'
                ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20'
                : 'bg-gradient-to-r from-blue-500/15 to-purple-500/15'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.3, 1],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke={theme === 'light' ? 'url(#gradientLight)' : 'url(#gradientDark)'}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f7931e" />
            </linearGradient>
            <linearGradient id="gradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Rotating AI Globe */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 opacity-15">
        <motion.div
          className={`w-full h-full rounded-full border-2 ${
            theme === 'light' 
              ? 'border-white/25' 
              : 'border-blue-400/20'
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className={`w-full h-full rounded-full border-2 border-dashed animate-pulse ${
            theme === 'light' 
              ? 'border-yellow-300/25' 
              : 'border-purple-400/20'
          }`}>
            <div className={`w-full h-full rounded-full ${
              theme === 'light'
                ? 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20'
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
            }`}>
              {/* Globe grid lines */}
              <div className="w-full h-full rounded-full relative overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-full border-t ${
                      theme === 'light' ? 'border-white/20' : 'border-blue-400/20'
                    }`}
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute h-full border-l ${
                      theme === 'light' ? 'border-white/20' : 'border-blue-400/20'
                    }`}
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating 3D Skill Cubes */}
      <div className="absolute inset-0">
        {['AI', 'ML', 'UI', 'UX', 'JS', 'PY'].map((skill, i) => (
          <motion.div
            key={skill}
            className={`absolute w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg ${
              theme === 'light'
                ? 'bg-gradient-to-r from-orange-500/80 to-red-500/80'
                : 'bg-gradient-to-r from-blue-600/80 to-purple-600/80'
            }`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundElements;