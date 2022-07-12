import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { selectedLink, unselectedLink } from "../features/UserDashStyledComponents";
import { colors } from "../../constants/colors";


const commonEarnLinkStyles = {
    textDecoration: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: colors.accent,
    padding: '8px 15px',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '120px',
    textAlign: 'center'
}
const selectedEarnLink = {
    ...commonEarnLinkStyles,
    backgroundColor: colors.accent,
    color: colors.bg_color,
};
const unSelectedEarnLink = {
    ...commonEarnLinkStyles,
    backgroundColor: 'transparent',
    color: colors.accent
};

const EarningsPage = () => {
    return(
        <EarningsContainer>
            <EarningsNavBar>
                <NavLink to="" style={({isActive}) => isActive ? selectedEarnLink:unSelectedEarnLink}>DIVIDENTS</NavLink>
                <NavLink to="affiliates" style={({isActive}) => isActive ? selectedEarnLink:unSelectedEarnLink}>AFFILIATES</NavLink>
            </EarningsNavBar>
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