import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Container from '../layout/Container';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { ChevronDownIcon } from '../ui/Icon';

const HeroSection = () => {
  const scrollToSection = useScrollToSection();

  const stats = [
    { value: '85%+', label: 'Target Prediction Accuracy' },
    { value: '100%', label: 'Indigenous Owned' },
    { value: 'Multi', label: 'Commodity Coverage' },
    { value: 'Open', label: 'Data Philosophy' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-northern-green opacity-10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-northern-green-light opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-northern-green-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-northern-green-light"></span>
            </span>
            <span className="text-sm font-medium">Indigenous-Owned Technology Excellence</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="block">Advanced AI Solutions</span>
            <span className="block gradient-text">For Modern Industry</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            Pioneering the future of mineral exploration with cutting-edge machine learning.
            <span className="block mt-2">World-class consulting in software, AI, and mechanical engineering.</span>
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <Button onClick={() => scrollToSection('products')}>
              Explore Our AI Technology
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('contact')}>
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl glass-hover group">
                <div className="text-4xl font-bold gradient-text mb-2 transform group-hover:scale-110 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="text-northern-green-light" />
      </div>
    </section>
  );
};

export default HeroSection;
