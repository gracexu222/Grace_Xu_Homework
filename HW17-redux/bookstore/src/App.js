import React from "react";
import BookListContainer from "./containers/BookListContainer";
import ReaderContainer from "./containers/ReaderContainer";
import ThemeToggleContainer from "./containers/ThemeToggleContainer";

const App = () => (
  <div>
    <ThemeToggleContainer />
    <BookListContainer />
    <ReaderContainer />
  </div>
);

export default App;
