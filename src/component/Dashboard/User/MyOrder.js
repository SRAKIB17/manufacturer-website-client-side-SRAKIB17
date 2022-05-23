import React from 'react';
import MyOrderShow from './MyOrderShow';

const MyOrder = () => {
    const myProduct = [
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
            category: 'black'
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity: 300,
            price: 29,
            discount_price: 20,
            category: 'black'
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity: 300,
            price: 29,
            discount_price: 20,
            category: 'black'
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity: 300,
            price: 29,
            discount_price: 20,
            category: 'black'
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
                        myProduct.map((product, index) => <MyOrderShow product={product} index={index} key={product._id} />)
                    }
                </tbody>

            </table>

        </div>

    );
};

export default MyOrder;