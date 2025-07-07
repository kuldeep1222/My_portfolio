import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Architectural Background Image Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 flex items-center justify-center">
            <div className="w-80 h-96 bg-gray-700/30 transform -rotate-12 rounded-lg shadow-2xl"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/90"></div>
      </div>
      
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <div className="space-y-16 animate-fade-in">
          {/* Main Title - Replacing "AWARDS" with "KULDEEP" */}
          <div className="space-y-8">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light text-white leading-none tracking-[0.1em]">
              KULDEEP
            </h1>
            
            <div className="w-32 h-px bg-white mx-auto"></div>
          </div>

          {/* Subtitle - Replacing "A LEGACY OF DISTINCTION" */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 tracking-[0.2em] uppercase">
              A Legacy of Innovation
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              We are proud to showcase the recognition we've earned for our dedication, innovation, and excellence in AI/ML engineering and UI/UX design.
            </p>
            
            <div className="pt-8">
              <button className="group px-8 py-4 border border-white/30 text-white font-light tracking-[0.2em] hover:bg-white/10 transition-all duration-500 uppercase">
                <span className="relative z-10 flex items-center gap-3">
                  Our Gallery
                  <ArrowDown className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Role Title */}
          <div className="pt-16">
            <p className="text-sm md:text-base font-light tracking-[0.3em] text-gray-400 uppercase">
              AI/ML Engineer & UI/UX Designer
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;