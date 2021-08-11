import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_CONSOLE_API_URL,
});

instance.interceptors.request.use(
  function (config) {
    if (getCookie("auth_token")) {
      config.headers = {
        Authorization: `Bearer ${getCookie("auth_token")}`,
        ...config.headers,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {}
);

export default instance;
