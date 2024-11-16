import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Added dark overlay */}
        <Image
          src="/grocery-store.jpg" // Make sure to add this image to your public folder
          alt="Grocery Store"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center text-center text-white pb-10">
        <h3 className="text-7xl font-serif font-normal mb-4">Your Friendly</h3>
        <h3 className="text-7xl font-serif font-normal mb-12">Neighborhood Grocer</h3>
        
        {/* See More Button/Arrow */}
        <div className="flex flex-col items-center animate-[bounce_3s_ease-in-out_infinite]">
          <span className="text-white mb-2">See more</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
