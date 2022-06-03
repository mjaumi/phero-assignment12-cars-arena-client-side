import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';
import Loading from '../../Shared/Loading/Loading';

const ContactUs = () => {
    // integration of react hooks
    const [loading, setLoading] = useState(false);

    const handleQuerySubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const subject = event.target.subject.value;
        const query = event.target.query.value;

        const newQuery = {
            name,
            email,
            phone,
            subject,
            query
        }

        const { data } = await axios.post('https://shielded-mountain-18545.herokuapp.com/query', newQuery);

        if (data.acknowledged) {
            toast.success('Query Submission Successful!!!');
        } else {
            toast.error('Query Submission Successful!!!');
        }

        event.target.reset();
        setLoading(false);
    }

    // rendering contact us component here
    return (
        <section id='contact' className='py-40 bg-base-200'>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <div>
                    <h2 className='text-3xl md:text-4xl text-neutral font-bold mb-3'>Have Any Questions?</h2>
                    <p className='text-secondary'>Don't hesitate to ask any question to us. We are open minded and ready to answer your questions 24/7.</p>
                </div>
                {
                    loading ?
                        <div className='w-full h-[20vh] flex items-center justify-center'>
                            <Loading />
                        </div>
                        :
                        <div className='mt-10 w-[95%] md:w-[70%] mx-auto'>
                            <form onSubmit={handleQuerySubmit}>
                                <div className='flex flex-col md:flex-row'>
                                    <div className='form-control w-full'>
                                        <label className='label'>
                                            <span className="label-text after:content-['*'] after:text-primary">Your Name</span>
                                        </label>
                                        <input type='text' name='name' placeholder='Enter Your Name' className='input input-bordered input-secondary rounded-none w-full' required />
                                    </div>
                                    <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                        <label className='label'>
                                            <span className="label-text after:content-['*'] after:text-primary">Your Email</span>
                                        </label>
                                        <input type='email' name='email' placeholder='Enter Your Email' className='input input-bordered input-secondary rounded-none w-full' required />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row mt-5'>
                                    <div className='form-control w-full'>
                                        <label className='label'>
                                            <span className="label-text after:content-['*'] after:text-primary">Your Phone Number</span>
                                        </label>
                                        <input type='number' name='phone' placeholder='Enter Your Phone Number' className='input input-bordered input-secondary rounded-none w-full' required />
                                    </div>
                                    <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                        <label className='label'>
                                            <span className="label-text after:content-['*'] after:text-primary">Subject</span>
                                        </label>
                                        <input type='text' name='subject' placeholder='Enter Your Subject' className='input input-bordered input-secondary rounded-none w-full' required autoComplete='off' />
                                    </div>
                                </div>
                                <div className='form-control mt-5'>
                                    <label className='label'>
                                        <span className="label-text after:content-['*'] after:text-primary">Your Query</span>
                                    </label>
                                    <textarea name='query' className='textarea textarea-bordered textarea-secondary rounded-none h-24' placeholder='Type Your Query Here...' required autoComplete='off'></textarea>
                                </div>
                                <div className='mt-8 md:w-3/12 mx-auto'>
                                    <ArenaButton type={'submit'}>Submit Question</ArenaButton>
                                </div>
                            </form>
                        </div>
                }
            </div>
        </section >
    );
};

export default ContactUs;