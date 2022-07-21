import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedAdmin = ({children}) => {
    const {user, routedata} = UserAuth();
    // const {isVerified,userType} = routedata;
    if(!user) return <Navigate to='/login' />
    if(!routedata.isVerified) return <Navigate to='/verify' />
    if(routedata.userType === "normal") return <Navigate to='/user_dash' />

    return children;
}

export default ProtectedAdmin;