import React ,{useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from './Navbar';
import Footer from './Footer';

const ScrollToTop = ()=> {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
const Layout = () => {
    const {currentUser} = useAuth()
    return (
        <>
            <ScrollToTop/>
            <div className='min-h-screen bg-main'>
                <div className='py-4 sticky top-0 bg-main z-50'>
                    <Navbar currentUser={currentUser}></Navbar>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;
