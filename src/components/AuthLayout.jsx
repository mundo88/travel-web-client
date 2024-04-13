import React from 'react';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='h-screen w-screen bg-main relative flex items-center justify-center'>
            <button onClick={()=>window.history.back(-1)} className='absolute flex items-center justify-center gap-3 text-gray-100 p-4 top-4 left-4 hover:bg-teal-950 duration-300 active:scale-95'>
                <TbArrowNarrowLeft size={24}></TbArrowNarrowLeft>
                <span>Back</span>
            </button>
            <div className='backdrop-blur-3xl p-24 bg-teal-950'>   
                <div className='flex flex-col gap-10'>
                    <Outlet></Outlet>      
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
