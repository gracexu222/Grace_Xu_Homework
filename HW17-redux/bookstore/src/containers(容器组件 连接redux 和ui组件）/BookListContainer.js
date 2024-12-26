import { connect } from "react-redux";
import BookList from "../components（UI 组件）/BookList";

const mapStateToProps = (state) => {
  const { books, searchQuery } = state;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return { book: filteredBooks };
};
const mapDispatchToProps = (dispatch) => ({
  onBookSelect: (bookId) => dispatch(setCurrentBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
