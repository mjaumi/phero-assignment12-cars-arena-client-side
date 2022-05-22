import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import Rating from 'react-rating';

const Review = ({ reviewData }) => {
    // destructuring the props
    const { userName, userImg, review, rating } = reviewData;

    // rendering review card component here
    return (
        <div className='border border-accent px-6 py-8 grid grid-rows-arena-card'>
            <div className='flex items-center'>
                <div className='w-20 h-20 rounded-full overflow-hidden border-2 border-primary'>
                    <img src={userImg} alt={userName} />
                </div>
                <div className='ml-5 text-left'>
                    <h4 className='text-xl text-neutral font-semibold'>{userName}</h4>
                    <p className='mt-1'>
                        <Rating
                            className='opacity-70'
                            initialRating={rating}
                            emptySymbol={<StarIcon className='inline-block h-6 w-6' fill='none' stroke='#e51515' />}
                            fullSymbol={<StarIcon className='inline-block h-6 w-6' fill='#e51515' stroke='#e51515' />}
                            readonly />
                        <span className='inline-block ml-2 text-neutral'>{rating}<small className='text-primary'>/5.00</small></span>
                    </p>
                </div>
            </div>
            <div className='mt-5 w-[95%] mx-auto relative'>
                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <FontAwesomeIcon icon={faQuoteRight} className='w-44 h-44 text-primary opacity-25' />
                </span>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;