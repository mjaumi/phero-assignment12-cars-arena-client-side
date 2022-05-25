import React from 'react';

const Loading = () => {

    // rendering loading component here
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='spinner-grow inline-block w-8 h-8 bg-primary rounded-full opacity-0' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
                <div className='spinner-grow inline-block w-8 h-8 bg-primary rounded-full opacity-0 ml-8' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
                <div className='spinner-grow inline-block w-8 h-8 bg-primary rounded-full opacity-0 ml-8' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;