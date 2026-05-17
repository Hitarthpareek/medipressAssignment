export default function SearchBar({
  search,
  setSearch,
}) {

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search employee..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}