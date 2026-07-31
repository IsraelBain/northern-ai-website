import React from 'react';
import logoPng from '../assets/logo.png';

const Logo = ({ className = "h-8 w-8" }) => {
  return (
    <img
      src={logoPng}
      alt="Northern AI Systems"
      className={`${className} object-contain`}
    />
  );
};

export default Logo;
