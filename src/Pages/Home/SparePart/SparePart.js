import React from 'react';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';

const SparePart = ({ part }) => {
    // destructuring the props
    const { name, img, price, minimumOrderQuantity, availableQuantity, warranty } = part;

    return (
        <div className='px-6 py-8 border border-accent'>
            <div className='w-[90%] mx-auto'>
                <img src={img} alt={name} />
            </div>
            <div className='mt-5'>
                <h4 className='text-4xl font-semibold text-neutral'>{name}</h4>
                <div className='mt-4'>
                    <p className='mt-2'><span className='text-lg font-extralight'>Minimum Order: </span><span className='text-neutral text-lg font-semibold'>{minimumOrderQuantity}</span> <small className='font-extralight'>Units</small></p>
                    <p className='mt-2'><span className='text-lg font-extralight'>Available: </span><span className='text-neutral text-lg font-semibold'>{availableQuantity}</span> <small className='font-extralight'>Units</small></p>
                    <p className='mt-2'><span className='text-lg font-extralight'>Warranty: </span><span className='text-neutral text-lg font-semibold'>{warranty}</span> <small className='font-extralight'>Years</small></p>
                </div>
            </div>
            <div className='my-4'>
                <p><span className='text-primary text-3xl font-semibold'>৳{price}</span> <small className='font-extralight'>Per Unit</small></p>
            </div>
            <div className='mt-10 w-3/4 mx-auto'>
                <ArenaButton>Buy Now</ArenaButton>
            </div>
        </div>
    );
};

export default SparePart;