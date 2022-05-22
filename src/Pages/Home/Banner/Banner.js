import React from 'react';

const Banner = () => {

    // rendering banner component here
    return (
        <div className='h-screen bg-banner-img bg-blend-multiply bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center'>
            <div className='text-neutral'>
                <h2 className='w-full text-5xl md:text-8xl font-thin md:tracking-[30px] animate-bottom-top-fade-in'>Welcome To <br /> <span className='font-medium mt-5 block'>Cars Arena</span></h2>
                <p className='mt-12 md:mt-10 tracking-widest w-[90%] mx-auto text-sm md:text-lg opacity-0 animate-fade-in'>The Largest Car Spear Parts Manufacturer In Bangladesh</p>
            </div>
        </div>
    );
};

export default Banner;