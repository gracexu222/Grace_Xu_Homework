import { connect } from "react-redux";
import BookList from "../components/BookList";
import { setCurrentBook, removeBook } from "../redux/actions/bookActions";

const mapStateToProps = (state) => ({
  books: state.books.list,
});

const mapDispatchToProps = (dispatch) => ({
  onBookSelect: (book) => dispatch(setCurrentBook(book)),
  onBookRemove: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
