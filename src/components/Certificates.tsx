import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

interface CertificatesProps {
  theme: string;
}

const Certificates: React.FC<CertificatesProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'UI/UX Design Certification',
      issuer: 'L&T Edutech',
      date: '2024',
      description: 'Comprehensive certification covering user research, design systems, and prototyping',
      color: theme === 'light' ? 'from-orange-400 to-red-500' : 'from-purple-500 to-pink-500',
      link: 'https://iggnitewebcertification.lntedutech.com/?certificationID=wv9rwj_twst8ehi_963698194740697&name=KULDEEP%20.&course=Front-End%20UI-UX%20Development',
    },
    {
      title: 'AI/ML Fundamentals',
      issuer: 'Skillsoft',
      date: '2024',
      description: 'Advanced certification in machine learning algorithms and artificial intelligence',
      color: theme === 'light' ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-cyan-500',
      link: 'https://skillsoft.digitalbadges.skillsoft.com/b290c81e-0b3c-4db1-a5e0-6201ae689dbf#acc.OjlWgIZR',
    },
    {
      title: 'Advanced JavaScript Framework-REACT',
      issuer: 'L&T Edutech',
      date: '2024',
      description: 'Certification in advanced React.js concepts, including hooks, state management, and performance optimization. Demonstrates expertise in building scalable and maintainable web applications using modern JavaScript frameworks.',
      color: theme === 'light' ? 'from-blue-400 to-green-500' : 'from-cyan-500 to-blue-700',
      link: 'https://iggnitewebcertification.lntedutech.com/?certificationID=wv9rwj_Iws5o6BE_408078911137764&name=KULDEEP%20.&course=Advanced%20JavaScript%20Framework-REACT',
    },
  ];

  return (
    <section className="py-20 relative">
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
          }`}>05</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-futuristic ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            Certificates
          </h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          }`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`rounded-2xl p-8 hover:scale-105 transition-all duration-300 isometric-card ${
                theme === 'light' ? 'matte-card subtle-hover' : 'matte-card-dark subtle-hover'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white shadow-lg`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold font-futuristic ${
                    theme === 'light' ? 'text-white' : 'text-white'
                  }`}>{cert.title}</h3>
                  <p className={theme === 'light' ? 'text-white/80' : 'text-gray-400'}>{cert.issuer} • {cert.date}</p>
                </div>
              </div>

              <p className={`mb-6 leading-relaxed ${
                theme === 'light' ? 'text-white/90' : 'text-gray-300'
              }`}>
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white text-orange-600 hover:bg-yellow-50 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Certificate</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;