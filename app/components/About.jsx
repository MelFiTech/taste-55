import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function About() {
  return (
    <section className="py-12 md:py-20 bg-green-900 text-white relative">
      <div className="absolute inset-0 hidden md:block bg-[url('/vector.png')] bg-cover bg-center bg-no-repeat opacity- z-30 scale-x-[-1]"></div>
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row items-center relative z-20">
        <div className="w-full md:w-1/2 text-left mb-8 md:mb-12 mt-0 md:-mt-60">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-base md:text-lg mb-6">
            The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints, and food insecurity.
          </p>
          <Link href="/about" className="inline-block">
            <Button variant="white" className="bg-white text-green-900 hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-green-900">Continue Reading</span>
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/image 28.png" alt="Groceries" width={600} height={400} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}