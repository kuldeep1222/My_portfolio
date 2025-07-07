import React from 'react';
import { Zap } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <Zap className="h-20 w-20 text-white animate-pulse mx-auto" />
          <div className="absolute inset-0 bg-white/20 blur-xl animate-ping"></div>
          <div className="absolute inset-0 bg-gray-400/20 blur-2xl animate-ping delay-1000"></div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-light text-white tracking-[0.2em] uppercase animate-fade-in">
            KULDEEP
          </h2>
          <p className="text-gray-400 font-light tracking-[0.2em] animate-fade-in-delay uppercase">
            Loading extraordinary experiences...
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-white animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-white animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;