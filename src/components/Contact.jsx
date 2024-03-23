import React from 'react';
import ContactImg from "../assets/images/contact-svg.svg"
import useSocials from "../hooks/useSocials"
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <>
            <div>
                <label htmlFor='username' className='text-gray-300'>What's your name?</label>
                <input type="text" name="username" id="username" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='Marvin McKinney' />
            </div>                   
            <div>
                <label htmlFor='email' className='text-gray-300'>What's your email?</label>
                <input type="text" name="email" id="email" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='marvin_mckinney@gmail.com'/>
            </div>                   
            <div>
                <label htmlFor='share' className='text-gray-300'>Share your thoughts</label>
                <input type="text" name="share" id="share" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder="Hi, i' love o ask you..."/>
            </div>    
            <div className='pt-4 flex justify-end items-center'>
                <button className="flex flex-col items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                    SEND
                    <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                </button>
            </div>         
        </>
    );
}
const ContactContent = ()=>{
    const socials = useSocials()
    return (
        <div className='relative'>
            <div className=" pt-36 overflow-hidden pr-12">
                <div className='w-full absolute top-0 right-0'>
                    <img src={ContactImg} alt=""  />
                </div>
            </div>
            <div className='relative bg-main pt-4 w-fit'>
                <div className="text-white text-7xl font-bold font-serif">
                    We'd love to hear your thoughts
                </div>
                <div className='mt-4 text-xl text-gray-300 pr-4'>
                    Tell us about your vision: which challanges are you facing? We'd love to stay in touch with you, so we are always ready to answer any question that interests you.
                </div>
                <p className='mt-8 text-white uppercase font-semibold mb-2 text-xl'>May tour Joint Stock company</p>
                <div className='flex gap-12'>
                    <div className='space-y-2'>
                        <p className='text-white uppercase font-semibold text-sm'>Address</p>
                        <p className='text-gray-300 text-sm'> No. 105, House 381, Lane 379 Minh Khai, Vinh Tuy Ward, Hai Ba Trung District, Hanoi City, Vietnam </p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-white uppercase font-semibold text-sm'>PHONE</p>
                        <Link to={'tel:+84902168187'} className='text-gray-300 text-sm whitespace-nowrap'>(+84) 902168187</Link>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-white uppercase font-semibold text-sm'>EMAIL</p>
                        <Link to={"mailto:booking.maytour@gmail.com"}  className='text-gray-300 text-sm'>booking.maytour@gmail.com</Link>
                    </div>
                </div>
                <div className="mt-8 flex items-center gap-6">
                    {Object.keys(socials).map((key,i)=>(
                        <Link to={socials[key].to} key={i} className={`w-12 h-12 border-gray-500 ring-2 ring-gray-500 hover:ring-offset-[3px] hover:ring-offset-[#051214] flex items-center justify-center text-gray-300 relative ${socials[key].hoverClass} active:-translate-y-1 duration-300`}>
                            <span className='relative z-10'>
                                {socials[key].icon}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


export {
    ContactForm,
    ContactContent
};
