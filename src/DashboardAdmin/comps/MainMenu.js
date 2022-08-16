import React from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import UserProfile from '../features/UserProfile';
import { colors } from '../../constants/colors';
import MenuBtn from '../features/MenuBtn';

const MainMenu = () => {
    const location = useLocation();
  return (
    <MenuContainer>
        <Brand>ALRICAN TOKEN</Brand>

        <AdminControlsTitle>Admin Controls</AdminControlsTitle>
        <AdminControls>
            <MenuBtn title="Dashboard" type="a" active={location.pathname.includes("dashboard")} link=""  />
            <MenuBtn title="Verify Users" type="b" active={location.pathname.includes("verify_users")} link="verify_users" />
            <MenuBtn title="Withdraw Requests" type="c" active={location.pathname.includes("withdraw_requests")} link="withdraw_requests" />
            <MenuBtn title="Set Rates" type="d" active={location.pathname.includes("set_rates")} link="set_rates" />
            <MenuBtn title="Top up requests" type="e" active={location.pathname.includes("top_up_requests")} link="top_up_requests" />
            <MenuBtn title="Ts & Cs" type="f" active={location.pathname.includes("terms_conditions")} link="terms_conditions" />
        </AdminControls>
      <BottomUser><UserProfile /></BottomUser>
    </MenuContainer>
  )
}


export const AdminControlsTitle = styled.p`
    margin: 0;
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 8px 20px;
    color: rgba(192,192,192,1);
    font-family: Roboto, sans-serif;
    font-size: 14px;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        width: 90%;
        height: 2px;
        background-color: rgba(192,192,192,0.2);
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }
`;

export const AdminControls = styled.div`

`;


export const Brand = styled.h2`
    margin: 0;
    padding: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    color: ${colors.accent};
    text-transform: uppercase;
    font-size: 20px;
`;

export const BottomUser = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
`;

export const MenuContainer = styled.div`
    /* background-color: red; */
    /* width: 20vw; */
    width: 350px;
    height: 100vh;
    border-right: 2px solid rgba(192,192,192,0.2);
    position: relative;
    box-shadow: 3px 3px 24px rgba(0,0,0,0.4);
    box-sizing: border-box;
    /* padding: 20px; */
`;

export default MainMenu
