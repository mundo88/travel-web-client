import React, { useEffect } from 'react';
import { TbArrowNarrowRight, TbLoader2 } from 'react-icons/tb';
import {  Controller, useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css'
import ReactPhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import toast from 'react-hot-toast';
import { isValidPhoneNumber } from 'react-phone-number-input';
import CustomToast from '../CustomToast';

const notify = () => toast('Here is your toast.');



const ContactForm = ({onSubmit,loading}) => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors ,isSubmitSuccessful },
    } = useForm();
    useEffect(() => {
        if (!isSubmitSuccessful) { return }
      
      }, [isSubmitSuccessful])
    
    const handleSuccess =(message)=>{
        reset()
        toast.custom((t) => <CustomToast t={t} msg={message}/>,{duration:5000})
    }
    const controlForm = (data)=>{
        data.phone_number = "+"+data.phone_number
        onSubmit(data,handleSuccess)
    }
    
    return (
        <form className='flex flex-col gap-10' onSubmit={handleSubmit((data) => controlForm(data))}>
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your name?</label>
                <input type="text" {...register('username',{ required: 'Username is required.' })} id="username" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-xl md:text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='Marvin McKinney' />
                {errors.username && <p className='text-red-400 mt-2'>{errors.username.message}</p>}
            </div>                   
            <div>
                <label htmlFor='phone_number' className='text-gray-300'>What's your phone number?</label>
                <div className='flex gap-3'>
                    <Controller
                        control={control}
                        name="phone_number"
                        rules={
                            { 
                                required: "Phone number is required." ,
                                validate: (value) => isValidPhoneNumber("+"+value) || "Invalid phone number.",
                                
                            }
                        }
                        render={({ field: { ref, ...field } }) => (
                        <ReactPhoneInput
                            {...field}
                            containerClass='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white  focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none'
                            inputClass='!py-2  w-full !bg-transparent !border-none !outline-none !w-full !text-white !text-xl md:!text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 '
                            inputExtraProps={{
                              ref,
                              required: true,
                              autoFocus: true
                            }}
                            country={"vn"}
                            enableSearch={true}
                            dropdownClass='text-black !max-h-[300px]'
                            prefix='+'
                            buttonClass= "!bg-transparent !border-none hover:!bg-teal-800 !bottom-2 hover:!bg-transparent"
                          />
                        )}
                    />
                </div>
                {errors.phone_number && <span className='text-red-400 mt-2 inline-block'>{errors.phone_number.message}</span>}
            </div>                   
            <div>
                <label htmlFor='email' className='text-gray-300'>What's your email?</label>
                <input 
                    type="email"
                    id="email" 
                    {...register('email',
                        { 
                            required: 'Email is required' ,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address."
                              }
                        }
                    )}
                    className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-xl md:text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' 
                    placeholder='marvin_mckinney@gmail.com'
                />
                {errors.email && <span className='text-red-400 mt-2 inline-block'>{errors.email.message}</span>}
            </div>                   
            <div>
                <label htmlFor='note' className='text-gray-300'>Share your thoughts</label>
                <input type="text" id="note" {...register('note')} className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-xl md:text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder="Hi, i' love o ask you..."/>
            </div>    
            <div className='pt-4 flex justify-end items-center'>
                <button type='submit' className={`${loading ? "bg-gray-500 pointer-events-none border-gray-500" : "hover:bg-teal-400 px-6 py-3 bg-teal-300 border-teal-400"} border-2 flex flex-row justify-center md:flex-col items-center gap-2 md:w-fit w-full text-xl font-semibold px-6 py-3 text-black duration-300 text-center active:scale-95`}>
                    SEND
                    {loading ? 
                    <TbLoader2 className='animate-spin' size={28}></TbLoader2>
                    :
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight>    
                } 
                </button>
            </div>         
        </form>
    );
}

export default ContactForm;
