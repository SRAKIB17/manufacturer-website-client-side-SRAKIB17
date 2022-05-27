import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({ props: { deleteU, setDeleteU, refetch } }) => {

    const { _id } = deleteU;
    const makeAdminHandle = async () => {

        const { data } = await axios.delete(`https://fathomless-thicket-10172.herokuapp.com/user/${_id}`, {
            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        });
        console.log(data)

        if (data.deletedCount) {
            toast.success('Successfully delete user')

        }
        else {
            toast.error('Something is wrong')
        }
        setDeleteU(null)
        refetch()

    }
    return (
        <div>
            <div >
                <input type="checkbox" id="deleteModal" className="modal-toggle" />
                <div className="modal" style={{ zIndex: '20' }}>
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl">Are You sure?  Delete this user</h3>

                        <div className="modal-action">
                            <button onClick={makeAdminHandle} className='btn btn-success text-white'>Confirm</button>

                            <label for="deleteModal" className="btn">cancel</label>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default DeleteUserModal;