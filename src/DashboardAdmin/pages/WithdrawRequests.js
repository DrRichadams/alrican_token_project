import React from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';

const WithdrawRequests = () => {
  return (
    <div>
      <PageTitles name="Richard" location="Approve or decline withdraw requests" />
      <PageMenus place="withdraw_requests" />
      <Outlet />
    </div>
  )
}

export default WithdrawRequests
