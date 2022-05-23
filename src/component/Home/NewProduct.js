import React from 'react';
import ShowProduct from './ShowProduct';

const NewProduct = () => {
    const newProduct = [
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity:300 , 
            price: 29,
            discount_price: 20,
            category: 'black',
            newI:true
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity:300 , 
            price: 29,
            discount_price: 20,
            category: 'black',
            newI:true
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity:300 , 
            price: 29,
            discount_price: 20,
            category: 'black'
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity:300 , 
            price: 29,
            discount_price: 20,
            category: 'black'
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity:300 , 
            price: 29,
            discount_price: 20,
            category: 'black'
        },
        {
            name: 'Hummingbird Printed Sweater',
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            minimum_quantity: 4,
            total_quantity:300 , 
            price: 29,
            discount_price: 20,
            category: 'black'
        },
    ]
    return (
        <div className='mt-4 mb-4'>
            <h1 className='text-3xl m-4 font-bold text-black'>🔘 New Product</h1>
            <div className='p-6 m-4 grid-cols-1 grid md:grid-cols-3 gap-2 items-center justify-center'>
                {
                    newProduct.map(product=><ShowProduct key={product._id} product={product}/>)
                }
            </div>
            <div className='text-right mr-2'>
                <button className='btn text-white'>Load More</button>
            </div>
        </div>
    );
};

export default NewProduct;