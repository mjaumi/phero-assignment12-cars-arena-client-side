import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';

const SparePart = ({ part }) => {
    // destructuring the props
    const { _id, name, img, price, minimumOrderQuantity, availableQuantity, warranty } = part;

    // integration of react hooks
    const navigate = useNavigate();

    const handleGotoPurchasePage = (id) => {

        navigate(`/purchase/${id}`);
    }

    // rendering spare part card component here
    return (
        <div className='px-6 py-8 border border-accent grid grid-rows-arena-parts-card'>
            <div className='w-[90%] mx-auto'>
                <img src={img} alt={name} />
            </div>
            <div className='grid grid-rows-arena-parts-card-inner'>
                <div className='mt-5'>
                    <h4 className='text-4xl font-semibold text-neutral'>{name}</h4>
                </div>
                <div className='mt-4'>
                    <p className='mt-2'><span className='text-lg font-extralight'>Minimum Order: </span><span className='text-neutral text-lg font-semibold'>{minimumOrderQuantity}</span> <small className='font-extralight'>Units</small></p>
                    <p className='mt-2'><span className='text-lg font-extralight'>Available: </span><span className='text-neutral text-lg font-semibold'>{availableQuantity}</span> <small className='font-extralight'>Units</small></p>
                    <p className='mt-2'><span className='text-lg font-extralight'>Warranty: </span><span className='text-neutral text-lg font-semibold'>{warranty}</span> <small className='font-extralight'>Years</small></p>
                </div>
                <div className='my-4'>
                    <p><span className='text-primary text-3xl font-semibold'>৳{price}</span> <small className='font-extralight'>Per Unit</small></p>
                </div>
                <div className='mt-10 w-3/4 mx-auto'>
                    <ArenaButton clickHandler={() => handleGotoPurchasePage(_id)} type={'button'}>Buy Now</ArenaButton>
                </div>
            </div>
        </div>
    );
};

export default SparePart;