import React from 'react';

const HeaderTitle = ({title,desciption,postion}) => {
    return (
        <div className={`flex items-center md:gap-12 gap-11 px-4 md:px-0 ${postion==='right' ? 'justify-end text-right':'justify-start text-start'}`}>
            {postion !=='right' && <span className='md:h-16 h-10 md:w-2 w-1 bg-teal-500'></span>}
            <div>
                <div className='uppercase text-teal-300 md:text-4xl text-lg font-bold'>
                    {title}
                </div>
                <div className='text-gray-300 text-sm md:text-md' >{desciption}</div>
            </div>
            {postion==='right' && <span className='md:h-16 h-10 md:w-2 w-1 bg-teal-500'></span>}
        </div>
    );
}

export default HeaderTitle;
