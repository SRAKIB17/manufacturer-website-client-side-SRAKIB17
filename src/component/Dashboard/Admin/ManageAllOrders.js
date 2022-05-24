import React from 'react';


const ManageAllOrders = () => {
    const myProduct = [
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            total_price: 29,
            userMail: 'rakibulsscreojdflsdf'

        },
        
    ]
    return (
        <div class="overflow-x-auto p-6">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // myProduct.map((product, index) => <MyOrderShow product={product} index={index} key={product._id} />)
                    }
                </tbody>
                {/* <tr>
                    <th>{index + 1}</th>
                    <td><img src={image} className='w-8 md:w-10 rounded-full' alt="" /></td>
                    <td>{name.slice(0, 20)}...</td>
                    <td>{category}</td>
                    <td>{discount_price}</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                </tr> */}
            </table>

        </div>

    );
};

export default ManageAllOrders;
