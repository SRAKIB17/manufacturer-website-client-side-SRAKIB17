import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const MakeOrRemoveAdmin = ({ props: { makeAdmin, setMakeAdmin, refetch } }) => {

    const { method, u: { email, _id } } = makeAdmin;
    console.log(_id)
    const makeAdminHandle = async () => {
        if (method === 'add') {
            const { data } = await axios.put(`https://fathomless-thicket-10172.herokuapp.com/modify-user/${_id}?method=add`, {}, {
                headers: {
                    'authorize': `token ${localStorage.getItem('tokenVerify')}`
                }
            })
            if (data.modifiedCount) {
                toast.success('Successfully make admin')
            }
        }
        else if (method === 'remove') {
            const { data } = await axios.put(`https://fathomless-thicket-10172.herokuapp.com/modify-user/${_id}?method=remove`, {}, {
                headers: {
                    'authorize': `token ${localStorage.getItem('tokenVerify')}`
                }
            })
            if (data.modifiedCount) {
                toast.success('Successfully remove admin')
            }
        }
        setMakeAdmin(null)
        refetch()
    }
    return (
        <div>
            <div >
                <input type="checkbox" id="makeAdmin" className="modal-toggle" />
                <div className="modal" style={{ zIndex: '20' }}>
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl">Are You sure?  {method === 'add' ? 'Permission' : 'Remove'} all access</h3>

                        <div className="modal-action">
                            <button onClick={makeAdminHandle} className='btn btn-success text-white'>Confirm</button>

                            <label for="makeAdmin" className="btn">cancel</label>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MakeOrRemoveAdmin;