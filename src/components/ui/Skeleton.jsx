import React from 'react';

const Skeleton = ({
  variant = 'text',
  width = 'w-full',
  height = 'h-4',
  className = ''
}) => {
  const baseStyles = 'animate-pulse bg-white bg-opacity-5 rounded';

  const variants = {
    text: `${height} ${width}`,
    circle: 'rounded-full',
    rectangle: 'rounded-lg',
    card: 'h-48 w-full rounded-2xl'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}></div>
  );
};

export const SkeletonCard = () => (
  <div className="glass p-6 rounded-2xl">
    <Skeleton variant="circle" width="w-12" height="h-12" className="mb-4" />
    <Skeleton variant="text" width="w-3/4" height="h-6" className="mb-2" />
    <Skeleton variant="text" width="w-full" height="h-4" className="mb-2" />
    <Skeleton variant="text" width="w-5/6" height="h-4" />
  </div>
);

export const SkeletonText = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, idx) => (
      <Skeleton
        key={idx}
        variant="text"
        width={idx === lines - 1 ? 'w-4/5' : 'w-full'}
      />
    ))}
  </div>
);

export default Skeleton;
