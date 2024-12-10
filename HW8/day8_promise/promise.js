// Function to fetch posts from "https://jsonplaceholder.typicode.com/posts"
export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Function to fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    throw error;
  }
};

// Function to execute promises sequentially and return results in the specified order
export const sequentialPromise = async (promises, order) => {
  const results = [];

  // Re-order promises based on the provided order
  const orderedPromises = order.map((index) => promises[index - 1]); // Convert to zero-indexed

  for (const promise of orderedPromises) {
    try {
      const result = await promise;
      results.push(result);
    } catch (error) {
      console.error("Error executing promise:", error);
      throw error; // Stop execution if any promise fails
    }
  }

  return results;
};
