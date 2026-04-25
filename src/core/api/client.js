import axios from "axios";
import { store } from "../../redux/store";

const baseURL = import.meta.env.VITE_API_URL || "";

/**
 * Axios instance for your backend (`VITE_API_URL`).
 * Sends Bearer token from Redux when present.
 */
export const apiClient = axios.create({
  baseURL: baseURL || undefined,
  timeout: 30_000,
});

apiClient.interceptors.request.use((config) => {
  const token = store.getState().user?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
