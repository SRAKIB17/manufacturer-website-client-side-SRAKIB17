import React, { useEffect, useId, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Name = ({ register, errors, product }) => {
    const [userInfo, setUserInfo] = useState();
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            setUserInfo(user)

        }
    }, [user])

    const changeState = () => {
        setUserInfo('')
    }
    return (
        <div className=' max-w-xs w-full'>
            <input
                onKeyUp={changeState}
                type='text'
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    }

                })}
                placeholder="Name"
                className="input input-bordered input-accent w-full m-2"
                value={userInfo?.displayName}
            />
            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.name.message}</span>}


        </div>
    );
};

export default Name;