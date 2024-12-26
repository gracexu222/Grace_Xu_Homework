import { connect } from "react-redux";
import Reader from "../components/Reader";
import { setCurrentPage } from "../redux/actions/bookActions";

const mapStateToProps = (state) => ({
  book: state.books.currentBook,
  currentPage: state.books.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (page) => dispatch(setCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
