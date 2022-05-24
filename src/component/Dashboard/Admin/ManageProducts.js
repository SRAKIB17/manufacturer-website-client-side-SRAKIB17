import React, { useState } from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'
import ShowAllProduct from './ShowAllProduct';
import EditProductModal from './EditProductModal';



const ManageProducts = () => {
    const [edit, setEdit] = useState(null)
    const [deleteP, setDeleteP] = useState(null)
    const [user] = useAuthState(auth);
    const { data, isLoading } = useQuery('adminAllProduct', () => axios.get(`http://localhost:5000/all-product?email=${user.email}`));

    

    if (isLoading) {
        return <Loading />
    }
    const allProducts = data?.data || [];
    
   
    const deleteHandle = (id) =>{

    }
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
                                <ShowAllProduct setEdit={setEdit} product={product} index={index} key={product._id}/>
                            </>)
                    }
                </tbody>

            </table>
            {
                edit && <EditProductModal key={edit} setEdit={{setEdit, edit}}/>
            }
        </div>
    );
};

export default ManageProducts;