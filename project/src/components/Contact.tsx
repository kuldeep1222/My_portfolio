import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Download, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-white uppercase mb-8">
              CONTACT
            </h2>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-white tracking-wide">
                  Let's Create Something <span className="text-gray-400">Extraordinary</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hello, I'll try my best to get back to you.
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="mailto:senkul1222@gmail.com" 
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-900/50 border border-gray-800/50 flex items-center justify-center group-hover:border-gray-700/50 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg tracking-wide">senkul1222@gmail.com</span>
                </a>
                
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="w-12 h-12 bg-gray-900/50 border border-gray-800/50 flex items-center justify-center hover:border-gray-700/50 transition-all duration-300 hover:scale-110 group"
                    >
                      <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
              
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-light tracking-[0.2em] hover:bg-gray-200 transition-all duration-300 hover:scale-105 group uppercase">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
            
            {/* Right: Contact Form */}
            <div className="bg-gray-900/30 border border-gray-800/50 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-3 tracking-[0.2em] uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-700/50 focus:ring-0 focus:border-white bg-transparent text-white text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-3 tracking-[0.2em] uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-700/50 focus:ring-0 focus:border-white bg-transparent text-white text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-3 tracking-[0.2em] uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b border-gray-700/50 focus:ring-0 focus:border-white bg-transparent text-white text-lg resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-light tracking-[0.2em] hover:bg-gray-200 transition-colors duration-300 group uppercase"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;