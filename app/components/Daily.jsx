import React from 'react';
import Image from 'next/image';

export default function Daily() {
  return (
    <section 
      className="relative flex flex-col-reverse md:flex-row min-h-screen"
      style={{
        backgroundImage: "url('/images/backgrounds/Our Value (1).png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Left side - Image (moves to bottom on mobile) */}
      <div className="flex-1 relative min-h-[250px] sm:min-h-[300px] md:min-h-0 p-4 sm:p-6 md:p-12 flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741514954/taste55/home/zpzwddtkywj5udhbgf4u.png"
          alt="Daily Fresh Products"
          width={800}
          height={800}
          className="object-cover rounded-2xl shadow-lg w-full h-full"
          quality={85}
          priority
        />
      </div>

      {/* Right side - Text content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-16 py-8 md:py-0">
        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold text-[#10482B] leading-tight mb-3 sm:mb-4 md:mb-6">
            OUR DAILY<br />
            HOT FOODS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#10482B] max-w-[600px] leading-relaxed">
            Our hot foods are carefully curated to celebrate the bold flavors and rich culinary traditions that make our neighborhoods unique. We take extraordinary pride in bringing the community together around a shared love for delicious, authentic meals.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#10482B] max-w-[600px] leading-relaxed mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            <li>• Eat delicious and savoury foods every day at our hot bar or on-the-go meal kits available everyday.</li>
            <li>• Our hot bar opens daily from 8am to 7pm. We&apos;re offering breakfast, lunch, and dinner.</li>
            <li>• We proudly feature local chefs who design our specialty menus, bringing fresh, seasonal flavors to the table throughout the year.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}