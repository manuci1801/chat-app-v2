export const BACKEND_URI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_URI
    : "http://localhost:5000";
