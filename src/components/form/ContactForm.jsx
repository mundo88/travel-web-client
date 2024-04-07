import React from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';

const ContactForm = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your name?</label>
                <input type="text" name="username" id="username" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='Marvin McKinney' />
            </div>                   
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your phone number?</label>
                <input type="number" name="phone" id="phone" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 [&::-webkit-inner-spin-button]:appearance-none' placeholder='0984.....' />
            </div>                   
            <div>
                <label htmlFor='email' className='text-gray-300'>What's your email?</label>
                <input type="text" name="email" id="email" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='marvin_mckinney@gmail.com'/>
            </div>                   
            {/* <div>
                <label htmlFor='share' className='text-gray-300'>Share your thoughts</label>
                <input type="text" name="share" id="share" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder="Hi, i' love o ask you..."/>
            </div>     */}
            <div className='pt-4 flex justify-end items-center'>
                <button className="flex flex-col items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                    SEND
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                </button>
            </div>         
        </div>
    );
}

export default ContactForm;
