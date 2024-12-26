import React from "react";
import PropTypes from "prop-types";

const Reader = ({ book, currentPage, onPageChange }) => {
  if (!book) {
    return <p>Please select a book to start reading.</p>;
  }

  const handleNextPage = () => {
    if (currentPage < book.totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>
        Page {currentPage} of {book.totalPages}
      </p>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === book.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

//define PropTypes
Reader.PropTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    totalPages: PropTypes.string.isRequired,
  }),
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Reader;
