import React ,{useEffect, useState} from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import normalizeWheel from 'normalize-wheel';
import { Toaster } from 'react-hot-toast';

const ScrollToTop = ()=> {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
const Layout = () => {
    const [isNavHidden, setIsNavHidden] = useState(false);
    const [prevTouchY, setPrevTouchY] = useState(null);
    const handleScroll = (e) => {
      if (!document.body.classList.contains('overflow-hidden')) {

        if (e.type === "wheel" || e.type === "scroll") {
          const normalized = normalizeWheel(e);
          let scrollTop = normalized.pixelY;
          if (scrollTop > 0) {
            setIsNavHidden(true);
          } else if (scrollTop <= 0) {
            setIsNavHidden(false);
          }
        } 
        // mobile scroll
        else if (
          e.type === "touchmove"
        ) {
          const touch = e.changedTouches[0];
          const currentTouchY = touch.clientY;
    
          if (prevTouchY !== null) {
            if (currentTouchY > prevTouchY) {
              setIsNavHidden(false);
            } else if (currentTouchY < prevTouchY) {
              setIsNavHidden(true);
            }
          }
          setPrevTouchY(currentTouchY);
        }
      }
    };
    const handleTouchStart = (e) => {
      const touch = e.changedTouches[0];
      const currentTouchY = touch.clientY;
      setPrevTouchY(currentTouchY);
    };
  
    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const currentTouchY = touch.clientY;
      setPrevTouchY(currentTouchY);
    };
    return (
        <>
        
            <ScrollToTop/>
            <div className='min-h-screen bg-main'
               // desktop
                onWheel={(e) => handleScroll(e)}
                onScroll={(e) => handleScroll(e)}
                // mobile
                onTouchMove={(e) => handleScroll(e)}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
            >
                <div className={`py-4 bg-main duration-300 z-50 -top-px sticky ${!isNavHidden? "visible opacity-100":"invisible opacity-0"}`}>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
}

export default Layout;
