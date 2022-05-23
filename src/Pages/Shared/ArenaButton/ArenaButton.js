import React from 'react';

const ArenaButton = ({ clickHandler, type, children }) => {
    return (
        <button onClick={clickHandler} type={type} className='relative after:block after:absolute after:w-full after:h-[5%] after:bg-primary after:origin-bottom after:bottom-0 hover:after:h-full after:duration-[350ms] btn rounded-none btn-accent w-full capitalize text-lg font-light text-neutral'>
            <span className='absolute z-50'>{children}</span>
        </button>
    );
};

export default ArenaButton;