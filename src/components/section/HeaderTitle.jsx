import React from 'react';

const HeaderTitle = ({title,desciption,postion}) => {
    return (
        <div className={`flex items-center gap-12 ${postion==='right' ? 'justify-end text-right':'justify-start text-start'}`}>
            {postion !=='right' && <span className='h-16 w-2 bg-teal-500'></span>}
            <div>
                <div className='uppercase text-teal-300 text-4xl font-bold'>
                    {title}
                </div>
                <div className='text-gray-300 text-md' >{desciption}</div>
            </div>
            {postion==='right' && <span className='h-16 w-2 bg-teal-500'></span>}
        </div>
    );
}

export default HeaderTitle;
