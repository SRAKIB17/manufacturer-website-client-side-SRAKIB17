import React, { useState } from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'
import ShowAllProduct from './ShowAllProduct';
import EditProductModal from './EditProductModal';
import DeleteModal from './DeleteModal';



const ManageProducts = () => {
    const [edit, setEdit] = useState(null);
    const [deleteP, setDelete] = useState(null);
    const [user] = useAuthState(auth);
    const { data, isLoading, refetch } = useQuery('adminAllProduct', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/all-product?email=${user.email}`));

   

    

    if (isLoading) {
        return <Loading />
    }
    const allProducts = data?.data || [];
    
   
   
    return (
        <div className="overflow-x-auto p-6">
            <table className="table table-zebra w-full">
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
                                <ShowAllProduct setEdit={setEdit} setDelete={setDelete} product={product} index={index} key={product._id}/>
                            </>)
                    }
                </tbody>

            </table>
            {
                deleteP && <DeleteModal key={deleteP} setDelete={{setDelete, deleteP, refetch}}/>
            }
            {
                edit && <EditProductModal key={edit}  setEdit={{setEdit, edit, refetch}}/>
            }
        </div>
    );
};

export default ManageProducts;