import React, { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { axiosInstance } from '../service/axiosInstance';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const { setAccessToken, setCSRFToken } = useAuth()
    const navigate = useNavigate()
    const [nextParams] = useSearchParams();
    // const fromLocation = nextParams.get('next')||'/' 

    const handleLogin = async ()=>{
        setLoading(true)
        const res = await axiosInstance.post('login',JSON.stringify({username,password}))
        console.log(res?.data?.access_token)
        setAccessToken(res?.data?.access_token)
        setCSRFToken(res?.headers["x-csrftoken"])
        setUsername()
        setPassword()
        setLoading(false)
        // navigate(fromLocation, { replace: true })
    }
    return (
        <>
            <div className="pb-6 space-y-3">
                <h1 className='text-4xl font-bold text-gray-100'>Log In to Maytour</h1>
                <p className='text-md text-gray-300'>Don't have an account? <Link className='text-teal-300 hover:underline' to={'/register'}>Register now</Link></p>
            </div>
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your username?</label>
                <input onInput={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='marvinmckinney' />
            </div>                   
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your password?</label>
                <input onInput={(e)=>setPassword(e.target.value)}  type="password" name="password" id="password" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' placeholder='******' />
            </div>                   
            <div className='pt-4 flex justify-end items-center'>
                <button onClick={handleLogin} className="flex flex-row justify-center md:flex-col items-center gap-2 md:w-fit w-full text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                    Log In
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                </button>
            </div>   
        </>
    );
}

export default Login;
