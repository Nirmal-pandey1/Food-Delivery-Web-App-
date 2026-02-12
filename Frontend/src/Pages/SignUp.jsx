import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function SignUp() {
    const primaryColor="#ff4d2d";
    const hoverColor="#e64323";
    const bgColor="#fff9f6";
    const borderColor="#ddd";
    const [showPassword,setShowPassword]=useState(false);
    const [role,setRole]=useState('user')
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{backgroundColor:bgColor}}>
        <div className='w-full max-w-md shadow-lg border-[1px] bg-white rounded-xl p-8 ' style={{border:`1px solid ${borderColor}`}}>
            <h1 className='text-3xl font-bold mb-2 text-center' style={{color:primaryColor}}>Foodify</h1>
            <p className='text-gray-600 mb-8'>Create your account to get started with delicious food delivery</p>
           
            {/* FullName */}
            <div className='mb-4'>
                <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'>Full Name</label>
                <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Full Name' />
            </div>
            {/* Email */}
            <div className='mb-4'>
                <label htmlFor="Email" className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Email' />
            </div>
            {/* Mobile */}
            <div className='mb-4'>
                <label htmlFor="Mobile" className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
                <input type="number" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Mobile Number' />
            </div>
            {/* Password */}
            <div className='mb-4'>
                <label htmlFor="Password" className='block text-gray-700 font-medium mb-1'>Password</label>
                <div className='relative'>
                <input type={showPassword?"number":"password"} className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Password' />
                <button className=' cursor-pointer absolute right-2 top-[12px] ' onClick={()=>{
                    showPassword?setShowPassword(false):setShowPassword(true);
                }}>{showPassword?<FaEye />:<FaEyeSlash /> }</button>
                </div>
            </div>
              {/* Password */}
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
            <button className='w-full border rounded-lg py-2' style={{backgroundColor:primaryColor, color:"white"}}>SignUp</button>
        </div>
     
    </div>
  )
}

export default SignUp