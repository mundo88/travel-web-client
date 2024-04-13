import React from 'react';
import { ContactContent } from '../components/Contact';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-24 pt-12 pb-24 items-center container mx-auto">
                <div className="flex items-center relative">
                    <ContactContent/>
                </div>
                <div className='flex flex-col justify-between'>
                    <ContactForm/>
                </div>
            </div>
        </>
    );
}

export default Contact;
