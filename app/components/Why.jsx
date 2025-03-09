import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: ['Quality', 'Guaranteed'],
    description: 'Only the finest and freshest ingredients for your family.',
    subdescription: '',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101741/taste55/features/quality.png',
  },
  {
    title: ['Local &', 'Sustainable'],
    description: 'Supporting local farms and bringing you the best from our community.',
    subdescription: '',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101737/taste55/features/local.png',
  },
  {
    title: ['Convenience', 'At Hand'],
    description: 'Easy online ordering, fast delivery, and curbside pickup.',
    subdescription: '',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101734/taste55/features/convenience.png',
  },
  {
    title: ['Affordable', 'Prices'],
    description: "Quality groceries at prices you'll love.",
    subdescription: '',
    image: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101729/taste55/features/affordable.png',
  },
];

export default function Why() {
  return (
    <section className="relative h-[1000px]">
      {/* Title Section */}
      <div className="bg-white w-full py-24 px-16">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-[64px] font-bold mb-4 text-left text-[#10482B] uppercase">Why Choose Us</h2>
          <p className="text-lg max-w-[700px] leading-relaxed text-[#10482B]">
            At Taste 55, we believe food is more than just sustenance, it&apos;s a personal relationship. We are committed to fostering community togetherness, offering you healthy and affordable options that cater to your unique needs. We provide the ingredients, and you make the choices that are best for your family.
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex-1 bg-white p-6"
          >
            <div className="mb-2 pl-24">
              {feature.title.map((line, i) => (
                <h3 key={i} className="text-[32px] font-semibold leading-tight text-[#10482B]">{line}</h3>
              ))}
            </div>
            <div className="pl-24">
              <p className="text-base leading-tight text-[#10482B]">{feature.description}</p>
              <p className="text-base leading-tight text-[#10482B]">{feature.subdescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Stripes */}
      <div className="flex w-full flex-grow">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex-1 bg-white relative h-[400px]"
          >
            <Image 
              src={feature.image} 
              alt={feature.title.join(' ')}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}