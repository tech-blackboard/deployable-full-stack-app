import axiosInstance from "./axiosInstance"

export default async function sendLoginOtp(email: string) {
    console.log("sendOtp", email)

    return axiosInstance.post("/auth/send-otp", {
        email, purpose: "LOGIN"
 })
}
