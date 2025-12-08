import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import verifyOtp from "../api/verifyOtp.api"; // your API call
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

export default function SendOtp() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const email = (location.state as any)?.email;

  
    const handleVerifyOtp = async () => {
        if (!otp) return toast.error("Enter OTP!");
        try {
            const res = await verifyOtp(email, otp);
            console.log("res from sendotp page ", res)

            console.log("email from sendotp page ", email)
            console.log("OTP verification response:", otp);

            // Save tokens + user info
            // localStorage.setItem("access_token", res.data.access_token);

            // localStorage.setItem("refresh_token", res.data.refresh_token);
            // localStorage.setItem("user", JSON.stringify(res.data.user));

            toast.success("OTP verified! Logged in.");
            navigate('/dashBoard');
        } catch (err: any) {
            toast.error(err.response?.data?.message || "OTP verification failed");
        }
    };

    return (
        <div className=' border border-gray-300 md:px-0  p-1  bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl mx-auto m-10 border-t-0 shadow-xl w-full  md:w-1/2 lg:w-1/3  pb-6 font-sans  '>
            <h2 className="mb-3 mr-44 ml-3 mt-9">Enter OTP sent to : <span className="text-red-500">{email}</span></h2>
            <InputComponent
                inputType="text"
                placeholder=" Enter OTP"
                inputValue={otp}
                inputOnChange={(e) => setOtp(e.target.value)} className="mb-5"
            />
            <ButtonComponent onClick={handleVerifyOtp} name="verify OTP" buttonType="button"  className="h-11 pt-2"/>
        </div>
    );
}
