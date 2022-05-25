import React from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'

import OrderShow from './OrderShow';
import { signOut } from 'firebase/auth';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading,error } = useQuery('adminAllOrder', () => axios.get(`http://localhost:5000/all-order?email=${user.email}`, {
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
    const allOrder = data?.data || [];
    console.log(allOrder)

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
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map((order, index) => <OrderShow order={order} index={index} key={order._id} />)
                    }
                </tbody>

            </table>

        </div>

    );
};



export default ManageAllOrders;
