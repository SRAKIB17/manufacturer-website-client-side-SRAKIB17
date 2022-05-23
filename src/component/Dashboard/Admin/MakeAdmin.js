import React from 'react';

const MakeAdmin = () => {

    const users = [
        {
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            name: 'werwerwerwer',
            email: 'rerererewr'
        },
        {
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            name: 'werwerwerwer',
            email: 'rerererewr'
        },
        {
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            name: 'werwerwerwer',
            email: 'rerererewr'
        },
        {
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            name: 'werwerwerwer',
            email: 'rerererewr'
        },
        {
            image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
            name: 'werwerwerwer',
            email: 'rerererewr'
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
                        <th>Email</th>
                        <th>Access</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, index) =>
                            <>
                                <tr key={u._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={u.image} className='w-8 md:w-10 rounded-full' alt="" /></td>
                                    <td>{u.name.slice(0, 20)}...</td>
                                    <td>{u.email}</td>
                                    <td><button className='btn-secondary btn btn-xs text-white'>Make Admin</button></td>
                                    <td><button className='btn bg-red-500 btn-xs text-white focus:bg-red-400 active:bg-red-500 border-none'>Delete</button></td>
                                </tr>
                            </>)
                    }
                </tbody>

            </table>

        </div>
    );
};

export default MakeAdmin;