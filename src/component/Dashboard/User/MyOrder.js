import React, { useState } from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'
import MyOrderShow from './MyOrderShow';
import { signOut } from 'firebase/auth';
import CancelOrder from './CancelOrderModal';

const MyOrder = () => {
    const [user] = useAuthState(auth)

    // for cancel 
    const [cancelOrder, setCancelOrder] = useState(null)
    const { data, isLoading, error, refetch } = useQuery('MyOrder', () => axios.get(`http://localhost:5000/order?email=${user.email}`, {

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
    const myProduct = data?.data || [];


    return (
        <div class="overflow-x-auto p-6">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product Name</th>
                        <th>CATEGORY</th>
                        <th>Total PRICE</th>
                        <th>Address</th>
                        <th>Paid</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myProduct.map((order, index) => <MyOrderShow cancelOrder={setCancelOrder} order={order} index={index} key={order._id} />)
                    }
                </tbody>

            </table>
            <div>
                {
                    cancelOrder && <CancelOrder cancelOrder={{setCancelOrder,cancelOrder, refetch}}/>
                }
            </div>
        </div>

    );
};

export default MyOrder;