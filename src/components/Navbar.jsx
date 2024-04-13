import React from 'react';
import logo from "../assets/images/logo.png"
import line from "../assets/images/SVG/line.svg"
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { TbBookmark, TbMenu2,  TbSearch, TbUser } from 'react-icons/tb';


const Navbar = () => {
    return (
        <div className='w-full bg-main text-white'>
            <div className='flex justify-between items-center px-6 container m-auto'>
                <div className="flex items-center gap-6 w-28">
                    <Link to={"/"} className='md:h-12 h-8 '>
                        <img src={logo} className='h-full w-auto' alt="" />
                    </Link>
                </div>
                <div className="hidden md:block w-full">
                    <div className='flex items-center justify-center gap-6'>
                        <NavHashLink smooth={true} to={"/#top"} className='flex items-center justify-center py-2 px-2 relative font-semibold group'>
                            <span className='text-teal-300'>Home</span>
                            <span className='absolute bottom-0.5'>
                                <img src={line} alt=""/>
                            </span> 
                        </NavHashLink>
                        <NavHashLink smooth={true} to={"/#destination"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <span>Destination</span>
                        </NavHashLink>
                        <NavHashLink smooth={true} to={"/#featured"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <span>Featured</span>
                        </NavHashLink>
                        <NavHashLink smooth={true} to={"/#explore"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <span>Explore</span>
                        </NavHashLink>
                        <NavHashLink smooth={true} to={"/#article"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <span>Article</span>
                        </NavHashLink>
                        <NavHashLink smooth={true} to={"/contact"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <span>Contact</span>
                        </NavHashLink>
                    </div>
                </div>
                <div className="md:flex items-center hidden gap-6 w-28 justify-end">
                    <button className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <TbSearch size={24}></TbSearch>
                    </button>
                    <button className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <TbBookmark size={24}></TbBookmark>
                    </button>
                    <button className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <TbUser size={24}></TbUser>
                    </button>
                </div>
                <div className="block md:hidden ">
                    <button className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                        <TbMenu2 size={28}></TbMenu2>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
