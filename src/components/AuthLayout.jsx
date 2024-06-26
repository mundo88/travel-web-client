import React from 'react';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
    return (
        <div className='h-screen w-screen bg-main relative flex items-center justify-center'>
            <button onClick={()=>window.history.back(-1)} className='absolute flex items-center justify-center gap-3 text-gray-100 md:p-4 top-8 md:top-4 left-4 md:hover:bg-teal-950 duration-300 active:scale-95'>
                <TbArrowNarrowLeft size={24}></TbArrowNarrowLeft>
                <span>Back</span>
            </button>
            <div className='backdrop-blur-3xl px-4 md:p-24 md:bg-teal-950'>   
                <div className='flex flex-col gap-10'>
                    <Outlet></Outlet>      
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default AuthLayout;
