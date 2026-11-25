import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"

beforeEach(() => {
  localStorage.clear()
})

test("displays the initial projects", () => {
  render(<App />)

  expect(screen.getByRole("heading", {
    name: "Olvera Skincare"
  })).toBeInTheDocument()

  expect(screen.getByRole("heading", {
    name: "Plantsy"
  })).toBeInTheDocument()

  expect(screen.getByRole("heading", {
    name: "Toy Tales"
  })).toBeInTheDocument()
})

test("filters projects using search", () => {
  render(<App />)

  fireEvent.change(screen.getByPlaceholderText("Search projects..."), {
    target: { value: "Olvera" }
  })

  expect(screen.getByRole("heading", {
    name: "Olvera Skincare"
  })).toBeInTheDocument()

  expect(screen.queryByRole("heading", {
    name: "Plantsy"
  })).not.toBeInTheDocument()
})

test("displays a message when no projects match", () => {
  render(<App />)

  fireEvent.change(screen.getByPlaceholderText("Search projects..."), {
    target: { value: "Unknown Project" }
  })

  expect(screen.getByText("No projects found.")).toBeInTheDocument()
})

test("adds a new project", () => {
  render(<App />)

  fireEvent.change(screen.getByPlaceholderText("Enter project title"), {
    target: { value: "Test Portfolio" }
  })

  fireEvent.change(screen.getByPlaceholderText("e.g. Web Development"), {
    target: { value: "React" }
  })

  fireEvent.change(screen.getByPlaceholderText("Describe your project"), {
    target: { value: "A React portfolio application." }
  })

  fireEvent.click(screen.getByRole("button", {
    name: "Add Project"
  }))

  expect(screen.getByRole("heading", {
    name: "Test Portfolio"
  })).toBeInTheDocument()

  expect(screen.getByPlaceholderText("Enter project title")).toHaveValue("")

  expect(localStorage.getItem("portfolioProjects")).toContain("Test Portfolio")
})

test("portfolio navigation links to the projects section", () => {
  render(<App />)

  const navigation = screen.getByRole("navigation")
  const link = navigation.querySelector('a[href="#projects"]')

  expect(link).toBeInTheDocument()
  expect(document.getElementById("projects")).toBeInTheDocument()
})