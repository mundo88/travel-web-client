import React, { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../service/axiosInstance';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import CustomToast from '../components/CustomToast';

const Login = () => {

    const [loading, setLoading] = useState(false)
    const { setAccessToken, setCSRFToken } = useAuth()
    const {
        control,
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors},
    } = useForm();
    const handleLogin = async (data)=>{
        setLoading(true)
        axiosInstance.post('login',data)    .then(res=>{
            setAccessToken(res?.data?.access_token)
            setCSRFToken(res?.headers["x-csrftoken"])
            reset()
            toast.custom((t) => <CustomToast t={t} msg={'Login successfully'}/>,{duration:5000})
        }).catch(error=>{
            toast.custom((t) => <CustomToast t={t} msg={error.response.data.detail}/>,{duration:5000})
        })
    }

    return (
        <form className='flex flex-col gap-10' onSubmit={handleSubmit((data) => handleLogin(data))}>
            <div className="pb-6 space-y-3">
                <h1 className='text-4xl font-bold text-gray-100'>Log In to Maytour</h1>
                <p className='text-md text-gray-300'>Don't have an account? <Link className='text-teal-300 hover:underline' to={'/register'}>Register now</Link></p>
            </div>
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your username?</label>
                <input 
                    {...register('username',
                        { 
                            required: 'Username is required.',
                            pattern: {
                                value: /^[0-9A-Za-z_][^\s]{4,36}$/,
                                message: "Invalid username."
                            }
                        }
                    )} 
                    type="text"
                    name="username" 
                    id="username" 
                    className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' 
                    placeholder='marvinmckinney' 
                />
                {errors.username && <p className='text-red-400 mt-2'>{errors.username.message}</p>}
            </div>                   
            <div>
                <label htmlFor='password' className='text-gray-300'>What's your password?</label>
                <input 
                    {...register('password',
                        { 
                            required: 'Password is required',
                        }
                    )} 
                    type="password" 
                    name="password" 
                    id="password" 
                    className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' placeholder='******' 
                />
                {errors.password && <p className='text-red-400 mt-2'>{errors.password.message}</p>}
            </div>         
                      
            <div className='pt-4 flex justify-end items-center'>
                <button type='submit' className="flex flex-row justify-center md:flex-col items-center gap-2 md:w-fit w-full text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                    Log In
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                </button>
            </div>   
        </form>
    );
}

export default Login;
