import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const {currentUser} = useAuth()
    return (
        <div className='min-h-screen bg-main tour'>
            <div className='py-4 sticky top-0 bg-main z-50'>
                <Navbar currentUser={currentUser}></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Layout;
