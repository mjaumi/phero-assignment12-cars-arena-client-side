import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    // rendering dashboard component here
    return (
        <section className='pt-20'>
            <div className='drawer drawer-mobile h-fit'>
                <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
                <div className='drawer-content mt-10 bg-base-100'>
                    <Outlet />
                    <label htmlFor='dashboard-drawer' className='btn btn-primary drawer-button lg:hidden'>Open drawer</label>
                </div>
                <div className='drawer-side bg-base-300/50'>
                    <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
                    <ul className='menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content'>
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;