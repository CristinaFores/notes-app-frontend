import axios, { AxiosError } from "axios";
import { AxiosResponseBody, UserCredentials } from "./types";

const useUser = () => {
  const urlApi = process.env.REACT_APP_API_URL;

  const login = async (credencials: UserCredentials) => {
    try {
      const { data } = await axios.post(`${urlApi}/login`, credencials);
      return data;
    } catch (error: unknown) {
      const response = (
        error as AxiosError<AxiosResponseBody>
      ).response?.data?.details?.body
        .map((object) => object.message)
        .join(" . ");

      const data = (error as AxiosError<AxiosResponseBody>).response?.data
        .error;

      if (response) {
        return response;
      }
      if (data) {
        return data;
      }
    }
  };

  return { login };
};

export default useUser;
