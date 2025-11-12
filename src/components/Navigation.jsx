import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './ui/Button';
import { MenuIcon, CloseIcon } from './ui/Icon';
import { useScrollToSection } from '../hooks/useScrollToSection';

const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="hover:text-northern-green-light transition-colors duration-200"
  >
    {children}
  </button>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
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
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
          >
            <Logo className="h-10 w-10 transform group-hover:scale-110 transition-transform duration-200" />
            <div>
              <h1 className="text-xl font-bold gradient-text">Northern AI</h1>
              <p className="text-xs text-gray-400">Indigenous Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleNavClick('services')}>Services</NavLink>
            <NavLink onClick={() => handleNavClick('products')}>Products</NavLink>
            <NavLink onClick={() => handleNavClick('advantages')}>Why Us</NavLink>
            <NavLink onClick={() => handleNavClick('team')}>Team</NavLink>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass rounded-lg hover:bg-opacity-10 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 space-y-3 animate-fade-in">
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left py-2 hover:text-northern-green-light transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="block w-full text-left py-2 hover:text-northern-green-light transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick('advantages')}
              className="block w-full text-left py-2 hover:text-northern-green-light transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="block w-full text-left py-2 hover:text-northern-green-light transition-colors"
            >
              Team
            </button>
            <Button
              variant="primary"
              size="sm"
              fullWidth
              onClick={() => handleNavClick('contact')}
              className="mt-2"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
