// httpClient.js
import axios from "axios";

const httpClient = axios.create();

// Add a request interceptor
httpClient.interceptors.request.use(
  function (config) {
    const userLogado = sessionStorage.getItem("userLogado");
    if (userLogado) {
      const data = JSON.parse(window.atob(userLogado));
      if (data?.token?.accessToken) {
        config.headers.Authorization = `Bearer ${data.token.accessToken}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpClient;
