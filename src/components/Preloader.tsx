import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-8"
        >
          <Zap className="w-32 h-32 text-white mx-auto lightning-animate" />
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-white opacity-30 blur-xl rounded-full"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold text-white mb-4 font-futuristic"
        >
          KULDEEP
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white text-xl font-light"
        >
          Loading intelligence...
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="w-64 h-2 bg-white rounded-full mx-auto mt-8 shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;