import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/header/logo.png'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import profile from '../../image/profile/headerProfile.svg';

const Header = () => {
    const [user] = useAuthState(auth);


    return (
        <div>
            <div className="navbar bg-primary text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'> Home</Link></li>
                            <li><Link to='/about'> My Portfolio</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>

                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>

                                    </> :
                                    <>
                                        <li><Link to='/login'> Login</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                    <a tabIndex="btn btn-ghost normal-case text-xl" className="ml-2" ><img src={logo} className="w-20" alt="" /></a>
                </div>

                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/about'> My Portfolio</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>

                                </> :
                                <>
                                    <li><Link to='/login'> Login</Link></li>
                                </>
                        }



                    </ul>
                </div>


                <div className="navbar-end">
                    <div className="navbar-end bg-primary">

                        <div className="flex p-2 gap-2 text-black items-center">
                            {/* <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered lg:static md:static lg:w-full absolute right-[170px]  w-40" />
                            </div> */}
                            {
                                user ? <>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                            <div className=" avatar online rounded-full">

                                                <img src={(user?.photoURL) ? user.photoURL : profile} className='w-10' />

                                            </div>
                                        </label>
                                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link to='/dashboard/profile' className="justify-between">
                                                    Profile

                                                </Link>
                                            </li>
                                            <li><Link to='/dashboard'>Dashboard</Link></li>
                                            <li><button onClick={() => signOut(auth)}> Logout</button></li>
                                        </ul>
                                    </div>
                                </> :
                                    <>
                                        <Link to='/login'><img src={profile} alt="" /></Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;