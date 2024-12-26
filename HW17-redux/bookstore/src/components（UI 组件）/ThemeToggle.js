import React from "react";

const ThemeToggle = ({ theme, onToggle }) => (
  <div>
    <p>Current Theme: {theme}</p>
    <button onClick={onToggle}>Toggle Theme</button>
  </div>
);

export default ThemeToggle;
