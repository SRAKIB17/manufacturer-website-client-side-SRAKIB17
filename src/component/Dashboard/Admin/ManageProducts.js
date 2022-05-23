import React from 'react';
import deleteP from '../svg/delete.svg'
import edit from '../svg/edit.svg'
const ManageProducts = () => {

    const products = [
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity: 300,
            price: 29,
            discount_price: 20,
            category: 'black',
            newI: true
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity: 300,
            price: 29,
            discount_price: 20,
            category: 'black',
            newI: true
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity: 300,
            price: 29,
            discount_price: 20,
            category: 'black',
            newI: true
        },

    ]
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
                        products.map((product, index) =>
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