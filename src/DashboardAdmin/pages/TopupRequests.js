import React from 'react';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';

const TopupRequests = () => {
  return (
    <TopupRequestsContainer>
      <PageTitles name="Admin" location="Respond to alrican token Top up requests" />
      <PageMenus place="top_up_requests" />
      <Outlet />
    </TopupRequestsContainer>
  )
}


export const TopupRequestsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default TopupRequests
