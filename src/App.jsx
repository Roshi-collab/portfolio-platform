import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProjectList from "./components/ProjectList"
import ProjectForm from "./components/ProjectForm"
import Footer from "./components/Footer"
import initialProjects from "./data/projects"

function App() {

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("portfolioProjects")

    return savedProjects
      ? JSON.parse(savedProjects)
      : initialProjects
  })

  const [search, setSearch] = useState("")

  useEffect(() => {
    localStorage.setItem(
      "portfolioProjects",
      JSON.stringify(projects)
    )
  }, [projects])

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  )

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      ...previousProjects,
      newProject
    ])

    setSearch("")
  }

  return (
    <div id="home" className="min-h-screen bg-[#F5F1E8] text-[#292824]">

      <Navbar />

      <Hero />

      <ProjectList
        projects={filteredProjects}
        search={search}
        onSearchChange={setSearch}
      />

      <ProjectForm onAddProject={handleAddProject} />

      <Footer />

    </div>
  )
}

export default App