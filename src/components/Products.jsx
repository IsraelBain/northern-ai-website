import React from 'react';

const Products = () => {
  const features = [
    {
      title: "Multi-Modal Data Fusion",
      description: "Integrates geology, geophysics, geochemistry, and satellite data for comprehensive analysis",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Canadian Sovereignty",
      description: "Indigenous-owned, focused on Canadian mineral resources with government-preferred local technology",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Open Data Philosophy",
      description: "No proprietary data lock-in. Built on publicly available datasets for transparency and accessibility",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Multi-Commodity Coverage",
      description: "Not limited to battery metals - supports Au, Cu, Ni, Co, Li, Zn, Pb, and more",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Advanced Feature Engineering",
      description: "Elevation, topography, stream sediment geochemistry, radiometric geophysics, and Landsat band ratios",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Proven Accuracy",
      description: "Target AUC 0.85-0.90 with continuous model improvements and validation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const dataLayers = [
    { name: "Elevation & Topography", status: "Active", color: "bg-green-500" },
    { name: "Stream Sediment Geochemistry", status: "Active", color: "bg-green-500" },
    { name: "Radiometric Geophysics", status: "Active", color: "bg-green-500" },
    { name: "Landsat Band Ratios", status: "In Development", color: "bg-yellow-500" },
    { name: "Structural Lineaments", status: "In Development", color: "bg-yellow-500" },
    { name: "Drill Hole Database", status: "Planned", color: "bg-blue-500" }
  ];

  return (
    <section id="products" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-northern-green-light blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-northern-green-light font-semibold">Flagship Product</span>
          </div>
          <h2 className="section-title">AI Mineral Exploration Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary machine learning model for mineral deposit prediction.
            Competing with industry leaders like Goldspot Discoveries and KoBold Metals.
          </p>
        </div>

        {/* Main product showcase */}
        <div className="glass p-8 md:p-12 rounded-3xl mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Next-Generation Mineral Discovery
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our proprietary AI model leverages multi-modal geospatial data to predict mineral deposit
                locations with unprecedented accuracy. Built specifically for the Canadian market with a
                focus on junior miners who need affordable, powerful tools.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-northern-green-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold text-white">Cost-Effective for Junior Miners</p>
                    <p className="text-sm text-gray-400">Affordable pricing model designed for exploration companies of all sizes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-northern-green-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold text-white">Regional Expertise</p>
                    <p className="text-sm text-gray-400">Specialized models for Ontario, BC, Quebec, and expanding coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-northern-green-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold text-white">Continuous Learning</p>
                    <p className="text-sm text-gray-400">Models improve with new data and drill hole results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data layers visualization */}
            <div className="glass p-6 rounded-2xl bg-gradient-to-br from-northern-gray-dark to-northern-green-dark">
              <h4 className="text-xl font-bold mb-4 text-white">Active Data Layers</h4>
              <div className="space-y-3">
                {dataLayers.map((layer, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-black bg-opacity-20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 ${layer.color} rounded-full animate-pulse`}></div>
                      <span className="text-sm text-white">{layer.name}</span>
                    </div>
                    <span className="text-xs px-3 py-1 glass rounded-full text-gray-300">
                      {layer.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-6 rounded-xl glass-hover">
              <div className="text-northern-green-light mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Competitive positioning */}
        <div className="glass p-8 rounded-2xl">
          <h4 className="text-2xl font-bold mb-6 text-center gradient-text">
            Competing with Industry Leaders
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-gray-400 font-semibold mb-2">Goldspot Discoveries</div>
              <div className="text-sm text-gray-500">Multi-modal data, 100+ deposits trained</div>
            </div>
            <div className="text-center border-l border-r border-northern-green-light border-opacity-30">
              <div className="text-northern-green-light font-bold mb-2 text-xl">Northern AI</div>
              <div className="text-sm text-white font-semibold">Indigenous-owned, Open data, Junior miner focus</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 font-semibold mb-2">KoBold Metals</div>
              <div className="text-sm text-gray-500">$195M funding, Battery metals focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
