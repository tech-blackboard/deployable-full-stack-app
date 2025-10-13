import {useState} from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import InputComponent from "./InputComponent";
import "./Register.css";

 // interface UserData{
    //     fullName:string;
    //     Email:string;
    //     password:string;
    //     confirmPwd:string;
    // }
  // these comment lines are used when userState is not mentioned type.
  
export default function Register(){
    const [FullName,setFullName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [pwd,setPwd] = useState<string>("");
    const [cPwd,setCpwd] = useState<string>("");

    const [fullNameError,setFnameError] = useState<string>("");
    const [emailError,setEmailError] = useState<string>("");
    const [pwdError,setPwdError] = useState<string>("");
    const [cPwdError,setCpwdError] = useState<string>("");
    
    const navigate=useNavigate()

    function fullName(e: React.ChangeEvent<HTMLInputElement>){
        setFullName(e.target.value)
       
    }
     function emailId(e: React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
     function password(e: React.ChangeEvent<HTMLInputElement>){
        setPwd(e.target.value)
    }
     function confirmPwd(e: React.ChangeEvent<HTMLInputElement>){
        setCpwd(e.target.value)
    }

    function validationFullName():boolean{
      const regName = /^[A-Za-z]+$/;

    if (!FullName || FullName.trim() === "") {
       setFnameError("Please enter your Full name");
        return  false;
  }
   else if (!regName.test(FullName)) {
     setFnameError("Allow characters only");
     return  false;
  }
   else {
    setFnameError("");
     return true

  }
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
    function validationConfirmPwd():boolean{
    if (!cPwd || cPwd === "") {
    setCpwdError("Enter your confirm password");
    return false;
  } else if (cPwd !== pwd) {
    setCpwdError("Passwords do not match");
    return false;
  } else {
    setCpwdError("");
     return true

  }
    }

    function handleSignUp(event: React.FormEvent){
    event.preventDefault()
        const isFullName=validationFullName();
        const isEmail=validationEmail();
        const isPwd=validatationPwd();
        const isCpwd=validationConfirmPwd();

        if(isFullName&&isEmail&&isPwd&&isCpwd){
            const local={
                fullName:FullName,
                Email:email,
                password:pwd,
                confirmPwd:cPwd,

            }
            localStorage.setItem(email,JSON.stringify(local))
            toast.success("Register Successful!");
            navigate('/Login')

        }
        else(
           toast.error("please login ")
        )

    }

    return(
    
        <div id="register">
            <form>
            <p id="head">Task Manager</p>
            <h2 className="createAcc">Create Account</h2>
            <p  id="join">Join Us To Manage Your Tasks</p>
            <label id="fn">Full Name</label><br></br>
            < InputComponent  inputType="text" inputId="FName" inputValue={FullName} inputOnChange={fullName} /><br></br>
            <span id="span">{fullNameError}</span><br></br>
            <label id="el">Email</label><br></br>
            < InputComponent  inputType="email" inputValue={email} inputId="email"  inputOnChange={emailId}/><br></br>
            <span id="span">{emailError}</span><br></br>
            <label id="pwd">Password</label><br></br>
            < InputComponent inputType="password" inputValue={pwd} inputId="password" inputOnChange={password}/><br></br>
            <span id="span">{pwdError}</span><br></br>
            <label>Confirm Password</label><br></br>
            < InputComponent   inputType="password" inputValue={cPwd} inputId="password"inputOnChange={confirmPwd}/><br></br>
            <span id="span">{cPwdError}</span><br></br>
            <br></br>
            <button className="signUp" onClick={handleSignUp}>Create Account</button>
            <p className="para">Already have an Account? <Link to="/Login">Sign in</Link></p>
           </form>
        </div>
       

    )
}