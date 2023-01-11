import { useEffect, useState } from 'react';

export const useFetch = (url, methodCall, body, ...dependencyArray) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: methodCall,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, ...dependencyArray]);

  return { data, error, loading };
};
