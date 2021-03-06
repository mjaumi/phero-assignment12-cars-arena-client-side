import { faUserAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useUserInfo from '../../../hooks/useUserInfo';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import EditPersonalInfoModal from '../EditPersonalInfoModal/EditPersonalInfoModal';

const MyProfile = () => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // integration of react hooks
    const navigate = useNavigate();

    // integration of react hooks
    const [showEditInfoModal, setShowEditInfoModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    // integration of custom hooks
    const [userInfo, isLoading, refetch, error] = useUserInfo(user?.email);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // checking the JWT
    useEffect(() => {
        if (error) {
            if (error.response.status === 403) {
                toast.error('Forbidden Access. Please, Login again!!!');

            } else if (error.response.status === 401) {
                toast.error('Unauthorized Access. Please, Login again!!!');
            }

            signOut(auth);
            navigate('/');
        }
    }, [error, navigate]);

    if (isLoading || showLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
    }

    // rendering my profile component here
    return (
        <div>
            <PageTitle title={'My Profile'} />
            <div className='w-[90%] mx-auto pb-10'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>My Profile</h3>
                <div className='mt-10 flex flex-col md:flex-row items-center'>
                    <div className='h-32 w-32 rounded-full overflow-hidden border-2 border-primary'>
                        {
                            user?.photoURL ?
                                <img className='w-full' src={user.photoURL} alt={user.displayName} />
                                :
                                <div className='h-full bg-accent'>
                                    <FontAwesomeIcon icon={faUserAlt} className='mt-2 h-full' />
                                </div>
                        }
                    </div>
                    <div className='mt-8 md:mt-0 md:ml-8 md:text-left'>
                        <h4 className='text-2xl md:text-3xl text-primary'>{user?.displayName}</h4>
                        <h4 className='text-sm md:text-base text-secondary'>{user?.email}</h4>
                    </div>
                </div>
                <div className='w-full md:w-3/5 text-left mt-10'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-xl md:text-3xl text-neutral font-semibold'>Additional Information</h4>
                        <label onClick={() => setShowEditInfoModal(true)} htmlFor='edit-info-modal' className='text-secondary text-lg font-semibold hover:opacity-60 duration-300'>
                            <FontAwesomeIcon icon={faEdit} className='mr-2' />
                            Edit
                        </label>
                    </div>
                    <div className='mt-5 text-center md:text-left'>
                        <div>
                            <span className='text-sm'>Education</span>
                            <p className='text-secondary mt-2 font-medium'>{userInfo.data.education ? userInfo.data.education : 'Not Available Yet'}</p>
                        </div>
                        <div className='mt-5'>
                            <span className='text-sm'>City/District</span>
                            <p className='text-secondary mt-2 font-medium'>{userInfo.data.city ? userInfo.data.city : 'Not Available Yet'}</p>
                        </div>
                        <div className='mt-5'>
                            <span className='text-sm'>Phone Number</span>
                            <p className='text-secondary mt-2 font-medium'>{userInfo.data.phone ? userInfo.data.phone : 'Not Available Yet'}</p>
                        </div>
                        <div className='mt-5'>
                            <span className='text-sm'>Linkedin Profile</span>
                            <p className='text-secondary mt-2 font-medium'>{userInfo.data.linkedIn ? userInfo.data.linkedIn : 'Not Available Yet'}</p>
                        </div>
                        <div className='mt-5'>
                            <span className='text-sm'>Full Address</span>
                            <p className='text-secondary mt-2 font-medium'>{userInfo.data.address ? userInfo.data.address : 'Not Available Yet'}</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                showEditInfoModal && <EditPersonalInfoModal
                    refetch={refetch}
                    user={user}
                    userInfo={userInfo.data}
                    setShowEditInfoModal={setShowEditInfoModal}
                    setShowLoading={setShowLoading}
                />
            }
        </div>
    );
};

export default MyProfile;