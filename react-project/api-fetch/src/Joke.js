/**
 * Question
Create a simple React component called "Random Joke Fetcher". This component should:

Display a button labeled "Get a Random Joke".
When the button is clicked, it should fetch a random joke from the Official Joke API using an async function.
Use useState to store the joke and any error messages if the fetch fails.
Use try...catch to handle errors during the API call.
Display the joke's setup and punchline if the fetch is successful, or an error message if something goes wrong.
 */
/**
 * Try /random_joke, /random_ten, /jokes/random, or /jokes/ten , /jokes/random/
 */

import { useState } from "react";

function RandomJokeFetcher() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      // clear previous error message before fetching a new joke
      setError(null);
      setJoke(null);

      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      // this part is for new when successfully get a response but it's not ok
      if (!response.ok) {
        throw new error("Failed to fetch joke.");
      }

      const data = await response.json();
      setJoke(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Random Joke Fetcher</h1>
      <button onClick={fetchJoke}>Go a random Joke</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {joke && (
        <div>
          <p>
            <strong>Setup:</strong>
            {joke.setup}
          </p>
          <p>
            <strong>Punchline:</strong>
            {joke.punchline}
          </p>
        </div>
      )}
    </div>
  );
}

export default RandomJokeFetcher;
