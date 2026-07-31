import React, { useState, useEffect, useRef, useMemo } from 'react';

const TOTAL = 116;
const CAPTURED = 61;
const BAND_START = 0.8; // rightmost 20%

// Deterministic seeded PRNG (mulberry32)
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateDots(seed) {
  const rng = mulberry32(seed);
  const dots = [];
  for (let i = 0; i < TOTAL; i++) {
    dots.push({
      id: i,
      chanceX: rng() * 0.96 + 0.02, // uniform spread with small margin
      chanceY: rng() * 0.6 + 0.2,
    });
  }

  // Sort by chanceX descending so rightmost dots get "captured" first visually
  const sorted = [...dots].sort((a, b) => b.chanceX - a.chanceX);
  const capturedIds = new Set(sorted.slice(0, CAPTURED).map((d) => d.id));

  return dots.map((dot) => {
    const isCaptured = capturedIds.has(dot.id);
    const rngVal = mulberry32(dot.id * 7 + 13)();
    return {
      ...dot,
      captured: isCaptured,
      // Ranked position: place inside the gold band (80%-98%)
      rankedX: isCaptured
        ? BAND_START + rngVal * 0.18 + 0.01
        : dot.chanceX < BAND_START
          ? dot.chanceX
          : dot.chanceX * 0.75, // push non-captured out of band
      rankedY: isCaptured
        ? mulberry32(dot.id * 3 + 99)() * 0.6 + 0.2
        : dot.chanceY,
      delay: isCaptured ? mulberry32(dot.id + 50)() * CAPTURED * 15 : 0,
    };
  });
}

const CaptureGrid = () => {
  const [mode, setMode] = useState('chance');
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const [count, setCount] = useState(23);
  const containerRef = useRef(null);
  const rmRef = useRef(false);
  const rafRef = useRef(null);

  const dots = useMemo(() => generateDots(42), []);

  useEffect(() => {
    rmRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }, []);

  // Count-up animation
  const animateCount = (from, to) => {
    if (rmRef.current) {
      setCount(to);
      return;
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const dur = 800;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - (1 - p) ** 3;
      setCount(Math.round(from + (to - from) * ease));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  // Auto-play on scroll
  useEffect(() => {
    if (hasAutoPlayed) return;
    const el = containerRef.current;
    if (!el) return;
    let timer;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          timer = setTimeout(() => {
            setMode('ranked');
            animateCount(23, CAPTURED);
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
  }, [hasAutoPlayed]);

  const toggle = (next) => {
    if (next === mode) return;
    setMode(next);
    if (next === 'ranked') {
      animateCount(23, CAPTURED);
    } else {
      animateCount(CAPTURED, 23);
    }
  };

  const isRanked = mode === 'ranked';
  const noMotion = rmRef.current;
  const fadeTx = noMotion ? 'none' : 'opacity 400ms ease';

  return (
    <div ref={containerRef} className="mt-12">
      {/* Toggle */}
      <div
        className="flex justify-center mb-8"
        role="group"
        aria-label="Capture comparison"
      >
        <button
          type="button"
          aria-pressed={mode === 'chance'}
          onClick={() => toggle('chance')}
          className={`px-4 sm:px-5 py-2.5 text-sm font-medium rounded-l-lg border border-white/[0.08]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:z-10
            transition-colors ${
              mode === 'chance'
                ? 'bg-accent text-bg'
                : 'bg-white/[0.06] text-muted hover:text-white'
            }`}
        >
          By chance
        </button>
        <button
          type="button"
          aria-pressed={mode === 'ranked'}
          onClick={() => toggle('ranked')}
          className={`px-4 sm:px-5 py-2.5 text-sm font-medium rounded-r-lg border border-white/[0.08] border-l-0
            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:z-10
            transition-colors ${
              mode === 'ranked'
                ? 'bg-accent text-bg'
                : 'bg-white/[0.06] text-muted hover:text-white'
            }`}
        >
          Model ranked
        </button>
      </div>

      {/* Ground strip */}
      <div className="relative w-full rounded-lg overflow-hidden bg-white/[0.04]" style={{ height: '120px' }}>
        {/* Band marker - rightmost 20% */}
        <div
          className="absolute top-0 bottom-0 border-l border-r rounded-r-lg"
          style={{
            left: `${BAND_START * 100}%`,
            right: 0,
            borderColor: isRanked ? '#C9A84C' : 'rgba(255,255,255,0.08)',
            backgroundColor: isRanked
              ? 'rgba(201,168,76,0.08)'
              : 'rgba(255,255,255,0.02)',
            transition: noMotion ? 'none' : 'border-color 500ms ease, background-color 500ms ease',
          }}
        />

        {/* Band label */}
        <div
          className="absolute text-[10px] font-medium"
          style={{
            left: `${((BAND_START + 1) / 2) * 100}%`,
            transform: 'translateX(-50%)',
            bottom: '4px',
            color: isRanked ? '#C9A84C' : 'rgba(113,113,122,0.6)',
            transition: noMotion ? 'none' : 'color 500ms ease',
          }}
        >
          top 20%
        </div>

        {/* Dots */}
        {dots.map((dot) => {
          const x = isRanked ? dot.rankedX : dot.chanceX;
          const y = isRanked ? dot.rankedY : dot.chanceY;
          const isGold = isRanked && dot.captured;

          return (
            <div
              key={dot.id}
              className="absolute rounded-full"
              style={{
                width: '6px',
                height: '6px',
                left: `${x * 100}%`,
                top: `${y * 100}%`,
                backgroundColor: isGold ? '#C9A84C' : '#52525B',
                opacity: isGold ? 1 : 0.6,
                transition: noMotion
                  ? 'none'
                  : `left 600ms ease ${dot.delay}ms, top 600ms ease ${dot.delay}ms, background-color 300ms ease ${dot.delay + 300}ms, opacity 300ms ease ${dot.delay + 300}ms`,
                willChange: isRanked ? 'left, top' : 'auto',
              }}
            />
          );
        })}
      </div>

      {/* Counter */}
      <div className="relative mt-5" style={{ minHeight: '2.5rem' }}>
        <p
          className="absolute inset-x-0 top-0 text-sm text-center leading-relaxed"
          style={{
            color: '#A1A1AA',
            opacity: mode === 'chance' ? 1 : 0,
            transition: fadeTx,
            pointerEvents: mode === 'chance' ? 'auto' : 'none',
          }}
          aria-hidden={mode !== 'chance'}
        >
          <span className="font-mono font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mode === 'chance' ? count : 23}
          </span>
          {' '}of 116 in any fifth of the ground, by chance
        </p>
        <p
          className="absolute inset-x-0 top-0 text-sm text-center leading-relaxed"
          style={{
            color: '#C9A84C',
            opacity: mode === 'ranked' ? 1 : 0,
            transition: fadeTx,
            pointerEvents: mode === 'ranked' ? 'auto' : 'none',
          }}
          aria-hidden={mode !== 'ranked'}
        >
          <span className="font-mono font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mode === 'ranked' ? count : CAPTURED}
          </span>
          {' '}of 116 in our top ranked fifth, tested blind
        </p>
      </div>

      {/* Caption */}
      <p
        className="text-xs text-center mt-1"
        style={{ color: 'rgba(113,113,122,0.6)' }}
      >
        The model was never shown these occurrences. This is where it ranked
        the ground they sit on.
      </p>
    </div>
  );
};

export default CaptureGrid;
