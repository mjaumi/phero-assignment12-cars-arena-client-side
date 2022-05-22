import React from 'react';

const SparePart = ({ part }) => {
    // destructuring the props
    const { name, img, price, minimumOrderQuantity, availableQuantity, warranty } = part;

    return (
        <div>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{price}</p>
                <p>{minimumOrderQuantity}</p>
                <p>{availableQuantity}</p>
                <p>{warranty}</p>
            </div>
            <div className='mt-2'>
                <button className='btn btn-accent'>Buy Now</button>
            </div>
        </div>
    );
};

export default SparePart;