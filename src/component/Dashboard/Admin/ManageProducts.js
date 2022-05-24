import React from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'


import deleteP from '../svg/delete.svg'
import edit from '../svg/edit.svg'
const ManageProducts = () => {

    const [user] = useAuthState(auth);
    const { data, isLoading } = useQuery('adminAllProduct', () => axios.get(`http://localhost:5000/all-order?email=${user.email}`));

    if (isLoading) {
        return <Loading />
    }
    const allProducts = data?.data || [];
    return (
        <div class="overflow-x-auto p-6">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product, index) =>
                            <>
                                <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={product.image} className='w-8 md:w-10 rounded-full' alt="" /></td>
                                    <td>{product.name.slice(0, 20)}...</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <div className="card-actions justify-start mb-2">
                                            <div className='text-orange-500'><del>{product.price}</del></div>
                                            <div>{product.discount_price}</div>
                                            <div className='text-sm text-gray-500'>/pice</div>
                                        </div>
                                    </td>
                                    <td>{product.total_quantity} p</td>
                                    <td>{product.short_description.slice(0, 10)} ....</td>
                                    <td><button className='btn border-none bg-success btn-xs'><img src={edit} alt="" /></button></td>
                                    <td><button className='btn border-none bg-red-600 btn-xs'><img src={deleteP} alt="" /></button></td>
                                </tr>
                            </>)
                    }
                </tbody>

            </table>

        </div>
    );
};

export default ManageProducts;