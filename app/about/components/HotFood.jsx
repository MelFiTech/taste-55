import NextImage from 'next/image'
import { Marquee } from '@/app/components/magicui/marquee'

export default function AboutProcess() {
  const hotFoodImages = [
    {
      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      alt: "White and brown cooked dish on white ceramic bowls"
    },
    {
      src: "https://images.pexels.com/photos/8018001/pexels-photo-8018001.jpeg", 
      alt: "Grilled chicken with lemon slice and dipping sauces"
    },
    {
      src: "https://images.pexels.com/photos/9412999/pexels-photo-9412999.jpeg",
      alt: "Close up shot of a roasted chicken"
    }
  ]

  return (
    <section className="relative py-12 md:py-20 bg-[#FFF3EC] overflow-hidden">
      <div className="absolute inset-0">
        <NextImage
          src="/FAQ (1).png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content - Moved to top on mobile */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2 animate-fade-in">
            <h2 className="text-[#10482B] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Daily Hot Foods
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A growing movement of food lovers from the diaspora and the Americas introducing new and bold flavors into our kitchens and homes. At Taste55, we are a taste factory from the essentials to special dinners with our loved ones. From our freshly baked breads at 9 am, to our world cuisines lunch entrees served every day.
            </p>
          </div>

          {/* Images Grid - Moved to bottom on mobile */}
          <div className="relative order-2 md:order-1 animate-fade-in">
            <div className="relative">
              {/* Top fade gradient */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FFF3EC] to-transparent z-10"></div>
              
              <Marquee horizontal pauseOnHover>
                {hotFoodImages.map((image, index) => (
                  <div key={index} className="relative h-[250px] w-full rounded-lg overflow-hidden">
                    <NextImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Marquee>

              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFF3EC] to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}