import React from 'react';
import logo from "../assets/images/logo.png"
import line from "../assets/images/SVG/line.svg"
import { NavHashLink } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <div className='w-full  bg-main text-white py-8 '>
            <div className='flex justify-between items-center px-6 container m-auto'>
                <div className='h-14'>
                    <img src={logo} className='h-full w-auto' alt="" />
                </div>
                <div className='flex items-center justify-center gap-6' >
                    <NavHashLink smooth={true} to={"/#top"} className='flex items-center justify-center py-2 px-2 relative font-semibold group'>
                    {({isActive})=>(
                            isActive ? 
                            <>
                                <span className='text-teal-300'>Home</span>
                                <span className='absolute bottom-0.5'>
                                    <img src={line} alt=""/>
                                </span> 
                            </>
                            : <span>Home</span>
                        )}
                    </NavHashLink>
                    <NavHashLink to={"#popular-place"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <span>Popular places</span>
                    </NavHashLink>
                    <NavHashLink to={"#current-deals"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <span>Current deals</span>
                    </NavHashLink>
                    <NavHashLink to={"#contact"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <span>Contact</span>
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
