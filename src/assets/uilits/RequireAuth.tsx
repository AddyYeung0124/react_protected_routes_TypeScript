import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import {AuthProviderContext } from '../../context/AuthProvider'

const RequireAuth = () => {

    const { auth } = useContext(AuthProviderContext);
    const location = useLocation();
    const LocalAuth = localStorage.getItem("userstates");
    
    return (
        auth.username || LocalAuth === "true"?
            <Outlet />
        :  <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;