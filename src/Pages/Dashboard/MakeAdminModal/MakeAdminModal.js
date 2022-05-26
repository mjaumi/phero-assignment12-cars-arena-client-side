import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MakeAdminModal = ({ refetch, userId, setShowMakeAdminModal, setShowLoading }) => {
    // integration of react hooks
    const navigate = useNavigate();

    const handleMakeAdmin = async () => {
        setShowLoading(true);
        const url = `https://shielded-mountain-18545.herokuapp.com/user/${userId}`;
        const result = await axios.patch(url, {}, {
            method: 'PATCH',
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
            toast.success('User Made Admin Successfully!!!');
        } else {
            toast.error('Failed To Make The User Admin!!!');
        }
        setShowMakeAdminModal(false);
        refetch();
        setShowLoading(false);
    }

    // rendering make admin modal here
    return (
        <div>
            <input type='checkbox' id='make-admin-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle bg-base-300/50'>
                <div className='modal-box relative bg-base-100'>
                    <label htmlFor='make-admin-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-accent text-neutral hover:bg-base-200 hover:border-base-200'>✕</label>
                    <h3 className='font-bold text-lg'>Are You Sure?</h3>
                    <p className='py-4'>Are you sure you want make this user admin?</p>
                    <div className='modal-action'>
                        <label htmlFor='make-admin-modal' className='btn bg-red-700 rounded-none border-red-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                            <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
                            No
                        </label>
                        <button onClick={handleMakeAdmin} className='btn bg-green-700 rounded-none border-green-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                            <FontAwesomeIcon icon={faCheckCircle} className='mr-2' />
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminModal;