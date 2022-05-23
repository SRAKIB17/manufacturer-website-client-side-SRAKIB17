import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './User/User.css'

const Dashboard = () => {
    return (
        <div>
            <label for="dashboard" class=" swap swap-rotate lg:hidden m-4">


                <input type="checkbox" />

                <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>
            <div class="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col p-3 m-4">

                    <Outlet />
                </div>


                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-gray-300">
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                        <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                        <li><Link to='/dashboard/my-order'>My Order</Link></li>

                        <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                        <li><Link to='/dashboard/users'>All User</Link></li>
                        <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;