import {
  SET_CURRENT_BOOK,
  SET_CURRENT_PAGE,
  ADD_BOOK,
  REMOVE_BOOK,
} from "../constants/actionTypes";

export const setCurrentBook = (book) => ({
  type: SET_CURRENT_BOOK,
  payload: book, //action?
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});
