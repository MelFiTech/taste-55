import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Quality Guaranteed',
    subtitle: '',
    description: 'Only the finest and freshest ingredients.',
    image: '/quality.jpg',
    imageHeight: 'h-full',
  },
  {
    title: 'Local & Sustainable', 
    subtitle: '',
    description: 'Supporting farms and local communities.',
    image: '/local.jpg',
    imageHeight: 'h-full',
  },
  {
    title: 'Convenience',
    subtitle: 'At Hand',
    description: 'Easy ordering and fast delivery service.',
    image: '/convenience.jpg',
    imageHeight: 'h-full',
  },
  {
    title: 'Affordable',
    subtitle: 'Prices',
    description: 'Quality groceries at prices you will love.',
    image: '/affordable.jpg',
    imageHeight: 'h-full',
  },
];

export default function WhyMobile() {
  return (
    <section className="relative py-12 md:py-20">
      {/* Title Section */}
      <div className="max-w-[1240px] mx-auto mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">Why Choose Taste55</h2>
        <p className="text-base md:text-lg text-left max-w-[600px]">
          Every item is inspected for quality, freshness, and flavor, so you can shop with confidence knowing you&apos;re getting the very best for you and your family.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-[1440px] mx-auto">
        {features.slice(0, -1).map((feature, index) => (
          <div 
            key={index} 
            className={`${index % 2 === 0 ? 'bg-[#FFF7F2]' : 'bg-[#FFEAD8]'} rounded-lg overflow-hidden flex flex-col h-full`}
          >
            <div className="p-6 flex-shrink-0">
              <div className="mb-2">
                <h3 className="text-xl font-bold leading-tight">{feature.title} {feature.subtitle}</h3>
              </div>
              <div>
                <p className="text-sm leading-tight">{feature.description}</p>
              </div>
            </div>
            <div className="h-96 md:h-[900px] lg:h-[900px] relative w-full flex-grow">
              <Image 
                src={feature.image} 
                alt={feature.title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
              />
            </div>
          </div>
        ))}

        {/* Last Feature with Different Styling */}
        <div className="bg-[#FFEAD8] rounded-lg overflow-hidden flex flex-col h-full">
          <div className="p-6 flex-shrink-0">
            <div className="mb-2">
              <h3 className="text-xl font-bold leading-tight">{features[3].title} {features[3].subtitle}</h3>
            </div>
            <div>
              <p className="text-sm leading-tight">{features[3].description}</p>
            </div>
          </div>
          <div className="h-96 md:h-[1000px] lg:h-[1000px] relative w-full flex-grow">
            <Image 
              src={features[3].image} 
              alt={features[3].title}
              fill
              className="object-contain w-full h-full brightness-90 contrast-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}