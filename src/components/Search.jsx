function Search({ search, onSearchChange }) {
  return (
    <input
      type="text"
      aria-label="Search projects"
      placeholder="Search projects..."
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      className="w-full md:w-96 border border-[#BDB8AA] px-4 py-3 outline-none focus:border-[#626B50]"
    />
  )
}

export default Search