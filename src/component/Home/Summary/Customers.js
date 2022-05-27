import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';
const Customers = ({ props: data }) => {

    return (
        <div className='overflow-auto w-[300px] sm:w-full'>
            <h1 className='text-2xl text-white text-center m-2'>Total Customer</h1>
            <div className='flex lg:justify-center mx-auto' >
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="year" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <Legend width={100} wrapperStyle={{ top: 5, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="Users" fill="#8884d8" barSize={30} />
                </BarChart>




                <LineChart width={600} height={300} data={data}>
                    <Tooltip />
                    <Line type="monotone" dataKey="Users" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="year" />
                    <YAxis />
                </LineChart>

            </div>

        </div>

    )
};

export default Customers;