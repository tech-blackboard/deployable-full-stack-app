import axiosInstance from "./axiosInstance";

export default async function verifyOtp(email: string, otp: string, purpose: 'LOGIN' | 'FORGOT_PASSWORD') {
    console.log("verifyOtp", otp);
    console.log("verifyOtp", email, purpose);

    const cleanOtp = otp.toString().trim();

    const response = await axiosInstance.post("/auth/verify-otp", {
        email,
        otp: cleanOtp,
        purpose,  // ✅ Add purpose
    });

    return response.data;
}
