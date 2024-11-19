import NextImage from 'next/image'

export default function AboutTeam() {
  return (
    <section className="relative py-12 md:py-20 bg-[#E12D39] text-white">
      <div className="absolute inset-0">
        <NextImage
          src="/vector 5.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="max-w-xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">At Taste55 & Partners,</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              We want our neighborhood partners to feel at home by browsing our aisle while finding their childhood foods and passing down traditions to the next generation without the need to visit different stores. We aim to be a one-stop shop within the neighborhoods we serve.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Our team of local chiefs, food designers, food scientists and home makers search around the globe on find distinguishing products and savory products that meets the need of a culturally rich neighborhood to share their extensive culinary knowledge into our everyday lives. We want you to live good and taste the finest foods with your loved ones. Most importantly, to be an environment where our neighborhood partners feel safe, heard, and respected.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[700px] rounded-2xl overflow-hidden mx-auto w-full mt-8 md:mt-0">
            <NextImage
              src="/basket.png"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}