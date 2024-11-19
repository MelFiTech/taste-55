import NextImage from 'next/image'

export default function Contact() {
  const values = [
    "We promote local and underrepresented suppliers; we want to champion local and regional food and advocate for systemic change in our municipalities",
    "We teach food history; we believe that consumers should know what they are eating and through transparent labels to make the best decision health",
    "We believe grocery shopping should be an adventure, and a place where everybody knows your name, and we will work hard to keep you as a customer",
    "We believe that you can find healthy and affordable foods on a fair budget; eating health is not only for the affluent, but for everyday families and individuals",
    "We want to always push the envelope and acts as a bridge between our consumers and suppliers", 
    "We believe in building a coalition with suppliers and to act as advocate to improve our food systems"
  ]

  return (
    <section className="py-12 md:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-[#10482B] text-4xl md:text-5xl lg:text-6xl font-bold">Our Value</h2>
            
            <p className="text-[#10482B] text-base md:text-lg leading-relaxed">
              To provide the highest quality of foods and products to our communities to improve the overall health of the community and encourage better food behaviors for future generations. We believe that food is medicine, the healthier the foods, better healthy and stronger communities. We do so by partnering with find mission-driver farmers and producers that believe in building stronger communities ties and preserving our environment with ethical and sustainable practices. To consistently drive value:
            </p>

            <ul className="space-y-3 md:space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-2 text-[#10482B] text-sm md:text-base">
                  <span className="mt-1.5 md:mt-2">•</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="relative w-full h-[300px] md:h-[600px]">
              <video
                src="/girl.mp4"
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