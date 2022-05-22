import React from 'react';

const AboutUs = () => {

    // rendering about us component here
    return (
        <section className='my-40 w-[95%] md:w-4/5 mx-auto'>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='bg-about-first-img h-[650px] w-[300px] mx-auto bg-contain bg-no-repeat'></div>
                    <div className='bg-about-last-img h-[650px] w-[300px] mx-auto bg-contain bg-no-repeat'></div>
                </div>
                <div className='mb-20 md:mb-0 md:ml-20 md:text-left w-[95%] mx-auto md:w-1/2 flex flex-col justify-center'>
                    <h2 className='font-thin text-4xl' >About Us</h2>
                    <h2 className='text-5xl font-semibold text-primary'>CarsArena</h2>
                    <p className='tracking-widest font-extralight'>The #1 Spare Parts Manufacturer In Bangladesh</p>
                    <p className='mt-20 text-secondary'>We <span className='font-semibold text-primary'>CarsArena</span>, are the oldest and the largest car spare parts manufacturer in Bangladesh. We have started our journey since <span className='font-semibold text-primary'>1990</span>. And from then till now, we are dominating the market. We have wide range of car spare parts which we are selling at a reasonable price. But we never ever compromise with quality. Our first and the foremost duty is to deliver quality products to our customers. You can check the review page to know how the customers are satisfied with our service. By selling only quality products, we are dominating the market and will dominate in the future in sha allah.</p>
                    <div className='mt-20'>
                        <h2 className='text-4xl text-primary font-semibold'>Albert Einstein</h2>
                        <p>CEO of CarsArena</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;