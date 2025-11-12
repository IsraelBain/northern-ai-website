import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  fullWidth = false
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'px-8 py-4 bg-gradient-to-r from-northern-green to-northern-green-light text-white hover:shadow-lg hover:shadow-northern-green/50 hover:scale-105 border border-northern-green-light border-opacity-30',
    secondary: 'px-8 py-4 glass glass-hover text-white',
    ghost: 'px-6 py-3 text-northern-green-light hover:text-northern-green transition-colors'
  };

  const sizes = {
    sm: 'text-sm px-6 py-2',
    md: 'text-base px-8 py-4',
    lg: 'text-lg px-10 py-5'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
