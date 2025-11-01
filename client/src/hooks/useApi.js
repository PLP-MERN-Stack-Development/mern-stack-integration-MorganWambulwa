import { useState, useEffect } from 'react';

export const useApi = (apiCall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const wrappedCall = async () => {
      try {
        setLoading(true);
        const result = await apiCall();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    wrappedCall();

    return () => {
      isMounted = false;
    };
  }, [apiCall]);

  return { data, loading, error, refetch: fetchData };
};
