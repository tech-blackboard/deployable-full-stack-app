import axiosInstance from "./axiosInstance"

export default function sendForgotOtp(email: string) {
    return axiosInstance.post("/auth/send-otp", {
        email,
        purpose: "FORGOT_PASSWORD"
    });
}
