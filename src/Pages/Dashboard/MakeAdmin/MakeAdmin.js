import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import MakeAdminModal from '../MakeAdminModal/MakeAdminModal';
import UserRow from '../UserRow/UserRow';

const MakeAdmin = () => {
    // integration of react hooks
    const [showMakeAdminModal, setShowMakeAdminModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [userId, setUserId] = useState('');

    // integration of react query
    const { data: users, isLoading, refetch } = useQuery('users', () => axios.get('https://shielded-mountain-18545.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    if (isLoading || showLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
    }

    // rendering make admin component here
    return (
        <div>
            <PageTitle title={'Make Admin'} />
            <div className='w-[90%] mx-auto pb-10 min-h-screen'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>Make Admin</h3>
                <div className='overflow-x-auto mt-10'>
                    <table className='table w-full text-center rounded-none'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Id</th>
                                <th>User Email</th>
                                <th>User Phone Number</th>
                                <th>Role</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.data.map((user, index) => <UserRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    setShowMakeAdminModal={setShowMakeAdminModal}
                                    setUserId={setUserId}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                showMakeAdminModal &&
                <MakeAdminModal
                    userId={userId}
                    refetch={refetch}
                    setShowLoading={setShowLoading}
                    setShowMakeAdminModal={setShowMakeAdminModal}
                />
            }
        </div>
    );
};

export default MakeAdmin;