function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-6">

      <a href="#home" className="text-5xl font-serif font-bold text-[#626B50]">
        R.
      </a>

      <div className="flex items-center gap-8 font-medium">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Portfolio</a>
      </div>

      <a href="#add-project" className="bg-[#626B50] text-white px-6 py-3 rounded-full">
        Add Project
      </a>

    </nav>
  )
}

export default Navbar