import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const DeleteProductModal = ({ part, refetch, setShowLoading, setShowProductDeleteModal }) => {
    // integration of react hooks
    const navigate = useNavigate();

    // deleting the order here
    const deletePart = async () => {
        setShowLoading(true);
        const url = `https://shielded-mountain-18545.herokuapp.com/part/${part._id}`;
        const result = await axios.delete(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

        if (result.status === 403) {
            toast.error('Forbidden Access. Please, Login again!!!');
            signOut(auth);
            navigate('/');

        } else if (result.status === 401) {
            toast.error('Unauthorized Access. Please, Login again!!!');
            signOut(auth);
            navigate('/');
        }

        if (result.status === 200) {
            toast.success('Product Deleted Successfully!!!');
        } else {
            toast.error('Failed To Delete The Product!!!');
        }
        setShowProductDeleteModal(false);
        refetch();
        setShowLoading(false);
    }

    // rendering delete product modal here
    return (
        <div>
            <input type='checkbox' id='product-delete-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle bg-base-300/50'>
                <div className='modal-box relative bg-base-100'>
                    <label htmlFor='product-delete-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-accent text-neutral hover:bg-base-200 hover:border-base-200'>✕</label>
                    <h3 className='font-bold text-lg'>Are You Sure?</h3>
                    <p className='py-4'>Are you sure you want to delete this product?</p>
                    <div className='modal-action'>
                        <label htmlFor='product-delete-modal' className='btn bg-red-700 rounded-none border-red-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                            <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
                            No
                        </label>
                        <button onClick={deletePart} className='btn bg-green-700 rounded-none border-green-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                            <FontAwesomeIcon icon={faCheckCircle} className='mr-2' />
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;