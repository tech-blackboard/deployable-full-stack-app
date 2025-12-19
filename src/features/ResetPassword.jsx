import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import resetPassword from "../api/resetPassword.api";
import { toast } from "react-toastify";
import InputComponent from "./InputComponent";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;

    const handleReset = async () => {
        try {
            await resetPassword(email, password);
            toast.success("Password Reset Successfully");

            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Reset failed");
        }
    };

    return (
        <div className=" min-h-screen flex items-center justify-center bg-slate-900 font-sans ">

            <div className="flex flex-col items-center p-10 border-transparent bg-white rounded-md  text-blue-800 font-lato">

            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

            <InputComponent
                className="border p-2 rounded w-full"
                placeholder="New Password"
                type="password"
                inputValue={password}
                inputOnChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="mt-4 bg-cyan-600 text-white rounded px-4 py-2"
                onClick={handleReset}
            >
                Update Password
            </button>
        </div>
        </div>
    );
}
