import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import MakeOrRemoveAdmin from './MakeOrRemoveAdmin';
import deleteP from '../svg/delete.svg'
import DeleteUserModal from './DeleteUserModal';
import profile from '../../../image/profile/profile.svg'
import { signOut } from 'firebase/auth';

const MakeAdmin = () => {

    const [makeAdmin, setMakeAdmin] = useState(null);
    const [deleteU, setDeleteU] = useState(null)
    const [user] = useAuthState(auth)
    const { data, isLoading, refetch, error } = useQuery('newProduct', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/user?email=${user?.email}`,
        {
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
    const users = data?.data || [];


    return (
        <div className="overflow-x-auto p-6">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>Access</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, index) =>
                            <>
                                <tr key={u._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img src={u.img ? u.img : profile} className='w-8 md:w-10 rounded-full' alt="" />
                                    </td>
                                    <td>{u.name}...</td>
                                    <td>{u.email}</td>
                                    <td>
                                        {
                                            u?.roll === 'admin' ?
                                                <>
                                                    <label
                                                        onClick={() => setMakeAdmin({ u: u, method: 'remove' })}
                                                        for="makeAdmin"

                                                        className='btn-secondary btn btn-xs text-white'>
                                                        Remove form Admin
                                                    </label>
                                                </> :
                                                <>
                                                    <label
                                                        onClick={() => setMakeAdmin({ u: u, method: 'add' })}
                                                        for="makeAdmin"

                                                        className='btn-secondary btn btn-xs text-white'>
                                                        Make Admin
                                                    </label>
                                                </>
                                        }
                                    </td>
                                    <td>
                                        <label
                                            for="deleteModal"
                                            onClick={() => (setDeleteU(u))}

                                            className='btn border-none bg-red-600 btn-xs'>
                                            <img src={deleteP} alt="" />
                                        </label>
                                    </td>
                                </tr>
                            </>)
                    }
                </tbody>

            </table>
            <div>
                {
                    makeAdmin && <MakeOrRemoveAdmin props={{ makeAdmin, setMakeAdmin, refetch }} />
                }
                {
                    deleteU && <DeleteUserModal props={{ deleteU, setDeleteU, refetch }} />
                }
            </div>
        </div>
    );
};

export default MakeAdmin;