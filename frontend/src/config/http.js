import axios from "axios";
import { BACKEND_URI } from "../constants";

const defaultOptions = {
  baseURL: BACKEND_URI,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth-token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
