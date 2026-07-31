import React from 'react';
import ValidationLadder from './ValidationLadder';
import CaptureGrid from './CaptureGrid';

const ModelExplainer = () => {
  return (
    <section id="model" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase mb-4 text-center">
          Methodology
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">
          How the model works
        </h2>

        {/* Blocks a, b - lighter reading column */}
        <div className="space-y-8 mb-12">
          <div className="border-l-2 border-white/[0.06] pl-6">
            <p className="text-subtle leading-relaxed text-base">
              The model reads 63 layers of public geoscience data, fault
              geometry, geophysics, geochemistry and bedrock geology, over 500
              metre cells across the Abitibi greenstone belt.
            </p>
          </div>
          <div className="border-l-2 border-white/[0.06] pl-6">
            <p className="text-subtle leading-relaxed text-base">
              It learned from 623 known gold occurrences across 7 mining camps
              along the Larder Lake-Cadillac deformation zone, one of the most
              productive gold structures on Earth.
            </p>
          </div>
        </div>

        {/* Block c - featured callout with ladder */}
        <div className="border border-white/[0.08] rounded-2xl p-6 md:p-10 bg-white/[0.02] mb-12">
          <p className="text-white leading-relaxed text-base md:text-lg font-medium mb-2">
            Standard validation tests on randomly held out cells next door to
            the training data. We hold out entire mining camps.
          </p>
          <p className="text-subtle leading-relaxed text-base">
            The same model scores 0.965 under standard validation and 0.737
            under blind camp-holdout. We built the company on reporting the
            second number, because it is the one that predicts performance on
            ground the model has never seen.
          </p>
          <ValidationLadder />
        </div>

        {/* Block d - lighter reading column */}
        <div className="border-l-2 border-white/[0.06] pl-6">
          <p className="text-subtle leading-relaxed text-base">
            Every ranked cell carries its top geological drivers in plain
            language, a calibrated probability, and site handoff coordinates. In
            blind testing, half of all occurrences ranked in the top 19 percent
            of ground the model had never seen.
          </p>
        </div>

        {/* Capture grid visual */}
        <CaptureGrid />
      </div>
    </section>
  );
};

export default ModelExplainer;
