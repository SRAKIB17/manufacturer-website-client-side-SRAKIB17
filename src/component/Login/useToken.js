import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token , setToken] = useState('')
    useEffect(() => {

        const tokenGet = async () => {
            const email = user?.email;
            localStorage.removeItem('tokenVerify')
            if (email) {
                const { data } = await axios.get(`http://localhost:5000/login?email=${email}`)
                localStorage.setItem('tokenVerify', data.token)
                if(data.token){
                    setToken(true)
                }
            }
        }
        tokenGet()
    }, [user])
    return token;
};

export default useToken;