import React from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';

const SetRates = () => {
  return (
    <div>
      <PageTitles name="Richard" location="Set rates" />
      <PageMenus place="set_rates" />
      <Outlet />
    </div>
  )
}

export default SetRates
