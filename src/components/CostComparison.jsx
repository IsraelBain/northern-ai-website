import React from 'react';

const CostComparison = () => {
  return (
    <section id="cost-comparison" className="py-24 relative bg-gradient-to-b from-northern-gray-darker to-northern-gray-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-northern-green-light font-semibold">ROI Analysis</span>
          </div>
          <h2 className="section-title">Traditional Targeting vs. AI-Powered Analysis</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Northern AI delivers the same professional targeting at a fraction of the cost
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Method */}
          <div className="glass p-8 rounded-3xl relative">
            <div className="absolute top-6 right-6">
              <span className="text-xs px-3 py-1 bg-red-500 bg-opacity-20 text-red-400 rounded-full font-semibold">
                Traditional
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Human Surveying & Consulting</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">Geologist team (1 week)</span>
                <span className="text-white font-semibold">$25,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">Field surveys & sampling</span>
                <span className="text-white font-semibold">$15,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">Data analysis & modeling</span>
                <span className="text-white font-semibold">$8,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">Contingency (15%)</span>
                <span className="text-white font-semibold">$7,200</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t-2 border-red-500 border-opacity-30">
              <span className="text-xl font-bold text-white">Total Cost:</span>
              <span className="text-3xl font-bold text-red-400">$55,200</span>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                4-6 week turnaround
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Limited to surveyed areas
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Human bias in target selection
              </div>
            </div>
          </div>

          {/* Northern AI Method */}
          <div className="glass p-8 rounded-3xl relative border-2 border-northern-green-light">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-northern-green-light text-northern-gray-dark px-6 py-2 rounded-full text-sm font-bold">
                82% COST SAVINGS
              </span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="text-xs px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full font-semibold">
                AI-Powered
              </span>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-6">Northern AI Analysis</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">AI prospectivity analysis</span>
                <span className="text-white font-semibold">$10,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">Top 20 drill targets</span>
                <span className="text-northern-green-light font-semibold">Included</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">GIS files + technical report</span>
                <span className="text-northern-green-light font-semibold">Included</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white border-opacity-10">
                <span className="text-gray-300">Full property coverage</span>
                <span className="text-northern-green-light font-semibold">Included</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t-2 border-northern-green-light border-opacity-50">
              <span className="text-xl font-bold text-white">Total Cost:</span>
              <span className="text-3xl font-bold gradient-text">$10,000</span>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2-week turnaround
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Complete property analysis
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Data-driven, unbiased targeting
              </div>
            </div>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="text-center glass p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Save $45,200 Per Property</h3>
          <p className="text-gray-300 text-lg mb-6">
            That's enough savings to drill <span className="text-northern-green-light font-bold">9 additional holes</span> at $5,000 per hole.
            Or analyze <span className="text-northern-green-light font-bold">4-5 more properties</span> with the same budget.
          </p>
          <div className="inline-flex items-center space-x-4 text-sm text-gray-400">
            <span>✓ Same professional analysis</span>
            <span>✓ Faster delivery</span>
            <span>✓ 82% cost reduction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
