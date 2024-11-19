export default function AboutHero() {
  return (
    <section className="relative h-[70vh]">
      <div className="absolute inset-0">
        <video
          src="/fresh.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Added overlay */}
      </div>
      <div className="relative z-10 h-full flex items-end justify-center pb-10 md:pb-20 container mx-auto px-4">
        <h3 className="text-white text-4xl md:text-7xl font-regular font-serif text-center">About us</h3>
      </div>
    </section>
  )
}