import React from "react";
import PropTypes from "prop-types";

const BookList = ({ books, onBookSelect }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => onBookSelect(book.id)}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

// define ProTypes, make correct data type input
BookList.PropTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookSelect: PropTypes.func.isRequired,
};

export default BookList;
