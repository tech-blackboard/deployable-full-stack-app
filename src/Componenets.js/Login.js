import InputComponent from './InputComponent';
import {useState} from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import './Login.css';

export default function Login(){
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [emailError,setEmailError] = useState("");
    const [pwdError,setPwdError] = useState("");
    const[signUp,setSignUp] = useState(false)
    const getLocalUserData=localStorage.getItem(email)
    console.log(getLocalUserData)
    const userdata=JSON.parse(getLocalUserData)
    console.log("userdata",userdata)
    const navigate=useNavigate()
     function emailId(e){
        setEmail(e.target.value)
    }
     function password(e){
        setPwd(e.target.value)
    }
    function validationEmail() {
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
    function validatationPwd() {
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
   function handleSignIn(event){
    event.preventDefault()
        const isEmail=validationEmail();
        const isPwd=validatationPwd();
        if(isEmail&&isPwd&&userdata&&email===userdata.Email&&pwd===userdata.password){
           toast.success("Login Successful!");
           navigate('/Dashboard')
           setSignUp(false)
         }
        else{
          toast.error("User not found! ")
          setSignUp(true)

        }    
    }
    return(
        <div className="login">
            <form>
            <p className="head">Task Manager</p>
            <h4 className="WellCome">WellcomeBack</h4>
            <p  ClassName="join">Sign into your account</p>
            <label className="el">Email</label><br></br>
            < InputComponent inputTypes="email" inputValue={email} inputId="email"  inputOnChange={emailId} emailError={emailError} /><br></br>
            <span className="lspan">{emailError}</span><br></br>
            <label className="pwd">Password</label><br></br>
            < InputComponent inputTypes="password" inputValue={pwd} inputId="password" inputOnChange={password} pwdError={pwdError}/><br></br>
            <span className="lspan">{pwdError}</span><br></br><br></br>
             <button className="SignIn" onClick={handleSignIn}>Sign In</button>
             <br></br>
            {
            signUp&&<p >Don't have an account? <Link to="/Register" className="re">Register here</Link></p>
            }
           </form>
        </div>
    )
}