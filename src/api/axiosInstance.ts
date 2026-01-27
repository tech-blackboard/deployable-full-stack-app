import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5001",
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config;

        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;

            const refresh = localStorage.getItem("refresh");
            const user = JSON.parse(localStorage.getItem("user") || "{}");

            if (!refresh) {
                window.location.href = "/login";
                return;
            }

            try {
                // IMPORTANT: use normal axios (NOT axiosInstance)
                const res = await axios.post("http://localhost:5000/auth/refresh", {
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
