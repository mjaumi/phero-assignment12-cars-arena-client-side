import React from 'react';
import ceo from '../../../Assets/images/ceo.jpg';
import marketing from '../../../Assets/images/marketing.jpg';
import engineer from '../../../Assets/images/engineer.jpg';
import QA from '../../../Assets/images/QA.jpg';

const OurTeam = () => {

    // rendering our team component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto py-40'>
            <div>
                <h2 className='text-3xl md:text-4xl text-neutral font-bold mb-3'>Meet With Our Professionals</h2>
                <p className='text-secondary'>We have the most proactive team in the world to help you out in every situation.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-20 mt-16'>
                <div className='relative overflow-hidden group cursor-pointer'>
                    <div>
                        <img src={ceo} alt='CEO' />
                    </div>
                    <div className='text-left z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-104px)] duration-500'>
                        <h4 className='font-bold text-2xl text-primary'>Gary Simons</h4>
                        <p className='text-neutral'>Chief Executive Officer</p>
                        <p className='text-secondary'><small>CarsArena</small></p>
                    </div>
                    <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                    </div>
                </div>
                <div className='relative overflow-hidden group cursor-pointer'>
                    <div>
                        <img src={marketing} alt='Marketing Officer' />
                    </div>
                    <div className='text-left z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-104px)] duration-500'>
                        <h4 className='font-bold text-2xl text-primary'>Emily Madison</h4>
                        <p className='text-neutral'>Chief Marketing Officer</p>
                        <p className='text-secondary'><small>CarsArena</small></p>
                    </div>
                    <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                    </div>
                </div>
                <div className='relative overflow-hidden group cursor-pointer'>
                    <div>
                        <img src={engineer} alt='Engineer' />
                    </div>
                    <div className='text-left z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-104px)] duration-500'>
                        <h4 className='font-bold text-2xl text-primary'>Rovman Powell</h4>
                        <p className='text-neutral'>Chief Mechanical Engineer</p>
                        <p className='text-secondary'><small>CarsArena</small></p>
                    </div>
                    <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                    </div>
                </div>
                <div className='relative overflow-hidden group cursor-pointer'>
                    <div>
                        <img src={QA} alt='QA' />
                    </div>
                    <div className='text-left z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-104px)] duration-500'>
                        <h4 className='font-bold text-2xl text-primary'>Alex Cary</h4>
                        <p className='text-neutral'>Chief Quality Assurance Officer</p>
                        <p className='text-secondary'><small>CarsArena</small></p>
                    </div>
                    <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;