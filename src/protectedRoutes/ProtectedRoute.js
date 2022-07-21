import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({children}) => {

    const {user,routedata} = UserAuth();
    console.log("User Var", user);
    console.log("Route Var", routedata);
    // if(!user) return <Navigate to='/login' />
    if(!routedata?.isVerified) return <Navigate to='/verify' />

    return children;
}

export default ProtectedRoute;