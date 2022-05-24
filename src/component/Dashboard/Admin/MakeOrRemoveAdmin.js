import axios from 'axios';
import React from 'react';

const MakeOrRemoveAdmin = ({ props: { makeAdmin, setMakeAdmin } }) => {

    const { method, u: { email, _id } } = makeAdmin;
    const makeAdminHandle = () => {
        if (method === 'add') {
            const { data } = axios.put(`http://localhost:5000/modify-user/${_id}`)
            console.log(data)
        }
        else if (method === 'remove') {
            console.log(5345)
        }
    }
    return (
        <div>
            <div >
                <input type="checkbox" id="makeAdmin" class="modal-toggle" />
                <div class="modal" style={{ zIndex: '20' }}>
                    <div class="modal-box">
                        <h3 class="font-bold text-2xl">Are You sure?  {method === 'add' ? 'Permission' : 'Remove'} all access</h3>

                        <div class="modal-action">
                            <button onClick={makeAdminHandle} className='btn btn-success text-white'>Confirm</button>

                            <label for="makeAdmin" class="btn">cancel</label>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MakeOrRemoveAdmin;