import React from 'react';
import Image from 'next/image';

const suppliers = [
  {
    region: 'Africa',
    description: 'Ethically sourced products like fresh produce, spices, and specialty goods reflecting the continents rich agricultural heritage and cultural flavors.',
    image: '/africa.png',
  },
  {
    region: 'Asia',
    description: 'We offer variety of authentic products, from fresh produce to specialty items, showcasing the diverse culinary traditions and agricultural richness.',
    image: '/asia.png', 
  },
  {
    region: 'Australia',
    description: 'We provide high-quality products, including fresh produce, meats, and specialty goods, reflecting the our unique agriculture and sustainable practices.',
    image: '/australia.png',
  },
  {
    region: 'Caribbean', 
    description: 'We offer vibrant and authentic products, including tropical fruits, spices, and specialty items, celebrating the regions rich culinary heritage and cultural diversity.',
    image: '/caribbean.png',
  },
  {
    region: 'North America',
    description: 'We deliver a wide range of products, from fresh produce and dairy to specialty goods, highlighting the our agricultural abundance and diverse culinary skills.',
    image: '/north-America.png',
  },
  {
    region: 'South America',
    description: 'We provide rich & authentic products, including tropical fruits, coffee, and grains, showcasing our agricultural diversity and vibrant culinary traditions.',
    image: '/south-america.png',
  },
];

export default function Suppliers() {
  return (
    <section className="relative py-20 bg-green-900">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-green-900 z-0" /> {/* Green background */}
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover mix-blend-overlay"
          quality={100}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meet our Sourcing Partners</h2>
          <p className="text-lg text-white max-w-3xl">
          Our partners ensure that the freshest, most nutritious foods make it to your table while fostering a connection between you and your family.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {suppliers.map((supplier, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <Image 
                  src={supplier.image} 
                  alt={`${supplier.region} suppliers`} 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{supplier.region}</h3>
                <p className="text-gray-200">{supplier.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}