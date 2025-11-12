import React from 'react';

const Advantages = () => {
  const advantages = [
    {
      icon: "🍁",
      title: "Canadian Sovereignty",
      description: "Indigenous-owned technology with government and industry preference for local innovation. Supporting Canadian mineral resource development.",
      impact: "Preferred Partner Status"
    },
    {
      icon: "🔓",
      title: "Open Data Philosophy",
      description: "No proprietary data lock-in. Built on publicly available datasets ensuring transparency, reproducibility, and client independence.",
      impact: "Full Transparency"
    },
    {
      icon: "💰",
      title: "Junior Miner Focus",
      description: "Affordable, powerful tools designed specifically for exploration companies that need enterprise-grade technology without enterprise prices.",
      impact: "Accessible Pricing"
    },
    {
      icon: "🌍",
      title: "Multi-Commodity Coverage",
      description: "Unlike competitors focused solely on battery metals, we support Au, Cu, Ni, Co, Li, Zn, Pb, and expanding commodity types.",
      impact: "Versatile Application"
    },
    {
      icon: "🎯",
      title: "Proven Methodology",
      description: "Advanced feature engineering with elevation, geochemistry, radiometrics, and satellite data fusion. Target accuracy of 85-90% AUC.",
      impact: "Industry-Leading Accuracy"
    },
    {
      icon: "🚀",
      title: "Rapid Innovation",
      description: "Agile development with continuous model improvements. We move fast and adapt to client needs without corporate bureaucracy.",
      impact: "Quick Turnaround"
    }
  ];

  return (
    <section id="advantages" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-northern-green opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Why Northern AI</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic advantages that set us apart from industry giants like Goldspot and KoBold Metals
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl glass-hover group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {advantage.description}
              </p>
              <div className="pt-3 border-t border-white border-opacity-10">
                <span className="text-xs font-semibold text-northern-green-light">
                  ✓ {advantage.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive comparison */}
        <div className="glass p-8 md:p-12 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Market Positioning
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Goldspot */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-400 mb-2">Goldspot Discoveries</h4>
                <p className="text-sm text-gray-500">Established Player</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">✓</span> Multi-modal data fusion
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">✓</span> 100+ deposits trained
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">✓</span> Expert interpretation
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">−</span> Proprietary data
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">−</span> Premium pricing
                </div>
              </div>
            </div>

            {/* Northern AI */}
            <div className="space-y-4 glass bg-gradient-to-br from-northern-green-dark to-northern-green p-6 rounded-2xl">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Northern AI</h4>
                <p className="text-sm text-northern-green-light font-semibold">Indigenous Excellence</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-white font-semibold">
                  <span className="mr-2">✓</span> Multi-modal data fusion
                </div>
                <div className="flex items-center text-white font-semibold">
                  <span className="mr-2">✓</span> Canadian sovereignty
                </div>
                <div className="flex items-center text-white font-semibold">
                  <span className="mr-2">✓</span> Open data philosophy
                </div>
                <div className="flex items-center text-white font-semibold">
                  <span className="mr-2">✓</span> Junior miner pricing
                </div>
                <div className="flex items-center text-white font-semibold">
                  <span className="mr-2">✓</span> Multi-commodity
                </div>
              </div>
            </div>

            {/* KoBold */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-400 mb-2">KoBold Metals</h4>
                <p className="text-sm text-gray-500">$195M Funded</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">✓</span> ML + geochemistry
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">✓</span> Drill hole databases
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">✓</span> Global coverage
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">−</span> Battery metals only
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">−</span> Enterprise focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
