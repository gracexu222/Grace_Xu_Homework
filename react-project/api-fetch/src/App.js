import React, { useState } from "react";

/**
 * useState()
 */
const api = "https://jsonplaceholder.typicode.com/posts";

const FetchApi = () => {
  const [posts, setPost] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();

      setPost(Array.isArray(data) ? data : []);
    } catch (error) {
      alert("error");
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={getApi}>click on me</button>
      <div>
        {posts.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
    </div>
  );
};

export default FetchApi;
