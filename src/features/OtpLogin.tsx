import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sendOtp from '../api/sendOtp.api';
import { toast } from 'react-toastify';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';
import { Mail } from 'lucide-react';

export default function OtpLogin() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  

    function emailId(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    // const handleSendOtp = async () => {
    //     await sendOtp(email);
    //     navigate('/sendOtp'); // move to OTP input page
    // };
    const handleSendOtp = async () => {

        // if (!email) return toast.error("Please enter email!");
        try {

            const res = await sendOtp(email); // API call to /auth/send-otp
            console.log("res email", res.data)
            toast.success(res.data.message); // "OTP sent successfully"
            navigate('/SendOtp', { state: { email: email } }); // pass email to OTP page
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Failed to send OTP");
        }
    };
    return (
        <div className=' border border-gray-300 md:px-0  p-1  bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl mx-auto m-10 border-t-0 shadow-xl w-full  md:w-1/2 lg:w-1/3  pb-6 font-sans  '>
            <form>
                <p className="text-2xl text-white mb-3 rounded-t-xl bg-blue-600 p-3 font-bold">Task Manager</p>

                <div className='flex flex-col'>
                    <span className="font-sans text-xl font-bold text-blue-600">Well Come Back</span>
                    <span className="text-xm pb-4 font-lighter text-gray-500">Sign into your account</span>

                </div>
                <div className=' flex flex-col px-2 md:px-0'>
                    <label className="block text-sm font-medium text-gray-700 mb-2 mr-72  md:mr-[62%]">Email</label>
                    <div className="relative">
                        <Mail className="absolute  left-3 lg:left-[15%] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 lg:left-12 " />
                        < InputComponent inputType="email" inputValue={email} inputId="email" inputOnChange={emailId} className='md:mr-6 pl-11 lg:pl-11' placeholder='you@gmail.com' />

                    </div>
                    <ButtonComponent onClick={handleSendOtp} name="verify OTP" buttonType="button"  className="h-11 pt-2 mt-3"/>
                    {
                        <p id="paragraph">Don't have an account? <Link to="/signUp" className='text-indigo-600 hover:text-indigo-700 font-semibold'>Register here</Link></p>
                    }
                </div> 
            </form>  </div>
               
    );
}
