import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ order, setShowOrderDeleteModal, refetch }) => {

    // deleting the order here
    const deleteOrder = async () => {
        const url = `https://shielded-mountain-18545.herokuapp.com/order/${order._id}`;
        const { data } = await axios.delete(url);

        if (data.acknowledged) {
            toast.success('Order Deleted Successfully!!!');
        } else {
            toast.error('Failed To Delete The Order');
        }
        setShowOrderDeleteModal(false);
        refetch();
    }

    // rendering order delete modal here
    return (
        <div>
            <input type='checkbox' id='order-delete-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle bg-base-300/50'>
                <div className='modal-box relative bg-base-100'>
                    <label htmlFor='order-delete-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-accent text-neutral hover:bg-base-200 hover:border-base-200'>✕</label>
                    <h3 className='font-bold text-lg'>Are You Sure?</h3>
                    <p className='py-4'>Are you sure you want to delete this order?</p>
                    <div className='modal-action'>
                        <label htmlFor='order-delete-modal' className='btn bg-red-700 rounded-none border-red-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                            <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
                            No
                        </label>
                        <button onClick={deleteOrder} className='btn bg-green-700 rounded-none border-green-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                            <FontAwesomeIcon icon={faCheckCircle} className='mr-2' />
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteModal;