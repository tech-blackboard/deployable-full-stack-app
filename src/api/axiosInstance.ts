import axios from "axios"; // which is used to make HTTP requests from your frontend (React) to the backend (NestJS).
const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",  // YOUR backend URL
});

// Add token automatically
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default axiosInstance;
