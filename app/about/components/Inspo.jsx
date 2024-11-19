'use client'

import Image from 'next/image'

export default function AboutMission() {
    const images = [
      { url: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg', alt: 'Grocery store aisle' },
      { url: 'https://images.pexels.com/photos/8426380/pexels-photo-8426380.jpeg', alt: 'Assorted fruits in basket' },
      { url: 'https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg', alt: 'Cooked chicken dish' },
      { url: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg', alt: 'Woman holding fruit stand' },
      { url: 'https://images.pexels.com/photos/27175867/pexels-photo-27175867.jpeg', alt: 'Couple shopping for peppers' },
      { url: 'https://images.pexels.com/photos/8422691/pexels-photo-8422691.jpeg', alt: 'Elderly man with vegetables' }
    ]

    return (
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">Our Global Inspiration</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints and food insecurity.
            </p>
            
            <div className="relative w-full overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div 
                className="flex animate-marquee whitespace-nowrap"
                style={{
                  animation: 'marquee 15s linear infinite',
                  willChange: 'transform'
                }}
              >
                {[...images, ...images].map((image, index) => (
                  <div 
                    key={index}
                    className="relative h-48 md:h-64 w-72 md:w-96 flex-shrink-0 mx-2 md:mx-4 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 288px, 384px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}