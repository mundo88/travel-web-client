import React, { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../service/axiosInstance';

const Register = () => {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [rePassword,setRePassword] = useState(null)
    const navigate = useNavigate()
    
    const handleRegister = ()=>{
        if (password!=rePassword) {
            alert('Xác nhận mật khẩu không thành công')
            return
        }
    //     axiosInstance.post('/register',{email,password}).then(res=>{
    //       navigate("/login", { replace: true })
    //   })
        console.log(username,password,rePassword)
    }
    return (
        <>
            <div className="pb-6 space-y-3">
                <h1 className='text-4xl font-bold text-gray-100'>Register Maytour Account</h1>
                <p className='text-md text-gray-300'>Do you already have an account? <Link className='text-teal-300 hover:underline' to={'/login'}>Log in now</Link></p>
                
            </div>
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your username?</label>
                <input onInput={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='marvinmckinney' />
            </div>                   
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your password?</label>
                <input onInput={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' placeholder='******' />
            </div>                   
            <div>
                <label htmlFor='username' className='text-gray-300'>Re-enter the password again</label>
                <input onInput={(e)=>setRePassword(e.target.value)} type="password" name="re-password" id="re-password" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' placeholder='******' />
            </div>                   
            <div className='pt-4 flex justify-end items-center'>
                <button onClick={handleRegister} className="flex flex-row justify-center md:flex-col items-center gap-2 md:w-fit w-full text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                    Register
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                </button>
            </div>   
        </>
    );
}

export default Register;
