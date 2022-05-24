import React from 'react';

const OrderRow = ({ order, index, getSelectedOrder, setShowCheckoutModal }) => {
    // destructuring the props
    const { _id, productName, orderedQuantity, totalPrice, status } = order;

    const handlePayButton = () => {
        setShowCheckoutModal(true);
        getSelectedOrder(_id);
    }

    // rendering order row component here
    return (
        <tr className='text-neutral'>
            <th className='bg-accent'>{index + 1}</th>
            <td className='bg-accent'>{productName}</td>
            <td className='bg-accent'>{orderedQuantity}</td>
            <td className='bg-accent'>$ {totalPrice}</td>
            <td className={`${status === 'unpaid' ? 'text-warning' : 'text-green-700'} font-semiBold bg-accent`}>{status === 'unpaid' ? 'Unpaid' : 'Paid'}</td>
            <td className='bg-accent'>
                {
                    status === 'unpaid' &&
                    <label htmlFor='checkout-modal' onClick={handlePayButton} className='btn btn-success btn-sm capitalize'>Pay</label>
                }
            </td>
            <td className='bg-accent'>
                {
                    status === 'unpaid' &&
                    <button className='btn btn-error btn-sm capitalize'>Delete</button>
                }
            </td>
        </tr >
    );
};

export default OrderRow;