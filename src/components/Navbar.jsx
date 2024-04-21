import React, { useEffect, useState } from 'react';
import logo from "../assets/images/logo.png"
import line from "../assets/images/SVG/line.svg"
import { NavHashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import { TbArticle, TbCompass, TbHeart, TbHome, TbLogin, TbLogin2, TbLogout, TbMapPin, TbMenu2,  TbSearch, TbSettingsFilled, TbUser, TbX } from 'react-icons/tb';
import Dropdown from './Dropdown';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import useLogout from '../hooks/useLogout';
import useAuth from '../hooks/useAuth';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { LuContact } from "react-icons/lu";
import useViewport from "../hooks/useViewport"

const Navbar = () => {
    const [loading, setLoading] = useState(false)
    const {currentUser} = useAuth()
    const [show, setShow] = useState();
    const location = useLocation();
    const logout = useLogout()
    const {viewportWidth} = useViewport()
    const onLogout = async() =>{
        setLoading(true)
        await logout()
    }
    useEffect(()=>{
        if (show){
            document.body.classList.add('overflow-hidden')
        }else {
            document.body.classList.remove('overflow-hidden')
        }
    },[show])
    useEffect(() => {
        setShow(false)
    }, [location])
    return (
        <>
            <div className='w-full bg-main text-white relative z-50'>
                <div className='flex justify-between items-center md:px-0 px-4 container m-auto'>
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
                            <Link to={"/articles"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                                <span>Article</span>
                            </Link>
                            <NavHashLink smooth={true} to={"/contact"} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                                <span>Contact</span>
                            </NavHashLink>
                        </div>
                    </div>
                    <div className="md:flex items-center hidden gap-6 w-28 justify-end">
                        <Link to={"/tours"} className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <TbSearch size={24}></TbSearch>
                        </Link>
                        <Link to={"/favourites"} className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                            <TbHeart size={24}></TbHeart>
                        </Link>
                        <Dropdown className='relative'>
                            <Dropdown.Button>
                                {currentUser.id ?
                                    <button className=' rounded-full flex items-center justify-center border-2 border-gray-300 min-h-8 min-w-8 w-8 h-8 overflow-hidden relative font-semibold hover:text-teal-300 duration-300'>
                                        <img src={ process.env.REACT_APP_API_ENDPOINT + currentUser.avatar} alt={`${currentUser.username} avatar`} className='w-full h-full object-cover' />
                                    </button>:
                                    <button className='flex items-center justify-center py-2 relative font-semibold hover:text-teal-300 duration-300'>
                                        <TbUser size={24}></TbUser>
                                    </button>
                                }
                            </Dropdown.Button>
                            <Dropdown.Container postion='bottom-left' className='mt-2 max-w-xs w-56 p-2 bg-teal-800 '>
                                {currentUser.id ?
                                    <Dropdown.Item onClick={onLogout}>
                                        <Dropdown.ItemIcon>
                                            <IoLogOut size={18} />
                                        </Dropdown.ItemIcon>
                                        <Dropdown.ItemText>
                                            Log out
                                        </Dropdown.ItemText>
                                    </Dropdown.Item>:
                                    <Dropdown.Item to={'/login'}>
                                        <Dropdown.ItemIcon>
                                            <IoLogIn size={18} />
                                        </Dropdown.ItemIcon>
                                        <Dropdown.ItemText>
                                            Log in
                                        </Dropdown.ItemText>
                                    </Dropdown.Item>
                                }
                            </Dropdown.Container>
                        </Dropdown> 
                    </div>
                    <div className="block md:hidden">
                        <button onClick={()=>setShow(!show)} className='flex items-center justify-center py-2 px-2 relative font-semibold hover:text-teal-300 duration-300'>
                            {!show? 
                            <TbMenu2 size={28}></TbMenu2>:
                            <TbX  size={28}></TbX>
                            }
                        </button>
                    </div>
                </div>
                {show && viewportWidth<=767 &&
                <div className='fixed inset-0'>
                    <div className='absolute inset-0 bg-black/80' onClick={()=>{setShow(false)}}>
                    </div>
                    <div className={`absolute top-0 border-l border-l-teal-900 bottom-0 right-0  p-6 flex-col gap-2 w-80 bg-main z-50 flex animate-fade-left animate-duration-150`}>
                        {currentUser.id && 
                            <div className='flex justify-between items-center pb-4 border-b border-b-teal-900'>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 overflow-hidden rounded-full border border-teal-900">
                                        <img src={ process.env.REACT_APP_API_ENDPOINT + currentUser.avatar} alt={`Ảnh đại diện ${currentUser.username} `} className='h-full w-full object-cover' />
                                    </div>
                                    <div className='text-gray-200 font-semibold ml-4 truncate max-w-44'>
                                        {currentUser.username}
                                    </div>
                                </div>
                                <button className='p-2 text-gray-200' onClick={()=>{setShow(false)}}>
                                    <TbX size={24}></TbX>
                                </button>
                            </div>
                        }
                        <Link to='/#top' className='text-gray-100 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <TbHome size={20}></TbHome>
                            <span>Home</span>
                        </Link>
                        <Link to='/tours' className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <TbMapPin size={20}></TbMapPin>
                            <span>Destination</span>
                        </Link>
                        <Link to='/tours' className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <MdOutlineFeaturedPlayList size={20}></MdOutlineFeaturedPlayList>
                            <span>Featured</span>
                        </Link>
                        <Link to={'/tours'} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <TbCompass size={20}></TbCompass>
                            <span>Explore</span>
                        </Link>
                        <Link to={'/articles'} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <TbArticle size={20}></TbArticle>
                            <span>Article</span>
                        </Link>
                        <Link to={'/contact'} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <LuContact size={20}></LuContact>
                            <span>Contact</span>
                        </Link>
                        <Link to={'/tours'} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <TbSearch size={20}></TbSearch>
                            <span>Search</span>
                        </Link>
                        <Link to={'/favourites'} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                            <TbHeart size={20}></TbHeart>
                            <span>Favourites</span>
                        </Link>
                        <div className='w-full h-px bg-teal-900'></div>
                        {currentUser.id ? 
                            <Link onClick={onLogout} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                                <TbLogout size={20}></TbLogout>
                                <span>Logout</span>
                            </Link>
                            :
                            <Link to={'/login'} className='text-gray-300 w-full p-2 hover:bg-teal-900 duration-150 flex items-center gap-2'>
                                <TbLogin2 size={20}></TbLogin2>
                                <span>Login</span>
                            </Link>
                        }
                    </div>       
                </div>}
            </div>
        </>
    );
}

export default Navbar;
