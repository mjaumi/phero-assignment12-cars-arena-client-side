import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArenaButton from '../ArenaButton/ArenaButton';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    // integration of react hooks
    const navigate = useNavigate();

    // navigating to home page if clicked the go to homepage button
    const handleGoBackToHomePage = () => {
        navigate('/');
    }

    // rendering page not found component here
    return (
        <section className='relative h-[90vh]'>
            <PageTitle title={'Page Not Found'} />
            <div className='absolute w-[90%] md:w-4/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-6xl md:text-8xl font-black text-primary'>404</h1>
                <h2 className='text-2xl md:text-4xl text-neutral font-semibold tracking-wider'>PAGE NOT FOUND</h2>
                <p className='my-5 text-sm md:text-lg'>The page you are looking for does not exist or has been removed.</p>
                <div className='md:w-3/5 mx-auto mt-10'>
                    <ArenaButton clickHandler={handleGoBackToHomePage}>Go Back To Home Page</ArenaButton>
                </div>
            </div>
        </section>
    );
};

export default NotFound;