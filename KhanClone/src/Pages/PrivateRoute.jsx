import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
       const {
           authState : {isAuth},
       } = useContext(AuthContext)

       return isAuth ? children : <Navigate to ="/register"/>
}
export default PrivateRoute