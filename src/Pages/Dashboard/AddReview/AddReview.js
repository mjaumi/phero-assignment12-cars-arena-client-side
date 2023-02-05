import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddReview = () => {
    // integration of react firebase hook
    const [user] = useAuthState(auth);

    const addReview = async (event) => {
        event.preventDefault();

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options).split(', ');

        const rating = parseInt(event.target.rating.value);

        if (rating > 0 && rating < 6) {
            const newReview = {
                userName: user.displayName,
                userImg: user.photoURL,
                review: event.target.review.value,
                millTime: Date.now(),
                date: `${today[1]}, ${today[2]}`,
                rating: rating
            }

            const { data } = await axios.post('https://cars-arena.onrender.com/review', newReview);

            if (data.acknowledged) {
                toast.success('Review Added Successfully!!!');
            } else {
                toast.error('Failed To Add Review!!!');
            }

        } else {
            toast.error('Rating Value Must Be Between 1 to 5');
        }

        event.target.reset();
    }

    // rendering add review component here
    return (
        <div>
            <PageTitle title={'Add A Review'} />
            <div className='w-[90%] mx-auto pb-10 min-h-screen'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>Add A Review</h3>
                <div className='mt-10'>
                    <div className='w-full md:w-3/5'>
                        <form onSubmit={addReview}>
                            <div className='form-control w-full mt-5 md:mt-0'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Your Ratings</span>
                                </label>
                                <input name='rating' type='number' placeholder='Enter Your Ratings' className='input input-bordered input-secondary rounded-none w-full' required />
                            </div>
                            <div className='form-control w-full mt-5'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Your Review</span>
                                </label>
                                <textarea name='review' className='textarea textarea-bordered textarea-secondary rounded-none h-24' placeholder='Type Your Review Here...' required></textarea>
                            </div>
                            <div className='mt-10 md:w-2/5 mx-auto'>
                                <ArenaButton type={'submit'}>Submit Review</ArenaButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;