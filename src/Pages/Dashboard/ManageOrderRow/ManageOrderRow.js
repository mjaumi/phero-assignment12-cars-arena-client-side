import React from 'react';

const ManageOrderRow = ({ order, index, setSelectedOrderId, setShowShipmentModal }) => {
    // destructuring the props
    const { _id, name, productName, orderedQuantity, totalPrice, status } = order;

    const handleShippedButton = () => {
        setShowShipmentModal(true);
        setSelectedOrderId(_id);
    }

    //rendering manage order row component here
    return (

        <tr className='text-neutral'>
            <th className='bg-accent'>{index + 1}</th>
            <td className='bg-accent'>{_id}</td>
            <td className='bg-accent'>{name}</td>
            <td className='bg-accent'>{productName}</td>
            <td className={`font-semiBold bg-accent`}>{orderedQuantity}</td>
            <td className='bg-accent'>$ {totalPrice}</td>
            <td className={`${status === 'unpaid' && 'text-warning'} ${status === 'shipped' && 'text-success'} bg-accent font-bold`}>{status === 'paid' ? 'pending' : status}</td>
            <td className='bg-accent'>
                {
                    status === 'paid' &&
                    <label onClick={handleShippedButton} htmlFor='shipment-modal' className='btn btn-success btn-sm capitalize'>Make Shipment</label >
                }
            </td>
        </tr >

    );
};

export default ManageOrderRow;