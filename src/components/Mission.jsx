import React from 'react';

const Mission = () => {
  return (
    <section className="py-24 relative">
      {/* TODO: Add background image of team collaboration or field work
          Recommended images:
          - Team photos at mine sites or conferences
          - Geologists collaborating with laptops in field
          - Indigenous technologists working together
          Style: Subtle opacity (15-20%) behind content
      */}

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-northern-green-light blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-northern-green-light font-semibold">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Democratizing Mineral Exploration Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe every junior mining company deserves access to world-class exploration technology.
            By combining cutting-edge AI with Indigenous ownership and Canadian values, we're making
            professional-grade mineral targeting affordable and accessible.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-2xl text-center glass-hover">
            <div className="w-16 h-16 mx-auto mb-4 glass rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-northern-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Accessibility</h3>
            <p className="text-gray-400 text-sm">
              Professional exploration technology shouldn't be reserved for enterprises.
              We price our services so junior explorers can compete.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center glass-hover">
            <div className="w-16 h-16 mx-auto mb-4 glass rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-northern-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparency</h3>
            <p className="text-gray-400 text-sm">
              No proprietary data lock-in. Our models use publicly available datasets.
              You own your data and results.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center glass-hover">
            <div className="w-16 h-16 mx-auto mb-4 glass rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-northern-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
            <p className="text-gray-400 text-sm">
              Indigenous-owned and proud. We deliver world-class results while
              supporting community growth and innovation.
            </p>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="glass p-10 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Leveling the Playing Field
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When a junior explorer saves $45,000 on targeting, that's 9 more drill holes.
            When they get results in 2 weeks instead of 6, that's a full exploration season saved.
            When they have confidence in their targets, that's millions in smart capital allocation.
            <span className="block mt-4 text-northern-green-light font-semibold">
              This is why we exist.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
