import axios from "./axiosInstance";

export default function resetPassword(email: string, password: string) {
    return axios.post("/auth/reset-password", { email, password });
}
