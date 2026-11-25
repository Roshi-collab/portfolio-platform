import portrait from "../assets/portrait.png"

function Hero() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center gap-8"
    >
      <div className="w-full md:w-[45%] py-12">

        <p className="text-3xl text-stone-500">
          Hello,
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          I'm <span className="text-[#626B50]">Rahma.</span>
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Web Developer
        </h2>

        <p className="text-lg text-stone-600 mt-6 max-w-lg">
          I enjoy creating responsive and user-friendly
          websites with React and modern web technologies.
        </p>


      </div>

      <div className="w-full md:w-[55%] flex justify-center">

        <img
          src={portrait}
          alt="Portfolio portrait"
          className="w-full h-auto md:h-[80vh] object-contain"
        />

      </div>
    </section>
  )
}

export default Hero