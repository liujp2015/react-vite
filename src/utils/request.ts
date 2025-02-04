import axios, { AxiosInstance, AxiosError } from "axios";
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

service.interceptors.response.use(
  (response) => {
    console.log(response);
    const { success, message, data } = response.data;
    console.log(data);
    if (success) {
      return data;
    } else {
      return Promise.reject(new Error(message));
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
export default service;
