import React, { useEffect, useState } from 'react';
import { get, useForm } from "react-hook-form";
import auth from '../../firebase.init';
import google from './google.svg';

import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { async } from '@firebase/util';

const Login = () => {
    const [registerForm, setRegisterFrom] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [ResetPass, setResetPass] = useState(false);

    const location = useLocation()
    const from = location?.state?.from || '/'



    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    useEffect(() => {
        const getUser = async () => {
            if (user) {
                navigate(from)
                const userInfo = {
                    email: user?.email,
                    uid: user?.uid,
                    name: user?.displayName,
                    img: user?.photoURL
                }
                await axios.post(`http://localhost:5000/user?email=${user?.email}}`,userInfo)
            }
        }
        getUser()
    }, [user, from, navigate])
    // -------------------------for create user by email password =-------------------------
    const [
        createUserWithEmailAndPassword,
        user4,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userG, loading3, error3] = useSignInWithGoogle(auth);


    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(auth);

    const [updateProfile, updating, error5] = useUpdateProfile(auth);

    const onSubmit = async data => {
        const { email, password, name } = data
        if (registerForm && !ResetPass) {
            signInWithEmailAndPassword(email, password)
        }
        else if (!registerForm) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({
                displayName: name
            })
            toast.success('Successfully register')
        }
        else if (ResetPass) {
            sendPasswordResetEmail(email)
        }
    }

    let getErr;
    if (error || error1 || error3 || error4 || error5) {
        const err = error?.message || error1?.message || error3?.message || error4?.message || error5?.message
        getErr = err.split('/')[1].slice(0, err.split('/')[1].length - 2).split('-').join(' ')
    }
    else {
        getErr = ''
    }

    // for google log in 


    const handleResetPass = () => {
        setResetPass(true)
    }
    const handleRegister = () => {
        setRegisterFrom(!registerForm)
        setResetPass(false)
    }
    return (
        <div className='p-6 m-3 w-80  mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <h1 className='text-3xl text-center text-primary'> {ResetPass ? "Reset Password" : 'Please ' + (registerForm ? 'Login' : 'Register  ')}</h1>
                <p style={{ textTransform: 'uppercase' }} className='text-red-400 p-2'>{getErr}</p>
                {
                    (registerForm || ResetPass) ||
                    <>

                        <input
                            type='text'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                            placeholder="Name"
                            className="input input-bordered input-accent w-full m-2 max-w-xs w-full"
                        />
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.name.message}</span>}
                    </>
                }

                <input
                    type='email'
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                    placeholder="Email"
                    className="input input-bordered input-accent w-full m-2 max-w-xs w-full"
                />
                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.email.message}</span>}

                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'> {errors.email.message}</span>}

                {
                    ResetPass ||
                    <>

                        <input
                            type='password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer"
                                }
                            })}
                            placeholder="Password"
                            className="input input-bordered input-accent  m-2 w-full max-w-xs w-full"
                        />
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </>
                }

                <input type="submit" value={ResetPass ? 'Reset Password' : (registerForm ? 'Login' : 'Register')} className='btn btn-secondary  m-2 text-white w-full' />
                {
                    ResetPass || <button onClick={handleResetPass} className='text-right'>Reset Password</button>
                }
            </form>
            <div className="divider">OR</div>
            {
                ResetPass ||
                <div>
                    <button onClick={() => signInWithGoogle()} className='flex items-center btn  w-full' ><img src={google} alt="" /><span> Sign {registerForm ? 'in' : 'up'} with Google</span></button>
                </div>
            }
            <div>
                <button onClick={handleRegister} className='text-right'>{registerForm ? 'New here ,Create account' : 'Already Have account Login'}</button>
            </div>


        </div>
    );
};

export default Login;