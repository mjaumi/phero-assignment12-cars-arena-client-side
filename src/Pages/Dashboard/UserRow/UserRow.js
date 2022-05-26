import React from 'react';

const UserRow = ({ user, index, setShowMakeAdminModal, setUserId }) => {
    // destructuring the props
    const { _id, email, phone, role } = user;

    const handleMakeAdminButton = () => {
        setShowMakeAdminModal(true);
        setUserId(_id);
    }

    // rendering user row component here
    return (
        <tr className='text-neutral'>
            <th className='bg-accent'>{index + 1}</th>
            <td className='bg-accent'>{_id}</td>
            <td className='bg-accent'>{email}</td>
            <td className={`font-semiBold bg-accent`}>{phone ? phone : '-'}</td>
            <td className={`bg-accent font-bold`}>{role}</td>
            <td className='bg-accent'>
                {
                    role === 'user' ?
                        <label onClick={handleMakeAdminButton} htmlFor='make-admin-modal' className='btn btn-success btn-sm capitalize'>Make Admin</label >
                        :
                        '-'
                }
            </td>
        </tr >
    );
};

export default UserRow;