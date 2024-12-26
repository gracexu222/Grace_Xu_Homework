import React from "react";

const Reader = ({ book, currentPage, onPageChange }) => {
  if (!book) return <p>Please select a book to start reading.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Page {currentPage}</p>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= book.totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Reader;
