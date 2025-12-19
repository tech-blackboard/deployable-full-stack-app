import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sendForgotOtp from "../api/sendForgotOtp.api";
import { toast } from "react-toastify";
import InputComponent from "./InputComponent";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
   
    const handleSendOtp = async () => {
    if (!email || email.trim() === "") {
                toast.error("Please enter a valid email");
                return;
            }
        console.log("email from forgot", email)
        try {
            const res = await sendForgotOtp(email);
            toast.success("OTP sent to your Email");

            navigate("/verify-forgot-otp", {
                state: { email },
            });
        } catch (err) {
            toast.error(err.response?.data?.message || "Error sending OTP");
        }
    };

    return (
        <div className=" min-h-screen flex items-center justify-center bg-slate-900 font-sans ">

            <div className="flex flex-col items-center p-10 border-transparent bg-white rounded-md  text-red-600 font-lato">

            <h2 className="text-xl font-semibold mb-4">Forgot Password?</h2>

            <InputComponent
                className="border p-2 rounded w-full"
                placeholder="Enter your email"
                inputValue={email}
                    inputId="email"
                inputOnChange={(e) => setEmail(e.target.value)}
            />

            <button
                className="mt-4 bg-cyan-600 text-white rounded px-4 py-2"
                onClick={handleSendOtp}
            >
                Send OTP
            </button>
        </div>
        </div>
    );
}
