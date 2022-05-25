import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const userId = user.email;

    const { data, isLoading, error } = useQuery('checkUser', () => axios.get(`http://localhost:5000/verify-user`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                <div className='flex flex-col items-center'>
                    <div class="avatar">
                        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src='https://api.lorem.space/image/face?hash=3174' />
                        </div>
                    </div>
                    <div className='p-4'>
                        <button className='btn btn-secondary btn-xs' onClick={() => alert('this feature update soon')}>Update Profile</button>
                    </div>
                </div>
                <div className='p-4 text-center'>
                    <div>
                        <table class="table table-zebra ">

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
                                    <th>Phone: </th>
                                    <td>{user.phoneNumber}</td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;