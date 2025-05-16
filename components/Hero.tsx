import Navbar from "./navbar"

export default function Hero() {
  return (
    <section className="relative w-[90vw] h-[90vh] mx-auto mt-4 rounded-[40px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navbar */}
      <div className="absolute top-3 left-[4%] z-10 text-white space-y-6">
        <Navbar />
      </div>

      {/* Text Overlay */}
      <div className="absolute top-[25%] left-[7%] z-10 text-white">
        <p className="text-xl md:text-2xl font-medium">Hello, I’m</p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none mt-1">
          Nehal Singhal
        </h1>
        <p className="text-xl md:text-2xl font-light mt-2">A Tedx Speaker, Founder and Engineer <br/> passionate about AI/ML, Silicon Chips and Entrepreneurship. </p>
      </div>
    </section>
  );
}



