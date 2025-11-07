import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import InputComponent from "./InputComponent"
import ButtonComponent from './ButtonComponent'
// import "./Register.css";

// interface UserData{
//     fullName:string;
//     Email:string;
//     password:string;
//     confirmPwd:string;
// }
// these comment lines are used when userState is not mentioned type.

export default function Register() {
    const [FullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [cPwd, setCpwd] = useState<string>("");

    const [fullNameError, setFnameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [pwdError, setPwdError] = useState<string>("");
    const [cPwdError, setCpwdError] = useState<string>("");

    const navigate = useNavigate()

    function fullName(e: React.ChangeEvent<HTMLInputElement>) {
        setFullName(e.target.value)

    }
    function emailId(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function password(e: React.ChangeEvent<HTMLInputElement>) {
        setPwd(e.target.value)
    }
    function confirmPwd(e: React.ChangeEvent<HTMLInputElement>) {
        setCpwd(e.target.value)
    }

    function validationFullName(): boolean {
        const regName = /^[A-Za-z]+$/;

        if (!FullName || FullName.trim() === "") {
            setFnameError("please enter your Full name");
            return false;
        }
        else if (!regName.test(FullName)) {
            setFnameError("Allow characters only...");
            return false;
        }
        else {
            setFnameError("");
            return true

        }
    }

    function validationEmail(): boolean {
        let regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === null || email === "") {
            setEmailError("please enter your email*");
            return false;
        }
        else if (!regExpEmail.test(email)) {
            setEmailError("please enter your valid email");
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
            setPwdError("Password contains Didits only*");
            return false;
        }
        else if (pwd.length < 4) {
            setPwdError("Password must be at least 8 characters");
            return false;
        }
        else {
            setPwdError("");
            return true
        }

    }
    function validationConfirmPwd(): boolean {
        if (!cPwd || cPwd === "") {
            setCpwdError("enter your confirm password");
            return false;
        } else if (cPwd !== pwd) {
            setCpwdError("Passwords do not match");
            return false;
        } else {
            setCpwdError("");
            return true

        }
    }

    function handleSignUp(event: React.FormEvent) {
        event.preventDefault()
        const isFullName = validationFullName();
        const isEmail = validationEmail();
        const isPwd = validatationPwd();
        const isCpwd = validationConfirmPwd();

        if (isFullName && isEmail && isPwd && isCpwd) {
            const local = {
                fullName: FullName,
                Email: email,
                password: pwd,
                confirmPwd: cPwd,

            }
            localStorage.setItem('user', JSON.stringify(local))
            toast.success("Register Successful!");
            navigate('/Login')

        }
        else (
            toast.error("please login ")
        )

    }

    return (

        <div className=' border border-gray-200 rounded-md mx-auto pt-1 md:px-0 px-1 mt-2  m-10 pb-4 border-t-0 shadow-xl w-full md:w-1/2 lg:w-1/3 '>
            <form>
                <p className='text-2xl text-white rounded-t-xl bg-blue-600 p-3 font-bold'>Task Manager</p>

                <h2 className="font-sans text-2xl pt-5 font-bold text-blue-600 ">Create Account</h2>
                <p className="text-xs pb-4 font-medium text-gray-500">Join Us To Manage Your Tasks</p>

                <div className="flex flex-col mb-4">
                    <label className=" font-sans text-base text-left md:ml-24">Full Name</label>
                    <span className='text-red-500 text-xs text-left md:ml-24'>{fullNameError}</span>
                    < InputComponent inputType="text" inputId="FName" inputValue={FullName} inputOnChange={fullName} />
                </div>
               
                <div className="flex flex-col  mb-4">
                    <label className="font-sans text-base text-left md:ml-24">Email</label>
                    <span className='text-red-500 text-xs text-left md:ml-24'>{emailError}</span>
                    < InputComponent className="" inputType="email" inputValue={email} inputId="email" inputOnChange={emailId} />
                  </div>
              
                <div className="flex flex-col mb-4">
                    <label className="text-base font-sans text-left md:ml-24">Password</label>
                    <span className='text-red-500 font-sans text-xs text-left md:ml-24'>{pwdError}</span>
                < InputComponent inputType="password" inputValue={pwd} inputId="password" inputOnChange={password} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-base font-sans text-left md:ml-24">Confirm Password</label>
                    <span className='text-red-500 font-sans text-left md:ml-24 text-xs'>{cPwdError}</span>
                < InputComponent className="" inputType="password" inputValue={cPwd} inputId="password" inputOnChange={confirmPwd} /><br></br>
                </div>

                <ButtonComponent name="Create Account" onClick={handleSignUp} />
                <p className='  font-sans text-black font-lighter'>Already have an Account? <Link to="/Login">Sign in</Link></p>
            </form>
        </div>


    )
}