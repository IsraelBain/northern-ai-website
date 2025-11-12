import React from 'react';
import Badge from './Badge';

const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true
}) => {
  const alignmentClass = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignmentClass}`}>
      {badge && (
        <div className={`${centered ? 'flex justify-center' : ''} mb-6`}>
          <Badge variant="outline" className="animate-fade-in">
            {badge}
          </Badge>
        </div>
      )}
      {title && (
        <h2 className="section-title animate-fade-in" style={{ animationDelay: '100ms' }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-xl text-gray-300 max-w-3xl ${centered ? 'mx-auto' : ''} animate-fade-in`}
          style={{ animationDelay: '200ms' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
