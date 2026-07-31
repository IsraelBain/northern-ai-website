import React from 'react';

const sources = [
  'Ontario Geological Survey',
  'SIGEOM',
  'Natural Resources Canada',
  'USGS',
];

const CredibilityStrip = () => {
  return (
    <section className="py-16 px-6 border-y border-white/[0.06]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-500 text-xs font-medium tracking-widest uppercase mb-8">
          Data sources
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {sources.map((source) => (
            <span
              key={source}
              className="text-sm text-subtle font-medium"
            >
              {source}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
