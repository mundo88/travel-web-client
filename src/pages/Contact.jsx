import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactContent } from '../components/Contact';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        <div className='bg-main min-h-screen flex justify-between flex-col'>
            <div className='z-50 py-8 sticky top-0'>
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-2 gap-24 pt-12 pb-24 items-center container mx-auto">
                <div className="flex items-center relative">
                    <ContactContent/>
                </div>
                <div className='flex flex-col justify-between'>
                    <ContactForm/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;
