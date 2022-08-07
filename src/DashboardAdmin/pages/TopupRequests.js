import React from 'react';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';

const TopupRequests = () => {
  return (
    <div>
      <PageTitles name="Richard" location="Respond to Top up requests" />
      <PageMenus place="top_up_requests" />
      <Outlet />
    </div>
  )
}

export default TopupRequests
