import { useState } from "react"

function ProjectForm({ onAddProject }) {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [github, setGithub] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !category.trim() || !description.trim()) {
      return
    }

    const newProject = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      image: image.trim(),
      github: github.trim()
    }

    onAddProject(newProject)

    setTitle("")
    setCategory("")
    setDescription("")
    setImage("")
    setGithub("")
  }

  return (
    <section id="add-project" className="max-w-7xl mx-auto px-6 py-20 border-t border-[#DED5C5]">

      <h2 className="text-4xl font-bold">
        Add a Project
      </h2>

      <p className="text-stone-600 mt-3">
        Add something new to the portfolio.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-5 mt-8">

        <label>
          Project title
          <input
            type="text"
            placeholder="Enter project title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="block w-full border border-[#BDB8AA] p-3 mt-2"
          />
        </label>

        <label>
          Category
          <input
            type="text"
            placeholder="e.g. Web Development"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
            className="block w-full border border-[#BDB8AA] p-3 mt-2"
          />
        </label>

        <label>
          Description
          <textarea
            placeholder="Describe your project"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
            rows={4}
            className="block w-full border border-[#BDB8AA] p-3 mt-2"
          />
        </label>

        <label>
          Image URL (optional)
          <input
            type="url"
            placeholder="https://..."
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="block w-full border border-[#BDB8AA] p-3 mt-2"
          />
        </label>

        <label>
          GitHub URL (optional)
          <input
            type="url"
            placeholder="https://github.com/..."
            value={github}
            onChange={(event) => setGithub(event.target.value)}
            className="block w-full border border-[#BDB8AA] p-3 mt-2"
          />
        </label>

        <button
          type="submit"
          className="self-start bg-[#626B50] text-white px-8 py-3 hover:bg-[#292824]"
        >
          Add Project
        </button>

      </form>

    </section>
  )
}

export default ProjectForm