import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';
import MenuBtn from '../features/MenuBtn';
import { USERS } from '../../constants/DATA';
import { UserAuth } from '../../contexts/AuthContext';

const VerifyUsers = () => {
  const {userdata} = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <VerifyContainer>
      <PageTitles location="Approve new users" />
      <PageMenus place="verify" />
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

export const VerifyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-color: blue; */
`;

export default VerifyUsers
