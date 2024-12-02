'use client'

import { useState, useEffect } from 'react'
import NextImage from 'next/image'
import { Marquee } from '@/app/components/magicui/marquee'
import { getCloudinaryUrl } from '@/utils/cloudinaryUrl'

export default function HotFood() {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const hotFoodImages = [
    {
      src: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095802/taste55/hot-food/1.jpg',
      alt: "Hot Food Image 1"
    },
    {
      src: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095810/taste55/hot-food/2.png',
      alt: "Hot Food Image 2"
    },
    {
      src: 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095818/taste55/hot-food/3.png',
      alt: "Hot Food Image 3"
    }
  ]

  return (
    <section className="relative py-0 bg-[#FFF3EC] overflow-hidden">
      <div className="container mx-auto px-3.5 md:px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6 order-1 md:order-2 py-12 md:py-20">
            <h2 className="text-4xl font-bold mb-6">Our Daily Hot Foods 🍽️ </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A growing movement of food lovers from the diaspora and the Americas introducing new and bold flavors into our kitchens and homes. At Taste55, we are a taste factory from the essentials to special dinners with our loved ones. From our freshly baked breads at 9 am, to our world cuisines lunch entrees served every day.
            </p>
          </div>

          <div className="relative order-2 md:order-1 h-[250px] md:h-full">
            <div className="w-screen -ml-3.5 md:-ml-4 overflow-hidden">
              <Marquee 
                horizontal={!isMobile} 
                pauseOnHover 
                className={`h-full ${isMobile ? 'h-[200px]' : 'h-[350px]'}`}
                repeat={3}
              >
                {hotFoodImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative rounded-lg overflow-hidden ${
                      isMobile ? 'h-[200px] w-[280px]' : 'h-[350px] w-[400px]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                    <NextImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      quality={75}
                      sizes={isMobile ? "280px" : "400px"}
                      onLoad={() => {
                        setLoadedImages(prev => new Set([...prev, index]))
                      }}
                      style={{
                        opacity: loadedImages.has(index) ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}