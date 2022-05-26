import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    // integration of react hooks
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // loading user
    if (loading) {
        return (
            <div className='h-screen w-screen flex items-center justify-center'>
                <Loading />
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;