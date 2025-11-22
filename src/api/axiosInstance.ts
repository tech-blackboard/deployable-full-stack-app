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

// Refresh token handler
axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config;

        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;

            const refresh = localStorage.getItem("refresh");
            console.log("refresh", refresh)
           const user= localStorage. JSON.parse(localStorage.getItem("user"));
            console.log("user from axios", user)

            if (!refresh ) {
                window.location.href = "/login";
                return;
            }

            try {
                const res = await axios.post("/auth/refresh", {
                    refreshToken: refresh,
                    userId: user.userId,
                });

                localStorage.setItem("token", res.data.access_token);

                original.headers.Authorization = `Bearer ${res.data.access_token}`;

                return axiosInstance(original);
            } catch (err) {
                localStorage.clear();
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);



export default axiosInstance;
