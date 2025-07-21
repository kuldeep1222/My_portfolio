import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  theme: string;
}

const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`text-lg font-mono font-semibold ${
            theme === 'light' ? 'text-yellow-200' : 'text-blue-400'
          }`}>04</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-futuristic ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            Experience
          </h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          }`}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`rounded-2xl p-8 relative isometric-card ${
            theme === 'light' ? 'matte-card' : 'matte-card-dark'
          }`}>
            <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-500'
            }`}>
              <Building className="w-4 h-4 text-white" />
            </div>
            
            <div className="ml-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className={`text-2xl font-bold font-futuristic ${
                  theme === 'light' ? 'text-white' : 'text-white'
                }`}>AI & DevOps Intern</h3>
                <div className={`flex items-center space-x-4 ${
                  theme === 'light' ? 'text-white/80' : 'text-gray-400'
                }`}>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Jaipur, India</span>
                  </div>
                </div>
              </div>
              
              <h4 className={`text-xl mb-4 font-futuristic ${
                theme === 'light' ? 'text-yellow-200' : 'text-blue-400'
              }`}>LinuxWorld Informatics Pvt Ltd</h4>
              
              <div className="space-y-4">
                <p className={`leading-relaxed ${
                  theme === 'light' ? 'text-white/90' : 'text-gray-300'
                }`}>
                  Currently working on cutting-edge AI and DevOps integrations, focusing on 
                  automating deployment pipelines and implementing intelligent monitoring solutions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className={`text-lg font-semibold font-futuristic ${
                      theme === 'light' ? 'text-orange-200' : 'text-purple-400'
                    }`}>Key Responsibilities</h5>
                    <ul className={`space-y-1 ${
                      theme === 'light' ? 'text-white/80' : 'text-gray-400'
                    }`}>
                      <li>• Developing AI-powered automation tools</li>
                      <li>• Implementing CI/CD pipelines</li>
                      <li>• Container orchestration with Docker</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className={`text-lg font-semibold font-futuristic ${
                      theme === 'light' ? 'text-red-200' : 'text-green-400'
                    }`}>Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Docker', 'Jenkins', 'Kubernetes', 'AWS', 'TensorFlow'].map((tech) => (
                        <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${
                          theme === 'light'
                            ? 'bg-white/20 text-white border-white/30'
                            : 'bg-gray-800 text-gray-300 border-gray-700'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;