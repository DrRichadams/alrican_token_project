import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedConfig = ({children}) => {

    const {user,routedata} = UserAuth();
    if(!user) return <Navigate to='/login' />

    return children;
}

export default ProtectedConfig;