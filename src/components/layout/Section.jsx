import React from 'react';

const Section = ({
  id,
  children,
  className = '',
  background = false
}) => {
  return (
    <section
      id={id}
      className={`py-24 relative ${className}`}
    >
      {background && (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-northern-green opacity-5 rounded-full blur-3xl"></div>
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
