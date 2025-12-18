import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import InputComponent from "./InputComponent"
import ButtonComponent from './ButtonComponent'
// Imported components/icons:
import { Mail, User, Lock, EyeOff, Eye } from 'lucide-react';
import { registerUser } from '../api/auth.api';

// ... (All functions and state management remain unchanged) ...

export default function Register() {
    // State management and validation functions are kept as is
    const [FullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [cPwd, setCpwd] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const [fullNameError, setFnameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [pwdError, setPwdError] = useState<string>("");
    const [cPwdError, setCpwdError] = useState<string>("");
    const [showPwd, setShowPwd] = useState(false)
    const [phoneError, setPhoneError] = useState<string>("");

    const navigate = useNavigate()

    function fullName(e: React.ChangeEvent<HTMLInputElement>) { setFullName(e.target.value) }
    function emailId(e: React.ChangeEvent<HTMLInputElement>) { setEmail(e.target.value) }
    function password(e: React.ChangeEvent<HTMLInputElement>) { setPwd(e.target.value) }
    function confirmPwd(e: React.ChangeEvent<HTMLInputElement>) { setCpwd(e.target.value) }
    function phoneNumber(e: React.ChangeEvent<HTMLInputElement>) { setPhone(e.target.value) }

    function validationFullName(): boolean {
        // ... (existing validation logic)
        const regName = /^[A-Za-z\s]+$/; // Allowing spaces for full name for better UX
        if (!FullName || FullName.trim() === "") {
            setFnameError("Please enter your Full name");
            return false;
        } else {
            setFnameError("");
            return true;
        }
    }

    function validationEmail(): boolean {
        // ... (existing validation logic)
        let regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === null || email === "") {
            setEmailError("Please enter your email*");
            return false;
        } else if (!regExpEmail.test(email)) {
            setEmailError("Please enter a valid email");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    }

    function validatationPwd(): boolean {
        // ... (existing validation logic)
        const onlyDigits = /^\d+$/;
        if (pwd === "") {
            setPwdError("Enter your password");
            return false;
        } else if (!onlyDigits.test(pwd)) {
            setPwdError("Password must contain digits only*");
            return false;
        } else if (pwd.length < 4) { // Note: original code says 8 chars but logic checks length < 4
            setPwdError("Password must be at least 4 digits");
            return false;
        } else {
            setPwdError("");
            return true;
        }
    }

    function validationConfirmPwd(): boolean {
        // ... (existing validation logic)
        if (!cPwd || cPwd === "") {
            setCpwdError("Enter your confirmation password");
            return false;
        } else if (cPwd !== pwd) {
            setCpwdError("Passwords do not match");
            return false;
        } else {
            setCpwdError("");
            return true;
        }
    }

    function validatationPhone(): boolean {
        // ... (existing validation logic)
        const onlyDigits = /^\d+$/;
        if (phone === "") {
            setPhoneError("Enter your Phone number");
            return false;
        } else if (!onlyDigits.test(phone)) {
            setPhoneError("Phone number contains digits only*");
            return false;
        } else if (phone.length !== 10) { // Enforcing exactly 10 digits for phone number
            setPhoneError("Phone number must be exactly 10 digits");
            return false;
        } else {
            setPhoneError("");
            return true;
        }
    }

    async function handleSignUp(event: React.FormEvent) {
        event.preventDefault()
        const isFullName = validationFullName();
        const isEmail = validationEmail();
        const isPwd = validatationPwd();
        const isCpwd = validationConfirmPwd();
        const isvalidatationPhone = validatationPhone()

        if (!isFullName || !isEmail || !isPwd || !isCpwd || !isvalidatationPhone) {
            return;
        }

        try {
            await registerUser(FullName, email, pwd, phone);
            toast.success("Registration Successful! Please login.");
            navigate("/Login");
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Registration failed");
        }
    }

    // JSX START - REFACTORED FOR PROFESSIONAL UI
    return (
        // Outer container for the dark background (consistent with HomePage/Login)
        <div className="min-h-screen flex items-center justify-center bg-slate-900 font-sans p-4">

            {/* Animated Background Elements (Optional, but adds polish) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
            </div>

            {/* Register Card Container */}
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

                    <form onSubmit={handleSignUp} className='flex flex-col items-center text-center'>

                        {/* 1. Header Area - Unified Branding */}
                        <div className="flex flex-col items-center mb-6 w-full">
                            {/* Logo Icon */}
                            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg mb-3">
                                {/* Using the SVG checkmark icon for TaskFlow branding */}
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3a2 2 0 012-2h3m-3 0h4m-4 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path></svg>
                            </div>

                            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Create Account</h2>
                            <p className="text-sm text-gray-500 mt-1">Join Us To Manage Your Tasks</p>
                        </div>

                        {/* 2. Form Fields */}
                        <div className='w-full px-2 md:px-6 space-y-4'>

                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="FName" className="block text-sm font-medium text-gray-700 mb-2 text-left">Full Name</label>
                                <p className="text-red-500 text-xs mb-1 text-left">{fullNameError}</p>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <InputComponent
                                        inputType="text"
                                        inputId="FName"
                                        inputValue={FullName}
                                        inputOnChange={fullName}
                                        placeholder="John Doe"
                                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150  lg:w-full md:w-full'
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
                                <p className="text-red-500 text-xs mb-1 text-left">{emailError}</p>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <InputComponent
                                        inputType="email"
                                        inputValue={email}
                                        inputId="email"
                                        inputOnChange={emailId}
                                        placeholder="you@example.com"
                                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150  lg:w-full md:w-full'
                                    />
                                </div>
                            </div>

                            {/* Phone Field (moved up for better flow) */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-left">Phone Number</label>
                                <p className="text-red-500 text-xs mb-1 text-left">{phoneError}</p>
                                <div className="relative">
                                    {/* Using a phone icon placeholder */}
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <InputComponent
                                        inputType="tel"
                                        inputmode="numeric"
                                        placeholder="+91 86888xxxx"
                                        inputValue={phone}
                                        inputOnChange={phoneNumber}
                                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150  lg:w-full md:w-full'
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 text-left">Password</label>
                                <p className="text-red-500 text-xs mb-1 text-left">{pwdError}</p>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <InputComponent
                                        inputType={showPwd ? "text" : "password"}
                                        inputId="password"
                                        inputOnChange={password}
                                        placeholder="••••••••"
                                        className='w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150  lg:w-full md:w-full'
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPwd(!showPwd)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
                                    >
                                        {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="confirmPwd" className="block text-sm font-medium text-gray-700 mb-2 text-left">Confirm Password</label>
                                <p className="text-red-500 text-xs mb-1 text-left">{cPwdError}</p>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <InputComponent
                                        inputType={showPwd ? "text" : "password"}
                                        inputValue={cPwd}
                                        inputId="confirmPwd"
                                        inputOnChange={confirmPwd}
                                        placeholder="••••••••"
                                        className='w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 lg:w-full md:w-full'
                                    />
                                    {/* Using the same toggle for Confirm Password input */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPwd(!showPwd)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
                                    >
                                        {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 3. Button and Footer */}
                        <div className='w-full px-2 md:px-6 mt-6'>
                            <ButtonComponent
                                name="Create Account"
                                onClick={handleSignUp}
                                buttonType='button'
                                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150'
                            />
                        </div>

                        {/* Sign In Link */}
                        <div className="mt-6 text-center text-sm text-gray-600">
                            Already have an Account?{' '}
                            <Link to="/Login" className='font-semibold text-cyan-600 hover:text-blue-700'>
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}