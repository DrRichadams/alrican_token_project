import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';

const AffiliatesRerouter = () => {
    const location = useLocation();
    const {affiliatesRequest} = UserAuth();
    console.log("Rerouting", location)

    // if(withdrawRequest.isEligible) return <Navigate to="/user_dash/withdrawAffiliates" state={location}/>
    if(affiliatesRequest.isEligible) return <Navigate to="/user_dash/withdrawAffiliates"/>
    if(!affiliatesRequest.isEligible) return <Navigate to="/user_dash/affiliates_receipt" />
}

export default AffiliatesRerouter
