import React from 'react';

const suppliers = [
  {
    region: 'Africa',
    description: 'Bringing the vibrant flavors of quality groceries from Africa to your table.',
    image: '/africa.png',
  },
  {
    region: 'Asia',
    description: 'Experience the freshest quality, even in the coldest conditions.',
    image: '/asia.png', 
  },
  {
    region: 'Australia',
    description: 'Explore the rich and diverse flavors of Asia. From fresh produce to traditional ingredients.',
    image: '/australia.png',
  },
  {
    region: 'Caribbean', 
    description: 'Fresh, local, and uniquely Australian. Discover a range of quality groceries.',
    image: '/caribbean.png',
  },
  {
    region: 'North America',
    description: 'From coast to coast, bringing you the finest quality groceries. Fresh, local, and proudly North American.',
    image: '/north-america.png',
  },
  {
    region: 'South America',
    description: 'Elevate your culinary adventures and shop for fruits and traditional ingredients.',
    image: '/south-america.png',
  },
];

export default function Suppliers() {
  return (
    <section className="py-20 bg-green-900">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meet our Suppliers</h2>
          <p className="text-lg text-white max-w-3xl">
            Our suppliers ensure that the freshest, most nutritious food makes it to your table while fostering 
            a connection between you and your family.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {suppliers.map((supplier, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                  src={supplier.image} 
                  alt={`${supplier.region} suppliers`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{supplier.region}</h3>
                <p className="text-gray-200 line-clamp-2">{supplier.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}