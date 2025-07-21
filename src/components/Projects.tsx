import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Zap } from 'lucide-react';

interface ProjectsProps {
  theme: string;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Face Swap App',
      subtitle: 'Real-time CV Application',
      description: 'Advanced face swapping application using CVZone and OpenCV for real-time face detection and replacement.',
      problem: 'Need for real-time face manipulation in video streams',
      solution: 'Implemented using computer vision algorithms with optimized performance',
      tools: ['Python', 'OpenCV', 'CVZone', 'MediaPipe'],
      learnings: 'Advanced computer vision techniques and real-time processing optimization',
      color: theme === 'light' ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-cyan-500',
      icon: <Code className="w-6 h-6" />, 
      codeUrl: 'https://github.com/kuldeep1222/cvzone_AI_faceswapping.git',
    },
    {
      title: 'Auto Jenkins Docker',
      subtitle: 'DevOps Automation',
      description: 'Automated Jenkins container deployment with startup messaging and GitHub integration.',
      problem: 'Manual Jenkins setup and configuration overhead',
      solution: 'Dockerized Jenkins with automated startup and CI/CD pipeline integration',
      tools: ['Docker', 'Jenkins', 'GitHub', 'CI/CD'],
      learnings: 'Container orchestration and automated deployment strategies',
      color: theme === 'light' ? 'from-orange-400 to-red-500' : 'from-purple-500 to-pink-500',
      icon: <Zap className="w-6 h-6" />, 
      codeUrl: 'https://github.com/kuldeep1222/JENKINS_CONFIGURED_IMAGE.git',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
          }`}>02</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-futuristic ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            Projects
          </h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          }`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`rounded-2xl p-8 hover:scale-105 transition-all duration-300 isometric-card ${
                theme === 'light' ? 'matte-card subtle-hover' : 'matte-card-dark subtle-hover'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg`}>
                  {project.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold font-futuristic ${
                    theme === 'light' ? 'text-white' : 'text-white'
                  }`}>{project.title}</h3>
                  <p className={theme === 'light' ? 'text-white/80' : 'text-gray-400'}>{project.subtitle}</p>
                </div>
              </div>

              <p className={`mb-6 leading-relaxed ${
                theme === 'light' ? 'text-white/90' : 'text-gray-300'
              }`}>
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-2 font-futuristic ${
                    theme === 'light' ? 'text-yellow-200' : 'text-blue-400'
                  }`}>Problem</h4>
                  <p className={`text-sm ${
                    theme === 'light' ? 'text-white/80' : 'text-gray-400'
                  }`}>{project.problem}</p>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 font-futuristic ${
                    theme === 'light' ? 'text-orange-200' : 'text-purple-400'
                  }`}>Solution</h4>
                  <p className={`text-sm ${
                    theme === 'light' ? 'text-white/80' : 'text-gray-400'
                  }`}>{project.solution}</p>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 font-futuristic ${
                    theme === 'light' ? 'text-red-200' : 'text-green-400'
                  }`}>Key Learnings</h4>
                  <p className={`text-sm ${
                    theme === 'light' ? 'text-white/80' : 'text-gray-400'
                  }`}>{project.learnings}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 font-futuristic ${
                  theme === 'light' ? 'text-pink-200' : 'text-yellow-400'
                }`}>Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        theme === 'light'
                          ? 'bg-white/20 text-white border-white/30'
                          : 'bg-gray-800 text-gray-300 border-gray-700'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                  theme === 'light'
                    ? 'bg-white text-orange-600 hover:bg-yellow-50'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}>
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;