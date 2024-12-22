import React from "react";
import { useApi } from "./useApi";

export default function App() {
  const {
    data: apiData,
    loading,
    error,
  } = useApi("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <div>
      <h1>Get the user Information</h1>
      <ul>
        {apiData.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <p>Data fetched successfully!</p>
    </div>
  );
}
