import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gray-800/50"></div>
            
            <div className="bg-gray-900/30 border border-gray-800/50 p-12 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white flex items-center justify-center">
                <Award className="h-6 w-6 text-black" />
              </div>
              
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] text-white uppercase">
                  Current Experience
                </h2>
                
                <div className="w-24 h-px bg-white mx-auto"></div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light tracking-[0.1em] uppercase">LinuxWorld Internship</h3>
                    
                    <div className="flex items-center justify-center gap-8 text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span className="tracking-wide">Jaipur, India</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="tracking-wide">Current</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
                      Currently interning at LinuxWorld, Jaipur, where I work on cutting-edge DevOps and AI integrations. 
                      This role allows me to blend my passion for artificial intelligence with practical DevOps solutions, 
                      creating innovative systems that bridge the gap between development and operations.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-light text-white tracking-wider">AI/ML</div>
                    <div className="text-sm text-gray-500 tracking-[0.2em] uppercase">Integration Projects</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-light text-white tracking-wider">DevOps</div>
                    <div className="text-sm text-gray-500 tracking-[0.2em] uppercase">Automation Solutions</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-light text-white tracking-wider">Innovation</div>
                    <div className="text-sm text-gray-500 tracking-[0.2em] uppercase">Cutting-edge Tech</div>
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

export default Experience;