import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollTo('hero')}
          >
            <Logo className="h-9 w-9" />
            <span className="text-base font-bold text-white tracking-tight">
              Northern AI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-subtle hover:text-white transition-colors text-sm"
            >
              How it works
            </button>
            <button
              onClick={() => scrollTo('team')}
              className="text-subtle hover:text-white transition-colors text-sm"
            >
              Team
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-full transition-all text-sm hover:shadow-lg hover:shadow-accent/15"
            >
              Book a walkthrough
            </button>
          </div>

          <button
            className="md:hidden p-2 text-subtle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/[0.06] pt-4 space-y-3">
            <button
              onClick={() => scrollTo('how-it-works')}
              className="block w-full text-left py-2 text-subtle hover:text-white transition-colors text-sm"
            >
              How it works
            </button>
            <button
              onClick={() => scrollTo('team')}
              className="block w-full text-left py-2 text-subtle hover:text-white transition-colors text-sm"
            >
              Team
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-center px-5 py-2 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-full transition-colors text-sm"
            >
              Book a walkthrough
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
