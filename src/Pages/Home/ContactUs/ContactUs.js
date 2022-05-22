import React from 'react';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';

const ContactUs = () => {

    // rendering contact us component here
    return (
        <section className='py-40 bg-base-200'>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <div>
                    <h2 className='text-3xl md:text-4xl text-neutral font-bold mb-3'>Have Any Questions?</h2>
                    <p className='text-secondary'>Don't hesitate to ask any question to us. We are open minded and ready to answer your questions 24/7.</p>
                </div>
                <div className='mt-10 w-[95%] md:w-[70%] mx-auto'>
                    <form >
                        <div className='flex flex-col md:flex-row'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Your Name</span>
                                </label>
                                <input type='text' placeholder='Enter Your Name' className='input input-bordered input-secondary rounded-none w-full' required autoComplete='off' />
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Your Email</span>
                                </label>
                                <input type='email' placeholder='Enter Your Email' className='input input-bordered input-secondary rounded-none w-full' required autoComplete='off' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mt-5'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Your Phone Number</span>
                                </label>
                                <input type='number' placeholder='Enter Your Phone Number' className='input input-bordered input-secondary rounded-none w-full' required autoComplete='off' />
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Subject</span>
                                </label>
                                <input type='text' placeholder='Enter Your Subject' className='input input-bordered input-secondary rounded-none w-full' required autoComplete='off' />
                            </div>
                        </div>
                        <div className='form-control mt-5'>
                            <label className='label'>
                                <span className="label-text after:content-['*'] after:text-primary">Your Query</span>
                            </label>
                            <textarea className='textarea textarea-bordered textarea-secondary rounded-none h-24' placeholder='Type Your Query Here...' required autoComplete='off'></textarea>
                        </div>
                        <div className='mt-8 md:w-3/12 mx-auto'>
                            <ArenaButton type={'submit'}>Submit Question</ArenaButton>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default ContactUs;