// Create a custom hook for data fetching
import { useState, useEffect } from "react";

export const useDataFetching = (url,options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url,{
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${options.authToken}`,
          },});
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url,options.authToken]);

  return { data, loading };
};
