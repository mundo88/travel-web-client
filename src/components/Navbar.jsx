import React from 'react';
import logo from "../assets/images/logo.png"
import line from "../assets/images/SVG/line.svg"
import { Link } from 'react-router-dom';
import { NavHashLink,HashLink } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <div className='w-full backdrop-blur-lg text-white'>
            <div className='flex justify-between items-center px-6 container m-auto'>
                <div className='h-9'>
                    <img src={logo} className='h-full w-auto' alt="" />
                </div>
                <div className='flex items-center justify-center gap-6' >
                    <NavHashLink smooth={true} activeClassName="haha" to={"/#top"} className='flex items-center justify-center py-2 px-2 relative font-semibold group'>
                    {({isActive})=>(
                            isActive ? 
                            <>
                                <span className='text-teal-300'>Home</span>
                                <span className='absolute bottom-0'>
                                    <img src={line} alt=""/>
                                </span> 
                            </>
                            : <span>Home</span>
                        )}
                    </NavHashLink>
                    <NavHashLink to={"#popular-place"} className='flex items-center justify-center py-2 px-2 relative font-semibold'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <span className='text-teal-300'>Popular places</span>
                                <span className='absolute bottom-0'>
                                    <img src={line} alt=""/>
                                </span> 
                            </>
                            : <span>Popular places</span>
                        )}
                    </NavHashLink>
                    <NavHashLink to={"#current-deals"} className='flex items-center justify-center py-2 px-2 relative font-semibold'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <span className='text-teal-300'>Current deals</span>
                                <span className='absolute bottom-0'>
                                    <img src={line} alt=""/>
                                </span> 
                            </>
                            : <span>Current deals</span>
                        )}
                        
                    </NavHashLink>
                    <NavHashLink to={"#contact"} className='flex items-center justify-center py-2 px-2 relative font-semibold'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <span className='text-teal-300'>Contact</span>
                                <span className='absolute bottom-0'>
                                    <img src={line} alt=""/>
                                </span> 
                            </>
                            : <span>Contact</span>
                        )}
                        
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
