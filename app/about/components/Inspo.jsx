'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AboutMission() {
    const [loadedImages, setLoadedImages] = useState(new Set())
    
    const images = [
      {
        url: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095907/taste55/inspo/4.jpg',
        alt: 'Inspiration 4'
      },
      {
        url: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095913/taste55/inspo/5.png',
        alt: 'Inspiration 5'
      },
      {
        url: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095923/taste55/inspo/6.png',
        alt: 'Inspiration 6'
      },
      {
        url: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095932/taste55/inspo/7.png',
        alt: 'Inspiration 7'
      },
      {
        url: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095939/taste55/inspo/8.png',
        alt: 'Inspiration 8'
      },
      {
        url: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095947/taste55/inspo/9.png',
        alt: 'Inspiration 9'
      }
    ]

    return (
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">
              Our Global Inspiration
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints and food insecurity.
            </p>
            
            <div className="w-full">
              <div 
                className="flex animate-marquee whitespace-nowrap"
                style={{
                  animation: 'marquee 20s linear infinite',
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
                      width={384}
                      height={256}
                      className="object-cover w-full h-full"
                      loading={index < 3 ? "eager" : "lazy"}
                      priority={index < 3}
                      quality={60}
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