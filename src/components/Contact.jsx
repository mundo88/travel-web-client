import React from 'react';
import ContactImg from "../assets/images/contact-svg.svg"
import useSocials from "../hooks/useSocials"
import { Link } from 'react-router-dom';

const ContactContent = ()=>{
    const socials = useSocials()
    return (
        <div className='relative px-4 md:px-0 w-full'>
            <div className="md:mt-36 mt-16 overflow-hidden pr-12">
                <div className='w-full absolute top-0 right-0 '>
                    <img src={ContactImg} alt="" />
                </div>
            </div>
            <div className='relative bg-main md:pt-4 md:w-fit'>
                <div className="text-white text-2xl md:text-7xl font-bold font-serif ">
                    We'd love to hear your thoughts
                </div>
                <div className='mt-4 text-md md:text-xl text-gray-300 pr-4'>
                    Tell us about your vision: which challanges are you facing? We'd love to stay in touch with you, so we are always ready to answer any question that interests you.
                </div>
                <p className='md:mt-8 mt-4 text-white uppercase font-semibold mb-2 text-sm md:text-xl'>May tour Joint Stock company</p>
                <div className='flex flex-wrap gap-y-4 gap-x-12'>
                    <div className='space-y-2'>
                        <p className='text-white uppercase font-semibold text-xs md:text-sm'>Address</p>
                        <p className='text-gray-300 text-sm'> No. 105, House 381, Lane 379 Minh Khai, Vinh Tuy Ward, Hai Ba Trung District, Hanoi City, Vietnam </p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-white uppercase font-semibold text-xs md:text-sm'>PHONE</p>
                        <Link to={'tel:+84902168187'} className='text-gray-300 text-sm line-clamp-1 whitespace-nowrap'>(+84) 902168187</Link>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-white uppercase font-semibold text-xs md:text-sm'>EMAIL</p>
                        <Link to={"mailto:booking.maytour@gmail.com"}  className='text-gray-300 text-sm line-clamp-1'>booking.maytour@gmail.com</Link>
                    </div>
                </div>
                <div className="md:px-2 md:pb-8 md:mt-8 mt-4 flex items-center gap-6 pb-4 md:pb-0 md:justify-start justify-between">
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
    ContactContent
};
