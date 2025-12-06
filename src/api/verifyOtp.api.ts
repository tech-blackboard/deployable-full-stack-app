import axiosInstance from "./axiosInstance"

export default async function verifyOtp(email:string, otp:string) {
    console.log("verifyOtp",otp)
    console.log("verifyOtp", email)

    const cleanOtp = otp.toString().trim();

    axiosInstance.post("/auth/verify-otp", {
        email,
        otp: cleanOtp
    });

}
