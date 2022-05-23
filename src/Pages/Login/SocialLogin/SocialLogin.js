import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    // integration of react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // integration of react hooks
    const navigate = useNavigate();

    // event handler for log in with google
    const handleLoginWithGoogle = async () => {
        await signInWithGoogle();

        if (!error) {
            toast.success('Log In Successful!!!');
        }
    }

    if (user) {
        navigate('/');
    }

    if (loading) {

    }

    // rendering social login component here
    return (
        <div>
            <div className='divider mt-8 mb-10'>OR</div>
            <button onClick={handleLoginWithGoogle} className='btn btn-outline btn-secondary w-full rounded-none capitalize text-lg font-light'>
                <FontAwesomeIcon icon={faGoogle} className='mr-2' />
                Log In With Google
            </button>
            <p className='mt-2 text-warning text-sm'>{error && error.message}</p>
        </div>
    );
};

export default SocialLogin;