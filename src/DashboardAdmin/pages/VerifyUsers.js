import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import MenuBtn from '../features/MenuBtn';
import { USERS } from '../../constants/DATA';

const VerifyUsers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <VerifyContainer>
      <PageTitles name="Richard" location="Approve new users" />
      <PageMenus>
          <ControlsContainer>
              <MenuBtn title="Potentially paid accounts" active={location.pathname.includes("potentially_paid")} link="" clickable={() => navigate("potentially_paid")} />
              <MenuBtn title="Unpaid accounts" active={location.pathname.includes("unpaid_accounts")} link="" clickable={() => navigate("unpaid_accounts")} />
              <MenuBtn title="All accounts" active={location.pathname.includes("all_accounts")} link="" clickable={() => navigate("all_accounts")} />
          </ControlsContainer>
          <AllAccountsBadge>Total accounts | {USERS.length}</AllAccountsBadge>
      </PageMenus>
      <OutletContainer>
          <Outlet />
      </OutletContainer>
    </VerifyContainer>
  )
}


export const OutletContainer = styled.div`
    /* background-color: red; */
    overflow-y: scroll;
    width: 100%;
    height: 100%;
`;
export const AllAccountsBadge = styled.div`
    color: #fff;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
`;

export const ControlsContainer = styled.div`
    display: flex;
    gap: 30px;
`;
export const PageMenus = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0 20px 0;
`;
export const VerifyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-color: blue; */
`;

export default VerifyUsers
