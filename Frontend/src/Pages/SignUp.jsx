import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
function SignUp() {
    const primaryColor="#ff4d2d";
    const hoverColor="#e64323";
    const bgColor="#fff9f6";
    const borderColor="#ddd";
    const [showPassword,setShowPassword]=useState(false);
    const [role,setRole]=useState('user')
    const navigate =useNavigate();
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState();
    const [password,setPassword]=useState("");

    function handleSignUp(){
           const res=axios.post("http://localhost:8000/api/auth/signup",{fullName,email,mobile,role,password});
           console.log(res);
    }
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{backgroundColor:bgColor}}>
        <div className='w-full max-w-md shadow-lg border-[1px] bg-white rounded-xl p-8 ' style={{border:`1px solid ${borderColor}`}}>
            <h1 className='text-3xl font-bold mb-2 text-center' style={{color:primaryColor}}>Foodify</h1>
            <p className='text-gray-600 mb-8'>Create your account to get started with delicious food delivery</p>
           
            {/* FullName */}
            <div className='mb-4'>
                <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'>Full Name</label>
                <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Full Name' onChange={(e)=>{
                    setFullName(e.target.value);
                    
                    
                } } value={fullName} />
            </div>
            {/* Email */}
            <div className='mb-4'>
                <label htmlFor="Email" className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Email' onChange={(e)=>{
                    setEmail(e.target.value);
                }} value={email}/>
            </div>
            {/* Mobile */}
            <div className='mb-4'>
                <label htmlFor="Mobile" className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
                <input type="number" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Mobile Number' onChange={(e)=>{
                    setMobile(e.target.value);

                }} value={mobile}/>
            </div>
            {/* Password */}
            <div className='mb-4'>
                <label htmlFor="Password" className='block text-gray-700 font-medium mb-1'>Password</label>
                <div className='relative'>
                <input type={showPassword?"text":"password"} className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Password'  onChange={(e)=>{
                    setPassword(e.target.value);

                }} value={password}/>
                <button className=' cursor-pointer absolute right-2 top-[12px] ' onClick={()=>{
                    showPassword?setShowPassword(false):setShowPassword(true);
                }}>{showPassword?<FaEye />:<FaEyeSlash /> }</button>
                </div>
            </div>
              {/* Role */}
            <div className='mb-4'>
                <label htmlFor="Role" className='block text-gray-700 font-medium mb-1'>Role</label>
                <div className='flex gap-4'>
                  {["user","owner","deliveryBoy"].map((r)=>{
                        return <button className='border rounded-lg px-5 py-2 text-center font-medium ' onClick={()=>{
                            setRole(r);
                        } } style={role==r?{backgroundColor:primaryColor,color:"white"}:{border:`1px solid ${borderColor}`,color:"#333"}} >{r}</button>
                  })}
                </div>
            </div>
            <button className={`w-full border-white rounded-lg py-2 bg-[#ff4d2d] hover:bg-[#e64323] font-medium text-white transition duration-200 `} onClick={()=>{
                handleSignUp();
            }} >SignUp</button>

            <button className='mt-3 w-full flex justify-center items-center gap-2 px-4 py-2 border-gray-200 rounded-lg hover:bg-gray-200'>
                 <FcGoogle />
                <span>Sign up with Google</span>
            </button>

            <p className='text-center mt-2 cursor-pointer hover:bg-gray-200 px-3 py-2  rounded-lg' onClick={()=>{navigate("/signin")}} >Already have an account ? <span className='text-[#ff4d2d]'>Sign In</span></p>

        </div>
     
    </div>
  )
}

export default SignUp