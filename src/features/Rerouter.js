import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import Spinner from "../Spinner";

const Rerouter = () => {
    const {routedata} = UserAuth();
    if(routedata) {
        if(!routedata.isVerified) return <Navigate to='/verify1' />
        if(routedata.userType == "normal") return <Navigate to='/user_dash' />
        if(routedata.userType == "admin") return <Navigate to='/admin_dash' />
    }
    return<Spinner /> 
}

export default Rerouter;