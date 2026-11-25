import ProjectCard from "./ProjectCard"
import Search from "./Search"

function ProjectList({ projects, search, onSearchChange }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold">
        Selected Projects
      </h2>

      <p className="text-stone-600 mt-3">
        A collection of my recent work.
      </p>

      <div className="mt-8">
        <Search
          search={search}
          onSearchChange={onSearchChange}
        />
      </div>

      <p className="text-sm text-[#626B50] mt-4">
        {projects.length} {projects.length === 1 ? "project" : "projects"} found
      </p>

      {projects.length === 0 ? (
        <div className="py-16 text-center">
          <h3 className="text-xl font-medium">
            No projects found.
          </h3>

          <p className="text-stone-500 mt-2">
            Try a different search term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>
      )}

    </section>
  )
}

export default ProjectList