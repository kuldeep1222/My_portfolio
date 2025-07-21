import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, } from 'lucide-react';

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/kuldeep1222', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/kuldeep-sen-364b35290/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
          }`}>06</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-futuristic ${
            theme === 'light' ? 'text-white' : 'gradient-text-dark'
          }`}>
            Let's Connect
          </h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          }`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className={`rounded-2xl p-8 isometric-card ${
              theme === 'light' ? 'matte-card' : 'matte-card-dark'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 font-futuristic ${
                theme === 'light' ? 'text-white' : 'text-white'
              }`}>Get in Touch</h3>
              <p className={`mb-8 leading-relaxed ${
                theme === 'light' ? 'text-white/90' : 'text-gray-300'
              }`}>
                Ready to bring your ideas to life? I'm always excited to discuss new projects, 
                innovative solutions, and opportunities to create something amazing together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg ${
                    theme === 'light' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${
                      theme === 'light' ? 'text-white/80' : 'text-gray-400'
                    }`}>Email</p>
                    <p className={theme === 'light' ? 'text-white' : 'text-white'}>senkul1222@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg ${
                    theme === 'light' 
                      ? 'bg-gradient-to-r from-orange-400 to-red-500' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${
                      theme === 'light' ? 'text-white/80' : 'text-gray-400'
                    }`}>Location</p>
                    <p className={theme === 'light' ? 'text-white' : 'text-white'}>Jaipur, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 font-futuristic ${
                  theme === 'light' ? 'text-white' : 'text-white'
                }`}>Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                          : 'bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-gray-400 hover:text-white'
                      }`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className={`rounded-2xl p-8 space-y-6 isometric-card ${
              theme === 'light' ? 'matte-card' : 'matte-card-dark'
            }`}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  theme === 'light' ? 'text-white' : 'text-gray-300'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50'
                      : 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                  }`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  theme === 'light' ? 'text-white' : 'text-gray-300'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50'
                      : 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  theme === 'light' ? 'text-white' : 'text-gray-300'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 resize-none ${
                    theme === 'light'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50'
                      : 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white text-orange-600 hover:bg-yellow-50 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;