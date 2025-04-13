import React from 'react';
import Image from 'next/image';

export default function Suppliers() {
  return (
    <section 
      className="relative flex flex-col md:flex-row min-h-screen"
      style={{
        backgroundImage: "url('/images/backgrounds/Our Value.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Left side - Text content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-16 py-8 md:py-0">
        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold text-[#10482B] leading-tight mb-3 sm:mb-4 md:mb-6">
            MEET OUR<br />
            SOURCING<br />
            PARTNERS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#10482B] max-w-[600px] leading-relaxed">
            Our farmers and producers are the heart of our success. We rely on them to ensure fresh, nutritious food fills our shelves every day, and to help us negotiate the best prices, all while supporting our commitment to quality and sustainability.
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative min-h-[250px] sm:min-h-[300px] md:min-h-0 p-4 sm:p-6 md:p-12 flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741514280/taste55/home/sdavyfyh8s2xfel7aevw.png"
          alt="Sourcing Partners"
          width={800}
          height={800}
          className="object-cover rounded-2xl shadow-lg w-full h-full"
          quality={85}
          priority
        />
      </div>
    </section>
  );
}