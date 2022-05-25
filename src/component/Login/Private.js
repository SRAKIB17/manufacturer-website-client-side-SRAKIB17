import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Private = ({ children }) => {
    const location = useLocation()

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location.pathname }} />
    }
    return children
};

export default Private;