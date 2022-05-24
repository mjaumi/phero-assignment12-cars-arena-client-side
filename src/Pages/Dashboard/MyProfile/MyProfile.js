import { faUserAlt, faEdit, faTimesCircle, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const MyProfile = () => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // integration of react hooks
    const [editInfo, setEditInfo] = useState(false);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering my profile component here
    return (
        <div>
            <PageTitle title={'My Profile'} />
            <div className='w-[90%] mx-auto pb-10'>
                <h3 className='text-4xl text-left font-semibold text-primary'>My Profile</h3>
                <div className='mt-10 flex items-center'>
                    <div className='h-32 w-32 rounded-full overflow-hidden border-2 border-primary'>
                        {
                            user?.photoURL ?
                                <img className='w-full' src={user.photoURL} alt={user.displayName} />
                                :
                                <div className='h-full bg-accent'>
                                    <FontAwesomeIcon icon={faUserAlt} className='mt-2 h-[90%]' />
                                </div>
                        }
                    </div>
                    <div className='ml-8 text-left'>
                        <h4 className='text-3xl text-primary'>{user?.displayName}</h4>
                        <h4 className='text-secondary'>{user?.email}</h4>
                    </div>
                </div>
                <div className='w-3/5 mx-auto text-left mt-10 flex items-center justify-between'>
                    <h4 className='text-3xl text-neutral font-semibold'>Additional Information</h4>
                    <button onClick={() => setEditInfo(!editInfo)} className='text-secondary text-lg font-semibold hover:opacity-60 duration-300'>
                        <FontAwesomeIcon icon={faEdit} className='mr-2' />
                        Edit
                    </button>
                </div>
                <div className='w-3/5 mx-auto mt-5'>
                    <form>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text'>Education</span>
                            </label>
                            <input type='text' placeholder='Not Available Yet' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' readOnly={!editInfo} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>City/District</span>
                            </label>
                            <input type='text' placeholder='Not Available Yet' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' readOnly={!editInfo} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Phone Number</span>
                            </label>
                            <input type='number' placeholder='Not Available Yet' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' readOnly={!editInfo} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Linkedin Profile</span>
                            </label>
                            <input type='text' placeholder='Not Available Yet' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' readOnly={!editInfo} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Full Address</span>
                            </label>
                            <textarea className='textarea textarea-bordered textarea-secondary rounded-none h-24 text-neutral read-only:cursor-not-allowed' placeholder='Not Available Yet' readOnly={!editInfo}></textarea>
                        </div>
                        {
                            editInfo &&
                            <div className='my-5 flex justify-end'>
                                <button className='btn bg-red-700 rounded-none border-red-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                                    <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
                                    Cancel
                                </button>
                                <button type='submit' className='btn bg-green-700 rounded-none border-green-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium ml-5'>
                                    <FontAwesomeIcon icon={faFloppyDisk} className='mr-2' />
                                    Save
                                </button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;