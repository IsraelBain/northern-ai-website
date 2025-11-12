import React from 'react';
import Card from './Card';

const FeatureCard = ({
  icon,
  title,
  description,
  features = [],
  delay = 0
}) => {
  return (
    <Card
      hover
      className="group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-northern-green-light mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default FeatureCard;
