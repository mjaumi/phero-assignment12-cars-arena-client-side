import React from 'react';

const ProductRow = ({ parts, index }) => {
    // destructuring the props
    const { _id, name, price, availableQuantity, minimumOrderQuantity } = parts;


    // rendering product row component here
    return (
        <tr className='text-neutral'>
            <th className='bg-accent'>{index + 1}</th>
            <td className='bg-accent'>{_id}</td>
            <td className='bg-accent'>{name}</td>
            <td className='bg-accent'>$ {price}</td>
            <td className={`font-semiBold bg-accent`}>{availableQuantity}</td>
            <td className={`bg-accent font-bold`}>{minimumOrderQuantity}</td>
            <td className='bg-accent'>
                {

                    <label htmlFor='order-delete-modal' className='btn btn-error btn-sm capitalize'>Delete</label >
                }
            </td>
        </tr >
    );
};

export default ProductRow;