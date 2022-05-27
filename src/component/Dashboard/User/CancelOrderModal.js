import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify'

const CancelOrder = ({ cancelOrder: { setCancelOrder, cancelOrder, refetch } }) => {


    const cancelOrderHandle = async () => {
        const { data } = await axios.delete(`https://fathomless-thicket-10172.herokuapp.com/order/${cancelOrder}`, {

            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        });
        if (data?.deletedCount) {
            toast.success('successfully delete item');
            refetch()
            cancelOrder(null)
            refetch()
            setCancelOrder(null)
        }
        else {
            refetch()
            setCancelOrder(null)
            toast.error('Something is wrong')
        }


    }
    return (
        <div>

            <input type="checkbox" id="cancelOrder" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <h3 className="font-bold text-2xl text-red-500">Are You sure cancel this product</h3>
                    <div className='m-4'>
                        <button onClick={cancelOrderHandle} className='btn btn-error mr-2 text-white'>Confirm</button>
                        <label for="cancelOrder" className="btn">cancel</label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CancelOrder;