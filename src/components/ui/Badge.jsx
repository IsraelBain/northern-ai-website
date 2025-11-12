import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'glass px-4 py-2 rounded-full text-sm text-gray-300',
    primary: 'bg-northern-green text-white px-4 py-2 rounded-full text-sm font-semibold',
    outline: 'border border-northern-green-light border-opacity-30 px-4 py-2 rounded-full text-sm text-northern-green-light',
    success: 'bg-green-500 bg-opacity-20 text-green-400 px-3 py-1 rounded-full text-xs font-medium',
    warning: 'bg-yellow-500 bg-opacity-20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium'
  };

  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
