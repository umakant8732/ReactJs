import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";




function ProtectRoutes({allowedRoles = []}) {

    const {userInfo} = useSelector((state) => state.authReducer)
    const isAuthorized = userInfo && allowedRoles.includes(userInfo.role);
    return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />
    
}

export default ProtectRoutes
