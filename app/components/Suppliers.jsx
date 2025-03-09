import React from 'react';
import Image from 'next/image';

export default function Suppliers() {
  return (
    <section className="relative flex h-screen">
      {/* Left side - Text content */}
      <div 
        className="flex-1 flex flex-col justify-center px-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dzbgzbccy/image/upload/v1741514444/taste55/home/iicahvk96kr6qo1ji6kl.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="text-[64px] font-bold text-[#10482B] leading-tight mb-2">
          MEET OUR<br />
          SOURCING<br />
          PARTNERS
        </h2>
        <p className="text-xl text-[#10482B] max-w-[600px] leading-relaxed">
          Our farmers and producers are the heart of our success. We rely on them to ensure fresh, nutritious food fills our shelves every day, and to help us negotiate the best prices, all while supporting our commitment to quality and sustainability.
        </p>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative">
        <Image
          src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741514280/taste55/home/sdavyfyh8s2xfel7aevw.png"
          alt="Sourcing Partners"
          fill
          className="object-cover"
          quality={85}
          priority
        />
      </div>
    </section>
  );
}