import React from 'react';

const OrderRow = ({ order, index, getSelectedOrder, setShowCheckoutModal, setShowOrderDeleteModal }) => {
    // destructuring the props
    const { _id, productName, orderedQuantity, totalPrice, status, tId } = order;

    // event handler for pay button
    const handlePayButton = () => {
        setShowCheckoutModal(true);
        getSelectedOrder(_id);
    }

    // event handler for delete button
    const handleDeleteButton = () => {
        setShowOrderDeleteModal(true);
        getSelectedOrder(_id);
    }

    // rendering order row component here
    return (
        <tr className='text-neutral'>
            <th className='bg-accent'>{index + 1}</th>
            <td className='bg-accent'>{productName}</td>
            <td className='bg-accent'>{orderedQuantity}</td>
            <td className='bg-accent'>$ {totalPrice}</td>
            <td className={`${status === 'unpaid' ? 'text-warning' : 'text-green-700'} font-semiBold bg-accent`}>{status === 'unpaid' && 'Unpaid'} {status === 'paid' && 'Paid'}{status === 'shipped' && 'Shipped'}</td>
            <td className={`bg-accent ${tId ? 'text-green-700' : 'text-neutral'}  font-bold`}>{tId ? tId : '-'}</td>
            <td className='bg-accent'>
                {
                    status === 'unpaid' &&
                    <label htmlFor='checkout-modal' onClick={handlePayButton} className='btn btn-success btn-sm capitalize'>Pay</label>
                }
            </td>
            <td className='bg-accent'>
                {
                    status === 'unpaid' &&
                    <label onClick={handleDeleteButton} htmlFor='order-delete-modal' className='btn btn-error btn-sm capitalize'>Delete</label >
                }
            </td>
        </tr >
    );
};

export default OrderRow;