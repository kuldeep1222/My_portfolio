import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "AI/ML",
      skills: [
        { name: "Python", level: 95 },
        { name: "GenAI", level: 85 },
        { name: "LangChain", level: 80 }
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Jenkins", level: 85 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "UI/UX", level: 85 },
        { name: "Streamlit", level: 80 },
        { name: "Gradio", level: 75 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Terminal", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-white uppercase mb-8">
              GALLERY
            </h2>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Radar Chart Placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 border border-gray-800/50"></div>
                <div className="absolute inset-8 border border-gray-800/50"></div>
                <div className="absolute inset-16 border border-gray-800/50"></div>
                <div className="absolute inset-24 border border-gray-800/50"></div>
                
                {/* Skill Points */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white"></div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-3 h-3 bg-white"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white"></div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-3 h-3 bg-white"></div>
                
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white"></div>
                
                {/* Labels */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-light text-gray-400 tracking-[0.2em] uppercase">AI/ML</div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-sm font-light text-gray-400 tracking-[0.2em] uppercase">DevOps</div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-light text-gray-400 tracking-[0.2em] uppercase">Frontend</div>
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-sm font-light text-gray-400 tracking-[0.2em] uppercase">Tools</div>
              </div>
            </div>
            
            {/* Right: Skills List */}
            <div className="space-y-12">
              {skillCategories.map((category) => (
                <div key={category.category} className="group">
                  <h3 className="text-2xl font-light text-white mb-6 tracking-[0.1em] uppercase">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-light text-gray-300 tracking-wide">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 font-light">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800/50 h-px">
                          <div
                            className="h-px bg-white transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;