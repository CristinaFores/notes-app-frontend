import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { SetStateAction, useEffect, useState } from "react";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useNote = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      await setResponse(result);
    } catch (err) {
      setError(err as SetStateAction<AxiosError<unknown, any> | undefined>);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};

export default useNote;
