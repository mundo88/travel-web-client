import React from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='bg-main overflow-x-hidden'>
            <div className='relative z-50 py-8'>
                <Navbar></Navbar>
            </div>
            <Header></Header>  
            <MainContent></MainContent> 
        </div>
    );
}

export default Home;
