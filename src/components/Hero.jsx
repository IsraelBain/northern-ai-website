import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-northern-green opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-northern-green-light opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Advanced AI Solutions</span>
            <span className="block gradient-text">For Modern Industry</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of mineral exploration with cutting-edge machine learning.
            <span className="block mt-2">World-class consulting in software, AI, and mechanical engineering.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={() => scrollToSection('products')} className="btn-primary w-full sm:w-auto">
              Explore Our AI Technology
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary w-full sm:w-auto">
              Schedule Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="glass p-6 rounded-2xl glass-hover">
              <div className="text-4xl font-bold gradient-text mb-2">85%+</div>
              <div className="text-gray-400 text-sm">Target Prediction Accuracy</div>
            </div>
            <div className="glass p-6 rounded-2xl glass-hover">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400 text-sm">Indigenous Owned</div>
            </div>
            <div className="glass p-6 rounded-2xl glass-hover">
              <div className="text-4xl font-bold gradient-text mb-2">Multi</div>
              <div className="text-gray-400 text-sm">Commodity Coverage</div>
            </div>
            <div className="glass p-6 rounded-2xl glass-hover">
              <div className="text-4xl font-bold gradient-text mb-2">Open</div>
              <div className="text-gray-400 text-sm">Data Philosophy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-northern-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
