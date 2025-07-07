import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Face Swap with CVZone",
      subtitle: "Real-time Computer Vision Application",
      description: "Advanced face swapping application utilizing OpenCV and CVZone for seamless real-time face detection and replacement with high accuracy and performance.",
      problem: "Traditional face swapping solutions required complex setup, lacked real-time capabilities, and often produced unrealistic results with poor edge detection.",
      solution: "Developed an intuitive application leveraging CVZone's advanced computer vision algorithms, implementing real-time processing with optimized performance and natural-looking results.",
      tools: ["Python", "OpenCV", "CVZone", "Computer Vision", "NumPy"],
      learnings: [
        "Advanced computer vision techniques and facial landmark detection",
        "Real-time image processing optimization and performance tuning",
        "CVZone framework mastery and integration patterns"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024"
    },
    {
      id: 2,
      title: "Automated Jenkins Docker Image",
      subtitle: "DevOps Automation Solution",
      description: "Sophisticated Docker containerization solution that automatically launches Jenkins with pre-configured initialization scripts and seamless GitHub integration for streamlined CI/CD workflows.",
      problem: "Manual Jenkins setup was time-consuming, error-prone, and inconsistent across different environments, leading to deployment delays and configuration drift.",
      solution: "Created an automated Dockerfile with intelligent initialization scripts, pre-configured plugins, and GitHub integration, reducing setup time from hours to minutes.",
      tools: ["Docker", "Jenkins", "GitHub", "DevOps", "Shell Scripting"],
      learnings: [
        "Advanced Docker containerization and multi-stage builds",
        "Jenkins automation and plugin management strategies",
        "CI/CD pipeline optimization and best practices"
      ],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024"
    }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title - Matching "ACHIEVEMENT" style */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-white uppercase mb-8">
              ACHIEVEMENT
            </h2>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          {/* Projects List - Matching the awards/exhibitions style */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="grid lg:grid-cols-4 gap-8 items-start group cursor-pointer hover:bg-gray-900/20 transition-all duration-500 p-8 border-l border-gray-800/50 hover:border-gray-700/50"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Year */}
                <div className="text-left">
                  <div className="text-sm font-light text-gray-500 tracking-[0.2em] uppercase mb-2">
                    Award
                  </div>
                  <div className="text-3xl font-light text-white tracking-wider">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:col-span-2 space-y-3">
                  <h3 className="text-2xl font-light text-white group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 font-light tracking-wide">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Action */}
                <div className="text-left lg:text-right">
                  <div className="inline-flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-light tracking-[0.2em] uppercase">View Case Study</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-32 pt-16 border-t border-gray-800/50">
            <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
              Our artistic journey is one defined by creativity. Over the years, our works have been celebrated for their unique vision, emotional depth, and technical mastery in the field of AI/ML engineering and UI/UX design.
            </p>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800/50">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-light text-white tracking-wide">
                  {selectedProjectData.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-light text-white mb-4 tracking-[0.1em] uppercase">Problem</h4>
                  <p className="text-gray-400 leading-relaxed">{selectedProjectData.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-light text-white mb-4 tracking-[0.1em] uppercase">Solution</h4>
                  <p className="text-gray-400 leading-relaxed">{selectedProjectData.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-light text-white mb-4 tracking-[0.1em] uppercase">Key Learnings</h4>
                  <ul className="space-y-2">
                    {selectedProjectData.learnings.map((learning, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;