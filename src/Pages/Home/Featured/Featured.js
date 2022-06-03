import React from 'react';
import tires from '../../../Assets/images/premium-tires.jpg';
import rims from '../../../Assets/images/premium-rims.jpg';
import headlight from '../../../Assets/images/premium-headlight.jpg';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';

const Featured = () => {

    // rendering featured component here
    return (
        <section id='featured' className='bg-base-200 py-40'>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h2 className='md:text-left text-4xl font-medium text-primary'>Featured Parts</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-16'>
                    <div className='relative overflow-hidden group cursor-pointer md:scale-90'>
                        <div>
                            <img src={tires} alt='CEO' />
                        </div>
                        <div className='z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-150px)] duration-500'>
                            <h4 className='font-bold text-2xl text-neutral'>CarsArena Premium Tires</h4>
                            <p className='text-primary text-xl my-3 font-bold'>$2500</p>
                            <ArenaButton>Buy Now</ArenaButton>
                        </div>
                        <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                        </div>
                    </div>
                    <div className='relative overflow-hidden group cursor-pointer md:scale-125'>
                        <div>
                            <img src={rims} alt='Marketing Officer' />
                        </div>
                        <div className='z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-150px)] duration-500'>
                            <h4 className='font-bold text-2xl text-neutral'>CarsArena Premium Rims</h4>
                            <p className='text-primary text-xl my-3 font-bold'>$2750</p>
                            <ArenaButton>Buy Now</ArenaButton>
                        </div>
                        <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                        </div>
                    </div>
                    <div className='relative overflow-hidden group cursor-pointer md:scale-90'>
                        <div>
                            <img src={headlight} alt='Engineer' />
                        </div>
                        <div className='z-20 px-5 py-3 absolute top-[calc(100%-2px)] border-t-2 left-0 border-t-primary w-full bg-base-300/60 group-hover:top-[calc(100%-150px)] duration-500'>
                            <h4 className='font-bold text-2xl text-neutral'>CarsArena Premium Headlights</h4>
                            <p className='text-primary text-xl my-3 font-bold'>$1950</p>
                            <ArenaButton>Buy Now</ArenaButton>
                        </div>
                        <div className='w-full h-full absolute z-10 top-0 left-0 backdrop-blur-0 group-hover:backdrop-blur-sm duration-500'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;