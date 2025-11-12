import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  gradient = false,
  padding = 'p-6'
}) => {
  const baseStyles = 'glass rounded-2xl';
  const hoverStyles = hover ? 'glass-hover' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-northern-green-dark to-northern-green' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
