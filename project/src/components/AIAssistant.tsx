import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Kuldeep's AI assistant. Ask me anything about his skills, projects, or experience!", sender: 'bot' }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = { id: messages.length + 1, text: message, sender: 'user' };
      setMessages([...messages, newMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "Kuldeep specializes in AI/ML engineering and UI/UX design. He's currently interning at LinuxWorld, Jaipur, working on cutting-edge DevOps and AI integrations.",
          "His key projects include a Face Swap App using CVZone for real-time computer vision and an Automated Jenkins Docker Image for streamlined DevOps workflows.",
          "He's proficient in Python, React, Docker, Jenkins, and various AI/ML frameworks like LangChain and GenAI, with a strong focus on creating intelligent user experiences.",
          "Feel free to reach out to him at senkul1222@gmail.com for collaboration opportunities or to discuss innovative AI/ML and design projects!"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { id: prev.length + 1, text: randomResponse, sender: 'bot' }]);
      }, 1000);
      
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="bg-gray-900 border border-gray-800/50 w-80 h-96 mb-4 flex flex-col shadow-2xl">
          <div className="p-6 border-b border-gray-800/50 flex items-center justify-between">
            <h3 className="font-light text-white tracking-[0.2em] uppercase">Ask Kuldeep's AI</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-800/50 transition-colors duration-200"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-white text-black'
                      : 'bg-gray-800/50 text-white border border-gray-700/50'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 border-t border-gray-800/50">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-0 py-2 border-0 border-b border-gray-700/50 focus:ring-0 focus:border-white bg-transparent text-white text-sm"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black p-4 shadow-2xl hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default AIAssistant;