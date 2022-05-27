import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';

const Default = ({ props: data }) => {
    return (


        <div className='overflow-auto overflow-x-auto overflow-auto w-[300px] sm:w-full'>
            <h1 className='text-center text-white text-2xl m-2'>Total Review</h1>

            <div className='flex gap-4  md:flex-row' >
                <div >
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="default" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <Legend width={100} wrapperStyle={{ top: 5, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="Total" fill="#8884d8" barSize={30} />
                    </BarChart>
                </div>
                <div className="">
                    <table className="table mx-auto w-full">
                        <tbody>

                            <tr>

                                <td>Customer  </td>
                                <td>100+ </td>

                            </tr>

                            <tr className="active">

                                <td>Annual revenue</td>
                                <td>120M+</td>

                            </tr>

                            <tr>

                                <td>Reviews</td>
                                <td>33K+</td>

                            </tr>
                            <tr>

                                <td>Tools</td>
                                <td>50+</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Default;