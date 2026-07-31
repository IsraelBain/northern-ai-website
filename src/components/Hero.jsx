import React from 'react';
import klStructure from '../assets/kl-structure.webp';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.06), transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase mb-6">
            Mineral prospectivity mapping
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Gold targets that survive{' '}
            <span className="text-accent">honest validation.</span>
          </h1>

          <p className="text-lg md:text-xl text-subtle max-w-2xl leading-relaxed mb-10">
            Machine learning prospectivity mapping for the Abitibi, tested the
            hard way: on mining camps the model has never seen.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-full transition-all text-base hover:shadow-lg hover:shadow-accent/20"
            >
              Book a walkthrough
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 border border-white/[0.12] hover:border-white/[0.24] text-white font-medium rounded-full transition-all text-base"
            >
              Free first look
            </button>
          </div>

          <p className="text-sm text-muted max-w-md leading-relaxed">
            Send us your claim outline and we send back a targeting brief and
            Google Earth file. No cost, no commitment.
          </p>
        </div>

        {/* Stats - above the map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20">
          <div className="border border-white/[0.06] rounded-xl p-6 bg-white/[0.02]">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              0.737
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Blind AUC under camp-holdout validation, the strictest test in
              the Canadian MPM literature
            </p>
          </div>
          <div className="border border-white/[0.06] rounded-xl p-6 bg-white/[0.02]">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              4x
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The base rate of known gold occurrences in our top-ranked band
            </p>
          </div>
          <div className="border border-white/[0.06] rounded-xl p-6 bg-white/[0.02]">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              61/116
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Known occurrences captured in the top 20 percent of ground
            </p>
          </div>
        </div>

        {/* Hero map image - below stats */}
        <div className="mt-12 md:mt-16">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
            <img
              src={klStructure}
              alt="Model output over the Kirkland Lake district showing ranked ground, known gold occurrences, and mapped fault structure"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
          <p className="text-sm text-muted text-center mt-5 max-w-2xl mx-auto leading-relaxed">
            Model output over the Kirkland Lake district. Orange cells are top
            ranked ground, stars are known gold occurrences, purple lines are
            mapped fault structure. Every statistic shown was produced blind, by
            a model that had never seen this camp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
