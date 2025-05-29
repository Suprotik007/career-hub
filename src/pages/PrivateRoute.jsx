import React, { use, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    
    if(!user){
       return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children;
    
};

export default PrivateRoute;