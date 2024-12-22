//Task: Implement a component that updates a greeting message based on the user's name and time of day, logging changes when the name or time updates.
import { useDidUpdate } from "./hook/usedidupdate";

import React from "react";
// Import the custom hook

// Main application component
export default function App() {
  const { inputName, getInputName, greeting } = useDidUpdate(); // Use the hook to get state and actions

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Dynamic Greeting</h1>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Enter your name:
        <input
          type="text"
          value={inputName} // Bind input value to `name`
          onChange={(e) => getInputName(e.target.value)} // Update state on input change
          style={{
            marginLeft: "10px",
            padding: "5px",
            fontSize: "16px",
          }}
        />
      </label>
      {greeting && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {greeting}
        </p>
      )}
    </div>
  );
}
