import NextImage from 'next/image'
import { getCloudinaryUrl } from '@/utils/cloudinaryUrl'

export default function Value() {
  const values = [
    "We promote local and underrepresented suppliers; we want to champion local and regional food and advocate for systemic change in our municipalities",
    "We teach food history; we believe that consumers should know what they are eating and through transparent labels to make the best decision health",
    "We believe grocery shopping should be an adventure, and a place where everybody knows your name, and we will work hard to keep you as a customer",
    "We believe that you can find healthy and affordable foods on a fair budget; eating health is not only for the affluent, but for everyday families and individuals", 
    "We want to always push the envelope and acts as a bridge between our consumers and suppliers",
    "We believe in building a coalition with suppliers and to act as advocate to improve our food systems"
  ]

  const backgroundImage = 'https://res.cloudinary.com/dzbgzbccy/image/upload/v1733095969/taste55/backgrounds/Vector5.png'

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0">
        <NextImage
          src={backgroundImage}
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          priority={false}
          loading="lazy"
          quality={60}
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Value</h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            To provide the highest quality of foods and products to our communities, to improve the overall health of the community and to encourage better food behaviors for future generations. We believe that food is medicine; the healthier the food, the healthier and stronger the community. We partner with find mission-driven farmers and producers that believe in building stronger community ties and preserving our environment with ethical and sustainable practices.  To consistently drive value:
            </p>

            <ul className="space-y-3 md:space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-2 text-dark">
                  <span className="mt-1.5">•</span>
                  <span className="text-sm md:text-base font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
              <video
                src="https://res.cloudinary.com/dzbgzbccy/video/upload/v1733132133/taste55/home/girl.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}