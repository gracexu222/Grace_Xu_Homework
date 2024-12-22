export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error.message === "Failed to fetch") {
      throw new Error("Network Error:Could not connect to the server.");
    }
    throw error;
  }
}
