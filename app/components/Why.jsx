import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Quality',
    subtitle: 'Guaranteed',
    description: 'Only the finest and',
    subdescription: 'freshest ingredients.',
    image: '/quality.jpg',
  },
  {
    title: 'Local &', 
    subtitle: 'Sustainable',
    description: 'Supporting farms and',
    subdescription: 'local communities.',
    image: '/local.jpg',
  },
  {
    title: 'Convenience',
    subtitle: 'At Hand',
    description: 'Easy ordering and',
    subdescription: 'fast delivery service.',
    image: '/convenience.jpg',
  },
  {
    title: 'Affordable',
    subtitle: 'Prices',
    description: 'Quality groceries at',
    subdescription: 'prices you will love.',
    image: '/affordable.jpg',
  },
];

export default function Why() {
  return (
    <section className="relative h-[766px]">
      {/* Background Stripes with Content */}
      <div className="grid grid-cols-4 w-full h-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`${index % 2 === 0 ? 'bg-[#FFF7F2]' : 'bg-[#FFEAD8]'} h-full flex flex-col justify-end`}
          >
            <div className="flex flex-col h-[500px]">
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold leading-tight">{feature.title}</h3>
                  <h3 className="text-xl font-bold leading-tight">{feature.subtitle}</h3>
                </div>
                <div>
                  <p className="text-sm leading-tight">{feature.description}</p>
                  <p className="text-sm leading-tight">{feature.subdescription}</p>
                </div>
              </div>
              <div className="flex-grow relative">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Title Section */}
      <div className="absolute top-0 left-0 right-0">
        <div className="max-w-[1240px] mx-auto mb-12 px-4 pt-20">
          <h2 className="text-4xl font-bold mb-4 text-left">Why Choose Taste55</h2>
          <p className="text-lg text-left max-w-[600px]">
            Every item is inspected for quality, freshness, and flavor, so you can shop with confidence knowing you&apos;re getting the very best for you and your family.
          </p>
        </div>
      </div>
    </section>
  );
}