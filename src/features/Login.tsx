import InputComponent from './InputComponent';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
import { Mail, User, Lock, EyeOff, Eye } from 'lucide-react';
import loginUser from '../api/auth.api';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import SendOtp from './SendOtp';
import sendOtp from '../api/sendLoginOtp.api';

// No changes to imports, interfaces, or functions.

interface UserData {
    fullName: string;
    Email: string;
    password: string;
    confirmPwd: string;
}

export default function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [signUp, setSignUp] = useState(false)
    const [showPwd, setShowPwd] = useState(false)

    const navigate = useNavigate()
    const auth = useContext(AuthContext);

    // Keep all functions as they are...
    function emailId(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function password(e: React.ChangeEvent<HTMLInputElement>) {
        setPwd(e.target.value)
    }
    function validationEmail(): boolean {
        let regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === null || email === "") {
            setEmailError("please enter your email");
            return false;
        }
        else if (!regExpEmail.test(email)) {
            setEmailError("please enter your Valid Email");
            return false;
        }
        else {
            setEmailError("");
            return true
        }
    }
    function validatationPwd(): boolean {
        const onlyDigits = /^\d+$/;
        if (pwd === "") {
            setPwdError("enter your password ");
            return false;
        }
        else if (!onlyDigits.test(pwd)) {
            setPwdError("password contains Digits only*");
            return false;
        }
        else if (pwd.length < 4) {
            setPwdError("password must be at least 4 characters"); // Adjusted to match your logic
            return false;
        }
        else {
            setPwdError("")
            return true
        }

    }

    async function handleSignIn(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const isEmail = validationEmail();
        const isPwd = validatationPwd();

        if (!isEmail || !isPwd) return setSignUp(false);

        try {
            const res = await loginUser(email, pwd);
            console.log("login response to backend", res);

            toast.success("Login Successful!");
            auth.login(res.data.user, res.data.access_token, res.data.refresh_token);
            navigate('/OtpLogin');
            setSignUp(false);

        }
        catch (err: any) {
            toast.error(err.res?.data?.message || "Login failed!")
            setSignUp(true);
        }
    }
    // ... end of functions

    return (
        // Outer container for the dark background (consistent with HomePage)
        <div className="min-h-screen flex items-center justify-center bg-slate-900 font-sans p-4">

            {/* Animated Background Elements (Optional, but adds polish) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
            </div>

            {/* Login Card Container */}
            <div className="relative z-10 w-full max-w-md">

                {/* Optional Glowing Border Effect (for premium feel) */}
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

                    <form onSubmit={handleSignIn} className='flex flex-col items-center text-center'>

                        {/* 1. Header Area - Unified Branding */}
                        <div className="flex flex-col items-center mb-6 w-full">
                            {/* Logo Icon */}
                            <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg mb-3">
                                {/* Using the SVG checkmark icon for consistency */}
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3a2 2 0 012-2h3m-3 0h4m-4 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path></svg>
                            </div>

                            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Well Come Back</h2>
                            <p className="text-sm text-gray-500 mt-1">Sign into your account</p>
                        </div>

                        {/* 2. Email Field Group */}
                        <div className='w-full px-2 md:px-6 mb-4'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>

                            {/* Error Message */}
                            <p className="text-red-500 text-xs mb-1 text-left">{emailError}</p>

                            <div className="relative">
                                {/* Icon is positioned consistently inside the input */}
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                                {/* InputComponent styling is now clean and uses focus ring */}
                                <InputComponent
                                    inputType="email"
                                    inputValue={email}
                                    inputId="email"
                                    inputOnChange={emailId}
                                    placeholder='you@gmail.com'
                                    // Merged all styling for a clean look:
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 lg:w-full'
                                />
                            </div>
                        </div>

                        {/* 3. Password Field Group */}
                        <div className='w-full px-2 md:px-6 mb-2'>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 text-left">Password</label>

                            {/* Error Message */}
                            <p className="text-red-500 text-xs mb-1 text-left">{pwdError}</p>

                            <div className="relative">
                                {/* Lock Icon */}
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                                {/* InputComponent with updated styling */}
                                <InputComponent
                                    inputType={showPwd ? "text" : "password"}
                                    inputId="password"
                                    inputOnChange={password}
                                    placeholder="••••••••"
                                    // Merged all styling for a clean look:
                                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150  lg:w-full"
                                />

                                {/* Eye Toggle Button */}
                                <button
                                    type="button"
                                    onClick={() => setShowPwd(!showPwd)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
                                >
                                    {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="w-full px-2 md:px-6 text-right mb-6">
                            <a
                                href="/forgot-password"
                                className="text-sm font-medium text-cyan-600 hover:text-blue-500 transition-colors"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* 4. Sign In Button */}
                        <div className='w-full px-2 md:px-6'>
                            <ButtonComponent
                                name="Sign In"
                                onClick={handleSignIn}
                                buttonType='button' // Changed to submit to handle form events correctly
                                // Professional button styling
                                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-100 transition duration-150'
                            />
                        </div>

                        {/* 5. Register Link */}
                        <div className="mt-6 text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signUp" className='font-semibold text-cyan-600 hover:text-blue-700'>
                                Register here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}