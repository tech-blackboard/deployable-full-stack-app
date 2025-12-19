import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import verifyOtp from "../api/verifyOtp.api"; // your API call
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { Lock } from "lucide-react"; // Import Lock icon for OTP input

export default function SendOtp() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    // Safely extract email from location state
    const email = (location.state as { email: string })?.email || 'your email';

    const handleVerifyOtp = async () => {
        if (!otp) return toast.error("Enter OTP!");
        try {
            const res = await verifyOtp(email, otp, "LOGIN");
            console.log("res from sendotp page ", res)
            console.log("OTP verification response:", otp);

            // Successfully verified logic
            toast.success("OTP verified! Logged in.");
            navigate('/dashBoard');
        } catch (err: any) {
            toast.error(err.response?.data?.message || "OTP verification failed");
        }
    };

    return (
        // Outer container for the dark background (consistent with previous pages)
        <div className="min-h-screen flex items-center justify-center bg-slate-900 font-sans p-4">

            {/* Animated Background Elements (Optional for polish) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
            </div>

            {/* OTP Card Container */}
            <div className="relative z-10 w-full max-w-md">

                {/* Optional Glowing Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-md transition duration-500 animate-[gradientMove_3s_ease_infinite] bg-[length:200%_200%]"></div>
                <style>{`
                  @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                `}</style>

                {/* Card Content: White, professional, rounded */}
                <div className='relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-100'>

                    <form onSubmit={(e) => { e.preventDefault(); handleVerifyOtp(); }} className='flex flex-col items-center text-center'>

                        {/* 1. Header Area - Unified Branding */}
                        <div className="flex flex-col items-center mb-6 w-full">
                            {/* Logo Icon */}
                            <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg mb-3">
                                {/* Using the SVG checkmark icon for TaskFlow branding */}
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3a2 2 0 012-2h3m-3 0h4m-4 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path></svg>
                            </div>

                            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Enter Verification Code</h2>
                            <p className="text-sm text-gray-500 mt-1 px-4">
                                Please check your inbox. A 6-digit code has been sent to:
                                <span className="font-semibold text-cyan-600 block">{email}</span>
                            </p>
                        </div>

                        {/* 2. OTP Input Field Group */}
                        <div className='w-full px-2 md:px-6 mb-6'>
                            <label htmlFor="otp-input" className="sr-only">Enter OTP</label>

                            <div className="relative">
                                {/* Lock Icon for OTP */}
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                                {/* InputComponent styling is clean and uses focus ring */}
                                <InputComponent
                                    inputType="text"
                                    inputId="otp-input"
                                    inputmode="numeric"
                                    placeholder="Enter 6-digit OTP"
                                    inputValue={otp}
                                    inputOnChange={(e) => setOtp(e.target.value)}
                                    // Professional Input Style
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 text-center tracking-widest text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 md:w-full lg:w-full'
                                />
                            </div>
                        </div>

                        {/* 3. Verify OTP Button */}
                        <div className='w-full px-2 md:px-6'>
                            <ButtonComponent
                                onClick={handleVerifyOtp}
                                name="Verify OTP"
                                buttonType="button"
                                // Professional button styling
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}