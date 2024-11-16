import React from 'react';
import Image from 'next/image';

const Value = () => {
  return (
    <section className="relative w-full py-20 px-4">
      <div className="absolute inset-0">
        <Image
          src="/Vector 5.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-[1240px] mx-auto text-center">
        <h2 className="text-[42px] font-bold mb-8">Our Value</h2>
        <p className="text-[18px] leading-[1.8] max-w-[900px] mx-auto">
          To provide the highest quality of foods and products to our communities to improve the 
          overall health of the community and encourage better food behaviors for future 
          generations. We believe that food is medicine, the healthier the foods, better healthy and 
          stronger communities. We do so by partnering with find mission-driver farmers and 
          producers that believe in building stronger communities ties and preserving our 
          environment with ethical and sustainable practices.
        </p>
      </div>
    </section>
  );
};

export default Value;