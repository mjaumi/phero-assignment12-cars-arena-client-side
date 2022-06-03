import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';

const Reviews = () => {
    // integration of react hooks
    const [reviews, setReviews] = useState([]);

    // getting all the reviews from database
    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axios.get('https://shielded-mountain-18545.herokuapp.com/reviews');
            setReviews(data);
        }
        getReviews();
    }, []);

    // rendering review components here
    return (
        <section id='reviews' className='py-40 w-[95%] md:w-4/5 mx-auto'>
            <div className='flex justify-between'>
                <div className='hidden md:block'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='w-32 h-32 text-primary opacity-40' />
                </div>
                <div>
                    <h2 className='text-3xl md:text-4xl text-neutral font-bold mb-3'>What Our Customers Are Saying?</h2>
                    <p className='text-secondary'>Don't take our words. see what our customers are saying about us & make your own decision.</p>
                </div>
                <div className='hidden md:block'>
                    <FontAwesomeIcon icon={faQuoteRight} className='w-32 h-32 text-primary opacity-40' />
                </div>
            </div>
            {
                reviews.length === 0 ?
                    <div className='h-[20vh] flex justify-center items-center'>
                        <Loading />
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                reviewData={review}
                            />)
                        }
                    </div>
            }
        </section>
    );
};

export default Reviews;