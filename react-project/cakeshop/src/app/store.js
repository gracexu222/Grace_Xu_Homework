import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";

//import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
//
