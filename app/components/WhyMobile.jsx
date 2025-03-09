import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Quality Guaranteed',
    subtitle: '',
    description: 'Only the finest, freshest ingredients for your family.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101741/taste55/features/quality.png',
    imageHeight: 'h-full',
  },
  {
    title: 'Local & Sustainable', 
    subtitle: '',
    description: 'Supporting local farms and bringing you the best from our community.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101737/taste55/features/local.png',
    imageHeight: 'h-full',
  },
  {
    title: 'Convenience',
    subtitle: 'At Hand',
    description: 'Easy online ordering, fast delivery, and curbside pickup.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101734/taste55/features/convenience.png',
    imageHeight: 'h-full',
  },
  {
    title: 'Affordable',
    subtitle: 'Prices',
    description: 'Quality groceries at prices you&apos;ll love.',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101729/taste55/features/affordable.png',
    imageHeight: 'h-full',
  },
];

export default function WhyMobile() {
  return (
    <section className="relative py-12 md:py-20">
      {/* Title Section */}
      <div className="max-w-[1240px] mx-auto mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left text-[#10482B]">WHY CHOOSE US</h2>
        <p className="text-base md:text-lg text-left max-w-[600px] text-[#10482B]">
          At Taste 55, we believe food is more than just sustenance, it's a personal relationship. We are committed to fostering community togetherness, offering you healthy and affordable options that cater to your unique needs. We provide the ingredients, and you make the choices that are best for your family.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-[1440px] mx-auto">
        {features.slice(0, -1).map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden flex flex-col h-full"
          >
            <div className="p-6 flex-shrink-0">
              <div className="mb-2">
                <h3 className="text-xl font-bold leading-tight text-[#10482B]">{feature.title} {feature.subtitle}</h3>
              </div>
              <div>
                <p className="text-sm leading-tight text-[#10482B]">{feature.description}</p>
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
        <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
          <div className="p-6 flex-shrink-0">
            <div className="mb-2">
              <h3 className="text-xl font-bold leading-tight text-[#10482B]">{features[3].title} {features[3].subtitle}</h3>
            </div>
            <div>
              <p className="text-sm leading-tight text-[#10482B]">{features[3].description}</p>
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