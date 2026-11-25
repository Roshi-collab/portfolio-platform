function Footer() {
  return (
    <footer className="bg-[#EAE5D9] border-t border-[#DED5C5]">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <a href="#home" className="text-5xl font-serif font-bold text-[#626B50]">
              R.
            </a>

            <h3 className="font-semibold mt-4">
              Rahma
            </h3>

            <p className="text-sm text-stone-600 mt-2">
              Web Developer
            </p>

            <p className="text-sm text-stone-600 mt-3 max-w-xs">
              Designed and developed with React.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm text-stone-600">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#projects" className="hover:underline">Portfolio</a>
              <a href="#add-project" className="hover:underline">Add Project</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Projects
            </h3>

            <div className="flex flex-col gap-3 text-sm text-stone-600">

              <a
                href="https://github.com/Roshi-collab/olvera"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Olvera Skincare
              </a>

              <a
                href="https://github.com/Roshi-collab/react-hooks-plantshop-cr-vite"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Plantsy
              </a>

              <a
                href="https://github.com/Roshi-collab/react-hooks-toy-tales-vite"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Toy Tales
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Connect
            </h3>

            <div className="flex flex-col gap-3 text-sm text-stone-600">

              <a
                href="https://github.com/Roshi-collab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>

              <a href="#home" className="hover:underline">
                Back to top ↑
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-[#C9C2B4] mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-stone-500">

          <p>
            © {new Date().getFullYear()} Roshi. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer