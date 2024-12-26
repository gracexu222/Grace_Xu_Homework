import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/TodoSlice";
//import { Features } from '../../../bookstore/redux-devtools/packages/redux-devtools-app-core/src/reducers/instances';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
