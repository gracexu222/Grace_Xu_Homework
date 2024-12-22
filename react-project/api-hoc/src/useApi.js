import { useState, useEffect } from "react";

import { fetchData } from "./api";

export function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        setLoading(true);
        const result = await fetchData(url);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, [url]);
  return { data, loading, error };
}
