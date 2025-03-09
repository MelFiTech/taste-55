'use client'

import Image from 'next/image'

export default function AboutMission() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Section 1 */}
          <div className="flex-1 flex flex-col">
            <div className="relative w-[304px] h-[330px] mb-6 mx-auto">
              <Image
                src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741517375/taste55/home/yi0ebjljnmz0agujuub4.png"
                alt="Inspiration 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left text-[#10482B]">
              We Proudly Promote
            </h3>
            <p className="text-base text-[#10482B] text-left">
              Together with our neighborhood partners and producers, we're building a more connected and sustainable food ecosystem that celebrates diversity, quality, and community values;
            </p>
            <ul className="text-base text-[#10482B] mt-4 space-y-3 text-left">
              <li>• We promote local and underrepresented suppliers; we want to champion local and regional food and advocate for systemic change in our municipalities.</li>
              <li>• We teach food history; we believe that consumers should know what they are eating and through transparent labels to make the best decision health.</li>
              <li>• We believe grocery shopping should be an adventure, and a place where everybody knows your name, and we will work hard to keep you as a customer.</li>
              <li>• We believe that you can find healthy and affordable foods on a fair budget; eating health is not only for the affluent, but for everyday families and individuals.</li>
              <li>• We want to always push the envelope and acts as a bridge between our consumers and suppliers.</li>
              <li>• We believe in building a coalition with suppliers and to act as advocate to improve our food systems.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex-1 flex flex-col">
            <div className="relative w-[304px] h-[330px] mb-6 mx-auto">
              <Image
                src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741515484/taste55/home/ihoenilvfkdbmmttc1hd.png"
                alt="Inspiration 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left text-[#10482B]">
            About Taste55 & Partners
            </h3>
            <p className="text-base text-[#10482B] text-left">
            We want our neighborhood partners to feel at home by browsing our aisle while finding their childhood foods and passing down traditions to the next generation without the need to visit different stores. We aim to be a one-stop shop within the neighborhoods we serve.
            </p>
            <br />
            <p className="text-base text-[#10482B] text-left">
            Our team of local chefs, food designers, food scientists and home makers search around the globe to find distinguishing products and savory products that meets the need of a culturally rich neighborhood to share their extensive culinary knowledge into our everyday lives. We want you to live good and taste the finest foods with your loved ones. Most importantly, to be an environment where our neighborhood partners feel safe, heard, and respected.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex-1 flex flex-col">
            <div className="relative w-[304px] h-[330px] mb-6 mx-auto">
              <Image
                src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1741517471/taste55/home/dmvqrzne67ycteaqbyby.png"
                alt="Inspiration 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left text-[#10482B]">
              Our Values
            </h3>
            <p className="text-base text-[#10482B] text-left">
              To provide the highest quality of foods and products to our communities, to improve the overall health of the community and to encourage better food behaviours for future generations. We believe that food is medicine; the healthier the food, the healthier and stronger the community. We partner with find mission-driven farmers and producers that believe in building stronger community ties and preserving our environment with ethical and sustainable practices.  To consistently drive value:            </p>
            <ul className="text-base text-[#10482B] mt-4 space-y-3 text-left">
              <li>• We care deeply about our environment and our people.</li>
              <li>• We are passionate, caring, and disciplined Tastemakers.</li>
              <li>• We are budget-conscious, understanding the balance between profit and social impact.</li>
              <li>• We are fanatical about customer service and committed to solving challenges.</li>
              <li>• We are stewards of excellence, believing that excellence is a continuous action.</li>
              <li>• We don't take shortcuts—we always choose what is ethical and right.</li>
              <li>• We learn from our mistakes and take full accountability—because we believe practice makes perfect.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}