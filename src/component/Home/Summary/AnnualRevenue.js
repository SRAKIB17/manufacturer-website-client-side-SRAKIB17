import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';

const AnnualRevenue = ({props:data}) => {
    return (
        <div className='overflow-auto w-[300px] sm:w-full'>
            <h1 className='text-white text-2xl text-center m-4'>Annual Revenue</h1>
            <LineChart width={600} height={300} data={data}>
                    <Tooltip />
                    <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="year" />
                    <YAxis />
                </LineChart>
        </div>
    );
};

export default AnnualRevenue;