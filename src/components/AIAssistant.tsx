import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

interface AIAssistantProps {
  theme: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Kuldeep's AI Assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = generateResponse(input);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);

    setInput('');
  };

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('skills') || lowerQuery.includes('technology')) {
      return "Kuldeep specializes in AI/ML with Python, GenAI, and LangChain. He's also skilled in DevOps with Docker and Jenkins, frontend development with React, and UI/UX design. He's currently learning Unity 3D for AI-powered games!";
    }
    
    if (lowerQuery.includes('projects') || lowerQuery.includes('work')) {
      return "Kuldeep has worked on exciting projects including a real-time Face Swap App using OpenCV and CVZone, and an Auto Jenkins Docker container with GitHub integration. He's always working on innovative AI solutions!";
    }
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('internship')) {
      return "Kuldeep is currently interning at LinuxWorld in Jaipur, working on AI & DevOps integrations. He's gained valuable experience in container orchestration, CI/CD pipelines, and AI automation tools.";
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('reach')) {
      return "You can reach Kuldeep at senkul1222@gmail.com or connect with him on LinkedIn and GitHub. He's always open to discussing new opportunities and innovative projects!";
    }
    
    return "I'd be happy to help you learn more about Kuldeep! Ask me about his skills, projects, experience, or how to get in touch with him.";
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-orange-500 to-red-500'
            : 'bg-gradient-to-r from-blue-600 to-purple-600'
        }`}
      >
        <Bot className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className={`fixed bottom-24 right-8 z-50 w-80 h-96 rounded-2xl border flex flex-col ${
              theme === 'light' 
                ? 'matte-card border-white/20' 
                : 'matte-card-dark border-gray-700'
            }`}
          >
            <div className={`flex items-center justify-between p-4 border-b ${
              theme === 'light' ? 'border-white/30' : 'border-gray-700'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold font-futuristic ${
                    theme === 'light' ? 'text-white' : 'text-white'
                  }`}>Ask Kuldeep's AI</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className={`text-xs ${
                      theme === 'light' ? 'text-white/80' : 'text-gray-400'
                    }`}>Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  theme === 'light' ? 'text-white/80 hover:text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? theme === 'light'
                          ? 'bg-white text-orange-600'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : theme === 'light'
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className={`p-4 border-t ${
              theme === 'light' ? 'border-white/30' : 'border-gray-700'
            }`}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50'
                      : 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                  }`}
                />
                <button
                  type="submit"
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white text-orange-600 hover:bg-yellow-50'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;