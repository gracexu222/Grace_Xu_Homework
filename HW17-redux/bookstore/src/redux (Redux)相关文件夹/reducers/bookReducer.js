import {
  SET_CURRENT_BOOK,
  SET_CURRENT_PAGE,
  ADD_BOOK,
  REMOVE_BOOK,
} from "../constants/actionTypes";

const initialState = {
  list: [],
  currentBook: null,
  currentPage: 1,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BOOK:
      return { ...state, currentBook: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case ADD_BOOK:
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_BOOK:
      return {
        ...state,
        list: state.list.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default booksReducer;
