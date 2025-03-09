import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function About() {
  return (
    <section className="relative flex h-screen">
      {/* Left side - Text content */}
      <div className="flex-1 flex flex-col justify-center px-16">
        <h2 className="text-[64px] font-bold text-[#10482B] leading-tight mb-2">
          OUR STORY
        </h2>
        <p className="text-xl text-[#10482B] max-w-[600px] leading-relaxed mb-8">
          The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints and food insecurity. At the core of these environmental and biodiversity challenges wrests our reliance on traditional food systems to feed billions of people with various tastes and food traditions.
        </p>
        <Link href="/about">
          <Button variant="white" className="bg-[#10482B] text-white hover:bg-[#0d3b24] transition-colors">
            Continue Reading
          </Button>
        </Link>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741515484/taste55/home/ihoenilvfkdbmmttc1hd.png"
          alt="Groceries"
          width={500}
          height={477}
          className="object-cover"
          quality={85}
          priority
        />
      </div>
    </section>
  );
}