import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

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
      <div>
        <button
          className="bg-indigo-600 text-white rounded-full px-3 py-2 disabled:bg-indigo-300"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FcPrevious />
        </button>
      </div>
      {generateNoOfPages().map((pageNo) => (
        <div key={pageNo}>
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
        </div>
      ))}
      <div>
        <button
          className="bg-indigo-600 text-white rounded-full px-3 py-2 disabled:bg-indigo-300"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
