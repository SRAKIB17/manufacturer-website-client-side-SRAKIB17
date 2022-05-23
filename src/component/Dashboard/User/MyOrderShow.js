import React from 'react';

const MyOrderShow = ({ product,index }) => {

    const { name, image, discount_price, category} = product
    return (

        <tr>
            <th>{index+1}</th>
            <td><img src={image} className='w-8 md:w-10 rounded-full' alt="" /></td>
            <td>{name.slice(0,20)}...</td>
            <td>{category}</td>
            <td>{discount_price}</td>
            <td>12/16/2020</td>
            <td>Blue</td>
        </tr>
    );
};

export default MyOrderShow;