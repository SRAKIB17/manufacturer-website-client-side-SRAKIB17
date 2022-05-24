import React from 'react';
import deleteP from '../svg/delete.svg'
import edit from '../svg/edit.svg'



const ShowAllProduct = ({ product, index, setEdit, setDelete }) => {

    return (

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
            <td><label
                onClick={() => setEdit(product._id)}
                for="editModal"
                className='btn border-none bg-success btn-xs'>
                <img src={edit} alt="" />
            </label>
            </td>

            <td><label
                for="deleteModal"
                onClick={() => setDelete(product._id)}
                className='btn border-none bg-red-600 btn-xs'>
                <img src={deleteP} alt="" />
            </label>
            </td>
        </tr>
    );
};

export default ShowAllProduct;

