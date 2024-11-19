'use client'

import Image from 'next/image';
import useWindowSize from '@/app/hooks/useWindowSize';

export default function Hero() {
  const { width, height, isMobile, isTablet, isDesktop } = useWindowSize();

  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Added dark overlay */}
        <Image
          src="/grocery-store.jpg"
          alt="Grocery Store"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full min-h-screen flex flex-col justify-between text-center text-white px-4 py-16 sm:py-20">
        {isMobile ? (
          <div className="mt-auto mb-4">
            <h3 className="text-2xl font-serif font-normal mb-2">Your Friendly</h3>
            <h3 className="text-2xl font-serif font-normal">Neighborhood Grocer</h3>
          </div>
        ) : isTablet ? (
          <div className="mt-20">
            <h3 className="text-4xl font-serif font-normal mb-3">Your Friendly</h3>
            <h3 className="text-4xl font-serif font-normal mb-10">Neighborhood Grocer</h3>
          </div>
        ) : (
          <div className="mt-[calc(60vh+40px)]">
            <h3 className="text-4xl font-serif font-normal mb-3">Your Friendly</h3>
            <h3 className="text-4xl font-serif font-normal mb-4">Neighborhood Grocer</h3>
          </div>
        )}
        
        {/* See More Button/Arrow */}
        <div className="flex flex-col items-center animate-[bounce_1.5s_ease-in-out_infinite] mb-8 sm:mb-10">
          <span className="text-sm md:text-base text-white mb-1 md:mb-2">See more</span>
          <svg 
            className="w-4 h-4 md:w-6 md:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
