import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function About() {
  return (
    <section className="py-12 md:py-32 bg-green-900 text-white relative">
      {/* Background pattern - visible on both mobile and desktop */}
      <div className="absolute top-[50%] md:top-0 inset-x-0 bottom-0 bg-[url('/images/backgrounds/vector.png')] bg-cover bg-center bg-no-repeat opacity-100 z-50 scale-x-[-1] pointer-events-none -translate-x-1/6"></div>
      
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row items-center relative z-40">
        <div className="w-full md:w-1/2 text-left mb-6 md:mb-12 mt-0 md:-mt-60">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Story</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 max-w-[90%] sm:max-w-[95%]">
            The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints, and food insecurity.
          </p>
          <Link href="/about" className="inline-block w-full sm:w-auto">
            <Button variant="white" className="w-full sm:w-auto bg-white text-green-900 hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-green-900">Continue Reading</span>
            </Button>
          </Link>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] mx-auto md:ml-14 px-[10px] md:px-0">
            <Image 
              src="/image 28.png" 
              alt="Groceries" 
              fill
              className="object-contain rounded-lg" 
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}