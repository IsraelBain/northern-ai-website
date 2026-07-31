import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Send your claim outline',
    desc: 'Public data only leaves our building. Your proprietary information stays yours.',
  },
  {
    num: '02',
    title: 'We run the model',
    desc: 'Using provincial and federal open data, we generate a prospectivity surface across your ground.',
  },
  {
    num: '03',
    title: 'You get a targeting brief',
    desc: 'An interactive Google Earth file, ranked target cells with geological drivers, and a 30-minute live walkthrough.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4 text-center">
          How it works
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">
          Three steps, no black box
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative border border-white/[0.06] rounded-xl p-6 bg-white/[0.02] hover:border-accent/20 transition-colors"
            >
              <span className="text-zinc-500 text-xs font-mono font-bold tracking-widest">
                {step.num}
              </span>
              <h3 className="text-white font-semibold text-base mt-3 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
