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
    <div className="flex gap-1">
      <button
        className="bg-indigo-600 text-white rounded-full px-3 py-1 disabled:bg-indigo-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button
          className={
            currentPage === pageNo
              ? "bg-green-600 text-white rounded-full px-3 py-1"
              : "bg-blue-500 text-white rounded-full px-3 py-1"
          }
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        className="bg-indigo-600 text-white rounded-full px-3 py-1 disabled:bg-indigo-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
