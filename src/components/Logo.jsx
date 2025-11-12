import React from 'react';

const Logo = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mountain peaks with northern lights gradient */}
      <defs>
        <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d7a4d" />
          <stop offset="100%" stopColor="#2d5a3d" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      {/* Back mountain */}
      <path
        d="M 20 140 L 80 60 L 120 100 L 140 80 L 180 140 Z"
        fill="url(#mountainGradient)"
        opacity="0.6"
      />

      {/* Front mountain */}
      <path
        d="M 0 160 L 60 80 L 100 120 L 140 40 L 200 160 Z"
        fill="url(#mountainGradient)"
      />

      {/* Peak highlights */}
      <path
        d="M 60 80 L 70 100 L 50 100 Z"
        fill="url(#accentGradient)"
        opacity="0.8"
      />
      <path
        d="M 140 40 L 150 70 L 130 70 Z"
        fill="url(#accentGradient)"
        opacity="0.9"
      />

      {/* AI circuit node overlay */}
      <circle cx="100" cy="100" r="3" fill="#4ade80" opacity="0.8" />
      <circle cx="140" cy="80" r="2" fill="#22c55e" opacity="0.6" />
      <circle cx="60" cy="120" r="2" fill="#22c55e" opacity="0.6" />

      {/* Connecting lines (neural network style) */}
      <line x1="100" y1="100" x2="140" y2="80" stroke="#4ade80" strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="100" x2="60" y2="120" stroke="#4ade80" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
};

export default Logo;
