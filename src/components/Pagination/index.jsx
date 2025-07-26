import React from "react";

function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  const generateNoOfPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center h-screen gap-1">
      <button className="bg-indigo-600 text-white rounded-full px-3 py-1">
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
          {pageNo}
        </button>
      ))}
      <button className="bg-indigo-600 text-white rounded-full px-3 py-1">
        Next
      </button>
    </div>
  );
}

export default Pagination;
