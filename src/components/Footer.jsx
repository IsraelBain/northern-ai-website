import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold gradient-text">Northern AI</h3>
                <p className="text-xs text-gray-400">Indigenous Excellence in Technology</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Pioneering AI-powered mineral exploration and delivering world-class consulting services
              in software, AI, and mechanical engineering.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="glass px-3 py-1 rounded-full text-gray-300">🍁 Indigenous-Owned</span>
              <span className="glass px-3 py-1 rounded-full text-gray-300">🇨🇦 Canadian</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-northern-green-light transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-northern-green-light transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('advantages')} className="text-gray-400 hover:text-northern-green-light transition-colors">
                  Why Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-northern-green-light transition-colors">
                  Team
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Software Consulting</li>
              <li>AI & Machine Learning</li>
              <li>Mechanical Engineering</li>
              <li>Mineral Exploration AI</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Northern AI. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Built with <span className="text-northern-green-light">React</span> and <span className="text-northern-green-light">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
