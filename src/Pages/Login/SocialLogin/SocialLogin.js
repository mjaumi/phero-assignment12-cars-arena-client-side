import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
    // integration of react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // integration of react hooks
    const navigate = useNavigate();

    // event handler for log in with google
    const handleLoginWithGoogle = async () => {
        await signInWithGoogle();
    }

    // creating new user credentials in the database
    useEffect(() => {
        const createNewUserCredentials = async () => {
            if (user) {
                if (user.user.metadata.creationTime === user.user.metadata.lastSignInTime) {

                    const newUser = {
                        email: user.user.email,
                        role: 'user',
                        education: '',
                        phone: '',
                        city: '',
                        linkedIn: '',
                        address: ''
                    }

                    await axios.post('https://shielded-mountain-18545.herokuapp.com/user', newUser);
                }

                toast.success('Log In Successful!!!');
                navigate('/');
            }
        }
        createNewUserCredentials();
    }, [navigate, user]);

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