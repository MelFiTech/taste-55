import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Quality Guaranteed',
    description: 'Only the finest and',
    subdescription: 'freshest ingredients.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101741/taste55/features/quality.png',
  },
  {
    title: 'Local & Sustainable',
    description: 'Supporting farms and',
    subdescription: 'local communities.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101737/taste55/features/local.png',
  },
  {
    title: 'Convenience At Hand',
    description: 'Easy ordering and',
    subdescription: 'fast delivery service.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101734/taste55/features/convenience.png',
  },
  {
    title: 'Affordable Prices',
    description: 'Quality groceries that',
    subdescription: 'contain fair prices.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101729/taste55/features/affordable.png',
  },
];

export default function Why() {
  return (
    <section className="relative h-[800px]">
      {/* Title Section */}
      <div className="bg-white w-full py-24">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-left">Why Choose Us</h2>
          <p className="text-lg max-w-[700px] leading-relaxed">
            Every item is inspected for quality, freshness, and flavor, so you can shop with confidence 
            knowing you're getting the very best for you and your family.
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="grid grid-cols-4 w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`${index % 2 === 0 ? 'bg-[#FFF7F2]' : 'bg-[#FFEAD8]'} p-6`}
          >
            <div className="mb-2">
              <h3 className="text-xl font-bold leading-tight">{feature.title}</h3>
              <h3 className="text-xl font-bold leading-tight">{feature.subtitle}</h3>
            </div>
            <div>
              <p className="text-sm leading-tight">{feature.description}</p>
              <p className="text-sm leading-tight">{feature.subdescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Stripes */}
      <div className="grid grid-cols-4 w-full flex-grow">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`${index % 2 === 0 ? 'bg-[#FFF7F2]' : 'bg-[#FFEAD8]'} relative h-[400px]`}
          >
            <Image 
              src={feature.image} 
              alt={feature.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}