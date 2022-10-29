import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
          setData(data.Search || data);
        } else {
          setError(data.Error);
        }
      } catch (ex) {
        setError(ex.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return [loading, error, data];
}
