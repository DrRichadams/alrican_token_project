import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({children}) => {

    const {user,routedata} = UserAuth();
    console.log("User Var", user);
    console.log("Route Var", routedata);
    // if(!user) return <Navigate to='/login' />
    if(routedata) {
        // if(routedata.hasProof) return <Navigate to='/verify4' />
        if(!routedata.isVerified) return <Navigate to='/verify1' />
        if(routedata.userType != "normal") return <Navigate to='/rerouter' />
        return children;
    }
}

export default ProtectedRoute;