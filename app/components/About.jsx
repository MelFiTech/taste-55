export default function About() {
  return (
    <section className="py-20 bg-green-900 text-white relative">
      <div className="max-w-[1240px] mx-auto flex items-center relative">
        <div className="w-1/2 text-left mb-12 -mt-60">
          <h2 className="text-4xl font-bold mb-4">About Taste55</h2>
          <p className="text-lg mb-6">
            The inspiration behind Taste 55 and Partners spans three geographical regions – North America, Europe, and Sub-Saharan Africa heritage. This journey has forged illuminating conversations with farmers and food producers around the world about the practice of foodstuffs, ecological footprints, and food insecurity.
          </p>
          <button className="bg-white text-green-900 font-bold py-2 px-6 rounded-full">
            Continue Reading
          </button>
        </div>
        <div className="w-1/2">
          <img src="/image 28.png" alt="Groceries" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/vector.png')] bg-cover bg-center bg-no-repeat opacity- z-10"></div>
    </section>
  );
}