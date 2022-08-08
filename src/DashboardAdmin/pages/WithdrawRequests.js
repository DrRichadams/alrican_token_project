import React from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';

const WithdrawRequests = () => {
  return (
    <WithdrawRequestsContainer>
      <PageTitles name="Richard" location="Approve or decline withdraw requests" />
      <PageMenus place="withdraw_requests" />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </WithdrawRequestsContainer>
  )
}

export const OutletContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-auto-rows: 180px; */
  gap: 20px;
  row-gap: 50px;
`;
export const WithdrawRequestsContainer = styled.div`
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default WithdrawRequests
