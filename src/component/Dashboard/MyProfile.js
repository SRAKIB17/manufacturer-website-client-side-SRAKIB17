import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

import profilePic from '../../image/profile/headerProfile.svg'
import UpdateForm from './UpdateProfile/UpdateForm';
import useCheckAdmin from '../hooks/useCheckAdmin';

const MyProfile = () => {
    const { admin } = useCheckAdmin();

    const [user] = useAuthState(auth)

    const [updateProfile, setUpdateProfile] = useState(null)

    const { data, isLoading, error, refetch } = useQuery('checkUser', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/verify-user`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    if (isLoading) {
        return <Loading />
    }

    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>

                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {
                                user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={profilePic} alt="" />
                            }

                        </div>
                    </div>
                    <div className='p-4'>
                        <button className='btn btn-secondary btn-xs' onClick={() => setUpdateProfile(true)}>Update Profile</button>
                    </div>
                </div>
                <div className='p-4 text-center'>
                    <div>
                        <table className="table table-zebra ">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>{user.displayName}</td>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>Email:</th>
                                    <td>{user.email}</td>

                                </tr>
                                <tr>
                                    <th>Roll: </th>
                                    <td>{admin?.admin ? 'Admin' : 'User'}</td>


                                </tr>
                                <tr>
                                    <th>Phone: </th>
                                    <td>{user.phoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {/* for update profile  */}
            {
                updateProfile && <UpdateForm props={{ setUpdateProfile, refetch }} />
            }
        </div>
    );
};

export default MyProfile;