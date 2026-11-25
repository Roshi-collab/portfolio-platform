# Portfolio Platform

## Project Description

Portfolio Platform is a responsive Single Page Application (SPA) that I built using React and Tailwind CSS. The application allows users to view projects, search for specific projects and dynamically add new projects without reloading the page.

## Problem Statement

Managing a portfolio by manually updating the source code whenever a new project is added can be inconvenient.

## Proposed Solution

I developed a portfolio application that allows users to display, search and add projects dynamically using React state management and reusable components.

## Minimum Viable Product (MVP)

- A landing page displaying portfolio projects.
- A form for adding new projects dynamically.
- Search functionality using the filter() method.
- Responsive design across different screen sizes.
- Data persistence using localStorage.
- Links to GitHub repositories.

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- Tailwind CSS
- LocalStorage
- Jest
- React Testing Library

## Component Hierarchy

I divided my application into reusable functional components to make the code easier to understand, maintain and debug.

- App
  - Navbar
  - Hero
  - ProjectList
    - Search
    - ProjectCard
  - ProjectForm
  - Footer

App is the main parent component responsible for managing shared state and passing props to its child components.

## State Management

I used the useState hook to manage the projects array, search input and form inputs.

Shared state is managed in the App component using the concept of lifting state up, while individual form states are managed inside the ProjectForm component.

I also used the useEffect hook to save updated projects to localStorage whenever the projects state changes.

## React Concepts Applied

- Functional components
- Component hierarchy
- Props and destructuring
- State management using useState
- Side effects using useEffect
- Lifting state up
- Controlled components
- Event handling using onChange and onSubmit
- Conditional rendering
- List rendering using map()
- Search functionality using filter()
- Immutable state updates using the spread operator
- Callback functions

## Design and Styling

I used Tailwind CSS to style my application. I chose a cream and olive green colour palette because I wanted a simple, clean and modern portfolio.

I used Flexbox, CSS Grid and responsive breakpoints to make the application adapt to different screen sizes.

## Installation and Setup

Clone the repository and navigate into the project directory.

Install the dependencies:

`npm install`

Start the development server:

`npm run dev`

Open the localhost link displayed in the terminal.

## Testing

I used Jest and React Testing Library to perform automated testing.

The following functionalities were tested:

| Test | Result |
|---|---|
| Rendering initial projects | Passed |
| Filtering projects using search | Passed |
| Displaying an empty search results message | Passed |
| Adding a new project | Passed |
| Portfolio navigation | Passed |

All five automated tests passed successfully.

To run the tests:

`npm test`

## Challenges and Debugging

One of the challenges I faced was displaying project images after updating the initial project data.

The problem was that localStorage was still retrieving previously saved data instead of the updated data from projects.js.

I used Chrome Developer Tools to inspect localStorage, remove the outdated data and resolve the issue.

I also encountered incorrect import paths and image file formats during development, which I resolved through debugging.

## Limitations

The application is frontend-based and does not use a backend or database. Data persistence is handled using localStorage, meaning newly added projects are only available in the current browser.

Plantsy and Toy Tales are coursework projects with illustrative placeholder images.

## Future Improvements

- Implement a backend for permanent, shared data storage.
- Add edit and delete project functionality.
- Implement user authentication.
- Allow users to upload project images directly.
- Expand automated test coverage.

## What I Learned

Through this project, I improved my understanding of React component architecture, state management, props, event handling and one-way data flow.

I also gained practical experience in debugging, responsive design, reusable components and automated testing.

## Author

Rahma Mohamed

GitHub: https://github.com/Roshi-collab