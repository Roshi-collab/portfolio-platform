function ProjectCard({ project }) {
  return (
    <div className="border-b border-[#DED5C5] pb-6">

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="h-64 bg-[#DED5C5] flex items-center justify-center text-[#626B50]">
          Project image
        </div>
      )}

      <p className="text-sm uppercase text-[#626B50] mt-5">
        {project.category}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {project.title}
      </h3>

      <p className="text-stone-600 mt-2">
        {project.description}
      </p>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-[#626B50] font-medium hover:underline"
        >
          View on GitHub ↗
        </a>
      )}

    </div>
  )
}

export default ProjectCard