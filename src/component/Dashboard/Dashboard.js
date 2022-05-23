import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './User/User.css'

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col p-3 m-4">
                    {/* <label for="dashboard" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet />
                </div>


                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-gray-300">
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                        <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;