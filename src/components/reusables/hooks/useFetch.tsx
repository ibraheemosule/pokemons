import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchData } from '../../../utils';

interface FetchData<T> {
  loading: boolean;
  error: Error | null;
  data: T | null;
}

const useFetch = <T,>(url: string): FetchData<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const source = axios.CancelToken.source();

  useEffect(() => {
    let attempts = 3;

    const apiCall = async () => {
      while (attempts > 0) {
        try {
          const response = await fetchData(source.token)(url);
          setData(response);
          setLoading(false);
          break;
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log('Request canceled by user');
            return;
          }
          setError(err as Error);
          setLoading(false);
          attempts--;
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    };
    apiCall();
    return () => {
      source.cancel('Request canceled by user');
    };
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
