import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-white uppercase mb-8">
              ABOUT
            </h2>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
                A Legacy of <span className="text-gray-400">Distinction</span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  My journey began with curiosity about how machines can learn and adapt, 
                  which led me to explore the fascinating intersection of artificial intelligence 
                  and human-centered design.
                </p>
                
                <p>
                  Every project I undertake reflects a commitment to excellence, innovation, 
                  and the belief that technology should enhance human experiences rather than 
                  complicate them.
                </p>
              </div>
              
              {/* Traits Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="group cursor-pointer">
                  <div className="p-6 bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:-translate-y-1">
                    <h4 className="font-light text-white mb-2 tracking-[0.1em] uppercase">Innovative</h4>
                    <p className="text-sm text-gray-500">Exploring new frontiers</p>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="p-6 bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:-translate-y-1">
                    <h4 className="font-light text-white mb-2 tracking-[0.1em] uppercase">Curious</h4>
                    <p className="text-sm text-gray-500">Continuous learning</p>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="p-6 bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:-translate-y-1">
                    <h4 className="font-light text-white mb-2 tracking-[0.1em] uppercase">Detail-Oriented</h4>
                    <p className="text-sm text-gray-500">Precision in craft</p>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="p-6 bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:-translate-y-1">
                    <h4 className="font-light text-white mb-2 tracking-[0.1em] uppercase">Collaborative</h4>
                    <p className="text-sm text-gray-500">Team-focused approach</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative w-full h-96 group">
                <div className="absolute inset-0 bg-gray-900/30 border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-700"></div>
                <div className="absolute inset-4 bg-gray-800/20 border border-gray-700/30"></div>
                <div className="absolute inset-8 bg-gray-700/10 border border-gray-600/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/10 mx-auto"></div>
                    <p className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase">Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;