import React, { useState } from "react";
import Pagination from ".";

function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, idx) => ({
    id: idx,
    name: `Product ${idx + 1}`,
  }));

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;

  const currentListOfItems = dummyData.slice(indexOfFirstPage, indexOfLastPage);

  const handleOnPageChange = (currentPage) => setCurrentPage(currentPage);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-1 text-white bg-black">
      <h1 className="text-9xl mb-20">Pagination</h1>
      <ul className="text-3xl mb-15">
        {currentListOfItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / itemsPerPage)}
          onPageChange={handleOnPageChange}
        />
      </div>
    </div>
  );
}

export default PaginationTest;
