import axios from "axios";

// 1. Create a custom axios instance
const axiosInstance = axios.create({
  baseURL: "https://urbanlux.onrender.com", // your backend URL
});

// 2. Add response interceptor to handle token expiry
axiosInstance.interceptors.response.use(
  (response) => response, // if response is OK, return it
  (error) => {
    if (error.response && error.response.status === 401) {
      // 401 means token expired or invalid
      console.warn("Token expired. Logging out...");

      // Remove token
      localStorage.removeItem("token");

      // Redirect to login page
      window.location.href = "/login";
    }
    return Promise.reject(error); // pass the error to your code
  }
);

export default axiosInstance;