import React from 'react';
import MainSection from '../components/section/MainSection';
import Meta from '../components/Meta';

const Contact = () => {
    return (
        <>
            <Meta title={'Contact'}></Meta>
            <div className='py-6 md:p-24'>
                <MainSection.Contact></MainSection.Contact>
            </div>
        </>
    );
}

export default Contact;
