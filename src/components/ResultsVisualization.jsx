import React from 'react';

const ResultsVisualization = () => {
  const metrics = [
    { label: "Deposit Prediction Accuracy", value: 78, unit: "%", color: "text-northern-green-light" },
    { label: "Top 20% Area Capture Rate", value: 62.5, unit: "%", color: "text-emerald-400" },
    { label: "Cost Savings vs Traditional", value: 82, unit: "%", color: "text-green-400" },
    { label: "Average Turnaround Time", value: 14, unit: "days", color: "text-northern-green-light" }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-northern-gray-dark to-northern-gray-darker">
      {/* TODO: Add background image options:
          - Close-up of rock samples being analyzed
          - Geologist examining core samples
          - Lab/analysis environment
          - Heatmap/prospectivity map overlays
          Style: Very subtle, low opacity (10-15%)
      */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-northern-green-light font-semibold">Proven Results</span>
          </div>
          <h2 className="section-title">Real Data. Real Impact.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI model has been validated on 18,994 known deposits across Ontario and Quebec
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl glass-hover text-center">
              <div className={`text-5xl font-bold ${metric.color} mb-2`}>
                {metric.value}
                <span className="text-2xl">{metric.unit}</span>
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Visualization: Bar Chart Comparison */}
        <div className="glass p-8 rounded-3xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Deposit Discovery Rates: Random vs AI-Guided Targeting
          </h3>
          <div className="space-y-6">
            {/* Random Targeting */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-semibold">Random Targeting</span>
                <span className="text-gray-400">20%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-end pr-3"
                  style={{ width: '20%' }}
                >
                  <span className="text-xs font-bold text-white">20%</span>
                </div>
              </div>
            </div>

            {/* Traditional Geology */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-semibold">Traditional Geology (Human)</span>
                <span className="text-gray-400">45%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-end pr-3"
                  style={{ width: '45%' }}
                >
                  <span className="text-xs font-bold text-white">45%</span>
                </div>
              </div>
            </div>

            {/* Northern AI */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold flex items-center">
                  Northern AI Model
                  <span className="ml-2 text-xs px-2 py-1 bg-northern-green-light bg-opacity-20 text-northern-green-light rounded-full">
                    3.1x Better
                  </span>
                </span>
                <span className="text-northern-green-light font-bold">62.5%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-northern-green to-northern-green-light rounded-full flex items-center justify-end pr-3 animate-pulse"
                  style={{ width: '62.5%' }}
                >
                  <span className="text-xs font-bold text-northern-gray-dark">62.5%</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Percentage of known deposits found in top 20% of prospective areas
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Real-World Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">$45K+</div>
              <div className="text-sm text-gray-400">Saved Per Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">9</div>
              <div className="text-sm text-gray-400">Extra Drill Holes Possible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2 weeks</div>
              <div className="text-sm text-gray-400">vs 4-6 weeks traditional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsVisualization;
