import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Lightbulb, Eye, Users } from 'lucide-react';

interface AboutProps {
  theme: string;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const traits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovative',
      description: 'Always pushing boundaries with cutting-edge AI solutions',
      color: theme === 'light' ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Curious',
      description: 'Constantly learning and exploring new technologies',
      color: theme === 'light' ? 'from-orange-400 to-red-500' : 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Detail-Oriented',
      description: 'Focused on creating pixel-perfect, user-centric designs',
      color: theme === 'light' ? 'from-red-400 to-pink-500' : 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative',
      description: 'Thriving in team environments and cross-functional projects',
      color: theme === 'light' ? 'from-pink-400 to-purple-500' : 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
          }`}>01</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-futuristic ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          }`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className={`rounded-2xl p-8 isometric-card ${
              theme === 'light' ? 'matte-card' : 'matte-card-dark'
            }`}>
              <blockquote className={`text-2xl md:text-3xl font-light mb-6 italic font-futuristic ${
                theme === 'light' ? 'text-white' : 'text-gray-300'
              }`}>
                "I don't just build interfaces; I create intelligent, innovative experiences."
              </blockquote>
              <p className={`text-lg leading-relaxed ${
                theme === 'light' ? 'text-white/90' : 'text-gray-400'
              }`}>
                As an AI/ML Engineer and UI/UX Designer, I bridge the gap between 
                cutting-edge technology and human-centered design. My passion lies in 
                creating intelligent systems that not only solve complex problems but 
                also provide intuitive and delightful user experiences.
              </p>
            </div>

            <div className={`rounded-2xl p-8 isometric-card ${
              theme === 'light' ? 'matte-card' : 'matte-card-dark'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 font-futuristic ${
                theme === 'light' ? 'text-yellow-200' : 'text-blue-400'
              }`}>What I'm Learning Now</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'light' ? 'bg-yellow-300' : 'bg-blue-400'
                  }`}></div>
                  <span className={theme === 'light' ? 'text-white' : 'text-gray-300'}>GenAI & LangChain RAG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'light' ? 'bg-orange-300' : 'bg-purple-400'
                  }`}></div>
                  <span className={theme === 'light' ? 'text-white' : 'text-gray-300'}>Cloud Computing & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'light' ? 'bg-red-300' : 'bg-green-400'
                  }`}></div>
                  <span className={theme === 'light' ? 'text-white' : 'text-gray-300'}>Unity 3D for AI Games</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className={`rounded-xl p-6 hover:scale-105 transition-transform duration-300 isometric-card floating-3d ${
                  theme === 'light' ? 'matte-card subtle-hover' : 'matte-card-dark subtle-hover'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${trait.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                  {trait.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 font-futuristic ${
                  theme === 'light' ? 'text-white' : 'text-white'
                }`}>{trait.title}</h3>
                <p className={`text-sm ${
                  theme === 'light' ? 'text-white/80' : 'text-gray-400'
                }`}>{trait.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;