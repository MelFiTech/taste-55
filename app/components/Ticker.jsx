import React from 'react';
import { cn } from "@/lib/utils";

const Ticker = ({ items, direction = 'horizontal', speed = 'normal', className }) => {
  const containerClasses = cn(
    'overflow-hidden',
    direction === 'vertical' ? 'h-full' : 'w-full',
    className
  );

  const contentClasses = cn(
    'flex',
    direction === 'vertical' ? 'flex-col' : 'flex-row',
    {
      'animate-ticker-slow': speed === 'slow',
      'animate-ticker-normal': speed === 'normal',
      'animate-ticker-fast': speed === 'fast',
    },
    direction === 'vertical' ? 'animate-ticker-vertical' : 'animate-ticker'
  );

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;