import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUserInfo from '../../../hooks/useUserInfo';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    // integration of react firebase hooks
    const [user, loading] = useAuthState(auth);

    // integration of custom hooks
    const [userInfo, isLoading] = useUserInfo(user?.email);

    if (loading || isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
    }

    // rendering dashboard component here
    return (
        <section className='pt-20 overflow-hidden'>
            <div className='drawer drawer-mobile h-fit'>
                <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
                <div className='drawer-content pt-10 bg-base-100'>
                    <Outlet />
                    <label htmlFor='dashboard-drawer' className='btn btn-primary drawer-button lg:hidden'>Open drawer</label>
                </div>
                <div className='drawer-side bg-base-300/50'>
                    <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
                    <ul className='menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content'>
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            userInfo.data.role === 'user' &&
                            <>
                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                            </>
                        }
                        {
                            userInfo.data.role === 'admin' &&
                            <>
                                <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/mangeOrders'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;