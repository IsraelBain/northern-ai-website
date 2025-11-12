import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Logo className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold gradient-text">Northern AI</h1>
              <p className="text-xs text-gray-400">Indigenous Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-northern-green-light transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-northern-green-light transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('advantages')} className="hover:text-northern-green-light transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-northern-green-light transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-northern-green-light transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 hover:text-northern-green-light transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('advantages')} className="block w-full text-left py-2 hover:text-northern-green-light transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left py-2 hover:text-northern-green-light transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full text-center text-sm mt-2">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
