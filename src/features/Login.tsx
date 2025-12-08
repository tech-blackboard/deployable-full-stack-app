import InputComponent from './InputComponent';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
import { Mail, User, Lock, EyeOff, Eye } from 'lucide-react';
import loginUser from '../api/auth.api';
import { useContext } from "react";
import {AuthContext} from '../context/AuthContext';
import SendOtp from './SendOtp';
import sendOtp from '../api/sendOtp.api';

// import './Login.css';

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
            setPwdError("password contains Didits only*");
            return false;
        }
        else if (pwd.length < 4) {
            setPwdError("password must be at least 8 characters");
            return false;
        }
        else {
            setPwdError("")
            return true
        }

    }

   


    // function handleSignIn(event: React.FormEvent) {
    //     event.preventDefault();

    //     const isEmail = validationEmail();
    //     const isPwd = validatationPwd();

    //     const getLocalUserData = localStorage.getItem('user');
    //     console.log("getLocalUserData", getLocalUserData)
    //     // Check if user data does NOT exist 
    //     if (!getLocalUserData) {
    //         toast.error("No user found in local storage!");
    //         setSignUp(true);//it shows the sign up 
    //         return;
    //     }

    //     const user: UserData = JSON.parse(getLocalUserData);

    //     if (isEmail && isPwd && email === user.Email && pwd === user.password) {
    //         toast.success("Login Successful!");
    //         navigate('/Dashboard');
    //         setSignUp(false);// it stay on login form.
    //     } else {
    //         toast.error("Incorrect email or password!");
    //         setSignUp(true);
    //     }


    //   }

    async function handleSignIn(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const isEmail = validationEmail();
        const isPwd = validatationPwd();

        if (!isEmail || !isPwd) return setSignUp(false);
      
        try {
            // send credentials to backend
            const res = await loginUser(email, pwd);
            console.log("login response to backend", res);

            // save token + user info in AuthContext + localStorage
   
        //    localStorage.setItem("token", res.data.token)
        //     localStorage.setItem("user", JSON.stringify(res.data.user))

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

    // const handleSendOtp = async () => {
        
    //     // if (!email) return toast.error("Please enter email!");
    //     try {
            
    //         const res = await sendOtp(email); // API call to /auth/send-otp
    //         console.log("res email", res.data)
    //         alert( res)
    //         toast.success(res.data.message); // "OTP sent successfully"
    //         navigate('/SendOtp'); // pass email to OTP page
    //     } catch (err: any) {
    //         toast.error(err.response?.data?.message || "Failed to send OTP");
    //     }}



    return (

        <div className=' border border-gray-300 md:px-0   bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl mx-auto m-10 border-t-0 shadow-xl w-full  md:w-1/2 lg:w-1/3  pb-6 font-sans  '>
            <form>
                <p className="text-2xl text-white mb-3 rounded-t-xl bg-blue-600 p-3 font-bold">Task Manager</p>

                <div className='flex flex-col'>
                    <span className="font-sans text-xl font-bold text-blue-600">Well Come Back</span>
                    <span className="text-xm pb-4 font-lighter text-gray-500">Sign into your account</span>

                </div>
                <div className=' flex flex-col px-2 md:px-0'>
                    <label className="block text-sm font-medium text-gray-700 mb-2 mr-72  md:mr-[62%]">Email</label>
                    <span className="text-red-500 text-xs  text-left  md:text-left md:ml-16  lg:ml-16 mb-1 ">{emailError}</span>
                    <div className="relative">
                        <Mail className="absolute  left-3 lg:left-[15%] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 lg:left-12 " />
                        < InputComponent inputType="email" inputValue={email} inputId="email" inputOnChange={emailId} className='md:mr-6 pl-11 lg:pl-11' placeholder='you@gmail.com' />

                    </div>
                </div>

                <div className=' flex flex-col  pt-3 px-2 md:px-0'>
                    <label className="block text-sm font-medium text-gray-700 mb-2 mr-72 md:mr-60 lg:mr-58">password</label>
                    <span className="text-red-500 text-xs text-left  md:text-left md:ml-16 mb-1  lg:ml-16">{pwdError}</span>
                    <div className="relative">
                        <Lock className="absolute left-3 md:left-20 lg:left-16   top-5 transform -translate-y-1/2 w-5 h-5 text-gray-400 " />
                        < InputComponent inputType={showPwd ? "text" : "password"} inputId="password" inputOnChange={password} className="mb-3 mr-3 text-medium md:mr-6 pl-11 lg:pl-11 " placeholder="••••••••" />
                        <button
                            type="button"
                            onClick={() => setShowPwd(!showPwd)}
                            className="absolute lg:right-24  right-9 top-5 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 "
                        >
                            {showPwd ? <EyeOff className="w-5 h-5 " /> : <Eye className="w-5 h-5" />}
                        </button>

                    </div>  </div>
                
                <ButtonComponent name="Sign In" onClick={handleSignIn} className='mb-2 h-11 w-20 pb-9' buttonType='button' />

                {
                   <p id="paragraph">Don't have an account? <Link to="/signUp" className='text-indigo-600 hover:text-indigo-700 font-semibold'>Register here</Link></p>
                }
            </form>
        </div>


    )
}