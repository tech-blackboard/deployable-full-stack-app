import InputComponent from './InputComponent';
import {useState} from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import './Login.css';

interface UserData{
        fullName:string;
        Email:string;
        password:string;
        confirmPwd:string;
    }

export default function Login(){
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [emailError,setEmailError] = useState("");
    const [pwdError,setPwdError] = useState("");
    const[signUp,setSignUp] = useState(false)
    
    const navigate=useNavigate()

     function emailId(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
     function password(e:React.ChangeEvent<HTMLInputElement>){
        setPwd(e.target.value)
    }
    function validationEmail():boolean {
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
    function validatationPwd():boolean {
           const onlyDigits = /^\d+$/;
        if (pwd === "") {
            setPwdError("enter your password ");
            return false;
        }
        else if (!onlyDigits.test(pwd)) {
            setPwdError("Here Password contains Didits only*");
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

    const getLocalUserData = localStorage.getItem(email);

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

    return(
        <div className="login">
            <form>
            <p className="head">Task Manager</p>
            <span className="WellCome">Well Come Back</span><br></br>
            <span  className="join">Sign into your account</span><br></br>
            <label className="el">Email</label><br></br>
            < InputComponent inputType="email" inputValue={email} inputId="email"  inputOnChange={emailId} /><br></br>
            <span className="lspan">{emailError}</span><br></br>
            <label className="pwd">Password</label><br></br>
            < InputComponent inputType="password" inputValue={pwd} inputId="password" inputOnChange={password}/><br></br>
            <span className="lspan">{pwdError}</span><br></br><br></br>
             <button className="SignIn" onClick={handleSignIn}>Sign In</button>
             <br></br>
            {
            signUp&&<p id="paragraph">Don't have an account? <Link to="/Register" className="re">Register here</Link></p>
            }
          </form>
        </div>
    )}