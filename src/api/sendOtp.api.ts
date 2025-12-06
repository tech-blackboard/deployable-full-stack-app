import axiosInstance from "./axiosInstance"

export default async function sendOtp(email: string) {
    console.log("sendOtp", email)

    return axiosInstance.post("/auth/send-otp", { email })
}
