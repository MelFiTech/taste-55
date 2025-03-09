import React from 'react';
import Image from 'next/image';

export default function Daily() {
  return (
    <section className="relative flex h-screen">
      {/* Left side - Image */}
      <div className="flex-1 relative">
        <Image
          src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741514954/taste55/home/zpzwddtkywj5udhbgf4u.png"
          alt="Daily Fresh Products"
          fill
          className="object-cover"
          quality={85}
          priority
        />
      </div>

      {/* Right side - Text content */}
      <div 
        className="flex-1 flex flex-col justify-center px-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dzbgzbccy/image/upload/v1741514946/taste55/home/j4ouuqvcwfoucy1cvfqr.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="text-[64px] font-bold text-[#10482B] leading-tight mb-2">
          OUR DAILY<br />
          HOT FOODS
        </h2>
        <p className="text-xl text-[#10482B] max-w-[600px] leading-relaxed">
          Our hot foods are carefully curated to celebrate the bold flavors and rich culinary traditions that make our neighborhoods unique. We take extraordinary pride in bringing the community together around a shared love for delicious, authentic meals.
        </p>
        <ul className="text-xl text-[#10482B] max-w-[600px] leading-relaxed mt-6 space-y-4">
          <li>• Eat delicious and savoury foods every day at our hot bar or on-the-go meal kits available everyday.</li>
          <li>• Our hot bar opens daily from 8am to 7pm. We&apos;re offering breakfast, lunch, and dinner.</li>
          <li>• We proudly feature local chefs who design our specialty menus, bringing fresh, seasonal flavors to the table throughout the year.</li>
        </ul>
      </div>
    </section>
  );
}