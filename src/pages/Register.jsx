import React, { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../service/axiosInstance';
import { useForm } from 'react-hook-form';
import CustomToast from '../components/CustomToast';
import toast from 'react-hot-toast';

const Register = () => {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [rePassword,setRePassword] = useState(null)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setError,
        formState: {errors}
    } = useForm();


    const handleRegister = (data)=>{
        
        axiosInstance.post('/register',data).then(res=>{
            console.log(res.data)
            if (res.data.errors_code===400) {
                setError("username",{
                    message:res.data.error_message
                })
            }else {
                toast.custom((t) => <CustomToast t={t} msg={res.data.message}/>,{duration:5000})
                reset()
                navigate("/login", { replace: true })
            }
      }).catch(error=>{
        toast.custom((t) => <CustomToast t={t} msg={error.response.data.detail}/>,{duration:5000})
      })
    }
    return (
        <form className='flex flex-col gap-10' onSubmit={handleSubmit(data=>handleRegister(data))}>
            <div className="pb-6 space-y-3">
                <h1 className='text-4xl font-bold text-gray-100'>Register Maytour Account</h1>
                <p className='text-md text-gray-300'>Do you already have an account? <Link className='text-teal-300 hover:underline' to={'/login'}>Log in now</Link></p>
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
                    className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' 
                    placeholder='marvinmckinney' 
                />
                {errors.username && <p className='text-red-400 mt-2'>{errors.username.message}</p>}
            </div>                   
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your password?</label>
                <input 
                    {...register('password',
                        { 
                            required: 'Password is required',
                        }
                    )} 
                    type="password" 
                    name="password" 
                    id="password" 
                    className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' 
                    placeholder='******' 
                />
                {errors.password && <p className='text-red-400 mt-2'>{errors.password.message}</p>}
            </div>                   
            <div>
                <label htmlFor='username' className='text-gray-300'>Confirm the password again</label>
                <input 
                    {...register('re-password',
                        { 
                            required: 'Password is required',
                            validate: (val) => {
                                if (watch('password') != val) {
                                  return "Your passwords do no match";
                            }}
                        }
                    )} 
                    type="password" 
                    name="re-password" 
                    id="re-password" 
                    className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' 
                    placeholder='******' 
                />
                {errors['re-password'] && <p className='text-red-400 mt-2'>{errors['re-password'].message}</p>}
            </div>                   
            <div className='pt-4 flex justify-end items-center'>
                <button type='submit' className="flex flex-row justify-center md:flex-col items-center gap-2 md:w-fit w-full text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                    Register
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                </button>
            </div>   
        </form>
    );
}

export default Register;
