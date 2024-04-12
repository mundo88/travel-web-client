import React from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='bg-main md:overflow-auto overflow-x-hidden'>
            <div className='fixed top-0 w-full m-auto z-50 py-4 bg-main'>
                <Navbar></Navbar>
            </div>
            <Header></Header>  
            <MainContent></MainContent> 
        </div>
    );
}

export default Home;
