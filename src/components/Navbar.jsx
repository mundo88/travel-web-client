import React, { useState } from 'react';
import logo from "../assets/images/logo.png"
import line from "../assets/images/SVG/line.svg"
import { NavHashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom';
import { TbHeart, TbMenu2,  TbSearch, TbSettingsFilled, TbUser } from 'react-icons/tb';
import Dropdown from './Dropdown';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import useLogout from '../hooks/useLogout';


const Navbar = ({currentUser}) => {
    const [loading, setLoading] = useState(false)
    const logout = useLogout()
    const navigate = useNavigate()
    const onLogout = async() =>{
        setLoading(true)
        await logout()
        navigate('/')
    }
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
                        <TbHeart size={24}></TbHeart>
                    </button>
                    <Dropdown>
                        <Dropdown.Button>
                            {currentUser ?
                                <button className=' rounded-full flex items-center justify-center border-2 border-gray-300 min-h-8 min-w-8 w-8 h-8 overflow-hidden relative font-semibold hover:text-teal-300 duration-300'>
                                    <img src={'http://127.0.0.1:8000' + currentUser.avatar} alt={`${currentUser.username} avatar`} className='w-full h-full object-cover' />
                                </button>:
                                <button className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                                    <TbUser size={24}></TbUser>
                                </button>
                            }
                        </Dropdown.Button>
                        <Dropdown.DropdownContainer postion='bottom-left' className='mt-2'>
                            <Dropdown.Item>
                                <Dropdown.ItemIcon>
                                    <TbSettingsFilled size={20} />
                                </Dropdown.ItemIcon>
                                <Dropdown.ItemText>
                                    Cài đặt
                                </Dropdown.ItemText>
                            </Dropdown.Item>
                            <Dropdown.Separator/>
                            {currentUser ?
                                <Dropdown.Item onClick={onLogout}>
                                    <Dropdown.ItemIcon>
                                        <IoLogOut size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Log out
                                    </Dropdown.ItemText>
                                </Dropdown.Item>:
                                <Dropdown.Item onClick={onLogout}>
                                    <Dropdown.ItemIcon>
                                        <IoLogIn size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Log in
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                            }
                            
                        </Dropdown.DropdownContainer>
                    </Dropdown> 
                    
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
