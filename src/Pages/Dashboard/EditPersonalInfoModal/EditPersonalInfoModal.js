import { faFloppyDisk, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const EditPersonalInfoModal = ({ refetch, user, setShowEditInfoModal }) => {
    // integration of react firebase hook
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    // integration of react hook form
    const { register, handleSubmit } = useForm();

    // handling updating user info here
    const handleUpdateUserInfo = async (data) => {
        if (data.profileImage[0]) {
            const image = data.profileImage[0];
            const imageFormData = new FormData();
            imageFormData.append('image', image);
            const imageUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_APIKEY}`;

            const result = await axios.post(imageUrl, imageFormData);

            if (result.status === 200) {
                await updateProfile({ photoURL: result.data.data.url });
                toast.success('Profile Updated Successfully!!!');
            }
        } else if (!data.education && !data.city && !data.phone && !data.linkedIn && !data.address) {
            setShowEditInfoModal(false);
            toast.error('Please, fill at least one field!!!');
        } else {
            const updatedUser = {
                education: data.education,
                city: data.city,
                phone: data.phone,
                linkedIn: data.linkedIn,
                address: data.address
            }

            const infoUpdateUrl = `http://localhost:5000/user?email=${user?.email}`;

            const result = await axios.patch(infoUpdateUrl, updatedUser);

            if (result.status === 200) {
                toast.success('Profile Updated Successfully!!!');
            }
        }

        refetch();
        setShowEditInfoModal(false);
    }

    if (updatingError) {
        toast.error('Failed to update your profile!!!');
    }

    if (updating) {

    }

    //rendering edit personal info modal here
    return (
        <div>
            <input type='checkbox' id='edit-info-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle bg-base-300/50'>
                <div className='modal-box relative bg-base-100 mt-20'>
                    <label htmlFor='edit-info-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-accent text-neutral hover:bg-base-200 hover:border-base-200'>✕</label>
                    <h3 className='font-bold text-lg'>Edit Your Information</h3>
                    <p className='py-4'>Fill up the form to update your information.</p>
                    <form onSubmit={handleSubmit(handleUpdateUserInfo)}>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text'>Upload Profile Image</span>
                            </label>
                            <input className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed px-3 py-1.5' type='file' id='formFile' {...register('profileImage')} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Education</span>
                            </label>
                            <input type='text' placeholder='Enter Your Education Info' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' {...register('education')} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>City/District</span>
                            </label>
                            <input type='text' placeholder='Enter Your City' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' {...register('city')} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Phone Number</span>
                            </label>
                            <input type='number' placeholder='Enter Your Phone Number' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' {...register('phone')} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Linkedin Profile</span>
                            </label>
                            <input type='text' placeholder='Enter Your Linkedin Profile URL' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' {...register('linkedIn')} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Full Address</span>
                            </label>
                            <textarea name='address' className='textarea textarea-bordered textarea-secondary rounded-none h-24 text-neutral read-only:cursor-not-allowed' placeholder='Enter Your Address' {...register('address')}></textarea>
                        </div>
                        <div className='modal-action'>
                            <label htmlFor='edit-info-modal' className='btn bg-red-700 rounded-none border-red-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                                <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
                                Cancel
                            </label>
                            <button type='submit' className='btn bg-green-700 rounded-none border-green-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                                <FontAwesomeIcon icon={faFloppyDisk} className='mr-2' />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPersonalInfoModal;