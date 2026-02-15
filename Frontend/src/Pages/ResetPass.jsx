import React, { useState,useRef } from 'react'
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
 const primaryColor="#ff4d2d";
    const hoverColor="#e64323";
    const bgColor="#fff9f6";
    const borderColor="#ddd";
function ResetPass() {
  const [showPassword,setShowPassword]=useState(false);
  const [password,setPassword]=useState("");
  let [state,setstate]=useState(2);
  let [email,setEmail]=useState("");
  let [otp,setOtp]=useState();
  const [error, setError] = useState("");
  const navigate =useNavigate();
  const isRequestInProgress = useRef(false);
 async function  handleReset() {

     if (isRequestInProgress.current) return;

     isRequestInProgress.current = true;
     try{
     let res= await  axios.post("http://localhost:8000/api/auth/email-exist",{email})
     
    if(!res.data.exist){
         setError("Email not exists");
         return;
    }
   
    setstate(2);
}
catch(err){
   console.log(err);
}
finally{
      isRequestInProgress.current = false;
}
  } 

  function handleOtp(){
    setstate(3);
  }
  function handleResetPassword(){
    navigate("/signin")
  }
  return (
    <div className='min-h-screen w-full bg-[#fff9f6] flex justify-center items-center'>
        {
            state==1 &&  <div className='w-full max-w-md shadow-lg border-[1px] bg-white rounded-xl p-8 ' style={{border:`1px solid ${borderColor}`}}>
            <h1 className='text-3xl font-bold mb-2 text-center' style={{color:primaryColor}}>Foodify</h1>
            <p className='text-gray-600 mb-8'>Enter your registered email address to receive a secure password reset link.
</p>
           
           
            {/* Email */}
            <div className='mb-4'>
                <label htmlFor="Email" className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Email' onChange={(e)=>{
                    setEmail(e.target.value);
                }} value={email}/>
            </div>
             {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}
             <button className={`w-full border-white rounded-lg py-2 bg-[#ff4d2d] hover:bg-[#e64323] font-medium text-white transition duration-200 `} onClick={()=>{
                handleReset();
                
            }} >Send OTP</button>
            </div>
            
            
        }
        {
            state==2 &&  <div className='w-full max-w-md shadow-lg border-[1px] bg-white rounded-xl p-8 ' style={{border:`1px solid ${borderColor}`}}>
            <h1 className='text-3xl font-bold mb-2 text-center' style={{color:primaryColor}}>Foodify</h1>
            <p className='text-gray-600 mb-8'>We have sent a 6-digit OTP to your Registered mail
</p>
           
           
            {/* Email */}
            <div className='mb-4'>
                <label htmlFor="OTP" className='block text-gray-700 font-medium mb-1'>Enter OTP</label>
                <input type="text"  className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your OTP' onChange={(e)=>{
                    setOtp(e.target.value);
                }} value={otp}/>
            </div>
             {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}
             <button className={`w-full border-white rounded-lg py-2 bg-[#ff4d2d] hover:bg-[#e64323] font-medium text-white transition duration-200 `} onClick={()=>{
                handleOtp();
                
            }} >Verify OTP</button>
            </div>
        }
        {
            state==3 && <div>
                <div className='w-full max-w-md shadow-lg border-[1px] bg-white rounded-xl p-8 ' style={{border:`1px solid ${borderColor}`}}>
            <h1 className='text-3xl font-bold mb-2 text-center' style={{color:primaryColor}}>Foodify</h1>
            <p className='text-gray-600 mb-8'>Enter your registered email address to receive a secure password reset link.
</p>
<div className='mb-4'>
                <label htmlFor="Password" className='block text-gray-700 font-medium mb-1'>New Password</label>
                <div className='relative'>
                <input type={showPassword?"text":"password"} className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your New Password'  onChange={(e)=>{
                    setPassword(e.target.value);

                }} value={password}/>
                <button className=' cursor-pointer absolute right-2 top-[12px] ' onClick={()=>{
                    showPassword?setShowPassword(false):setShowPassword(true);
                }}>{showPassword?<FaEye />:<FaEyeSlash /> }</button>
                </div>
               
            </div>
             <button className={`w-full border-white rounded-lg py-2 bg-[#ff4d2d] hover:bg-[#e64323] font-medium text-white transition duration-200 `} onClick={()=>{
                handleResetPassword();
                
            }} >Reset Password</button>
</div>
            </div>
        }

    </div>
  )
}

export default ResetPass