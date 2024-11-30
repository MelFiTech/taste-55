'use client'

import Image from 'next/image'

export default function AboutMission() {
    const images = [
      { url: '/1.png', alt: 'Image 1', width: 384, height: 256 },
      { url: '/2.png', alt: 'Image 2', width: 384, height: 256 },
      { url: '/3.png', alt: 'Image 3', width: 384, height: 256 },
      { url: '/4.png', alt: 'Image 4', width: 384, height: 256 },
      { url: '/5.png', alt: 'Image 5', width: 384, height: 256 },
      { url: '/6.png', alt: 'Image 6', width: 384, height: 256 },
      { url: '/7.png', alt: 'Image 7', width: 384, height: 256 },
      { url: '/8.png', alt: 'Image 8', width: 384, height: 256 },
      { url: '/9.png', alt: 'Image 9', width: 384, height: 256 },
      { url: '/10.png', alt: 'Image 10', width: 384, height: 256 }
    ]

    return (
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">Our Global Inspiration</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints and food insecurity.
            </p>
            
            <div className="w-full">
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
                      width={image.width}
                      height={image.height}
                      className="object-cover w-full h-full"
                      loading={index < 4 ? "eager" : "lazy"}
                      priority={index < 4}
                      quality={75}
                      sizes="(max-width: 768px) 288px, 384px"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR4hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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