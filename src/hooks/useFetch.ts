import { useState, useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import requestAPI from 'utils/api';

export default function useFetch(options) {
  const [data, setData] = useState<AxiosResponse<any> | null>(null);
  const [error, setError] = useState<AxiosError<any> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    await requestAPI(options)
      .then(result => {
        setLoading(false);
        setError(null);
        setData(result);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading];
}
