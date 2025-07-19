import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="px-3 py-1 rounded-xl shadow-2xl"
      />
      <button type="submit" className="px-3 py-1 rounded-xl text-white bg-indigo-600 mx-2" onClick={handleSearch}>
        Submit
      </button>
    </div>
  );
};

export default Search;
