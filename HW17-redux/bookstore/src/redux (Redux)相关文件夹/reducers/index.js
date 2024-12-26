import { combineReducers } from "redux";
import booksReducer from "./bookReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  theme: themeReducer,
});

export default rootReducer;
