import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Bot, Cloud, Palette } from 'lucide-react';

interface SkillsProps {
  theme: string;
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'AI/ML',
      icon: <Bot className="w-6 h-6" />,
      color: theme === 'light' ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'GenAI', level: 85 },
        { name: 'LangChain', level: 80 },
        { name: 'OpenCV', level: 85 },
      ],
    },
    {
      title: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: theme === 'light' ? 'from-orange-400 to-red-500' : 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
      ],
    },
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: theme === 'light' ? 'from-red-400 to-pink-500' : 'from-green-500 to-teal-500',
      skills: [
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind', level: 90 },
        { name: 'Streamlit', level: 80 },
      ],
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      color: theme === 'light' ? 'from-pink-400 to-purple-500' : 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'UI/UX', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'Prototyping', level: 88 },
        { name: 'User Research', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
          }`}>03</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-futuristic ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            Skills
          </h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          }`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`rounded-2xl p-8 isometric-card ${
                theme === 'light' ? 'matte-card' : 'matte-card-dark'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold font-futuristic ${
                  theme === 'light' ? 'text-white' : 'text-white'
                }`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        theme === 'light' ? 'text-white' : 'text-gray-300'
                      }`}>{skill.name}</span>
                      <span className={`text-sm ${
                        theme === 'light' ? 'text-white/80' : 'text-gray-400'
                      }`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-3 ${
                      theme === 'light' ? 'bg-white/20' : 'bg-gray-800'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                        className={`h-3 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        style={{
                          boxShadow: theme === 'light' 
                            ? '0 0 10px rgba(255, 255, 255, 0.5)' 
                            : '0 0 10px rgba(59, 130, 246, 0.5)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;