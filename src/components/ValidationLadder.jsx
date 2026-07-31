import React, { useState, useEffect, useRef, useCallback } from 'react';

const BARS = [
  { label: 'Out-of-bag estimate', value: 0.993, type: 'gray' },
  { label: 'Random k-fold', value: 0.983, type: 'gray' },
  { label: 'Benchmark recreation', value: 0.965, type: 'gray' },
  { label: 'Entire camps held out, raw', value: 0.691, type: 'gold' },
  { label: 'Entire camps held out, calibrated', value: 0.737, type: 'gold' },
];

const EASY_VALUE = 0.965;
const OUR_VALUE = 0.737;

function sx(v) {
  return (v - 0.5) / 0.5;
}

const ValidationLadder = () => {
  const [mode, setMode] = useState('easy');
  const [displayNum, setDisplayNum] = useState(EASY_VALUE);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const rmRef = useRef(false);

  useEffect(() => {
    rmRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }, []);

  const animateNum = useCallback((from, to) => {
    if (rmRef.current) {
      setDisplayNum(to);
      return;
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const dur = 900;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - (1 - p) ** 3;
      setDisplayNum(from + (to - from) * ease);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  /* Auto-animate on scroll into view, once */
  useEffect(() => {
    if (hasAutoPlayed) return;
    const el = containerRef.current;
    if (!el) return;
    let timer;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          timer = setTimeout(() => {
            setMode('our');
            animateNum(EASY_VALUE, OUR_VALUE);
            setHasAutoPlayed(true);
          }, rmRef.current ? 0 : 800);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [hasAutoPlayed, animateNum]);

  const toggle = (next) => {
    if (next === mode) return;
    setMode(next);
    animateNum(
      next === 'our' ? EASY_VALUE : OUR_VALUE,
      next === 'our' ? OUR_VALUE : EASY_VALUE
    );
  };

  const noMotion = rmRef.current;
  const barTx = noMotion
    ? 'none'
    : 'transform 700ms ease-in-out, opacity 500ms ease';
  const fadeTx = noMotion ? 'none' : 'opacity 400ms ease';

  return (
    <div ref={containerRef} className="mt-16 md:mt-20">
      {/* Toggle */}
      <div
        className="flex justify-center mb-10"
        role="group"
        aria-label="Validation method"
      >
        <button
          type="button"
          aria-pressed={mode === 'easy'}
          onClick={() => toggle('easy')}
          className={`px-4 sm:px-5 py-2.5 text-sm font-medium rounded-l-lg border border-white/[0.08]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:z-10
            transition-colors ${
              mode === 'easy'
                ? 'bg-accent text-bg'
                : 'bg-white/[0.06] text-muted hover:text-white'
            }`}
        >
          Standard test
        </button>
        <button
          type="button"
          aria-pressed={mode === 'our'}
          onClick={() => toggle('our')}
          className={`px-4 sm:px-5 py-2.5 text-sm font-medium rounded-r-lg border border-white/[0.08] border-l-0
            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:z-10
            transition-colors ${
              mode === 'our'
                ? 'bg-accent text-bg'
                : 'bg-white/[0.06] text-muted hover:text-white'
            }`}
        >
          Blind test
        </button>
      </div>

      {/* Bars + numeral */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        {/* Bar chart */}
        <div className="flex-1 min-w-0">
          {BARS.map((bar) => {
            const isGold = bar.type === 'gold';
            const active = mode === 'our' ? isGold : !isGold;

            return (
              <div key={bar.label} className="mb-3 last:mb-0">
                <div className="flex items-baseline justify-between mb-1 gap-2">
                  <span
                    className="text-xs truncate"
                    style={{
                      color: active ? '#A1A1AA' : 'rgba(113,113,122,0.4)',
                      transition: fadeTx,
                    }}
                  >
                    {bar.label}
                  </span>
                  <span
                    className="text-xs font-mono flex-shrink-0"
                    style={{
                      fontVariantNumeric: 'tabular-nums',
                      color: active
                        ? isGold
                          ? '#C9A84C'
                          : '#A1A1AA'
                        : 'rgba(113,113,122,0.4)',
                      transition: fadeTx,
                    }}
                  >
                    {bar.value.toFixed(3)}
                  </span>
                </div>
                <div className="relative h-5 rounded-sm overflow-hidden bg-white/[0.04]">
                  <div
                    className="absolute inset-y-0 left-0 w-full"
                    style={{
                      backgroundColor: isGold ? '#C9A84C' : '#71717A',
                      transform: `scaleX(${sx(bar.value)})`,
                      transformOrigin: 'left',
                      opacity: active ? 1 : 0.25,
                      transition: barTx,
                      willChange: 'transform, opacity',
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Scale */}
          <div className="flex items-center justify-between mt-2 text-[10px]" style={{ color: 'rgba(113,113,122,0.5)' }}>
            <span>0.5 (coin flip)</span>
            <span>1.0</span>
          </div>
        </div>

        {/* Large numeral */}
        <div className="flex items-center justify-center md:w-28 flex-shrink-0 py-2 md:py-0">
          <span
            className="text-5xl md:text-6xl font-bold"
            style={{
              fontVariantNumeric: 'tabular-nums',
              color: mode === 'our' ? '#C9A84C' : '#FAFAFA',
              transition: noMotion ? 'none' : 'color 500ms ease',
            }}
          >
            {displayNum.toFixed(3)}
          </span>
        </div>
      </div>

      {/* Caption crossfade */}
      <div className="relative mt-6" style={{ minHeight: '3.5rem' }}>
        <p
          className="absolute inset-x-0 top-0 text-sm text-center leading-relaxed"
          style={{
            color: '#A1A1AA',
            opacity: mode === 'easy' ? 1 : 0,
            transition: fadeTx,
            pointerEvents: mode === 'easy' ? 'auto' : 'none',
          }}
          aria-hidden={mode !== 'easy'}
        >
          This is what standard validation produces. It is honest work,
          measured the usual way.
        </p>
        <p
          className="absolute inset-x-0 top-0 text-sm text-center leading-relaxed"
          style={{
            color: '#C9A84C',
            opacity: mode === 'our' ? 1 : 0,
            transition: fadeTx,
            pointerEvents: mode === 'our' ? 'auto' : 'none',
          }}
          aria-hidden={mode !== 'our'}
        >
          This is the score on ground the model has never seen.
          <br />
          We built the company on reporting this number.
        </p>
      </div>

      {/* Static footer */}
      <p
        className="text-xs text-center mt-2"
        style={{ color: 'rgba(113,113,122,0.6)' }}
      >
        Identical model, identical data. The difference is only how hard the
        test is.
      </p>
    </div>
  );
};

export default ValidationLadder;
