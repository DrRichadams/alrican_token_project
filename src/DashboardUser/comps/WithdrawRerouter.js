import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';

const WithdrawRerouter = () => {
    const location = useLocation();
    const {withdrawRequest} = UserAuth();
    console.log("Rerouting", location)

    if(withdrawRequest.isEligible) return <Navigate to="/user_dash/withdrawCoins" state={location}/>
    if(!withdrawRequest.isEligible) return <Navigate to="/user_dash/withdraw_receipt" />
}

export default WithdrawRerouter
