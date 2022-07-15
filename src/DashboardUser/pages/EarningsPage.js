import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { selectedLink, unselectedLink } from "../features/UserDashStyledComponents";
import { colors } from "../../constants/colors";

const EarningsPage = () => {
    return(
        <EarningsContainer>
            <EarningsSeperator>
                <Outlet />
            </EarningsSeperator>
        </EarningsContainer>
    )
}



export const EarningsSeperator = styled.div`
    width: 100%;
    min-height: 100vh;
    /* background-color: red; */
    margin-top: 30px;
`;
export const EarningsNavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
export const EarningsContainer = styled.div`

`;

export default EarningsPage