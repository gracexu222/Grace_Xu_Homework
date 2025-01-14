import React from "react";

const BookList = ({ books, onBookSelect, onBookRemove }) => (
  <div>
    <h2>Book List</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.author}
          <button onClick={() => onBookSelect(book)}>Read</button>
          <button onClick={() => onBookRemove(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;
