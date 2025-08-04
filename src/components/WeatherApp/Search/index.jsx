import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="text-center mb-15">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="px-5 py-2 w-[350px]  border-gray-600 border-l-1 border-t-1 border-b-1 rounded-l-full outline-none"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-r-full border-t-1 border-b-1 border-r-1 border-gray-600 text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
        onClick={handleSearch}
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
