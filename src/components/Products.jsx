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
      description: "Current AUC 0.78 with continuous model improvements and validation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const dataLayers = [
    { name: "Magnetic Data (RTP, HGM, Vertical Derivative)", status: "Active", color: "bg-green-500" },
    { name: "Geological Data (Bedrock types, proximity)", status: "Active", color: "bg-green-500" },
    { name: "Geodiversity Index", status: "Active", color: "bg-green-500" },
    { name: "Terrain & Elevation Features", status: "Active", color: "bg-green-500" }
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
            AI mineral prospectivity analysis trained on 18,994 known deposits across Ontario and Quebec.
            Delivers top 20 drill targets with prospectivity heatmap in 2 weeks.
            Perfect for junior explorers who need targeting but can't afford Goldspot's $100K+ studies.
          </p>
        </div>

        {/* Main product showcase */}
        <div className="glass p-8 md:p-12 rounded-3xl mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Same Science as Goldspot. Built for Juniors.
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our AI model uses the same proven targeting methodology as industry leaders but at a fraction
                of the cost. Trained on 18,994 deposits with 78% validated accuracy (AUC 0.78).
                Get professional-grade drill targeting in 2 weeks, not months.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-3">What You Get:</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Top 20 ranked drill targets (with coordinates)
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Prospectivity heatmap (PDF + GIS files)
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Technical report (15-20 pages)
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Shapefiles, GeoJSON, KML for field use
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <strong>2-week turnaround</strong>
                    </div>
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
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-6 rounded-xl glass-hover">
              <div className="text-northern-green-light mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Pricing</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pay per property, no long-term contracts. 2-week delivery guaranteed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pilot Project */}
            <div className="glass p-8 rounded-2xl glass-hover">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">Pilot Project</h4>
                <div className="text-4xl font-bold gradient-text mb-2">$10,000</div>
                <p className="text-sm text-gray-400">Limited slots available</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Single property analysis
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Top 20 drill targets
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Prospectivity heatmap
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2-week delivery
                </li>
              </ul>
            </div>

            {/* Single Property */}
            <div className="glass p-8 rounded-2xl glass-hover border-2 border-northern-green-light relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-northern-green-light text-northern-gray-dark px-4 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">Single Property</h4>
                <div className="text-4xl font-bold gradient-text mb-2">$30,000</div>
                <p className="text-sm text-gray-400">Per property analysis</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Everything in Pilot
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full technical report (15-20 pages)
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All GIS formats (Shapefiles, GeoJSON, KML)
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
            </div>

            {/* Annual License */}
            <div className="glass p-8 rounded-2xl glass-hover">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">Annual License</h4>
                <div className="text-4xl font-bold gradient-text mb-2">$50,000</div>
                <p className="text-sm text-gray-400">Unlimited properties/year</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Unlimited property analyses
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All features included
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Dedicated support channel
                </li>
                <li className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-northern-green-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom model training available
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integrated Solutions */}
        <div className="mt-16 glass p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-3">Complete Exploration to Production Support</h3>
            <p className="text-gray-300">
              The only company offering both AI exploration targeting and mining operations consulting
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 glass rounded-xl">
              <div className="text-northern-green-light mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Exploration Phase</h4>
              <p className="text-sm text-gray-300 mb-4">AI prospectivity analysis to identify high-value drill targets</p>
              <p className="text-xs text-gray-400">Led by Israel Bain</p>
            </div>
            <div className="text-center p-6 glass rounded-xl">
              <div className="text-northern-green-light mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Operations Phase</h4>
              <p className="text-sm text-gray-300 mb-4">Engineering consulting for feasibility, material handling, and process optimization</p>
              <p className="text-xs text-gray-400">Led by Noah Bain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
