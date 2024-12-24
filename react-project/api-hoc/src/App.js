import React from "react";
import { useApi } from "./useApi";

export default function App() {
  const {
    data: apiData,
    loading: apiLoading,
    error: apiError,
  } = useApi("https://jsonplaceholder.typicode.com/posts");
  if (apiLoading) return <p>Loading...</p>;
  if (apiError) return <p>Error:{apiError}</p>;
  console.log(apiData);
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
