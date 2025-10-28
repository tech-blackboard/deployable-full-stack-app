import InputComponent from './InputComponent';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
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

    const navigate = useNavigate()

    function emailId(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function password(e: React.ChangeEvent<HTMLInputElement>) {
        setPwd(e.target.value)
    }
    function validationEmail(): boolean {
        let regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === null || email === "") {
            setEmailError("Please enter your email");
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
            setPwdError("Password must be at least 8 characters");
            return false;
        }
        else {
            setPwdError("")
            return true
        }

    }


    function handleSignIn(event: React.FormEvent) {
        event.preventDefault();

        const isEmail = validationEmail();
        const isPwd = validatationPwd();

        const getLocalUserData = localStorage.getItem('user');
        console.log("getLocalUserData", getLocalUserData)
        // Check if user data does NOT exist
        if (!getLocalUserData) {
            toast.error("No user found in local storage!");
            setSignUp(true);//it shows the sign up 
            return;
        }

        const user: UserData = JSON.parse(getLocalUserData);

        if (isEmail && isPwd && email === user.Email && pwd === user.password) {
            toast.success("Login Successful!");
            navigate('/Dashboard');
            setSignUp(false);// it stay on login form.
        } else {
            toast.error("Incorrect email or password!");
            setSignUp(true);
        }
    }

    return (


        <div className=' border border-gray-300 md:px-0 px-6 rounded-xl mx-auto m-10 border-t-0 shadow-xl w-full  md:w-1/2 lg:w-1/3  pb-6 font-sans  '>
            <form>
                <p className="text-2xl text-white mb-3 rounded-t-xl bg-blue-600 p-3 font-bold">Task Manager</p>

                <div className='flex flex-col'>
                    <span className="font-sans text-xl font-bold text-blue-600">Well Come Back</span>
                    <span className="text-xm pb-4 font-lighter text-gray-500">Sign into your account</span>

                </div>
                <div className=' flex flex-col px-9 '>
                    <label className="text-base text-left font-sans  md:ml-20">Email</label>
                    <span className="text-red-500 text-xs  text-left  md:text-left md:ml-20 mb-1 ">{emailError}</span>
                    < InputComponent inputType="email" inputValue={email} inputId="email" inputOnChange={emailId} />

               </div>
              

                <div className=' flex flex-col  pt-3 px-9'>
                    <label className="text-base text-left font-sans  md:ml-20">Password</label>
                    <span className="text-red-500 text-xs text-left  md:text-left md:ml-20 mb-1 ">{pwdError}</span>
                    < InputComponent inputType="email" inputValue={pwd} inputId="email" inputOnChange={password} className="mb-8 text-medium"/>

                </div>
                <ButtonComponent name="Sign In" onClick={handleSignIn} />
               
                {
                    signUp && <p id="paragraph">Don't have an account? <Link to="/signUp" className="re">Register here</Link></p>
                }
            </form>
        </div>
             
       
    )
}