// Create a React component that displays a list of items and includes a "Shuffle Items" button. Use the useForceUpdate hook to shuffle the order of the items in the list without using React's state management.
import { useForceUpdate } from "./useForceUpdate";
import React from "react";

export default function App() {
  const initialItems = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  const { items, shuffleItem } = useForceUpdate(initialItems);
  return (
    <div>
      <h1>Shuffle Item Button</h1>
      <button onClick={shuffleItem}>Shuffle Item </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
