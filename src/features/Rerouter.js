import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const Rerouter = () => {
    const navigate = useNavigate();
    const {logout} = UserAuth();
    const handleLogout = async () => {
        await logout();
        console.log("Logged out from rerouter!");
        navigate('/login')
    }
    return(
        <div>
            Authenticated
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}

export default Rerouter;