import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      id: 1,
      year: "2024",
      title: "Front-End UI/UX Certification",
      issuer: "Professional Institute",
      description: "Comprehensive certification covering modern UI/UX design principles, user research methodologies, and advanced front-end development techniques."
    },
    {
      id: 2,
      year: "2024",
      title: "AI & ML Fundamentals",
      issuer: "Tech Academy",
      description: "Deep dive into artificial intelligence and machine learning concepts, covering algorithms, neural networks, and practical implementation strategies."
    }
  ];

  return (
    <section id="certificates" className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-white uppercase mb-8">
              EXHIBITIONS
            </h2>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          <div className="space-y-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="group cursor-pointer">
                <div className="grid md:grid-cols-4 gap-8 items-start p-8 border-l border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/20">
                  {/* Year */}
                  <div className="text-left">
                    <div className="text-sm font-light text-gray-500 tracking-[0.2em] uppercase mb-2">
                      Exhibitions
                    </div>
                    <div className="text-3xl font-light text-white tracking-wider">
                      {cert.year}
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="md:col-span-2 space-y-3">
                    <h3 className="text-2xl font-light text-white group-hover:text-gray-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-gray-400 font-light tracking-wide">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Action */}
                  <div className="text-left md:text-right">
                    <div className="inline-flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-light tracking-[0.2em] uppercase">View</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;